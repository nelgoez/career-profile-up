'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';

interface ScoreLayer {
  layerKey: string
  scoreKey: string
  detailKey: string
  color: string
  reportUrls: { label: string, url: string }[]
}

const SCORE: ScoreLayer[] = [
  {
    layerKey: 'qa.layer-ui',
    scoreKey: 'qa.layer-ui-score',
    detailKey: 'qa.layer-ui-detail',
    color: '#10B981',
    reportUrls: [
      { label: 'DTS Staging', url: 'https://nelgoez.github.io/diploma-tracking-sys/staging/smoke/' },
      { label: 'UNC Course Audit', url: 'https://nelgoez.github.io/unc-agentic-dev/allure/' },
    ],
  },
  {
    layerKey: 'qa.layer-api',
    scoreKey: 'qa.layer-api-score',
    detailKey: 'qa.layer-api-detail',
    color: '#10B981',
    reportUrls: [
      { label: 'bunkai ATCs', url: 'https://nelgoez.github.io/bunkai-qa-engineering/staging/sanity/' },
      { label: 'UNC Moodle API', url: 'https://nelgoez.github.io/unc-agentic-dev/allure/' },
    ],
  },
  {
    layerKey: 'qa.layer-db',
    scoreKey: 'qa.layer-db-score',
    detailKey: 'qa.layer-db-detail',
    color: '#10B981',
    reportUrls: [
      { label: 'bunkai ATCs', url: 'https://nelgoez.github.io/bunkai-qa-engineering/staging/sanity/' },
    ],
  },
  {
    layerKey: 'qa.layer-cicd',
    scoreKey: 'qa.layer-cicd-score',
    detailKey: 'qa.layer-cicd-detail',
    color: '#10B981',
    reportUrls: [
      { label: 'DTS Actions', url: 'https://github.com/nelgoez/diploma-tracking-sys/actions' },
      { label: 'UNC Audit CI', url: 'https://github.com/nelgoez/unc-agentic-dev/actions/workflows/audit-ci.yml' },
    ],
  },
];

const SCREENSHOTS = [
  { src: '/media/qa/allure-smoke-report.png', key: 'qa.evidence-allure-smoke' },
  { src: '/media/qa/allure-tests.png', key: 'qa.evidence-allure-tests' },
  { src: '/media/qa/jira-board.png', key: 'qa.evidence-jira-board' },
  { src: '/media/qa/bk147-app-shell-with-sidebar.png', key: 'qa.evidence-bug1' },
  { src: '/media/qa/bk147-multi-tab.png', key: 'qa.evidence-bug2' },
  { src: '/media/qa/bk147-tc10-not-found.png', key: 'qa.evidence-bug3' },
  { src: '/media/qa/unc-audit-section0.png', key: 'qa.evidence-unc-audit-section0' },
  { src: '/media/qa/unc-audit-section4.png', key: 'qa.evidence-unc-audit-section4' },
  { src: '/media/qa/unc-admin-explore.png', key: 'qa.evidence-unc-admin-explore' },
];

export default function QAPage() {
  const { t } = useLocale();

  return (
    <main>
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
          ←
          {' '}
          {t('cv.back')}
        </Link>
      </div>

      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-4">{t('qa.title')}</h1>
        <p className="text-lg text-[var(--color-text-muted)]">{t('qa.subtitle')}</p>
      </header>

      <section className="mb-16 p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
        <h2 className="text-xl font-bold mb-3">{t('qa.approach-title')}</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed">{t('qa.approach')}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">{t('qa.scorecard-title')}</h2>
        <p className="text-[var(--color-text-muted)] mb-8">{t('qa.scorecard-desc')}</p>
        <div className="space-y-4">
          {SCORE.map(s => (
            <div key={s.layerKey} className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{t(s.layerKey)}</h3>
                <div className="flex items-center gap-3">
                  {s.reportUrls.length > 0 && (
                    <div className="flex items-center gap-2">
                      {s.reportUrls.map(r => (
                        <a
                          key={r.url}
                          href={r.url}
                          target="_blank"
                          className="text-xs text-[var(--color-accent)] hover:underline"
                        >
                          {r.label}
                          {' '}
                          ↗
                        </a>
                      ))}
                    </div>
                  )}
                  <span
                    className="text-sm font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${s.color}20`,
                      color: s.color,
                      border: `1px solid ${s.color}40`,
                    }}
                  >
                    {t(s.scoreKey)}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{t(s.detailKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">Live Allure Dashboards</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          CI-generated test report dashboards deployed to GitHub Pages — live after every run.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          <a
            href="https://nelgoez.github.io/diploma-tracking-sys/staging/smoke/"
            target="_blank"
            className="group block rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/50 transition-all hover:scale-[1.02]"
          >
            <div className="aspect-video overflow-hidden">
              <img src="/media/qa/DTS-smoke-allure-report.png" alt="DTS Staging Smoke" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm font-medium">DTS — Staging Smoke</span>
              <span className="text-[var(--color-accent)] text-sm">↗</span>
            </div>
          </a>
          <a
            href="https://nelgoez.github.io/diploma-tracking-sys/production/smoke/"
            target="_blank"
            className="group block rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/50 transition-all hover:scale-[1.02]"
          >
            <div className="aspect-video overflow-hidden">
              <img src="/media/qa/DTS-smoke-suites-PROD.png" alt="DTS Production Smoke" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm font-medium">DTS — Production Smoke</span>
              <span className="text-[var(--color-accent)] text-sm">↗</span>
            </div>
          </a>
          <a
            href="https://nelgoez.github.io/bunkai-qa-engineering/staging/sanity/"
            target="_blank"
            className="group block rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/50 transition-all hover:scale-[1.02]"
          >
            <div className="aspect-video overflow-hidden">
              <img src="/media/qa/allure-smoke-report.png" alt="bunkai Sanity Smoke" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm font-medium">bunkai — Sanity Smoke</span>
              <span className="text-[var(--color-accent)] text-sm">↗</span>
            </div>
          </a>
          <a
            href="https://nelgoez.github.io/unc-agentic-dev/allure/"
            target="_blank"
            className="group block rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/50 transition-all hover:scale-[1.02]"
          >
            <div className="aspect-video overflow-hidden">
              <img src="/media/qa/unc-audit-section0.png" alt="UNC Course Audit" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4">
              <span className="text-sm font-medium">UNC Moodle — Course Audit</span>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                Allure dashboard +
                {' '}
                <a href="https://nelgoez.github.io/unc-agentic-dev/" target="_blank" className="text-[var(--color-accent)] hover:underline" onClick={e => e.stopPropagation()}>audit report ↗</a>
              </p>
            </div>
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">{t('qa.evidence-title')}</h2>
        <p className="text-[var(--color-text-muted)] mb-8">{t('qa.evidence-desc')}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {SCREENSHOTS.map(s => (
            <div key={s.key} className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
              <a href={s.src} target="_blank">
                <img
                  src={s.src}
                  alt={t(s.key)}
                  className="w-full rounded-lg border border-[var(--color-border)]"
                  loading="lazy"
                />
              </a>
              <p className="text-xs text-[var(--color-text-muted)] mt-2 px-1">{t(s.key)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center">
        <h2 className="text-xl font-bold mb-4">{t('qa.cta')}</h2>
        <a
          href="mailto:gomeznahuel.le@gmail.com"
          className="inline-block px-6 py-3 rounded-lg bg-[var(--color-accent-strong)] text-white font-semibold hover:opacity-90 shadow-sm"
        >
          {t('qa.cta-button')}
        </a>
      </section>
    </main>
  );
}
