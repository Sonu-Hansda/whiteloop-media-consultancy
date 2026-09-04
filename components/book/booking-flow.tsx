"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/data/packages";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

export function BookingFlow({ initialPackage }: { initialPackage?: string }) {
  const router = useRouter();
  const [selected, setSelected] = useState<string | undefined>(
    initialPackage && packages.some((p) => p.slug === initialPackage)
      ? initialPackage
      : packages.find((p) => p.featured)?.slug,
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const current = packages.find((p) => p.slug === selected) ?? packages[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      setError("Please tell us your name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    router.push(
      `/book/success?package=${current.slug}&name=${encodeURIComponent(name.trim())}`,
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
      {/* Step 1 — package */}
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          1. Choose your package
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick the plan that fits where you are.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {packages.map((pkg) => {
            const active = pkg.slug === selected;
            return (
              <button
                key={pkg.slug}
                type="button"
                onClick={() => setSelected(pkg.slug)}
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
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                        Popular
                      </span>
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
      </div>

      {/* Step 2 — details */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            2. Your details
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us a bit about you and your goals.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Founder"
              className={inputClass}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@company.com"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Company (optional)">
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Inc."
            className={inputClass}
          />
        </Field>

        <Field label="What do you want to achieve? (optional)">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="I want to build an AI content system that attracts my ideal clients…"
            rows={4}
            className={cn(inputClass, "resize-none")}
          />
        </Field>

        {error ? (
          <p className="text-sm font-medium text-red-600">{error}</p>
        ) : null}

        <div className="rounded-2xl border border-border bg-surface p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Selected package</span>
            <span className="font-semibold text-foreground">
              {current.name} — {current.price}
            </span>
          </div>
        </div>

        <Button type="submit" variant="accent" size="lg" className="w-full">
          Book my call
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Scheduling is handled in the next step — we’ll confirm your call with
          a calendar link.
        </p>
      </form>
    </div>
  );
}