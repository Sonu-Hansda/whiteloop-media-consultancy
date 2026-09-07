import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/check-icon";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SessionPackage } from "@/types";

export function SessionHero({ session }: { session: SessionPackage }) {
  return (
    <section className="border-t border-border">
      <Container className="pt-6">
        <nav className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/#sessions" className="transition-colors hover:text-foreground">
            Sessions
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{session.name}</span>
        </nav>

        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-14">
          <Reveal>
            <Badge>{session.number}</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-display text-foreground sm:text-5xl">
              {session.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {session.description}
            </p>
            <div className="mt-8 flex gap-10">
              <div>
                <div className="text-2xl font-semibold text-foreground">
                  {session.shortDuration}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {session.host}
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground">
                  {session.price}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">One time</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:sticky lg:top-24">
            <div className="rounded-2xl bg-foreground p-7 text-background">
              <div className="text-3xl font-semibold">{session.price}</div>
              <div className="mt-1 text-sm text-background/60">
                {session.duration} · {session.host}
              </div>
              <Button
                href={`/book?session=${session.slug}`}
                variant="accent"
                size="lg"
                className="mt-6 w-full"
              >
                Book this session
              </Button>
              <p className="mt-3 text-center text-xs text-background/50">
                You&apos;ll fill a short intake form, then pick your slot
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 border-t border-background/15 pt-6">
                {session.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-background/85"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
