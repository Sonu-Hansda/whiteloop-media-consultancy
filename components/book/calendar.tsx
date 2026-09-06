"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function toKey(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
    2,
    "0",
  )}`;
}

export function Calendar({
  selectedDate,
  onSelect,
  minDate,
  maxDate,
}: {
  selectedDate?: string;
  onSelect: (date: string) => void;
  minDate?: string;
  maxDate?: string;
}) {
  const today = new Date();
  const todayKey =
    minDate ?? toKey(today.getFullYear(), today.getMonth(), today.getDate());

  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  function prevMonth() {
    setView((v) =>
      v.month === 0
        ? { year: v.year - 1, month: 11 }
        : { year: v.year, month: v.month - 1 },
    );
  }

  function nextMonth() {
    setView((v) =>
      v.month === 11
        ? { year: v.year + 1, month: 0 }
        : { year: v.year, month: v.month + 1 },
    );
  }

  return (
    <div className="rounded-2xl border border-border p-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
        >
          ‹
        </button>
        <span className="text-sm font-semibold text-foreground">
          {MONTHS[view.month]} {view.year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
        >
          ›
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((w) => (
          <span
            key={w}
            className="text-[11px] font-medium text-muted-foreground"
          >
            {w}
          </span>
        ))}

        {cells.map((day, index) => {
          if (day === null) {
            return <span key={`empty-${index}`} />;
          }

          const key = toKey(view.year, view.month, day);
          const disabled =
            (minDate !== undefined && key < minDate) ||
            (maxDate !== undefined && key > maxDate);
          const isToday = key === todayKey;
          const isSelected = key === selectedDate;

          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(key)}
              className={cn(
                "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                disabled
                  ? "cursor-not-allowed text-muted-foreground/30"
                  : isSelected
                    ? "bg-foreground text-background"
                    : isToday
                      ? "border border-foreground text-foreground"
                      : "text-foreground hover:bg-surface",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
