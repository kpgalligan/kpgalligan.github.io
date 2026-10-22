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

Astro 7 (static output, no adapter/SSR) + Tailwind CSS 4. Zero client JS apart from the theme toggle, which is a plain `<script>` block.

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

Astro content collections. Schema is in `src/content.config.ts` (project-root style, not `src/content/config.ts`) using the `glob` loader over `src/content/blog/**/*.md`. Required frontmatter: `title`, `author`, `category`; optional: `pubDate` (date), `displayOrder` (number), `excerpt`, `readTime`, `heroImage`, `youtubeUrl`, `aiDeclaration`.

**`category` is still required by the schema but is no longer rendered anywhere** — the listing rows, the post header, and the `/blog` filter that used it were all removed (the blog is too small to warrant categories). New posts still have to declare a value. Drop it from `src/content.config.ts` and from each post's frontmatter if it stays unused.

**`pubDate` is optional.** Dated posts sort first, newest first. Undated posts follow, ordered among themselves by `displayOrder` ascending, with any lacking one falling to the end of that group alphabetically. That rule lives in `src/utils/sortPosts.ts` and is the only sort both `/blog` and `RecentPosts` use — **don't re-sort at a call site**, or the two listings drift. An undated post renders an em dash in the listing's date column (keeping the row grid aligned) and omits the `Date —` pair from the post header.

- `src/pages/blog/[...slug].astro` uses `getStaticPaths` with `post.id` as the slug (filename without extension), and `render(post)` for the body. `aiDeclaration` renders `src/components/AiDeclaration.astro` (shared with project pages), which inlines `public/svg/robot.svg` through a Vite `?raw` import so the icon inherits `currentColor`. Keep it a `?raw` import: a runtime `fs` read relative to `import.meta.url` breaks once the component is bundled into its own chunk.
- Dates are formatted through `src/utils/formatDate.ts` (`compact` = MM/YYYY for listing rows, `long` for the post header).

### Projects

Project landing pages are **regular Astro pages**, one file each under `src/pages/projects/` (`subwatch.astro`), deliberately not a content collection: with two or three of them, a schema only gets in the way of a page that wants a different section. Each page keeps its copy in frontmatter arrays (the `WhatIDo`/`Timeline` pattern) and composes the section components in `src/components/project/` — `ProjectHero` (buttons go in its default slot), `ScreenshotFigure`, `FeaturePair`, `FeatureGrid`, `SpecList`, `ReleaseList`, `FaqList` — each under a `SectionHeading`, in the order hero → lead screenshot → features → also → (video) → specs (+ download) → releases → FAQ + contact. Leave a section out by not writing it; nothing renders an empty state. Icons and screenshots live in `src/assets/projects/<name>/` and are imported into the page for Astro's `<Image>`, which is why `sharp` is a direct dependency (pnpm does not expose Astro's transitive copy, and the build fails without it).

`src/pages/projects.astro` is the index. Its list is the hand-maintained `PROJECTS` array in `src/projects.ts` — add a row when you add a page. A row with `hidden: true` is off the site without being deleted: the index skips it, and the page's frontmatter starts with `if (isHidden("<slug>")) return new Response(null, { status: 204 });`, which makes the static build write no file for it (Astro skips a prerendered page whose response has no body). Every project page needs that guard. SubWatch is currently hidden, so `/projects` renders an empty list. The design the pages follow is `designs/design_handoff_project_landing_template/README.md`; its `content-example.subwatch.md` describes an older, login-based SubWatch, and the live copy was rewritten from the app's current source.

- `FeaturePair` is two-column only when given an `image`; without one the text spans the full width. All multi-column grids are `auto-fit`, so there are no breakpoints to maintain.
- `aiDeclaration` on the hero renders the same robot note as blog posts (see above).

## Repository state

Started as the "Upgrade" commercial Astro theme (see `LICENSE.md` and `README.md`), since restyled to match the `astro-starter-portfolio` theme. `package.json`'s `name` is still the theme's (`astro-boirletplates-landing`), and `README.md` still documents the original theme; page copy and metadata are Kevin's.
