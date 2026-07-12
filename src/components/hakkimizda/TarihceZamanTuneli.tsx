'use client';

import type { TimelineItem } from '@/types';

interface TarihceZamanTuneliProps {
  items: TimelineItem[];
}

export default function TarihceZamanTuneli({ items }: TarihceZamanTuneliProps) {
  return (
    <section className="relative py-32 md:py-44 bg-white text-[#14180F] overflow-hidden">
      
      {/* Arka plan derinlik dokusu */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.3] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Üst Başlık Grubu: Sol Çizgili Premium Yapı */}
        <div className="max-w-3xl mb-24 md:mb-32 relative border-l-2 border-[#2A6119] pl-6 md:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B] block mb-3 font-sans">
            Kurumsal Kronoloji
          </span>
          <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-[#14180F] leading-tight">
            Tarihçe & Zaman Çizelgesi
          </h2>
          <p className="mt-4 text-[#6B6B6B] text-[16px] md:text-[18px] font-light leading-relaxed">
            Kooperatifimizin kuruluşundan bugüne, sürdürülebilir tarım ve kolektif kalkınma yolundaki önemli kilometre taşları.
          </p>
        </div>

        {/* Zaman Tüneli Akışı */}
        <div className="relative border-l border-[#E5E5E5] ml-4 md:ml-32 pl-8 md:pl-16 space-y-12 md:space-y-16">
          
          {items.map((item) => (
            <div 
              key={item.id} 
              className="relative group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start transition-all duration-300"
            >
              
              {/* Zaman Aksı Sol Noktası (Zümrüt Yeşil İndikatör) */}
              <div className="absolute -left-[37px] md:-left-[73px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-white border-2 border-[#059669] z-20 shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#059669]" />

              {/* Masaüstünde Sol Boşluğa Taşınan Büyük Kurumsal Yıl İndikatörü */}
              <div className="md:absolute md:-left-[180px] md:top-0 md:w-[100px] md:text-right">
                <span className="inline-block text-2xl md:text-3xl font-bold tracking-tight text-[#2A6119] font-sans">
                  {item.yil}
                </span>
              </div>

              {/* Sağ Taraf: Premium YASKOOP Kurumsal Bilgi Kartı */}
              <div className="lg:col-span-12 rounded-2xl border border-[#E5E5E5] bg-[#F5F5F4]/30 p-6 md:p-8 transition-all duration-300 group-hover:bg-white group-hover:border-[#E5E5E5] group-hover:shadow-[0_16px_32px_-12px_rgba(20,24,15,0.04)]">
                
                {/* Mobil Görünüm İçin Yıl Badge'i (Masaüstünde Gizli) */}
                <span className="inline-flex md:hidden items-center justify-center rounded-full bg-[#059669]/10 px-3 py-1 text-[12px] font-semibold text-[#059669] mb-3 font-sans">
                  {item.yil}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-[#14180F] mb-3 leading-snug group-hover:text-[#2A6119] transition-colors duration-300">
                  {item.baslik}
                </h3>
                
                <p className="text-[#6B6B6B] text-[15px] md:text-[16px] leading-[1.75] font-normal text-justify md:text-left">
                  {item.aciklama}
                </p>
                
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}