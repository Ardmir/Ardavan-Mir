# Share Preview Validation

Version: 1.6  
Last updated: 2026-07-12  
Status: Automated/metadata **Pass** post PR #20; **manual platform checks pending** — iMessage / LinkedIn / Slack not final PASS until owner provides real results

## Purpose

Document how to validate Open Graph, Twitter card, and link-preview behavior after metadata or share-asset changes. Automated checks in CI cannot fully verify how LinkedIn, Slack, or iMessage render previews.

## Sprint 7 validation status

**Audit date:** 2026-07-11  
**Production base:** `https://www.ardavanmir.com` (post Sprint 6 deploy, commit `21c302a`)

### Automated checks (completed in Sprint 7)

| Check | Result | Notes |
|-------|--------|-------|
| Homepage OG title/description/image | **Pass** | Matches expected values in live HTML |
| IES OG title/description/image | **Pass** | Matches expected values in live HTML |
| QBOA OG title/description/image | **Pass** | Matches expected values in live HTML |
| `/og-image-v2.jpg` direct load | **Pass (after deploy)** | HTTP 200; 1200×630 JPEG — primary share image (cache-busting v2) |
| `/og-image.png` direct load | **Pass (after deploy)** | HTTP 200; 1200×630 PNG — regenerated from fixed SVG; secondary fallback |
| `/og-image.jpg` direct load | **Deprecated** | Old primary JPEG contained broken XML error screenshot — do not use |
| `/favicon.svg` direct load | **Pass** | HTTP 200 |
| `/apple-touch-icon.png` direct load | **Pass** | HTTP 200 |
| Twitter card metadata | **Pass** | `summary_large_image` on all three HTML routes |

### Manual checks (TODO — run by Ardavan)

**Status: manual platform checks pending — not final PASS.**

| Check | Result | Notes |
|-------|--------|-------|
| LinkedIn Post Inspector — `/` | **TODO** | Not manually tested yet |
| LinkedIn Post Inspector — `/research` | **TODO** | Not manually tested yet |
| LinkedIn Post Inspector — IES | **TODO** | Not manually tested yet |
| LinkedIn Post Inspector — QBOA | **TODO** | Not manually tested yet |
| Slack unfurl — all four URLs | **TODO** | Not manually tested yet |
| iMessage preview — all four URLs | **TODO** | Not manually tested yet; use `https://www.ardavanmir.com/...` |
| Facebook Sharing Debugger | **Optional** | Only if Meta preview behavior matters |

### Route-specific OG images

**Still deferred.** All four HTML routes use root `og-image-v2.jpg` (primary) with PNG fallback. Per-route titles and descriptions are correct; differentiation is optional future polish — **not needed for launch**.

## Final validation results (post PR #20 deploy — 2026-07-11)

