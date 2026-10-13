const EXPERIENCE = [
  {
    role: 'SDET — Quality Engineering',
    company: 'Newfold Digital (Florida, USA)',
    period: 'Aug 2021 – Jan 2026',
    details: [
      'Migrated the legacy suite from Protractor/JS to Cucumber (over WebdriverIO), then re-platformed it to Robot Framework + Python across multiple product lines',
      'Refactored the Cucumber suite on my own initiative — regression from 3.5–6 h to ~1:45–2 h (~60%) while trimming ~600–630 → ~430–440 cases',
      'Validated schemas, statuses, data structures and interaction results across SQL/MySQL/NoSQL during the migration to Oracle Cloud Infrastructure (OCI) — via DBeaver, direct DB connections and APIs',
      'Managed CI/CD pipelines on Jenkins over Bitbucket with Jira + Zephyr test management',
      'Collaborated with distributed US/India teams on quality strategy and release sign-off',
    ],
  },
  {
    role: 'Agentic QA Engineer',
    company: 'UPEX Galaxy',
    period: 'Jan 2026 – Present',
    details: [
      'Built the Agentic QA Boilerplate (KATA + Playwright + TypeScript) — open-source framework shipped with a create-agentic-qa scaffolder, 20+ agent skills, a full Xray CLI, and 7 MCP integrations',
      'Orchestrated the full Stage 0→6 QA lifecycle: shift-left testing → sprint testing → test documentation → test automation → regression GO/NO-GO',
      'QA\'d UPEX\'s diploma tracking platform — E2E Playwright, API (45+ endpoints), accessibility (axe-core), multi-role auth',
      'CI/CD quality gates across GitHub Actions workflows — Allure dashboards auto-deployed on every run',
      'Jira/Xray traceability via @atc decorators and a 13-command Xray CLI for automated case sync',
      'Evaluated through UPEX\'s Agentic QA DOJO program',
    ],
  },
];

export function Timeline() {
  return (
    <div className="space-y-8">
      {EXPERIENCE.map(exp => (
        <div key={exp.role} className="border-l-2 border-[var(--color-accent)] pl-6 py-2">
          <div className="text-sm text-[var(--color-text-muted)] mb-1">{exp.period}</div>
          <h3 className="text-lg font-semibold">{exp.role}</h3>
          <div className="text-[var(--color-accent)] mb-3">{exp.company}</div>
          <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
            {exp.details.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
