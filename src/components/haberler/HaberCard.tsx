import Image from 'next/image';
import type { NewsItem } from '@/types';

interface HaberCardProps {
  haber: NewsItem;
  onClick: (haber: NewsItem) => void;
  priority?: boolean;
  featured?: boolean;
}

const tagConfig: Record<
  NewsItem['tag'],
  { label: string; className: string }
> = {
  haber:    { label: 'Haber',    className: 'border-[#193323]/10 bg-white text-[#315d37]' },
  etkinlik: { label: 'Etkinlik', className: 'border-[#d8e6ab]/30 bg-[#d8e6ab] text-[#193323]' },
  duyuru:   { label: 'Duyuru',   className: 'border-white/20 bg-white/10 text-white' },
};

export default function HaberCard({
  haber,
  onClick,
  priority = false,
  featured = false,
}: HaberCardProps) {
  const { label, className: badgeClass } = tagConfig[haber.tag];
  const date = new Date(haber.tarih).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const [day, month] = date.split(' ');

  return (
    <button
      type="button"
      onClick={() => onClick(haber)}
      aria-label={`${haber.baslik} haberini oku`}
      className={`group flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-[#193323]/10 bg-white text-left shadow-[0_8px_28px_rgba(25,51,35,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#69865d]/35 hover:shadow-[0_18px_44px_rgba(25,51,35,0.11)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58764c] ${
        featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr]' : ''
      }`}
    >
      <div className={`group/image relative h-56 shrink-0 overflow-hidden bg-[#e8eee4] sm:h-64 ${featured ? 'lg:h-full lg:min-h-[25rem]' : ''}`}>
        <Image
          src={haber.resimler[0]}
          alt={haber.baslik}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10251a]/45 via-transparent to-black/10" />
        <span className={`absolute left-5 top-5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] backdrop-blur-md ${badgeClass}`}>
          {label}
        </span>
        {featured && (
          <span className="absolute bottom-5 left-5 text-xs font-medium tracking-wide text-white/85">
            Yaskoop’tan öne çıkanlar
          </span>
        )}
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${featured ? 'justify-center p-6 sm:p-9 lg:p-12' : 'p-5 sm:p-6'}`}>
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.13em] text-[#849085]">
          <time dateTime={haber.tarih}>{day} {month}</time>
          <span className="h-1 w-1 rounded-full bg-[#9eaa98]" />
          <span>Yalova</span>
        </div>
        <h3 className={`mt-4 line-clamp-2 min-h-[3.5rem] font-semibold leading-tight tracking-[-0.03em] text-[#193323] transition-colors duration-200 group-hover:text-[#426b39] ${
          featured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl'
        }`}>
          {haber.baslik}
        </h3>
        <p className={`mt-3 text-sm leading-7 text-[#667365] ${featured ? 'sm:text-base sm:leading-8' : 'line-clamp-3 min-h-[5.25rem]'}`}>
          {haber.ozet}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#426b39]">
          Haberi okuyun
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
  );
}
