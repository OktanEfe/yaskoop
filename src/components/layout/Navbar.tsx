'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const contactItem = navItems.find((item) => item.href === '/iletisim');
  const mainItems = navItems.filter((item) => item.href !== '/iletisim');

  return (
    <>
      {/* Tıklama bloklama hatasını çözmek için pointer-events-none kaldırıldı veya dinamik yönetildi */}
      <div className="fixed top-0 left-0 w-full z-40 flex justify-center p-0 md:p-4 transition-all duration-500">
        <nav
          className={`w-full transition-all duration-500 ease-out items-center ${
            scrolled
              ? 'max-w-[850px] bg-[#14180F]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4)] rounded-full px-6 py-2.5 mt-3'
              : 'max-w-7xl bg-transparent border-b border-transparent px-6 lg:px-12 py-8 mt-0'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Alanı */}
            <Link href="/" className="flex items-center transition-all duration-500 hover:opacity-90 shrink-0 select-none">
              <Image
                src="/logo/logo222.png"
                alt="Yaskoop Süs Bitkileri Üretim Kooperatifi"
                width={160}
                height={52}
                className={`w-auto object-contain transition-all duration-500 brightness-0 invert ${
                  scrolled ? 'h-9 lg:h-10' : 'h-14 lg:h-16'
                }`}
                priority
              />
            </Link>

            {/* Masaüstü Navigasyon Linkleri */}
            <ul className={`hidden md:flex items-center transition-all duration-500 ${
              scrolled ? 'gap-6 lg:gap-7' : 'gap-8 lg:gap-10'
            }`}>
              {mainItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative py-2 text-[14px] lg:text-[15px] tracking-wide font-medium text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full bg-[#34D399]" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sağ Blok Kurumsal İletişim Butonu */}
            <div className="hidden md:flex items-center shrink-0">
              {contactItem && (
                <Link
                  href={contactItem.href}
                  className={`inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-500 active:scale-[0.98] whitespace-nowrap ${
                    scrolled
                      ? 'bg-white text-[#14180F] hover:bg-neutral-100 px-5 py-2 text-[13px] shadow-sm'
                      : 'bg-[#2A6119] text-white hover:bg-[#1E4712] px-6 py-2.5 text-[14px] border border-white/5'
                  }`}
                >
                  {contactItem.label}
                </Link>
              )}
            </div>

            {/* Mobil Menü Tetikleyici Buton */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all active:scale-95"
              aria-label="Menüyü aç"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-[1.5px] w-5 rounded-full bg-white" />
                <span className="block h-[1.5px] w-5 rounded-full bg-white" />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Tam Ekran Mobil Menü Katmanı */}
      <div
        className={`fixed inset-0 bg-[#14180F] z-[150] md:hidden flex flex-col justify-between p-8 transition-all duration-500 ease-in-out ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        {/* Üst Bar */}
        <div className="flex items-center justify-between w-full">
          <Image
            src="/logo/logo222.png"
            alt="Yaskoop"
            width={140}
            height={46}
            className="h-10 w-auto brightness-0 invert object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-white/80 transition-colors active:bg-white/5"
            aria-label="Menüyü kapat"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Kurumsal Link Listesi */}
        <ul className="flex flex-col divide-y divide-white/[0.04] my-auto pt-8">
          {mainItems.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${index * 40}ms` }}
                className={`block w-full py-5 text-xl font-medium text-white/90 hover:text-[#34D399] transition-all transform ${
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Alt Aksiyon Alanı */}
        <div className={`w-full transition-all duration-500 delay-200 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {contactItem && (
            <Link
              href={contactItem.href}
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-13 w-full items-center justify-center rounded-full bg-[#2A6119] text-[15px] font-semibold text-white shadow-xl transition-all active:scale-[0.98] hover:bg-[#1E4712]"
            >
              {contactItem.label} Merkezi
            </Link>
          )}
        </div>
      </div>
    </>
  );
}