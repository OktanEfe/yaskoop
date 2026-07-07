import Image from 'next/image';
import type { CorporatePhoto } from '@/types';

interface KurumsalFotoProps {
  photo: CorporatePhoto;
}

export default function KurumsalFoto({ photo }: KurumsalFotoProps) {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
            <div className="relative w-full aspect-[4/3] bg-neutral-200">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-6">
              Kurumsal Bakışımız
            </h2>
            <p className="text-neutral-600 text-[1.05rem] leading-relaxed tracking-tight mb-4">
              {/* TODO: Kurumsal fotoğraf alt metnini yönetim kurulu tarafından zenginleştirin */}
              {photo.caption}
            </p>
            <p className="text-neutral-500 text-sm leading-6">
              Bu bölümde kooperatifimiz ile ilgili görsel kimlik ve saha çalışmalarından kısa bir kesit sunulmaktadır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
