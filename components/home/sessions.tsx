import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SessionCard } from "@/components/home/session-card";
import { masteryPackage, sessionPackages } from "@/lib/data/packages";

export function Sessions() {
  return (
    <Section id="sessions">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Sessions</Badge>

            <h2 className="mt-4 text-3xl font-semibold tracking-display text-foreground sm:text-4xl lg:text-5xl">
              Pick Your Problem
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Pick the session that matches your exact situation or grab the
              full program and fix everything.
            </p>
          </div>

          <div className="mt-[clamp(1.5rem,4vh,3.5rem)] grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {sessionPackages.map((session) => (
              <SessionCard key={session.slug} session={session} />
            ))}
          </div>

          {/* Featured program */}
          <div className="mt-2 rounded-2xl bg-accent p-6 text-black sm:p-7 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <Badge>Most Recommended</Badge>

                <h3 className="mt-4 text-2xl font-semibold tracking-display sm:text-3xl">
                  {masteryPackage.name}
                </h3>

                <p className="mt-1 text-sm text-black/70">
                  {masteryPackage.description}
                </p>

                <p className="mt-4 text-xs font-medium">
                  {masteryPackage.cardDescription}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold">
                    {masteryPackage.price}
                  </span>
                  <span className="text-xs text-black/50 line-through">
                    {masteryPackage.originalPrice}
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/book?session=${masteryPackage.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-accent transition-transform duration-200 hover:scale-[1.02]"
                >
                  Book the Program
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
  );
}
