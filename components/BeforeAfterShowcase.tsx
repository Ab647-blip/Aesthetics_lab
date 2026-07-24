import Image from "next/image";
import Link from "next/link";
import { clinic, resultsShowcase } from "@/lib/content";

export default function BeforeAfterShowcase() {
  const featured = resultsShowcase.featured;

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-16 md:px-8 md:pt-14 md:pb-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-[2rem] font-medium leading-tight tracking-tight text-foreground md:text-[2.75rem]">
            {resultsShowcase.title}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" aria-hidden />
        </div>

        <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="grid min-h-[420px] grid-cols-2 gap-2 md:gap-3 lg:min-h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden bg-surface-soft lg:min-h-0">
              <Image
                src={featured.before}
                alt={`${featured.title} — before treatment`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 35vw"
                priority
              />
              <span className="absolute bottom-3 left-3 bg-foreground/85 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                Before
              </span>
            </div>
            <div className="relative h-full min-h-[420px] overflow-hidden bg-surface-soft lg:min-h-0">
              <Image
                src={featured.after}
                alt={`${featured.title} — after treatment`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 35vw"
                priority
              />
              <span className="absolute bottom-3 left-3 bg-accent px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                After
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              {featured.treatment}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-snug text-foreground md:text-[2.15rem]">
              {featured.title}
            </h3>

            <div className="mt-6 border border-border bg-surface-soft/60 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                {featured.priceLabel}
              </p>
              <p className="mt-1 font-display text-2xl text-foreground">
                {featured.price}
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {featured.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm text-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span className="leading-relaxed text-muted">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
              <a
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent-deep"
              >
                Book Spectra Peel
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-deep"
              >
                More results
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
