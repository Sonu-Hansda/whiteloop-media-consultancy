import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { HeroIllustration } from "@/components/home/hero-illustration";

const avatars = [
  { letter: "A", className: "bg-emerald-100 text-emerald-700" },
  { letter: "S", className: "bg-sky-100 text-sky-700" },
  { letter: "J", className: "bg-amber-100 text-amber-700" },
  { letter: "M", className: "bg-rose-100 text-rose-700" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Left — copy */}
        <div className="flex flex-col items-start gap-6">
          <Badge>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI content system for founders
          </Badge>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Create content
            <br />
            that{" "}
            <span className="relative inline-block">
              sells
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 140 3 198 9"
                  stroke="var(--accent)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            We build you a complete AI content system in 4 sessions. Your ideal
            clients find you, trust you, and buy from you — without a single
            sales call.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="/book" variant="accent" size="lg">
              Book a call
            </Button>
            <Button href="/#about" variant="outline" size="lg">
              Talk to the team
            </Button>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex -space-x-2">
              {avatars.map((a) => (
                <span
                  key={a.letter}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-background text-xs font-semibold ${a.className}`}
                >
                  {a.letter}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by founders across the globe
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {services.map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — illustration */}
        <div className="relative hidden lg:block">
          <HeroIllustration />
        </div>
      </Container>
    </section>
  );
}