import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        category: z.string(),
        excerpt: z.string().optional(),
        readTime: z.string().optional(),
        heroImage: z.string().optional(),
        youtubeUrl: z.string().optional(),
    }),
});

export const collections = { blog };
