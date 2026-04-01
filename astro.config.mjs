import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon({
    include: {
      mdi: ['*'],
      lucide: ['*'], 
    },
  }), react()],
  output: 'static',
  adapter: netlify(),
});