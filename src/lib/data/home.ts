import type { StatItem } from '@/types';

export const hakkimizdaOzet = {
  baslik: 'Hakkımızda',
  aciklama:
    "S.S. Yalova Süs Bitkileri İşletme Kooperatifi, sürdürülebilir tarım ve yenilikçi peyzaj çözümleri üretmek amacıyla Yalova'nın merkezinde faaliyet göstermektedir. Kooperatifimiz, köklü üreticilerin bir araya gelmesiyle, bölgenin zengin bitki çeşitliliğini ve kalitesini modern tekniklerle birleştirmektedir. Ulusal ve uluslararası pazarda güvenilir bir tedarikçi olmayı vizyon edinen birlikteliğimiz doğanın güzelliğini işleyen üreticilerimizle daha yeşil bir gelecek için çalışmaya devam etmektedir.",
  ctaLabel: 'Devamını Oku',
  ctaHref: '/hakkimizda',
};

// TODO: Gerçek sayılar yönetim kurulu onayıyla güncellenecek
export const istatistikler: StatItem[] = [
  { id: 'kurulus', label: 'Kuruluş Yılı', value: 2025 },
  { id: 'uye', label: 'Üye Sayısı', value: 10 },
  { id: 'alan', label: 'Üretim Alanı', value: 25, suffix: '+ hektar' },
  { id: 'urun', label: 'Ürün Çeşidi', value: 50, suffix: '+' },
];

export const iletisimCta = {
  baslik: 'Bizimle İletişime Geçin',
  aciklama: 'Sorularınız, iş birlikleri veya üyelik talepleriniz için bize ulaşın.',
  ctaLabel: 'İletişime Geç',
  ctaHref: '/iletisim',
};
