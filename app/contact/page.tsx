import type { Metadata } from "next";
import BookForm from "@/components/BookForm";
import SectionHeading from "@/components/SectionHeading";
import { clinic } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a consultation or visit ${clinic.name} in ${clinic.city}.`,
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Book a consultation"
          description="Share a few details and we’ll outline next steps. This demo form validates locally and shows a success state—no data is sent."
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Visit us
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {clinic.address}
            </p>
            <p className="mt-2 text-sm text-muted">{clinic.city}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Hours
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {clinic.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-6">
                  <span>{row.days}</span>
                  <span className="text-foreground">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Reach out
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={clinic.phoneHref}
                  className="text-foreground transition-colors hover:text-accent-deep"
                >
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a
                  href={clinic.emailHref}
                  className="text-foreground transition-colors hover:text-accent-deep"
                >
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden border border-border bg-surface-soft">
            <iframe
              title="Clinic location map"
              src={clinic.mapEmbedUrl}
              className="h-56 w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="px-4 py-3 text-xs text-muted">
              Map placeholder for demo — update coordinates when the live clinic
              address is confirmed.
            </p>
          </div>
        </div>

        <div className="border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-2xl text-foreground">
            Consultation request
          </h2>
          <p className="mt-2 text-sm text-muted">
            Prefer to call? Use{" "}
            <a href={clinic.phoneHref} className="text-accent-deep underline">
              {clinic.phone}
            </a>{" "}
            or email{" "}
            <a href={clinic.emailHref} className="text-accent-deep underline">
              {clinic.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <BookForm />
          </div>
        </div>
      </section>
    </div>
  );
}
