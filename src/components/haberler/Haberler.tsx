'use client';

import { useMemo, useState } from 'react';
import { haberler } from '@/lib/data/haberler';
import SectionHeading from '@/components/ui/SectionHeading';
import HaberCard from './HaberCard';
import HaberDetay from './HaberDetay';
import type { NewsItem } from '@/types';

type TagFilter = 'all' | 'haber' | 'duyuru' | 'etkinlik';

const tagOptions: { key: TagFilter; label: string }[] = [
  { key: 'all', label: 'Tümü' },
  { key: 'haber', label: 'Haberler' },
  { key: 'duyuru', label: 'Duyurular' },
  { key: 'etkinlik', label: 'Etkinlikler' },
];

const PAGE_SIZE = 3;

export default function Haberler() {
  const [selected, setSelected] = useState<NewsItem | null>(null);
  const [activeTag, setActiveTag] = useState<TagFilter>('all');
  const [pageIndex, setPageIndex] = useState(0);

  const filteredHaberler = useMemo(
    () =>
      activeTag === 'all'
        ? haberler
        : haberler.filter((haber) => haber.tag === activeTag),
    [activeTag]
  );

  const pageCount = Math.max(1, Math.ceil(filteredHaberler.length / PAGE_SIZE));
  const currentItems = filteredHaberler.slice(
    pageIndex * PAGE_SIZE,
    pageIndex * PAGE_SIZE + PAGE_SIZE
  );

  const handleFilterClick = (tag: TagFilter) => {
    setActiveTag(tag);
    setPageIndex(0);
  };

  const handlePrevPage = () => setPageIndex((current) => Math.max(0, current - 1));
  const handleNextPage = () =>
    setPageIndex((current) => Math.min(pageCount - 1, current + 1));

  return (
    <section id="haberler" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Haberler & Etkinlikler"
          subtitle="Kooperatifimizden güncel gelişmeler"
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {tagOptions.map((option) => {
            const isActive = option.key === activeTag;
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => handleFilterClick(option.key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'bg-accent text-white border-accent'
                    : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {filteredHaberler.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-neutral-300 bg-white/80 p-12 text-center text-neutral-500">
            Bu kategoride henüz içerik yok.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {currentItems.map((haber) => (
                <HaberCard key={haber.id} haber={haber} onClick={setSelected} />
              ))}
            </div>

            {pageCount > 1 && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-500">
                  {pageIndex + 1} / {pageCount} sayfa
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    disabled={pageIndex === 0}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    ‹ Geri
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPage}
                    disabled={pageIndex >= pageCount - 1}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    İleri ›
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {selected && <HaberDetay haber={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
