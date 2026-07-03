'use client';

import { faaliyetAlanlari } from '@/lib/data/hakkimizda';
import type { ActivityArea } from '@/types';

function OzetKart({ area, index }: { area: ActivityArea; index: number }) {
  // Sıralama numaralarını "01", "02" formatına getirmek için
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative bg-white rounded-[2rem] p-8 border border-neutral-100 hover:border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
      {/* Kart İçi Premium Efekt: Hover durumunda sol üstte beliren çok hafif bir ışıma */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Üst Kısım: Minimalist Numaralandırma & Çizgi Birleşimi */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-bold tracking-widest text-neutral-400 font-mono group-hover:text-accent transition-colors duration-300">
            {formattedIndex}
          </span>
          <div className="h-[1px] flex-1 bg-neutral-100 mx-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </div>
          {/* Küçük şık bir detay noktası */}
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover:bg-accent transition-colors duration-300" />
        </div>

        {/* Başlık - Net, okunaklı ve harf aralığı sıkıştırılmış */}
        <h3 className="font-bold text-neutral-900 text-[19px] mb-3.5 tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
          {area.baslik}
        </h3>

        {/* Açıklama - Akıcı satır yüksekliği */}
        <p className="text-neutral-500 text-[14px] leading-[1.6] font-normal tracking-wide">
          {area.aciklama}
        </p>
      </div>

      {/* Kartın altına eklenen zarif gizli ok ikonu - Hover ile yukarı süzülür */}
      <div className="mt-8 flex justify-end transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-accent">
          <path d="M4.66666 11.3333L11.3333 4.66663M11.3333 4.66663H6M11.3333 4.66663V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

export default function NelerYapiyoruzOzet() {
  return (
    <section className="relative py-24 md:py-36 bg-neutral-50/50 overflow-hidden">
      {/* Arka plan için yumuşak bir premium ışık sızıntısı (Glow) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Başlık Alanı - Sol tarafta geniş ve Apple tarzı büyük tipografi */}
        <div className="max-w-2xl mb-16 md:mb-24 flex flex-col items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-5 shadow-sm">
            Faaliyetlerimiz
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-[-0.03em] text-neutral-900 leading-[1.15]">
            Neler Yapıyoruz?
          </h2>
          <p className="text-neutral-500 mt-4 text-base md:text-lg font-normal tracking-tight">
            Kooperatifimizin sürdürülebilir gelecek için odaklandığı temel faaliyet alanları
          </p>
        </div>

        {/* Bento Grid Yapısı - Gap dengesi ve paddingler lüks hissiyatı destekler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {faaliyetAlanlari.map((area, index) => (
            <OzetKart key={area.id} area={area} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}