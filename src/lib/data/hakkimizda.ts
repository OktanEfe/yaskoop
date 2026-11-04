import type {
  ActivityArea,
  BoardMember,
  CorporatePhoto,
  CtaData,
  HeroSection,
  KurulusHikayesi,
  TimelineItem,
  ValueItem,
} from '@/types';

export const hakkimizdaHero: HeroSection = {
  eyebrow: 'Kurumsal Hafıza',
  title: 'Yalova’dan, birlikte büyüyen bir hikâye.',
  subtitle:
    "S.S. Yalova Süs Bitkileri İşletme Kooperatifi, sürdürülebilir tarım ve yenilikçi peyzaj çözümleri üretmek amacıyla Yalova'nın merkezinde faaliyet göstermektedir.",
};

export const kurulusHikayesi: KurulusHikayesi = {
  title: 'Kuruluş Hikayemiz',
  paragraphs: [
    "S.S. Yalova Süs Bitkileri İşletme Kooperatifi, sürdürülebilir tarım ve yenilikçi peyzaj çözümleri üretmek amacıyla Yalova'nın merkezinde faaliyet göstermektedir. Kooperatifimiz, köklü üreticilerin bir araya gelmesiyle, bölgenin zengin bitki çeşitliliğini ve kalitesini modern tekniklerle birleştirmektedir. Ulusal ve uluslararası pazarda güvenilir bir tedarikçi olmayı vizyon edinen birlikteliğimiz doğanın güzelliğini işleyen üreticilerimizle daha yeşil bir gelecek için çalışmaya devam etmektedir.",
  ],
};

export const kurumsalFoto: CorporatePhoto = {
  src: '/images/about/IMG_3487.JPG.jpeg',
  alt: 'Fidanlıkta kasalarda yetiştirilen çilek fideleri',
  secondarySrc: '/images/about/IMG_3486.JPG.jpeg',
  secondaryAlt: 'Serada saksılarda yetişen süs bitkileri',
  caption: 'Fidanlıkta kasalarda yetiştirilen çilek fideleri.',
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
    id: 'nihal-baskan',
    isim: 'Nihal BAŞKAN',
    unvan: 'Yönetim Kurulu Başkanı',
    bio: 'Kurucu ortak · Karagül Süs Bitkileri Yapı Tur. San. Tic. Ltd. Şti.',
  },
  {
    id: 'ilhan-dinc',
    isim: 'İlhan DİNÇ',
    unvan: 'Yönetim Kurulu Başkan Yardımcısı',
    bio: 'Kurucu ortak · İlhan Dinç Süs Bitkileri',
  },
  {
    id: 'i-anil-ozkan',
    isim: 'İ. Anıl ÖZKAN',
    unvan: 'Yönetim Kurulu Başkan Yardımcısı',
    bio: 'Kurucu ortak · Rasyonel Peyzaj Bitkileri Üretim ve Tic. Ltd. Şti.',
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
