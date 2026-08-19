import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.gojoinnovation.com';

  const routes = [
    '',
    '/about',
    '/bioheed',
    '/gojo-nutrition',
    '/gojome',
    '/gojo-impact',
    '/rd-innovation',
    '/investors',
    '/careers',
    '/contact',
    '/products',
    '/shop',
    '/blog',
    '/login',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/bioheed') || route.startsWith('/gojo-nutrition') || route.startsWith('/gojome') ? 0.9 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
