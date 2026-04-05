import { blogPosts, books } from '../../data/content';

function generateSitemap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;
}

export default function Sitemap(req, res) {
  const baseUrl = 'https://www.senthiljaganathan.in';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: baseUrl, lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { url: `${baseUrl}/books`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { url: `${baseUrl}/blog`, lastmod: today, changefreq: 'daily', priority: '0.8' },
    { url: `${baseUrl}/about`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { url: `${baseUrl}/contact`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
  ];

  const bookPages = books.map(book => ({
    url: `${baseUrl}/books#${book.slug}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.dateEn,
    changefreq: 'yearly',
    priority: '0.7',
  }));

  const allPages = [...staticPages, ...bookPages, ...blogPages];
  const sitemap = generateSitemap(allPages);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
}
