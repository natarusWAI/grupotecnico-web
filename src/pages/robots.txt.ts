import type { APIContext } from 'astro';

export function GET({ site }: APIContext) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  // Mientras está en GitHub Pages (vista previa) no se indexa, para no competir con la web actual.
  const preview = import.meta.env.PREVIEW === 'true' || process.env.PREVIEW === 'true';
  const body = preview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: ${base}/admin/\n\nSitemap: ${new URL(`${base}/sitemap-index.xml`, site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
