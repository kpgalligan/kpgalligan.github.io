# Handoff: project landing page template

## Overview

A **reusable landing-page template** for the projects Kevin is building — one page per app, driven
entirely by a content file. The first page it renders is SubWatch, a macOS menu bar app that
reports AI-subscription rate-limit usage, but nothing about the layout is SubWatch-specific: a
second app should be a new content entry and no new components.

The page lives inside the existing site (`kpgalligan.github.io`, Astro 7 + Tailwind 4 configured in
CSS) and uses the site's existing components wherever one already exists. It reads as a document,
not a product marketing page: warm paper, hairline rules, no cards, no gradients, one accent color
that only shows up in state.

Target routes:

- `/projects` — index of projects (out of scope here; the template is the detail page)
- `/projects/<slug>` — this template, one per app

## About the design files

`reference/SubWatch Landing.dc.html` is a **design reference created in HTML** — a prototype of the
intended look and behavior, not production code to copy. The task is to recreate it in the site's
existing Astro + Tailwind environment, using the site's real components and tokens.

Two things in the reference are prototype scaffolding and must **not** be carried over:

- `support.js` and the `<x-dc>` / `<x-import>` / `<sc-for>` / `<sc-if>` wrappers — a prototyping
  runtime. In Astro these become plain component imports, `.map()` and `{cond && …}`.
