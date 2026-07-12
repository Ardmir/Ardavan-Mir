# Portfolio Changelog (Sprint Docs)

## 2026-07-12 — Adaptive motion baseline and Design Twin roadmap

- Recorded `ab704c3` as the production Adaptive Decision Space motion baseline; reduced motion remains mandatory.
- Reconciled production documentation with the live adaptive homepage, shared work/research folios, résumé, and merged Sprint 9A.
- Recorded warm umber `#765026` as the canonical accent and muted blueberry `#314A87` as an experimental semantic AI/research accent only.
- Completed the Design Twin documentation investigation with decision status `PROCEED_WITH_TEXT_PROTOTYPE`.
- Defined a text-first, cited, public-source-only, separately entered experiment with static Ask Ardavan fallback.
- No Design Twin implementation, API, route, dependency, vendor upload, voice, face, avatar, or production approval was performed.
- Kept manual iMessage, LinkedIn, and Slack share-preview checks as TODO pending dated evidence.
- Marked production-host ownership, repository-wide TypeScript, current QA evidence, and PR #24 closure as P0 stabilization work.

## 2026-07-12 — Adaptive Decision Space production migration

- Promoted the approved adaptive manuscript to `/`.
- Unified IES, QBOA, research index, and research essay routes through one manuscript/weave folio system.
- Preserved canonical claims, URLs, metadata, citations, public-safe boundaries, and deployment configuration.
- Verified static build, desktop/mobile route rendering, console output, responsive overflow, Reading Lens, Reading Depth, and contextual Ask Ardavan.
- Recorded Ardavan's explicit production approval in D-018.

## 2026-07-12 — Adaptive Decision Space representative prototype

- Added isolated `/explorations/adaptive-decision-space` route; production homepage unchanged
- Implemented Opening + Reading Lens, Evidence + Reading Depth, and contextual Ask Ardavan + provenance
- Added one typed canonical adaptive-content model sourced from existing public-safe portfolio copy
- Added manual passage disclosure, local-only reading persistence, and Reset my reading
- Verified all lens/depth states, keyboard activation, desktop/tablet/mobile layouts, console health, static export, and canonical route regression loads
- Recorded complete V4/V5 Claude handoff as unavailable; visual decisions remain explicitly provisional
- Left NX-04 user comprehension, screen-reader, contrast, and cultural-integrity validation open

## 2026-07-12 — Adaptive Decision Space / Progressive Woven Manuscript planning

- Approved an isolated next-generation portfolio prototype program; no production redesign was implemented
- Defined Living Manuscript as the stable canonical interface and The Weave as a progressively earned identity/relationship layer
- Defined Reading Lens, Reading Dial, Decision Space stage, contextual Ask Ardavan, provenance, and local returning-visit behavior
- Required all adaptation to be deterministic, explainable, reversible, accessible, and backed by one approved content model
- Added a dedicated concept SOT, IA/design-system updates, decisions D-016/D-017, and gated NX-00–NX-06 execution backlog
- Preserved the live Glass Monolith site, public claims, routes, CNAME, deployment, dependencies, and application code

## 2026-07-12 — Sprint 9A — Architectures of Intent public research article

- Published public-safe Architectures of Intent essay at `/research/ai-native-strategy`
- Converted locked approved article into typed content source (no new Markdown/MDX dependency)
- Added nine verified public endnotes and source list
- Added three sanitized abstract visuals (spectrum, archetype map, trust loop)
- Updated Research index, homepage research card href, and Ask Ardavan research links
- Added publication SOT and updated research, roadmap, claims, and visual-plan docs
- No raw research, private claims map, redaction log, review report, résumé, CNAME, deploy, or dependency changes

## 2026-07-11 — Log final share-preview validation results

- Logged final manual share-preview validation results after OG image v2 fix.
- Re-verified production post PR #20 deploy (`77d3172`): automated/metadata **Pass** on `/`, `/research`, IES, and QBOA
- `/og-image-v2.jpg` resolves HTTP 200; primary `og:image` on all four HTML routes
- Old `/og-image.jpg` not referenced in live metadata (deprecated asset still hosted)
- Stale metadata: none observed in live HTML
- Route-specific OG images: not needed for launch
- Apex HTTPS still broken — share `www` URLs
- LinkedIn / Slack / iMessage owner unfurl sign-off remains **TODO**
- Docs-only update; no code, asset, résumé, CNAME, or deploy workflow changes

## 2026-07-11 — Replace broken social preview image

