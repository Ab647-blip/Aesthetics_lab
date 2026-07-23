import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import TreatmentPreview from "@/components/TreatmentPreview";
import {
  clinic,
  homeIntro,
  images,
  ownerNote,
  servicesSpotlight,
  testimonials,
  trustPoints,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src={images.hero}
          alt="Calm aesthetic treatment atmosphere"
          fill
          priority
          className="object-cover animate-fade-in"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <p className="animate-fade-up font-display text-4xl text-white md:text-6xl lg:text-7xl">
            {clinic.name}
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 max-w-xl font-display text-2xl font-medium leading-snug text-white/95 md:text-3xl">
            {clinic.tagline}
          </h1>
          <p className="animate-fade-up delay-200 mt-4 max-w-lg text-base leading-relaxed text-white/85">
            Personalized skincare and cosmetic treatments in a quiet clinical
            setting—built around your goals, not trends.
          </p>
          <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-accent-soft"
            >
              Book consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center border border-white/50 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="font-display text-3xl  italic leading-snug text-foreground md:text-4xl">
            {homeIntro.heading}
          </h2>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-muted">
            {homeIntro.notes.map((note) => (
              <p key={note.slice(0, 40)}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-14 md:px-8 md:py-24">
          <TreatmentPreview />
          <div>
            <SectionHeading
              eyebrow={servicesSpotlight.eyebrow}
              title={servicesSpotlight.title}
              description={servicesSpotlight.description}
            />
            <Link
              href={servicesSpotlight.ctaHref}
              className="mt-8 inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent-deep"
            >
              {servicesSpotlight.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-14 md:px-8 md:py-24">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden md:mx-0 md:max-w-none">
            <Image
              src={ownerNote.image}
              alt={ownerNote.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 320px"
            />
          </div>
          <div className="animate-reveal">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {ownerNote.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-snug text-foreground md:text-[2.35rem]">
              {ownerNote.hook}
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted">
              {ownerNote.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-5">
              <p className="font-display text-xl text-foreground">
                {ownerNote.name}
              </p>
              <p className="mt-1 text-sm text-accent-deep">{ownerNote.role}</p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent-deep"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl overflow-hidden px-5 py-10 md:px-8">
          <div className="relative w-full">
            <div className="flex gap-6 animate-float-x">
              {[...trustPoints, ...trustPoints].map((point, idx) => (
                <div
                  key={point.label + idx}
                  className="min-w-[220px] max-w-xs flex-shrink-0 rounded-lg border border-border bg-white/70 px-5 py-6 shadow-sm backdrop-blur"
                >
                  <p className="text-sm font-medium text-foreground">
                    {point.label}
                  </p>
                  <p className="mt-1 text-sm text-muted">{point.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Patient voices"
          title="Confidence, calmly earned"
          description="A few words from patients who valued clear care and natural-looking results."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <blockquote key={item.id} className="border-l border-accent pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                “{item.quote}”
              </p>
              <footer className="mt-4 text-sm text-muted">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="mx-2 text-border">·</span>
                {item.detail}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.cta}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-foreground/70" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
          <p className="font-display text-4xl text-white md:text-5xl">
            Ready for a clearer plan?
          </p>
          <p className="mt-4 max-w-lg text-base text-white/85">
            Book a consultation at our Gulberg clinic and leave with a treatment
            path that feels right for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-accent-soft"
            >
              Book consultation
            </Link>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center border border-white/50 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              Call {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
