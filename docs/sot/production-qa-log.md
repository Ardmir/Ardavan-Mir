# Production QA Log

Version: 1.4  
Last updated: 2026-07-11  
Sprint: 7 — Share Validation + Final Launch Audit (+ share-preview metadata fix)

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
| OG image (`og:image`) | **Added in Sprint 3.2** — `public/og-image.png` (1200×630) + `public/og-image.svg` |
| OG image JPEG fallback | **Added 2026-07-11** — superseded by `/og-image-v2.jpg` on 2026-07-11 after broken asset discovery |
| Absolute share asset URLs | **Added 2026-07-11** — `og:image`, `og:image:secure_url`, Twitter images, favicon, apple-touch-icon use `https://www.ardavanmir.com/...` |
| Favicon / apple-touch-icon | **Added in Sprint 3.2** — `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png` |
| Per-route OG overrides for case studies | **Added in Sprint 3.2** — IES and QBOA set title, description, canonical, OG/Twitter metadata |

## Public-safety search (app / components / content)

No hits for unverified metrics, unsupported impact verbs, or sensitive private-context terms in public-facing `app/`, `components/`, or `content/` files.

SOT guardrails in `docs/sot/` may reference verification topics — not published as site copy.

## Small fixes applied (Sprint 3.1)

1. `app/layout.tsx` — `metadataBase`, canonical URL, Open Graph `url` and `siteName`
2. `app/work/intuit-enterprise-suite/page.tsx` — focus-visible ring on header back link

## Sprint 3.2 — Share polish result

| Item | Status |
|------|--------|
| Root OG image | Pass — `og-image.png` referenced in `app/layout.tsx` |
| Root favicon | Pass — `favicon.svg` + `favicon-32x32.png` |
| Apple touch icon | Pass — `apple-touch-icon.png` (180×180) |
| IES per-route metadata | Pass — canonical, OG `url`, title, description, Twitter card |
| QBOA per-route metadata | Pass — canonical, OG `url`, title, description, Twitter card |
| Route-specific OG images | Deferred — case studies use root `og-image.png` |
| `pnpm build` | Pass — static export includes new `public/` assets |

### Manual share-preview TODOs

- Paste `https://www.ardavanmir.com` into LinkedIn Post Inspector after deploy
- Paste homepage and case-study URLs into Slack / iMessage and confirm card renders
- Optional future polish: route-specific OG images for IES and QBOA

## Sprint 6 — QBOA polish + share validation

| Check | Result |
|-------|--------|
| QBOA visuals polished | Pass — arc, flow diagrams, six-column grid, review checkpoint |
| QBOA `#classification-to-confidence` section | Pass |
| Ask Ardavan suggested-next chips | Pass — keyboard-accessible buttons, no free-text |
| Share-preview validation SOT | Pass — `share-preview-validation.md` created |
| Route-specific OG images | Deferred — root `og-image.png` used |
| `pnpm build` | Pass — verify locally before merge |
| IES page unchanged | Pass — no body content changes |
| Résumé PDF unchanged | Pass |

### Manual share-preview TODOs (Sprint 6)

See `docs/sot/share-preview-validation.md` for full workflow. Run after deploy:

- LinkedIn Post Inspector on `/`, IES, and QBOA URLs
- Slack / iMessage unfurl check
- Direct `/og-image.png` and `/favicon.svg` browser check

## Sprint 7 — Share Validation + Final Launch Audit

**Audit date:** 2026-07-11  
**Production commit:** `21c302a` (Sprint 6 merge)

### Build

| Check | Result |
|-------|--------|
| `pnpm build` (Sprint 7) | **Pass** — 6 static pages |
| Static export `out/` | **Pass** |
| Code changes in Sprint 7 | **None** — documentation-only audit |

### Live route status

| Route | HTTP | Content | Anchor |
|-------|------|---------|--------|
| `https://www.ardavanmir.com/` | 200 | Pass — hero, proof strip, work, Ask Ardavan present | `#what-teams-bring-me-in-for` present |
| `/work/intuit-enterprise-suite` | 200 | Pass | `#future-state-exploration` present |
| `/work/quickbooks-dimensional-chart-of-accounts` | 200 | Pass | `#classification-to-confidence` present |
| `/resume-ardavan-mir.pdf` | 200 | Pass — 3367 bytes, 1 page, matches local | — |
| `/og-image.png` | 200 | Pass — 1200×630 | — |
| `/favicon.svg` | 200 | Pass | — |
| `/apple-touch-icon.png` | 200 | Pass | — |

