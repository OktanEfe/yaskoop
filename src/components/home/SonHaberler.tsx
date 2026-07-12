'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { haberler } from '@/lib/data/haberler';
import HaberCard from '@/components/haberler/HaberCard';
import HaberDetay from '@/components/haberler/HaberDetay';
import type { NewsItem } from '@/types';

const sonUcHaber = [...haberler]
  .sort((a, b) => new Date(b.tarih).getTime() - new Date(a.tarih).getTime())
  .slice(0, 3);

export default function SonHaberler() {
  const [selected, setSelected] = useState<NewsItem | null>(null);

  if (sonUcHaber.length === 0) return null;

  return (
    <section className="relative py-24 md:py-36 bg-neutral-50/40 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4 shadow-sm">
              Güncel Paylaşımlar
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-[-0.03em] text-neutral-900 leading-[1.15]">
              Haberler & Etkinlikler
            </h2>
          </div>
          
          <Button asChild variant="primary" size="md">
            <Link href="/haberler">
              <span>Tümünü Keşfet</span>
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-50 text-neutral-800 group-hover:bg-white group-hover:text-accent transition-colors duration-300">
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
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sonUcHaber.map((haber) => (
            <div 
              key={haber.id} 
              className="group cursor-pointer bg-white rounded-[2rem] p-4 border border-neutral-100 hover:border-neutral-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.012)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.07)] transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col h-full"
              onClick={() => setSelected(haber)}
            >
              <div className="flex-1 flex flex-col">
                <HaberCard haber={haber} onClick={setSelected} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <HaberDetay haber={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}