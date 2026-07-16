# LinkedIn Post — Profile Template v2 Refresh

> Public-ready. If the original launch post is now stale, frame as a "v2 refresh."

---

I soft-launched my portfolio template a while back. Since then it's been quietly evolving — and the biggest upgrade is invisible by design.

**The auto-sync pipeline:**

```
Write a blog post (MDX) → Daily cron fires at 6 AM UTC
  → bun run generate:readme syncs repos + content
    → GitHub profile README auto-updates
      → Portfolio site rebuilds and deploys
```

What this means:

- **Blog posts auto-publish** — write MDX, push to main, it goes live on the next daily cycle
- **GitHub profile README stays current** — repos, blog links, badges all sync automatically
- **Major changes stay manual** — design overhauls, CV edits, structural changes only deploy when you push
- **You can also trigger a rebuild anytime** from the GitHub Actions tab

Why hybrid? Recruiters see fresh content without risking half-finished redesigns going live.

This is now built into the template as a ready-to-use GitHub Actions workflow.

**Also in this refresh:**

• New stack badges: Bun, n8n, k6, WebdriverIO, Confluence
• Agentic AI section — Claude, OpenCode, Tavily now visible on profile
• README rewritten with step-by-step guide for non-developers
• Agentic-debate skill — binary (quick) or multi-agent (deep) modes
• Broken trophy badge removed (that service went paid)

Template: github.com/nelgoez/career-profile-up

Built with agentic dev. Updates itself the same way.

#AgenticQA #TestAutomation #Portfolio #GitHub #OpenSource #CareerProfile
