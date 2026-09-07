import { CheckIcon } from "@/components/ui/check-icon";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SessionPackage } from "@/types";

export function SessionOutcomes({ session }: { session: SessionPackage }) {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-display text-foreground sm:text-3xl">
            What you&apos;ll leave with
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            {session.outcomes.note}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {session.outcomes.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-foreground text-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
