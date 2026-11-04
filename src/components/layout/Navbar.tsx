'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = usePathname() === '/';
  const compact = scrolled || !isHome;

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
      <div className="fixed left-0 top-0 z-40 flex w-full justify-center p-3 transition-all duration-500 md:p-4">
        <nav
          className={`w-full items-center transition-all duration-500 ease-out ${
            compact
              ? 'max-w-7xl rounded-full border border-white/10 bg-[#183724]/95 px-5 py-2.5 shadow-[0_12px_35px_rgba(10,30,18,0.2)] backdrop-blur-xl md:px-7'
              : 'max-w-7xl rounded-full border border-transparent bg-transparent px-3 py-3 md:px-6 md:py-5'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Alanı */}
            <Link href="/" aria-label="Yaskoop ana sayfa" className="flex shrink-0 select-none items-center rounded-full bg-[#f4f2e7]/95 p-1 shadow-sm transition-all duration-500 hover:opacity-90">
              <Image
                src="/logo/logo-photo-transparent.png"
                alt="Yaskoop"
                width={92}
                height={92}
                className="h-14 w-14 object-contain transition-all duration-500 sm:h-[4.5rem] sm:w-[4.5rem]"
                priority
              />
            </Link>

            {/* Masaüstü Navigasyon Linkleri */}
            <ul className={`hidden md:flex items-center transition-all duration-500 ${
              compact ? 'gap-5 lg:gap-8' : 'gap-6 lg:gap-9'
            }`}>
              {mainItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative py-2 text-[13px] font-medium tracking-wide text-white/85 transition-colors duration-300 hover:text-white lg:text-[14px]"
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
                      compact
                        ? 'bg-[#d6e8c8] px-5 py-2 text-[13px] text-[#183724] shadow-sm hover:bg-white'
                        : 'border border-white/25 bg-white/10 px-6 py-2.5 text-[14px] text-white backdrop-blur-sm hover:bg-white/20'
                  }`}
                >
                  {contactItem.label}
                </Link>
              )}
            </div>

            {/* Mobil Menü Tetikleyici Buton */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
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
        id="mobile-navigation"
        className={`fixed inset-0 z-[150] flex flex-col justify-between bg-[#14291c] p-8 transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        {/* Üst Bar */}
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Yaskoop ana sayfa"
            className="flex min-w-0 flex-1 items-center"
          >
            <span className="inline-flex shrink-0 rounded-full bg-[#f4f2e7]/95 p-1 shadow-sm">
              <Image
                src="/logo/logo-photo-transparent.png"
                alt="Yaskoop"
                width={88}
                height={88}
                className="h-14 w-14 object-contain"
              />
            </span>
          </Link>
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
