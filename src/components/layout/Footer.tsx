'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/lib/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const mainItems = navItems.filter((item) => item.href !== '/iletisim');
  const contactItem = navItems.find((item) => item.href === '/iletisim');

  return (
    <footer className="relative bg-[#09190e] text-white border-t border-white/[0.03] overflow-hidden select-none">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/[0.05]">
          
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <Image
                src="/logo/logo222.png"
                alt="Yaskoop"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert object-contain"
                priority
              />
            </Link>
            <p className="text-[14px] text-emerald-100/50 max-w-sm leading-relaxed tracking-wide font-normal">
              Sürdürülebilir kalkınma, ekolojik yaşam ve kolektif üretim bilinciyle geleceği ortak akılla inşa ediyoruz.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              Kurumsal Navigasyon
            </span>
            <ul className="flex flex-col gap-3 text-[14px] font-medium text-emerald-100/60">
              {mainItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              İletişim ve Destek
            </span>
            <ul className="flex flex-col gap-3 text-[14px] font-medium text-emerald-100/60">
              {contactItem && (
                <li>
                  <Link href={contactItem.href} className="hover:text-white transition-colors duration-300">
                    {contactItem.label} Merkezi
                  </Link>
                </li>
              )}
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors duration-300">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kullanim-kosullari" className="hover:text-white transition-colors duration-300">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-white transition-colors duration-300">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-16 pb-8 flex flex-col items-center justify-center relative overflow-hidden">
          <h1 className="text-[13vw] md:text-[11vw] font-extrabold tracking-[-0.05em] text-white/[0.02] leading-none uppercase select-none pointer-events-none font-sans text-center w-full">
            YASKOOP
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[13px] text-emerald-100/30 font-normal tracking-wide">
          <p>&copy; {currentYear} Yaskoop Kooperatifi. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1">
            Gelecek Ortaklığımızla Şekilleniyor
          </p>
        </div>
      </div>
    </footer>
  );
}