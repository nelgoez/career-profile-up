'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';

const NAV_KEYS = [
  { href: '/', key: 'nav.home' },
  { href: '/projects', key: 'nav.projects' },
  { href: '/blog', key: 'nav.blog' },
  { href: '/behind-the-scenes', key: 'nav.behind-the-scenes' },
];

export function NavClient() {
  const { locale, setLocale, t } = useLocale();
  return (
    <>
      {NAV_KEYS.map(n => (
        <Link key={n.href} href={n.href} className="hover:text-[var(--color-accent)] transition-colors">{t(n.key)}</Link>
      ))}
      <button
        onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
        className="ml-auto px-2 py-1 rounded border border-[var(--color-border)] text-xs hover:border-[var(--color-accent)] transition-colors cursor-pointer"
        aria-label="Toggle language"
      >
        {locale === 'en' ? 'ES' : 'EN'}
      </button>
    </>
  );
}
