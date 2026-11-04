export default function IletisimBilgi() {
  return (
    <div className="space-y-5">
      <div className="divide-y divide-[#193323]/10 rounded-[1.5rem] border border-[#193323]/10 bg-white/70 px-4 sm:px-5">
        <div className="flex items-start gap-4 py-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf0e5] text-[#426443]" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </span>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#70806d]">Adres</h3>
            <p className="mt-2 text-sm leading-6 text-[#354735]">
              Mehmet Akif Ersoy Mah. Namık Kemal Cad. No:2 İç Kapı No:3
              <br />
              Çiftlikköy / Yalova
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 py-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf0e5] text-[#426443]" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7">
              <path d="M7.5 3.5h-3A1.5 1.5 0 0 0 3 5c0 8.84 7.16 16 16 16a1.5 1.5 0 0 0 1.5-1.5v-3l-5-2-2 2c-2.6-1-4-2.4-5-5l2-2-2-5Z" />
            </svg>
          </span>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#70806d]">Telefon</h3>
            <a href="tel:+905352936007" className="mt-2 inline-flex text-sm font-medium text-[#354735] transition-colors hover:text-[#58764c]">
              +90 535 293 60 07
            </a>
            <a href="tel:+905059075785" className="mt-2 flex text-sm font-medium text-[#354735] transition-colors hover:text-[#58764c]">
              +90 (505) 907 57 85
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 py-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf0e5] text-[#426443]" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </span>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#70806d]">E-posta</h3>
            <a href="mailto:info@yaskoop.com.tr" className="mt-2 inline-flex break-all text-sm font-medium text-[#354735] transition-colors hover:text-[#58764c]">
              info@yaskoop.com.tr
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-[#193323]/10 bg-white/70 p-5">
        <h3 className="text-xs font-bold uppercase tracking-[0.17em] text-[#354735]">Çalışma saatleri</h3>
        <div className="mt-4 space-y-3 text-sm text-[#667365]">
          <div className="flex justify-between gap-4"><span>Pazartesi – Cuma</span><span className="font-medium text-[#354735]">09:00 – 18:00</span></div>
          <div className="flex justify-between gap-4"><span>Cumartesi</span><span className="font-medium text-[#354735]">10:00 – 15:00</span></div>
          <div className="flex justify-between gap-4"><span>Pazar</span><span className="font-medium text-[#354735]">Kapalı</span></div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-[#193323]/10">
        <iframe
          src="https://www.google.com/maps?q=Yalova+Merkez&output=embed"
          className="h-56 w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Yaskoop Konum"
        />
      </div>
    </div>
  );
}
