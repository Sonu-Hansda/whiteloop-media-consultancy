import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="border-t border-border">
      <Container className="py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-background sm:text-4xl">
              Ready to build content that sells?
            </h2>
            <p className="max-w-xl text-base text-background/70">
              Book a call and we’ll map out your AI content system — no
              pressure, just a clear plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/book" variant="accent" size="lg">
                Book a call
              </Button>
              <Link
                href="/#about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-background/20 px-6 text-base font-medium text-background transition-colors hover:bg-background/10"
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}