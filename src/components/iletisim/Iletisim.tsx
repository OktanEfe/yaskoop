import IletisimBilgi from './IletisimBilgi';
import IletisimForm from './IletisimForm';

export default function Iletisim() {
  return (
    <section id="iletisim" className="relative isolate overflow-hidden bg-[#f3f6f1] pb-20 pt-10 text-[#193323] sm:pb-24 md:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[35rem] bg-[radial-gradient(ellipse_at_80%_10%,rgba(183,211,154,0.24),transparent_38%),linear-gradient(135deg,#10251a,#214530)]" />
      <div className="pointer-events-none absolute -right-28 top-0 -z-10 h-[30rem] w-[30rem] rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute right-8 top-12 -z-10 h-[22rem] w-[22rem] rounded-full border border-white/[0.06]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl pb-32 pt-8 text-white sm:pb-36 sm:pt-12 md:pb-40">
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Birlikte büyümek için konuşalım.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Sorularınız, üyelik başvurularınız ve iş birliği fikirleriniz için
            bize ulaşın. Mesajınızı doğru kişilere ulaştıralım.
          </p>
        </div>

        <div className="-mt-24 overflow-hidden rounded-[1.75rem] border border-[#193323]/10 bg-white shadow-[0_28px_80px_rgba(20,49,31,0.13)] sm:-mt-28 sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 sm:p-9 lg:p-12">
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#58764c]">Mesajınızı iletin</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#193323] sm:text-3xl">
                  Size nasıl yardımcı olabiliriz?
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#667365]">
                  Formu doldurun, en kısa sürede sizinle iletişime geçelim.
                </p>
              </div>
              <IletisimForm />
            </div>

            <aside className="relative overflow-hidden bg-[#f5f7f2] p-6 sm:p-9 lg:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#193323]/[0.06]" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#58764c]">Bize ulaşın</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#193323]">
                  İletişim bilgileri
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#667365]">
                  Kooperatifimizle doğrudan iletişime geçin.
                </p>
                <div className="mt-8">
                  <IletisimBilgi />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
