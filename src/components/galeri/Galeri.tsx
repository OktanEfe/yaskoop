import SectionHeading from '@/components/ui/SectionHeading';
import GaleriGrid from './GaleriGrid';

export default function Galeri() {
  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
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
