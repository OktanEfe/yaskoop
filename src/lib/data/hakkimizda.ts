import type { ActivityArea } from '@/types';

// TODO: Faaliyet alanlarını yönetim kurulu onayıyla güncelleyin
export const faaliyetAlanlari: ActivityArea[] = [
  {
    id: 'uretim',
    baslik: 'Süs Bitkileri Üretimi',
    aciklama: "Yalova'nın verimli topraklarında yüksek kaliteli süs bitkisi üretimi gerçekleştiriyoruz.",
    icon: '🌱',
  },
  {
    id: 'pazarlama',
    baslik: 'Pazarlama & İhracat',
    aciklama: 'Üyelerimizin ürünlerini yerel ve uluslararası pazarlarda geniş kitlelere ulaştırıyoruz.',
    icon: '📦',
  },
  {
    id: 'peyzaj',
    baslik: 'Peyzaj Hizmetleri',
    aciklama: 'Bireysel ve kurumsal müşterilere profesyonel peyzaj tasarımı ve uygulama hizmetleri sunuyoruz.',
    icon: '🌳',
  },
  {
    id: 'danismanlik',
    baslik: 'Kooperatif Desteği',
    aciklama: 'Üyelerimize üretim, pazarlama ve finansal konularda danışmanlık ve teknik destek sağlıyoruz.',
    icon: '🤝',
  },
];
