import type { ImageMetadata } from "astro";
import subwatchIcon from "@/assets/projects/subwatch/icon.png";

// Hand-maintained: every project is a regular page at
// src/pages/projects/<slug>.astro. Add a row here when you add a page.
//
// `hidden` takes a project off the site without deleting it: the index
// skips the row, and the page returns an empty response, so the static
// build writes no file for it. Flip it back to publish again.
export interface Project {
    slug: string;
    title: string;
    eyebrow: string;
    summary: string;
    icon: ImageMetadata;
    hidden?: boolean;
}

export const PROJECTS: Project[] = [
    {
        slug: "subwatch",
        title: "SubWatch",
        eyebrow: "macOS menu bar app",
        summary:
            "Shows how much of each AI subscription's rate limit you have used, in the menu bar. Claude Code and Codex.",
        icon: subwatchIcon,
        hidden: true,
    },
];

export const visibleProjects = () => PROJECTS.filter((project) => !project.hidden);

export const isHidden = (slug: string) =>
    PROJECTS.find((project) => project.slug === slug)?.hidden ?? false;
