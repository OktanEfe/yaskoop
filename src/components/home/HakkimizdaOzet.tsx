'use client';

import Image from 'next/image';
import Link from 'next/link';
import { hakkimizdaOzet } from '@/lib/data/home';

export default function HakkimizdaOzet() {
  return (
    <section className="relative py-24 md:py-40 bg-white overflow-hidden">
      {/* Premium Arka Plan Detayı: İnce minimal grid çizgileri */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Sol Kolon: Görsel Tarafı (12 kolonun 5'ini kaplar, daha sanatsal oran) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 w-full max-w-[480px] lg:max-w-none mx-auto">
            {/* Arka Dekoratif Gölgeli Kutu */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-neutral-50/50 -z-10 border border-neutral-100 backdrop-blur-[2px]" />

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-neutral-100">
              <Image
                src="/images/hakkimizda-ozet.jpg"
                alt="Yaskoop Kooperatif"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Premium Yumuşak Işık Katmanı */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
            </div>

            {/* Yüzen İstatistik Kartı - Dynamic Island Esintili */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 bg-neutral-900/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl px-8 py-6 flex items-center gap-5 transition-transform duration-500 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-none">
                10<span className="text-accent text-3xl font-semibold ml-0.5">+</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="text-[13px] font-medium text-neutral-300 tracking-wide leading-tight max-w-[100px]">
                Ortak Kuruluş Bir Arada
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Metin Tarafı (12 kolonun 7'sini kaplar, tipografi nefes alır) */}
          <div className="lg:col-span-7 lg:pl-16 order-1 lg:order-2 flex flex-col items-start">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-8 shadow-sm">
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
              Hakkımızda
            </span>

            {/* Başlık - Apple Stil Geniş ve İnce/Kalın Dengesi */}
            <h2 className="text-4xl md:text-[3.25rem] font-bold tracking-[-0.03em] text-neutral-900 leading-[1.12]">
              {hakkimizdaOzet.baslik}
            </h2>

            {/* Açıklama - Okunabilirliği yüksek, elegant satır arası boşluğu */}
            <p className="mt-8 text-[1.125rem] leading-[1.75] text-neutral-600 font-normal max-w-xl tracking-[-0.01em]">
              {hakkimizdaOzet.aciklama}
            </p>

            {/* Premium CTA Buton */}
            <Link
              href={hakkimizdaOzet.ctaHref}
              className="group inline-flex items-center gap-3 mt-10 rounded-full bg-accent text-white px-8 py-4 text-[14px] font-semibold tracking-wide shadow-[0_10px_30px_-10px_rgba(42,97,25,0.4)] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_16px_36px_-10px_rgba(42,97,25,0.5)] active:scale-[0.98]"
            >
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
          </div>

        </div>
      </div>
    </section>
  );
}