import type { MetadataRoute } from 'next';
import { canonicalSiteOrigin } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const sitemap = canonicalSiteOrigin
    ? new URL('/sitemap.xml', canonicalSiteOrigin).toString()
    : undefined;
  const isPreviewDeployment = process.env.VERCEL_ENV === 'preview';

  return {
    rules: {
      userAgent: '*',
      ...(isPreviewDeployment
        ? { disallow: '/' }
        : { allow: '/', disallow: '/api/' }),
    },
    ...(sitemap ? { sitemap } : {}),
  };
}
