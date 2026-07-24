"use client";

import { useEffect, useRef } from "react";
import { servicesSpotlight } from "@/lib/content";

export default function TreatmentPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      video.pause();
      return;
    }

    const play = () => {
      void video.play().catch(() => {
        /* Autoplay may be blocked until interaction */
      });
    };

    play();
  }, []);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-foreground/90 shadow-sm ring-1 ring-border">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain"
        src={servicesSpotlight.videoSrc}
        poster={servicesSpotlight.videoPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={servicesSpotlight.videoLabel}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/50 to-transparent"
        aria-hidden
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/80">
          In clinic
        </p>
        <p className="mt-1 font-display text-lg leading-snug text-white md:text-xl">
          {servicesSpotlight.videoLabel}
        </p>
      </div>
    </div>
  );
}
