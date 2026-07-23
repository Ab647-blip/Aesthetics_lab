"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "phone" | "interest", string>>;

export default function BookForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function validate(form: FormData): Errors {
    const next: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const interest = String(form.get("interest") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      next.phone = "Enter a valid phone number.";
    }
    if (!interest) next.interest = "Select a treatment interest.";
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="animate-fade-up border border-accent-soft bg-surface px-6 py-10"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-3xl text-foreground">Request received</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Thank you. In this demo, nothing is sent to a server. On a live site,
          your consultation request would reach the clinic team for follow-up.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
        />
        {errors.name ? (
          <p className="mt-1 text-xs text-red-700">{errors.name}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-700">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-red-700">{errors.phone}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="text-sm font-medium text-foreground"
        >
          Treatment interest
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue=""
          className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {errors.interest ? (
          <p className="mt-1 text-xs text-red-700">{errors.interest}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-y border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
          placeholder="Share your goals, preferred times, or questions."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center bg-accent px-5 py-3.5 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent-deep sm:w-auto"
      >
        Request consultation
      </button>
      <p className="text-xs text-muted">
        Demo form only — submissions stay in your browser and are not emailed.
      </p>
    </form>
  );
}
