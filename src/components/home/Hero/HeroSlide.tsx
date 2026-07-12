'use client';

import Image from 'next/image';
import type { HeroSlide as HeroSlideType } from '@/types';

interface HeroSlideProps {
  slide: HeroSlideType;
  isActive: boolean;
  priority?: boolean;
}

export default function HeroSlide({ slide, isActive, priority = false }: HeroSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
      }`}
      aria-hidden={!isActive}
    >
      <Image
        src={slide.image}
        alt={slide.heading}
        fill
        priority={priority}
        className="object-cover transform scale-100"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60" />
    </div>
  );
}