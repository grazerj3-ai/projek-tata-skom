// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://username-kamu.https://github.com/grazerj3-ai/projek-tata-skom',

  vite: {
    plugins: [tailwindcss()]
  }
});