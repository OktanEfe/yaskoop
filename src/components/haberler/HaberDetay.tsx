'use client';

import Image from 'next/image';
import type { NewsItem } from '@/types';

interface HaberDetayProps {
  haber: NewsItem;
  onClose: () => void;
}

const tagLabel: Record<NewsItem['tag'], string> = {
  haber:    'Haber',
  etkinlik: 'Etkinlik',
  duyuru:   'Duyuru',
};

export default function HaberDetay({ haber, onClose }: HaberDetayProps) {
  const date = new Date(haber.tarih).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Kapak fotoğrafı */}
        <div className="relative h-64 rounded-t-2xl overflow-hidden">
          <Image
            src={haber.resimler[0]}
            alt={haber.baslik}
            fill
            sizes="(max-width: 672px) 90vw, 672px"
            className="object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            aria-label="Kapat"
          >
            ✕
          </button>
        </div>

        {/* İçerik */}
        <div className="p-6">
          <p className="text-xs text-gray-400 mb-3">
            {tagLabel[haber.tag]} &middot; {date}
          </p>
          <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug">{haber.baslik}</h2>
          <p className="text-gray-700 leading-relaxed text-[0.95rem]">{haber.aciklama}</p>

          {haber.resimler.length > 1 && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {haber.resimler.slice(1).map((src, i) => (
                <div key={src} className="relative h-36 rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`${haber.baslik} ${i + 2}`}
                    fill
                    sizes="(max-width: 672px) 45vw, 336px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
