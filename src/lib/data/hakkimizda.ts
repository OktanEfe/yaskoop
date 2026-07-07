import type {
  ActivityArea,
  BoardMember,
  CertificateItem,
  CorporatePhoto,
  CtaData,
  HeroSection,
  KurulusHikayesi,
  TimelineItem,
  ValueItem,
} from '@/types';

export const hakkimizdaHero: HeroSection = {
  eyebrow: 'Kurumsal Hafıza',
  title: 'Hakkımızda',
  subtitle:
    'Yaskoop, üretici ortakların gücünü birleştiren, sürdürülebilirlik ve dayanışma odaklı bir kooperatif modelidir.',
};

export const kurulusHikayesi: KurulusHikayesi = {
  title: 'Kuruluş Hikayemiz',
  paragraphs: [
    "Yaskoop, Yalova'nın Çiftlikköy ilçesinde kurulmuş, süs bitkileri alanında faaliyet gösteren üretici ortakların bir araya gelerek oluşturduğu bir işletme kooperatifidir.",
    'Amacımız birlikte üretmek, birlikte gelişmek ve dayanışma içinde büyümektir. Bu amaçla ortaklarımızın teknik bilgi ve tecrübesiyle üretim süreçlerini güçlendiriyoruz.',
    'Sürdürülebilirlik, kalite ve çevreye duyarlılık ilkeleriyle hareket ediyoruz. Kooperatifçi birlikteliğin güçlendirilmesiyle yerel ekonomiye katkı sağlamak önceliklerimiz arasındadır.',
  ],
};

export const kurumsalFoto: CorporatePhoto = {
  src: '/logo2.svg',
  alt: 'Yaskoop Kooperatif Kurumsal Fotoğrafı',
  caption: 'Cooperative facilities and member collaboration reflected in our visual identity.',
};

export const tarihceZamanTuneli: TimelineItem[] = [
  {
    id: '2025-kurulus',
    yil: '2025',
    baslik: 'Kuruluş',
    aciklama: 'Süs bitkileri üreticisi 10 ortak, Yaskoop adını alarak kooperatif çatısı altında birleşti.',
  },
  {
    id: '2025-ilk-uyeler',
    yil: '2025',
    baslik: 'İlk Üyeler',
    aciklama: 'Üretim ve pazarlama konusunda deneyimli ilk üyelerimiz kooperatifimize katıldı.',
  },
  {
    id: '2026-agaclar',
    yil: '2026',
    baslik: 'Ağ Geliştirme',
    aciklama: 'Yerel ve bölgesel iş ortaklıklarıyla tedarik zincirimizi güçlendirdik.',
  },
];

export const degerlerimiz: ValueItem[] = [
  {
    id: 'dayanisma',
    baslik: 'Dayanışma',
    aciklama: 'Ortaklarımız arasında bilgi, kaynak ve güç paylaşımıyla birlikte büyüyoruz.',
  },
  {
    id: 'seffaflik',
    baslik: 'Şeffaflık',
    aciklama: 'Tüm süreçlerimizde açık iletişim ve hesap verebilirlik ön plandadır.',
  },
  {
    id: 'surdurulebilirlik',
    baslik: 'Sürdürülebilirlik',
    aciklama: 'Çevre dostu üretim ve uzun vadeli değer yaratma ilkesiyle hareket ediyoruz.',
  },
  {
    id: 'ortak-fayda',
    baslik: 'Ortak Fayda',
    aciklama: 'Her kararımızı ortaklarımızın refahını artıracak şekilde alıyoruz.',
  },
];

export const yonetimKurulu: BoardMember[] = [
  {
    id: 'mehmet-kaya',
    isim: 'Mehmet Kaya',
    unvan: 'Kooperatif Başkanı',
    bio: 'Süs bitkileri üretiminde 15 yıllık tecrübeye sahip olan Mehmet Bey, kooperatif stratejilerini yönlendiriyor.',
  },
  {
    id: 'ayse-ozcan',
    isim: 'Ayşe Özcan',
    unvan: 'Genel Sekreter',
    bio: 'Üye ilişkileri ve idari süreçler konusunda koordinasyonu sağlayan kilit isim.',
  },
  {
    id: 'mustafa-emre',
    isim: 'Mustafa Emre',
    unvan: 'Üretim Sorumlusu',
    bio: 'Üretim planlaması, kalite kontrol ve saha uygulamalarını yöneten ekip lideri.',
  },
];

export const sertifikalarBelgeler: CertificateItem[] = [
  {
    id: 'ticaret-sicil',
    baslik: 'Ticaret Sicil No',
    bilgi: '123456 - Yalova Ticaret Odası kayıtlı.',
  },
  {
    id: 'kooperatif-tuzugu',
    baslik: 'Kooperatif Tüzüğü',
    bilgi: 'Resmi kooperatif tüzüğü onaylı ve güncel kayıtlıdır.',
  },
  {
    id: 'tesvik-belgesi',
    baslik: 'Teşvik Belgesi',
    bilgi: 'Sürdürülebilir üretim ve yerel kalkınma destekleri kapsamında belge sahibi.',
  },
];

export const ortakOlCTA: CtaData = {
  eyebrow: 'Birlikte Daha Güçlüyüz',
  title: 'Kooperatife ortak olmak ister misiniz?',
  description:
    'Yaskoop ailesinin bir parçası olarak üretimde güç birliği kurabilir, yerel tarım değerlerine katkıda bulunabilirsiniz.',
  buttonLabel: 'İletişime Geç',
  buttonHref: '/iletisim',
};

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
