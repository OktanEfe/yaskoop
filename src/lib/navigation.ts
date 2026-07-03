export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Haberler', href: '/haberler' },
  { label: 'Üyeler', href: '/uyeler' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'İletişim', href: '/iletisim' },
];
