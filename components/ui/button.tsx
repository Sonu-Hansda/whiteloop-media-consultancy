import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "accent"
  | "dark"
  | "white"
  | "outline"
  | "outlineLight"
  | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-accent-foreground hover:bg-accent/85",
  dark: "bg-foreground text-background hover:bg-foreground/85",
  white: "border border-border bg-white text-foreground hover:bg-surface",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  outlineLight:
    "border border-background/25 bg-transparent text-background hover:bg-background/10",
  ghost: "text-foreground hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export function Button({
  variant = "accent",
  size = "md",
  className,
  href,
  type = "button",
  disabled,
  onClick,
  children,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}