import HakkimizdaTanitim from '@/components/hakkimizda/HakkimizdaTanitim';
import Vizyon from '@/components/hakkimizda/Vizyon';
import TarihceZamanTuneli from '@/components/hakkimizda/TarihceZamanTuneli';
import YonetimKurulu from '@/components/hakkimizda/YonetimKurulu';
import OrtakOlCTA from '@/components/hakkimizda/OrtakOlCTA';
import {
  hakkimizdaHero,
  kurulusHikayesi,
  kurumsalFoto,
  tarihceZamanTuneli,
  yonetimKurulu,
  ortakOlCTA,
} from '@/lib/data/hakkimizda';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Hakkımızda',
  description:
    "Yalova'nın merkezinde faaliyet gösteren Yaskoop’un kuruluş hikâyesini, yönetim kurulunu ve üretici ortaklarını tanıyın.",
  path: '/hakkimizda',
});

export default function HakkimizdaPage() {
  return (
    <>
      <HakkimizdaTanitim hero={hakkimizdaHero} story={kurulusHikayesi} photo={kurumsalFoto} />
      <TarihceZamanTuneli items={tarihceZamanTuneli} />
      <Vizyon />
      <YonetimKurulu members={yonetimKurulu} />
      <OrtakOlCTA cta={ortakOlCTA} />
    </>
  );
}
