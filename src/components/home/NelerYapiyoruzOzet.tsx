'use client';

import { faaliyetAlanlari } from '@/lib/data/hakkimizda';
import type { ActivityArea } from '@/types';

function OzetKart({ area, index }: { area: ActivityArea; index: number }) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative bg-[#14180F] rounded-2xl p-8 border border-white/[0.04] hover:border-[#059669]/30 shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
      {/* Kart İçi Premium Gece Işıması (accent-emerald) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#059669]/4 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Üst Kısım: Kontrastı Yüksek Kurumsal Numaralandırma */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-[11px] font-bold tracking-widest text-neutral-500 font-mono group-hover:text-[#34D399] transition-colors duration-300">
            REG-{formattedIndex}
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.06] mx-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#059669] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/[0.1] group-hover:bg-[#34D399] transition-colors duration-300" />
        </div>

        {/* Başlık - Koyu Zeminde Beyaz Kontrast */}
        <h3 className="font-bold text-white text-[18px] mb-3.5 tracking-tight leading-snug group-hover:text-[#34D399] transition-colors duration-300">
          {area.baslik}
        </h3>

        {/* Açıklama - Premium Muted Gri Tonu */}
        <p className="text-[#6B6B6B] text-[14px] leading-[1.65] font-normal tracking-wide group-hover:text-neutral-400 transition-colors duration-300">
          {area.aciklama}
        </p>
      </div>

      {/* Yönlendirme İkonu - Zümrüt Yeşili Vurgu */}
      <div className="mt-8 flex justify-end transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#34D399]">
          <path d="M4.66666 11.3333L11.3333 4.66663M11.3333 4.66663H6M11.3333 4.66663V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

export default function NelerYapiyoruzOzet() {
  return (
    <section className="relative py-24 md:py-36 bg-[#14180F] border-t border-white/[0.02] overflow-hidden">
      {/* Kurumsal Derinlik Sağlayan Büyük Işık Alanları */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2A6119]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#059669]/4 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Başlık Alanı - Bakanlık ve Resmi Heyet Standartlarında Ağırbaşlı Düzen */}
        <div className="max-w-3xl mb-16 md:mb-24 flex flex-col items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#34D399] mb-5 shadow-sm backdrop-blur-sm">
            Kurumsal Faaliyet Alanları
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.15]">
            Stratejik İşletme ve Üretim Faaliyetleri
          </h2>
          <p className="text-neutral-400 mt-4 text-base md:text-[17px] font-normal max-w-xl leading-relaxed tracking-wide">
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