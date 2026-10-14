import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { BtsArchitectureSection, BtsComparisonTable, BtsPortfolioSection } from '@/components/bts-content';
import { BtsMediaGallery } from '@/components/bts-media-gallery';
import { T } from '@/components/t';

const MEDIA_DIR = path.resolve(process.cwd(), '..', '.context', 'portfolio', 'media', 'manifest.json');

interface MediaAsset { id: string, type: string, file: string, alt_text: string }

function getMediaAssets(): MediaAsset[] {
  try {
    const raw = fs.readFileSync(MEDIA_DIR, 'utf8');
    return JSON.parse(raw).assets.filter((a: MediaAsset) => a.type !== 'unknown');
  }
  catch { return []; }
}

export default function BehindTheScenesPage() {
  const media = getMediaAssets();
  return (
    <main>
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
          <T k="blog.back" />
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4"><T k="behind-the-scenes.title" /></h1>
      <p className="text-[var(--color-text-muted)] mb-12">
        <T k="behind-the-scenes.description" />
      </p>

      <BtsComparisonTable />
      <BtsArchitectureSection />
      <BtsMediaGallery assets={media} />
      <BtsPortfolioSection />
    </main>
  );
}
