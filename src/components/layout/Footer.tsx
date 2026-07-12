'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/lib/navigation';

export default function Footer() {
  const currentYear = 2026;
  
  const mainItems = navItems.filter((item) => item.href !== '/iletisim');
  const contactItem = navItems.find((item) => item.href === '/iletisim');

  return (
    <footer className="relative bg-[#14180F] text-white border-t border-white/[0.05] overflow-hidden select-none">
      {/* Kurumsal Mimariyi Destekleyen Geometrik Işık Sızıntıları */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-[#2A6119]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#059669]/6 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-12 relative z-10">
        
        {/* Üst Blok: Genişletilmiş ve Güçlendirilmiş Editoryal Düzen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 pb-20 border-b border-white/[0.06]">
          
          {/* Sol Geniş Blok: Büyük Açıklama ve Kurumsal Kimlik */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <Image
                src="/logo/logo222.png"
                alt="Yaskoop Süs Bitkileri Üretim Kooperatifi"
                width={160}
                height={54}
                className="h-11 w-auto brightness-0 invert object-contain"
                priority
              />
            </Link>
            {/* Kullanıcının Talebi Üzerine: Büyütülmüş, Vurgulu ve Editoryal Açıklama Metni */}
            <p className="text-[17px] md:text-[19px] text-white/90 max-w-2xl leading-[1.65] tracking-tight font-normal">
              Sınırlı Sorumlu Yalova Süs Bitkileri Üretim ve Pazarlama İşletme Kooperatifi, tarımsal kalkınma ilkelerini modern endüstri standartlarıyla birleştirerek yerli üretimin küresel pazardaki gücünü ve sürdürülebilirliğini temsil eder.
            </p>
          </div>

          {/* Sağ Link Blokları Konteyneri */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-12">
            
            {/* Kurumsal Navigasyon */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#34D399]">
                Kurumsal Yapılanma
              </span>
              <ul className="flex flex-col gap-4 text-[14px] font-medium text-white/70">
                {mainItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="w-0 h-[1px] bg-white group-hover:w-2 mr-0 transition-all duration-300 group-hover:mr-2" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mevzuat ve Şeffaflık */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#34D399]">
                Mevzuat ve İletişim
              </span>
              <ul className="flex flex-col gap-4 text-[14px] font-medium text-white/70">
                {contactItem && (
                  <li>
                    <Link href={contactItem.href} className="text-white hover:text-[#34D399] transition-colors duration-300 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                      {contactItem.label} Merkezi
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/kvkk" className="hover:text-white transition-colors duration-300">
                    KVKK Aydınlatma Metni
                  </Link>
                </li>
                <li>
                  <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors duration-300">
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/kullanim-kosullari" className="hover:text-white transition-colors duration-300">
                    Kullanım Şartları
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Tipografik Dev Arka Plan Logosu - Premium Kesim */}
        <div className="pt-24 pb-14 flex flex-col items-center justify-center relative overflow-hidden select-none pointer-events-none">
          <h1 className="text-[15vw] md:text-[12vw] font-bold tracking-[-0.04em] text-white/[0.012] leading-none uppercase text-center w-full font-sans">
            YASKOOP
          </h1>
        </div>

        {/* Alt Bilgi Barı - Bakanlık Standartları Vurgusu */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-[13px] text-white/50 font-normal tracking-wide border-t border-white/[0.04] pt-10">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>&copy; {currentYear} Yaskoop Kooperatifi.</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p>Tüm hakları mahfuzdur.</p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-medium border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.01]">
            T.C. Tarım ve Orman Bakanlığı Mevzuatlarına Uygundur
          </p>
        </div>
      </div>
    </footer>
  );
}