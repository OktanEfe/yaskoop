'use client';

import Link from 'next/link';
import { useState } from 'react';
import { heroSlides } from '@/lib/data/hero';
import { useHeroSlider } from './useHeroSlider';
import HeroSlide from './HeroSlide';

export default function Hero() {
  const [paused, setPaused] = useState(false);
  const { current, goTo } = useHeroSlider(heroSlides.length, 5500, paused);
  const slide = heroSlides[current];

  return (
    <section
      className="relative h-[min(940px,100svh)] min-h-[720px] w-full overflow-hidden bg-[#14251a] sm:min-h-[760px]"
      aria-label="Yaskoop süs bitkileri üretimi"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {heroSlides.map((s, i) => (
        <HeroSlide
          key={s.image}
          slide={s}
          isActive={i === current}
          priority={i === 0}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0d2318]/90 via-[#10241a]/65 to-[#12231b]/15" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#102018]/75 via-transparent to-black/20" />
      <div className="absolute inset-0 z-10 flex items-end px-6 pb-[13.5rem] pt-28 sm:px-10 sm:pb-[12.5rem] lg:px-20 lg:pb-[11.5rem]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-4xl">
          <h1
            key={`heading-${current}`}
            className="max-w-5xl bg-gradient-to-r from-white via-[#f2f4dc] to-[#cde9b2] bg-clip-text text-5xl font-semibold leading-[0.99] tracking-[-0.065em] text-transparent opacity-0 animate-fade-slide-up sm:text-6xl md:text-7xl lg:text-[6.35rem]"
          >
            {slide.heading}
          </h1>
          
          <p
            key={`sub-${current}`}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/85 opacity-0 animate-fade-slide-up animation-delay-600 sm:mt-8 sm:text-xl sm:leading-9"
          >
            {slide.subtext}
          </p>
          <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3 sm:mt-11 sm:gap-4">
            <Link
              href="/uyeler"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d5e6ae] px-7 text-sm font-bold text-[#16321e] shadow-[0_12px_36px_rgba(171,209,127,0.22)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8"
            >
              Ortaklarımızı tanıyın
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/galeri"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 bg-white/[0.08] px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/[0.16] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8"
            >
              Üretimden kareler
            </Link>
          </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-6 z-20 flex items-center gap-4 sm:bottom-10 sm:left-10 lg:left-20"
        aria-label="Ana sayfa görsel slaytları"
      >
        <span className="min-w-[4rem] font-mono text-sm tracking-widest text-white">
          <span className="text-[#d5e6ae]">{String(current + 1).padStart(2, '0')}</span>
          <span className="mx-1.5 text-white/35">/</span>
          <span className="text-white/60">{String(heroSlides.length).padStart(2, '0')}</span>
        </span>
        <div className="flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${i + 1}. slayta geç`}
            aria-current={i === current ? 'true' : undefined}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              i === current ? 'w-12 bg-[#d5e6ae]' : 'w-5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
        </div>
      </div>
      <div className="absolute bottom-8 right-6 z-20 hidden max-w-xs text-right text-xs leading-5 text-white/75 md:block sm:bottom-10 sm:right-10 lg:right-20">
        Sürdürülebilir üretim, güçlü ortaklık.
      </div>
    </section>
  );
}
