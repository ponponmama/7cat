<?php
header('Content-Type: application/xml; charset=UTF-8');
header('X-Robots-Tag: noindex');
echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
echo '    <url>' . "\n";
echo '        <loc>https://7cat.sakura.ne.jp/</loc>' . "\n";
echo '        <lastmod>2025-02-25</lastmod>' . "\n";
echo '        <changefreq>monthly</changefreq>' . "\n";
echo '        <priority>1.0</priority>' . "\n";
echo '    </url>' . "\n";
echo '</urlset>';
exit;
