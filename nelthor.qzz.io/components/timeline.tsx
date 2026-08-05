const EXPERIENCE = [
  {
    role: 'SDET — Quality Engineering',
    company: 'Newfold Digital (Florida, USA)',
    period: '2021 – 2025',
    details: [
      'Built and maintained test automation frameworks using Cucumber + TypeScript across multiple product lines',
      'Developed Robot Framework + Python test suites for backend API validation',
      'Managed CI/CD pipelines on Jenkins integrated with Jira for full traceability',
      'Reduced regression cycle time by 60% through parallel test execution and framework optimization',
      'Collaborated with distributed US/India teams on quality strategy and release sign-off',
    ],
  },
  {
    role: 'Agentic QA Engineer',
    company: 'UPEX Galaxy',
    period: '2025 – Present',
    details: [
      'Built bunkai-qa-engineering: agentic QA framework (KATA + Playwright + TypeScript) providing automated testing for UPEX\'s bunkai-tms product',
      'QA\'d UPEX\'s diploma tracking platform — E2E Playwright, API (45+ endpoints), accessibility (axe-core), multi-role auth',
      'CI/CD quality gates across 6+ GitHub Actions workflows — Allure dashboards auto-deployed on every run',
      'Jira/Xray traceability with structured decorators for automated case sync',
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
