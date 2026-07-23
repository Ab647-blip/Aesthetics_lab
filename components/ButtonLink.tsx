import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-sage-deep text-surface hover:bg-sage focus-visible:outline-sage-deep",
  secondary:
    "border border-surface/70 bg-transparent text-surface hover:bg-surface/10 focus-visible:outline-surface",
  ghost:
    "border border-border bg-transparent text-foreground hover:border-sage hover:text-sage-deep focus-visible:outline-sage",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const classNames = `inline-flex items-center justify-center px-5 py-3 text-sm tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`;
  const isExternal =
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
