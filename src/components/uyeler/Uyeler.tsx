import { uyeler } from '@/lib/data/uyeler';
import SectionHeading from '@/components/ui/SectionHeading';
import UyeKarti from './UyeKarti';

export default function Uyeler() {
  return (
    <section id="uyeler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Kurucu ortaklarımız"
          subtitle="S.S. Yalova Süs Bitkileri İşletme Kooperatifi’ni oluşturan 10 kurucu ortak."
          center
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {uyeler.map((uye, index) => (
            <UyeKarti key={uye.id} uye={uye} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
