"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What if I don’t have a following yet?",
    a: "Doesn't matter. Session 1 starts from zero — positioning and pillars come before audience size.",
  },
  {
    q: "What if I’m not techy?",
    a: "The AI clone session is built for non-technical founders. You highlight a script, the system does the rest.",
  },
  {
    q: "Can I book just one session, or do I need the full program?",
    a: "Each session stands alone. The Content Mastery Program is only worth it if you want all four done together.",
  },
  {
    q: "What’s your refund policy?",
    a: "If you no-show without notice, the session isn't refunded. Reschedules are fine with 24 hours' notice.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
        <Reveal>
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <Badge>FAQ</Badge>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Before you book
            </h2>
          </div>

          {/* FAQ List */}
          <div className="mx-auto mt-14 max-w-3xl">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.q}
                  className="border-b border-border"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-sm font-semibold text-foreground sm:text-base">
                      {faq.q}
                    </span>

                    {/* Plus / Minus */}
                    <span
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground"
                      aria-hidden="true"
                    >
                      <span className="absolute h-px w-3 bg-current" />

                      <span
                        className={cn(
                          "absolute h-3 w-px bg-current transition-transform duration-200",
                          isOpen ? "scale-y-0" : "scale-y-100"
                        )}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Section>
  );
}