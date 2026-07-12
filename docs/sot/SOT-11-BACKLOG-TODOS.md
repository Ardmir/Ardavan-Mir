# SOT-11 — Backlog and TODOs

Version: 0.3  
Last updated: 2026-07-12  
Status: Active

## Status label reference

Use: `[CONFIRMED]` `[OBSERVED]` `[DECIDED]` `[PROPOSED]` `[INFERRED]` `[VERIFY]` `[BLOCKED]` `[DONE]` `[TODO]`

---

## Immediate verification checklist (unchanged open items)

- `[DONE 2026-06-13]` Preferred email: ardavanmir@outlook.com.
- `[DONE 2026-06-13]` LinkedIn URL: https://linkedin.com/in/ardavanmir.
- `[DONE 2026-06-19]` Glass Monolith homepage merged to `main` and deployed via GitHub Pages.
- `[VERIFY]` Résumé PDF filename and location.
- `[VERIFY]` Exact current title at Intuit (official HR title vs card label).
- `[VERIFY]` Exact Intuit employment dates.
- `[VERIFY]` Exact project dates for IES and QuickBooks Online Advanced / DCoA.
- `[VERIFY]` Exact role on IES IA work and IES AI experiences (scope wording).
- `[VERIFY]` Public-safe names of AI experiences/features.
- `[VERIFY]` Exact impact metrics for IES and DCoA.
- `[DO NOT USE]` ~20% engagement metric unless independently verified.
- `[PARTIAL 2026-06-13]` Iranians Who Design URL confirmed. Scale/reach still `[VERIFY]`.
- `[VERIFY]` Dates/titles/details for Xello, Nobu, The Score, and Toptal.

---

## P0 — Recruiter-facing polish

### P0-01 — Proofread and copy QA

**ID:** P0-01  
**Priority:** P0  
**Status:** `[PARTIAL 2026-07-12]` — migrated copy was reviewed during route QA; an independent final proofread remains open  
**Action:** Verify and fix any spelling/grammar issues and complete a full copy review across hero, Work, Approach, About, and Contact.  
**Reason:** Recruiter-facing polish; prior review flagged a possible “tunning” typo (now verified fixed in repo).  
**Acceptance criteria:**
- No visible spelling or grammar errors.
- Portfolio copy is consistent across hero, Work, Approach, About, and Contact.
- No `[VERIFY]` labels are shown publicly.
**Dependencies:** None.  
**Claims affected:** All public copy.  
**Files likely affected later:** `app/page.tsx`  
**Notes:** `[DONE]` “tunning” → “turning” verified absent in `app/page.tsx` (About uses “turning”).

---

### P0-02 — Contact and résumé clarity

**ID:** P0-02  
**Priority:** P0  
**Status:** `[DONE 2026-07-12]`  
**Action:** Confirm that Email, LinkedIn, and Résumé are visible, labeled, keyboard accessible, and functional.  
**Reason:** `[OBSERVED]` Contact section uses icon-only circular buttons with `aria-label` only; résumé is a disabled dashed icon (“coming soon”).  
**Acceptance criteria:**
- Contact actions do not rely only on icons.
- Every link works.
- Résumé downloads or opens correctly.
- Missing résumé is not shown as a disabled mystery icon.
**Dependencies:** Résumé PDF asset and path from Ardavan.  
**Claims affected:** Contact/résumé claims in SOT-01.  
**Files likely affected later:** `app/page.tsx`  
**Notes:** Email, LinkedIn, and the résumé PDF are visible, labeled, and linked from the adaptive colophon.

---

### P0-03 — Project pathways

