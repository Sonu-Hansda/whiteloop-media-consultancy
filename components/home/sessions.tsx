import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Positioning",
    description: "We define exactly who you serve and what makes you different.",
  },
  {
    number: "02",
    title: "System",
    description:
      "We build your AI content engine, brand voice, and style guide.",
  },
  {
    number: "03",
    title: "Funnel",
    description:
      "We map your offer and build the funnel that turns attention into buyers.",
  },
  {
    number: "04",
    title: "Distribution",
    description:
      "We launch and spread your content across every channel that matters.",
  },
];

export function Sessions() {
  return (
    <section id="sessions" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Sessions"
          title="Four sessions to a complete system"
          description="No 12-month retainers. In four focused sessions we build the machine that markets for you."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-foreground">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}