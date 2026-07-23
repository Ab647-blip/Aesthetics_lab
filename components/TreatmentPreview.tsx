"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { servicesSpotlight } from "@/lib/content";

export default function TreatmentPreview() {
  const frames = servicesSpotlight.frames;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % frames.length);
    }, 3200);

    return () => window.clearInterval(id);
  }, [frames.length]);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-soft md:aspect-[5/6]">
      {frames.map((frame, index) => (
        <div
          key={frame.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={frame.src}
            alt={frame.label}
            fill
            className={`object-cover transition-transform duration-[3200ms] ease-out ${
              index === active ? "scale-105" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, 45vw"
            priority={index === 0}
          />
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent"
        aria-hidden
      />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-white/75">
          Live look
        </p>
        <p className="mt-1 font-display text-xl text-white md:text-2xl">
          {frames[active]?.label}
        </p>
        <div className="mt-4 flex gap-2" aria-hidden>
          {frames.map((frame, index) => (
            <span
              key={frame.src}
              className={`h-1 flex-1 transition-colors duration-500 ${
                index === active ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
