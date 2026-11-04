import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/lib/navigation';

const mainItems = navItems.filter((item) => item.href !== '/iletisim');

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#10251a] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_0%,rgba(95,139,82,0.2),transparent_38%),linear-gradient(145deg,#10251a,#173624_60%,#10251a)]" />
      <div className="pointer-events-none absolute -right-36 -top-56 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.06]" />

      <div className="mx-auto max-w-7xl px-6 pb-7 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr] lg:gap-16 lg:pb-16">
          <div className="max-w-md">
            <Link href="/" aria-label="Yaskoop ana sayfa" className="inline-flex items-center gap-3 transition-opacity hover:opacity-80">
              <span className="inline-flex shrink-0 rounded-full bg-[#f4f2e7]/95 p-1 shadow-sm">
                <Image
                  src="/logo/logo-photo-transparent.png"
                  alt="Yaskoop"
                  width={72}
                  height={72}
                  className="h-14 w-14 object-contain"
                />
              </span>
              <span className="text-xl font-semibold tracking-[0.18em]">YASKOOP</span>
            </Link>
            <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base">
              S.S. Yalova Süs Bitkileri İşletme Kooperatifi; köklü üreticileri,
              bölgenin bitki çeşitliliğini ve sürdürülebilir üretim anlayışını
              aynı çatı altında buluşturur.
            </p>
            <Link
              href="/iletisim"
              className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-[#d8e6ab]/60 hover:bg-white/[0.06]"
            >
              Bizimle iletişime geçin
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <nav aria-label="Alt menü">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d8e6ab]">
              Keşfedin
            </h2>
            <ul className="mt-6 space-y-4">
              {mainItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#d8e6ab] transition-all group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d8e6ab]">
              Bize ulaşın
            </h2>
            <address className="mt-6 space-y-4 not-italic text-sm leading-6 text-white/70">
              <p>
                Mehmet Akif Ersoy Mah. Namık Kemal Cad. No:2 İç Kapı No:3
                <br />
                Çiftlikköy / Yalova
              </p>
              <a className="block transition hover:text-white" href="tel:+905352936007">
                +90 535 293 60 07
              </a>
              <a className="block transition hover:text-white" href="tel:+905059075785">
                +90 (505) 907 57 85
              </a>
              <a className="block transition hover:text-white" href="mailto:info@yaskoop.com.tr">
                info@yaskoop.com.tr
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {year} S.S. Yalova Süs Bitkileri İşletme Kooperatifi</p>
          <p>Yalova’da birlikte büyüyoruz.</p>
        </div>
      </div>
    </footer>
  );
}
