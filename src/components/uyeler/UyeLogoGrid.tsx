import Image from 'next/image';
import type { Member } from '@/types';

interface UyeLogoGridProps {
  uyeler: Member[];
}

export default function UyeLogoGrid({ uyeler }: UyeLogoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
      {uyeler.map((uye) => (
        <div key={uye.id} className="relative w-36 h-16">
          <Image
            src={uye.logo}
            alt={uye.isim}
            fill
            className="object-contain logo-filter"
            sizes="144px"
          />
        </div>
      ))}
    </div>
  );
}
