import Hero from '@/components/home/Hero/Hero';
import HakkimizdaOzet from '@/components/home/HakkimizdaOzet';
import IstatistikSeridi from '@/components/home/IstatistikSeridi';
import NelerYapiyoruzOzet from '@/components/home/NelerYapiyoruzOzet';
import SonHaberler from '@/components/home/SonHaberler';
import UyeLogoSeridi from '@/components/home/UyeLogoSeridi';
import IletisimCTA from '@/components/home/IletisimCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HakkimizdaOzet />
      <IstatistikSeridi />
      <NelerYapiyoruzOzet />
      <SonHaberler />
      <UyeLogoSeridi />
      <IletisimCTA />
    </>
  );
}
