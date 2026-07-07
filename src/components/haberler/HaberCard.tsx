import Image from 'next/image';
import type { NewsItem } from '@/types';

interface HaberCardProps {
  haber: NewsItem;
  onClick: (haber: NewsItem) => void;
}

const tagConfig: Record<
  NewsItem['tag'],
  { label: string; className: string }
> = {
  haber:    { label: 'Haber',    className: 'bg-blue-50 text-blue-700' },
  etkinlik: { label: 'Etkinlik', className: 'bg-accent/10 text-accent' },
  duyuru:   { label: 'Duyuru',   className: 'bg-emerald-50 text-emerald-700' },
};

export default function HaberCard({ haber, onClick }: HaberCardProps) {
  const { label, className: badgeClass } = tagConfig[haber.tag];
  const date = new Date(haber.tarih).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <button
      type="button"
      onClick={() => onClick(haber)}
      className="group text-left bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden w-full"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={haber.resimler[0]}
          alt={haber.baslik}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass}`}>
          {label}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-2">{date}</p>
        <h3 className="font-semibold text-gray-900 text-[0.95rem] leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
          {haber.baslik}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{haber.ozet}</p>
      </div>
    </button>
  );
}
