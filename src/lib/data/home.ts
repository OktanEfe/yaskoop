import type { StatItem } from '@/types';

export const hakkimizdaOzet = {
  baslik: 'Hakkımızda',
  aciklama:
    "Yaskoop, Yalova'nın Çiftlikköy ilçesinde kurulmuş, süs bitkileri alanında faaliyet gösteren 10 üretici ortağın bir araya gelerek oluşturduğu bir işletme kooperatifidir. Amacımız; birlikte üretmek, birlikte gelişmek ve dayanışma içinde büyümektir. Sürdürülebilirlik ve kalite ilkeleriyle sektöre yön veriyoruz.",
  ctaLabel: 'Devamını Oku',
  ctaHref: '/hakkimizda',
};

// TODO: Gerçek sayılar yönetim kurulu onayıyla güncellenecek
export const istatistikler: StatItem[] = [
  { id: 'kurulus', label: 'Kuruluş Yılı', value: 2023 },
  { id: 'uye', label: 'Üye Sayısı', value: 10 },
  { id: 'alan', label: 'Üretim Alanı', value: 50, suffix: ' hektar' },
  { id: 'urun', label: 'Ürün Çeşidi', value: 25, suffix: '+' },
];

export const iletisimCta = {
  baslik: 'Bizimle İletişime Geçin',
  aciklama: 'Sorularınız, iş birlikleri veya üyelik talepleriniz için bize ulaşın.',
  ctaLabel: 'İletişime Geç',
  ctaHref: '/iletisim',
};
