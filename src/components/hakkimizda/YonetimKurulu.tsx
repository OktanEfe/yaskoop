import type { BoardMember } from '@/types';

interface YonetimKuruluProps {
  members: BoardMember[];
}

export default function YonetimKurulu({ members }: YonetimKuruluProps) {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Yönetim Kurulu
          </h2>
          <p className="mt-4 text-neutral-500 text-base leading-7">
            Kooperatifimizde sorumluluk üstlenen yönetim kurulu üyeleri ve görev tanımları.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member) => (
            <div key={member.id} className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{member.isim}</h3>
              <p className="text-accent font-semibold mb-4">{member.unvan}</p>
              <p className="text-neutral-600 leading-7">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
