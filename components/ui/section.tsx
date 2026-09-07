import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/**
 * A full-page home section.
 *
 * From `md` up each one fills the viewport (minus the sticky header) and acts
 * as a scroll-snap stop, so exactly one section is on screen at a time.
 *
 * Below `md` the sections keep their natural height on purpose: stacked, the
 * session and product cards run well past a phone screen, and snapping to
 * content that cannot fit in one view traps the reader mid-section.
 */
export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "snap-start border-t border-border",
        "md:flex md:min-h-[calc(100svh-var(--header-h))] md:items-center",
        className,
      )}
    >
      <Container
        className={cn("w-full py-[clamp(3rem,7vh,6rem)]", containerClassName)}
      >
        {children}
      </Container>
    </section>
  );
}
