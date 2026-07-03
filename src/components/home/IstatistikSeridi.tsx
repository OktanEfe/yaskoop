'use client';

import { useEffect, useRef, useState } from 'react';
import { istatistikler } from '@/lib/data/home';
import type { StatItem } from '@/types';

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
      { threshold: 0.2 } // Ekrana biraz girdiği an animasyon zarifçe başlar
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    // Her kutunun sırayla patlaması için küçük bir gecikme (stagger effect)
    const delayTimeout = setTimeout(() => {
      const duration = 2000; // Akıcı bir dolum için 2 saniyeye çıkardım
      const start = performance.now();

      let frame: number;
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        // Çok daha pürüzsüz bir yavaşlama (Cubic Out) eğrisi
        const eased = 1 - Math.pow(1 - progress, 4);
        
        setDisplay(Math.round(eased * stat.value));
        
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      }
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }, index * 100); // 100ms aralıklarla sırayla artmaya başlarlar

    return () => clearTimeout(delayTimeout);
  }, [started, stat.value, index]);

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${index * 75}ms` 
      }}
      className={`group relative flex flex-col items-center justify-center text-center px-6 py-10 md:py-14 bg-white/[0.03] border border-white/[0.06] rounded-[2rem] backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-700 transform ${
        started ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:bg-white/[0.06] hover:border-white/15`}
    >
      {/* Mikro Glow Efekti - Kartın üstüne gelince arkada hafif yeşil bir parlama yaratır */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Büyük Sayı Alanı - Tracking ayarı yapılmış ve font-variant-numeric ile zıplama engellenmiştir */}
      <span 
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white flex items-center leading-none select-none"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {display}
        <span className="text-emerald-400 font-bold text-2xl md:text-3xl lg:text-4xl ml-0.5 transform -translate-y-1">
          {stat.suffix}
        </span>
      </span>

      {/* İsim/Etiket Alanı - Okunabilirliği yüksek, harf aralığı açık minimal yazı */}
      <span className="mt-4 text-[11px] md:text-xs font-bold text-emerald-100/60 uppercase tracking-[0.2em] max-w-[150px] leading-relaxed">
        {stat.label}
      </span>
    </div>
  );
}

export default function IstatistikSeridi() {
  return (
    <section className="relative py-20 md:py-32 bg-[#0d2313] overflow-hidden">
      {/* Premium Organik Doku: Arka planda devasa, gözü yormayan iki yeşil ışık sızıntısı */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Izgara Yapısı - Klasik düz çizgi yerine lüks bento-şerit kutuları */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {istatistikler.map((stat, index) => (
            <IstatistikKutu key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}