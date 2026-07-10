# Production QA Log

Version: 1.0  
Last updated: 2026-07-10  
Sprint: 3.1 — Production QA + Share Readiness

## Build

| Check | Result |
|-------|--------|
| `pnpm build` (pre-fix) | Pass — 6 static pages |
| `pnpm build` (post-fix) | Pass — 6 static pages |
| Static export `out/` | Pass |

## Routes checked

| Route | Export | Local dev |
|-------|--------|-----------|
| `/` | Pass (`out/index.html`) | 200 |
| `/work/intuit-enterprise-suite` | Pass | 200 |
| `/work/quickbooks-dimensional-chart-of-accounts` | Pass | 200 |
| `/resume-ardavan-mir.pdf` | Pass (`out/resume-ardavan-mir.pdf`) | Present in `public/` |

## Link status

| Link | Target | Status |
|------|--------|--------|
| Homepage IES card | `/work/intuit-enterprise-suite` | Pass |
| Homepage QBOA card | `/work/quickbooks-dimensional-chart-of-accounts` | Pass |
| Iranians Who Design | `https://iranianxdesign.com/` | Pass (external) |
| Contact email | `mailto:ardavanmir@outlook.com` | Pass |
| LinkedIn | `https://linkedin.com/in/ardavanmir` | Pass |
| Résumé | `/resume-ardavan-mir.pdf` | Pass |
| Ask Ardavan — IES | `/work/intuit-enterprise-suite` | Pass |
| Ask Ardavan — QBOA (start prompt) | `/work/quickbooks-dimensional-chart-of-accounts` | Pass |
| IES — Back to selected work | `/#work` | Pass |
| IES — Get in touch | `/#contact` | Pass |
| QBOA — Back to selected work | `/#work` | Pass |
| QBOA — Get in touch | `/#contact` | Pass |

## Accessibility notes

- One `h1` per page (homepage, IES, QBOA)
- Semantic `main`, `article`, `section`, `header`, `footer` on case studies
- Ask Ardavan: `aria-expanded`, `aria-controls`, `aria-labelledby`, `aria-hidden` when closed, Escape to close
- Prompt chips are buttons with `aria-pressed`
- Project-card thumbnails: `aria-hidden="true"`
- Case study visuals: `figure` + `figcaption` / `aria-labelledby` / `role="img"`
- `prefers-reduced-motion` disables IES flow-line animation
- No keyboard trap observed in Ask Ardavan (Escape closes panel)
- **Fixed in Sprint 3.1:** IES header “Back to work” link now has visible `focus-visible` ring (matched QBOA)

## Mobile notes

- Homepage, IES, and QBOA use `overflow-x-hidden` on `main`
- Case study visual grids stack on small screens
- QBOA classification grid collapses to single column below 480px
- Ask Ardavan panel is fixed-position; contact section remains reachable via scroll
- Project-card thumbnails are compact (`max-height` capped); no observed clutter

## Console / hydration notes

- Local dev verified HTTP 200 on `/`, IES, and QBOA routes
- No broken image references on live portfolio paths (thumbnails are SVG/CSS only)
- Static case study pages are server components — low hydration risk
- Homepage client components (menu, Ask Ardavan) — no hydration errors observed in manual pass

## SEO / social

| Item | Status |
|------|--------|
| Title | Pass — “Ardavan Mirhosseini — Senior Product Designer” |
| Description | Pass |
| Open Graph title/description/type/locale | Pass |
| Twitter card metadata | Pass (`summary_large_image`) |
| `metadataBase` + canonical | **Added in Sprint 3.1** (`https://www.ardavanmir.com`) |
| Open Graph `url` / `siteName` | **Added in Sprint 3.1** |
| OG image (`og:image`) | **TODO** — no dedicated share image yet |
| Favicon / apple-touch-icon | **TODO** — no `favicon.ico` or app icon in `public/` |
| Per-route OG overrides for case studies | **TODO** — case studies inherit root metadata |

## Public-safety search (app / components / content)

No hits for unverified metrics, unsupported impact verbs, or sensitive private-context terms in public-facing `app/`, `components/`, or `content/` files.

SOT guardrails in `docs/sot/` may reference verification topics — not published as site copy.

## Small fixes applied (Sprint 3.1)

1. `app/layout.tsx` — `metadataBase`, canonical URL, Open Graph `url` and `siteName`
2. `app/work/intuit-enterprise-suite/page.tsx` — focus-visible ring on header back link

## Remaining issues

- No OG share image asset
- No favicon / touch icon
- Case study pages do not yet set unique OG metadata
- Ask Ardavan start prompt links to QBOA but not IES (IES has dedicated prompt — acceptable)
- Production apex vs `www` redirect — verify DNS outside repo (see SOT-07)

## Deployment config

- `CNAME`: `www.ardavanmir.com` — unchanged
- `.github/workflows/deploy.yml` — unchanged
- `next.config.mjs` — unchanged

## Recommended next sprint

**Sprint 4 — Executive Storytelling Proof Layer** (per portfolio roadmap)

Optional parallel polish:
- OG image + favicon
- Ask Ardavan V1.5 suggested next prompts
- “What teams bring me in for” homepage section (after verification)
