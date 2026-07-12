'use client';

import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import type { HeroSection, KurulusHikayesi, CorporatePhoto } from '@/types';

interface HakkimizdaTanitimProps {
  hero: HeroSection;
  story: KurulusHikayesi;
  photo: CorporatePhoto;
}

export default function HakkimizdaTanitim({ hero, story, photo }: HakkimizdaTanitimProps) {
  return (
    <div className="w-full select-none selection:bg-[#14180F] selection:text-white font-sans">
      
      {/* ================= ÜST BÖLÜM: HIGH-END AYDINLIK MANİFESTO & KURUMSAL VERİ ALANI ================= */}
      <section className="relative py-36 md:py-48 bg-white text-[#14180F] overflow-hidden">
        
        {/* Saf beyazlığı kıran ve kurumsal mimariyi destekleyen mikro grid dokusu */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.4] pointer-events-none -z-10" />
        
        {/* Derinlik katan kurumsal hafif geçiş dairesi */}
        <div className="absolute top-1/3 left-1/4 w-[900px] h-[900px] bg-[#2A6119]/[0.015] rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Asimetrik Premium Grid: Sol Sütun Baskın Kurumsal Alan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Sol Odak (lg:col-span-7): Ana Başlık, Manifesto ve Resmi İstatistikler */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              
              {/* Çift Etiketli Üst Kurumsal Kimlik Şeridi */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#059669] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#34D399]">
                  {hero.eyebrow}
                </span>
                <span className="text-[11px] font-medium tracking-wider text-[#6B6B6B] border-l border-[#E5E5E5] pl-3">
                  Resmi Kooperatif Sicili
                </span>
              </div>

              {/* Ana Başlık Alanı */}
              <div className="text-[#14180F] [&_h2]:text-[#14180F] [&_h2]:tracking-tight [&_h2]:text-4xl md:[&_h2]:text-5xl md:[&_h2]:leading-[1.1] [&_h2]:font-bold">
                <SectionHeading title={hero.title} subtitle="" light={false} />
              </div>

              {/* Genişletilmiş Editoryal Giriş Metni */}
              <p className="text-[19px] md:text-[22px] font-light leading-relaxed text-[#14180F]/90 max-w-2xl">
                {hero.subtitle} Toprağın kadim bilgisini, modern tarım teknolojileri ve şeffaf kooperatifçilik modeliyle yeniden yorumluyoruz.
              </p>

              {/* Kurumsal İstatistik Şeridi */}
              <div className="pt-8 border-t border-[#E5E5E5] mt-4 grid grid-cols-3 gap-6 max-w-xl">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#2A6119]">1994</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B6B6B] font-medium">Kuruluş Yılı</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-[#E5E5E5] pl-6">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#2A6119]">120+</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B6B6B] font-medium">Aktif Üretici</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-[#E5E5E5] pl-6">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#2A6119]">450k m²</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B6B6B] font-medium">Üretim Alanı</span>
                </div>
              </div>

            </div>

            {/* Sağ Odak (lg:col-span-5): Kırık Ritimli Kurumsal Kartlar ve Saha Fotoğrafı */}
            <div className="lg:col-span-5 lg:pt-20 flex flex-col gap-8 w-full">
              
              {/* Misyon Kartı */}
              <div className="p-6 rounded-2xl bg-[#F5F5F4] border border-[#E5E5E5] border-l-4 border-l-[#059669] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.04)]">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6B6B6B] block mb-2">Misyon & Gelecek</span>
                <p className="text-[#14180F]/80 text-[15px] leading-relaxed font-normal">
                  Her bir üretim aşamasında ekolojik dengeyi koruma misyonunu üstlenirken, sadece bugünün değil, yarının nesilleri için de yeşil bir gelecek inşa etmek adına Yalova ve çevre bölgelerdeki üreticilerimizle omuz omuza çalışıyoruz.
                </p>
              </div>

              {/* Kolektif Bilinç Kartı */}
              <div className="p-6 rounded-2xl bg-[#F5F5F4] border border-[#E5E5E5] border-l-4 border-l-[#059669] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.04)]">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6B6B6B] block mb-2">Kolektif Bilinç</span>
                <p className="text-[#14180F]/80 text-[15px] leading-relaxed font-normal">
                  Geleneksel tarımı teknolojik altyapıyla birleştirerek, yerel kalkınmanın uluslararası standartlarda bir modele dönüşebileceğini resmi mevzuatlarımız ışığında kanıtlıyoruz.
                </p>
              </div>

              {/* Asimetrik Kurumsal Saha Fotoğraf Bloğu */}
              {/* // TODO: Bu alana üretim sahası veya genel kuruldan üst düzey bir kurumsal fotoğraf yerleştirilecek */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5E5E5] p-2 bg-[#F5F5F4] group transition-all duration-500">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-200 shadow-inner">
                  <div className="absolute inset-0 bg-[#2A6119]/5 mix-blend-multiply z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-[11px] font-medium tracking-widest text-[#6B6B6B] uppercase z-20">
                    Kurumsal Üretim Sahası / Görsel Alanı
                  </div>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </section>

      {/* ================= ALT BÖLÜM: DERİN ANTRASİT HİKAYEMİZ (STICKY GRID) ================= */}
      <section className="relative py-32 md:py-48 bg-[#14180F] text-white overflow-hidden border-b border-white/[0.02]">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-white/[0.01] rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Sol Kolon: Sayfa Kaydıkça Sabit Kalan Görsel Alanı */}
            <div className="lg:col-span-5 w-full lg:sticky lg:top-36">
              <div className="relative rounded-2xl overflow-hidden bg-white/[0.01] border border-white/[0.06] p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/10">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#1D2118]">
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
                <div className="mt-5 px-3 flex items-center gap-2.5 text-white/30 text-[13px] tracking-wide font-normal">
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  {photo.caption}
                </div>
              )}
            </div>

            {/* Sağ Kolon: Hikayenin Akıcı Metinleri */}
            <div className="lg:col-span-7 flex flex-col gap-12 lg:pt-2">
              
              {/* Bölüm Başlığı */}
              <div className="relative border-l-2 border-white/20 pl-6 md:pl-8">
                <h3 className="text-2xl md:text-[2.5rem] font-bold tracking-[-0.03em] text-white leading-tight">
                  {story.title}
                </h3>
              </div>

              {/* Metin Akışı */}
              <div className="space-y-8 text-white/70 text-[17px] md:text-[19px] leading-[1.85] font-light tracking-wide text-justify md:text-left">
                {story.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="first-of-type:text-white first-of-type:text-[19px] md:first-of-type:text-[21px] first-of-type:font-normal first-of-type:leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                
                <p className="pt-4 border-t border-white/[0.04] text-white/50 text-[15px] md:text-[16px] italic">
                  Yalova&apos;nın köklü süs bitkileri üretim mirasını kolektif bir bilinçle yarınlara taşıyor, toprakla kurduğumuz şeffaf ve sürdürülebilir bağı her geçen gün daha da güçlendiriyoruz.
                </p>
              </div>

              {/* Alt Bilgi Tablosu */}
              <div className="border-t border-white/[0.06] pt-10 mt-6 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <h5 className="text-[11px] font-bold uppercase tracking-widest text-white/40">Kurumsal Mevzuat</h5>
                  <p className="text-white/90 text-[15px] font-medium tracking-wide">Uluslararası Tarım Standartları</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-[11px] font-bold uppercase tracking-widest text-white/40">Operasyon Modeli</h5>
                  <p className="text-white/90 text-[15px] font-medium tracking-wide">Sürdürülebilir Kolektif Kalkınma</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}