**Production commit:** `77d3172` (PR #20 — Replace broken social preview image)  
**Re-verified:** 2026-07-11 via live HTML scrape and direct asset checks on production (PR #23 docs)  
**Owner social unfurl sign-off:** **Manual platform checks pending** — not final PASS

### Summary

| Question | Answer |
|----------|--------|
| Stale metadata appeared? | **Not observed** in automated HTML/metadata checks; manual social-platform cache checks still **TODO** |
| Route-specific OG images still needed? | **No** — not needed for launch based on current validation |
| Apex domain still broken? | **Yes** — external DNS/TLS follow-up; share `www` URLs only |
| `/og-image-v2.jpg` resolved successfully? | **Yes / Pass** — live asset resolves; primary in metadata per automated validation |
| Old broken `/og-image.jpg` appeared anywhere? | **No** — not in live metadata; still hosted as deprecated asset |

### Global asset checks

| Asset | Result | Notes |
|-------|--------|-------|
| `/og-image-v2.jpg` | **Pass** | Live asset resolves and is primary in metadata per automated validation |
| `/og-image.png` | **Pass** | HTTP 200; 1200×630 PNG — secondary fallback |
| `/og-image.jpg` | **Deprecated** | Still HTTP 200 on server; not referenced in live metadata |
| `/favicon.svg` | **Pass** | HTTP 200 |
| `/favicon-32x32.png` | **Pass** | HTTP 200 |
| `/apple-touch-icon.png` | **Pass** | HTTP 200 |
| Stale metadata cache | **Not observed (automated)** | Manual social-platform cache checks still **TODO** |

### Manual platform checks — pending (2026-07-12)

**Status:** Manual platform checks pending. Do **not** treat iMessage / LinkedIn / Slack as final PASS until owner provides real results.

#### 1. Homepage

**URL:** https://www.ardavanmir.com/

| Platform | Result | Notes |
|----------|--------|-------|
| Direct HTML / metadata | **Pass** | Automated — primary `og:image` → `og-image-v2.jpg` |
| `/og-image-v2.jpg` direct asset | **Pass** | Live asset resolves; primary in metadata per automated validation |
| iMessage | **TODO** | Not manually tested yet |
| LinkedIn Post Inspector | **TODO** | Not manually tested yet |
| Slack unfurl | **TODO** | Not manually tested yet |

#### 2. Research

**URL:** https://www.ardavanmir.com/research

| Platform | Result | Notes |
|----------|--------|-------|
| Direct HTML / metadata | **Pass** | Automated — primary `og:image` → `og-image-v2.jpg` |
| iMessage | **TODO** | Not manually tested yet |
| LinkedIn Post Inspector | **TODO** | Not manually tested yet |
| Slack unfurl | **TODO** | Not manually tested yet |

#### 3. IES case study

**URL:** https://www.ardavanmir.com/work/intuit-enterprise-suite

| Platform | Result | Notes |
|----------|--------|-------|
| Direct HTML / metadata | **Pass** | Automated — primary `og:image` → `og-image-v2.jpg` |
| iMessage | **TODO** | Not manually tested yet |
| LinkedIn Post Inspector | **TODO** | Not manually tested yet |
| Slack unfurl | **TODO** | Not manually tested yet |

#### 4. QBOA case study

**URL:** https://www.ardavanmir.com/work/quickbooks-dimensional-chart-of-accounts

| Platform | Result | Notes |
|----------|--------|-------|
| Direct HTML / metadata | **Pass** | Automated — primary `og:image` → `og-image-v2.jpg` |
| iMessage | **TODO** | Not manually tested yet |
| LinkedIn Post Inspector | **TODO** | Not manually tested yet |
| Slack unfurl | **TODO** | Not manually tested yet |

### Route-specific OG images — still needed?

**No — not needed for launch based on current validation.** Root `og-image-v2.jpg` is referenced on all four HTML routes. Route-specific images remain optional future polish.

## URLs to test

| URL | Route |
|-----|-------|
| https://www.ardavanmir.com/ | Homepage |
| https://www.ardavanmir.com/research | Research & Strategy |
| https://www.ardavanmir.com/work/intuit-enterprise-suite | IES case study |
| https://www.ardavanmir.com/work/quickbooks-dimensional-chart-of-accounts | QBOA case study |
| https://www.ardavanmir.com/resume-ardavan-mir.pdf | Résumé PDF (link only — not expected to have OG metadata) |

## Direct asset checks

| Asset | URL |
|-------|-----|
| OG image | https://www.ardavanmir.com/og-image-v2.jpg |
| OG PNG fallback | https://www.ardavanmir.com/og-image.png |
| OG SVG source | https://www.ardavanmir.com/og-image.svg |
| Favicon | https://www.ardavanmir.com/favicon.svg |

## Tools

1. **LinkedIn Post Inspector** — https://www.linkedin.com/post-inspector/  
   Paste each URL; confirm title, description, and image refresh after deploy.

2. **Slack** — Paste URL in a private channel or DM; confirm unfurl card.

3. **iMessage** — Paste URL on iOS/macOS; confirm link preview.

4. **Browser** — Open `/og-image.png` directly; confirm 200 and correct dimensions (1200×630).

5. **Optional: Facebook Sharing Debugger** — https://developers.facebook.com/tools/debug/  
   Use if Facebook/Meta preview behavior matters.

## Expected share metadata

### Homepage (`/`)

| Field | Expected value | Sprint 7 live |
|-------|----------------|---------------|
| Title | Ardavan Mirhosseini — Senior Product Designer | **Pass** |
| Description | Senior Product Designer designing AI-native enterprise products, financial workflows, information architecture, and high-trust product experiences. | **Pass** |
| Image | `https://www.ardavanmir.com/og-image-v2.jpg` | **Pass** |

### Research (`/research`)

| Field | Expected value | Sprint 8 live |
|-------|----------------|---------------|
| Title | Research & Strategy — Ardavan Mirhosseini | **Pass** |
| Description | Public-safe research on AI-native product strategy, design collaboration, and platform patterns. | **Pass** |
| Image | `https://www.ardavanmir.com/og-image-v2.jpg` | **Pass** |

### IES case study

| Field | Expected value | Sprint 7 live |
|-------|----------------|---------------|
| Title | Defining an AI-native target state for enterprise finance — Ardavan Mirhosseini | **Pass** |
| Description | A public-safe case study about shaping AI-native product direction, information architecture, trust patterns, and storytelling for complex enterprise finance workflows. | **Pass** |
| Image | `https://www.ardavanmir.com/og-image-v2.jpg` | **Pass** |

### QBOA case study

| Field | Expected value | Sprint 7 live |
|-------|----------------|---------------|
| Title | Designing information architecture for advanced accounting workflows — Ardavan Mirhosseini | **Pass** |
| Description | A public-safe case study about shaping advanced accounting workflows, dimensional classification, reporting clarity, and information architecture. | **Pass** |
| Image | `https://www.ardavanmir.com/og-image-v2.jpg` | **Pass** |

## Results log

| URL | Tool | Date | Title | Description | Image | Pass/Fail | Notes |
|-----|------|------|-------|-------------|-------|-----------|-------|
| `/` | Live HTML scrape | 2026-07-11 | Pass | Pass | Pass (v2) | **Pass** | Post PR #20 deploy (`77d3172`) |
| `/research` | Live HTML scrape | 2026-07-11 | Pass | Pass | Pass (v2) | **Pass** | Post PR #20 deploy |
| `/work/intuit-enterprise-suite` | Live HTML scrape | 2026-07-11 | Pass | Pass | Pass (v2) | **Pass** | Post PR #20 deploy |
| `/work/quickbooks-dimensional-chart-of-accounts` | Live HTML scrape | 2026-07-11 | Pass | Pass | Pass (v2) | **Pass** | Post PR #20 deploy |
| `/og-image-v2.jpg` | Browser/curl | 2026-07-11 | — | — | 1200×630 | **Pass** | HTTP 200; primary share image |
| `/og-image.png` | Browser/curl | 2026-07-11 | — | — | 1200×630 | **Pass** | HTTP 200; secondary fallback |
| `/og-image.jpg` | Browser/curl | 2026-07-11 | — | — | — | **Deprecated** | Still hosted; not in live metadata |
| `/favicon.svg` | Browser/curl | 2026-07-11 | — | — | — | **Pass** | HTTP 200 |
| All four HTML routes | LinkedIn Post Inspector | 2026-07-12 | — | — | — | **TODO** | Not manually tested yet |
| All four HTML routes | Slack unfurl | 2026-07-12 | — | — | — | **TODO** | Not manually tested yet |
| All four HTML routes | iMessage preview | 2026-07-12 | — | — | — | **TODO** | Not manually tested yet; use www URLs |

## Manual validation log (2026-07-12)

**Manual platform checks pending** — not final PASS. Automated/metadata checks **Pass** for all four HTML routes post PR #20 / PR #23. iMessage, LinkedIn, and Slack remain **TODO** until owner provides real results.

## Manual steps for Ardavan

1. Open https://www.linkedin.com/post-inspector/
2. Paste each URL (`/`, `/research`, IES, QBOA); click **Inspect**
3. Confirm title, description, and image match expected values above
4. If cached incorrectly, use Inspector refresh and re-check after a few minutes
5. Paste each URL into Slack (private channel) and iMessage; confirm unfurl card
6. Update the results log in this file with Pass/Fail and date

## Broken OG asset root cause (2026-07-11)

**Observed after metadata fix deploy:** iMessage still showed a broken preview image — the JPEG itself was wrong, not just metadata.

**Root cause:** `public/og-image.svg` contained an invalid control character (`0x14`) in `aria-label`, causing SVG→PNG/JPEG exports to render an XML error page (“Below is a rendering of the page up to the first error.”). Both `public/og-image.png` and `public/og-image.jpg` were corrupted error screenshots.

**Fix:**

1. Repaired `public/og-image.svg` (invalid character removed)
2. Regenerated clean PNG fallback from fixed SVG
3. Added cache-busting primary asset: `public/og-image-v2.jpg` (1200×630)
4. Updated `lib/site.ts` to point primary OG/Twitter images to `https://www.ardavanmir.com/og-image-v2.jpg`

**Retest:** Use full `https://www.ardavanmir.com/` URL (not bare apex). Apex DNS/TLS remains external follow-up.

## iMessage thumbnail failure (2026-07-11)

**Observed:** Sharing `ardavanmir.com` in iMessage shows the correct title but a blank preview area with “Below is a rendering of the page up to the first error.”

**Root causes:**

1. **Apex HTTPS is broken.** `https://ardavanmir.com` presents a `*.github.io` certificate (no SAN for `ardavanmir.com`). iMessage cannot fetch OG assets or page HTML over HTTPS on the apex host.
2. **HTTP apex redirects correctly** (`http://ardavanmir.com` → `301` → `https://www.ardavanmir.com/`), but iMessage may still attempt HTTPS on the shared host first.
3. **Fallback page snapshot fails** on the heavy Next.js HTML when OG image fetch does not succeed.

**In-repo fix (deployed in metadata PR; asset fix in v2 PR):**

- ~~Add `public/og-image.jpg`~~ → superseded by `/og-image-v2.jpg` after broken asset discovery
- Use absolute `https://www.ardavanmir.com/...` URLs for share assets
- Keep regenerated PNG as secondary fallback

**Out-of-repo fix (recommended):**

- Configure apex DNS at registrar so `ardavanmir.com` redirects to `www.ardavanmir.com` with valid HTTPS, **or** share links as `https://www.ardavanmir.com/...` until DNS is fixed

**Re-test after deploy:**

1. Paste `https://www.ardavanmir.com/` in iMessage (not bare apex)
2. Confirm thumbnail shows the OG image
3. Optionally re-test apex after DNS fix

## Remaining TODOs

- Complete LinkedIn Post Inspector pass for all four HTML routes and update Pass/Fail in this file
- Confirm Slack and iMessage unfurls match expected title/description/image on all four routes
- Re-test iMessage with full `https://www.ardavanmir.com/...` URLs (not bare apex)
- Fix apex domain HTTPS at registrar/DNS so bare `ardavanmir.com` shares work (outside repo)
- Optional: remove deprecated `/og-image.jpg` from hosting if no longer needed (low priority)
- Optional: create route-specific OG images (`public/og-ies.png`, `public/og-qboa.png`) if share differentiation is worth the effort
- Re-scrape after any metadata or OG asset change (LinkedIn caches aggressively)

## Safety notes

- Do not add confidential screenshots, logos, metrics, or internal product UI to share images
- Route-specific OG images are optional and deferred unless trivial to produce in existing visual style
