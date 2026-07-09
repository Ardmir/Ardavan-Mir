# SOT-07 — Tech and Deployment Source of Truth

Version: 0.2  
Last updated: 2026-06-19  
Status: Active

## Deployment status (2026-06-19)

### Confirmed

- `[CONFIRMED]` The Glass Monolith homepage has been **committed and deployed** to production.
- `[CONFIRMED]` Merge: PR #5 (`glass-monolith-phase-1` → `main`), merge commit `d528004` (2026-06-19).
- `[CONFIRMED]` GitHub Actions workflow **Deploy to GitHub Pages** succeeded on push to `main` (run `27807672539`).
- `[CONFIRMED]` Production branch: **`main`**.
- `[CONFIRMED]` Deployment source of truth: **GitHub Pages** via `.github/workflows/deploy.yml` (static export to `out/`).
- `[CONFIRMED]` Canonical domain in repo `CNAME`: **`www.ardavanmir.com`**.
- `[CONFIRMED]` Production HTML verified post-deploy: new hero subcopy (“I work across enterprise…”), no “View selected work” CTA, Glass Monolith section classes present.
- `[CONFIRMED]` Next.js upgraded to **15.2.9** on feature branch before merge (security patch for RSC CVE advisories).
- `[CONFIRMED]` Local dev: `PORT=3005 corepack pnpm dev`; production-like: `corepack pnpm build` (static export).

### Still verify

- `[VERIFY]` Final production URL behavior for **apex** `ardavanmir.com` vs **`www`** (redirect, DNS, and which is canonical in practice).
- `[VERIFY]` Root-domain DNS / redirect configuration outside repo.
- `[VERIFY]` OG image, favicon, and social preview metadata on production.
- `[VERIFY]` Whether any Vercel project still holds a domain alias (disconnect deferred — see SOT-11).

### Decided

- `[DECIDED]` **GitHub Pages is the production deploy path.** Vercel project `v0-portfolio` is legacy v0 integration; disconnect deferred.
- `[DECIDED]` Do **not** change `CNAME`, hosting configuration, DNS, or production branch during documentation/case-study work **without explicit approval from Ardavan**.

## Known technical context

- Domain: `ardavanmir.com` / `www.ardavanmir.com`.
- GitHub repo: `Ardmir/Ardavan-Mir`.
- Stack: Next.js 15.2.9 (post-merge), React 19, Tailwind, App Router, static export for GitHub Pages.
- Key paths: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `components/portfolio/clarity-engine.tsx`, `components/ia-logotype.tsx`, `.github/workflows/deploy.yml`, `CNAME`.

## Critical rules

- Do not delete `CNAME`.
- Do not remove or alter deployment workflows unless explicitly approved.
- Do not reset or clean the repo.
- Do not push to `main` without approval.
- Do not change DNS, hosting, or production branch during SOT/case-study work without explicit approval.
- Work in a branch for code changes; SOT updates may occur on any branch but must not include production code edits when scoped as docs-only.

## Safe local workflow

```bash
git checkout main
git pull origin main
pnpm install
PORT=3005 pnpm dev    # development
pnpm build            # production static export test
```

For feature work:

```bash
git checkout -b feature/your-branch
```

## Build/test protocol

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm build
```

Fix all build errors before deploy. GitHub Actions uses the same build on `main`.

## Post-deployment QA checklist

Use after every production deploy:

- `[ ]` Production site loads (`https://www.ardavanmir.com`).
- `[ ]` Custom domain resolves (www and root behavior documented).
- `[ ]` No v0/Vercel starter content remains on production.
- `[ ]` No broken in-page anchor routes (`#work`, `#approach`, `#about`, `#contact`).
- `[ ]` Contact email mailto works (`ardavanmir@outlook.com`).
- `[ ]` LinkedIn opens correctly.
- `[ ]` Résumé works when published (currently disabled placeholder — track P0-02).
- `[ ]` Mobile layout acceptable.
- `[ ]` Keyboard focus visible on interactive elements.
- `[ ]` Clarity Engine: tap/hover/focus expand behavior verified.
- `[ ]` `pnpm build` succeeds on `main`.
- `[ ]` No critical console errors on production.
- `[ ]` Metadata title/description correct.
- `[ ]` OG/social preview correct when OG assets exist.

## GitHub Pages notes

- Workflow: `.github/workflows/deploy.yml` triggers on **push to `main`** and `workflow_dispatch`.
- Build output: `./out` uploaded via `actions/upload-pages-artifact`.
- Keep `CNAME` in repo root (`www.ardavanmir.com`).
- Confirm Pages source in repo Settings → Pages (GitHub Actions).

## Vercel / v0 notes (legacy)

- `[OBSERVED]` Vercel GitHub App still connected; preview deploys ran on PR #5. After Next.js 15.2.9 upgrade, Vercel check passed.
- `[DECIDED]` Vercel is **not** the production source of truth.
- `[TODO]` Disconnect Vercel when ready (see SOT-11 deferred infrastructure).
- `[TODO]` Update root `README.md` (still describes v0 auto-sync and Vercel deployment).
- Do not assume Vercel serves production until verified — production verified on GitHub Pages 2026-06-19.

## Files likely to update in future code work

- `app/page.tsx`, `app/globals.css`, `components/*`
- `public/*` for résumé, images, OG image
- Future case-study routes under `app/`

## Files not to remove

- `CNAME`
- `.github/workflows/deploy.yml`
- `package.json`, lockfile, Next.js config, Tailwind config

## Deployment verification URLs

After deployment, test:

- https://www.ardavanmir.com
- https://ardavanmir.com (document redirect behavior)
- Section anchors: `#work`, `#approach`, `#about`, `#contact`

## Open technical questions

- `[VERIFY]` Apex vs www redirect and DNS at registrar.
- `[VERIFY]` OG/Twitter card assets and metadata completeness.
- `[TODO]` Disconnect Vercel and update README when approved.
