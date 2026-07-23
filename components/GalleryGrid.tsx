"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery, type GalleryItem } from "@/lib/content";

type LightboxState =
  | { open: false }
  | { open: true; item: GalleryItem; focus: "before" | "after" | "single" };

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false });

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox({ open: false });
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox.open]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => {
          if (item.type === "before-after") {
            return (
              <article
                key={item.id}
                className="border border-border bg-surface p-3"
              >
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="group relative aspect-[3/4] overflow-hidden"
                    onClick={() =>
                      setLightbox({ open: true, item, focus: "before" })
                    }
                  >
                    <Image
                      src={item.before}
                      alt={`${item.title} before`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-foreground/75 px-2 py-1 text-[10px] uppercase tracking-wider text-white">
                      Before
                    </span>
                  </button>
                  <button
                    type="button"
                    className="group relative aspect-[3/4] overflow-hidden"
                    onClick={() =>
                      setLightbox({ open: true, item, focus: "after" })
                    }
                  >
                    <Image
                      src={item.after}
                      alt={`${item.title} after`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-accent/90 px-2 py-1 text-[10px] uppercase tracking-wider text-white">
                      After
                    </span>
                  </button>
                </div>
                <h3 className="mt-4 px-1 font-display text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 px-1 pb-2 text-sm text-muted">
                  {item.treatment}
                </p>
              </article>
            );
          }

          return (
            <article key={item.id} className="border border-border bg-surface">
              <button
                type="button"
                className="group relative block aspect-[4/5] w-full overflow-hidden"
                onClick={() =>
                  setLightbox({ open: true, item, focus: "single" })
                }
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </button>
              <h3 className="px-4 py-4 font-display text-xl text-foreground">
                {item.title}
              </h3>
            </article>
          );
        })}
      </div>

      {lightbox.open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setLightbox({ open: false })}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 bg-foreground/80 px-3 py-1 text-sm text-white"
              onClick={() => setLightbox({ open: false })}
            >
              Close
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={
                  lightbox.item.type === "ambiance"
                    ? lightbox.item.image
                    : lightbox.focus === "after"
                      ? lightbox.item.after
                      : lightbox.item.before
                }
                alt={lightbox.item.title}
                fill
                className="object-cover"
                sizes="90vw"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-display text-2xl text-foreground">
                {lightbox.item.title}
              </p>
              {lightbox.item.type === "before-after" ? (
                <p className="mt-1 text-sm text-muted">
                  {lightbox.item.treatment} ·{" "}
                  {lightbox.focus === "after" ? "After" : "Before"}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
