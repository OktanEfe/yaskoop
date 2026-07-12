'use client';

import type { BoardMember } from '@/types';

interface YonetimKuruluProps {
  members: BoardMember[];
}

export default function YonetimKurulu({ members }: YonetimKuruluProps) {
  return (
    <section className="relative py-32 md:py-44 bg-white text-[#14180F] overflow-hidden">
      {/* Sayfa boşluğunu kıran editoryal çizgi dokusu */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.25] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Üst Başlık Grubu: Sol Çizgili Resmi Düzen */}
        <div className="max-w-3xl mb-20 md:mb-28 relative border-l-2 border-[#2A6119] pl-6 md:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B] block mb-3 font-sans">
            İdari Yapı & Karar Organı
          </span>
          <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-[#14180F] leading-tight">
            Yönetim Kurulu
          </h2>
          <p className="mt-4 text-[#6B6B6B] text-[16px] md:text-[18px] font-light leading-relaxed">
            Kooperatifimizin yasal mevzuatlar çerçevesinde sevk, idare ve stratejik planlamasından sorumluluk üstlenen yönetim kurulu üyelerimiz.
          </p>
        </div>

        {/* Üye Kartları Grid Akışı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group relative rounded-2xl border border-[#E5E5E5] bg-[#F5F5F4]/30 p-8 md:p-10 transition-all duration-300 hover:bg-white hover:shadow-[0_16px_32px_-12px_rgba(20,24,15,0.05)] hover:border-[#E5E5E5] flex flex-col h-full"
            >
              
              {/* Üst Kimlik Bilgisi */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#14180F] mb-3 group-hover:text-[#2A6119] transition-colors duration-300">
                  {member.isim}
                </h3>
                
                {/* Resmi Unvan Badge Modülü */}
                <span className="inline-flex items-center rounded-full bg-[#059669]/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-[#059669] font-sans uppercase">
                  {member.unvan}
                </span>
              </div>

              {/* Biyografi / Görev Tanımı Alanı */}
              <p className="text-[#6B6B6B] text-[14px] md:text-[15px] leading-[1.7] font-normal text-justify md:text-left flex-1 border-t border-[#E5E5E5] pt-6 group-hover:border-[#059669]/20 transition-colors duration-300">
                {member.bio}
              </p>

              {/* Kart Altı Kurumsal Şerit Detayı */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#2A6119] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full origin-left" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}