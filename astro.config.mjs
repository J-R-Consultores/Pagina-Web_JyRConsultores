import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jyrconsultoresmx.com/',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon({
    include: {
      mdi: ['*'], // Esto permite usar cualquier icono de la colección MDI
      lucide: ['*'], // Si decides usar los que te pasé antes
    },
  }), react(), sitemap()],
  output: 'static',
  adapter: netlify(),
});