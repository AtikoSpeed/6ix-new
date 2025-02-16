// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore eat me out
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  site: "https://6ixarchive.com",
  base: "/",
});
