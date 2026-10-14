'use client';

import type { ReactNode } from 'react';
import { useLocale } from '@/lib/locale-context';

interface ComparisonRow {
  task: string
  traditional: string
  agentic: string
}

interface BtsCopy {
  tableTitle: string
  colTask: string
  colTraditional: string
  colAgentic: string
  archTitle: string
  archDesc: string
  tradTitle: string
  tradItems: string[]
  agenticTitle: string
  agenticItems: string[]
  portfolioTitle: string
  portfolioIntro: ReactNode
  portfolioSteps: ReactNode[]
}

const COPY: Record<'en' | 'es', BtsCopy> = {
  en: {
    tableTitle: 'Traditional vs Agentic: Side by Side',
    colTask: 'Task',
    colTraditional: 'Traditional (Newfold)',
    colAgentic: 'Agentic (Current)',
    archTitle: 'Architecture Evolution',
    archDesc: 'Two pipelines — same engineer, expanded toolkit.',
    tradTitle: '2021-2026: Traditional SDET',
    tradItems: [
      'Cucumber + TypeScript Page Object Model',
      'Robot Framework + Python for API tests',
      'Jenkins pipeline with manual stage config',
      'Jira + Zephyr test management',
      'Manual Cucumber feature file authoring',
    ],
    agenticTitle: '2026+: Agentic QA',
    agenticItems: [
      'Agentic QA Boilerplate — open-source, KATA component-action-test layers',
      'create-agentic-qa scaffolder — one command bootstraps the whole framework',
      '20+ agent skills orchestrating Stage 0→6 (shift-left → regression GO/NO-GO)',
      '13-command Xray CLI + @atc decorators for Jira/Xray traceability',
      '7 MCP integrations (Tavily, Atlassian, API, Postman, and more)',
    ],
    portfolioTitle: 'This Portfolio — Built with Agentic Workflows',
    portfolioIntro: (
      <>
        Everything you see on nelthor.com.ar was planned, built, reviewed, and deployed using the
        agentic-dev workflow. The process:
      </>
    ),
    portfolioSteps: [
      <>
        Design spec defined via
        <code className="text-[var(--color-accent)]">/project-foundation</code>
      </>,
      <>
        Content strategy via
        <code className="text-[var(--color-accent)]">/product-management</code>
      </>,
      <>
        Landing page scaffolded via
        <code className="text-[var(--color-accent)]">/project-bootstrap</code>
      </>,
      <>
        Each feature shipped via
        <code className="text-[var(--color-accent)]">/sprint-development</code>
      </>,
      <>
        Quality gates via health tools +
        <code className="text-[var(--color-accent)]">bun run health:check</code>
      </>,
      <>Autonomous mode enabled for faster iteration</>,
    ],
  },
  es: {
    tableTitle: 'Tradicional vs Agéntico: Lado a Lado',
    colTask: 'Tarea',
    colTraditional: 'Tradicional (Newfold)',
    colAgentic: 'Agéntico (Actual)',
    archTitle: 'Evolución de la Arquitectura',
    archDesc: 'Dos pipelines — el mismo ingeniero, un toolkit ampliado.',
    tradTitle: '2021-2026: SDET Tradicional',
    tradItems: [
      'Cucumber + Page Object Model en TypeScript',
      'Robot Framework + Python para tests de API',
      'Pipeline Jenkins con configuración manual de etapas',
      'Gestión de tests con Jira + Zephyr',
      'Redacción manual de feature files de Cucumber',
    ],
    agenticTitle: '2026+: QA Agéntico',
    agenticItems: [
      'Agentic QA Boilerplate — open-source, capas KATA componente-acción-test',
      'Scaffolder create-agentic-qa — un comando arma todo el framework',
      '20+ skills de agente orquestando el Stage 0→6 (shift-left → regresión GO/NO-GO)',
      'CLI de Xray de 13 comandos + decoradores @atc para trazabilidad Jira/Xray',
      '7 integraciones MCP (Tavily, Atlassian, API, Postman y más)',
    ],
    portfolioTitle: 'Este Portfolio — Construido con Flujos Agénticos',
    portfolioIntro: (
      <>
        Todo lo que ves en nelthor.com.ar fue planeado, construido, revisado y desplegado usando el
        flujo de trabajo agentic-dev. El proceso:
      </>
    ),
    portfolioSteps: [
      <>
        Spec de diseño definida vía
        <code className="text-[var(--color-accent)]">/project-foundation</code>
      </>,
      <>
        Estrategia de contenido vía
        <code className="text-[var(--color-accent)]">/product-management</code>
      </>,
      <>
        Landing page scaffolded vía
        <code className="text-[var(--color-accent)]">/project-bootstrap</code>
      </>,
      <>
        Cada feature entregada vía
        <code className="text-[var(--color-accent)]">/sprint-development</code>
      </>,
      <>
        Quality gates con health tools +
        <code className="text-[var(--color-accent)]">bun run health:check</code>
      </>,
      <>Modo autonomous habilitado para iterar más rápido</>,
    ],
  },
};

