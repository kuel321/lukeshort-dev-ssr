// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import node from '@astrojs/node';



export default defineConfig({
  site: 'https://lukeshort.dev', // <-- your personal domain here
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    preact()

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
