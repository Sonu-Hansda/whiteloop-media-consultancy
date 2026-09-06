import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { Session } from "@/types";

export function SessionWhoFor({ session }: { session: Session }) {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Who this is for
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {session.whoFor.map((item) => (
              <Badge key={item} variant="outline" size="lg">
                {item}
              </Badge>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
