// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { getDynamicPages } from './src/utils/sitemap-pages.js';

export default defineConfig({
  site: 'https://lukeshort.dev', // <-- your personal domain here
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    preact(),
    sitemap({
      entryLimit: 1000,
      customPages: await getDynamicPages()
    })
  ],
  vite: {
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
  },
});
