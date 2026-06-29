import type { APIRoute } from 'astro';
import { siteConfig } from '../lib/site';

export const GET: APIRoute = () => {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date().toISOString();

  const urls = [
    { loc: base, priority: '1.0', changefreq: 'weekly' },
    { loc: `${base}/gallery`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${base}/lawn-renovations`, priority: '0.75', changefreq: 'monthly' },
    { loc: `${base}/areas-we-serve`, priority: '0.65', changefreq: 'monthly' },
    { loc: `${base}/about`, priority: '0.7', changefreq: 'monthly' },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
