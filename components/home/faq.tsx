"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What exactly do I get in 4 sessions?",
    a: "Placeholder answer — we’ll refine this section soon.",
  },
  {
    q: "Do I need to be technical?",
    a: "Placeholder answer — we’ll refine this section soon.",
  },
  {
    q: "How soon will I see results?",
    a: "Placeholder answer — we’ll refine this section soon.",
  },
  {
    q: "What if it doesn’t fit my business?",
    a: "Placeholder answer — we’ll refine this section soon.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to the questions founders ask us most."
          />
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div
                  key={faq.q}
                  className="border-b border-border last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-foreground">
                      {faq.q}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}