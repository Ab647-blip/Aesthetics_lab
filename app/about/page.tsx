import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { clinic, images, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${clinic.name}—a patient-first medical aesthetics clinic in ${clinic.city}.`,
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="A quieter kind of aesthetic clinic"
          description="Aesthetics Labs is a fictional demo brand created for client presentations—crafted to show how a modern medical spa site can feel trustworthy, calm, and conversion-ready."
        />
      </section>

      <section className="bg-surface-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.about}
              alt="Soft-lit treatment room"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Our care philosophy
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <li>
                <span className="font-medium text-foreground">Listen first.</span>{" "}
                Every plan begins with your goals, history, and what “natural”
                means to you.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Explain clearly.
                </span>{" "}
                We outline benefits, expectations, and downtime before any
                treatment begins.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Protect your features.
                </span>{" "}
                Our aim is refinement—not a look that no longer feels like you.
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent-deep"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Team"
          title="Clinicians and care partners"
          description="Meet the demo team behind every visit—from assessment to aftercare."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.id}>
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-soft">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-accent-deep">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