- `image-slot.js` / `<image-slot>` — a drag-and-drop placeholder standing in for screenshots that
  do not exist yet. In production these are `<img>` (ideally Astro's `<Image>`), with `width`,
  `height`, `alt` and lazy loading.

The reference also links the extracted design-system token CSS from `_ds/…/tokens/*.css`. In the
real repo those values already exist in `src/styles/globals.css` — use the repo's tokens, do not
add a second copy.

Opening the reference HTML outside this project will not render: it expects `_ds/` (token CSS +
component bundle) as a sibling. Read it as source, or view it in the design project.

## Fidelity

**High-fidelity.** Colors, type, spacing, rules and hover behavior are final and all come from the
site's existing token set. Recreate it closely. The one thing that is deliberately unfinished is
imagery: every screenshot and the video poster are placeholders awaiting real captures.

## Architecture: the template

### Content collection

Add a `projects` collection. Schema (Zod, `src/content/config.ts`):

```ts
const link = z.object({ label: z.string(), href: z.string() });
const figure = z.object({
  image: image(),
  alt: z.string(),
  chrome: z.boolean().default(false),
  aspect: z.enum(["16/10", "16/9", "4/3"]).default("16/10"),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    eyebrow: z.string(),                 // mono uppercase label, e.g. "macOS menu bar app"
    icon: image(),                       // 1024×1024 PNG w/ transparency
    summary: z.string(),                 // 1–2 sentences, ≤ ~40 words
    meta: z.string().optional(),          // "Version 0.1.0 — macOS 15 or later — …"
    cta: link.optional(),                 // hero primary button
    repo: z.string().url().optional(),    // hero secondary button
    lead: figure.extend({ body: z.string() }).optional(),
    features: z.array(z.object({
      title: z.string(), body: z.string(),
      bullets: z.array(z.string()).max(4).default([]),
      image: image().optional(), alt: z.string().optional(),
      side: z.enum(["left", "right"]).default("right"),
    })).default([]),
    also: z.object({
      eyebrow: z.string().default("Also"),
      items: z.array(z.object({ title: z.string(), body: z.string() })).max(6),
    }).optional(),
    video: z.object({ youtubeId: z.string(), caption: z.string().optional() }).optional(),
    specs: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
    download: link.extend({ note: z.string().optional() }).optional(),
    releases: z.array(z.object({ version: z.string(), title: z.string(), body: z.string() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    contact: z.object({ body: z.string(), links: z.array(link) }).optional(),
  }),
});
```

`content-example.subwatch.md` in this bundle is a filled-in entry for every field.

**Every section is optional.** If the field is absent or empty, the section — including its
`SectionHeading` — is not rendered. No empty states, no "coming soon" placeholders.

### Components

Reuse as-is from `src/components/`:

| Component | Used for |
| --- | --- |
| `Header.astro` / `Footer.astro` | Site chrome. Nav gains a `Projects` link; it is the active item on these routes. |
| `SectionHeading.astro` | Every section label (mono, uppercase, 0.2em tracking, hairline under). |
| `Button.astro` | Hero CTAs and the download button. `solid` for primary, `outline` for the repo link. |
| `YouTubeEmbed.astro` | Demo video. |
| `WhatIDo.astro` (`DefinitionList`) | The specs table — identical 10rem/1fr definition rows. |

New, all thin and content-driven:

| Component | Props | Notes |
| --- | --- | --- |
| `project/ProjectHero.astro` | `eyebrow, icon, title, summary, meta, cta, repo` | 6px signal dot + mono eyebrow, 96px icon, Literata 36px title, prose summary, button row, mono meta line. |
| `project/ScreenshotFigure.astro` | `image, alt, chrome, aspect, caption?` | Bordered, 12px-radius well on `--surface`; optional three-dot bar; caption below. |
| `project/FeaturePair.astro` | `title, body, bullets, image, alt, side` | Two-column grid, image on `side`; bullets are em-dash rows. Collapses to one column under ~34rem. |
| `project/FeatureGrid.astro` | `items` | Imageless title + body cells, `auto-fit minmax(14rem, 1fr)`. |
| `project/ReleaseList.astro` | `releases` | 5.5rem mono version column + title/body, hairline per row. |
| `project/FaqList.astro` | `faq` | Question in Literata 16px, answer in 14px `--ink-soft`. Static — not an accordion. |

Section order on the page: hero → lead screenshot → features → also → video → specs + download →
releases → FAQ + contact → footer.

## Layout, exactly

Everything sits in the site's single container: `max-width: 48rem` (`--measure`), `padding: 0
1.5rem` (`--gutter`), `margin: 0 auto`. No full-bleed anything.

- Hero section padding: `4rem` top, `3rem` bottom (the hero is slightly tighter than the site's
  `6rem` because the eyebrow sits right under the sticky header).
- Every other section: `0` top, `5rem` bottom (`--section-pb`).
- Hero: eyebrow row, `2rem` gap, then a `flex-wrap` row — icon `96×96` fixed, text column
  `flex: 1 1 20rem`, gap `1.5rem`. Title → summary gap `1rem`; summary `max-width: 36rem`
  (`--measure-prose`). Button row `2rem` below, gap `0.75rem`, wraps. Meta line `1.25rem` below.
- Lead screenshot: `1px solid var(--line)` box, `border-radius: 0.75rem`, `background:
  var(--surface)`, `overflow: hidden`. Optional chrome bar: `0.75rem 1rem` padding, hairline
  bottom, three `10px` circles (`--radius-full`, 1px `--line` border, `--paper` fill), `0.5rem`
  gap. Image area `aspect-ratio: 16/10`. Body copy `1rem` below, 14px, `max-width: 36rem`.
- `FeaturePair`: `grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr))`, gap
  `2rem`. Image cell `aspect-ratio: 4/3`, radius `0.75rem`. The first pair carries a hairline
  bottom border with `3rem` padding below it; the second has `3rem` padding above. Bullets: a
  `1rem / 1fr` grid per row, `0.5rem` gap, em-dash in Space Mono, `0.5rem` between rows,
  `1rem` above the list.
- `FeatureGrid`: `repeat(auto-fit, minmax(min(100%, 14rem), 1fr))`, gap `2rem` row / `2.5rem`
  column. Title 16px Literata, body 14px `0.5rem` below.
- Video: `YouTubeEmbed` as-is (16/9, radius `0.75rem`, hairline, `--surface`). Mono caption
  `0.75rem` below.
- Specs: definition rows `grid-template-columns: 10rem 1fr`, gap `1.5rem`, padding `1.25rem 0`,
  hairline bottom. Term is mono uppercase 12px `--ink-soft`; body 14px `--ink-soft`. Download row
  `2rem` under the table: button + mono note, gap `0.75rem`.
- Releases: `grid-template-columns: 5.5rem 1fr`, gap `1.5rem`, `align-items: baseline`, padding
  `1.25rem 0`, hairline bottom.
- FAQ: rows padded `1.25rem 0` with a hairline bottom; answers `max-width: 36rem`,
  `text-wrap: pretty`. Contact paragraph `2rem` under the last row.

Responsive: every multi-column grid is `auto-fit` with a `min(100%, …)` track, so the page reflows
to one column with no media queries. Nothing has a fixed width except the 96px icon and the
`10px` chrome dots.

## Design tokens

All already in `src/styles/globals.css` — listed so the spec is self-sufficient.

| Token | Light | Dark | Use here |
| --- | --- | --- | --- |
| `--paper` | `#f7f6f3` | `#101114` | Page background |
| `--ink` | `#15161b` | `#f4f3ef` | Titles, emphasis |
| `--ink-soft` | `#5b5d66` | `#a2a3ab` | All body and meta copy |
| `--line` | `#e4e2dc` | `#26272d` | Every border and rule, 1px |
| `--surface` | `#efeeea` | `#1a1b20` | Screenshot and video wells |
| `--signal` | `#c2410c` | `#ff8747` | Links, hovers, active nav, the 6px dot |

