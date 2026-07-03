import { uyeler } from '@/lib/data/uyeler';
import SectionHeading from '@/components/ui/SectionHeading';
import UyeKarti from './UyeKarti';
import UyeLogoGrid from './UyeLogoGrid';

export default function Uyeler() {
  return (
    <section id="uyeler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Üyelerimiz"
          subtitle="Kooperatifimizi oluşturan 10 kurucu ortak"
          center
        />

        {/* Üye kartları */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-16">
          {uyeler.map(uye => (
            <UyeKarti key={uye.id} uye={uye} />
          ))}
        </div>

        {/* Logo grid */}
        <div className="pt-10 border-t border-gray-100">
          <p className="text-center text-xs text-gray-400 mb-8 uppercase tracking-[0.18em] font-medium">
            Ortak İşletmeler
          </p>
          <UyeLogoGrid uyeler={uyeler} />
        </div>
      </div>
    </section>
  );
}
