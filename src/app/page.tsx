import Hero from '@/components/home/Hero/Hero';
import HakkimizdaOzet from '@/components/home/HakkimizdaOzet';
import IstatistikSeridi from '@/components/home/IstatistikSeridi';
import SonHaberler from '@/components/home/SonHaberler';
import UyeLogoSeridi from '@/components/home/UyeLogoSeridi';
import IletisimCTA from '@/components/home/IletisimCTA';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Yaskoop | Yalova Süs Bitkileri Kooperatifi',
  description:
    "Yalova'nın süs bitkileri üreticileri, sürdürülebilir üretim ve yenilikçi peyzaj çözümleri için Yaskoop çatısı altında buluşuyor.",
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HakkimizdaOzet />
      <IstatistikSeridi />
      <SonHaberler />
      <UyeLogoSeridi />
      <IletisimCTA />
    </>
  );
}
