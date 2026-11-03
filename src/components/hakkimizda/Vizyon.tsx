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
            <div className="group relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] shadow-[0_32px_70px_-20px_rgba(0,0,0,0.3)] lg:max-w-[440px]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#09190e]/65 via-transparent to-transparent" />
              <Image
                src="/images/about/vizyon.jpg"
                alt="Süs bitkisinin kırmızı meyveleri ve yeşil yaprakları"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <span className="absolute bottom-6 left-6 z-20 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                Doğadan ilham alan üretim
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <div className="flex flex-col items-start mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 shadow-sm backdrop-blur-sm select-none">
                Gelecek Projeksiyonu
              </span>
              
              <div className="w-full [&_h2]:text-4xl [&_h2]:md:text-[3.25rem] [&_h2]:font-bold [&_h2]:tracking-[-0.03em] [&_h2]:text-white [&_h2]:leading-[1.12]">
                <SectionHeading
                    title="Geleceğe birlikte kök salıyoruz."
                    subtitle="Vizyonumuz"
                  light
                />
              </div>
            </div>

            <div className="space-y-6 text-[#cbd9c7] text-lg leading-8 font-normal tracking-tight md:text-xl md:leading-9">
              <p className="text-white text-xl font-medium leading-9 tracking-wide md:text-2xl">
                Yaskoop&apos;un vizyonu, süs bitkileri üretiminde uluslararası standartları yakalamış,
                çevreye duyarlı ve sürdürülebilir bir kooperatif modeli oluşturmaktır.
              </p>
              
              <p>
                Ortak akla dayalı, katılımcı ve eşit söz hakkına sahip bir yapıyla sektöre yön
                vermeyi hedefliyoruz. Üretimde kaliteyi artırmak, pazar olanaklarını genişletmek
                ve üyelerimizin refahını yükseltmek önceliklerimiz arasındadır.
              </p>
              
              <p className="border-t border-white/10 pt-6 font-medium text-[#d8e6ab]">
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