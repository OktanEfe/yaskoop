'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { galeriGorseller } from '@/lib/data/galeri';
import GaleriItem from './GaleriItem';
import type { GalleryImage } from '@/types';

interface LightboxState {
  image: GalleryImage;
  index: number;
}

export default function GaleriGrid() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const newIdx = (prev.index - 1 + galeriGorseller.length) % galeriGorseller.length;
      return { image: galeriGorseller[newIdx], index: newIdx };
    });
  }, []);

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const newIdx = (prev.index + 1) % galeriGorseller.length;
      return { image: galeriGorseller[newIdx], index: newIdx };
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox, close, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const renderGalleryItem = (image: GalleryImage, index: number) => {
    return (
      <div key={image.id} className="overflow-hidden rounded-[1.75rem] aspect-[4/5]">
        <GaleriItem
          image={image}
          onClick={() => setLightbox({ image, index })}
          priority={index === 0}
        />
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {galeriGorseller.slice(0, 4).map((image, idx) => renderGalleryItem(image, idx))}

        <div className="relative col-span-2 isolate overflow-hidden rounded-[2rem] bg-[#173624] px-7 py-9 text-white shadow-[0_22px_60px_rgba(23,54,36,0.14)] sm:px-10 sm:py-11 md:col-span-3 xl:col-span-4">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_90%_10%,rgba(190,221,157,0.18),transparent_35%),linear-gradient(125deg,#173624,#254a30)]" />
          <div className="pointer-events-none absolute -right-10 -top-20 -z-10 h-64 w-64 rounded-full border border-white/[0.08] sm:h-80 sm:w-80" />
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
            <span className="font-serif text-7xl leading-[0.7] text-[#d8e6ab] sm:text-8xl" aria-hidden="true">“</span>
            <div className="max-w-4xl">
              <p className="text-xl font-medium leading-8 tracking-[-0.02em] text-white sm:text-2xl sm:leading-10 lg:text-[1.75rem]">
                Her fide, Yalova’nın bereketli toprağından başlayan ortak bir emeğin izini taşır. Üretimden hasada uzanan her adımda, yarına daha yeşil bir iz bırakmak için çalışıyoruz.
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs font-medium tracking-wide text-white/65 sm:text-sm">
                <span className="h-px w-8 bg-[#d8e6ab]/70" />
                Yaskoop üretiminden kareler
              </div>
            </div>
          </div>
        </div>

        {galeriGorseller.slice(4).map((image, idx) => renderGalleryItem(image, idx + 4))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Kapat"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors z-10"
            aria-label="Önceki"
          >
            ‹
          </button>
          <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.image.src}
              alt={lightbox.image.alt}
              width={1200}
              height={900}
              sizes="90vw"
              className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg"
            />
            {lightbox.image.caption && (
              <p className="text-white/70 text-xs text-center mt-3">{lightbox.image.caption}</p>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors z-10"
            aria-label="Sonraki"
          >
            ›
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            {lightbox.index + 1} / {galeriGorseller.length}
          </p>
        </div>
      )}
    </>
  );
}
