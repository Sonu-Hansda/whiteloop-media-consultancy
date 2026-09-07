import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/check-icon";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import type { ProductPackage } from "@/types";

export function ProductView({ product }: { product: ProductPackage }) {
  return (
    <>
      <section className="border-t border-border">
        <Container className="pt-6">
          <nav className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/#products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-14">
            <Reveal>
              <Badge>{product.number ?? "Product"}</Badge>
              <h1 className="mt-4 text-4xl font-semibold tracking-display text-foreground sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-8">
                <div className="text-2xl font-semibold text-foreground">
                  {product.price}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {product.meta ?? "One time · Instant access"}
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:sticky lg:top-24">
              <div className="rounded-2xl bg-foreground p-7 text-background">
                <div className="text-3xl font-semibold">{product.price}</div>
                <div className="mt-1 text-sm text-background/60">
                  {product.meta ?? "One time · Instant access"}
                </div>
                <Button
                  href={`/book?product=${product.slug}`}
                  variant="accent"
                  size="lg"
                  className="mt-6 w-full"
                >
                  Get {product.name}
                </Button>
                <p className="mt-3 text-center text-xs text-background/50">
                  You&apos;ll get instant access by email
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-background/15 pt-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-background/85"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {product.whoFor?.length ? (
        <section className="border-t border-border">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-display text-foreground sm:text-3xl">
                Who this is for
              </h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {product.whoFor.map((item) => (
                  <Badge key={item} variant="outline" size="lg">
                    {item}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {product.faqs?.length ? (
        <section className="border-t border-border">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-display text-foreground sm:text-3xl">
                Questions
              </h2>
              <div className="mt-6">
                <Accordion
                  items={product.faqs.map((faq) => ({
                    title: faq.q,
                    content: faq.a,
                  }))}
                />
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}
    </>
  );
}
