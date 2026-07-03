'use client';

import { faaliyetAlanlari } from '@/lib/data/hakkimizda';
import type { ActivityArea } from '@/types';

function ActivityCard({ area }: { area: ActivityArea }) {
  return (
    <div className="group relative bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.06)] hover:border-neutral-200/80 transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col h-full">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 text-2xl mb-6 group-hover:bg-accent/5 group-hover:border-accent/10 group-hover:scale-110 transition-all duration-500 select-none">
        {area.icon}
      </div>
      <h3 className="font-bold text-neutral-900 text-[18px] mb-3 leading-snug tracking-tight">
        {area.baslik}
      </h3>
      <p className="text-neutral-500 text-[14px] leading-[1.6] tracking-wide font-normal flex-1">
        {area.aciklama}
      </p>
    </div>
  );
}

export default function NelerYapiyoruz() {
  return (
    <section className="relative py-24 md:py-36 bg-neutral-50/40 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4 shadow-sm select-none">
            Operasyonel Odak
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-[-0.03em] text-neutral-900 leading-[1.15]">
            Neler Yapıyoruz?
          </h2>
          <p className="text-neutral-400 mt-4 text-[15px] tracking-wide font-normal">
            Kooperatifimizin uzmanlaştığı temel faaliyet alanları
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {faaliyetAlanlari.map((area) => (
            <ActivityCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}