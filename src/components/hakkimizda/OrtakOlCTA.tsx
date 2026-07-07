import type { CtaData } from '@/types';
import Link from 'next/link';

interface OrtakOlCTAProps {
  cta: CtaData;
}

export default function OrtakOlCTA({ cta }: OrtakOlCTAProps) {
  return (
    <section className="relative py-24 md:py-32 bg-accent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-10 md:p-16 shadow-[0_40px_120px_rgba(15,23,42,0.15)]">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              {cta.eyebrow && (
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  {cta.eyebrow}
                </span>
              )}
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">{cta.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{cta.description}</p>
            </div>
            <Link
              href={cta.buttonHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent transition hover:bg-white/90"
            >
              {cta.buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
