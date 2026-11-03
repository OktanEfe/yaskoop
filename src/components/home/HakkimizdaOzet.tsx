'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { hakkimizdaOzet } from '@/lib/data/home';

export default function HakkimizdaOzet() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbfcf7] to-[#eef3e8] py-24 md:py-36">
      {/* Premium Arka Plan Detayı: İnce minimal grid çizgileri */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Sol Kolon: Görsel Tarafı (Kurumsal Köşeler ve Sakin Tonlar) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 w-full max-w-[480px] lg:max-w-none mx-auto">
            {/* Arka Dekoratif Gölgeli Kutu */}
            <div className="absolute -inset-4 rounded-2xl bg-[#F5F5F4] -z-10 border border-[#E5E5E5] backdrop-blur-[2px]" />

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#E5E5E5]">
              <Image
                src="/images/about/hakkimizda.jpeg"
                alt="Yaskoop Üretim Tesisleri ve Kurumsal Yapı"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Premium Yumuşak Işık Katmanı */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14180F]/20 via-transparent to-transparent" />
            </div>

            {/* Yüzen İstatistik Kartı - Apple Stil Köşelerle Entegre */}
            <div className="absolute -bottom-6 -right-4 bg-[#14180F] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl px-6 py-5 flex items-center gap-4 transition-all duration-500 hover:-translate-y-1 select-none">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-none">
                10
              </div>
              <div className="h-6 w-[1px] bg-white/20" />
              <div className="text-[12px] font-medium text-neutral-300 tracking-wide leading-tight max-w-[120px]">
                Üretici Ortağın Kolektif Gücü
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Kurumsal Metin Tarafı */}
          <div className="lg:col-span-7 lg:pl-16 order-1 lg:order-2 flex flex-col items-start">
            {/* Badge */}
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#d6e0cb] bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#426b39] shadow-sm">
              Yalova’dan, doğayla birlikte
            </span>

            {/* Başlık - Resmi ve Güçlü Kooperatif Vurgusu */}
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.05em] text-[#173622] md:text-[3.55rem]">
              Güçlü kökler. Daha yeşil bir gelecek.
            </h2>

            {/* Açıklama - Resmi Kurumsal Dil */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#4f6252] md:text-lg md:leading-9">
              {hakkimizdaOzet.aciklama}
            </p>

            {/* Premium CTA Buton (Orijinal Buton Yapısı ve Hover Efekti Korundu) */}
            <Button asChild variant="primary" size="lg" className="mt-10">
              <Link href={hakkimizdaOzet.ctaHref}>
                <span>{hakkimizdaOzet.ctaLabel}</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  className="transition-transform duration-300 transform group-hover:translate-x-1"
                >
                  <path 
                    d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}