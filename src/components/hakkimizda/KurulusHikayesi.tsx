import type { KurulusHikayesi as KurulusHikayesiType } from '@/types';

interface KurulusHikayesiProps {
  story: KurulusHikayesiType;
}

export default function KurulusHikayesi({ story }: KurulusHikayesiProps) {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-8">
            {story.title}
          </h2>
          <div className="space-y-6 text-neutral-600 text-[1.05rem] leading-relaxed tracking-tight">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
