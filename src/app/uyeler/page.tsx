import Uyeler from '@/components/uyeler/Uyeler';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Kurucu ortaklarımız',
  description:
    'S.S. Yalova Süs Bitkileri İşletme Kooperatifinin kurucu ortaklarını ve yönetim kurulu üyelerini tanıyın.',
  path: '/uyeler',
});

export default function UyelerPage() {
  return (
    <div className="pt-[72px]">
      <Uyeler />
    </div>
  );
}
