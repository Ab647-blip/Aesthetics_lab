"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinic, navLinks } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Light nav text only over the home hero; solid bar elsewhere / after scroll
  const overHero = pathname === "/" && !scrolled && !open;
  const solid = !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-border/80 bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className={`font-display text-xl tracking-tight transition-colors md:text-2xl ${
            overHero ? "text-white" : "text-foreground"
          }`}
        >
          {clinic.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  overHero
                    ? active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-accent-deep"
                      : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`inline-flex items-center px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
              overHero
                ? "bg-white text-foreground hover:bg-white/90"
                : "bg-accent text-surface hover:bg-accent-deep"
            }`}
          >
            Book consultation
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center md:hidden ${
            overHero ? "text-white" : "text-foreground"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-px w-full transition-transform ${
                overHero ? "bg-white" : "bg-foreground"
              } ${open ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-full transition-opacity ${
                overHero ? "bg-white" : "bg-foreground"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 block h-px w-full transition-transform ${
                overHero ? "bg-white" : "bg-foreground"
              } ${open ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border bg-background md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 text-base ${
                  active ? "text-accent-deep" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center bg-accent px-4 py-3 text-sm font-medium text-surface"
          >
            Book consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
