# /QA Section — Design Doc

**Date:** 2026-07-01
**Status:** Approved (via agentic-debate)
**Goal:** Differentiate Nahuel Gomez in QA job applications by showing philosophy + strategy + concrete evidence on one `/qa` page.

---

## Architecture

**Route:** `/qa` — static page, no API, no DB.
**Tech:** Same stack as portfolio (Next.js 15 static export, Tailwind, `useLocale()` for i18n).
**Cost:** ~4KB new CSS/HTML, negligible bundle impact.

---

## Page Structure

### 1. Hero / Intro — "My QA Approach" (Option B)
2-3 sentences framing the philosophy. Bilingual (EN/ES via existing i18n).

### 2. Testability Scorecard — DTS as worked example (Option C)
Architecture summary → Score per layer (UI/API/DB/CI-CD) → Risk areas → Recommendations.

### 3. Live Evidence — bunkai-tms QA artifacts (Option A)
Bug screenshots found during testing + Allure report summary + kata-manifest.json reference.
Shows real enterprise tooling (Playwright, Cucumber, Allure, Jira).

### 4. CTA
"Want to discuss how I can improve your team's quality?" → mailto / LinkedIn

---

## Navigation

Add `/qa` to the nav bar as "QA" / "QC" (Spanish) — after Blog, before Behind the Scenes.

---

## i18n Keys

New keys in `messages/{en,es}.json`:

```
qa.title
qa.subtitle
qa.approach
qa.scorecard-title
qa.scorecard-desc
qa.evidence-title
qa.evidence-desc
qa.cta
qa.cta-button
```

---

## Files Changed

| File | Change |
|------|--------|
| `app/qa/page.tsx` | **New** — full /qa page |
| `components/nav-client.tsx` | Add QA nav link |
| `messages/en.json` | Add `qa.*` keys |
| `messages/es.json` | Add `qa.*` keys (Spanish) |
| `public/media/qa/` | **New dir** — QA screenshots |

---

## Implementation Plan

1. Add i18n keys to both language files
2. Create `app/qa/page.tsx`
3. Copy 3 bug screenshots from bunkai-qa-engineering to `public/media/qa/`
4. Add nav link
5. Build & verify

---

## Self-Review

- **Placeholders:** None. All content sourced from real projects (DTS exploration, bunkai-qa-engineering screenshots).
- **Consistency:** Follows existing page patterns (client component, useLocale, Tailwind classes from existing sections).
- **Scope:** Single page, no API, no DB — correct for a static portfolio.
- **Ambiguity:** "Scorecard" could imply an interactive form — clarified as static assessment (read-only, build-time).
