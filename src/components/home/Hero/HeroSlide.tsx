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
        className={`object-cover transition-transform duration-[8000ms] ease-out ${
          isActive ? 'scale-105' : 'scale-100'
        }`}
        sizes="100vw"
      />
    </div>
  );
}