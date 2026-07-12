export default function IletisimBilgi() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600 mb-2">Adres</h3>
            <p className="text-neutral-700 text-sm leading-7">
              Mehmet Akif Ersoy Mah. Namık Kemal Cad. No:2 İç Kapı No:3<br />
              Çiftlikköy / Yalova
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600 mb-2">Telefon</h3>
            <a
              href="tel:+905352936007"
              className="text-neutral-700 text-sm leading-7 hover:text-accent transition-colors"
            >
              +(90) 535 293 60 07
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600 mb-2">E-posta</h3>
            <a
              href="mailto:info@yaskoop.com"
              className="text-neutral-700 text-sm leading-7 hover:text-accent transition-colors"
            >
              info@yaskoop.com
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Çalışma Saatleri</h3>
        <div className="space-y-3 text-sm text-neutral-700 leading-7">
          <p className="font-medium">Pazartesi - Cuma</p>
          <p>09:00 - 18:00</p>
          <p className="font-medium mt-4">Cumartesi</p>
          <p>10:00 - 15:00</p>
          <p className="font-medium mt-4">Pazar</p>
          <p>Kapatılmıştır</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-neutral-200">
        <iframe
          src="https://www.google.com/maps?q=Yalova+Merkez&output=embed"
          className="h-64 w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Yaskoop Konum"
        />
      </div>
    </div>
  );
}
