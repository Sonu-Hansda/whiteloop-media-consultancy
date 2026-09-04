import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Video() {
  return (
    <section id="video" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Watch"
            title="See it in action"
            description="A quick look at the AI content system we build for you."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <p className="text-sm">Video coming soon</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}