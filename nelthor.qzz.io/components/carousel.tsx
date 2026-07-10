'use client';

import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback, useState } from 'react';

interface CarouselProps {
  slides: ReactNode[]
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent(p => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + total) % total), [total]);

  if (total === 0) { return null; }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 w-full shrink-0 px-1">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/3 -translate-y-1/2 p-2 rounded-full bg-[var(--color-bg)]/80 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors backdrop-blur-sm"
            aria-label="Previous"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/3 -translate-y-1/2 p-2 rounded-full bg-[var(--color-bg)]/80 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors backdrop-blur-sm"
            aria-label="Next"
          >
            <ArrowRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-[var(--color-accent)] w-6'
                    : 'bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
