import Image from 'next/image';
import type { Member } from '@/types';

interface UyeLogoGridProps {
  uyeler: Member[];
}

export default function UyeLogoGrid({ uyeler }: UyeLogoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
      {uyeler.map((uye) => (
        <div key={uye.id} className="relative flex h-16 w-36 items-center justify-center">
          {uye.logo ? (
            <Image
              src={uye.logo}
              alt={`${uye.sirket} logosu`}
              fill
              className="object-contain logo-filter"
              sizes="144px"
            />
          ) : (
            <span className="text-sm font-semibold text-neutral-500" aria-label={`${uye.sirket} logosu paylaşılmadı`}>
              {uye.sirket}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
