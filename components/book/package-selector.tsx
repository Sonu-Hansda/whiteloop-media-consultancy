import { Badge } from "@/components/ui/badge";
import { packages } from "@/lib/data/packages";
import { cn } from "@/lib/utils";

export function PackageSelector({
  selected,
  onSelect,
}: {
  selected?: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {packages.map((pkg) => {
        const active = pkg.slug === selected;

        return (
          <button
            key={pkg.slug}
            type="button"
            onClick={() => onSelect(pkg.slug)}
            className={cn(
              "flex items-start justify-between rounded-2xl border p-5 text-left transition-colors",
              active
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-surface hover:border-foreground/30",
            )}
          >
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-base font-semibold",
                    active ? "text-background" : "text-foreground",
                  )}
                >
                  {pkg.name}
                </span>
                {pkg.featured ? (
                  <Badge variant="accent" size="sm">
                    Popular
                  </Badge>
                ) : null}
              </div>
              <p
                className={cn(
                  "mt-0.5 text-sm",
                  active ? "text-background/70" : "text-muted-foreground",
                )}
              >
                {pkg.tagline}
              </p>
            </div>
            <div className="text-right">
              <span
                className={cn(
                  "text-base font-semibold",
                  active ? "text-background" : "text-foreground",
                )}
              >
                {pkg.price}
              </span>
              <p
                className={cn(
                  "text-xs",
                  active ? "text-background/70" : "text-muted-foreground",
                )}
              >
                {pkg.duration}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