Type: Literata 500 for titles (`--font-display`) — hero 36px (`--text-4xl`), feature titles 18px
(`--text-lg`), grid/FAQ/release titles 16px. Inter for prose (`--font-body`) — 16px at 1.625 for
the hero summary, 14px at 1.625 for everything else. Space Mono (`--font-mono`) for eyebrows
(12px, uppercase, `0.2em` tracking), meta lines, version columns, captions and the em-dash bullets.
Sentence case throughout; uppercase only in mono labels.

Spacing is Tailwind's 0.25rem step: the page uses 2, 3, 4, 5, 6, 8, 10, 12, 16, 20.
Radii: `9999px` (dots, buttons), `0.75rem` (screenshot and video wells). Nothing else is rounded.
Shadows: none. Cards do not exist — sections are separated by rules.

## Interactions & behavior

- **Hover** is a color change to `--signal` only, `200ms ease` on `color`, `background-color`,
  `border-color`. No opacity, no lift, no scale. Solid button: fill `--ink` → `--signal`.
  Outline button: border and text `--line`/`--ink` → `--signal`. Text links: `--ink-soft` →
  `--signal`.
- **Press states are unstyled** — browser default, deliberately.
- **Focus**: global `2px solid var(--signal)` at `3px` offset on `:focus-visible`.
- **Theme toggle** is the site's existing one: `.dark` on `<html>`, persisted in `localStorage`
  under `theme`, set pre-paint, 200ms swap gated behind `prefers-reduced-motion`. The reference
  drives it from component state; in Astro keep the existing inline script.
- The hero CTA anchors to the download section (`#download`) when the download block exists;
  otherwise it points straight at the release URL.
- No animations, no scroll effects, no entrance transitions. The only transform on the site is the
  4px arrow slide in `PostRow`, which this page does not use.

## State management

Effectively none — the page is static Astro output with no client JS beyond the theme script the
site already ships. The YouTube iframe is `loading="lazy"`. No data fetching, no forms.

## Assets

- `reference/assets/subwatch-icon.png` — the real SubWatch app icon, 1024×1024 PNG with
  transparency, supplied by Kevin. Render at 96px (`96×96` intrinsic attrs, 2x source). Ship it as
  the collection entry's `icon`.
- **Screenshots do not exist yet.** Three are needed for SubWatch: the popover open under the menu
  bar (16/10), a menu bar close-up (4/3), and the settings/accounts pane (4/3). Capture at 2x on a
  neutral desktop. Until they land, the section can stay out — the template already omits absent
  sections.
- **No demo video yet.** `video.youtubeId` is empty in the example entry, which omits the section.
- Icons: the page adds none. Arrows are the site's usual text characters (`→`), not SVG.
- No photography, illustration or background imagery anywhere — the system has no precedent for it.

## Copy notes

The SubWatch copy in the reference is drawn from the repo (`README.md`, `App/Popover/*`,
`App/TrayLabel.swift`, `App/Settings/GeneralSettingsView.swift`, `project.yml`) and is written in
the site's voice: first person where it appears at all, matter-of-fact, no second-person marketing,
no imperatives, no emoji. Three values are **unverified placeholders** and must be confirmed before
publishing: the download size ("4.1 MB"), the "signed and notarized" claim, and
`kevin@kpgalligan.com` as the contact address.

Given the site's AI-disclosure convention, consider whether these project pages should carry the
same note when a page or app was largely agent-written.

## Files

| Path | What it is |
| --- | --- |
| `reference/SubWatch Landing.dc.html` | The design reference. Read the markup for exact values. |
| `reference/support.js`, `reference/image-slot.js` | Prototype runtime and placeholder component. **Do not port.** |
| `reference/assets/subwatch-icon.png` | Real app icon asset. |
| `content-example.subwatch.md` | A complete content entry for every field in the schema. |
