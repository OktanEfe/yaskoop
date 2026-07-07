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
      <div className="fixed top-0 left-0 w-full z-40 flex justify-center p-0 md:p-4 transition-all duration-500 pointer-events-none">
        <nav
          className={`w-full transition-all duration-500 ease-out pointer-events-auto items-center ${
            scrolled
              ? 'max-w-[900px] bg-neutral-900/90 backdrop-blur-xl border border-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.22)] rounded-full px-5 py-3 mt-2'
              : 'max-w-7xl bg-transparent border-b border-transparent px-6 lg:px-8 py-6 mt-0'
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'gap-6 lg:gap-8' : 'gap-12'
            }`}
          >
            <Link href="/" className="flex items-center transition-all duration-500 hover:opacity-90 shrink-0 select-none">
              <Image
                src="/logo/logo222.png"
                alt="Yaskoop"
                width={180}
                height={60}
                className={`w-auto object-contain transition-all duration-500 ${
                  scrolled
                    ? 'h-10 lg:h-11 brightness-0 invert'
                    : 'h-16 lg:h-18 mix-blend-multiply'
                }`}
                priority
              />
            </Link>

            <ul className={`hidden md:flex items-center transition-all duration-500 ${
              scrolled ? 'gap-5 lg:gap-6' : 'gap-8 lg:gap-10'
            }`}>
              {mainItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative py-1.5 text-[14px] lg:text-[15px] tracking-[0.01em] font-medium transition-colors duration-300 ${
                      scrolled
                        ? 'text-white/80 hover:text-white'
                        : 'text-foreground/75 hover:text-accent'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full ${
                        scrolled ? 'bg-white' : 'bg-accent'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

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

            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 active:scale-95 ${
                scrolled
                  ? 'border border-white/15 bg-white/10'
                  : 'border border-neutral-200/80 bg-white/60 backdrop-blur-sm'
              }`}
              aria-label="Menüyü aç"
            >
              <span className="flex flex-col gap-[4px]">
                <span className={`block h-[1.5px] w-5 rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-foreground'}`} />
                <span className={`block h-[1.5px] w-5 rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-foreground'}`} />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[100] md:hidden flex flex-col justify-between p-6 transition-all duration-300 ease-in-out ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Image
            src="/logo/logo222.png"
            alt="Yaskoop"
            width={160}
            height={52}
            className="h-12 w-auto mix-blend-multiply"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-neutral-200 text-foreground/70 transition-colors active:bg-neutral-100"
            aria-label="Menüyü kapat"
          >
            <span className="text-xl font-semibold">✕</span>
          </button>
        </div>

        <ul className="flex flex-col gap-0 divide-y divide-neutral-200 overflow-hidden my-8">
          {mainItems.map((item, index) => (
            <li key={item.href} className="border-b border-neutral-200 last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`block w-full px-4 py-5 text-2xl font-semibold text-foreground/90 hover:text-accent transition-all transform ${
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`w-full transition-all duration-500 delay-200 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {contactItem && (
            <Link
              href={contactItem.href}
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-accent text-base font-semibold text-white shadow-lg transition-transform active:scale-[0.98]"
            >
              {contactItem.label}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
