'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { uyeler } from '@/lib/data/uyeler';

export default function UyeLogoSeridi() {
  return (
    <section className="relative overflow-hidden bg-[#f4f4ec] py-24 md:py-32">
      <div className="pointer-events-none absolute -right-36 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#dce8d5] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2a6119]/15 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#35663a]">
              Aynı toprağın üreticileri
            </span>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#193323] md:text-5xl">
              Gücümüz, birlikte üreten 10 kurucu ortağımız.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#526455]">
            Yalova’dan Hollanda’ya uzanan üretici ortaklarımız, doğaya değer katan
            bir gelecek için aynı çatı altında buluşuyor.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {uyeler.map((item, index) => (
            <article
              key={item.id}
              className="group flex min-h-48 flex-col rounded-2xl border border-[#193323]/[0.08] bg-white p-4 shadow-[0_8px_24px_rgba(24,49,32,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#75966d]/50 hover:shadow-[0_16px_34px_rgba(24,49,32,0.1)] sm:min-h-56 sm:rounded-3xl sm:p-5"
            >
              <div className="mb-4 flex h-24 items-center justify-center rounded-xl bg-[#f7f8f3] p-3 sm:mb-5 sm:h-28 sm:rounded-2xl sm:p-4">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.sirket} logosu`}
                    width={240}
                    height={150}
                    className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 18vw"
                  />
                ) : (
                  <span
                    aria-label={`${item.sirket} logosu henüz paylaşılmadı`}
                    className="text-center text-2xl font-semibold tracking-[0.08em] text-[#49644a] sm:text-3xl"
                  >
                    US
                  </span>
                )}
              </div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#789078] sm:text-[11px]">
                Kurucu ortak {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-xs font-semibold leading-snug text-[#1d3827] sm:text-sm">
                {item.sirket}
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#657467]">
                {item.isim}
              </p>
              {!item.logo && (
                <p className="mt-1 text-[10px] leading-4 text-[#899389]">
                  Logo bekleniyor
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <Button asChild variant="primary" size="md">
            <Link href="/uyeler">
              <span>Kurucu ortakları tanıyın</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}