- Discovered `public/og-image.jpg` and `public/og-image.png` were XML error-page screenshots, not portfolio OG artwork
- Root cause: invalid control character in `public/og-image.svg` `aria-label` broke SVG rasterization
- Fixed SVG source; regenerated clean PNG fallback; added cache-busting `public/og-image-v2.jpg` (1200×630)
- Updated `lib/site.ts` primary OG/Twitter URL to `https://www.ardavanmir.com/og-image-v2.jpg`
- Updated share-preview validation and production QA SOT docs
- No homepage/case-study body, résumé PDF, CNAME, deploy workflow, dependency, or new claim changes
- Apex DNS/TLS fix remains external follow-up; retest with full `www` URL

## 2026-07-11 — Sprint 8 — Research & Strategy Layer

- Added public-safe SOT coverage for AI-native strategy research, GitHub-based design collaboration, and AI-native platform pattern research (`research-strategy-sot.md`)
- Added `content/research.ts` canonical source for three research proof points
- Added compact Research & Strategy homepage section (`#research-strategy`)
- Added `/research` route with three public-safe research summaries and sanitized visuals
- Added Ask Ardavan research prompt (“What kind of research do you do?”)
- Updated roadmap, claims log, and sanitized visual plan
- Preserved guardrails around private feedback, internal documents, internal names, screenshots, and unverified claims
- No résumé PDF, CNAME, deploy workflow, dependency, or case-study body changes

## 2026-07-11 — Share preview metadata fix

- Added `public/og-image.jpg` (1200×630 JPEG) as primary `og:image` for share crawlers; kept PNG as secondary fallback
- Updated root and case-study metadata to use absolute `https://www.ardavanmir.com/...` URLs for OG, Twitter, favicon, and apple-touch-icon assets via `lib/site.ts`
- Logged iMessage partial failure when sharing bare apex `ardavanmir.com` (HTTPS/TLS cert mismatch); documented retest with `www` URL
- Updated `share-preview-validation.md` and production QA log
- No homepage/case-study body, résumé PDF, CNAME, deploy workflow, dependency, or new claim changes
- Apex DNS/TLS fix remains external follow-up at registrar level

## 2026-07-11 — Manual share-preview validation results logged

- Logged structured manual validation results in `share-preview-validation.md`
- Re-verified live OG metadata and asset checks for `/`, IES, and QBOA — **Pass**
- LinkedIn Post Inspector, Slack unfurl, and iMessage preview remain **TODO** (owner sign-off pending)
- Confirmed route-specific OG images not required for launch
- Docs-only update; no code, content, asset, or deploy changes

## 2026-07-11 — Portfolio Sprint 7 — Share Validation + Final Launch Audit

- Validated production routes, résumé PDF, OG/favicon assets, and live share metadata on `www.ardavanmir.com`
- Documented automated share-preview pass (Pass) and manual LinkedIn/Slack/iMessage TODOs
- Audited Ask Ardavan, accessibility, mobile, and console/hydration health — no code fixes required
- Updated `share-preview-validation.md`, production QA log, roadmap, and changelog
- Preserved claims and NDA guardrails; no résumé, deploy, dependency, or content changes

## 2026-07-10 — Portfolio Sprint 6 — QBOA Polish + Share Validation

- Polished QBOA case study visuals and added classification ambiguity → reporting confidence arc
- Added design focus section at `#classification-to-confidence`
- Added Ask Ardavan suggested-next prompt chips (V1.5)
- Created `share-preview-validation.md` with manual validation workflow
- Updated QBOA SOT, sanitized visual plan, claims log, roadmap, and production QA log
- Preserved public-safe claim guardrails; no metrics, launch, or adoption claims
- No résumé PDF, IES body, homepage positioning, deploy config, or dependency changes
- Route-specific OG images deferred (optional future improvement)

## 2026-07-10 — Portfolio Sprint 5B — IES Future-State Depth

- Expanded IES case study with public-safe future-state exploration section at `#future-state-exploration`
- Added sanitized executive storytelling visuals: framework transfer map, prototype-to-storyboard arc, executive alignment map, future-state exploration model
- Added Ask Ardavan IES anchor link to future-state section
- Updated IES case study SOT, executive storytelling SOT, sanitized visual plan, claims log, and roadmap
- Preserved NDA guardrails and avoided unverified outcomes
- No résumé PDF, homepage positioning, QBOA, deploy config, or dependency changes

## 2026-07-10 — Portfolio Sprint 5A.1 — Résumé PDF Regeneration

