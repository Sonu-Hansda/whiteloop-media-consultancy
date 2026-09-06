"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { sessionPackages } from "@/lib/data/packages";
import { saveApplication } from "@/lib/leads";
import { Field, inputClass } from "@/components/book/form-fields";
import { QualificationFields } from "@/components/book/qualification-fields";
import { emptyQualification } from "@/lib/data/qualification";
import type { Qualification } from "@/types";

export function FreeSessionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] =
    useState<Qualification>(emptyQualification);
  const [sessionInterest, setSessionInterest] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) return setError("Please tell us your name.");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError("Please enter a valid email address.");
    if (!qualification.phone.trim())
      return setError("Please add your phone number.");
    if (!qualification.country.trim())
      return setError("Please add your country.");
    if (!qualification.role)
      return setError("Please tell us what best describes you.");
    if (!qualification.instagram.trim())
      return setError("Please add your Instagram handle.");
    if (!qualification.business.trim())
      return setError("Please tell us about your business.");
    if (!qualification.audience)
      return setError("Please select your audience size.");
    if (!qualification.budget)
      return setError("Please select your monthly budget.");
    if (!sessionInterest) return setError("Please pick a session.");
    if (!qualification.challenge.trim())
      return setError("Please describe your biggest challenge.");

    setError(null);
    setSubmitting(true);
    try {
      await saveApplication({
        name: name.trim(),
        email: email.trim(),
        ...qualification,
        roleOther:
          qualification.role === "Other" ? qualification.roleOther : undefined,
        sessionInterest,
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong submitting your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
          ✓
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
          Application received
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
          We review every application manually — if it&apos;s a fit for one of
          this month&apos;s 10 free sessions, we&apos;ll reach out on WhatsApp or
          email within 48 hours with your booking link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <Field label="Full name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className={inputClass}
          />
        </Field>

        <QualificationFields
          value={qualification}
          onChange={setQualification}
        />

        <Field label="Which session interests you most?">
          <select
            value={sessionInterest}
            onChange={(e) => setSessionInterest(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Select one
            </option>
            {sessionPackages.map((session) => (
              <option key={session.slug} value={session.name}>
                {session.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
      </div>

      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

      <Button type="submit" variant="dark" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Submitting…" : "Submit application"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We review every application manually. If it&apos;s a fit, you&apos;ll
        hear back within 48 hours with your booking link.
      </p>
    </form>
  );
}

