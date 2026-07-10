'use client';

import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

interface Brand {
  name: string
  url: string
  color: string
  descriptionKey: string
}

const BRANDS: Brand[] = [
  {
    name: 'Network Solutions',
    url: 'https://www.networksolutions.com/',
    color: '#cc0000',
    descriptionKey: 'brands.netsol-desc',
  },
  {
    name: 'Web.com',
    url: 'https://www.web.com/',
    color: '#0073aa',
    descriptionKey: 'brands.webcom-desc',
  },
  {
    name: 'Bluehost',
    url: 'https://www.bluehost.com/',
    color: '#2c65e0',
    descriptionKey: 'brands.bluehost-desc',
  },
  {
    name: 'HostGator',
    url: 'https://www.hostgator.com/',
    color: '#f5841f',
    descriptionKey: 'brands.hostgator-desc',
  },
  {
    name: 'Integra Salud App',
    url: 'https://integra-platform.web.app/',
    color: '#10b981',
    descriptionKey: 'brands.integra-desc',
  },
];

export function BrandsSection() {
  const { t } = useLocale();
  return (
    <section className="py-16 border-t border-[var(--color-border)]">
      <h2 className="text-2xl font-bold mb-2">{t('brands.title')}</h2>
      <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl">{t('brands.description')}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {BRANDS.map(brand => (
          <a
            key={brand.name}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-[1.03]"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: brand.color }}
            >
              {brand.name.charAt(0)}
            </div>
            <h3 className="font-semibold text-sm text-center mb-1.5">{brand.name}</h3>
            <p className="text-xs text-[var(--color-text-muted)] text-center leading-relaxed line-clamp-2">
              {t(brand.descriptionKey)}
            </p>
            <ExternalLink size={12} className="mt-3 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/cv"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
        >
          {t('brands.cta')}
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
