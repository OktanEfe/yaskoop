'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { iletisimCta } from '@/lib/data/home';

export default function IletisimCTA() {
  return (
    <section className="relative py-28 md:py-40 bg-white text-neutral-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 shadow-sm select-none">
          Geleceği Birlikte İnşa Edelim
        </span>
        
        <h2 className="text-3xl md:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.12] text-neutral-900 max-w-2xl">
          {iletisimCta.baslik}
        </h2>
        
        <p className="mt-6 text-neutral-500 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed tracking-tight">
          {iletisimCta.aciklama}
        </p>
        
        <Button asChild variant="primary" size="lg" className="mt-10">
          <Link href={iletisimCta.ctaHref}>
            <span>{iletisimCta.ctaLabel}</span>
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-50 text-neutral-800 group-hover:bg-white group-hover:text-accent transition-colors duration-300">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 16 16" 
                fill="none" 
                className="transition-transform duration-300 transform group-hover:translate-x-0.5"
              >
                <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </Button>
      </div>
    </section>
  );
}