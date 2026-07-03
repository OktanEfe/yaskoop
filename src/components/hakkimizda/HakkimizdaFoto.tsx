'use client';

import Image from 'next/image';

export default function HakkimizdaFoto() {
  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[1.1] md:aspect-[4/3] lg:aspect-[5/6] rounded-[2rem] overflow-hidden bg-neutral-50 border border-neutral-100/80 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.06)] group">
      <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/10 via-transparent to-white/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-neutral-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
      
      <Image
        src="/logo2.svg"
        alt="Yaskoop Kooperatif"
        fill
        className="object-cover p-12 md:p-16 transform scale-[0.85] group-hover:scale-[0.90] transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
        priority
      />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-50/80 via-neutral-50/20 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}