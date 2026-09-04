import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { packages } from "@/lib/data/packages";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <section id="products" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="Choose your package"
            description="Pick the plan that fits where you are — every package gets you the same proven system."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className={cn(
                  "flex flex-col rounded-3xl border p-6",
                  pkg.featured
                    ? "border-foreground bg-foreground text-background shadow-xl"
                    : "border-border bg-surface",
                )}
              >
                {pkg.featured ? (
                  <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most popular
                  </span>
                ) : (
                  <span className="mb-4 w-fit rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                    {pkg.duration}
                  </span>
                )}

                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    pkg.featured ? "text-background/70" : "text-muted-foreground",
                  )}
                >
                  {pkg.tagline}
                </p>

                <div className="mt-5">
                  <span className="text-3xl font-semibold">{pkg.price}</span>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      pkg.featured
                        ? "text-background/70"
                        : "text-muted-foreground",
                    )}
                  >
                    {pkg.duration}
                  </p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          pkg.featured ? "text-accent" : "text-foreground",
                        )}
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12l4 4L19 6"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={
                          pkg.featured
                            ? "text-background/85"
                            : "text-foreground/80"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={`/book?package=${pkg.slug}`}
                  variant={pkg.featured ? "accent" : "outline"}
                  className="mt-6 w-full"
                >
                  Book session
                </Button>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}