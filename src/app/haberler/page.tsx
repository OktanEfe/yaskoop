import Haberler from '@/components/haberler/Haberler';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Haberler ve etkinlikler',
  description:
    'Yaskoop’tan haberler, Yalova’daki etkinlikler ve süs bitkileri dünyasından güncel gelişmeler.',
  path: '/haberler',
});

export default function HaberlerPage() {
  return (
    <div className="pt-[72px]">
      <Haberler />
    </div>
  );
}
