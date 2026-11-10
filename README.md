# gozgun.github.io

My personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Edit content

Everything you write lives in `src/data/`:

- `experience.ts`: roles, bullets and the skill tags behind the Toolkit filter. A skill chip only becomes clickable once at least one bullet (or a role's `uses`) carries that tag.
- `shelf.ts`: books, products and podcasts. For a product logo, put the file in `public/logos/` and add `logo: '/logos/libby.svg'` to the item.
- `site.ts`: links, plus the Formspree and GoatCounter IDs.

The portrait is `src/components/Portrait.astro`; replace the paths with your own SVG any time.
The CV lives in `public/cv/gunes-ozgun-cv.pdf` (an old copy at `public/files/` keeps previous links working).

## Contact form and visitor counter

Both stay switched off until their IDs are set in `src/data/site.ts`:

1. Create a free form at formspree.io and paste its ID into `formspreeId`.
2. Create a free site at goatcounter.com and paste its code into `goatcounterCode`.

GoatCounter counts page views plus these events: CV and LinkedIn clicks, skill chips (`skill-…`), shelf items (`shelf-…`) and sent messages by topic (`message-sent-…`). No cookies are used.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`.
One-time setup: repository Settings → Pages → Build and deployment → Source: **GitHub Actions**.
