import type { ValueItem } from '@/types';

interface DegerlerimizProps {
  values: ValueItem[];
}

export default function Degerlerimiz({ values }: DegerlerimizProps) {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Değerlerimiz
          </h2>
          <p className="mt-4 text-neutral-500 text-base leading-7">
            Kooperatifimizin temel ilkeleri ve ortak çalışma anlayışımız.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.id} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{value.baslik}</h3>
              <p className="text-neutral-600 leading-7">{value.aciklama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
