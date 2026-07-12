import HakkimizdaTanitim from '@/components/hakkimizda/HakkimizdaTanitim';
import NelerYapiyoruz from '@/components/hakkimizda/NelerYapiyoruz';
import Vizyon from '@/components/hakkimizda/Vizyon';
import TarihceZamanTuneli from '@/components/hakkimizda/TarihceZamanTuneli';
import Degerlerimiz from '@/components/hakkimizda/Degerlerimiz';
import YonetimKurulu from '@/components/hakkimizda/YonetimKurulu';
import SertifikalarBelgeler from '@/components/hakkimizda/SertifikalarBelgeler';
import OrtakOlCTA from '@/components/hakkimizda/OrtakOlCTA';
import {
  hakkimizdaHero,
  kurulusHikayesi,
  kurumsalFoto,
  tarihceZamanTuneli,
  degerlerimiz,
  yonetimKurulu,
  sertifikalarBelgeler,
  ortakOlCTA,
} from '@/lib/data/hakkimizda';

export const metadata = { title: 'Hakkımızda | Yaskoop' };

export default function HakkimizdaPage() {
  return (
    <>
      <HakkimizdaTanitim hero={hakkimizdaHero} story={kurulusHikayesi} photo={kurumsalFoto} />
      <TarihceZamanTuneli items={tarihceZamanTuneli} />
      <Degerlerimiz values={degerlerimiz} />
      <NelerYapiyoruz />
      <Vizyon />
      <YonetimKurulu members={yonetimKurulu} />
      <SertifikalarBelgeler documents={sertifikalarBelgeler} />
      <OrtakOlCTA cta={ortakOlCTA} />
    </>
  );
}
