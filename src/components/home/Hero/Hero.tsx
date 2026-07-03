'use client';

import { heroSlides } from '@/lib/data/hero';
import { useHeroSlider } from './useHeroSlider';
import HeroSlide from './HeroSlide';

export default function Hero() {
  const { current, goTo } = useHeroSlider(heroSlides.length);
  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden" aria-label="Ana Görsel">
      {/* Slaytlar */}
      {heroSlides.map((s, i) => (
        <HeroSlide key={s.image} slide={s} isActive={i === current} priority={i === 0} />
      ))}

      {/* Üst metin katmanı */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <p
          key={`label-${current}`}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 opacity-0 animate-fade-in animation-delay-200"
        >
          Yaskoop Kooperatif
        </p>
        <h1
          key={`heading-${current}`}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md max-w-4xl opacity-0 animate-fade-slide-up animation-delay-400"
        >
          {slide.heading}
        </h1>
        <p
          key={`sub-${current}`}
          className="mt-5 text-base md:text-lg text-white/80 max-w-xl font-normal opacity-0 animate-fade-slide-up animation-delay-600"
        >
          {slide.subtext}
        </p>
      </div>

      {/* İlerleme noktaları */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slayt ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}