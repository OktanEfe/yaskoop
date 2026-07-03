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
  resimler: string[];
}

export interface Member {
  id: string;
  name: string;
  logo: string;
  website?: string;
  bio?: string;
  photo?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface ActivityArea {
  id: string;
  baslik: string;
  aciklama: string;
  icon: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}
