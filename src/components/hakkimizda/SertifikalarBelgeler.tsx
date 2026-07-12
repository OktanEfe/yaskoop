'use client';

import type { CertificateItem } from '@/types';

interface SertifikalarBelgelerProps {
  documents: CertificateItem[];
}

export default function SertifikalarBelgeler({ documents }: SertifikalarBelgelerProps) {
  return (
    <section className="relative py-32 md:py-44 bg-[#F5F5F4] text-[#14180F] overflow-hidden border-b border-[#E5E5E5]">
      {/* Şeffaf ve güvenli yapıyı simgeleyen hafif kurumsal arka plan çizgileri */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-[0.3] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Üst Başlık Grubu: Sol Çizgili Resmi Düzen */}
        <div className="max-w-3xl mb-20 md:mb-28 relative border-l-2 border-[#2A6119] pl-6 md:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B] block mb-3 font-sans">
            Yasal Uyumluluk & Kalite
          </span>
          <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-[#14180F] leading-tight">
            Sertifikalar & Belgeler
          </h2>
          <p className="mt-4 text-[#6B6B6B] text-[16px] md:text-[18px] font-light leading-relaxed">
            Tarımsal üretim standartlarımız, resmi tüzük mevzuatlarımız ve uluslararası kalite sertifikasyonlarımıza ait resmi kayıtlar.
          </p>
        </div>

        {/* Belgeler ve Sertifikalar Grid Akışı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {documents && documents.length > 0 ? (
            documents.map((document) => (
              <div 
                key={document.id} 
                className="group relative rounded-2xl border border-[#E5E5E5] bg-white p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_16px_32px_-12px_rgba(20,24,15,0.05)] flex flex-col justify-between border-l-4 border-l-[#2A6119]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {/* Resmi evrak indikatörü */}
                    <div className="w-2 h-2 rounded-full bg-[#059669]" />
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#14180F] group-hover:text-[#2A6119] transition-colors duration-300">
                      {document.baslik}
                    </h3>
                  </div>
                  
                  <p className="text-[#6B6B6B] text-[14px] md:text-[15px] leading-[1.7] font-normal text-justify md:text-left">
                    {document.bilgi}
                  </p>
                </div>

                {/* Alt Köşede Resmi Kayıt İndikatörü */}
                <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex justify-between items-center text-[11px] font-medium tracking-wider text-[#6B6B6B]/60 font-sans uppercase">
                  <span>Döküman Tipi: Resmi Sicil / Tüzük</span>
                  <span className="text-[#059669] font-bold">Onaylandı</span>
                </div>
              </div>
            ))
          ) : (
            /* ================= TASARIMI GÜZELLEŞTİRİLMİŞ PREMIUM YER TUTUCU (EMPTY STATE) ================= */
            <div className="md:col-span-2 rounded-2xl border border-[#E5E5E5] bg-white p-10 md:p-16 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
              
              {/* Geometrik Minimalist Evrak İkonu Yer Tutucusu */}
              <div className="w-16 h-16 rounded-full bg-[#F5F5F4] border border-[#E5E5E5] flex items-center justify-center relative">
                <div className="w-6 h-8 border-2 border-[#6B6B6B]/40 rounded-sm relative flex flex-col justify-between p-1">
                  <div className="w-full h-[2px] bg-[#6B6B6B]/40" />
                  <div className="w-3/4 h-[2px] bg-[#6B6B6B]/40" />
                </div>
                <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#059669] border-2 border-white" />
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[#14180F] tracking-tight">
                  Resmi Arşiv Modülü Güncelleniyor
                </h4>
                <p className="text-[#6B6B6B] text-[14px] md:text-[15px] leading-relaxed max-w-md mx-auto font-light">
                  {/* // TODO: Veritabanından sertifika ve yasal tüzük dökümanları bağlandığında burası otomatik olarak listelenecektir. */}
                  Kooperatifimize ait tarımsal kalite sertifikaları, tüzük maddeleri ve resmi kurum onay belgeleri dijital arşivleme sürecindedir. 
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F4] border border-[#E5E5E5] px-4 py-1.5 text-[11px] font-medium tracking-wide text-[#6B6B6B] font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B6B6B]/40 animate-pulse" />
                YASKOOP Bilgi İşlem Daire Başkanlığı
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}