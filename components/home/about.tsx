import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Positioning",
    description:
      "We clarify your offer so your content speaks to the right people.",
  },
  {
    title: "AI Content System",
    description:
      "A repeatable engine that turns your ideas into content that sells.",
  },
  {
    title: "Distribution",
    description:
      "We get that content in front of the people most likely to buy.",
  },
];

const stats = [
  { value: "4", label: "Sessions to launch" },
  { value: "7", label: "Growth levers" },
  { value: "1", label: "Complete system" },
  { value: "0", label: "Sales calls needed" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="About us"
                title="Content that works as hard as your sales team"
                description="Whiteloop Media builds AI content systems for founders and growing teams. We bring positioning, branding, and distribution together into one engine — so you attract ideal clients on autopilot."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-border bg-surface p-6 text-center"
                >
                  <p className="text-4xl font-semibold text-foreground">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}