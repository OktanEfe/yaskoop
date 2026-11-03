import type { Metadata } from 'next';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_URL?.trim();

export const canonicalSiteOrigin = configuredSiteUrl
  ? new URL(configuredSiteUrl)
  : undefined;

export const siteOrigin =
  canonicalSiteOrigin ??
  (vercelUrl
    ? new URL(`https://${vercelUrl}`)
    : process.env.NODE_ENV === 'development'
      ? new URL('http://localhost:3000')
      : undefined);

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonical = canonicalSiteOrigin
    ? new URL(path, canonicalSiteOrigin).toString()
    : undefined;
  const pageUrl = siteOrigin ? new URL(path, siteOrigin).toString() : undefined;
  const socialImage = '/images/hero/hero.jpg';

  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      siteName: 'Yaskoop',
      title,
      description,
      ...(pageUrl
        ? {
            url: pageUrl,
            images: [{ url: socialImage, alt: 'Yaskoop süs bitkileri üretimi' }],
          }
        : {}),
    },
    twitter: {
      card: pageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(pageUrl ? { images: [socialImage] } : {}),
    },
  };
}
