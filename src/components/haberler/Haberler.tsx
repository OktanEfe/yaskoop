'use client';

import { useState } from 'react';
import { haberler } from '@/lib/data/haberler';
import SectionHeading from '@/components/ui/SectionHeading';
import HaberCard from './HaberCard';
import HaberDetay from './HaberDetay';
import type { NewsItem } from '@/types';

export default function Haberler() {
  const [selected, setSelected] = useState<NewsItem | null>(null);

  return (
    <section id="haberler" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Haberler & Etkinlikler"
          subtitle="Kooperatifimizden güncel gelişmeler"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {haberler.map(haber => (
            <HaberCard key={haber.id} haber={haber} onClick={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <HaberDetay haber={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
