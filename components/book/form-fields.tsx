import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-foreground">
        {label}
        {hint ? (
          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
            {hint}
          </span>
        ) : null}
      </span>
      {children}
    </div>
  );
}

export function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-4 py-2 text-[13px] font-medium transition-colors",
            value === option
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-surface text-foreground hover:border-foreground/30",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