**ID:** P0-03  
**Priority:** P0  
**Status:** `[DONE 2026-07-12]`  
**Action:** Add or confirm a clear action on the IES and QuickBooks cards.  
**Reason:** `[OBSERVED]` Flagship cards have no href and no visible CTA; recruiters cannot tell what happens next.  
**Acceptance criteria:**
- Recruiters can tell what happens when interacting with a project.
- No broken or placeholder route is publicly clickable.
- IES and QuickBooks remain the dominant projects.
**Dependencies:** Case-study route decision or interim label (e.g. “Case study in progress”).  
**Claims affected:** None new if labels are non-factual.  
**Files likely affected later:** `app/page.tsx`; future case-study routes.  
**Notes:** Candidate labels: View case study · View NDA-safe case study · Request a private walkthrough · Case study in progress.

---

### P0-04 — Accessibility and readability pass

**ID:** P0-04  
**Priority:** P0  
**Status:** `[TODO]`  
**Action:** Review muted copy, section headings, body weights, focus states, and contrast.  
**Reason:** `[OBSERVED]` Muted `#5E6865` section headings and ultralight monolith titles may affect scanability; Clarity Engine relies on hover/focus/tap expand.  
**Acceptance criteria:**
- Important text does not appear disabled.
- Body copy is comfortable to read on an average laptop.
- Visible keyboard focus exists.
- Reduced-motion behavior works.
- No essential information depends on hover alone.
**Dependencies:** None.  
**Claims affected:** None.  
**Files likely affected later:** `app/globals.css`, `app/page.tsx`, `components/portfolio/clarity-engine.tsx`  
**Notes:** Clarity Engine has `aria-expanded`, focus rings, mobile chevron affordance, and `(hover: hover)` gating — verify in QA.

---

### P0-05 — Claim integrity audit

**ID:** P0-05  
**Priority:** P0  
**Status:** `[TODO]`  
**Action:** Audit every role, project, AI, outcome, and ownership claim on the live homepage.  
**Reason:** Maintain trust; several résumé-level facts remain `[VERIFY]`.  
**Acceptance criteria:**
- No unverified metric is published.
- ~20% engagement figure remains excluded unless proven.
- “Led,” “owned,” and “drove” used only where confirmed.
- Exact Intuit title and dates remain `[VERIFY]` until confirmed.
- Confidential project details remain abstracted.
**Dependencies:** Ardavan confirmation for open `[VERIFY]` items.  
**Claims affected:** SOT-01 entire inventory.  
**Files likely affected later:** `app/page.tsx`, SOT-01, SOT-03.  
**Notes:** `[OBSERVED]` Current homepage uses safe verbs (“Designed”, “Helped shape”, “Created”).

---

## P1 — Case-study evidence

### P1-01 — Import IES source material

**ID:** P1-01  
**Priority:** P1  
**Status:** `[BLOCKED]`  
**Action:** Bring detailed Intuit Enterprise Suite material from the other ChatGPT project into this repo as a source pack.  
**Reason:** IES is the first case study to develop; detailed material lives outside this repo.  
**Acceptance criteria:** Source pack covers context, problem, role, IA work, AI work, constraints, decisions, collaboration, artifacts, outcomes, NDA boundaries, open questions.  
**Dependencies:** User imports or provides prior project material.  
**Claims affected:** IES case-study claims.  
**Files likely affected later:** `docs/sot/source-packs/IES_SOURCE_PACK.md` (preferred).  
**Notes:** Do not invent content while blocked.

---

### P1-02 — Build IES case-study SOT

**ID:** P1-02  
**Priority:** P1  
**Status:** `[BLOCKED]`  
**Action:** Create an NDA-safe IES case-study brief after the source pack exists.  
**Reason:** `[DECIDED]` IES case study first.  
**Acceptance criteria:**
- Problem, role, decisions, and outcome are clear.
- Story demonstrates senior judgment.
- No confidential material exposed.
- Every metric verified or removed.
**Dependencies:** P1-01.  
**Claims affected:** IES public narrative.  
**Files likely affected later:** `docs/sot/` case-study brief; future `/work/ies` or equivalent.  
**Notes:** Required sections per SOT-06.

---

### P1-03 — Import DCOA source material

