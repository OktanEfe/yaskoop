import Iletisim from '@/components/iletisim/Iletisim';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'İletişim',
  description:
    'Yaskoop ile iletişime geçin. Üyelik, bitki üretimi ve iş birliği talepleriniz için bize ulaşın.',
  path: '/iletisim',
});

export default function IletisimPage() {
  return (
    <div className="pt-[72px]">
      <Iletisim />
    </div>
  );
}
