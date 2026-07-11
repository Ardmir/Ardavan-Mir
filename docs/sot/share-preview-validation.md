# Share Preview Validation

Version: 1.2  
Last updated: 2026-07-11  
Status: Automated/metadata validation pass; manual social unfurl checks TODO (owner sign-off pending)

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
| `/og-image.png` direct load | **Pass** | HTTP 200; 1200×630 PNG |
| `/favicon.svg` direct load | **Pass** | HTTP 200 |
| `/apple-touch-icon.png` direct load | **Pass** | HTTP 200 |
| Twitter card metadata | **Pass** | `summary_large_image` on all three HTML routes |

### Manual checks (TODO — run by Ardavan)

| Check | Result | Notes |
|-------|--------|-------|
| LinkedIn Post Inspector — `/` | **TODO** | Paste URL at https://www.linkedin.com/post-inspector/ |
| LinkedIn Post Inspector — IES | **TODO** | Confirm title, description, image after scrape |
| LinkedIn Post Inspector — QBOA | **TODO** | Confirm title, description, image after scrape |
| Slack unfurl — all three URLs | **TODO** | Paste in private channel or DM |
| iMessage preview — all three URLs | **TODO** | Paste on iOS/macOS |
| Facebook Sharing Debugger | **Optional** | Only if Meta preview behavior matters |

### Route-specific OG images

**Still deferred.** All three HTML routes use root `public/og-image.png`. Per-route titles and descriptions are correct; differentiation is optional future polish — **not needed for launch**.

## Manual validation results (logged 2026-07-11)

**Production commit:** `b3ce281` (Sprint 7 merge)  
**Re-verified:** 2026-07-11 via live HTML scrape and direct asset checks  
**Owner social unfurl sign-off:** Not yet completed — LinkedIn / Slack / iMessage remain TODO

### Global asset checks

| Asset | Result | Notes |
|-------|--------|-------|
| `/og-image.png` | **Pass** | HTTP 200; 1200×630 PNG |
| `/favicon.svg` | **Pass** | HTTP 200 |
| `/favicon-32x32.png` | **Pass** | HTTP 200 |
| `/apple-touch-icon.png` | **Pass** | HTTP 200 |
| Favicon in browser tab | **Pass (expected)** | Icons declared in root layout metadata |
| Stale metadata cache | **None observed** | Live HTML OG tags match expected values; LinkedIn cache not scraped |

### 1. Homepage

**URL:** https://www.ardavanmir.com/

| Platform | Result | Notes |
|----------|--------|-------|
| Live HTML / OG metadata | **Pass** | Title, description, and `og:image` match expected values |
| LinkedIn Post Inspector | **TODO** | Owner manual step — not yet confirmed |
| Slack unfurl | **TODO** | Owner manual step — not yet confirmed |
| iMessage preview | **TODO** | Owner manual step — not yet confirmed |

### 2. IES case study

**URL:** https://www.ardavanmir.com/work/intuit-enterprise-suite

| Platform | Result | Notes |
|----------|--------|-------|
| Live HTML / OG metadata | **Pass** | Title, description, and `og:image` match expected values |
| LinkedIn Post Inspector | **TODO** | Owner manual step — not yet confirmed |
| Slack unfurl | **TODO** | Owner manual step — not yet confirmed |
| iMessage preview | **TODO** | Owner manual step — not yet confirmed |

### 3. QBOA case study

**URL:** https://www.ardavanmir.com/work/quickbooks-dimensional-chart-of-accounts

| Platform | Result | Notes |
|----------|--------|-------|
| Live HTML / OG metadata | **Pass** | Title, description, and `og:image` match expected values |
| LinkedIn Post Inspector | **TODO** | Owner manual step — not yet confirmed |
| Slack unfurl | **TODO** | Owner manual step — not yet confirmed |
| iMessage preview | **TODO** | Owner manual step — not yet confirmed |

### Route-specific OG images — still needed?

**No — not required for launch.** Root `og-image.png` loads correctly and is referenced on all three HTML routes. Route-specific images (`public/og-ies.png`, `public/og-qboa.png`) remain optional future polish if share differentiation is desired.

## URLs to test

