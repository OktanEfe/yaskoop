import SectionHeading from '@/components/ui/SectionHeading';
import GaleriGrid from './GaleriGrid';

export default function Galeri() {
  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Galerimiz"
          subtitle="Kooperatifimizden kareler"
          center
        />
        <GaleriGrid />
      </div>
    </section>
  );
}
