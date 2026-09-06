import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "outline";
type BadgeSize = "sm" | "md" | "lg";

const variants: Record<BadgeVariant, string> = {
  default: "bg-foreground text-accent",
  accent: "bg-accent text-accent-foreground",
  outline: "border border-border bg-surface text-foreground",
};

const sizes: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-2 text-sm",
};

export function Badge({
  variant = "default",
  size = "md",
  className,
  children,
}: {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}