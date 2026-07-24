import Link from "next/link";
import { clinic, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-accent-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl text-white md:text-3xl">
              Ready to book your slot?
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/80">
              Visit our Gulberg clinic for a clear treatment plan tailored to
              your skin.
            </p>
          </div>
          <a
            href={clinic.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-soft"
          >
            Book slot
          </a>
        </div>

        <div className="border-t border-white/15 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg text-white">{clinic.name}</p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-3 flex flex-col gap-1 text-sm text-white/65 sm:flex-row sm:flex-wrap sm:gap-x-5">
            <span>{clinic.address}</span>
            <a href={clinic.phoneHref} className="hover:text-white">
              {clinic.phone}
            </a>
            <a href={clinic.emailHref} className="hover:text-white">
              {clinic.email}
            </a>
          </div>

          <p className="mt-3 text-xs text-white/50">
            © {new Date().getFullYear()} {clinic.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
