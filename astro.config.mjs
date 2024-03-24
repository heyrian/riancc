import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { autolinkConfig } from './plugins/rehype-autolink-config';
import rehypeSlug from 'rehype-slug';
import astroI18next from 'astro-i18next';
import AstroPWA from '@vite-pwa/astro';
import config from './src/config/config.json';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import config from './src/config/config.json';

const allEditorTheme = Object.values(config.settings.editorTheme);

// https://astro.build/config
export default defineConfig({
    site: config.site.base_url,
    vite: {
        define: {
            __DATE__: `'${new Date().toISOString()}'`
        }
    },
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false
            }
        }),
        expressiveCode({
            themes: allEditorTheme,
            styleOverrides: {
                codeFontSize: '1rem'
            }
        }),
        sitemap(),
        astroI18next(),
        AstroPWA({
            mode: 'production',
            base: '/',
            scope: '/',
            includeAssets: ['favicon.svg'],
            registerType: 'autoUpdate',
            manifest: {
                name: config.site.title,
                short_name: 'Astros',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ]
            },
            workbox: {
                navigateFallback: '/404',
                globPatterns: ['*.js']
            },
            devOptions: {
                enabled: true,
                navigateFallbackAllowlist: [/^\/404$/],
                suppressWarnings: true
            }
        }),
        vue(),
        mdx()
    ],
    markdown: {
        rehypePlugins: [
            rehypeSlug,
            // This adds links to headings
            [rehypeAutolinkHeadings, autolinkConfig]
        ]
    }
});
