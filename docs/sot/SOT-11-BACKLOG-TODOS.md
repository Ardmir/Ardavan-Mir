# SOT-11 — Backlog and TODOs

Version: 0.5
Last updated: 2026-07-19
Status: Active — P0 stabilization candidate in PR #26

## Status labels

Use: `[CONFIRMED]` `[OBSERVED]` `[DECIDED]` `[PROPOSED]` `[INFERRED]` `[VERIFY]` `[BLOCKED]` `[DONE]` `[TODO]` `[DO NOT USE]`

## Reconciled production facts

- `[DONE]` Adaptive Decision Space / Progressive Woven Manuscript is production at `/`.
- `[DONE]` IES and QBOA public-safe case studies are live; their source-development backlog is no longer “blocked.” Future source work is evidence deepening, not route creation.
- `[DONE]` Research & Strategy and Architectures of Intent are live; Sprint 9A merged through PR #25.
- `[DONE]` Résumé is visible and live at `/resume-ardavan-mir.pdf`.
- `[DONE]` Email and LinkedIn are visible, labeled, and linked.
- `[DONE]` `ab704c3` is the production adaptive-motion baseline.
- `[DONE]` `7463498` improves Reading Lens discoverability with a unified console and persistent return control.
- `[TODO]` Manual iMessage, LinkedIn, and Slack share-preview checks require evidence; PR #24 assertions are not accepted.
- `[CONFIRMED]` GitHub Pages serves canonical `www.ardavanmir.com`; the repo Pages workflow is the deployment authority and Vercel is preview-only.
- `[TODO]` Bare-apex HTTPS has a certificate-name mismatch and requires external DNS/domain remediation.
- `[DONE on PR #26]` Repository-wide TypeScript, lint, and strict production build checks pass without masked errors.

## Open verification guardrails

- `[VERIFY]` Exact official Intuit title and employment dates.
- `[VERIFY]` Exact project dates and public-safe role scope for IES and QBOA.
- `[VERIFY]` Public-safe names of AI experiences or features.
- `[VERIFY]` Any impact metric before publication.
- `[DO NOT USE]` The unverified ~20% or ~26% engagement claims.
- `[VERIFY]` Iranians Who Design reach/scale; the public URL is confirmed.
- `[VERIFY]` Earlier-project dates, titles, roles, and outcomes before expansion.

## P0 — Sprint 9A.1 Adaptive Decision Space Stabilization

### P0-01 — Reconcile the SOT pack

**Status:** `[DONE on PR #26 2026-07-19]`
**Action:** Align current-state documents with the Adaptive Decision Space, live case studies/résumé, merged Sprint 9A, motion baseline, share status, and host ambiguity.
**Acceptance:** No current section describes Glass Monolith as live, case-study routes as blocked, résumé as absent, Sprint 9A as pending, or manual share checks as passed.

### P0-02 — Close PR #24 unmerged

**Status:** `[DONE 2026-07-19 — closed without merge]`
**Action:** Close `log-manual-share-preview-signoff` without merge.
**Reason:** The branch predates Adaptive Decision Space, is nine commits behind the audited baseline, conflicts in `docs/sot/changelog.md`, and supplies no screenshots, inspector record, timestamped URL/platform log, or other evidence for manual PASS claims.
**Acceptance:** PR #24 closed; main retains manual platform checks as TODO.

### P0-03 — Verify production-host ownership

**Status:** `[DONE on PR #26 2026-07-19]`
**Action:** Identify which service canonically owns `www.ardavanmir.com`, its deployment authority, rollback path, and custom-domain configuration.
**Evidence:** Live `www` responses report `server: GitHub.com`; `public/CNAME` and `.github/workflows/deploy.yml` define the custom domain and deployment path. Vercel remains preview-only. Apex HTTPS remains a separate external defect.
**Acceptance:** Production authority, rollback path, custom-domain evidence, and apex limitation are recorded in SOT-07.

### P0-04 — Restore repository-wide TypeScript

