import SectionHeading from '@/components/ui/SectionHeading';
import type { HeroSection } from '@/types';

interface HakkimizdaHeroProps {
  hero: HeroSection;
}

export default function HakkimizdaHero({ hero }: HakkimizdaHeroProps) {
  return (
    <section className="relative py-28 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent shadow-sm select-none">
            {hero.eyebrow}
          </span>
          <div className="max-w-3xl">
            <SectionHeading title={hero.title} subtitle={hero.subtitle} />
          </div>
        </div>
      </div>
    </section>
  );
}
