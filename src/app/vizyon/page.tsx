import Vizyon from '@/components/hakkimizda/Vizyon';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Vizyonumuz',
  description:
    'Yaskoop’un sürdürülebilir üretim, güçlü kooperatifçilik ve doğayla uyumlu peyzaj vizyonunu keşfedin.',
  path: '/vizyon',
});

export default function VizyonPage() {
  return (
    <div className="pt-[72px]">
      <Vizyon />
    </div>
  );
}
