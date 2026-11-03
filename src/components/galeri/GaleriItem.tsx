import Image from 'next/image';
import type { GalleryImage } from '@/types';

interface GaleriItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
  priority?: boolean;
}

export default function GaleriItem({ image, onClick, priority = false }: GaleriItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(image)}
      className="group relative h-full w-full overflow-hidden rounded-[1.75rem] bg-neutral-100 cursor-zoom-in"
    >
      <div className="relative h-full min-h-[260px] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {image.caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-sm leading-6 text-white">{image.caption}</p>
        </div>
      )}
    </button>
  );
}
