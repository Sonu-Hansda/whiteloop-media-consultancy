"use client";

import {
  SelectedCheck,
  SessionCardBody,
  sessionCardShell,
} from "@/components/sessions/session-card-body";
import { sessionPackages } from "@/lib/data/packages";
import { cn } from "@/lib/utils";

export const NOT_SURE_YET = "Not sure yet";

/** Focus ring is driven by the visually-hidden radio that precedes the card. */
const cardFocusClass =
  "peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2";

/** Escape hatch for applicants who don't yet know which session they need. */
function NotSureCard({
  selected,
  className,
}: {
  selected: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        sessionCardShell,
        "border border-dashed border-white/25",
        selected && "ring-2 ring-accent ring-offset-2",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[10px] font-medium text-white/80">
          Help me choose
        </span>
        {selected ? <SelectedCheck /> : null}
      </div>

      <h3 className="mt-2 text-lg font-semibold tracking-tight">
        {NOT_SURE_YET}
      </h3>

      <p className="mt-2 text-[11px] leading-[1.45] text-white/70">
        Not sure which one fits? Describe your challenge below and we&apos;ll
        point you at the right session.
      </p>
    </div>
  );
}

/**
 * Single-select grid of the four session cards, with a full-width "not sure"
 * card underneath. Reuses the same card body as the home grid, and is backed
 * by real radio inputs so keyboard and screen-reader behaviour comes for free.
 */
export function SessionPicker({
  value,
  onChange,
  name = "sessionInterest",
}: {
  value: string;
  onChange: (value: string) => void;
  name?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Which session interests you most?"
      className="grid gap-3 sm:grid-cols-2"
    >
      {sessionPackages.map((session) => (
        <label key={session.slug} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={session.name}
            checked={value === session.name}
            onChange={() => onChange(session.name)}
            className="peer sr-only"
          />
          <SessionCardBody
            session={session}
            selected={value === session.name}
            className={cardFocusClass}
          />
        </label>
      ))}

      <label className="cursor-pointer sm:col-span-2">
        <input
          type="radio"
          name={name}
          value={NOT_SURE_YET}
          checked={value === NOT_SURE_YET}
          onChange={() => onChange(NOT_SURE_YET)}
          className="peer sr-only"
        />
        <NotSureCard
          selected={value === NOT_SURE_YET}
          className={cardFocusClass}
        />
      </label>
    </div>
  );
}
