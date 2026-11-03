export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  heading: string;
  subtext: string;
}

export interface NewsItem {
  id: string;
  baslik: string;
  ozet: string;
  aciklama: string;
  tarih: string;
  kategori: 'haber' | 'etkinlik' | 'gezi';
  tag: 'haber' | 'duyuru' | 'etkinlik';
  resimler: string[];
}

export interface Member {
  id: string;
  isim: string;
  sirket: string;
  unvan: string;
  logo?: string;
  foto?: string;
  tanitimYazisi?: string;
  website?: string;
  bio?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  size?: 'buyuk' | 'normal';
}

export interface ActivityArea {
  id: string;
  baslik: string;
  aciklama: string;
  icon: string;
}

export interface HeroSection {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface KurulusHikayesi {
  title: string;
  paragraphs: string[];
}

export interface CorporatePhoto {
  src: string;
  alt: string;
  secondarySrc: string;
  secondaryAlt: string;
  caption?: string;
}

export interface TimelineItem {
  id: string;
  yil: string;
  baslik: string;
  aciklama: string;
}

export interface ValueItem {
  id: string;
  baslik: string;
  aciklama: string;
}

export interface BoardMember {
  id: string;
  isim: string;
  unvan: string;
  bio: string;
}

export interface CtaData {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}
