# Portfolio Roadmap

Version: 1.8  
Last updated: 2026-07-11  
Status: Public-safe

## Current status

- Homepage is live with AI-native legibility positioning
- Résumé PDF is live at `/resume-ardavan-mir.pdf` (regenerated from source in Sprint 5A.1)
- Résumé markdown source aligned with portfolio positioning (`content/resume.md`)
- Static guided Ask Ardavan chat is live
- IES public-safe case study is live at `/work/intuit-enterprise-suite` (future-state depth added in Sprint 5B)
- QBOA public-safe case study is live at `/work/quickbooks-dimensional-chart-of-accounts` (visual polish in Sprint 6)
- OG image, favicon, and share metadata are live (Sprint 3.2)
- Executive storytelling proof layer homepage section is live (Sprint 4)
- Research & Strategy layer in progress (Sprint 8)

## Priority order

### P0 — Keep live site stable

- Preserve accessibility, mobile responsiveness, static export, CNAME, and deployment config
- Avoid confidential content and unverified claims

### P1 — Case study depth

- Polish IES sanitized visuals
- Build QBOA public case study foundation
- Link homepage and Ask Ardavan to QBOA case study
- Add project-card abstract thumbnails

### P2 — Expand portfolio depth

- Executive storytelling and future-state prototype narrative (see `executive-storytelling-and-future-prototypes-sot.md`)
- Ask Ardavan V1.5 suggested next prompts
- Add “What teams bring me in for” proof section
- Deeper private interview walkthrough for sensitive work (outside public repo if needed)

### P3 — Polish and legacy work

- Add writing/thinking note
- Add OG/social preview polish
- Add older projects only after scope and claims are verified

## Sprint 3 scope

Portfolio Sprint 3 — IES visual polish + QBOA case study foundation

- IES visual polish (human judgment checkpoint, captions, hierarchy)
- QBOA case study route at `/work/quickbooks-dimensional-chart-of-accounts`
- QBOA sanitized visuals
- Homepage QBOA link
- Ask Ardavan QBOA link (where supported)
- Project-card abstract thumbnails
- Updated SOT docs and claims log

## Later backlog

- QBOA visual polish and verified artifacts
- Ask Ardavan suggested next prompts
- Proof section expansion
- OG/social preview assets
- IES deeper visual narrative

### P2 — Executive storytelling and future-state prototype narrative

Document and later develop a public-safe portfolio treatment around future-state IES exploration, cross-product concept adaptation, executive-facing functional prototypes, and investor-facing leadership demos.

Reference: `docs/sot/executive-storytelling-and-future-prototypes-sot.md`

## Future sprint candidate — Sprint 4 or later

**Executive Storytelling Proof Layer** — **Completed in Sprint 4**

Delivered:

- “What teams bring me in for” homepage section (`/#what-teams-bring-me-in-for`)
- Ask Ardavan V1.5 prompt: “What do teams bring you in for?”
- Abstract ambiguity → alignment arc visual
- Updated SOT docs and claims log

Still deferred:

- IES case study expansion around future-state exploration
- Private interview walkthrough for executive prototype work
- Sanitized visual storytelling artifacts beyond homepage arc
- Public résumé PDF regeneration from updated source

## Sprint 5A — Verified Résumé Polish — **Completed**

Delivered:

- Updated `content/resume.md` with AI-native enterprise finance positioning
- Added `resume-claims-review.md`
- Updated claims log, roadmap, and changelog
- Did not replace `public/resume-ardavan-mir.pdf` (no safe generation workflow in repo)

## Next sprint — Sprint 5B — IES Future-State Depth — **Completed**

Delivered:

- IES case study expansion around future-state exploration (public-safe, abstract)
- Sanitized executive storytelling visuals: framework transfer map, prototype-to-storyboard arc, executive alignment map, future-state exploration model
- Ask Ardavan IES anchor link to `#future-state-exploration`
- Updated SOT docs and claims log

Still deferred:

- Route-specific OG images for case studies (optional)
- Private interview walkthrough for executive prototype work
- Naming of adjacent product areas, leadership audiences, or investor-facing events

## Next sprint — Sprint 6 — QBOA Polish + Share Validation — **Completed**

Delivered:

- QBOA visual polish: classification grid, reporting context flow, account structure model, review checkpoint, ambiguity → confidence arc
- QBOA design focus section at `#classification-to-confidence`
- Ask Ardavan suggested-next prompt chips (V1.5)
- Share-preview validation SOT (`share-preview-validation.md`)
- Updated claims log, roadmap, production QA log, and changelog

Still deferred:

- Manual LinkedIn / Slack / iMessage share-preview validation (documented in SOT)
- Route-specific OG images (`public/og-ies.png`, `public/og-qboa.png`) — optional future sprint

## Next sprint — Sprint 7 — Share Validation + Final Launch Audit — **Completed**

Delivered:

- Production launch audit: live routes, résumé PDF, OG/favicon assets, share metadata
- Updated `share-preview-validation.md` with Sprint 7 automated results and manual TODOs
- Updated production QA log, roadmap, and changelog
- No code changes required — portfolio share-ready on `www`

Still deferred:

- Manual LinkedIn / Slack / iMessage unfurl validation (steps documented for Ardavan)
- Route-specific OG images (optional)
- Apex domain redirect verification outside repo

## Sprint 8 — Research & Strategy Layer: AI-native operating models

**Priority:** P1 after launch polish and two flagship case studies.

**Rationale:**  
The portfolio already has product case-study depth through IES and QBOA. The next strategic layer should show Ardavan's research, operating-model thinking, and AI-native design strategy without adding too many full case studies.

**Deliverables:**

- Research & Strategy SOT (`research-strategy-sot.md`)
- Research claims log entries
- `content/research.ts` source
- Compact homepage Research & Strategy section
- `/research` route
- Ask Ardavan research prompt
- Sanitized research visual direction
- Changelog update

**Future backlog:**

- P2 — GitHub-Based Design Collaboration detail page
- P2 — AI-Native Platform Patterns detail page / pattern library
- P2 — Architectures of Intent deeper page or external link
- P2 — Research artifact visuals
- P3 — Publish excerpts only if approved
- P3 — Add research links to résumé only if verified and relevant

## Next sprint candidate — Portfolio maintenance

Potential deliverables:

- Complete manual share-preview pass and update SOT results log
- Optional route-specific OG images
- Verified earlier experience / résumé expansion after approval
- Private interview walkthrough (outside public repo if needed)

## Out of scope

- Real AI chat
- Backend/API routes
- Confidential materials in repo
- Unverified metrics
- Production merge without review
