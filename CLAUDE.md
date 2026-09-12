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

Astro 7 (static output, no adapter/SSR) + Tailwind CSS 4. Zero client JS apart from the theme toggle and the blog category filter, both plain `<script>` blocks.

**Tailwind is wired through the Vite plugin** (`@tailwindcss/vite` in `astro.config.mjs`), not an Astro integration. There is no `tailwind.config.mjs` — Tailwind v4 config lives entirely in CSS.

`@astrojs/react` is still configured in `astro.config.mjs` and React is still in `package.json`, but **nothing renders React any more** — the shadcn/ui components and the mobile menu island were removed. Both can be dropped if nothing new needs them.

### Styling / design tokens

`src/styles/globals.css` is the single style entry point (imported by `src/layouts/Layout.astro`). The palette is six hex tokens, matching the `astro-starter-portfolio` theme:

| Token | Role |
| --- | --- |
| `--paper` | page background |
| `--ink` | primary text |
| `--ink-soft` | secondary text |
| `--signal` | the one accent color |
| `--line` | borders, rules |
| `--surface` | raised panels, code blocks |

Plus `--ai-accent` for the "AI was used here" robot marker on posts.

Each is defined twice — on `:root` (light) and `.dark` — then exposed to Tailwind through `@theme inline` (`--color-paper: var(--paper)` → `bg-paper`, `text-ink-soft`, `border-line`, …). **`@theme inline` is required**: without `inline`, Tailwind bakes the light value in at build time and the `.dark` swap stops working. Adding a color means editing all three places (`:root`, `.dark`, `@theme inline`).

Gotchas:
- **Dark mode is a `.dark` class on `<html>`**, driven by `@custom-variant dark (&:where(.dark, .dark *))` — not by `prefers-color-scheme` directly. The initial value is set by an inline no-FOUC script in `Layout.astro` (localStorage, falling back to the OS preference); `ThemeToggle.astro` flips it and persists the choice. Both must agree on the `theme` localStorage key.
- **Fonts come from Astro's Fonts API**, configured in the `fonts` block of `astro.config.mjs` (Literata/display, Inter/body, Space Mono/mono) and rendered by `<Font cssVariable="…" />` in `Layout.astro`'s head. They are downloaded and self-hosted at build time, so the first build after a change needs network access. `globals.css` maps `--ff-*` → `--font-display` / `--font-body` / `--font-mono`.
- `prose-*` classes are active (`@plugin "@tailwindcss/typography"` in `globals.css`). The `.prose` rules at the bottom of that file repoint typography's `--tw-prose-*` vars at the site tokens, so **`prose-invert` is not needed and should not be added** — the vars already follow the theme.
- There is no `container` utility. Page sections use `mx-auto max-w-3xl px-6` directly.

### Page composition

`Layout.astro` owns the whole shell — `<head>`, `Header`, `<main><slot /></main>`, `Footer` — so pages render only their own sections. It takes `title` and optional `description`.

`src/site.config.ts` holds the name, location, email, description, social links (inline SVG path bodies) and `NAV_LINKS`. Header, Footer and Hero read from it; **edit site-wide copy and links there, not in the components**.

Section blocks live in `src/components/blocks/`. `Hero` and `RecentPosts` are on the homepage; `WhatIDo` and `Timeline` are written and styled but **not currently rendered by any page** — their copy lives in arrays in each block's frontmatter.

Shared pieces: `Button.astro` (solid/ghost pill), `SectionHeading.astro` (mono uppercase eyebrow + optional count), `PostRow.astro` (the date/title/meta row used by both post listings), `ThemeToggle.astro`, `YouTubeEmbed.astro`.

Path alias `@/*` → `src/*` (tsconfig). Pages import `Layout` by relative path but everything else via `@/`.

### Blog

Astro content collections. Schema is in `src/content.config.ts` (project-root style, not `src/content/config.ts`) using the `glob` loader over `src/content/blog/**/*.md`. Required frontmatter: `title`, `pubDate` (date), `author`, `category`; optional: `excerpt`, `readTime`, `heroImage`, `youtubeUrl`, `aiDeclaration`.

- `src/pages/blog/[...slug].astro` uses `getStaticPaths` with `post.id` as the slug (filename without extension), and `render(post)` for the body. `aiDeclaration` renders the robot icon from `public/svg/robot.svg`, inlined via `fs.readFileSync` so it can inherit `currentColor`.
- The category filter on `/blog` is a plain `<script>` toggling `style.display` on `.post-card` elements — not React, not a router. Rows are `display: grid`, so the script restores `""`, **not `"block"`** (which would collapse the columns). New filter behavior goes in that script.
- Dates are formatted through `src/utils/formatDate.ts` (`compact` = MM/YYYY for listing rows, `long` for the post header).

## Repository state

Started as the "Upgrade" commercial Astro theme (see `LICENSE.md` and `README.md`), since restyled to match the `astro-starter-portfolio` theme. `package.json`'s `name` is still the theme's (`astro-boirletplates-landing`), and `README.md` still documents the original theme; page copy and metadata are Kevin's.
