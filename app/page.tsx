import Image from "next/image";
import Link from "next/link";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import GoogleReviews from "@/components/GoogleReviews";
import SectionHeading from "@/components/SectionHeading";
import TreatmentPreview from "@/components/TreatmentPreview";
import {
  clinic,
  images,
  ownerNote,
  servicesSpotlight,
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
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-accent-soft"
            >
              Book slot
            </a>
            <Link
              href="/services"
              className="inline-flex items-center border border-white/50 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
            <TreatmentPreview />
            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow={servicesSpotlight.eyebrow}
                title={servicesSpotlight.title}
                description={servicesSpotlight.description}
              />
              <Link
                href={servicesSpotlight.ctaHref}
                className="mt-8 inline-flex w-fit items-center bg-accent px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent-deep"
              >
                {servicesSpotlight.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterShowcase />

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-12 md:grid-cols-[0.7fr_1.3fr] md:gap-10 md:px-8 md:py-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden md:mx-0 md:max-w-[260px]">
            <Image
              src={ownerNote.image}
              alt={ownerNote.name}
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
          <div className="animate-reveal">
            <h2 className="max-w-xl font-display text-2xl leading-snug text-foreground md:text-3xl">
              {ownerNote.title}
            </h2>
            <div className="mt-4 max-w-xl space-y-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
              {ownerNote.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-display text-lg text-foreground">
                {ownerNote.name}
              </p>
              <p className="mt-0.5 text-sm text-accent-deep">{ownerNote.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl overflow-hidden px-5 py-12 md:px-8 md:py-14">
          <div className="relative w-full">
            <div className="flex gap-8 animate-float-x md:gap-10">
              {[...trustPoints, ...trustPoints].map((point, idx) => (
                <div
                  key={point.label + idx}
                  className="flex min-w-[240px] flex-shrink-0 items-center gap-3 border border-border bg-surface px-6 py-5"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <h2 className="font-display text-[2rem] font-medium leading-tight tracking-tight text-foreground md:text-[2.75rem]">
          Google Reviews
        </h2>
        <div className="mt-4 h-px w-16 bg-accent" aria-hidden />
        <div className="mt-8">
          <GoogleReviews />
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
            Book a slot at our Gulberg clinic and leave with a treatment
            path that feels right for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-accent-soft"
            >
              Book slot
            </a>
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
