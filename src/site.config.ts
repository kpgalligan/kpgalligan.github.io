// Edit this file to re-label the site. Header, Footer, the homepage and the
// SEO defaults all read from here instead of hardcoding copy.
//
// Social `icon` bodies are 24x24 stroke icons: lucide for LinkedIn, GitHub
// and Email; tabler for Bluesky and X. The <svg> wrapper in Header.astro
// supplies the stroke attributes, so each body is just the paths.
export const SITE = {
    name: "Kevin Galligan",
    location: "New York, NY",
    email: "kgalligan@gmail.com",
    description:
        "Kevin Galligan — engineer, engineering leader, and founder. Native mobile, Kotlin Multiplatform, and developer tooling. New York, NY.",
    social: [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kpgalligan/",
            icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
        },
        {
            label: "GitHub",
            href: "https://github.com/kpgalligan",
            icon: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
        },
        {
            label: "Bluesky",
            href: "https://bsky.app/profile/kpgalligan.bsky.social",
            icon: '<path d="M6.335 5.144C4.681 3.945 2 3.017 2 5.97c0 .59.35 4.953.556 5.661C3.269 14.094 5.686 14.381 8 14c-4.045.665-4.889 3.208-2.667 5.41C6.363 20.428 7.246 21 8 21c2 0 3.134-2.769 3.5-3.5q.5-1 .5-1.5q0 .5.5 1.5c.366.731 1.5 3.5 3.5 3.5c.754 0 1.637-.571 2.667-1.59C20.889 17.207 20.045 14.664 16 14c2.314.38 4.73.094 5.444-2.369c.206-.708.556-5.072.556-5.661c0-2.953-2.68-2.025-4.335-.826C15.372 6.806 12.905 10.192 12 12c-.905-1.808-3.372-5.194-5.665-6.856"/>',
        },
        {
            label: "X",
            href: "https://x.com/kpgalligan",
            icon: '<path d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/>',
        },
        {
            label: "Email",
            href: "mailto:kgalligan@gmail.com",
            icon: '<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
        },
    ],
    locale: "en",
} as const;

export const NAV_LINKS = [{ label: "Writing", href: "/blog" }] as const;
