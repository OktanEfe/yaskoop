import Image from 'next/image';
import type { Member } from '@/types';

interface UyeKartiProps {
  uye: Member;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

export default function UyeKarti({ uye }: UyeKartiProps) {
  const initials = getInitials(uye.isim);

  return (
    <article className="rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-t-[1.75rem] bg-neutral-100">
        <div className="relative aspect-[4/5] w-full">
          {uye.foto ? (
            <Image src={uye.foto} alt={uye.isim} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center bg-neutral-200 text-4xl font-semibold text-neutral-700">
              {initials}
            </div>
          )}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-neutral-900 leading-tight mb-3">{uye.isim}</h3>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-4">
          {uye.unvan} · {uye.sirket}
        </p>
        <p className="text-neutral-700 leading-8 text-sm whitespace-pre-line">{uye.tanitimYazisi}</p>
      </div>
    </article>
  );
}
