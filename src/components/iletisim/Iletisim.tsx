import IletisimBilgi from './IletisimBilgi';
import IletisimForm from './IletisimForm';

export default function Iletisim() {
  return (
    <section id="iletisim" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Sol: koyu kart — iletişim bilgileri + harita */}
          <div className="bg-dark-gray rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-1">İletişim</h2>
            <p className="text-white/70 text-sm mb-8">
              Sorularınız için bizimle iletişime geçin.
            </p>
            <IletisimBilgi />
            <div className="mt-8 rounded-xl overflow-hidden">
              {/* TODO: Google Maps embed URL'sini Çiftlikköy/Yalova konumuyla güncelleyin */}
              <iframe
                src="https://www.google.com/maps?q=Yalova+Merkez&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Yaskoop Konum"
              />
            </div>
          </div>

          {/* Sağ: İletişim formu */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Mesaj Gönderin</h3>
            <p className="text-gray-500 text-sm mb-6">Form aracılığıyla bize ulaşabilirsiniz.</p>
            <IletisimForm />
          </div>
        </div>
      </div>
    </section>
  );
}
