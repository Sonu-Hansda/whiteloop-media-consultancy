import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "@/components/ui/check-icon";
import type { Session } from "@/types";

export function SessionSummary({ session }: { session: Session }) {
  return (
    <div className="rounded-2xl bg-foreground p-6 text-background">
      <Badge variant="accent">{session.number}</Badge>
      <h3 className="mt-4 text-xl font-semibold">{session.title}</h3>
      <p className="mt-1 text-sm text-background/70">
        {session.duration} · {session.host}
      </p>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{session.price}</span>
        <span className="text-sm text-background/50 line-through">
          {session.originalPrice}
        </span>
      </div>
      <ul className="mt-5 flex flex-col gap-2.5 border-t border-background/15 pt-5">
        {session.features.map((feature) => (
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
