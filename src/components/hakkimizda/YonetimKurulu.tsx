'use client';

import type { BoardMember } from '@/types';

interface YonetimKuruluProps {
  members: BoardMember[];
}

export default function YonetimKurulu({ members }: YonetimKuruluProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f7f2] py-20 text-[#193323] md:py-28">
      <div className="pointer-events-none absolute -left-40 top-12 -z-10 h-96 w-96 rounded-full bg-[#e6eedf] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 border-b border-[#193323]/10 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-[#193323] sm:text-5xl">
              Yönetim Kurulu
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#667365] md:text-base">
            Kooperatifimizin çalışmalarına yön veren, üretici ortaklarımızın
            deneyimini ortak hedeflerde buluşturan yönetim kurulumuz.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {members.map((member, index) => {
            const isChair = index === 0;

            return (
              <article
                key={member.id}
                className={`group relative flex min-h-72 flex-col overflow-hidden rounded-[1.5rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  isChair
                    ? 'border-[#193323] bg-[#193323] text-white shadow-[0_20px_50px_rgba(25,51,35,0.16)]'
                    : 'border-[#193323]/10 bg-white text-[#193323] shadow-[0_12px_36px_rgba(25,51,35,0.04)] hover:border-[#69865d]/40 hover:shadow-[0_20px_48px_rgba(25,51,35,0.09)]'
                }`}
              >
                {isChair && (
                  <div className="pointer-events-none absolute -right-14 -top-20 h-56 w-56 rounded-full border border-white/10" />
                )}
                <div className="relative flex min-h-8 items-start justify-end">
                  {isChair && (
                    <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#dce9c7]">
                      Başkan
                    </span>
                  )}
                </div>

                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-[1.7rem]">
                    {member.isim}
                  </h3>
                  <p
                    className={`mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.12em] ${
                      isChair ? 'text-[#dce9c7]' : 'text-[#58764c]'
                    }`}
                  >
                    {member.unvan}
                  </p>
                </div>

                <p
                  className={`mt-auto border-t pt-5 text-sm leading-6 ${
                    isChair
                      ? 'border-white/15 text-white/75'
                      : 'border-[#193323]/10 text-[#667365]'
                  }`}
                >
                  {member.bio.replace(/^Kurucu ortak\s*[·•]\s*/, '')}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
