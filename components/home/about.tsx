import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { about } from "@/lib/data/about";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-col items-center">
            <Badge>{about.eyebrow}</Badge>

            <div className="mt-10 w-full max-w-4xl">
              <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl">
                {about.title}
              </h2>

              <div className="mt-8 flex flex-col gap-5">
                {about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-foreground/85 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
