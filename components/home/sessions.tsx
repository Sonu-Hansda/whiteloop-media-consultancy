import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { masteryPackage, sessionPackages } from "@/lib/data/packages";

export function Sessions() {
  return (
    <section
      id="sessions"
      className="scroll-mt-24 border-t border-border"
    >
      <Container className="py-20 sm:py-28">
        <Reveal>
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Sessions</Badge>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Pick Your Problem
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Pick the session that matches your exact situation or grab the
              full program and fix everything.
            </p>
          </div>

          {/* Session Cards */}
          <div className="mt-10 grid gap-2 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {sessionPackages.map((session) => (
              <div
                key={session.slug}
                className="flex min-h-[270px] flex-col rounded-2xl bg-black p-6 text-white transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Session Number / Duration */}
                <span className="text-[10px] font-medium text-white/80">
                  {session.number} - {session.duration}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {session.name}
                </h3>

                {/* Description */}
                <div className="mt-5">
                  <p className="text-xs font-medium text-white/90">
                    This session is for you if:
                  </p>

                  <p className="mt-1 text-[11px] leading-[1.45] text-white/70">
                    {session.cardDescription}
                  </p>
                </div>

                {/* Price + CTA */}
                <div className="mt-auto pt-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">
                      {session.price}
                    </span>

                    <span className="text-[10px] text-white/50 line-through">
                      {session.originalPrice}
                    </span>
                  </div>

                  <Link
                    href={`/sessions/${session.slug}`}
                    className="mt-2 inline-flex items-center text-xs font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    Book this session
                    <span className="ml-1 text-base leading-none">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Program */}
          <div className="mt-2 rounded-2xl bg-accent p-7 text-black sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Program Information */}
              <div>
                <Badge>Most Recommended</Badge>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {masteryPackage.name}
                </h3>

                <p className="mt-1 text-sm text-black/70">
                  {masteryPackage.description}
                </p>

                <p className="mt-5 text-xs font-medium">
                  {masteryPackage.cardDescription}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold">{masteryPackage.price}</span>

                  <span className="text-xs text-black/50 line-through">
                    {masteryPackage.originalPrice}
                  </span>
                </div>
              </div>

              {/* Program CTA */}
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

          {/* Free session */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Not ready to invest yet? Or just getting started?
            </p>
            <Button
              href="/free-session"
              variant="outline"
              size="lg"
              className="mt-3"
            >
              Apply for a free session
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}