**Status:** `[DONE on PR #26 2026-07-19]`
**Action:** Resolve or remove the unused `components/ui/calendar.tsx` and `components/ui/chart.tsx` incompatibilities, then stop masking type errors during builds.
**Acceptance:** `pnpm exec tsc --noEmit` passes and production build no longer depends on `ignoreBuildErrors`.

### P0-05 — Establish the Adaptive production QA baseline

**Status:** `[IN PROGRESS — automated baseline complete on PR #26; human checks remain]`
**Action:** Record evidence for motion, reduced motion, keyboard, screen reader, contrast, mobile/tablet/desktop, Lighthouse, localStorage returning-session behavior, routes, console, and share previews.
**Acceptance:** Date, environment, URL/commit, result, evidence note, and follow-up owner are present for every check.

### P0-06 — Complete independent content and accessibility review

**Status:** `[IN PROGRESS — claim audit and automated accessibility complete; screen reader, recruiter, and cultural reviews remain]`
**Action:** Complete final proofread, claim-integrity audit, recruiter comprehension sessions, screen-reader pass, contrast review, and cultural-integrity review.
**Acceptance:** Issues logged and resolved or explicitly deferred; no unsupported claim is introduced.

### P0-07 — Document motion and semantic color

**Status:** `[DONE on PR #26 2026-07-19]`
**Action:** Record `ab704c3`, mandatory reduced-motion behavior, canonical warm umber `#765026`, and experimental semantic blueberry `#314A87`.
**Acceptance:** Design System, Decision Log, Adaptive SOT, and changelogs agree.

## P1 — Sprint 9B Shared Release Prototypes v2

**Status:** `[BLOCKED]` until P0 exits
**Action:** Prepare the next public-content track as a versioned v2 private packet. Do not overwrite the existing packet.
**Acceptance:** Latest source baseline, redaction, claims, citations, visuals, and implementation brief pass private review before any portfolio route work.

## P1 Experimental — Sprint 10A Design Twin Foundations

**Status:** `EXPERIMENT_APPROVED / PRODUCTION_NOT_APPROVED`
**Start:** May run alongside Sprint 9B after P0 completes.
**Action:**

- classify approved public corpus entries;
- create source and owner approval records;
- create 40–60 golden questions and adversarial/private-source tests;
- build a preview-only cited text proof of concept;
- run 5–8 recruiter/design-leader tests;
- preserve explicit disclosure, citation, abstention, and static Ask Ardavan fallback.

**Acceptance:** Phase 1 evidence is complete; no production integration.

## P2 Conditional — Sprint 10B Portfolio-ready Text Design Twin

**Status:** `[BLOCKED]` by Design Twin thresholds and explicit approval
**Action:** Consider a separate-route text experience only after Phase 1 passes.
**Requirements:** secure backend, server-only secrets, rate limits, kill switch, static fallback, minimal/redacted logging, accessibility, privacy, and verified host ownership.
**Acceptance:** All thresholds in `ardavan-design-twin-sot.md` pass and Ardavan separately approves production.

## P3 — Optional voice experiment

**Status:** `[DEFERRED]`
**Action:** Consider a clearly synthetic generic voice only after text value is proven.
**Not approved:** voice clone, auto-play, production integration, or identity-media upload.

## P4 — Visual avatar

**Status:** `[DEFERRED]`
**Reason:** No current evidence that a visual avatar improves portfolio value.
**Not approved:** face upload, talking-avatar homepage, lip sync, biometric processing, or vendor upload.
**Future gate:** separate consent, privacy, retention/deletion, accessibility, and demonstrated-value review.

## Deferred optional polish

- Route-specific OG images, only if share differentiation justifies them.
- Verified expansion of earlier experience.
- Private interview walkthroughs outside the public repo.
- Additional curated editions only after a real editorial event.

## Explicit non-tasks in this documentation branch

- No application, content, asset, résumé, dependency, API, route, deployment, CNAME, or secret changes.
- No Design Twin implementation, vendor upload, model selection, voice, or avatar work.
- No recognition, colleague-feedback, private-research, or unsupported-outcome content.
