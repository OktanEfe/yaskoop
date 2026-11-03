'use client';

import { faaliyetAlanlari } from '@/lib/data/hakkimizda';
import type { ActivityArea } from '@/types';

function OzetKart({ area, index }: { area: ActivityArea; index: number }) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#244b31] via-[#183523] to-[#10251a] p-8 shadow-[0_16px_40px_rgba(5,20,10,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[#cbe0ae]/35 hover:shadow-[0_24px_50px_rgba(5,20,10,0.34)]">
      {/* Kart İçi Premium Gece Işıması (accent-emerald) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#059669]/4 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Üst Kısım: Kontrastı Yüksek Kurumsal Numaralandırma */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-sm font-semibold tracking-widest text-[#c5d5ab] transition-colors duration-300 group-hover:text-white">
            {formattedIndex}
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.06] mx-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#059669] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/[0.1] group-hover:bg-[#34D399] transition-colors duration-300" />
        </div>

        {/* Başlık - Koyu Zeminde Beyaz Kontrast */}
        <h3 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#d4e8ad] md:text-2xl">
          {area.baslik}
        </h3>

        {/* Açıklama - Premium Muted Gri Tonu */}
        <p className="text-base font-normal leading-7 tracking-wide text-white/70 transition-colors duration-300 group-hover:text-white/90">
          {area.aciklama}
        </p>
      </div>

      {/* Yönlendirme İkonu - Zümrüt Yeşili Vurgu */}
      <div className="mt-8 flex justify-end transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-[#d4e8ad]">
          <path d="M4.66666 11.3333L11.3333 4.66663M11.3333 4.66663H6M11.3333 4.66663V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </article>
  );
}

export default function NelerYapiyoruzOzet() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] bg-gradient-to-br from-[#14291c] via-[#10241a] to-[#193924] py-24 md:py-36">
      {/* Kurumsal Derinlik Sağlayan Büyük Işık Alanları */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2A6119]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#059669]/4 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Başlık Alanı - Bakanlık ve Resmi Heyet Standartlarında Ağırbaşlı Düzen */}
        <div className="max-w-3xl mb-16 md:mb-24 flex flex-col items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#34D399] mb-5 shadow-sm backdrop-blur-sm">
            Kurumsal Faaliyet Alanları
          </span>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.05em] text-white md:text-6xl">
            Doğayla uyumlu üretim, güçlü ortaklık.
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-normal leading-8 tracking-wide text-white/65 md:text-xl">
            Kooperatifimizin tüzüğü ve sürdürülebilir tarım ilkeleri doğrultusunda yürütülen kurumsal operasyon şeması.
          </p>
        </div>

        {/* Bento Grid Yapısı - Tam Koyu Kontrast Düzeni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {faaliyetAlanlari.map((area, index) => (
            <OzetKart key={area.id} area={area} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}