**ID:** P1-03  
**Priority:** P1  
**Status:** `[BLOCKED]`  
**Action:** Bring QuickBooks Online Advanced / Dimensional Chart of Accounts material into this repo.  
**Reason:** Second priority case study.  
**Acceptance criteria:** Source pack covers advanced accounting complexity, classification, reporting, IA, dimensional models, workflows, tradeoffs.  
**Dependencies:** User imports or provides prior project material.  
**Claims affected:** DCoA case-study claims.  
**Files likely affected later:** `docs/sot/source-packs/DCOA_SOURCE_PACK.md` (preferred).  
**Notes:** Blocked until user provides material.

---

### P1-04 — Build DCOA case-study SOT

**ID:** P1-04  
**Priority:** P1  
**Status:** `[BLOCKED]`  
**Action:** Create NDA-safe DCoA case-study brief.  
**Reason:** Second detailed case study after IES.  
**Acceptance criteria:** Focus on advanced accounting complexity, IA, dimensional models, workflow decisions, scalable patterns, verified or qualitative outcomes, reflection.  
**Dependencies:** P1-03.  
**Claims affected:** DCoA public narrative.  
**Files likely affected later:** `docs/sot/`; future case-study route.  
**Notes:** See SOT-06 structure.

---

### P1-05 — Artifact inventory

**ID:** P1-05  
**Priority:** P1  
**Status:** `[TODO]`  
**Action:** Create an inventory of potential case-study evidence and classify each artifact.  
**Reason:** Case studies must prove judgment with safe evidence, not screens alone.  
**Acceptance criteria:** Each artifact classified as: safe to show · safe after sanitization · abstract diagram · describe only · do not publish.  
**Dependencies:** P1-01 helpful but can start as template.  
**Claims affected:** IES, DCoA artifact claims.  
**Files likely affected later:** `docs/sot/` artifact inventory (new doc or section in SOT-06).  
**Notes:** Potential types: system maps, ERDs, nav models, workflows, IA explorations, decision frameworks, prototype sequences, AI explainability patterns, design-system components, research synthesis.

---

## P2 — Experience optimization

### P2-01 — Navigation evaluation

**ID:** P2-01  
**Priority:** P2  
**Status:** `[PROPOSED]`  
**Action:** Evaluate whether desktop should expose Work / Approach / About / Résumé / Contact while keeping menu trigger on smaller screens.  
**Reason:** `[OBSERVED]` Desktop currently uses Menu-only header; faster recruiter scanning vs minimalism tradeoff.  
**Acceptance criteria:** Decision recorded with benefit/risk; no change until Ardavan approves.  
**Dependencies:** Ardavan decision.  
**Claims affected:** None.  
**Files likely affected later:** `app/page.tsx`, `app/globals.css`  
**Notes:** Benefit: faster scanning. Risk: reduced visual minimalism.

---

### P2-02 — Clarity Engine hierarchy

**ID:** P2-02  
**Priority:** P2  
**Status:** `[PROPOSED]`  
**Action:** Evaluate whether Clarity Engine should remain before Work, be reduced in height, become compact horizontal flow on desktop, or move after first project.  
**Reason:** `[OBSERVED]` Clarity Engine sits between hero and Work; may delay evidence.  
**Acceptance criteria:** Design experiment documented; primary goal is supporting—not overshadowing—Work.  
**Dependencies:** Ardavan design decision.  
**Claims affected:** None.  
**Files likely affected later:** `app/page.tsx`, `components/portfolio/clarity-engine.tsx`  
**Notes:** Not a confirmed change.

---

### P2-03 — Project-card specificity

**ID:** P2-03  
**Priority:** P2  
**Status:** `[PROPOSED]`  
**Action:** Add a concrete “My focus” or “My contribution” line to IES and DCoA after claims are verified.  
**Reason:** `[OBSERVED]` Role labels exist but personal scope is not explicit.  
**Acceptance criteria:** Lines use verified scope only; no invented ownership.  
**Dependencies:** P0-05; IES/DCOA source packs.  
**Claims affected:** IES, DCoA role claims.  
**Files likely affected later:** `app/page.tsx`  
**Notes:** Do not invent scope.

