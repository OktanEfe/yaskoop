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
        <GaleriItem image={image} onClick={() => setLightbox({ image, index })} />
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {galeriGorseller.slice(0, 4).map((image, idx) => renderGalleryItem(image, idx))}

        <div className="col-span-2 rounded-[2rem] bg-emerald-50 border border-emerald-100 p-8 text-neutral-900 shadow-sm md:col-span-3 xl:col-span-4">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.23em] text-accent mb-4">
            Üretim Hikayesi
          </span>
          <p className="text-xl font-semibold leading-9 tracking-tight">
            “Hasat sürecinde her mevsim, toprağın sesi ve ortak emeğin ritmiyle ilerliyoruz. Her fotoğraf
            bizim için bir mevsimin ortak belleğini saklıyor.”
          </p>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            {/* TODO: Galeriye özgün bir ortak üretici sözü veya sezon anlatımı ekleyin. */}
            Bu alan, görsel akışı kırarak okuyucuya sahadan kısa bir anlatı sunar.
          </p>
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
