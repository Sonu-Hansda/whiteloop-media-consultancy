import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { GridBackdrop } from "@/components/ui/grid-backdrop";
import { BookingFlow } from "@/components/book/booking-flow";

export const metadata: Metadata = {
  title: "Book a call — Whiteloop",
  description: "Choose your package and book a call with the Whiteloop team.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const sessionSlug =
    typeof params.session === "string" ? params.session : undefined;
  const productSlug =
    typeof params.product === "string" ? params.product : undefined;
  const initialPackage = sessionSlug ?? productSlug;

  return (
    <div className="relative">
      <GridBackdrop fade="top" />
      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Book a call
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Choose your package and tell us a little about your goals — we’ll
            take it from there.
          </p>
        </div>
        <BookingFlow initialPackage={initialPackage} />
      </Container>
    </div>
  );
}