- Regenerated `public/resume-ardavan-mir.pdf` from `content/resume.md` using local ReportLab (outside repo dependencies)
- Added `resume-pdf-generation.md` with method, checks, and manual fallback steps
- Preserved public path `/resume-ardavan-mir.pdf`
- No new claims, metrics, or confidential content added

## 2026-07-10 — Portfolio Sprint 5A — Verified Résumé Polish

- Updated résumé source to align with current portfolio positioning
- Kept résumé claims public-safe and qualitative
- Preserved verification notes in SOTs, not public résumé source
- Did not update public PDF unless generation workflow was verified
- Pre-merge tighten: restructured Intuit roles, removed placeholders from résumé source

## 2026-07-10 — Portfolio Sprint 4 — Executive Storytelling Proof Layer

- Added public-safe homepage proof section: “What teams bring me in for”
- Added ambiguity → alignment arc visual and four proof cards
- Added Ask Ardavan V1.5 guided prompt with anchor link to proof section
- Updated executive storytelling SOT, roadmap, claims log, and sanitized visual plan
- Preserved guardrails around private recognition, internal teams, executive audiences, event names, and prototype details
- No public claim changes beyond approved abstract positioning

## 2026-07-10 — Portfolio Sprint 3.2 — Share Polish

- Added share image and favicon assets (`og-image.svg`, `og-image.png`, `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`)
- Added or improved root and case-study Open Graph / Twitter / icons metadata
- Preserved public-safe content and deployment configuration
- No content claims changed

## 2026-07-10 — Portfolio Sprint 3.1 — Production QA + Share Readiness

- Added `production-qa-log.md` with routes, links, accessibility, mobile, SEO, and deployment checks
- Fixed IES header back-link focus-visible state
- Added `metadataBase`, canonical URL, and Open Graph `url` / `siteName` in root layout
- Documented OG image and favicon as TODOs (no new assets in this sprint)
- No new public claims, metrics, or confidential content

## 2026-07-10 — Sprint documentation update — Executive storytelling and future prototypes

- Added `executive-storytelling-and-future-prototypes-sot.md` for future-state IES exploration, adjacent product prototype adaptation, and leadership/investor-facing demo storytelling
- Captured this work as future portfolio opportunity, not public copy
- Updated portfolio roadmap, claims log, IES case study SOT, and sanitized visual plan
- Marked sensitive details as PRIVATE_CONTEXT / VERIFY
- Preserved guardrails around internal names, executive audiences, event names, prototype details, and unverified outcomes

## 2026-07-10 — Portfolio Sprint 3 — IES visual polish + QBOA case study foundation

- Polished IES abstract visuals: system map, human judgment checkpoint, captions, visual hierarchy
- Added QBOA public-safe case study route at `/work/quickbooks-dimensional-chart-of-accounts`
- Added QBOA sanitized visuals and SOT
- Linked homepage QBOA card and Ask Ardavan start prompt to QBOA case study
- Added project-card abstract thumbnails (IES, QBOA, Iranians Who Design)
- Archived duplicate local résumé PDFs outside repo (`../portfolio-local-archive/`)
- Polished QBOA public page status wording (removed “foundation” / “shell” from live copy)
- Continued claims guardrails in portfolio-claims-log.md

## 2026-07-10 — Portfolio Sprint 2.1 — Legacy Claims Cleanup

- Quarantined unverified metrics and risky verbs from legacy unused components (`projects.tsx`, `about.tsx`, `hero.tsx`, `contact.tsx`)
- Added `docs/sot/legacy-portfolio-components.md` as internal reference for canonical vs legacy files
- Updated `portfolio-claims-log.md` with DO_NOT_PUBLISH and VERIFY entries for legacy claims
- Softened résumé source recognition bullet in `content/resume.md` (PDF unchanged)
- Removed `[VERIFY]` labels from `content/resume.md`; verification notes live in `portfolio-claims-log.md` only
- Live homepage, IES case study, deployment config, and CNAME unchanged

## 2026-07-09 — Portfolio Sprint 2 — IES Case Study Foundation

- Started Portfolio Sprint 2 — IES Case Study Foundation
- Added public-safe SOT docs: roadmap, claims log, IES case study SOT, sanitized visual plan
- Started IES case study route at `/work/intuit-enterprise-suite`
- Added sanitized abstract visual direction and components
- Linked homepage IES card and Ask Ardavan IES prompt to case study
- Preserved public-content and claims guardrails
