import { heroLabels } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

/** Scattered service stickers behind the hero headline. Desktop only. */
export function HeroLabels() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden="true"
    >
      {heroLabels.map((item) => (
        <span
          key={item.id}
          className={cn(
            "absolute whitespace-pre-line rounded-sm px-3 py-1 text-center font-hand text-sm",
            item.className,
          )}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
