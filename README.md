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

The ink opening and scrolling keyboard hero live in `src/components/opening.astro`. Their media is served from `public/neon/`. The film is a web-sized version of the [original ink footage](https://pixabay.com/videos/ink-ink-drop-liquid-fluid-paint-42154/). The keyboard, texture, and two featured-work illustrations come from Morgan’s Wix portfolios. The shared palette, type, and reduced-motion styles live in `src/styles/global.css`.

Home, experience, tools, and project content are in `src/data/`. The résumé link appears when the home profile has a résumé URL.
