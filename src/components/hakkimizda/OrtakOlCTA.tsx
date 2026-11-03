'use client';

import type { CtaData } from '@/types';
import Link from 'next/link';

interface OrtakOlCTAProps {
  cta: CtaData;
}

export default function OrtakOlCTA({ cta }: OrtakOlCTAProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-white sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="group relative isolate overflow-hidden rounded-[2rem] bg-[#173624] px-7 py-10 shadow-[0_28px_80px_rgba(23,54,36,0.18)] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(190,221,157,0.2),transparent_35%),linear-gradient(120deg,#173624,#254a30)]" />
          <div className="pointer-events-none absolute -right-16 -top-28 -z-10 h-80 w-80 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110 sm:h-[26rem] sm:w-[26rem]" />
          <div className="pointer-events-none absolute -right-4 -top-16 -z-10 h-64 w-64 rounded-full border border-white/[0.07] sm:h-[21rem] sm:w-[21rem]" />

          <div className="flex flex-col items-start gap-9 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                {cta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
                {cta.description}
              </p>
            </div>

            <div className="w-full shrink-0 lg:w-auto">
              <Link
                href={cta.buttonHref}
                className="group/button inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#d8e6ab] px-7 text-sm font-bold text-[#173624] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-8"
              >
                {cta.buttonLabel}
                <span aria-hidden="true" className="transition-transform group-hover/button:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}