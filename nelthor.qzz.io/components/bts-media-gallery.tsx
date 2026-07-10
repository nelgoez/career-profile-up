'use client';

import { useState } from 'react';
import { Carousel } from '@/components/carousel';
import { Lightbox } from '@/components/lightbox';

interface MediaAsset { id: string, type: string, file: string, alt_text: string }

interface BtsMediaGalleryProps {
  assets: MediaAsset[]
}

export function BtsMediaGallery({ assets }: BtsMediaGalleryProps) {
  const [lightbox, setLightbox] = useState<{ src: string, alt: string } | null>(null);

  if (assets.length === 0) { return null; }

  return (
    <>
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          Screenshots, diagrams, and recordings showing the portfolio and workflows in action.
        </p>
        <Carousel
          slides={assets.map(asset => (
            <div key={asset.id} className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
              <button
                onClick={() => setLightbox({ src: `/media/${asset.file}`, alt: asset.alt_text || asset.id })}
                className="w-full text-left"
              >
                <img
                  src={`/media/${asset.file}`}
                  alt={asset.alt_text || asset.id}
                  className="w-full rounded-lg border border-[var(--color-border)]"
                  loading="lazy"
                />
              </button>
              <p className="text-xs text-[var(--color-text-muted)] mt-2 px-1">{asset.alt_text || asset.id}</p>
            </div>
          ))}
        />
      </section>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
