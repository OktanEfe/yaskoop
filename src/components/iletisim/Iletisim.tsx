import IletisimBilgi from './IletisimBilgi';
import IletisimForm from './IletisimForm';

export default function Iletisim() {
  return (
    <section id="iletisim" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 mb-4">
            İletişim
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Bizimle iletişime geçin
          </h1>
          <p className="text-neutral-600 text-base md:text-lg leading-8">
            Sorularınız, önerileriniz veya iş birliği teklifleri için formu doldurabilir veya doğrudan iletişim bilgilerimizden bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.4fr_1fr]">
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-600 font-semibold mb-3">
                  Mesaj Gönderin
                </p>
                <h2 className="text-3xl font-semibold text-neutral-900">
                  Hızlı ve kolay iletişim
                </h2>
              </div>
              <IletisimForm />
            </div>

            <div className="border-t border-neutral-200 md:border-t-0 md:border-l md:px-8 md:py-10 px-6 py-8">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-600 font-semibold mb-3">
                  İletişim Bilgileri
                </p>
                <p className="text-neutral-600 text-sm leading-7">
                  İletişim kanallarımızdan dilediğinizi seçebilir, ihtiyaçlarınıza uygun hızlı yanıt alabilirsiniz.
                </p>
              </div>
              <IletisimBilgi />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
