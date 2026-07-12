'use client';

import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Vizyon() {
  return (
    <section id="vizyon" className="relative py-28 md:py-40 bg-[#09190e] text-white overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div className="relative w-full max-w-[400px] lg:max-w-[440px] aspect-square rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/[0.05] shadow-[0_32px_70px_-20px_rgba(0,0,0,0.3)] group backdrop-blur-[2px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-neutral-950/40 z-10 pointer-events-none" />
              <Image
                src="/vizyon222.png"
                alt="Yaskoop Vizyon"
                fill
                className="object-cover p-10 transform scale-[0.92] group-hover:scale-[0.96] transition-transform duration-700 ease-out brightness-0 invert opacity-85"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <div className="flex flex-col items-start mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 shadow-sm backdrop-blur-sm select-none">
                Gelecek Projeksiyonu
              </span>
              
              <div className="w-full [&_h2]:text-4xl [&_h2]:md:text-[3.25rem] [&_h2]:font-bold [&_h2]:tracking-[-0.03em] [&_h2]:text-white [&_h2]:leading-[1.12]">
                <SectionHeading
                  title="Vizyonumuz"
                  subtitle="Vizyon & Misyon"
                  light
                />
              </div>
            </div>

            <div className="space-y-6 text-accent leading-[1.75] text-[1.05rem] font-normal tracking-tight">
              <p className="text-white text-[1.15rem] leading-[1.65] font-medium tracking-wide">
                Yaskoop&apos;un vizyonu, süs bitkileri üretiminde uluslararası standartları yakalamış,
                çevreye duyarlı ve sürdürülebilir bir kooperatif modeli oluşturmaktır.
              </p>
              
              <p>
                Ortak akla dayalı, katılımcı ve eşit söz hakkına sahip bir yapıyla sektöre yön
                vermeyi hedefliyoruz. Üretimde kaliteyi artırmak, pazar olanaklarını genişletmek
                ve üyelerimizin refahını yükseltmek önceliklerimiz arasındadır.
              </p>
              
              <p className="border-t border-white/[0.06] pt-6 text-accent font-medium">
                Yerli üreticinin gücünü birleştirerek ulusal ve uluslararası ölçekte saygın bir
                marka olmayı amaçlıyoruz.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}