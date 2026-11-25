// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register"
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
    integrations: [mdx(), sitemap(), react(), tinaDirective(), icon()],
    vite: {
        plugins: [tailwindcss()],
        build: {
            rollupOptions: {
                onwarn(warning, warn) {
                    // Suppress TinaCMS generated file warning
                    if (warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
                        warning.exporter === 'tinacms/dist/client') {
                        return;
                    }
                    warn(warning);
                }
            }
        }
    }
});