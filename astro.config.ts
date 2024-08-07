import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { THEME_CONFIG } from "./src/theme.config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import expressiveCode from 'astro-expressive-code';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: THEME_CONFIG.website,
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: [],
      wrap: true,
    },
  },
  integrations: [
    UnoCSS({
      injectReset: true
    }),
    expressiveCode({
      themes: THEME_CONFIG.expressiveCode_theme,
      styleOverrides: {
          codeFontSize: '1rem'
      }
  }),
    robotsTxt(),
    sitemap(),
    mdx()
  ]
});
