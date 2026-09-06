import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { productPackages } from "@/lib/data/packages";

export function Products() {
  const products = productPackages.filter((p) => p.slug !== "bundle");
  const bundle = productPackages.find((p) => p.slug === "bundle");

  return (
    <section id="products" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Products</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Build it yourself
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Not ready for a session? Start with the systems our sessions are
              built on — no live call required.
            </p>
          </div>

          <div className="mt-10 grid gap-2 sm:mt-14 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.slug}
                className="flex min-h-[260px] flex-col rounded-2xl bg-black p-6 text-white transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="text-[10px] font-medium text-white/80">
                  {product.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-white/70">
                  {product.description}
                </p>
                <div className="mt-auto pt-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">{product.price}</span>
                    <span className="text-[10px] text-white/50">
                      {product.meta}
                    </span>
                  </div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-2 inline-flex items-center text-xs font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    Get {product.name}
                    <span className="ml-1 text-base leading-none">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {bundle ? (
            <div className="mt-2 rounded-2xl bg-accent p-7 text-black sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {bundle.name}
                  </h3>
                  <p className="mt-1 text-sm text-black/70">
                    {bundle.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                  <div>
                    <div className="text-xl font-bold">{bundle.price}</div>
                    <div className="text-sm text-black/60">{bundle.meta}</div>
                  </div>
                  <Link
                    href={`/book?product=${bundle.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-accent transition-transform duration-200 hover:scale-[1.02]"
                  >
                    Get the bundle
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
