'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, BugPlay, FlaskConical, Monitor, Workflow } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useLocale } from '@/lib/locale-context';

const ITEMS = [
  {
    icon: Workflow,
    img: '/media/screenshots/CI-workers.png',
    titleKey: 'evidence.ci-pipelines',
    descKey: 'evidence.ci-pipelines-desc',
  },
  {
    icon: FlaskConical,
    img: '/media/qa/allure-smoke-report.png',
    titleKey: 'evidence.test-reports',
    descKey: 'evidence.test-reports-desc',
  },
  {
    icon: BugPlay,
    img: '/media/qa/jira-board.png',
    titleKey: 'evidence.bug-evidence',
    descKey: 'evidence.bug-evidence-desc',
  },
  {
    icon: Monitor,
    img: '/media/screenshots/coding-session.png',
    titleKey: 'evidence.coding-sessions',
    descKey: 'evidence.coding-sessions-desc',
  },
];

export function EvidenceShowcase() {
  const { t } = useLocale();
  const [current, setCurrent] = useState(0);
  const total = ITEMS.length;

  const next = useCallback(() => setCurrent(p => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + total) % total), [total]);

  return (
    <section className="py-16 border-t border-[var(--color-border)]">
      <h2 className="text-2xl font-bold mb-2">{t('evidence.title')}</h2>
      <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl">{t('evidence.description')}</p>

      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titleKey} className="min-w-0 w-full shrink-0 px-1">
                  <div className="group">
                    <div className="browser-mockup rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[var(--color-accent)]/50">
                      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        <span className="ml-2 text-[11px] text-[var(--color-text-muted)] font-mono">nelthor.qzz.io</span>
                      </div>
                      <div className="aspect-video overflow-hidden bg-[var(--color-bg)]">
                        <img
                          src={item.img}
                          alt={t(item.titleKey)}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mt-4">
                      <Icon size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <div>
                        <h3 className="font-semibold text-sm">{t(item.titleKey)}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{t(item.descKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {ITEMS.map((_, i) => (
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

      <div className="mt-10 text-center">
        <a
          href="/qa"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
        >
          {t('evidence.view-qa')}
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
