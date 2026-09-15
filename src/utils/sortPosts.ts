import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">;

/**
 * The listing order used by both /blog and the homepage.
 *
 * Dated posts come first, newest first. Undated posts follow, ordered by
 * `displayOrder` ascending; ones without a `displayOrder` fall to the end of
 * that group, alphabetically, so the order stays stable rather than tracking
 * filesystem order.
 */
export function sortPosts(posts: Post[]): Post[] {
    return [...posts].sort((a, b) => {
        const aDate = a.data.pubDate;
        const bDate = b.data.pubDate;

        if (aDate && bDate) return bDate.valueOf() - aDate.valueOf();
        if (!aDate && bDate) return 1;
        if (aDate && !bDate) return -1;

        const aOrder = a.data.displayOrder ?? Number.MAX_SAFE_INTEGER;
        const bOrder = b.data.displayOrder ?? Number.MAX_SAFE_INTEGER;
        if (aOrder !== bOrder) return aOrder - bOrder;

        return a.data.title.localeCompare(b.data.title);
    });
}
