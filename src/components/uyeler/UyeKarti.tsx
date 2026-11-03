import Image from 'next/image';
import type { Member } from '@/types';

interface UyeKartiProps {
  uye: Member;
  priority?: boolean;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

export default function UyeKarti({ uye, priority = false }: UyeKartiProps) {
  const initials = getInitials(uye.isim);

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[#193323]/10 bg-white shadow-[0_10px_32px_rgba(24,49,32,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(24,49,32,0.1)]">
      <div className="flex min-h-52 items-center justify-center bg-[#f6f7f1] p-10 sm:min-h-60">
        {uye.logo ? (
          <Image
            src={uye.logo}
            alt={`${uye.sirket} logosu`}
            width={360}
            height={220}
            priority={priority}
            className="max-h-44 w-full object-contain"
            sizes="(max-width: 768px) 90vw, 40vw"
          />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e6ebdf] text-3xl font-semibold text-[#35563a]">
              {initials}
            </div>
          )}
      </div>
      <div className="p-6 sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#688269]">
          {uye.unvan}
        </p>
        <h3 className="text-xl font-semibold leading-tight text-[#193323] sm:text-2xl">
          {uye.isim}
        </h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{uye.sirket}</p>
      </div>
    </article>
  );
}
