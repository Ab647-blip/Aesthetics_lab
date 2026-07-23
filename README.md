# Aesthetics Labs — Demo Marketing Site

Frontend-only demo website for a fictional medical aesthetics clinic in Lahore. Built for client presentations: browse services, team, gallery, and a consultation form that validates in-browser (no backend).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, trust points, featured treatments, about teaser, testimonials, CTA |
| `/services` | Treatment catalog with category filters |
| `/about` | Care philosophy and team |
| `/gallery` | Before/after + clinic atmosphere (lightbox) |
| `/contact` | Hours, map placeholder, book/contact form UI |

## Customize content

Edit [`lib/content.ts`](lib/content.ts) for clinic details, services, team, testimonials, and gallery imagery. Replace Unsplash placeholders with client-approved assets when ready.

## Notes

- Forms show a success state only; nothing is submitted to a server.
- This is demo/marketing content, not a live clinic.
