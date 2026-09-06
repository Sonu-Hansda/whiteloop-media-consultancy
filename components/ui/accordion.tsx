"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: string;
};

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div key={item.title} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-sm font-semibold text-foreground sm:text-base">
                {item.title}
              </span>

              <span
                className="relative flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground"
                aria-hidden="true"
              >
                <span className="absolute h-px w-3 bg-current" />
                <span
                  className={cn(
                    "absolute h-3 w-px bg-current transition-transform duration-200",
                    isOpen ? "scale-y-0" : "scale-y-100",
                  )}
                />
              </span>
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted-foreground">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
