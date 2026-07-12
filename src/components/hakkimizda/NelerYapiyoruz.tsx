'use client';

import { faaliyetAlanlari } from '@/lib/data/hakkimizda';
import type { ActivityArea } from '@/types';

function ActivityCard({ area, index }: { area: ActivityArea; index: number }) {
  // İkon yerine kurumsal 01, 02 formatında sıra numarası
  const orderNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-[#E5E5E5] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_32px_-12px_rgba(20,24,15,0.06)] hover:border-[#E5E5E5] transition-all duration-500 flex flex-col h-full">
      
      {/* Emoji yerine yerleştirilen minimalist geometrik indikatör alanı */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F5F5F4] border border-[#E5E5E5] text-[13px] font-bold font-sans text-[#6B6B6B] mb-6 group-hover:bg-[#059669]/10 group-hover:border-[#059669]/20 group-hover:text-[#059669] transition-all duration-500 select-none">
        {orderNumber}
      </div>

      <h3 className="font-bold text-[#14180F] text-[18px] mb-3 leading-snug tracking-tight group-hover:text-[#2A6119] transition-colors duration-300">
        {area.baslik}
      </h3>
      
      <p className="text-[#6B6B6B] text-[14px] leading-[1.65] tracking-wide font-normal flex-1 text-justify md:text-left">
        {area.aciklama}
      </p>

      {/* Alttaki premium ince vurgu çizgisi */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#059669] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full origin-left" />
    </div>
  );
}

export default function NelerYapiyoruz() {
  return (
    <section className="relative py-32 md:py-44 bg-[#F5F5F4]/50 overflow-hidden border-b border-[#E5E5E5]">
      {/* Kurumsal mat yeşil arka plan silsilesi */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2A6119]/[0.01] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Üst Başlık ve Kurumsal Kimlik Segmenti */}
        <div className="flex flex-col items-start mb-20 md:mb-24 relative border-l-2 border-[#2A6119] pl-6 md:pl-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#059669] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#34D399] mb-4 select-none">
            Operasyonel Odak
          </span>
          <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-[#14180F] leading-tight">
            Neler Yapıyoruz?
          </h2>
          <p className="text-[#6B6B6B] mt-4 text-[16px] font-light tracking-wide">
            Kooperatifimizin uluslararası tarım mevzuatları çerçevesinde uzmanlaştığı temel faaliyet alanları
          </p>
        </div>

        {/* Faaliyet Alanları Grid Akışı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {faaliyetAlanlari.map((area, index) => (
            <ActivityCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}