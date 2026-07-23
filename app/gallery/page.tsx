import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse before-and-after results and clinic atmosphere from the Aesthetics Labs demo.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Results and atmosphere"
          description="Placeholder imagery for presentation. Replace with real patient-approved before/after photos and clinic photography when available."
        />
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <GalleryGrid />
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="border border-border bg-surface-soft px-6 py-10 md:px-10">
          <p className="font-display text-3xl text-foreground">
            Want results like these?
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Start with a consultation so we can recommend the right treatment
            path for your skin.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent-deep"
          >
            Book consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
