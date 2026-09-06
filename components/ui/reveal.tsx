"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades its children up once they scroll into view.
 *
 * Visibility is flipped by toggling a data attribute on the DOM node rather
 * than through React state — the effect only ever talks to the observer and
 * the element, so there is no cascading re-render on reveal.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible="false"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "translate-y-6 opacity-0 transition-all duration-700 ease-out will-change-transform",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