---

### P2-04 — Approach section evidence

**ID:** P2-04  
**Priority:** P2  
**Status:** `[PROPOSED]`  
**Action:** Connect each design principle to a concrete working behavior with project evidence.  
**Reason:** Approach currently states principles without linked proof.  
**Acceptance criteria:** Each principle tied to real project behavior or marked `[VERIFY]`.  
**Dependencies:** P1 source packs.  
**Claims affected:** Approach/principle claims.  
**Files likely affected later:** `app/page.tsx`; case studies.  
**Notes:** Examples: entity mapping; review/provenance states; AI explainability — all `[VERIFY]` until sourced.

---

### P2-05 — Performance and device QA

**ID:** P2-05  
**Priority:** P2  
**Status:** `[TODO]`  
**Action:** Test mobile, tablet, desktop, keyboard-only, reduced motion, production build, console, broken links, loading performance.  
**Reason:** Post-deployment QA requirement.  
**Acceptance criteria:** Checklist in SOT-07 completed; issues logged in backlog.  
**Dependencies:** None.  
**Claims affected:** None.  
**Files likely affected later:** None if pass; otherwise app files.  
**Notes:** Partially done locally; production pass still required.

---

### P2-06 — Résumé alignment

**ID:** P2-06  
**Priority:** P2  
**Status:** `[TODO]`  
**Action:** Ensure portfolio and résumé use the same positioning, project hierarchy, terminology, and verified claims.  
**Reason:** Résumé link not yet live; SOT-03 may drift from shipped homepage.  
**Acceptance criteria:** SOT-03 and SOT-04 aligned; résumé PDF matches when published.  
**Dependencies:** P0-02 résumé asset; open `[VERIFY]` items.  
**Claims affected:** SOT-03, SOT-01.  
**Files likely affected later:** `docs/sot/SOT-03-RESUME-SOT.md`; résumé PDF.  
**Notes:** `[BLOCKED]` on résumé file until provided.

---

## NX — Adaptive Decision Space / Progressive Woven Manuscript

The items below govern the proposed successor experience. They do not authorize production replacement. Full requirements and gates live in `adaptive-decision-space-sot.md`.

### NX-00 — Consolidate Living Manuscript and The Weave sources

**Priority:** NX-0  
**Status:** `[BLOCKED]`  
**Action:** Add the promised V4/V5 production specs, interactive board exports, editable sources, and runtime notes to an approved design-reference location.  
**Acceptance criteria:** Lens, depth, Ask Ardavan, provenance, desktop, mobile, reduced-motion, and keyboard states can be inspected for both systems.  
**Dependencies:** Complete Claude Design handoff package.  
**Production impact:** None.
**2026-07-12 note:** Complete V4/V5 exports were not attached. The representative prototype proceeded from `adaptive-decision-space-sot.md`; inferred decisions are recorded there and must not be mistaken for handoff-validated behavior.

### NX-01 — Define canonical adaptive-content schema

**Priority:** NX-1  
**Status:** `[DONE 2026-07-12]`  
**Action:** Inventory current homepage, case studies, research, résumé, and Ask Ardavan content; assign stage, lens, depth, provenance, and relationship metadata without duplicating claims.  
**Acceptance criteria:** Every adaptive output maps to one approved content block; no separate copy tree per lens.  
**Dependencies:** Current `content/*` and SOT claim sources.  
**Production impact:** None during schema design.
**Implementation:** `content/adaptive-decision-space.ts` defines one typed source model for project, research, stage, lens, depth, provenance, questions, and relationships.

### NX-02 — Produce type and cultural-system specimens

**Priority:** NX-1  
**Status:** `[PARTIAL 2026-07-12]`  
**Action:** Test long-form English reading, display hierarchy, weft colors, sigla/signed knots, colophon, knot-density scale, and structural woven treatments.  
**Acceptance criteria:** Type remains comfortable for long English passages; cultural references are structural and specific rather than ornamental; all state colors pass contrast.  
**Dependencies:** NX-00 helpful; cultural-integrity review.  
**Production impact:** None.
**Implementation:** Provisional manuscript typography, weft colors, sigla, signed knots, colophon, density states, and structural woven treatments are implemented. Independent contrast, type, and cultural-integrity review remain open.

