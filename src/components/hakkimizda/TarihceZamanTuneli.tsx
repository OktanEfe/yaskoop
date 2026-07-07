import type { TimelineItem } from '@/types';

interface TarihceZamanTuneliProps {
  items: TimelineItem[];
}

export default function TarihceZamanTuneli({ items }: TarihceZamanTuneliProps) {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Tarihçe & Zaman Çizelgesi
          </h2>
          <p className="mt-4 text-neutral-500 text-base leading-7">
            Kooperatifimizin kuruluşundan bugüne önemli kilometre taşlarını bu bölümde bulabilirsiniz.
          </p>
        </div>
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-flex items-center justify-center min-w-[84px] rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                  {item.yil}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                  {item.baslik}
                </h3>
              </div>
              <p className="text-neutral-600 leading-7">{item.aciklama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
