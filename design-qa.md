# Design QA — Ardavan Mir / Staff Product Designer framing

## Comparison target

- Source visual truth: `/Users/ArdavanM/.codex/.chatgpt-projects/g-p-685f4c13ea84819192f6b6379b1aab2e/portfolio/qa/source-role-desktop.jpg` and `/Users/ArdavanM/.codex/.chatgpt-projects/g-p-685f4c13ea84819192f6b6379b1aab2e/portfolio/qa/source-role-mobile.jpg`
- Rendered implementation: `http://localhost:4311/`
- Implementation screenshots: `/Users/ArdavanM/.codex/.chatgpt-projects/g-p-685f4c13ea84819192f6b6379b1aab2e/portfolio/qa/implementation-role-desktop.jpg` and `/Users/ArdavanM/.codex/.chatgpt-projects/g-p-685f4c13ea84819192f6b6379b1aab2e/portfolio/qa/implementation-role-mobile.jpg`
- Route/state: homepage, light theme, top of page, public/unauthenticated, `Systems & craft` lens, `Open weave` depth.

## Viewport and normalization

| Surface | CSS viewport | Source pixels | Implementation pixels | Density | Normalization |
|---|---:|---:|---:|---:|---|
| Desktop | 1440×900 | 1432×895 | 1432×895 | 1× / 1× | None; content captures exclude browser chrome and match pixel dimensions. |
| Mobile | 390×844 | 382×827 | 382×827 | 1× / 1× | None; content captures exclude browser chrome and match pixel dimensions. |

## Full-view comparison evidence

- Desktop side-by-side: `/Users/ArdavanM/.codex/.chatgpt-projects/g-p-685f4c13ea84819192f6b6379b1aab2e/portfolio/qa/comparison-role-desktop.jpg`
- Mobile side-by-side: `/Users/ArdavanM/.codex/.chatgpt-projects/g-p-685f4c13ea84819192f6b6379b1aab2e/portfolio/qa/comparison-role-mobile.jpg`
- Result: composition, hierarchy, grid, rail, navigation, hero wrapping, CTA placement, responsive structure, and selected-state treatment remain faithful. Intentional content changes are the shorter `Ardavan Mir` wordmark, `Staff Product Designer · Toronto` eyebrow, and end-to-end positioning statement.

## Focused comparison evidence

- Brand and positioning crop: `/Users/ArdavanM/.codex/.chatgpt-projects/g-p-685f4c13ea84819192f6b6379b1aab2e/portfolio/qa/comparison-role-brand-positioning.jpg`
- Result: the shortened wordmark and longer role title retain the source baseline, font treatments, alignment, and whitespace. The new title fits without clipping or crowding.

## Findings

- No actionable P0, P1, or P2 differences.
- Fonts and typography: display, serif italic, body, and monospaced metadata families, weights, line heights, and hierarchy match the source. New copy wraps cleanly at desktop and mobile sizes.
- Spacing and layout rhythm: header, page margins, stage rail, hero offsets, grid alignment, CTA spacing, and mobile vertical rhythm remain consistent.
- Colors and visual tokens: paper, ink, selected teal, rules, and low-opacity grid use the same tokens and contrast relationships.
- Image quality and asset fidelity: no page imagery or decorative assets were replaced. The regenerated share JPEG and PNG were inspected at 1200×630 and render the Ardavan Mir / Staff Product Designer text cleanly.
- Copy and content: `Staff Product Designer` is the public-facing headline; end-to-end scope is expressed as product vision through product quality. The official Intuit role remains `Staff Designer` in the résumé chronology.
- Icons and affordances: lens icon, selected indicators, rail state, links, and buttons retain their source styling and alignment.
- Accessibility and responsiveness: no horizontal overflow at 390px; semantic pressed states, unfolding controls, and résumé link remain functional. The updated résumé document audit reports zero high, medium, or low findings.

## Primary interactions tested

- Reading Lens selection changes `aria-pressed` state.
- Reading Depth selection works at mobile width.
- `Unfold this passage` reveals `Return to selected depth`, which restores the selected depth.
- Résumé link resolves to `/resume-ardavan-mir.pdf`.
- Page title, description, Open Graph title, and wordmark use `Ardavan Mir` and `Staff Product Designer`.
- Browser console errors: none (`[]`).

## Comparison history

1. Initial comparison used the live production site as the visual source and matched desktop/mobile viewport, density, lens, depth, and scroll state.
2. The first implementation pass found no P0/P1/P2 difference. A P3 content-density opportunity remained in the mobile supporting paragraph.
3. The supporting paragraph was tightened while preserving the end-to-end vision-to-quality message.
4. Revised desktop and mobile screenshots were recaptured and recombined with the source. No actionable P0/P1/P2 findings remain.

## Implementation checklist

- [x] Preserve the live visual system and responsive behavior.
- [x] Shorten the public portfolio name to Ardavan Mir.
- [x] Frame the public role as Staff Product Designer with end-to-end scope.
- [x] Preserve Staff Designer as the official experience title.
- [x] Update résumé, metadata, and social-share artwork.
- [x] Verify desktop, mobile, interactions, console, typecheck/lint, and production export.

## Follow-up polish

- After the GoDaddy DNS conflict is repaired and the site deploys, refresh LinkedIn, Slack, and iMessage preview caches and confirm the new social card.

final result: passed
