import { uyeler } from '@/lib/data/uyeler';
import SectionHeading from '@/components/ui/SectionHeading';
import UyeKarti from './UyeKarti';

export default function Uyeler() {
  return (
    <section id="uyeler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Üyelerimiz"
          subtitle="Kooperatifimizi oluşturan 10 üretici ortağımız"
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {uyeler.map((uye) => (
            <UyeKarti key={uye.id} uye={uye} />
          ))}
        </div>
      </div>
    </section>
  );
}
