'use client';

import { useMemo, useState } from 'react';
import { haberler } from '@/lib/data/haberler';
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
  const pageItems = filteredHaberler.slice(
    pageIndex * PAGE_SIZE,
    pageIndex * PAGE_SIZE + PAGE_SIZE
  );
  const featuredItem = pageItems[0];
  const currentItems = filteredHaberler.slice(
    pageIndex * PAGE_SIZE + 1,
    pageIndex * PAGE_SIZE + PAGE_SIZE
  );

  const countForTag = (tag: TagFilter) =>
    tag === 'all' ? haberler.length : haberler.filter((item) => item.tag === tag).length;

  const handleFilterClick = (tag: TagFilter) => {
    setActiveTag(tag);
    setPageIndex(0);
  };

  const handlePrevPage = () => setPageIndex((current) => Math.max(0, current - 1));
  const handleNextPage = () =>
    setPageIndex((current) => Math.min(pageCount - 1, current + 1));

  return (
    <section id="haberler" className="bg-[#f3f6f1] pb-20 text-[#193323] sm:pb-24 md:pb-28">
      <div className="relative isolate overflow-hidden bg-[#10251a] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_10%,rgba(150,185,112,0.22),transparent_38%),linear-gradient(135deg,#10251a,#214530)]" />
        <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full border border-white/[0.07]" />
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12 lg:pb-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Haberler &amp; Etkinlikler
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Yaskoop’tan haberler, Yalova’daki buluşmalar ve üretim yolculuğumuzdan
              gelişmeler.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm text-white/70">
              <span className="text-2xl font-semibold tabular-nums text-[#d8e6ab]">
                {filteredHaberler.length.toString().padStart(2, '0')}
              </span>
              <span>paylaşım</span>
              <span className="mx-1 h-4 w-px bg-white/20" />
              <span>Yalova’dan güncel gelişmeler</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-5 sm:-mt-8 sm:px-8 lg:px-12">
        <div className="rounded-[1.75rem] border border-[#193323]/10 bg-white p-5 shadow-[0_20px_60px_rgba(25,51,35,0.08)] sm:p-8 lg:p-10">
          <div className="mb-9 flex flex-col gap-5 border-b border-[#193323]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#193323] sm:text-3xl">
                Kooperatiften haberler
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#718071]">
                İlginizi çeken başlığa göre içeriklere göz atın.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Haber kategorileri">
          {tagOptions.map((option) => {
            const isActive = option.key === activeTag;
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => handleFilterClick(option.key)}
                aria-pressed={isActive}
                className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-200 sm:text-sm ${
                  isActive
                    ? 'border-[#193323] bg-[#193323] text-white'
                    : 'border-[#193323]/10 bg-white text-[#667365] hover:border-[#69865d]/40 hover:bg-[#f5f7f2]'
                }`}
              >
                {option.label}
                <span className={isActive ? 'text-[#d8e6ab]' : 'text-[#91a08e]'}>{countForTag(option.key)}</span>
              </button>
            );
          })}
            </div>
        </div>

        {filteredHaberler.length === 0 ? (
          <div className="rounded-[1.5rem] border border-dashed border-[#193323]/20 bg-[#f7f9f6] px-6 py-16 text-center">
            <h3 className="text-lg font-semibold text-[#193323]">Henüz paylaşım yok</h3>
            <p className="mt-2 text-sm text-[#718071]">Bu kategoride yeni bir içerik olduğunda burada görebilirsiniz.</p>
          </div>
        ) : (
          <>
            <div className="space-y-7 sm:space-y-5">
              {featuredItem && (
                <HaberCard
                  haber={featuredItem}
                  onClick={setSelected}
                  priority
                  featured
                />
              )}
              {currentItems.length > 0 && (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {currentItems.map((haber, index) => (
                <HaberCard
                  key={haber.id}
                  haber={haber}
                  onClick={setSelected}
                  priority={index === 0}
                />
              ))}
                </div>
              )}
            </div>

            {pageCount > 1 && (
              <div className="mt-8 flex flex-col gap-4 border-t border-[#193323]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[#718071]">
                  {pageIndex + 1} / {pageCount} sayfa
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    disabled={pageIndex === 0}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[#193323]/15 bg-white px-5 text-sm font-semibold text-[#354735] transition hover:border-[#69865d]/50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    ‹ Geri
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPage}
                    disabled={pageIndex >= pageCount - 1}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[#193323]/15 bg-white px-5 text-sm font-semibold text-[#354735] transition hover:border-[#69865d]/50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    İleri ›
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        </div>
      </div>

      {selected && <HaberDetay haber={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
