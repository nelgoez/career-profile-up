'use client';

import type { ReactNode } from 'react';
import { useLocale } from '@/lib/locale-context';

interface LocaleGateProps {
  en: ReactNode
  es: ReactNode | null
  fallbackNotice?: ReactNode
}

export function LocaleGate({ en, es, fallbackNotice }: LocaleGateProps) {
  const { locale } = useLocale();
  if (locale === 'es') {
    if (es) { return <>{es}</>; }
    return (
      <>
        {fallbackNotice}
        {en}
      </>
    );
  }
  return <>{en}</>;
}
