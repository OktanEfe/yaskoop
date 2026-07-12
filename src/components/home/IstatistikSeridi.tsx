'use client';

import { useEffect, useRef, useState } from 'react';
import { istatistikler } from '@/lib/data/home';
import type { StatItem } from '@/types';

// Kooperatif yapısına uygun, kurumsal ve şeffaf alt açıklamalar
const altAciklamalar: Record<string, string> = {
  // Veri id'lerine göre eşleşen resmi açıklamalar (id'ler lib/data içerisinden okunur)
  'default': 'Resmi kooperatif tescilli verisi.',
  'ortak': 'Aktif üretici iş birliği hacmi.',
  'alan': 'Sürdürülebilir modern tarım arazisi.',
  'ihracat': 'Global pazarda yerli üretim gücü.',
  'uretim': 'Yıllık bitki ve peyzaj arzı.'
};

function IstatistikKutu({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const delayTimeout = setTimeout(() => {
      const duration = 2000;
      const start = performance.now();

      let frame: number;
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        
        setDisplay(Math.round(eased * stat.value));
        
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      }
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }, index * 100);

    return () => clearTimeout(delayTimeout);
  }, [started, stat.value, index]);

  // Id bazlı açıklama seçimi, eşleşme yoksa güvenli fallback
  const altMetin = altAciklamalar[stat.id] || altAciklamalar['default'];

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${index * 75}ms` 
      }}
      className={`group relative flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 bg-neutral-900/40 border border-white/5 rounded-2xl backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-700 transform ${
        started ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:bg-neutral-900/60 hover:border-[#34D399]/20`}
    >
      {/* Üst Zarif Işık Şeridi */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#34D399]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Büyük Sayı Alanı - Şeffaf ve Premium Zümrüt Tonu */}
      <span 
        className="text-4xl md:text-5xl lg:text-[3.5rem]/none font-bold tracking-[-0.02em] text-white flex items-center select-none"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {display}
        <span className="text-[#34D399] font-medium text-xl md:text-2xl lg:text-3xl ml-0.5 transform -translate-y-0.5">
          {stat.suffix}
        </span>
      </span>

      {/* Başlık / Etiket Alanı */}
      <span className="mt-4 text-[10px] md:text-[11px] font-bold text-neutral-200 uppercase tracking-[0.2em] max-w-[160px] leading-relaxed select-none">
        {stat.label}
      </span>

      {/* Seviye Ayracı */}
      <div className="w-6 h-[1px] bg-white/10 mt-3 transition-colors duration-500 group-hover:bg-[#34D399]/30" />

      {/* Kısa Kurumsal Alt Cümle */}
      <p className="mt-3 text-[12px] text-neutral-400 font-normal leading-normal max-w-[180px] select-none">
        {altMetin}
      </p>
    </div>
  );
}

export default function IstatistikSeridi() {
  return (
    <section className="relative py-20 md:py-32 bg-[#14180F] overflow-hidden">
      {/* Arka Plan Premium Derin Yeşil Glow Efektleri */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#2A6119]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#34D399]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {istatistikler.map((stat, index) => (
            <IstatistikKutu key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}