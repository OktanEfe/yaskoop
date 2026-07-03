import Image from 'next/image';
import type { GalleryImage } from '@/types';

interface GaleriItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

export default function GaleriItem({ image, onClick }: GaleriItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(image)}
      className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-zoom-in w-full"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      {image.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-xs font-medium">{image.caption}</p>
        </div>
      )}
    </button>
  );
}
