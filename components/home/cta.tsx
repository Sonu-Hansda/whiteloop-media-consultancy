import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { GridBackdrop } from "@/components/ui/grid-backdrop";
import { bookCta, freeSessionCta } from "@/lib/data/cta";

export function Cta() {
  return (
    <Section>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-20 text-center sm:px-12">
          <GridBackdrop on="dark" fade="center" />

          <div className="relative flex flex-col items-center gap-6">
            <Badge variant="accent">
              10 free sessions — application closing soon
            </Badge>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-display text-background sm:text-5xl">
              Stop posting into the void, build the system instead
            </h2>

            <p className="max-w-xl text-base text-background/70 sm:text-lg">
              Apply for a free session, or book straight in at $149.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button href={bookCta.href} variant="accent" size="lg">
                {bookCta.label}
              </Button>
              <Button
                href={freeSessionCta.href}
                variant="outlineLight"
                size="lg"
              >
                {freeSessionCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Section>
  );
}
