export default function Robots(req, res) {
  const robots = `User-agent: *
Allow: /

Disallow: /api/
Disallow: /_next/

Sitemap: https://www.senthiljaganathan.in/api/sitemap

# Senthil Jaganathan - Tamil Author Website
# https://www.senthiljaganathan.in
`;
  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();
}
