'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { HeroSection, KurulusHikayesi, CorporatePhoto } from '@/types';

interface HakkimizdaTanitimProps {
  hero: HeroSection;
  story: KurulusHikayesi;
  photo: CorporatePhoto;
}

export default function HakkimizdaTanitim({ hero, story, photo }: HakkimizdaTanitimProps) {
  return (
    <div className="w-full select-none selection:bg-[#14180F] selection:text-white font-sans">
      <section className="relative isolate overflow-hidden bg-[#10251a] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(85,139,82,0.28),transparent_48%),linear-gradient(130deg,#10251a_15%,#183b29_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-6">
            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">
              <span className="block text-[#cde0a5]">{hero.title}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg md:leading-9">
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/uyeler"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d8e6ab] px-6 text-sm font-semibold text-[#173622] transition-colors hover:bg-white"
              >
                Kurucu ortaklarımız
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                İletişime geçin
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/15 pt-6">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">2025</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.13em] text-white/55 sm:text-xs">
                  Kuruluş yılı
                </p>
              </div>
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">10</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.13em] text-white/55 sm:text-xs">
                  Kurucu ortak
                </p>
              </div>
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Yalova</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.13em] text-white/55 sm:text-xs">
                  Üretimin merkezi
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] border border-white/10 sm:-inset-5" />
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#254630] shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:rounded-[2rem]">
                <Image
                  src={photo.secondarySrc}
                  alt={photo.secondaryAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 90vw, 46vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2017]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8e6ab]">
                    Yalova’da üretim
                  </p>
                  <p className="mt-2 text-lg font-medium text-white sm:text-xl">
                    Doğayla iç içe, ortak emekle büyüyen bir yapı.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kuruluş hikayesi */}
      <section className="relative overflow-hidden bg-white py-20 text-[#193323] md:py-28">
        <div className="pointer-events-none absolute -right-36 top-0 h-[34rem] w-[34rem] rounded-full bg-[#edf4e9] blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Sol Kolon: Sayfa Kaydıkça Sabit Kalan Görsel Alanı */}
            <div className="w-full lg:sticky lg:top-36 lg:col-span-5">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#193323]/10 bg-white p-2 shadow-[0_24px_70px_rgba(25,51,35,0.1)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(25,51,35,0.14)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-[#edf2e8]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out grayscale-[10%] hover:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
              
              {photo.caption && (
                <div className="mt-5 flex items-center gap-2.5 px-3 text-[13px] font-medium tracking-wide text-[#718071]">
                  <span className="h-1 w-1 rounded-full bg-[#789078]" />
                  {photo.caption}
                </div>
              )}
            </div>

            {/* Sağ Kolon: Hikayenin Akıcı Metinleri */}
            <div className="flex flex-col gap-10 lg:col-span-7 lg:pt-2">
              
              {/* Bölüm Başlığı */}
              <div className="relative border-l-2 border-[#49724b] pl-6 md:pl-8">
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#193323] md:text-[2.5rem]">
                  {story.title}
                </h3>
              </div>

              {/* Metin Akışı */}
              <div className="space-y-8 text-justify text-[17px] font-normal leading-[1.85] tracking-wide text-[#566557] md:text-left md:text-[19px]">
                {story.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="first-of-type:text-[19px] first-of-type:font-medium first-of-type:leading-relaxed first-of-type:text-[#2e4833] md:first-of-type:text-[21px]"
                  >
                    {paragraph}
                  </p>
                ))}
                
                <p className="border-t border-[#193323]/10 pt-5 text-[15px] italic text-[#788579] md:text-[16px]">
                  Yalova&apos;nın köklü süs bitkileri üretim mirasını kolektif bir bilinçle yarınlara taşıyor, toprakla kurduğumuz şeffaf ve sürdürülebilir bağı her geçen gün daha da güçlendiriyoruz.
                </p>
              </div>

              {/* Alt Bilgi Tablosu */}
              <div className="mt-2 grid grid-cols-2 gap-6 border-t border-[#193323]/10 pt-8 sm:gap-8">
                <div className="flex flex-col gap-2">
                  <h5 className="text-[11px] font-bold uppercase tracking-widest text-[#849085]">Kurumsal Mevzuat</h5>
                  <p className="text-[15px] font-medium tracking-wide text-[#2e4833]">Uluslararası Tarım Standartları</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-[11px] font-bold uppercase tracking-widest text-[#849085]">Operasyon Modeli</h5>
                  <p className="text-[15px] font-medium tracking-wide text-[#2e4833]">Sürdürülebilir Kolektif Kalkınma</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
