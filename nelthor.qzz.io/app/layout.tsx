import type { ReactNode } from 'react';
import { NavClient } from '@/components/nav-client';
import { LocaleProvider } from '@/lib/locale-context';

import './globals.css';

export const metadata = {
  title: 'Nahuel Gomez — Agentic QA Engineer',
  description:
    'Agentic QA Engineer with 5+ years in test automation. Builder of the open-source Agentic QA Boilerplate (KATA + Playwright, 20+ skills, Xray CLI, 7 MCPs). TypeScript, Python, Playwright, Jira/Xray.',
  openGraph: {
    title: 'Nahuel Gomez — Agentic QA Engineer',
    description: 'Agentic QA Engineer | Open-Source Boilerplate Author | TypeScript & Python',
    url: 'https://nelthor.com.ar',
    siteName: 'nelthor.com.ar',
    type: 'website',
    images: [{ url: 'https://nelthor.com.ar/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="max-w-4xl mx-auto px-4 py-12">
        <LocaleProvider>
          <nav className="flex gap-6 mb-12 text-sm text-[var(--color-text-muted)] items-center">
            <NavClient />
          </nav>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
