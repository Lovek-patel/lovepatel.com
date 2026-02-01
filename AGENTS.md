# AGENTS.md

## Project overview
This repo is an Astro site (`lovepatel-site`).

## Commands
- **Dev server:** `npm run dev` (runs `astro dev`)
- **Build:** `npm run build` (runs `astro build`)
- **Preview build:** `npm run preview` (runs `astro preview`)
- **Lint/format:** No lint or format scripts are configured in `package.json`.

## Dependency policy
- **Do not add new dependencies** (including devDependencies) unless the user explicitly requests it.

## Site map (page locations)
- **Home:** `src/pages/index.astro`
- **About:** `src/pages/about.astro`
- **Projects:** `src/pages/projects/index.astro`
- **Blog (Life Updates landing page):** `src/pages/updates/index.astro`
- **Updates (entry pages):** `src/pages/updates/[slug].astro`
- **Contact:** `src/pages/contact.astro`
