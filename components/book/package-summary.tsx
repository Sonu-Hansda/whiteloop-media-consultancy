import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "@/components/ui/check-icon";
import type { Package } from "@/types";

export function PackageSummary({ pkg }: { pkg: Package }) {
  const originalPrice = pkg.type !== "product" ? pkg.originalPrice : undefined;
  const sub =
    pkg.type === "product"
      ? (pkg.meta ?? "One time · Instant access")
      : `${pkg.duration}${pkg.host ? ` · ${pkg.host}` : ""}`;

  return (
    <div className="rounded-2xl bg-foreground p-6 text-background">
      {pkg.number ? <Badge variant="accent">{pkg.number}</Badge> : null}
      <h3 className="mt-4 text-xl font-semibold">{pkg.name}</h3>
      <p className="mt-1 text-sm text-background/70">{pkg.description}</p>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{pkg.price}</span>
        {originalPrice ? (
          <span className="text-sm text-background/50 line-through">
            {originalPrice}
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-background/60">{sub}</p>
      <ul className="mt-5 flex flex-col gap-2.5 border-t border-background/15 pt-5">
        {pkg.features.map((feature) => (
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
  );
}
