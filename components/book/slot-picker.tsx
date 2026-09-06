"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/book/calendar";
import {
  computeBlockedSlots,
  generateSlots,
  getBookedSlotIds,
  type Slot,
} from "@/lib/slots";

export function SlotPicker({
  selected,
  onSelect,
}: {
  selected?: string;
  onSelect: (slot: Slot) => void;
}) {
  const slots = useMemo(() => generateSlots(), []);
  const [booked, setBooked] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const dates = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const slot of slots) {
      const list = map.get(slot.date) ?? [];
      list.push(slot);
      map.set(slot.date, list);
    }
    return Array.from(map.entries());
  }, [slots]);

  const minDate = dates[0]?.[0];
  const maxDate = dates[dates.length - 1]?.[0];

  const [dateKey, setDateKey] = useState<string>(minDate ?? "");

  useEffect(() => {
    let active = true;
    getBookedSlotIds()
      .then((ids) => active && setBooked(ids))
      .catch(() => active && setLoadError(true))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const blocked = useMemo(() => computeBlockedSlots(booked), [booked]);

  const daySlots = useMemo(
    () => slots.filter((slot) => slot.date === dateKey),
    [slots, dateKey],
  );

  const selectedDateLabel = daySlots[0]?.dateLabel;

  if (loading) {
    return <p className="text-sm text-muted-foreground">Loading availability…</p>;
  }

  if (loadError) {
    return (
      <p className="text-sm font-medium text-red-600">
        We couldn&apos;t load available slots. Please refresh and try again.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        selectedDate={dateKey}
        onSelect={setDateKey}
        minDate={minDate}
        maxDate={maxDate}
      />

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {selectedDateLabel ?? "Available times"}
        </p>
        <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
          {daySlots.map((slot) => {
            const taken = blocked.has(slot.id);
            const active = selected === slot.id;

            return (
              <button
                key={slot.id}
                type="button"
                disabled={taken}
                onClick={() => onSelect(slot)}
                className={cn(
                  "rounded-xl border px-3 py-2 text-sm font-medium transition-colors",
                  taken
                    ? "cursor-not-allowed border-border bg-surface text-muted-foreground/40 line-through"
                    : active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-surface text-foreground hover:border-foreground/30",
                )}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
