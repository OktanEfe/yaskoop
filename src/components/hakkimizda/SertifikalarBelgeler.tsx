import type { CertificateItem } from '@/types';

interface SertifikalarBelgelerProps {
  documents: CertificateItem[];
}

export default function SertifikalarBelgeler({ documents }: SertifikalarBelgelerProps) {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Sertifikalar & Belgeler
          </h2>
          <p className="mt-4 text-neutral-500 text-base leading-7">
            Kooperatifimizin resmi kayıtları ve belge bilgileri.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {documents.length > 0 ? (
            documents.map((document) => (
              <div key={document.id} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{document.baslik}</h3>
                <p className="text-neutral-600 leading-7">{document.bilgi}</p>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <p className="text-neutral-600 leading-7">
                {/* TODO: Resmi belge bilgileri eklenecek */}
                Resmi belge ve sertifika bilgileri yakında burada gösterilecektir.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
