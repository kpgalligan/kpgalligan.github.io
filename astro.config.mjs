// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // v7 changed the default to 'jsx', which strips whitespace between
  // adjacent inline elements; keep the pre-v7 behavior.
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});