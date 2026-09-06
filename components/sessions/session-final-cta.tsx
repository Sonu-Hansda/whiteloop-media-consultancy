import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SessionPackage } from "@/types";

export function SessionFinalCta({ session }: { session: SessionPackage }) {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-center sm:px-12">
            <Badge variant="accent">
              {session.price} · {session.duration} · live 1:1
            </Badge>
            <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-background sm:text-3xl">
              {session.finalCta.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-background/60">
              {session.finalCta.sub}
            </p>
            <div className="mt-8">
              <Button
                href={`/book?session=${session.slug}`}
                variant="accent"
                size="lg"
              >
                Book this session
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
