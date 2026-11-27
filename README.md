# Morgan Escott — Portfolio Site

Personal portfolio site built with Astro, TinaCMS, Tailwind CSS, and deployed on Vercel.

**Live site:** [morganescott.com](https://morganescott.com)

## Stack

- [Astro](https://astro.build) — static site framework
- [TinaCMS](https://tina.io) — visual content editor
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Vercel](https://vercel.com) — deployment & hosting

## Local Development

```sh
npm install
npm run dev
```

## Content Editing

Run the dev server (above) to access the visual editor at `localhost:4321/admin`.

## Portfolio design

The full-screen ink opening at `/` lives in `src/components/opening.astro`. The portfolio starts at `/home/` with `src/components/desk-hero.astro`. Both desk layers share the same crop to keep the transparent foreground registered to the photograph. Their media is served from `public/neon/`. The film is a web-sized version of the [original ink footage](https://pixabay.com/videos/ink-ink-drop-liquid-fluid-paint-42154/). The keyboard, texture, and two featured-work illustrations come from Morgan’s Wix portfolios. The shared palette, type, and reduced-motion styles live in `src/styles/global.css`.

Home, experience, tools, and project index content are in `src/data/`. Full case-study copy is in `src/data/case-studies.ts`. Case studies are statically generated at `/project/` and `/project/<slug>/`. The print-friendly résumé is at `/resume/`; use its **Print / Save as PDF** control to export a current PDF from the browser.
