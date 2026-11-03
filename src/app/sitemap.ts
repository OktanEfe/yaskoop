import type { MetadataRoute } from 'next';
import { siteOrigin } from '@/lib/seo';

const publicRoutes = [
  '/',
  '/hakkimizda',
  '/vizyon',
  '/uyeler',
  '/galeri',
  '/haberler',
  '/iletisim',
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin) return [];

  return publicRoutes.map((path, index) => ({
    url: new URL(path, siteOrigin).toString(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));
}
