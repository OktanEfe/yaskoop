'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import HakkimizdaMetin from './HakkimizdaMetin';
import HakkimizdaFoto from './HakkimizdaFoto';
import NelerYapiyoruz from './NelerYapiyoruz';
import Vizyon from './Vizyon';

export default function Hakkimizda() {
  return (
    <>
      <section id="hakkimizda" className="relative py-28 md:py-40 bg-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-50 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-70 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 lg:pr-12 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 shadow-sm">
                <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                Kurumsal Hafıza
              </span>
              
              <div className="w-full [&_h2]:text-4xl [&_h2]:md:text-[3.25rem] [&_h2]:font-bold [&_h2]:tracking-[-0.03em] [&_h2]:text-neutral-900 [&_h2]:leading-[1.12] [&_h2]:mb-8">
                <SectionHeading title="Hakkımızda" />
              </div>
              
              <div className="w-full text-neutral-600 text-[1.125rem] leading-[1.75] font-normal tracking-[-0.01em] [&_p]:mb-6 last:[&_p]:mb-0">
                <HakkimizdaMetin />
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full max-w-[480px] lg:max-w-none mx-auto">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-neutral-50/60 -z-10 border border-neutral-100/70 backdrop-blur-[2px]" />
              <div className="relative w-full transition-transform duration-700 hover:scale-[1.02]">
                <HakkimizdaFoto />
              </div>
            </div>

          </div>
        </div>
      </section>

      <NelerYapiyoruz />
      <Vizyon />
    </>
  );
}