### Link status (live HTML verification)

| Link | Status |
|------|--------|
| Homepage IES card | **Pass** |
| Homepage QBOA card | **Pass** |
| Iranians Who Design | **Pass** (external) |
| Contact email | **Pass** |
| Résumé | **Pass** |
| IES future-state anchor | **Pass** |
| QBOA classification-to-confidence anchor | **Pass** |
| IES/QBOA back to work / get in touch | **Pass** |

### Share metadata (automated)

| Route | OG title | OG description | OG image | Result |
|-------|----------|----------------|----------|--------|
| `/` | Pass | Pass | Pass | **Pass** |
| IES | Pass | Pass | Pass | **Pass** |
| QBOA | Pass | Pass | Pass | **Pass** |

Manual LinkedIn / Slack / iMessage unfurl checks: **TODO** — see `share-preview-validation.md`

### Domain behavior

| Host | Result | Notes |
|------|--------|-------|
| `https://www.ardavanmir.com` | **Pass** | Portfolio serves correctly |
| `http://www.ardavanmir.com` | **Pass** | Redirects to HTTPS (301) |
| `https://ardavanmir.com` (apex) | **Issue noted** | TLS handshake error from audit environment (`tlsv1 unrecognized name`); apex may not serve portfolio on HTTPS |
| `http://ardavanmir.com` (apex) | **Not portfolio** | Returns small response; does not serve GitHub Pages site |
| `public/CNAME` | **Unchanged** | `www.ardavanmir.com` |

DNS/apex redirect configuration is outside repo scope. Verify with domain registrar if apex should redirect to `www`.

### Ask Ardavan QA (code review + prior live pass)

| Check | Result |
|-------|--------|
| Floating trigger | **Pass** |
| Open / close / Escape | **Pass** |
| Start over | **Pass** |
| All primary prompt chips | **Pass** |
| Suggested-next chips after answer | **Pass** |
| Suggested-next reuses approved prompts only | **Pass** |
| Suggested-next excludes active prompt | **Pass** |
| Keyboard-accessible buttons | **Pass** |
| `aria-expanded` / `aria-controls` / `aria-labelledby` | **Pass** |
| IES future-state anchor link | **Pass** |
| QBOA case study link | **Pass** |
| Resume / contact links | **Pass** |
| No free-text input | **Pass** |
| No backend/API/OpenAI | **Pass** |

### Accessibility QA

| Check | Result |
|-------|--------|
| One `h1` per page | **Pass** |
| Semantic sections | **Pass** |
| Focus states on links/buttons | **Pass** |
| Chat dialog labeling | **Pass** |
| Informative visuals captioned / labelled | **Pass** |
| Decorative visuals `aria-hidden` | **Pass** |
| Reduced motion | **Pass** |
| No keyboard trap | **Pass** (Escape closes chat) |

### Mobile QA (code + prior passes)

| Check | Result |
|-------|--------|
| Page-level `overflow-x-hidden` | **Pass** |
| QBOA grid scroll in `.qboa-visual__grid-wrap` | **Pass** |
| Ask Ardavan suggestions wrap | **Pass** |
| Contact section reachable | **Pass** |

### Console / hydration QA

| Check | Result |
|-------|--------|
| Static case study pages (IES, QBOA) | **Low risk** — server components |
| Homepage client components | **No known hydration errors** in prior passes |
| Broken asset references | **None observed** on live routes |

Recommend browser DevTools console check on `/`, IES, and QBOA after deploy for final sign-off.

### Public-safety search

**Pass** — no risky hits in `app/`, `components/` (public files), `content/`, `public/`. SOT guardrails only.

### Small fixes applied (Sprint 7)

**None.** Audit passed without code changes.

### Manual share-preview results logged (2026-07-11)

| Check | Result | Notes |
|-------|--------|-------|
| Live OG metadata — `/`, IES, QBOA | **Pass** | Re-verified post Sprint 7 merge (`b3ce281`) |
| `/og-image.png` | **Pass** | HTTP 200; 1200×630 |
| `/favicon.svg` + PNG + apple-touch | **Pass** | HTTP 200 |
| Stale metadata cache | **None observed** | Live HTML matches expected; LinkedIn cache not scraped |
| Route-specific OG images needed? | **No** | Root OG sufficient for launch |
| LinkedIn Post Inspector | **TODO** | Owner sign-off pending |
| Slack unfurl | **TODO** | Owner sign-off pending |
| iMessage preview | **TODO** | Owner sign-off pending |

See `share-preview-validation.md` — **Manual validation results** section.

