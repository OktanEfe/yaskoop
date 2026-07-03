import Image from 'next/image';
import type { Member } from '@/types';

interface UyeKartiProps {
  uye: Member;
}

export default function UyeKarti({ uye }: UyeKartiProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-accent/10 transition-colors duration-200">
      <div className="relative w-20 h-20 mb-3 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-border">
        {uye.photo ? (
          <Image src={uye.photo} alt={uye.name} fill className="object-cover" />
        ) : (
          // TODO: uye.photo alanına kişi fotoğrafı eklendiğinde otomatik gösterilecek
          <span className="text-3xl select-none">🌿</span>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm leading-tight">{uye.name}</h3>
      {uye.bio && (
        <p className="text-xs text-gray-500 mt-1 leading-snug">{uye.bio}</p>
      )}
    </div>
  );
}
