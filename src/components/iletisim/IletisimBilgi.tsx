export default function IletisimBilgi() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Adres</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Mehmet Akif Ersoy mah. Namık Kemal cad.<br />
          No:2 İç kapı no:3<br />
          Çiftlikköy / YALOVA
        </p>
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Telefon</h3>
        <a
          href="tel:+905352936007"
          className="text-white/70 text-sm hover:text-white transition-colors"
        >
          +(90) 535 293 60 07
        </a>
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">E-posta</h3>
        <a
          href="mailto:info@yaskoop.com"
          className="text-white/70 text-sm hover:text-white transition-colors"
        >
          info@yaskoop.com
        </a>
      </div>
    </div>
  );
}
