'use client';

import type { ValueItem } from '@/types';

interface DegerlerimizProps {
  values: ValueItem[];
}

export default function Degerlerimiz({ values }: DegerlerimizProps) {
  return (
    <section className="relative py-32 md:py-44 bg-[#F5F5F4] text-[#14180F] overflow-hidden">
      {/* Derinlik katması için yumuşak, organik bir kurumsal geçiş gradyanı */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-[#2A6119]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Üst Başlık Alanı: Kurumsal Çizgi Mimarisi */}
        <div className="max-w-3xl mb-20 md:mb-28 relative border-l-2 border-[#2A6119] pl-6 md:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B] block mb-3 font-sans">
            Kurumsal İlkelerimiz
          </span>
          <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-[#14180F] leading-tight">
            Değerlerimiz
          </h2>
          <p className="mt-4 text-[#6B6B6B] text-[16px] md:text-[18px] font-light leading-relaxed">
            Kooperatifimizin köklü geçmişine yön veren, tüm ortak çalışma süreçlerimizi ve operasyonel kararlarımızı şekillendiren temel ilkelerimiz.
          </p>
        </div>

        {/* Değer Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => {
            // İndikatör numarası oluşturma (01, 02, 03...)
            const orderNumber = String(index + 1).padStart(2, '0');
            
            return (
              <div 
                key={value.id} 
                className="relative rounded-2xl border border-[#E5E5E5] bg-white p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_16px_32px_-12px_rgba(20,24,15,0.05)] hover:border-[#E5E5E5] group flex flex-col justify-between gap-8"
              >
                {/* Üst Kısım: Numara ve Başlık Kontrastı */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#14180F] group-hover:text-[#2A6119] transition-colors duration-300">
                    {value.baslik}
                  </h3>
                  
                  {/* Tam Pill Kurumsal İndikatör Numarası */}
                  <span className="text-[12px] font-bold tracking-wider font-sans text-[#059669] bg-[#059669]/5 px-3 py-1 rounded-full shrink-0">
                    {orderNumber}
                  </span>
                </div>

                {/* Alt Kısım: Açıklama Metni */}
                <p className="text-[#6B6B6B] text-[15px] md:text-[16px] leading-[1.75] font-normal text-justify md:text-left">
                  {value.aciklama}
                </p>

                {/* Kartın Altındaki Gizli Premium Şerit - Hover Durumunda Aktifleşir */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#059669] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}