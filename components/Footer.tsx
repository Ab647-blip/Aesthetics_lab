import Link from "next/link";
import { clinic, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl text-foreground">{clinic.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {clinic.shortDescription}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-deep">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-deep">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{clinic.address}</li>
            <li>
              <a
                href={clinic.phoneHref}
                className="transition-colors hover:text-foreground"
              >
                {clinic.phone}
              </a>
            </li>
            <li>
              <a
                href={clinic.emailHref}
                className="transition-colors hover:text-foreground"
              >
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {clinic.name}. Demo marketing site.
          </p>
          <p>Placeholder content for client presentation — not a live clinic.</p>
        </div>
      </div>
    </footer>
  );
}
