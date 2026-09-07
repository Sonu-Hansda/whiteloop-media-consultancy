import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridBackdrop } from "@/components/ui/grid-backdrop";
import { HeroLabels } from "@/components/home/hero-labels";
import { HeroTrust } from "@/components/home/hero-trust";
import { bookCta, freeSessionCta } from "@/lib/data/cta";

export function Hero() {
  return (
    <section className="relative snap-start overflow-hidden">
      <GridBackdrop fade="edges" />

      <Container className="relative">
        <div className="relative flex min-h-[620px] flex-col items-center justify-center py-20 text-center md:min-h-[calc(100svh-var(--header-h))] md:py-24">
          <HeroLabels />

          <div className="relative z-10 flex max-w-5xl flex-col items-center">
            <div className="animate-rise [--enter-delay:80ms]">
              <HeroTrust />
            </div>

            <h1 className="animate-rise mt-7 text-5xl [--enter-delay:180ms] font-medium leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl lg:text-[72px]">
              Create content{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="highlight-sweep relative z-10 px-1 font-serif italic after:absolute after:inset-x-0 after:bottom-[5%] after:-z-10 after:h-[72%] after:bg-accent after:content-['']">
                  that sells
                </span>

                {/* Corner ticks on the highlight */}
                <span className="absolute -left-2 -top-2 z-20 h-3 w-3 rounded-full bg-accent" />
                <span className="absolute -bottom-2 -right-2 z-20 h-3 w-3 rounded-full bg-accent" />
              </span>
            </h1>

            <p className="animate-rise mt-7 max-w-2xl [--enter-delay:280ms] text-base leading-6 text-muted-foreground sm:text-lg">
              We build you a complete AI content system in 4 sessions. Your
              ideal clients find you, trust you, and buy from you, without a
              single sales call.
            </p>

            <div className="animate-rise mt-7 flex flex-wrap items-center justify-center gap-4 [--enter-delay:380ms]">
              <Button
                href={bookCta.href}
                variant="dark"
                size="lg"
                className="rounded-full px-7"
              >
                {bookCta.label}
              </Button>

              <Button
                href={freeSessionCta.href}
                variant="white"
                size="lg"
                className="rounded-full px-7"
              >
                {freeSessionCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
