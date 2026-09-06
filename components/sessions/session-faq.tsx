import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { Session } from "@/types";

export function SessionFaq({ session }: { session: Session }) {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Questions
          </h2>
          <div className="mt-6">
            <Accordion
              items={session.faqs.map((faq) => ({
                title: faq.q,
                content: faq.a,
              }))}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
