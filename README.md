# Ardavan Mirhosseini — Portfolio

Production portfolio for Ardavan Mirhosseini, a Toronto-based Senior Product Designer working across enterprise SaaS, AI-native workflows, financial systems, and information architecture.

## Current experience

The production homepage uses the Adaptive Decision Space / Progressive Woven Manuscript system. Visitors can choose a reading lens, adjust pre-authored reading depth, open public-safe case studies and research, and use deterministic “Ask in the margin” guidance. The guidance is approved static content, not a live AI conversation.

Public routes:

- `/`
- `/work/intuit-enterprise-suite`
- `/work/quickbooks-dimensional-chart-of-accounts`
- `/research`
- `/research/ai-native-strategy`
- `/resume-ardavan-mir.pdf`

The isolated `/explorations/adaptive-decision-space` route is a noindex reference edition and is excluded from the sitemap.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Static export to GitHub Pages

## Local development

Use the package manager version recorded in `package.json` and `pnpm-lock.yaml`.

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Release checks:

```bash
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
git diff --check
```

The production build exports to `out/`.

## Deployment

The canonical production URL is [https://www.ardavanmir.com](https://www.ardavanmir.com). Pushes to `main` deploy the static export through `.github/workflows/deploy.yml` to GitHub Pages. `public/CNAME` must remain `www.ardavanmir.com`.

The legacy Vercel/v0 project is not the production authority. Do not change CNAME, DNS, the deployment workflow, or the production branch without explicit approval.

As of the 2026-07-19 production audit, `www` serves the portfolio over HTTPS and bare-apex HTTP redirects to `www`; bare-apex HTTPS still has a certificate-name mismatch and requires external DNS/domain remediation.

## Source of truth and publication safety

Read `docs/sot/README.md` and the relevant SOT files before changing public copy or product evidence. Do not publish private source packs, internal feedback, confidential screenshots, customer data, unsupported metrics, or unverified ownership and outcome claims.
