import Galeri from '@/components/galeri/Galeri';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Galeri',
  description:
    'Yaskoop ortaklarının fidanlıklarından, süs bitkileri üretiminden ve Yalova’daki çalışmalarımızdan kareler.',
  path: '/galeri',
});

export default function GaleriPage() {
  return (
    <div className="pt-[72px]">
      <Galeri />
    </div>
  );
}
