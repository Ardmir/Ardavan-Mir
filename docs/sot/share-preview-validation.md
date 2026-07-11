# Share Preview Validation

Version: 1.0  
Last updated: 2026-07-10  
Status: Manual validation workflow

## Purpose

Document how to validate Open Graph, Twitter card, and link-preview behavior after metadata or share-asset changes. Automated checks in CI cannot fully verify how LinkedIn, Slack, or iMessage render previews.

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

| Field | Expected value |
|-------|----------------|
| Title | Ardavan Mirhosseini — Senior Product Designer |
| Description | Senior Product Designer designing AI-native enterprise products, financial workflows, information architecture, and high-trust product experiences. |
| Image | `/og-image.png` |

### IES case study

| Field | Expected value |
|-------|----------------|
| Title | Defining an AI-native target state for enterprise finance — Ardavan Mirhosseini |
| Description | A public-safe case study about shaping AI-native product direction, information architecture, trust patterns, and storytelling for complex enterprise finance workflows. |
| Image | `/og-image.png` (shared root OG until route-specific assets are approved) |

### QBOA case study

| Field | Expected value |
|-------|----------------|
| Title | Designing information architecture for advanced accounting workflows — Ardavan Mirhosseini |
| Description | A public-safe case study about shaping advanced accounting workflows, dimensional classification, reporting clarity, and information architecture. |
| Image | `/og-image.png` (shared root OG until route-specific assets are approved) |

## Results log

| URL | Tool | Date | Title | Description | Image | Pass/Fail | Notes |
|-----|------|------|-------|-------------|-------|-----------|-------|
| `/` | — | — | — | — | — | TODO | Run LinkedIn Post Inspector after next deploy |
| `/work/intuit-enterprise-suite` | — | — | — | — | — | TODO | |
| `/work/quickbooks-dimensional-chart-of-accounts` | — | — | — | — | — | TODO | |
| `/og-image.png` | Browser | — | — | — | — | TODO | Confirm 200 + 1200×630 |
| `/favicon.svg` | Browser | — | — | — | — | TODO | |

## Remaining TODOs

- Run LinkedIn Post Inspector on all three public HTML routes after Sprint 6 deploy
- Confirm Slack and iMessage unfurls match expected title/description/image
- Optional: create route-specific OG images (`public/og-ies.png`, `public/og-qboa.png`) in a future sprint if share differentiation is worth the effort
- Re-scrape after any metadata or OG asset change (LinkedIn caches aggressively)

## Safety notes

- Do not add confidential screenshots, logos, metrics, or internal product UI to share images
- Route-specific OG images are optional and deferred unless trivial to produce in existing visual style
