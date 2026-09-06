import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getPackage } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "You’re booked — Whiteloop",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const slug = typeof params.package === "string" ? params.package : undefined;
  const name = typeof params.name === "string" ? params.name : undefined;
  const when = typeof params.when === "string" ? params.when : undefined;
  const pkg = slug ? getPackage(slug) : undefined;
  const chosen = pkg?.name ?? "your package";

  return (
    <Container className="py-24 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-5">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7"
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
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          You’re booked{name ? `, ${name}` : ""}!
        </h1>
        <p className="text-base text-muted-foreground">
          Thanks for choosing{" "}
          <span className="font-medium text-foreground">{chosen}</span>.
          We&apos;ll reach out with the next steps.
        </p>
        {when ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-4 text-sm text-foreground">
            Your slot is booked for{" "}
            <span className="font-semibold">{when}</span>.
          </div>
        ) : null}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="accent">
            Back to home
          </Button>
          <Button href="/#sessions" variant="outline">
            View sessions
          </Button>
        </div>
      </div>
    </Container>
  );
}