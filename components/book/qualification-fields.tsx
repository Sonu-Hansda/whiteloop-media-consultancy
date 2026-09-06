import type { Qualification } from "@/types";
import { audiences, budgets, roles } from "@/lib/data/qualification";
import { ChipGroup, Field, inputClass } from "@/components/book/form-fields";
import { cn } from "@/lib/utils";

export function QualificationFields({
  value,
  onChange,
}: {
  value: Qualification;
  onChange: (next: Qualification) => void;
}) {
  function set<K extends keyof Qualification>(key: K, val: Qualification[K]) {
    onChange({ ...value, [key]: val });
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone number" hint="with country code">
          <input
            type="tel"
            value={value.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </Field>
        <Field label="Country">
          <input
            value={value.country}
            onChange={(e) => set("country", e.target.value)}
            placeholder="e.g. India, UAE, USA"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="What best describes you?">
        <ChipGroup
          options={roles}
          value={value.role}
          onChange={(v) => set("role", v)}
        />
        {value.role === "Other" ? (
          <input
            value={value.roleOther}
            onChange={(e) => set("roleOther", e.target.value)}
            placeholder="Tell us what you do"
            className={inputClass}
          />
        ) : null}
      </Field>

      <Field label="Your Instagram handle">
        <input
          value={value.instagram}
          onChange={(e) => set("instagram", e.target.value)}
          placeholder="@yourhandle"
          className={inputClass}
        />
      </Field>

      <Field label="Tell us about your business, offer, or expertise">
        <textarea
          value={value.business}
          onChange={(e) => set("business", e.target.value)}
          placeholder="What do you do, and who do you help?"
          rows={4}
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      <Field label="Current audience size">
        <ChipGroup
          options={audiences}
          value={value.audience}
          onChange={(v) => set("audience", v)}
        />
      </Field>

      <Field label="How much are you looking to invest in content, monthly?">
        <ChipGroup
          options={budgets}
          value={value.budget}
          onChange={(v) => set("budget", v)}
        />
      </Field>

      <Field label="What's your biggest content challenge right now?">
        <textarea
          value={value.challenge}
          onChange={(e) => set("challenge", e.target.value)}
          placeholder="Tell us what's not working today"
          rows={3}
          className={cn(inputClass, "resize-none")}
        />
      </Field>
    </>
  );
}
