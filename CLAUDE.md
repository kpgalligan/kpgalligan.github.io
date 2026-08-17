# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install      # pnpm is the package manager (pnpm-lock.yaml)
pnpm dev          # dev server at http://localhost:4321
pnpm build        # static output → dist/
pnpm preview      # serve the built dist/
```

There is **no linter, formatter, or test runner** configured — `astro` is the only binary in `node_modules/.bin`. Type checking is not wired up either: `pnpm astro check` requires installing `@astrojs/check` and `typescript` first (it will prompt). The only build-time verification is `pnpm build`.

## Stack & architecture

Astro 5 (static output, no adapter/SSR) + Tailwind CSS 4 + React 19 islands + shadcn/ui.

**Tailwind is wired through the Vite plugin** (`@tailwindcss/vite` in `astro.config.mjs`), not an Astro integration. There is no `tailwind.config.mjs` — Tailwind v4 config lives entirely in CSS. `components.json` still points at a `tailwind.config.mjs` that doesn't exist; ignore that field.

### Styling / design tokens

`src/styles/globals.css` is the single style entry point (imported by `src/layouts/Layout.astro`). Note the two-layer token system:

1. `@layer base` defines raw HSL triplets as CSS vars (`--primary: 240 5.9% 10%`) under `:root` and `.dark`.
2. `@theme` maps them to Tailwind color utilities (`--color-primary: hsl(var(--primary))`).

**Adding a new color means editing both places** — a var in `@layer base` alone produces no utility class.

Gotchas:
- `src/styles/global.css` (singular) is an unused one-line stub. The real file is `globals.css` (plural).
- Dark mode is hardcoded: `<html lang="en" class="dark">` in `Layout.astro`. There is no theme toggle, so the light `:root` values are effectively dead.
- `prose-*` classes are active: `@tailwindcss/typography` is installed and loaded via `@plugin "@tailwindcss/typography";` in `globals.css` (v4 style, no config file). However, `animate-in` / `slide-in-from-*` classes in `Hero.astro` and `MobileMenu.tsx` are still **inert** — no animate plugin is installed.

### Page composition

Every content page follows: `Layout` (sets `<title>`/meta, imports globals.css) → `Header` → `<main>` → `Footer`. `login.astro` and `register.astro` intentionally skip Header/Footer.

Section blocks live in `src/components/blocks/` (Hero, FeatureGrid, Pricing, Roadmap, FAQ) and are composed by pages. **Marketing copy is hardcoded as arrays in each block's frontmatter**, not in a data file or CMS — to change pricing tiers, roadmap items, features, or FAQs, edit the corresponding block.

Path alias `@/*` → `src/*` (tsconfig). Pages import `Layout` by relative path but everything else via `@/`.

### React islands

Only two components ship JS, both `client:load`: `MobileMenu.tsx` (Header) and `FAQAccordion.tsx` (FAQ block). Everything else is zero-JS.

React components imported into `.astro` files **without** a `client:` directive render statically — that's how `lucide-react` icons and `ui/badge.tsx` are used. In practice, `.astro` files don't use `ui/button.tsx` at all: they inline the `buttonVariants` class string on `<a>` elements (see `Header.astro`, which imports `Button` but never renders it). Follow the surrounding pattern rather than converting these to islands.

`src/components/ui/` is shadcn/ui (style `new-york`, base color `zinc`, `cn()` from `src/lib/utils.ts`). Adding components via the shadcn CLI should work with the existing `components.json` aliases.

**Nav links are duplicated**: the desktop `<nav>` in `Header.astro` hardcodes each `<a>`, while the same list exists as the `navLinks` array passed to `MobileMenu`. Adding a nav item requires editing both.

### Blog

Astro 5 content collections. Schema is in `src/content.config.ts` (project-root style, not `src/content/config.ts`) using the `glob` loader over `src/content/blog/**/*.md`. Required frontmatter: `title`, `pubDate` (date), `author`, `category`; optional: `excerpt`, `readTime`, `heroImage`.

- `src/pages/blog/[...slug].astro` uses `getStaticPaths` with `post.id` as the slug (filename without extension), and `render(post)` for the body.
- The category filter on `/blog` is a plain inline `<script>` toggling `style.display` on `.post-card` elements — not React, not a router. New filter behavior goes in that script.

## Repository state

This is an unmodified copy of the "Upgrade" commercial Astro theme (see `LICENSE.md` and `README.md`), intended to become a personal site. All copy, branding, and metadata still say "Upgrade CMS" — including `package.json`'s `name`, the default description in `Layout.astro`, the logo text in `Header.astro`/`Footer.astro`, and every page title. Expect placeholder content, and expect it in more than one place.

The auth pages (`/login`, `/register`) are visual only — no form handlers, no backend, no API routes.

This directory is **not a git repository**.
