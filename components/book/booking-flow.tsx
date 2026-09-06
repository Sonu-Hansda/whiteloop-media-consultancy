"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  getPackage,
  masteryPackage,
  sessionPackages,
} from "@/lib/data/packages";
import { bookSlot, type Slot } from "@/lib/slots";
import { saveProductLead } from "@/lib/leads";
import { PackageSummary } from "@/components/book/package-summary";
import { SlotPicker } from "@/components/book/slot-picker";
import { Field, inputClass } from "@/components/book/form-fields";
import { QualificationFields } from "@/components/book/qualification-fields";
import { emptyQualification } from "@/lib/data/qualification";
import type { Qualification } from "@/types";

export function BookingFlow({ initialPackage }: { initialPackage?: string }) {
  const router = useRouter();
  const [slug, setSlug] = useState<string | undefined>(
    initialPackage && getPackage(initialPackage) ? initialPackage : undefined,
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] =
    useState<Qualification>(emptyQualification);
  const [slot, setSlot] = useState<Slot | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const pkg = slug ? getPackage(slug) : undefined;
  const needsSlot = pkg?.type === "session" || pkg?.type === "mixed";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!pkg) {
      setError("Please choose a session or product.");
      return;
    }
    if (!name.trim()) {
      setError("Please tell us your name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!qualification.phone.trim()) { setError("Please add your phone number."); return; }
    if (!qualification.country.trim()) { setError("Please add your country."); return; }
    if (!qualification.role) { setError("Please tell us what best describes you."); return; }
    if (!qualification.instagram.trim()) { setError("Please add your Instagram handle."); return; }
    if (!qualification.business.trim()) { setError("Please tell us about your business."); return; }

    if (pkg.type !== "product") {
      if (!qualification.audience) { setError("Please select your audience size."); return; }
      if (!qualification.budget) { setError("Please select your monthly budget."); return; }
      if (!qualification.challenge.trim()) { setError("Please describe your biggest challenge."); return; }
      if (!slot) { setError("Please pick a time slot."); return; }
    }

    setError(null);
    setSubmitting(true);
    try {
      if (pkg.type === "product") {
        await saveProductLead({
          name: name.trim(),
          email: email.trim(),
          phone: qualification.phone.trim(),
          country: qualification.country.trim(),
          role: qualification.role,
          roleOther: qualification.role === "Other" ? qualification.roleOther : undefined,
          instagram: qualification.instagram.trim(),
          business: qualification.business.trim(),
          productSlug: pkg.slug,
          productName: pkg.name,
          productPrice: pkg.price,
        });
        router.push(
          `/book/success?package=${pkg.slug}&name=${encodeURIComponent(
            name.trim(),
          )}`,
        );
      } else {
        await bookSlot(slot!, {
          name: name.trim(),
          email: email.trim(),
          ...qualification,
          packageSlug: pkg.slug,
          packageName: pkg.name,
          packagePrice: pkg.price,
          kind: pkg.type,
        });
        router.push(
          `/book/success?package=${pkg.slug}&name=${encodeURIComponent(
            name.trim(),
          )}&when=${encodeURIComponent(`${slot!.dateLabel}, ${slot!.label}`)}`,
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

  const sessionOptions = [...sessionPackages, masteryPackage];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
      <div className="min-w-0">
        {pkg ? (
          <>
            <h2 className="text-lg font-semibold text-foreground">
              {pkg.type === "product" ? "Your product" : "Your session"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {pkg.type === "product"
                ? "Here's what you're getting."
                : "Here's what you're booking."}
            </p>
            <div className="mt-6">
              <PackageSummary pkg={pkg} />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-foreground">
              Choose a session
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pick the session that fits where you are.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {sessionOptions.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setSlug(item.slug)}
                  className="flex items-start justify-between rounded-2xl border border-border bg-surface p-5 text-left transition-colors hover:border-foreground/30"
                >
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      {item.name}
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.cardDescription ?? item.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-semibold text-foreground">
                      {item.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-4">
        {pkg ? (
          <>
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

            {needsSlot ? (
              <>
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
              </>
            ) : (
              <QualificationFields
                value={qualification}
                onChange={setQualification}
                variant="product"
              />
            )}

            {error ? (
              <p className="text-sm font-medium text-red-600">{error}</p>
            ) : null}

            <div className="rounded-2xl border border-border bg-surface p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  {pkg.type === "product" ? "Your product" : "Your session"}
                </span>
                <span className="font-semibold text-foreground">
                  {pkg.name} — {pkg.price}
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
              {submitting
                ? "Submitting…"
                : pkg.type === "product"
                  ? `Get ${pkg.name}`
                  : "Book my call"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              {pkg.type === "product"
                ? "You'll get access by email after checkout."
                : "We'll confirm your booking by email or WhatsApp."}
            </p>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Select a session to continue.
          </p>
        )}
      </form>
    </div>
  );
}
