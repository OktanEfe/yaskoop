import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteOrigin } from '@/lib/seo';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  applicationName: 'Yaskoop',
  title: {
    default: 'Yaskoop | Yalova Süs Bitkileri Kooperatifi',
    template: '%s | Yaskoop',
  },
  description:
    "S.S. Yalova Süs Bitkileri İşletme Kooperatifi. Yalova'nın köklü üreticilerini, bitki çeşitliliğini ve sürdürülebilir üretim anlayışını bir araya getiriyoruz.",
  keywords: [
    'Yaskoop',
    'Yalova süs bitkileri',
    'bitki üretimi',
    'fidanlık',
    'peyzaj bitkileri',
    'üretici kooperatifi',
    'sürdürülebilir tarım',
  ],
  authors: [{ name: 'S.S. Yalova Süs Bitkileri İşletme Kooperatifi' }],
  creator: 'S.S. Yalova Süs Bitkileri İşletme Kooperatifi',
  robots: { index: process.env.VERCEL_ENV !== 'preview', follow: true },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Yaskoop',
    title: 'Yaskoop | Yalova Süs Bitkileri Kooperatifi',
    description:
      "Yalova'nın köklü süs bitkileri üreticileri, sürdürülebilir üretim ve yenilikçi peyzaj çözümleri için aynı çatı altında.",
    ...(siteOrigin
      ? {
          images: [
            {
              url: '/images/hero/hero.jpg',
              width: 1200,
              height: 630,
              alt: 'Yaskoop süs bitkileri üretimi',
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: siteOrigin ? 'summary_large_image' : 'summary',
    title: 'Yaskoop | Yalova Süs Bitkileri Kooperatifi',
    description:
      "Yalova'nın köklü süs bitkileri üreticileri, sürdürülebilir üretim ve yenilikçi peyzaj çözümleri için aynı çatı altında.",
    ...(siteOrigin ? { images: ['/images/hero/hero.jpg'] } : {}),
  },
  category: 'agriculture',
};

export const viewport: Viewport = {
  themeColor: '#173822',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
