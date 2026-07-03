'use client';

import Link from 'next/link';
import Image from 'next/image';
import { uyeler } from '@/lib/data/uyeler';

export default function UyeLogoSeridi() {
  if (!uyeler || uyeler.length === 0) return null;

  return (
    <section className="relative py-24 md:py-36 bg-neutral-50/40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4 shadow-sm select-none">
            Güçlü Ortaklık Yapısı
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-neutral-900 max-w-md leading-tight">
            Kooperatifimizi Oluşturan Değerli Ortaklarımız
          </h2>
        </div>

        <div className="w-full">
          <div className="flex md:hidden overflow-x-auto gap-5 pb-6 px-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            {uyeler.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-[180px] aspect-[3/2] bg-white border border-neutral-100 rounded-2xl flex items-center justify-center p-6 shadow-[0_4px_12px_rgba(0,0,0,0.02)] snap-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.logo}
                    alt={item.name || 'Üye Logo'}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {uyeler.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[3/2] bg-white border border-neutral-100 rounded-3xl flex items-center justify-center p-8 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.05)] hover:border-neutral-200/80 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="relative w-full h-full transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100">
                  <Image
                    src={item.logo}
                    alt={item.name || 'Üye Logo'}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-20 flex justify-center">
          <Link
            href="/uyeler"
            className="group relative inline-flex items-center gap-3 border border-neutral-200/80 rounded-full pl-6 pr-5 py-3 text-[13px] font-bold tracking-wide text-neutral-800 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-transparent hover:text-white hover:shadow-[0_12px_24px_rgba(42,97,25,0.25)] active:scale-[0.98] transition-all duration-300 shrink-0 select-none overflow-hidden"
          >
            <span className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 -z-10 rounded-full" />
            
            <span className="relative z-10">Tüm Ortakları İncele</span>
            <div className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-neutral-50 text-neutral-800 group-hover:bg-white group-hover:text-accent transition-colors duration-300">
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 16 16" 
                fill="none" 
                className="transition-transform duration-300 transform group-hover:translate-x-0.5"
              >
                <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}