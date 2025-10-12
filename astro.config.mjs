// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://www.bastifudali.com',
  integrations: [
    react(),
    mdx({
      remarkPlugins: [],
      rehypePlugins: [],
      extendMarkdownConfig: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
