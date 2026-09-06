import type { ReactNode } from "react";
import { CheckIcon } from "@/components/ui/check-icon";
import { cn } from "@/lib/utils";
import type { SessionPackage } from "@/types";

/**
 * Shared shell for every session card, so the home grid and the free-session
 * picker stay one design. The shell owns the look only — size comes from the
 * parent grid track, so a short card (like "not sure yet") can opt out of the
 * full card height.
 */
export const sessionCardShell =
  "flex h-full flex-col rounded-2xl bg-black p-6 text-white transition-all duration-200";

/** Lime tick shown on the card the applicant has chosen. */
export function SelectedCheck() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
      <CheckIcon className="h-3 w-3" />
    </span>
  );
}

export function SessionCardBody({
  session,
  selected = false,
  footer,
  className,
}: {
  session: SessionPackage;
  /** Draws the accent ring + tick. Used by the picker, not the home grid. */
  selected?: boolean;
  /** Optional call-to-action rendered under the price. */
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        sessionCardShell,
        "min-h-[270px]",
        selected && "ring-2 ring-accent ring-offset-2",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[10px] font-medium text-white/80">
          {session.number} - {session.duration}
        </span>
        {selected ? <SelectedCheck /> : null}
      </div>

      <h3 className="mt-2 text-lg font-semibold tracking-tight">
        {session.name}
      </h3>

      <div className="mt-5">
        <p className="text-xs font-medium text-white/90">
          This session is for you if:
        </p>
        <p className="mt-1 text-[11px] leading-[1.45] text-white/70">
          {session.cardDescription}
        </p>
      </div>

      <div className="mt-auto pt-8">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold">{session.price}</span>
          <span className="text-[10px] text-white/50 line-through">
            {session.originalPrice}
          </span>
        </div>
        {footer}
      </div>
    </div>
  );
}
