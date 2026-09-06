import {
  collection,
  doc,
  getDocs,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Qualification } from "@/types";

export const SLOT_START_HOUR = 13; // 1:00 PM
export const SLOT_END_HOUR = 22; // 10:00 PM (last slot ends here)
export const SLOT_MINUTES = 120; // 2-hour sessions
export const SLOT_HOURS = SLOT_MINUTES / 60;
export const SLOT_DAYS = 14; // offer the next 14 days
export const TIMEZONE = "Asia/Kolkata";

export type BookingInput = {
  name: string;
  email: string;
  packageSlug: string;
  packageName: string;
  packagePrice: string;
  kind?: "package" | "session";
} & Qualification;

export type Slot = {
  id: string; // e.g. "2026-09-07T11:00"
  date: string; // "2026-09-07"
  time: string; // "11:00"
  label: string; // "11:00 AM"
  dateLabel: string; // "Mon, 7 Sep"
};

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

function istParts(date: Date): {
  year: number;
  month: number;
  day: number;
  hour: number;
} {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");

  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour") % 24,
  };
}

function istDateKey(date: Date): string {
  const { year, month, day } = istParts(date);
  return `${year}-${pad(month)}-${pad(day)}`;
}

function addDays(dateKey: string, days: number): string {
  const [year, month, day] = dateKey.split("-").map(Number);
  const dt = new Date(Date.UTC(year, month - 1, day + days));
  return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(
    dt.getUTCDate(),
  )}`;
}

function formatHour(hour: number): string {
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  const meridiem = hour >= 12 ? "PM" : "AM";
  return `${h12}:00 ${meridiem}`;
}

function formatDateLabel(dateKey: string): string {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function generateSlots(days = SLOT_DAYS): Slot[] {
  const slots: Slot[] = [];
  const now = new Date();
  const { hour: todayHour } = istParts(now);
  const todayKey = istDateKey(now);

  for (let d = 0; d < days; d++) {
    const dateKey = addDays(todayKey, d);
    for (let h = SLOT_START_HOUR; h + SLOT_HOURS <= SLOT_END_HOUR; h++) {
      if (d === 0 && h <= todayHour) continue; // skip times already passed today
      const id = `${dateKey}T${pad(h)}:00`;
      slots.push({
        id,
        date: dateKey,
        time: `${pad(h)}:00`,
        label: formatHour(h),
        dateLabel: formatDateLabel(dateKey),
      });
    }
  }

  return slots;
}

export async function getBookedSlotIds(): Promise<Set<string>> {
  const snapshot = await getDocs(collection(db, "bookings"));
  const ids = new Set<string>();
  snapshot.forEach((docSnap) => ids.add(docSnap.id));
  return ids;
}

function parseSlotId(id: string): { date: string; hour: number } {
  const [date, time] = id.split("T");
  return { date, hour: Number(time.slice(0, 2)) };
}

// A 2-hour booking at hour H occupies [H, H+2). Any start S whose own
// 2-hour window overlaps it is blocked: S ∈ {H-1, H, H+1}.
export function computeBlockedSlots(bookedIds: Set<string>): Set<string> {
  const blocked = new Set<string>();
  for (const id of bookedIds) {
    const { date, hour } = parseSlotId(id);
    for (let s = hour - SLOT_HOURS + 1; s <= hour + SLOT_HOURS - 1; s++) {
      if (s >= SLOT_START_HOUR && s + SLOT_HOURS <= SLOT_END_HOUR) {
        blocked.add(`${date}T${pad(s)}:00`);
      }
    }
  }
  return blocked;
}

export async function bookSlot(slot: Slot, input: BookingInput) {
  const slotRef = doc(db, "bookings", slot.id);

  await runTransaction(db, async (transaction) => {
    const existing = await transaction.get(slotRef);
    if (existing.exists()) {
      throw new Error(
        "That time was just booked by someone else — please pick another.",
      );
    }

    transaction.set(slotRef, {
      ...input,
      roleOther: input.roleOther?.trim() || null,
      kind: input.kind ?? "package",
      slotId: slot.id,
      date: slot.date,
      time: slot.time,
      durationMinutes: SLOT_MINUTES,
      createdAt: serverTimestamp(),
    });
  });
}
