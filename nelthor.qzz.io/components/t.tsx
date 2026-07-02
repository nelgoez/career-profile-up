'use client';

import { useLocale } from '@/lib/locale-context';

export function T({ k }: { k: string }) {
  const { t } = useLocale();
  return <>{t(k)}</>;
}