| URL | Route |
|-----|-------|
| https://www.ardavanmir.com/ | Homepage |
| https://www.ardavanmir.com/work/intuit-enterprise-suite | IES case study |
| https://www.ardavanmir.com/work/quickbooks-dimensional-chart-of-accounts | QBOA case study |
| https://www.ardavanmir.com/resume-ardavan-mir.pdf | Résumé PDF (link only — not expected to have OG metadata) |

## Direct asset checks

| Asset | URL |
|-------|-----|
| OG image | https://www.ardavanmir.com/og-image.png |
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
| Image | `https://www.ardavanmir.com/og-image.png` | **Pass** |

### IES case study

| Field | Expected value | Sprint 7 live |
|-------|----------------|---------------|
| Title | Defining an AI-native target state for enterprise finance — Ardavan Mirhosseini | **Pass** |
| Description | A public-safe case study about shaping AI-native product direction, information architecture, trust patterns, and storytelling for complex enterprise finance workflows. | **Pass** |
| Image | `https://www.ardavanmir.com/og-image.png` | **Pass** |

### QBOA case study

| Field | Expected value | Sprint 7 live |
|-------|----------------|---------------|
| Title | Designing information architecture for advanced accounting workflows — Ardavan Mirhosseini | **Pass** |
| Description | A public-safe case study about shaping advanced accounting workflows, dimensional classification, reporting clarity, and information architecture. | **Pass** |
| Image | `https://www.ardavanmir.com/og-image.png` | **Pass** |

## Results log

| URL | Tool | Date | Title | Description | Image | Pass/Fail | Notes |
|-----|------|------|-------|-------------|-------|-----------|-------|
| `/` | Live HTML scrape | 2026-07-11 | Pass | Pass | Pass | **Pass** | Automated metadata check |
| `/work/intuit-enterprise-suite` | Live HTML scrape | 2026-07-11 | Pass | Pass | Pass | **Pass** | Automated metadata check |
| `/work/quickbooks-dimensional-chart-of-accounts` | Live HTML scrape | 2026-07-11 | Pass | Pass | Pass | **Pass** | Automated metadata check |
| `/og-image.png` | Browser/curl | 2026-07-11 | — | — | 1200×630 | **Pass** | HTTP 200 |
| `/favicon.svg` | Browser/curl | 2026-07-11 | — | — | — | **Pass** | HTTP 200 |
| `/` | LinkedIn Post Inspector | — | — | — | — | **TODO** | Manual step for Ardavan |
| `/work/intuit-enterprise-suite` | LinkedIn Post Inspector | — | — | — | — | **TODO** | Manual step for Ardavan |
| `/work/quickbooks-dimensional-chart-of-accounts` | LinkedIn Post Inspector | — | — | — | — | **TODO** | Manual step for Ardavan |
| All three HTML routes | Slack unfurl | — | — | — | — | **TODO** | Manual step for Ardavan |
| All three HTML routes | iMessage preview | — | — | — | — | **TODO** | Owner manual step — not yet confirmed |

## Manual validation log (2026-07-11)

Structured results recorded in **Manual validation results** section above. Automated/metadata checks **Pass** for all three HTML routes. LinkedIn, Slack, and iMessage unfurl checks remain **TODO** pending owner sign-off.

## Manual steps for Ardavan

1. Open https://www.linkedin.com/post-inspector/
2. Paste each URL (`/`, IES, QBOA); click **Inspect**
3. Confirm title, description, and image match expected values above
4. If cached incorrectly, use Inspector refresh and re-check after a few minutes
5. Paste each URL into Slack (private channel) and iMessage; confirm unfurl card
6. Update the results log in this file with Pass/Fail and date

## Remaining TODOs

- Complete LinkedIn Post Inspector pass for all three HTML routes and update Pass/Fail in this file
- Confirm Slack and iMessage unfurls match expected title/description/image
- Optional: create route-specific OG images (`public/og-ies.png`, `public/og-qboa.png`) if share differentiation is worth the effort
- Re-scrape after any metadata or OG asset change (LinkedIn caches aggressively)
- Verify apex domain behavior outside repo if `ardavanmir.com` should redirect to `www`

## Safety notes

- Do not add confidential screenshots, logos, metrics, or internal product UI to share images
- Route-specific OG images are optional and deferred unless trivial to produce in existing visual style
