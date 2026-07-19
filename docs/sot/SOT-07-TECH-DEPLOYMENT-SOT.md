# SOT-07 — Tech and Deployment Source of Truth

Version: 0.3
Last updated: 2026-07-19
Status: Active

## Authoritative production state

- `[CONFIRMED]` Repository: `Ardmir/Ardavan-Mir`.
- `[CONFIRMED]` Production branch: `main`.
- `[CONFIRMED]` Production architecture: Adaptive Decision Space / Progressive Woven Manuscript.
- `[CONFIRMED]` Deployment authority: GitHub Pages through `.github/workflows/deploy.yml`.
- `[CONFIRMED]` Build artifact: Next.js static export in `out/`.
- `[CONFIRMED]` Canonical URL and repository CNAME: `https://www.ardavanmir.com` / `www.ardavanmir.com`.
- `[OBSERVED 2026-07-19]` `https://www.ardavanmir.com/` returns HTTP 200 from `server: GitHub.com`.
- `[OBSERVED 2026-07-19]` `http://ardavanmir.com/` redirects to `https://www.ardavanmir.com/`.
- `[OBSERVED 2026-07-19]` `https://ardavanmir.com/` fails certificate-name verification. This is an external apex DNS/certificate defect; share and canonical URLs must continue using `www` until it is remediated.
- `[OBSERVED]` Vercel remains connected for preview checks. A successful Vercel preview does not establish production ownership and must not be treated as a production deployment.

## Production routes

- `/`
- `/work/intuit-enterprise-suite`
- `/work/quickbooks-dimensional-chart-of-accounts`
- `/research`
- `/research/ai-native-strategy`
- `/resume-ardavan-mir.pdf`

The reference route `/explorations/adaptive-decision-space` is `noindex` and intentionally excluded from `sitemap.xml`.

## Technical context

- Next.js 15.2.9, React 19, TypeScript, Tailwind CSS, App Router.
- Static export is required for GitHub Pages.
- `public/CNAME` is copied into the export.
- `app/robots.ts` and `app/sitemap.ts` provide crawler directives and the public route index.
- Adaptive preferences use browser `localStorage` only; there is no portfolio API, live LLM, RAG backend, voice system, or avatar.

## Critical rules

- Do not delete or replace `public/CNAME`.
- Do not remove or alter `.github/workflows/deploy.yml` without explicit approval.
- Do not change DNS, domain ownership, hosting, or the production branch without explicit approval.
- Do not push directly to `main`, merge a PR, or trigger a production deployment as part of documentation or review work.
- Do not publish private source packs, internal feedback, confidential screenshots, customer data, secrets, or unsupported claims.
- Preserve the approved 2026 résumé at `public/resume-ardavan-mir.pdf` unless a separately reviewed replacement is approved.

## Local workflow

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Required release checks:

```bash
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
git diff --check
```

The build must validate TypeScript and lint successfully; `ignoreBuildErrors` and `ignoreDuringBuilds` must not be used to mask failures.

## Deployment and rollback

- `.github/workflows/deploy.yml` triggers on push to `main` or manual `workflow_dispatch`.
- The workflow installs frozen dependencies, builds the static export, uploads `out/`, and deploys it with `actions/deploy-pages`.
- Normal rollback is a reviewed revert or corrective commit on `main`, followed by the standard GitHub Pages workflow. Do not manually replace production files.
- GitHub repository Settings → Pages and the domain registrar remain the external operational controls.

## Post-deployment verification

- Confirm all production routes and the résumé return HTTP 200.
- Confirm `www` is canonical and document apex behavior.
- Confirm CNAME, robots, sitemap, OG image, icons, titles, descriptions, canonicals, and Twitter metadata.
- Exercise Reading Lens, Reading Depth, unfolded passages, deterministic Ask, Reset, and local persistence.
- Check desktop, tablet, mobile, keyboard, skip links, reduced motion, contrast, console, and Lighthouse.
- Record LinkedIn, Slack, and iMessage unfurl results only with dated platform evidence.

## Remaining external actions

- `[TODO]` Repair or configure the bare-apex HTTPS certificate/DNS path, then verify redirect behavior.
- `[TODO]` Complete evidence-backed LinkedIn, Slack, and iMessage unfurl checks using full `www` URLs.
- `[DEFERRED]` Disconnect the legacy Vercel/v0 integration only after Ardavan approves that infrastructure change.
