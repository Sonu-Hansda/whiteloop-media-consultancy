import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridBackdrop } from "@/components/ui/grid-backdrop";
import { HeroLabels } from "@/components/home/hero-labels";
import { HeroTrust } from "@/components/home/hero-trust";
import { bookCta, freeSessionCta } from "@/lib/data/cta";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackdrop fade="edges" />

      <Container className="relative">
        <div className="relative flex min-h-[570px] flex-col items-center justify-center py-20 text-center sm:py-24">
          <HeroLabels />

          <div className="relative z-10 flex max-w-5xl flex-col items-center">
            <HeroTrust />

            <h1 className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl lg:text-[72px]">
              Create content{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 px-1 font-hand after:absolute after:inset-x-0 after:bottom-[5%] after:-z-10 after:h-[72%] after:bg-accent after:content-['']">
                  that sells
                </span>

                {/* Corner ticks on the highlight */}
                <span className="absolute -left-2 -top-2 z-20 h-3 w-3 rounded-full bg-accent" />
                <span className="absolute -bottom-2 -right-2 z-20 h-3 w-3 rounded-full bg-accent" />
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-6 text-muted-foreground sm:text-lg">
              We build you a complete AI content system in 4 sessions. Your
              ideal clients find you, trust you, and buy from you, without a
              single sales call.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
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
