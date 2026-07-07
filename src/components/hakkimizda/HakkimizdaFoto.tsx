import Image from 'next/image';

export default function HakkimizdaFoto() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-100 border border-neutral-200 shadow-sm">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src="/logo2.svg"
          alt="Kooperatif ortakları ve saha çalışmaları"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6 text-white">
        <p className="text-sm font-medium">Yaskoop ortaklarının saha ve üretim deneyimi</p>
      </div>
    </div>
  );
}