### NX-03 — Build three representative adaptive scenes

**Priority:** NX-2  
**Status:** `[PARTIAL 2026-07-12]`  
**Action:** On an isolated route or branch, prototype Opening + Reading Lens, Evidence + Reading Dial, and Ask Ardavan + provenance.  
**Acceptance criteria:** Includes default, all lenses, all depths, manual overrides, mobile, keyboard, screen-reader, and reduced-motion states.  
**Dependencies:** NX-01 and NX-02.  
**Production impact:** No modification to the production homepage.
**Implementation:** All three scenes, lenses, depths, manual disclosures, contextual answers, persistence/reset, keyboard operation, reduced-motion CSS, and responsive layouts are implemented at `/explorations/adaptive-decision-space`. A real screen-reader pass and participant validation remain open, so NX-03 is not marked fully done.

### NX-04 — Validate the interaction model

**Priority:** NX-3  
**Status:** `[PARTIAL 2026-07-12]` — owner comparison and production approval complete; external participant sessions remain open  
**Action:** Test 30-second recruiter comprehension, hiring-manager evidence discovery, lens/depth understanding, reading comfort, metaphor comprehension, accessibility, performance, and comparison against the current site.  
**Acceptance criteria:** Visitors understand why the page changes; Work remains reachable in one interaction; no fact or essential evidence becomes inaccessible; hybrid improves clarity and memorability.  
**Dependencies:** NX-03.  
**Production impact:** None.

### NX-05 — Build full responsive prototype

**Priority:** NX-4  
**Status:** `[DONE 2026-07-12]`  
**Action:** Implement the full Decision Space spine and integrate current projects, research, About, résumé, Contact, and local-only continuation/reset behavior.  
**Acceptance criteria:** Static export, responsive layout, canonical URLs, direct deep links, accessibility, performance, and content-integrity checks pass.  
**Dependencies:** NX-04 gate passes.  
**Production impact:** Promoted to `/` after explicit owner approval; shared folio system added to all detailed routes.

### NX-06 — Record production go/no-go decision

**Priority:** NX-5  
**Status:** `[DONE 2026-07-12]`  
**Action:** Compare the validated prototype with production and record an explicit migration or stop decision.  
**Acceptance criteria:** Approved preview, migration and rollback plan, updated SOT status, QA plan, metadata/share-asset scope, and explicit Ardavan approval.  
**Dependencies:** NX-05.  
**Production impact:** Approved for commit and merge; decision recorded in D-018.

**2026-07-12 outcome:** Ardavan explicitly approved the prototype and requested commit and merge. The adaptive experience is now implemented at `/`; all work and research routes share the manuscript/weave grammar. Build, route, console, interaction, desktop, and mobile checks passed. D-018 records the production decision.

---

## Deferred infrastructure (from 2026-06-14)

**Status:** `[DECIDED]` `[TODO]` when Ardavan is ready.

1. Vercel dashboard → disconnect project `v0-portfolio`.
2. Remove Vercel domain bindings if any conflict with GitHub Pages.
3. GitHub → revoke Vercel app access to `Ardavan-Mir`.
4. v0.dev → optional disconnect auto-sync.
5. Update root `README.md` to document GitHub Pages (not Vercel/v0).

---

## Legacy checklist (superseded where noted)

The following pre-deployment items are partially complete. Do not treat as blocking unless reopened:

- `[DONE]` Hero copy finalized (Glass Monolith subcopy shipped).
- `[DONE]` Clarity Engine visual built and interactive.
- `[DONE]` LinkedIn and email on homepage.
- `[TODO]` Résumé link.
- `[TODO]` OG image and favicon / AM monogram.
- `[TODO]` NDA-safe diagrams for IES and DCoA.
