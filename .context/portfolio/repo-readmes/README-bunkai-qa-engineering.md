# bunkai-qa-engineering

> **The Agentic QA Boilerplate** — an open-source QA framework. Playwright + TypeScript, KATA architecture, Jira/Xray traceability, shipped with a `create-agentic-qa` scaffolder. Built and maintained by [Nahuel Gomez](https://nelthor.com.ar).

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-latest-45ba4b?logo=playwright&logoColor=white)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

The QA workflow, but AI runs it. A production-grade starter for QA teams that want AI agents driving the whole testing loop — from test plan to regression suite to release sign-off.

## Stack

| Layer | Tech |
|-------|------|
| Automation | Playwright + TypeScript |
| Architecture | KATA (Component → Action → Test) |
| Scaffolder | `create-agentic-qa` (npm) |
| Skills | 20+ agent skills (Stage 0→6 QA lifecycle) |
| Reporting | Allure, Playwright HTML Report |
| TMS | Jira / Xray (13-command CLI + @atc decorators) |
| MCPs | 7 integrations (Tavily, Atlassian, API, Postman, …) |
| CI/CD | GitHub Actions (build, smoke, sanity, regression) |

## What it demonstrates

- **Framework architecture** — scalable 4-layer KATA design (TestContext → UiBase/ApiBase → Domain Components → TestFixture)
- **Scaffolding** — `bunx create-agentic-qa@latest` bootstraps the whole framework in one command
- **Agentic orchestration** — 20+ skills driving shift-left testing → sprint testing → test documentation → test automation → regression GO/NO-GO
- **CI/CD pipelines** — PR validation, daily smoke, pattern-based sanity, full regression
- **Traceability** — `@atc:JIRA-123` decorators synced to Xray via a full CLI
- **Installer & updater** — `bun run setup`, `bun cli/doctor.ts`, `bun run up` (drift-aware template sync)

## Quick start

```bash
bunx create-agentic-qa@latest <your-repo-name>
cd <your-repo-name>
bun run setup
bun run test
```

## Related

- [Portfolio](https://nelthor.com.ar) — Nahuel Gomez, Agentic QA Engineer
- [Template](https://github.com/upex-galaxy/agentic-qa-boilerplate) — upstream template
- [career-profile-up](https://github.com/nelgoez/career-profile-up) — career command center

---

*Built with agentic workflows. Maintained by [@nelgoez](https://github.com/nelgoez).*
