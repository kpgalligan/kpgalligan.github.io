import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        // Undated posts are allowed. They sort ahead of every dated post,
        // ordered among themselves by `displayOrder` (see utils/sortPosts).
        pubDate: z.date().optional(),
        displayOrder: z.number().optional(),
        author: z.string(),
        category: z.string(),
        excerpt: z.string().optional(),
        readTime: z.string().optional(),
        heroImage: z.string().optional(),
        youtubeUrl: z.string().optional(),
        aiDeclaration: z.string().optional(),
    }),
});

export const collections = { blog };