### Share-preview OG asset fix (2026-07-11)

| Check | Result | Notes |
|-------|--------|-------|
| Broken JPEG/PNG asset discovery | **Fail → fixed** | Both contained XML error screenshot from corrupt SVG export |
| `public/og-image.svg` repaired | **Pass** | Removed invalid `0x14` control char in `aria-label` |
| `public/og-image-v2.jpg` added | **Pass** | 1200×630 clean JPEG; primary share image (cache-busting) |
| `public/og-image.png` regenerated | **Pass** | Clean PNG fallback from fixed SVG |
| `lib/site.ts` primary URL | **Pass** | Points to `/og-image-v2.jpg` |
| `pnpm build` | **Pass** | `out/og-image-v2.jpg` exported |
| iMessage re-test (www URL) | **TODO** | After deploy — use `https://www.ardavanmir.com/` |
| Apex DNS/TLS | **External** | Bare `ardavanmir.com` HTTPS still broken outside repo |

### Share-preview metadata fix (2026-07-11)

| Check | Result | Notes |
|-------|--------|-------|
| iMessage preview — bare apex `ardavanmir.com` | **Partial fail** | Title renders; thumbnail blank. Apex HTTPS cert mismatch (`*.github.io`); iMessage falls back to page snapshot and errors |
| `public/og-image.jpg` added | **Pass** | 1200×630 JPEG; listed first in `og:image` |
| Absolute OG/Twitter/apple-touch URLs | **Pass** | All share assets use `https://www.ardavanmir.com/...` via `lib/site.ts` |
| PNG OG fallback retained | **Pass** | Secondary `og:image` for other platforms |
| `pnpm build` | **Pass** | 6 static pages; `out/og-image.jpg` exported |
| Homepage / case-study body content | **Unchanged** | Metadata-only change |
| CNAME / deploy workflow | **Unchanged** | Apex DNS/TLS fix remains outside repo |
| iMessage re-test (www URL) | **TODO** | Owner: paste `https://www.ardavanmir.com/` after deploy |
| LinkedIn / Slack unfurl | **TODO** | Owner sign-off pending |

### Final share-preview validation logged (2026-07-11, post PR #20)

**Production commit:** `77d3172` (PR #20 — Replace broken social preview image)

| Check | Result | Notes |
|-------|--------|-------|
| Live OG metadata — `/` | **Pass** | Primary `og:image` → `og-image-v2.jpg` |
| Live OG metadata — `/research` | **Pass** | Sprint 8 route included in validation scope |
| Live OG metadata — IES | **Pass** | Primary `og:image` → `og-image-v2.jpg` |
| Live OG metadata — QBOA | **Pass** | Primary `og:image` → `og-image-v2.jpg` |
| `/og-image-v2.jpg` direct load | **Pass** | HTTP 200; 1200×630 JPEG |
| `/og-image.jpg` in live metadata | **Pass (absent)** | Deprecated file still hosted; not referenced in HTML |
| Stale metadata cache | **None observed** | Live HTML matches expected; LinkedIn cache not scraped |
| Route-specific OG images needed? | **No** | Root v2 JPEG sufficient for launch |
| Apex domain HTTPS | **Still broken** | `https://ardavanmir.com` fails; share `www` URLs |
| LinkedIn Post Inspector | **TODO** | Owner sign-off pending — all four routes |
| Slack unfurl | **TODO** | Owner sign-off pending — all four routes |
| iMessage preview | **TODO** | Owner sign-off pending — use full www URLs |

See `share-preview-validation.md` — **Final validation results** section.

## Remaining issues

- Ask Ardavan start prompt links to QBOA but not IES (IES has dedicated prompt — acceptable)
- Production apex vs `www` redirect — verify DNS outside repo (see SOT-07)
- Route-specific OG images not created (root v2 image used for all routes)
- Owner manual LinkedIn / Slack / iMessage unfurl pass pending — see `share-preview-validation.md`
- Apex domain (`ardavanmir.com`) HTTPS/TLS broken — fix at registrar/DNS outside repo; share `www` URLs until fixed

## Deployment config

- `CNAME`: `www.ardavanmir.com` — unchanged
- `.github/workflows/deploy.yml` — unchanged
- `next.config.mjs` — unchanged

## Recommended next sprint

**Portfolio maintenance / optional polish**

- Complete manual LinkedIn / Slack / iMessage share-preview pass (Ardavan)
- Optional route-specific OG images for case studies
- Verified earlier experience / résumé expansion after approval
- Apex → www redirect verification outside repo
