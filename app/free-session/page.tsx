import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { GridBackdrop } from "@/components/ui/grid-backdrop";
import { FreeSessionForm } from "@/components/sessions";

export const metadata: Metadata = {
  title: "Apply for a free session — Whiteloop",
  description:
    "Apply for a free 1:1 strategy session. We review every application personally.",
};

export default function FreeSessionPage() {
  return (
    <div className="relative">
      <GridBackdrop fade="top" />
      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-xl text-center">
          <Badge>Limited slots for this month</Badge>
          <h1 className="mt-4 text-3xl font-semibold tracking-display text-foreground sm:text-4xl">
            Apply for a free session
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
            We turn people away. Every application is reviewed by us, personally.
            Tell us where you&apos;re at.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <FreeSessionForm />
        </div>
      </Container>
    </div>
  );
}