const COMPARISONS: Record<'en' | 'es', ComparisonRow[]> = {
  en: [
    {
      task: 'Write test for new feature',
      traditional: 'Manual Cucumber feature file + step definitions + page objects (~2-4h)',
      agentic: 'AI generates from Acceptance Criteria → human reviews + adjusts (~20min)',
    },
    {
      task: 'CI/CD pipeline config',
      traditional: 'Jenkinsfile hand-coded with Groovy syntax, tested via trial-and-error',
      agentic: 'Agent proposes pipeline → human approves + adjusts parameters',
    },
    {
      task: 'Framework architecture',
      traditional: 'Researched patterns, POC\'d, coded layers over weeks',
      agentic: 'KATA framework scaffolded in hours via skills, composable from day one',
    },
    {
      task: 'Test reporting',
      traditional: 'Custom reporter code per project, HTML/XML output formats',
      agentic: 'KATA reporter + Allure out of the box, historical trends baked in',
    },
    {
      task: 'Git workflow',
      traditional: 'Manual branching, conflict resolution, PR management',
      agentic: 'git-flow-master skill handles branching + commits + PRs autonomously',
    },
  ],
  es: [
    {
      task: 'Escribir un test para una feature nueva',
      traditional: 'Feature file de Cucumber manual + step definitions + page objects (~2-4h)',
      agentic: 'La IA genera desde los Acceptance Criteria → el humano revisa y ajusta (~20min)',
    },
    {
      task: 'Configuración de pipeline CI/CD',
      traditional: 'Jenkinsfile codificado a mano con Groovy, probado por ensayo y error',
      agentic: 'El agente propone el pipeline → el humano aprueba y ajusta parámetros',
    },
    {
      task: 'Arquitectura del framework',
      traditional: 'Investigación de patrones, POCs, capas codificadas durante semanas',
      agentic: 'Framework KATA scaffolded en horas vía skills, composable desde el día uno',
    },
    {
      task: 'Reportes de testing',
      traditional: 'Código de reporter custom por proyecto, formatos de salida HTML/XML',
      agentic: 'Reporter KATA + Allure out of the box, con tendencias históricas incluidas',
    },
    {
      task: 'Flujo de trabajo Git',
      traditional: 'Branching manual, resolución de conflictos, gestión de PRs',
      agentic: 'El skill git-flow-master maneja branching + commits + PRs de forma autónoma',
    },
  ],
};

export function BtsComparisonTable() {
  const { locale } = useLocale();
  const copy = COPY[locale];
  const rows = COMPARISONS[locale];
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">{copy.tableTitle}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-3 px-4 font-semibold">{copy.colTask}</th>
              <th className="text-left py-3 px-4 font-semibold">{copy.colTraditional}</th>
              <th className="text-left py-3 px-4 font-semibold">{copy.colAgentic}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.task} className="border-b border-[var(--color-border)]">
                <td className="py-4 px-4 font-medium">{row.task}</td>
                <td className="py-4 px-4 text-[var(--color-text-muted)]">{row.traditional}</td>
                <td className="py-4 px-4 text-[var(--color-text-muted)]">{row.agentic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function BtsArchitectureSection() {
  const { locale } = useLocale();
  const copy = COPY[locale];
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-2">{copy.archTitle}</h2>
      <p className="text-sm text-[var(--color-text-muted)] mb-6">{copy.archDesc}</p>
      <div className="mb-8 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
        <img src="/architecture.svg" alt="Architecture diagram comparing Traditional SDET and Agentic QA pipelines" className="w-full h-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          <h3 className="font-semibold mb-3">{copy.tradTitle}</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            {copy.tradItems.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          <h3 className="font-semibold mb-3">{copy.agenticTitle}</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            {copy.agenticItems.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function BtsPortfolioSection() {
  const { locale } = useLocale();
  const copy = COPY[locale];
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">{copy.portfolioTitle}</h2>
      <div className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
        <p className="text-[var(--color-text-muted)] mb-4">{copy.portfolioIntro}</p>
        <ol className="space-y-2 text-sm text-[var(--color-text-muted)] list-decimal list-inside">
          {copy.portfolioSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
