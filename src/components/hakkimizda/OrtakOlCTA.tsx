'use client';

import type { CtaData } from '@/types';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface OrtakOlCTAProps {
  cta: CtaData;
}

export default function OrtakOlCTA({ cta }: OrtakOlCTAProps) {
  return (
    <section className="relative py-28 md:py-36 bg-white text-[#14180F] overflow-hidden">
      {/* Aydınlık arka planda hafif ve kurumsal bir derinlik dokunuşu */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2A6119]/[0.015] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Premium YASKOOP Aydınlık İç Kart Tasarımı */}
        <div className="relative rounded-2xl border border-[#E5E5E5] bg-[#F5F5F4] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden group transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(20,24,15,0.06)]">
          
          {/* Kart içi asimetrik hafif yeşil doku */}
          <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-[#059669]/[0.02] rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between w-full">
            
            {/* Sol Taraf: Metinsel Bildirge Alanı */}
            <div className="flex-1">
              {cta.eyebrow && (
                <span className="inline-flex items-center rounded-full bg-[#059669]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#059669] font-sans">
                  {cta.eyebrow}
                </span>
              )}
              
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-[#14180F] leading-tight">
                {cta.title}
              </h2>
              
              <p className="mt-4 max-w-2xl text-[15px] md:text-[16px] leading-[1.65] text-[#6B6B6B] font-normal text-justify md:text-left">
                {cta.description}
              </p>
            </div>

            {/* Sağ Taraf: Ana Buton Hover Efektiyle Pill/Oval CTA Butonu */}
            <div className="shrink-0 w-full lg:w-auto">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="w-full lg:w-auto"
              >
                <Link href={cta.buttonHref} className="tracking-wide">
                  {cta.buttonLabel}
                </Link>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}