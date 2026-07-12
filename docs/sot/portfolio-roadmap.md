# Portfolio Roadmap

Version: 3.0
Last updated: 2026-07-12
Status: Public-safe planning SOT

## Current production baseline

- The Adaptive Decision Space / Progressive Woven Manuscript is production at `/`.
- The motion system at `ab704c3` is the production adaptive-motion baseline.
- The reading-lens discoverability refinement at `7463498` is live.
- IES and QBOA public-safe case studies are live and use the shared manuscript frame.
- Research & Strategy and Architectures of Intent are live; Sprint 9A is merged, not pending review.
- The résumé PDF is live at `/resume-ardavan-mir.pdf`.
- The isolated Adaptive Decision Space route remains a `noindex` reference edition.
- Guided Ask Ardavan remains deterministic, approved, and static.
- Manual iMessage, LinkedIn, and Slack share-preview checks remain `TODO` pending evidence.
- Repository-wide TypeScript is not clean because of known unused calendar/chart component errors.
- Production host ownership is unresolved in the SOT and requires explicit verification.

## Sequencing rule

The current order is stabilization first, then public-content work and bounded experimentation.

> The Design Twin is the next experimental track, not the next production feature.

## P0 — Sprint 9A.1 Adaptive Decision Space Stabilization

Status: **IN PROGRESS — blocks Sprint 9B and production Design Twin work**

Required outcomes:

1. Reconcile SOTs with the current Adaptive Decision Space production state.
2. Record `ab704c3` as the production motion baseline and preserve reduced-motion requirements.
3. Close PR #24 unmerged; its manual share-preview PASS assertions lack evidence and its branch predates the adaptive production baseline.
4. Verify canonical production-host ownership without inferring it from a successful GitHub Pages or Vercel deployment.
5. Restore a clean repository-wide `pnpm exec tsc --noEmit` result; current calendar/chart errors remain open.
6. Establish a current production QA baseline covering motion, reduced motion, keyboard, screen reader, contrast, responsive layouts, Lighthouse, localStorage return behavior, and social-share evidence.
7. Complete an independent claims/copy proofread and retain existing NDA and no-unverified-metrics guardrails.
8. Complete recruiter, accessibility, contrast, and cultural-integrity follow-up validation.

Exit gate:

- PR #24 closed unmerged;
- host ownership explicitly verified and documented;
- TypeScript clean without ignored errors;
- current QA log completed with evidence;
- no unresolved P0 documentation contradiction.

## P1 — Sprint 9B Shared Release Prototypes v2

Status: **BLOCKED until P0 completes**

This is the next public-content track.

Planned scope:

- create a versioned v2 private publication packet rather than overwrite the existing packet;
- reconcile it with the latest portfolio/source audit;
- preserve private-source, redaction, claims, and citation controls;
- produce public-safe article, visual, deck, and implementation materials;
- do not implement a public route until a later explicit approval.

## P1 Experimental — Sprint 10A Design Twin Foundations

Status: **EXPERIMENT APPROVED / PRODUCTION NOT APPROVED**

May run in parallel with Sprint 9B after P0 completes.

Planned scope:

- approved-public corpus manifest and classifications;
- source/owner approval record;
- 40–60 golden questions plus prompt-injection/private-source tests;
- preview-only cited text proof of concept;
- 5–8 recruiter/design-leader sessions;
- explicit AI disclosure, citations, abstention, and static Ask Ardavan fallback;
- no production navigation or integration.

Reference: `ardavan-design-twin-sot.md`.

## P2 Conditional — Sprint 10B Portfolio-ready Text Design Twin

Status: **BLOCKED by Phase 1 evaluation thresholds**

Required before implementation:

- every Design Twin launch threshold passes;
- secure backend and server-only secrets;
- rate limits, abuse controls, kill switch, and static fallback;
- minimal/redacted logging and approved retention rules;
- separate deliberate route;
- explicit production approval.

The text Design Twin cannot replace the Adaptive Decision Space, manuscript, case studies, résumé, or homepage hero.

## P3 — Optional voice experiment

Status: **DEFERRED**

- Consider only after the production text experience demonstrates value.
- Begin with a clearly synthetic generic voice.
- Do not clone Ardavan’s voice initially.
- Do not auto-play voice or video.
- Require a separate accessibility and privacy review.

## P4 — Visual avatar

Status: **DEFERRED / NO CURRENT EVIDENCE OF PORTFOLIO VALUE**

- No face/avatar upload is approved.
- Any future experiment requires separate consent, biometric privacy, retention/deletion, accessibility, and value reviews.
- A talking-avatar homepage treatment is out of scope.

## Completed milestones retained as history

- Sprint 3–8: flagship case studies, résumé, research layer, share assets, and recruiter-facing proof.
- Sprint 9A: Architectures of Intent published at `/research/ai-native-strategy` and merged through PR #25.
- Adaptive Decision Space: promoted to production and extended across work/research folios.
- `ab704c3`: adaptive motion system promoted to production.
- `7463498`: reading-lens console and persistent return control deployed.

## Global guardrails

- No unverified metrics, launch/adoption claims, or inflated ownership language.
- No private feedback, recognition files, internal decks, screenshots, customer data, raw handoffs, or confidential repositories in public or AI corpora.
- Preserve canonical routes, metadata, résumé, CNAME, deployment, and static export unless separately approved.
- Manual social-preview checks remain TODO until date, URL, platform, and evidence are recorded.
- No Design Twin implementation, API, vendor upload, secret creation, voice clone, or avatar work is authorized by this roadmap update.
