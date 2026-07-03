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
      {/* Üst sarmalayıcı - Sayfa kaydıkça hizalamayı ve içe doğru büzülmeyi yönetir */}
      <div className="fixed top-0 left-0 w-full z-40 flex justify-center p-0 md:p-4 transition-all duration-500 pointer-events-none">
        <nav
          className={`w-full transition-all duration-500 ease-out pointer-events-auto items-center ${
            scrolled
              ? 'max-w-[850px] bg-neutral-900/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] rounded-full px-5 py-2 mt-2'
              : 'max-w-7xl bg-transparent border-b border-transparent px-6 lg:px-8 py-5 mt-0'
          }`}
        >
          {/* İçerik Taşıyıcı: Kaydırıldıkça gap (boşluklar) daralarak elementler birbirine yaklaşır */}
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'gap-6 lg:gap-8' : 'gap-12'
            }`}
          >
            {/* Logo Alanı */}
            <Link href="/" className="flex items-center transition-all duration-500 hover:opacity-90 shrink-0 select-none">
              <Image
                src="/logo/logo222.png"
                alt="Yaskoop"
                width={150}
                height={50}
                className={`w-auto object-contain transition-all duration-500 ${
                  scrolled 
                    ? 'h-8 lg:h-8.5 brightness-0 invert' // Koyu temada logonun görünmesi için (Gerekirse kaldırabilirsin)
                    : 'h-10 lg:h-12 mix-blend-multiply'
                }`}
                priority
              />
            </Link>

            {/* Merkez Linkler - Aşağı indikçe araları daralır ve yazı renkleri koyu moda uyum sağlar */}
            <ul className={`hidden md:flex items-center transition-all duration-500 ${
              scrolled ? 'gap-5 lg:gap-6' : 'gap-8 lg:gap-10'
            }`}>
              {mainItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative py-1.5 text-[14px] lg:text-[15px] tracking-[0.01em] font-medium transition-colors duration-300 ${
                      scrolled 
                        ? 'text-white/75 hover:text-white' 
                        : 'text-foreground/75 hover:text-accent'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full ${
                      scrolled ? 'bg-white' : 'bg-accent'
                    }`} />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sağ Buton - Aşağı indikçe daha minimal ve kibar hale gelir */}
            <div className="hidden md:flex items-center shrink-0">
              {contactItem && (
                <Link
                  href={contactItem.href}
                  className={`inline-flex items-center justify-center rounded-full font-semibold tracking-wide shadow-sm transition-all duration-500 active:scale-[0.98] whitespace-nowrap ${
                    scrolled
                      ? 'bg-white text-neutral-900 hover:bg-neutral-100 px-5 py-2 text-[13px]'
                      : 'bg-accent text-white hover:bg-accent-hover px-6 py-2.5 text-[14px]'
                  }`}
                >
                  {contactItem.label}
                </Link>
              )}
            </div>

            {/* Mobil Hamburger Buton - Ada konseptine uyumlu geçiş */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-full transition-all duration-500 active:scale-95 ${
                scrolled 
                  ? 'border border-white/10 bg-white/10' 
                  : 'border border-neutral-200/80 bg-white/50 backdrop-blur-sm'
              }`}
              aria-label="Menüyü aç"
            >
              <span className="flex flex-col gap-[4px]">
                <span className={`block h-[1.5px] w-4 rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-foreground'}`} />
                <span className={`block h-[1.5px] w-4 rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-foreground'}`} />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobil Tam Ekran Menü */}
      <div
        className={`fixed inset-0 bg-white z-[100] flex flex-col justify-between p-8 transition-all duration-300 ease-in-out ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Image
            src="/logo/logo222.png"
            alt="Yaskoop"
            width={120}
            height={40}
            className="h-9 w-auto mix-blend-multiply"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-100 text-foreground/60 transition-colors active:bg-neutral-50"
            aria-label="Menüyü kapat"
          >
            <span className="text-lg font-light">✕</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 my-auto pl-4">
          {mainItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={`text-2xl font-semibold text-foreground/90 hover:text-accent transition-all transform ${
                menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={`w-full transition-all duration-500 delay-200 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {contactItem && (
            <Link
              href={contactItem.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-xl bg-accent w-full py-4 text-base font-semibold text-white shadow-md active:scale-[0.99] transition-transform"
            >
              {contactItem.label}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}