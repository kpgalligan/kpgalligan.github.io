# Upgrade - Premium SaaS & DevTools Astro Theme

**Upgrade** is a high-performance, developer-focused landing page template built with the latest web technologies: **Astro 5**, **Tailwind CSS 4**, and **React**.

Designed specifically for **SaaS products**, **developer tools**, and **open-source projects**, this theme provides a premium, "dark mode" aesthetic that builds trust and authority with technical audiences.

![Upgrade Theme Preview](public/favicon.png)

## 🎯 Objective & Use Cases

The main goal of this template is to provide a **production-ready foundation** for developers who need to launch a marketing site quickly without compromising on design quality or performance.

**Perfect for:**
- 🚀 **SaaS Startups**: Launch your product with a credible, high-converting design.
- 🛠️ **Developer Tools**: Show code snippets and technical features with syntax highlighting.
- 📱 **Mobile Apps**: Showcase your app features with a responsive, mobile-first layout.
- 📘 **Documentation/Info Sites**: Clean typography and readable layouts for content.

## ⚡ Technology Stack

We chose the most modern and performant stack available in late 2024/2025:

- **[Astro 5.0](https://astro.build)**: The web framework for content-driven websites. Zero JS by default, meaning blazing fast load times.
- **[Tailwind CSS 4.0](https://tailwindcss.com)**: The latest version of the utility-first CSS framework, utilizing the new `@theme` directive for easier customization and smaller bundle sizes.
- **[React 19](https://react.dev)**: Used selectively for interactive islands (like the FAQ accordion and Mobile Menu), ensuring interactivity where needed without slowing down the initial page load.
- **[Shadcn/UI](https://ui.shadcn.com)**: A collection of re-usable components built with Radix UI and Tailwind CSS. Accessible, customizable, and beautiful.
- **[TypeScript](https://www.typescriptlang.org)**: Fully typed codebase for a robust developer experience and fewer bugs.

## 📦 What's Included?

This template comes with **8 pre-built pages** and a complete design system:

### Pages
1.  **Home (`/`)**: High-conversion landing page with Hero, Features, Roadmap, Pricing, and FAQ.
2.  **Product (`/product`)**: Detailed feature breakdown with code preview blocks.
3.  **About (`/about`)**: Company mission, stats, and values.
4.  **Roadmap (`/roadmap`)**: Timeline of features (In Progress, Planned, Shipped).
5.  **FAQs (`/faqs`)**: Dedicated help center page with accordion.
6.  **Blog (`/blog`)**: Dynamic article listing powered by Astro Content Collections with category filters.
7.  **Login (`/login`)**: Authentication UI with social providers (Google/GitHub).
8.  **Register (`/register`)**: Sign-up UI with form validation styles.

### Components & Features
-   📱 **Mobile Menu**: Fully responsive navigation with backdrop blur.
-   🎨 **Dark Mode Design**: Carefully curated zinc/slate color palette.
-   🧩 **UI Components**: Buttons, Badges, Cards, Accordions, Inputs.
-   🔍 **SEO Optimized**: Meta tags, semantic HTML5, and accessible contrast ratios.

## 🚀 Getting Started

Follow these steps to get your project up and running locally.

### Prerequisites
-   **Node.js** (v18.17.1 or higher)
-   **pnpm** (recommended), npm, or yarn

### Installation

1.  **Unzip the project**
    Extract the `upgrade-astro-theme.zip` file to your desired folder.

2.  **Install dependencies**
    Open your terminal in the project folder and run:
    ```bash
    pnpm install
    ```

3.  **Start the development server**
    ```bash
    pnpm dev
    ```
    The site will be available at `http://localhost:4321`.

4.  **Build for production**
    When you're ready to deploy:
    ```bash
    pnpm build
    ```
    This will generate a static `dist/` folder ready to be hosted on Vercel, Netlify, Cloudflare Pages, or any static host.

## 🎨 Customization Guide

### Changing Colors
The theme uses CSS variables defined in `src/styles/globals.css`. To change the primary brand color, simply update the `--primary` HSL values.

### Changing the Logo
1.  Open `src/components/Header.astro`.
2.  Replace the text "Upgrade" with your brand name or an `<img>` tag with your logo.
3.  Do the same in `src/components/Footer.astro`.

### Updating Navigation
Edit `src/components/Header.astro` and `src/components/MobileMenu.tsx` to add or remove links.

## 📂 Project Structure

```text
src/
├── components/
│   ├── blocks/       # Section components (Hero, Pricing, etc.)
│   ├── ui/           # Shadcn UI primitives (Button, Badge, etc.)
│   ├── Header.astro  # Main navigation
│   ├── Footer.astro  # Site footer
│   └── ...
├── content/
│   └── blog/         # Markdown blog posts (add your .md files here)
├── layouts/
│   └── Layout.astro  # Base HTML layout with SEO headers
├── pages/
│   ├── blog/
│   │   └── [...slug].astro  # Dynamic blog post template
│   ├── index.astro
│   ├── blog.astro    # Blog listing page
│   └── ...
├── styles/
│   └── globals.css   # Global styles & Tailwind config
└── content.config.ts # Blog schema definition
```

## ✍️ Adding Blog Posts

The blog uses **Astro Content Collections** for type-safe, dynamic content management.

### Creating a New Post

1. Create a new `.md` file in `src/content/blog/`:
   ```bash
   src/content/blog/my-new-post.md
   ```

2. Add the required frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   pubDate: 2025-02-05
   author: "Your Name"
   category: "Tutorials"
   excerpt: "A brief description of your post"
   readTime: "5 min read"
   ---
   
   # Your content here
   
   Write your article using standard Markdown syntax.
   ```

3. Run `pnpm dev` — your post will automatically appear at `/blog/my-new-post`

### Required Fields
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Post title |
| `pubDate` | date | Publication date (YYYY-MM-DD) |
| `author` | string | Author name |
| `category` | string | Category for filtering |

### Optional Fields
| Field | Type | Description |
|-------|------|-------------|
| `excerpt` | string | Short description |
| `readTime` | string | Estimated reading time |
| `heroImage` | string | Hero image path |

## 👨‍💻 Author

**Created by [Jawuil](https://jawuil.dev)**

---

*Note: This is a template. Authentication and backend logic (forms, database) are visual representations and need to be connected to your own backend services.*
