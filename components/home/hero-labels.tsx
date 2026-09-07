import type { CSSProperties } from "react";
import { heroLabels } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

/**
 * Scattered service stickers behind the hero headline.
 *
 * Each one settles in on load and then drifts on its own slow loop — the
 * stagger and the float length are derived from the index so no two stickers
 * ever move in unison, which is what keeps it feeling like paper rather than
 * a carousel.
 */
export function HeroLabels() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {heroLabels.map((item, index) => (
        <span
          key={item.id}
          style={
            {
              "--enter-delay": `${260 + index * 90}ms`,
              "--float-duration": `${6.5 + (index % 3) * 1.1}s`,
            } as CSSProperties
          }
          className={cn(
            "animate-sticker absolute whitespace-pre-line rounded-sm px-2 py-0.5 text-center font-serif text-[11px] leading-tight md:px-3 md:py-1 md:text-sm",
            item.tone,
            item.position,
          )}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
