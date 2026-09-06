"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/data/packages";
import { getSession } from "@/lib/data/sessions";
import { bookSlot, type Slot } from "@/lib/slots";
import { PackageSelector } from "@/components/book/package-selector";
import { SessionSummary } from "@/components/book/session-summary";
import { SlotPicker } from "@/components/book/slot-picker";
import { Field, inputClass } from "@/components/book/form-fields";
import { QualificationFields } from "@/components/book/qualification-fields";
import { emptyQualification } from "@/lib/data/qualification";
import type { Qualification } from "@/types";

export function BookingFlow({
  initialPackage,
  initialSession,
}: {
  initialPackage?: string;
  initialSession?: string;
}) {
  const router = useRouter();
  const session = initialSession ? getSession(initialSession) : undefined;
  const [selected, setSelected] = useState<string | undefined>(
    initialPackage && packages.some((p) => p.slug === initialPackage)
      ? initialPackage
      : packages.find((p) => p.featured)?.slug,
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] =
    useState<Qualification>(emptyQualification);
  const [slot, setSlot] = useState<Slot | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const current = packages.find((p) => p.slug === selected) ?? packages[0];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      setError("Please tell us your name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!qualification.phone.trim()) {
      setError("Please add your phone number.");
      return;
    }
    if (!qualification.country.trim()) {
      setError("Please add your country.");
      return;
    }
    if (!qualification.role) {
      setError("Please tell us what best describes you.");
      return;
    }
    if (!qualification.instagram.trim()) {
      setError("Please add your Instagram handle.");
      return;
    }
    if (!qualification.business.trim()) {
      setError("Please tell us about your business.");
      return;
    }
    if (!qualification.audience) {
      setError("Please select your audience size.");
      return;
    }
    if (!qualification.budget) {
      setError("Please select your monthly budget.");
      return;
    }
    if (!qualification.challenge.trim()) {
      setError("Please describe your biggest challenge.");
      return;
    }
    if (!slot) {
      setError("Please pick a time slot.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      if (session) {
        await bookSlot(slot, {
          name: name.trim(),
          email: email.trim(),
          ...qualification,
          packageSlug: session.slug,
          packageName: session.title,
          packagePrice: session.price,
          kind: "session",
        });
        router.push(
          `/book/success?package=${session.slug}&name=${encodeURIComponent(
            name.trim(),
          )}&when=${encodeURIComponent(`${slot.dateLabel}, ${slot.label}`)}`,
        );
      } else {
        await bookSlot(slot, {
          name: name.trim(),
          email: email.trim(),
          ...qualification,
          packageSlug: current.slug,
          packageName: current.name,
          packagePrice: current.price,
          kind: "package",
        });
        router.push(
          `/book/success?package=${current.slug}&name=${encodeURIComponent(
            name.trim(),
          )}&when=${encodeURIComponent(`${slot.dateLabel}, ${slot.label}`)}`,
        );
      }
    } catch (err) {
      setError(
        err instanceof Error && err.message.includes("booked")
          ? err.message
          : "Something went wrong saving your booking. Please try again.",
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
      {/* Step 1 — what you're booking */}
      <div className="min-w-0">
        <h2 className="text-lg font-semibold text-foreground">
          {session ? "Your session" : "1. Choose your package"}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {session
            ? "Here's what you're booking."
            : "Pick the plan that fits where you are."}
        </p>

        {session ? (
          <div className="mt-6">
            <SessionSummary session={session} />
          </div>
        ) : (
          <PackageSelector selected={selected} onSelect={setSelected} />
        )}
      </div>

      {/* Step 2 — details */}
      <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Your details
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

        <QualificationFields
          value={qualification}
          onChange={setQualification}
        />

        <div className="pt-2">
          <h2 className="text-lg font-semibold text-foreground">
            Pick a time
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Times already booked are greyed out.
          </p>
          <div className="mt-4">
            <SlotPicker selected={slot?.id} onSelect={setSlot} />
          </div>
        </div>

        {error ? (
          <p className="text-sm font-medium text-red-600">{error}</p>
        ) : null}

        <div className="rounded-2xl border border-border bg-surface p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              {session ? "Your session" : "Selected package"}
            </span>
            <span className="font-semibold text-foreground">
              {session
                ? `${session.title} — ${session.price}`
                : `${current.name} — ${current.price}`}
            </span>
          </div>
          {slot ? (
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
              <span className="text-muted-foreground">Your slot</span>
              <span className="font-semibold text-foreground">
                {slot.dateLabel}, {slot.label}
              </span>
            </div>
          ) : null}
        </div>

        <Button
          type="submit"
          variant="accent"
          size="lg"
          className="w-full"
          disabled={submitting}
        >
          {submitting ? "Booking…" : "Book my call"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We&apos;ll confirm your booking by email or WhatsApp.
        </p>
      </form>
    </div>
  );
}