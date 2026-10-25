// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import rehypeBase from './src/lib/rehype-base.mjs';

// SITE y BASE se inyectan desde el workflow de GitHub Pages.
// En el hosting definitivo: SITE=https://grupotecnico.com.uy y BASE=/
const site = process.env.SITE ?? 'https://grupotecnico.com.uy';
const base = process.env.BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/admin') && !page.includes('/gracias') }),
  ],
  markdown: { processor: unified({ rehypePlugins: [rehypeBase(base)] }) },
  vite: { plugins: [tailwindcss()] },
  // Mantiene el SEO ganado por las URLs de la web WordPress actual.
  redirects: {
    '/cual-es-la-diferencia-entre-una-heladera-de-frio-seco-y-humedo': '/blog/heladera-frio-seco-o-humedo',
    '/problemas-simples-de-solucionar-del-lavarropas': '/blog/problemas-simples-lavarropas',
    '/category/heladeras': '/blog',
    '/category/lavarropas': '/blog',
  },
});
