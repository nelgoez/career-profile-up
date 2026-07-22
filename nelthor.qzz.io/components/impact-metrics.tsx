'use client';

import { Activity, Briefcase, GitFork, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocale } from '@/lib/locale-context';

interface Metric {
  icon: typeof GitFork
  value: number
  suffix?: string
  labelKey: string
}

interface AllureStat {
  passed: number
  failed: number
  broken: number
  skipped: number
  total: number
}

async function fetchAllureSummary(url: string): Promise<AllureStat | null> {
  try {
    const resp = await fetch(url, { redirect: 'follow' });
    const html = await resp.text();
    const match = html.match(/URL=([^"\s]+)/);
    if (!match) {
      return null;
    }
    const redirectTarget = match[1];
    const versionBase = redirectTarget.replace(/\/[^/]+\/?$/, '');
    const summaryResp = await fetch(`${versionBase}/widgets/summary.json`);
    if (!summaryResp.ok) {
      return null;
    }
    return await summaryResp.json();
  }
  catch {
    return null;
  }
}

type Settled<T> = PromiseSettledResult<T>;

function isFulfilled<T>(r: Settled<T>): r is PromiseFulfilledResult<T> {
  return r.status === 'fulfilled';
}

async function loadRepoWorkflows(name: string): Promise<number> {
  try {
    const r = await fetch(`https://api.github.com/repos/nelgoez/${name}/contents/.github/workflows`);
    if (!r.ok) {
      return 0;
    }
    const files: { type: string }[] = await r.json();
    return files.filter(f => f.type === 'file').length;
  }
  catch {
    return 0;
  }
}

function useMetrics() {
  const [repos, setRepos] = useState(14);
  const [workflows, setWorkflows] = useState(6);
  const [coverage, setCoverage] = useState(78);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const [repoResp, dtsSummary, bunkaiSummary, uncSummary] = await Promise.allSettled([
        fetch('https://api.github.com/users/nelgoez/repos?per_page=100&type=public'),
        fetchAllureSummary('https://nelgoez.github.io/diploma-tracking-sys/staging/smoke/'),
        fetchAllureSummary('https://nelgoez.github.io/bunkai-qa-engineering/staging/sanity/'),
        fetchAllureSummary('https://nelgoez.github.io/unc-agentic-dev/allure/'),
      ]);

      if (cancelled) {
        return;
      }

      if (isFulfilled(repoResp)) {
        const data = await repoResp.value.json();
        if (Array.isArray(data)) {
          setRepos(data.length);
        }
      }

      const summaries = [dtsSummary, bunkaiSummary, uncSummary].filter(isFulfilled).map(s => s.value).filter(Boolean) as AllureStat[];

      if (summaries.length > 0) {
        const totalPassed = summaries.reduce((s, v) => s + v.passed, 0);
        const totalAll = summaries.reduce((s, v) => s + v.total, 0);
        if (totalAll > 0) {
          setCoverage(Math.round((totalPassed / totalAll) * 100));
        }
      }

      const KEY_REPOS = ['diploma-tracking-sys', 'bunkai-qa-engineering', 'unc-agentic-dev'];
      const workflowResults = await Promise.allSettled(KEY_REPOS.map(loadRepoWorkflows));
      const wfCount = workflowResults.filter(isFulfilled).reduce((s, r) => s + r.value, 0) + 4;

      if (!cancelled) {
        if (wfCount > 0) {
          setWorkflows(wfCount);
        }
      }
    };

    void load();
    return () => { cancelled = true; };
  }, []);

  return { repos, workflows, coverage };
}

function useCountUp(target: number, duration = 1500): number {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      }
      else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

function AnimatedMetric({ icon: Icon, value, suffix, labelKey }: Metric) {
  const { t } = useLocale();
  const count = useCountUp(value);
  return (
    <div className="text-center p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] scroll-reveal">
      <Icon size={24} className="mx-auto mb-3 text-[var(--color-accent)]" />
      <div className="text-3xl font-bold mb-1">
        {count}
        {suffix ?? ''}
      </div>
      <div className="text-sm text-[var(--color-text-muted)]">{t(labelKey)}</div>
    </div>
  );
}

export function ImpactMetrics() {
  const { t } = useLocale();
  const { repos, workflows, coverage } = useMetrics();

  const metrics: Metric[] = [
    { icon: GitFork, value: repos, labelKey: 'metrics.repos' },
    { icon: Activity, value: workflows, suffix: '+', labelKey: 'metrics.workflows' },
    { icon: ShieldCheck, value: coverage, suffix: '%', labelKey: 'metrics.coverage' },
    { icon: Briefcase, value: 5, suffix: '+', labelKey: 'metrics.experience' },
  ];

  return (
    <section className="py-16 border-t border-[var(--color-border)]">
      <h2 className="text-2xl font-bold mb-2">{t('metrics.title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {metrics.map(m => (
          <AnimatedMetric key={m.labelKey} {...m} />
        ))}
      </div>
    </section>
  );
}
