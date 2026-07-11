# Portfolio Changelog (Sprint Docs)

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
