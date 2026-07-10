'use client';

import { X } from 'lucide-react';
import { useCallback, useEffect } from 'react';

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') { onClose(); }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}
