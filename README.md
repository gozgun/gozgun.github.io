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
- `site.ts`: links and the GoatCounter code.

The portrait is `src/components/Portrait.astro`; replace the paths with your own SVG any time.
The CV lives in `public/cv/gunes-ozgun-cv.pdf`.

## Visitor counter

The site uses [GoatCounter](https://gozgun.goatcounter.com) without cookies. Besides page views it counts these events: CV and LinkedIn clicks (`cv-download`, `linkedin`, `linkedin-contact`), skill chips (`skill-…`) and shelf items (`shelf-…`).

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`.
One-time setup: repository Settings → Pages → Build and deployment → Source: **GitHub Actions**.
