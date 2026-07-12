'use client';

import { heroSlides } from '@/lib/data/hero';
import { useHeroSlider } from './useHeroSlider';
import HeroSlide from './HeroSlide';

export default function Hero() {
  const { current, goTo } = useHeroSlider(heroSlides.length);
  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#14180F]" aria-label="Ana Görsel">
      {heroSlides.map((s, i) => (
        <HeroSlide key={s.image} slide={s} isActive={i === current} priority={i === 0} />
      ))}

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span
            key={`label-${current}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#34D399] mb-6 backdrop-blur-sm select-none opacity-0 animate-fade-in animation-delay-200"
          >
            Yaskoop Kooperatifi
          </span>
          
          <h1
            key={`heading-${current}`}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-[-0.02em] leading-[1.15] max-w-3xl opacity-0 animate-fade-slide-up animation-delay-400 font-sans"
          >
            {slide.heading}
          </h1>
          
          <p
            key={`sub-${current}`}
            className="mt-6 text-base md:text-[17px] text-white/80 max-w-xl font-normal leading-relaxed tracking-wide opacity-0 animate-fade-slide-up animation-delay-600"
          >
            {slide.subtext}
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-black/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/5 shadow-2xl">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slayt ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${
              i === current ? 'w-6 bg-white' : 'w-1 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}