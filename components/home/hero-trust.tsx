import { trustAvatars, trustLabel } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

/** Social-proof pill that sits above the hero headline. */
export function HeroTrust() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background/80 py-1.5 pl-2 pr-4 shadow-sm backdrop-blur-sm">
      <span className="flex -space-x-2">
        {trustAvatars.map((avatar) => (
          <span
            key={avatar.letter}
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full border-2 border-background text-[10px] font-bold",
              avatar.className,
            )}
          >
            {avatar.letter}
          </span>
        ))}
      </span>
      <span className="text-sm">
        <span className="font-semibold text-foreground">{trustLabel.lead}</span>{" "}
        <span className="text-muted-foreground">{trustLabel.rest}</span>
      </span>
    </div>
  );
}
