import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

const avatars = [
  { letter: "A", className: "bg-emerald-100 text-emerald-700" },
  { letter: "S", className: "bg-sky-100 text-sky-700" },
  { letter: "J", className: "bg-amber-100 text-amber-700" },
  { letter: "M", className: "bg-rose-100 text-rose-700" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid"
        aria-hidden="true"
      />

      {/* Soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="relative flex min-h-[570px] flex-col items-center justify-center py-20 text-center sm:py-24">
          
          {/* Floating labels */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {/* Branding */}
            <span
              className="
                absolute left-[5%] top-[31%]
                rotate-[-8deg]
                rounded-sm
                bg-cyan-100
                px-3 py-1
                font-hand text-sm
                text-cyan-900
              "
            >
              Branding
            </span>

            {/* Positioning */}
            <span
              className="
                absolute left-1/2 top-[10%]
                -translate-x-1/2
                rotate-[1deg]
                rounded-sm
                bg-indigo-100
                px-3 py-1
                font-hand text-sm
                text-indigo-900
              "
            >
              Positioning
            </span>

            {/* Organic Traffic */}
            <span
              className="
                absolute right-[7%] top-[27%]
                rotate-[10deg]
                rounded-sm
                bg-amber-100
                px-3 py-1
                font-hand text-sm
                text-amber-900
              "
            >
              Organic
              <br />
              Traffic
            </span>

            {/* Funnel */}
            <span
              className="
                absolute left-[13%] top-[67%]
                rotate-[-5deg]
                rounded-sm
                bg-green-100
                px-3 py-1
                font-hand text-sm
                text-green-900
              "
            >
              Funnel
            </span>

            {/* Systems */}
            <span
              className="
                absolute right-[12%] top-[68%]
                rotate-[5deg]
                rounded-sm
                bg-purple-100
                px-3 py-1
                font-hand text-sm
                text-purple-900
              "
            >
              Systems
            </span>

            {/* Distribution */}
            <span
              className="
                absolute bottom-[7%] left-1/2
                -translate-x-1/2
                rotate-[-2deg]
                rounded-sm
                bg-violet-100
                px-3 py-1
                font-hand text-sm
                text-violet-900
              "
            >
              Distribution
            </span>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex max-w-5xl flex-col items-center">

            {/* Headline */}
            <h1
              className="
                text-5xl
                font-medium
                leading-[0.98]
                tracking-[-0.045em]
                text-foreground
                sm:text-6xl
                md:text-7xl
                lg:text-[72px]
              "
            >
              Create content{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span
                  className="
                    relative z-10
                    font-hand
                    px-1
                    after:absolute
                    after:inset-x-0
                    after:bottom-[5%]
                    after:-z-10
                    after:h-[72%]
                    after:bg-accent
                    after:content-['']
                  "
                >
                  that sells
                </span>

                {/* Top lime dot */}
                <span
                  className="
                    absolute
                    -left-2
                    -top-2
                    z-20
                    h-3
                    w-3
                    rounded-full
                    bg-accent
                  "
                />

                {/* Bottom lime dot */}
                <span
                  className="
                    absolute
                    -bottom-2
                    -right-2
                    z-20
                    h-3
                    w-3
                    rounded-full
                    bg-accent
                  "
                />
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-6
                text-muted-foreground
                sm:text-lg
              "
            >
              We build you a complete AI content system in 4 sessions. Your
              ideal clients find you, trust you, and buy from you, without a
              single sales call.
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/book"
                variant="dark"
                size="lg"
                className="rounded-full px-7"
              >
                Book a session
              </Button>

              <Button
                href="/#about"
                variant="white"
                size="lg"
                className="rounded-full px-7"
              >
                Talk to the team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}