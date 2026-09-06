import { cn } from "@/lib/utils";

type GridBackdropProps = {
  /** The surface the grid sits on — decides dot colour. */
  on?: "light" | "dark";
  /** Where the grid dissolves. "none" leaves a hard edge. */
  fade?: "edges" | "top" | "center" | "none";
  className?: string;
};

const fadeClass = {
  edges: "grid-fade-edges",
  top: "grid-fade-top",
  center: "grid-fade-center",
  none: "",
} as const;

/**
 * Decorative dotted grid. Absolutely positioned, so the parent needs
 * `relative` and the content next to it needs to sit above the stack.
 */
export function GridBackdrop({
  on = "light",
  fade = "edges",
  className,
}: GridBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        on === "light" ? "bg-grid" : "bg-grid-light",
        fadeClass[fade],
        className,
      )}
    />
  );
}
