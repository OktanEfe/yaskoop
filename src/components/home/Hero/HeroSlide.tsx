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
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!isActive}
    >
      <Image
        src={slide.image}
        alt={slide.heading}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />
      {/* Gradient overlay — sakin, aşırı karartmayan */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />
    </div>
  );
}
