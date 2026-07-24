"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  clinic,
  serviceCategories,
  services,
  type ServiceCategory,
} from "@/lib/content";

export default function ServicesCatalog() {
  const [active, setActive] = useState<ServiceCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return services;
    return services.filter((s) => s.category === active);
  }, [active]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Service categories"
      >
        {(["All", ...serviceCategories] as const).map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={`px-4 py-2 text-sm transition-colors ${
                selected
                  ? "bg-accent text-surface"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((service) => (
          <article
            key={service.id}
            className="animate-reveal overflow-hidden border border-border bg-surface"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                {service.category}
              </p>
              <h2 className="mt-2 font-display text-2xl text-foreground">
                {service.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.blurb}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                {service.fromPrice ? (
                  <p className="text-sm font-medium text-accent-deep">
                    {service.fromPrice}
                  </p>
                ) : (
                  <span />
                )}
                <a
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Book this treatment
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
