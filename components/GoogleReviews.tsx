import { clinic, googleReviews } from "@/lib/content";

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.round(rating);
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-3.5 w-3.5 ${filled ? "text-[#FABB05]" : "text-border"}`}
          >
            <path
              fill="currentColor"
              d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.27 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function GoogleReviews() {
  const reviews = googleReviews.slice(0, 3);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <GoogleMark className="h-6 w-6 shrink-0" />
          <span className="font-display text-2xl text-foreground">
            {clinic.googleRating.toFixed(1)}
          </span>
          <Stars rating={clinic.googleRating} />
          <span className="text-sm text-muted">
            {clinic.googleReviewCount} reviews
          </span>
        </div>
        <a
          href={clinic.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
        >
          See all
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {reviews.map((item) => (
          <article
            key={item.id}
            className="border border-border bg-surface px-4 py-4"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <Stars rating={item.rating} />
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed text-muted">
              “{item.quote}”
            </blockquote>
          </article>
        ))}
      </div>
    </div>
  );
}
