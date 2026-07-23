"use client";

import { FormEvent, useState } from "react";
import { clinic, services } from "@/lib/content";

type Mode = "contact" | "book";

export function ContactForm({ mode = "book" }: { mode?: Mode }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const next: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email.";
    if (phone.length < 7) next.phone = "Enter a valid phone number.";
    if (mode === "contact" && message.length < 10)
      next.message = "Please share a bit more detail.";

    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next = validate(form);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div
        className="border border-sage-soft bg-sage-soft/40 px-6 py-8"
        role="status"
      >
        <p className="font-display text-2xl text-sage-deep">Request received</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This is a demo form — nothing was sent. In a live site, our team would
          confirm your consultation by email or phone.
        </p>
        <button
          type="button"
          className="mt-6 text-sm text-sage-deep underline underline-offset-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          error={errors.email}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          error={errors.phone}
          autoComplete="tel"
        />
        <div>
          <label
            htmlFor="interest"
            className="mb-1.5 block text-sm text-muted"
          >
            Interest
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-sage"
            defaultValue=""
          >
            <option value="" disabled>
              Select a treatment
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="General consult">General consult</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          {mode === "book" ? "Notes (optional)" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-sage"
          placeholder="Tell us about your goals or preferred times…"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-700">{errors.message}</p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="bg-sage-deep px-5 py-3 text-sm text-surface transition-colors hover:bg-sage"
        >
          {mode === "book" ? "Request consultation" : "Send message"}
        </button>
        <a
          href={clinic.phoneHref}
          className="text-sm text-muted underline-offset-4 hover:text-sage-deep hover:underline"
        >
          Or call {clinic.phone}
        </a>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Please fix the highlighted fields.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={`w-full border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-sage ${
          error ? "border-red-400" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
