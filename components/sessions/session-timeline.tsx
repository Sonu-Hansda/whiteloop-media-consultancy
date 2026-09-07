import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SessionPackage } from "@/types";

export function SessionTimeline({ session }: { session: SessionPackage }) {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-display text-foreground sm:text-3xl">
            Inside the 2 hours
          </h2>
          <div className="mt-8">
            {session.timeline.map((item) => (
              <div
                key={item.time}
                className="flex flex-col gap-1 border-t border-border py-5 last:border-b sm:flex-row sm:gap-6"
              >
                <div className="w-24 shrink-0 text-[13px] font-medium text-muted-foreground">
                  {item.time}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
