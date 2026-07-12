# SOT-09 — Decision Log

Version: 0.2  
Last updated: 2026-07-12  
Status: Active

Use this file for decisions that should persist across ChatGPT/Claude/Cursor sessions.

## D-001 — Primary positioning

Date: 2026-06-13  
Status: Active  
Decision: Position Ardavan as a Senior Product Designer focused on enterprise SaaS, AI-native workflows, financial systems, information architecture, and complex workflow design.  
Rationale: This is the strongest, most recent, and most employable narrative based on IES and QuickBooks work.  
Implications: Homepage, résumé, project cards, and case studies should reinforce this positioning.

## D-002 — Project hierarchy

Date: 2026-06-13  
Status: Active  
Decision: Use Intuit Enterprise Suite as the flagship project, QuickBooks Online Advanced / Dimensional Chart of Accounts as the deep accounting IA case study, and Iranians Who Design as a secondary founder/platform story.  
Rationale: This balances recruiter relevance with differentiation.  
Implications: Do not make Iranians Who Design compete equally with IES and QuickBooks in the main hiring story.

## D-003 — No unverified metrics

Date: 2026-06-13  
Status: Active  
Decision: Do not publish any metric, percentage, adoption number, revenue claim, customer count, engagement lift, or time savings unless verified by Ardavan.  
Rationale: Accuracy is more important than inflated impact.  
Implications: Use `[VERIFY]` placeholders or qualitative outcome language.

## D-004 — Visual identity direction

Date: 2026-06-13  
Status: Active  
Decision: Use a dark charcoal, soft white, electric teal, optional warm coral visual system with generous spacing and restrained AI-native diagrams.  
Rationale: Supports premium enterprise AI × financial clarity positioning.  
Implications: Avoid generic light templates, flashy AI imagery, robots, and heavy 3D.

## D-005 — Launch strategy

Date: 2026-06-13  
Status: Active  
Decision: Launch a polished one-page portfolio first, then expand into full case studies.  
Rationale: The site needs to be recruiter-ready quickly; full case studies can follow.  
Implications: Homepage must clearly state who Ardavan is, what he does, selected work, approach, about, and contact.

## D-006 — Deployment safety

Date: 2026-06-13  
Status: Active  
Decision: Preserve `CNAME`, deployment settings, and repo structure unless explicitly approved. Work in a branch or safe copy.  
Rationale: Existing GitHub Pages/Vercel/v0 setup may already be wired to the domain.  
Implications: AI agents must not delete, reset, or overwrite deployment files.

## D-007 — AI-native but not gimmicky

Date: 2026-06-13  
Status: Active  
Decision: Express AI-native thinking through IA, workflow models, explainability, trust, and decision support — not through chatbot gimmicks or generic AI visuals.  
Rationale: Stronger fit for senior enterprise product design roles.  
Implications: Use “Clarity Engine” / decision layer visual metaphors rather than robots, brains, or chat bubbles.

## Decision template

```text
## D-### — [Decision title]

Date: YYYY-MM-DD
Status: Proposed / Active / Superseded
Decision:
Rationale:
Implications:
Supersedes:
Related changelog entries:
```

## D-008 — Adopt the Legibility Layer as the portfolio system

Date: 2026-06-13  
Status: Active  
Decision: Adopt Legibility Layer as the portfolio design system and narrative structure, with one controlled hero interaction showing complexity resolving into clarity.  
Rationale: Reinforces the positioning ("make financial complexity legible") and the principle ("make the system legible before making it smart") through a single, restrained, enterprise-appropriate motif rather than decorative or looping animation.  
Implications: One-time sweep only (no infinite loops); decorative SVG is aria-hidden; reduced-motion users see the resolved state immediately; keep palette to dark charcoal + soft white + electric teal with coral used sparingly.  
Supersedes: Visual execution of D-007's "Clarity Engine" looping signal-map (intent preserved; D-007 remains active in principle).  
Related changelog entries: 2026-06-13 v0.2

## D-009 — Use the in-repo Next.js build; retire the static rescue artifacts

Date: 2026-06-13  
Status: Active  
Decision: The canonical portfolio is the Next.js app in repo Ardmir/Ardavan-Mir. The Legibility Layer is implemented there (app/page.tsx + components/portfolio/clarity-engine.tsx). The separate static HTML/CSS/JS files generated earlier in the Claude session are retired and must not be copied into the repo.  
Rationale: The live site is Next.js + Tailwind with a GitHub Actions static-export deploy. Dropping static files in would not integrate and would risk breaking the build. The existing in-repo implementation already matches the intended direction and conventions.  
Implications: All future homepage edits happen in the Next.js files. Keep docs/sot/ in the repo so the source of truth travels with the code. PRs target main; deployment is via .github/workflows/deploy.yml (branch trigger to be confirmed before merge).  
Supersedes: Any plan to apply static index.html/styles.css/script.js to the repo.  
Related changelog entries: 2026-06-13 v0.3

## D-010 — No homepage redesign at this stage

Date: 2026-06-19  
Status: Superseded by D-016  
Decision: Do not redesign the portfolio homepage again at this stage.  
Rationale: The deployed Glass Monolith homepage establishes strong identity, positioning, visual system, and hierarchy.  
Implications: Next focus is evidence, case-study depth, recruiter pathways, accessibility, and polish — not another visual concept pass.  
Related changelog entries: 2026-06-19 v0.4

## D-011 — IES case study first

Date: 2026-06-19  
Status: Active  
Decision: Develop the Intuit Enterprise Suite case study before other detailed case studies.  
Rationale: Strongest match for target positioning: enterprise SaaS, AI-native workflows, IA, financial systems, senior product judgment.  
Implications: P1-01/P1-02 take priority; DCoA follows.  
Related changelog entries: 2026-06-19 v0.4

## D-012 — Preserve the Clarity Engine

Date: 2026-06-19  
Status: Active  
Decision: Keep the Clarity Engine as the signature conceptual interaction.  
Constraint: It must support Work evidence rather than overshadow or delay it.  
Implications: P2-02 evaluates hierarchy only as a proposal; no removal without decision.  
Related changelog entries: 2026-06-19 v0.4

## D-013 — Use the current wordmark

Date: 2026-06-19  
Status: Active  
Decision: Continue with “ARDAVAN / MIR” as the portfolio identity (`IALogotype`).  
Rationale: Shipped and cohesive with Glass Monolith system.  
Implications: No logotype redesign in current phase.  
Related changelog entries: 2026-06-19 v0.4

## D-014 — Evidence over additional visual exploration

Date: 2026-06-19  
Status: Superseded as a phase priority by D-016  
Decision: Prioritize case-study evidence, artifacts, decisions, and outcomes over further aesthetic concepting.  
Rationale: Homepage positioning is sufficient; hiring signal now depends on proof depth.  
Implications: P1 backlog prioritized over new visual experiments.  
Related changelog entries: 2026-06-19 v0.4

## D-015 — GitHub Pages is production; Vercel disconnect deferred

Date: 2026-06-19  
Status: Active  
Decision: GitHub Pages on `main` is the production deployment source of truth. Vercel/v0 integration will be disconnected later.  
Rationale: Verified live site on GitHub Pages after merge; Vercel is legacy noise on PR checks.  
Implications: Do not treat Vercel preview as production; follow SOT-11 disconnect checklist when ready.  
Supersedes: Open question in D-006 about which host serves production.  
Related changelog entries: 2026-06-19 v0.4

## D-016 — Prototype the Progressive Woven Manuscript

Date: 2026-07-12  
Status: Active  
Decision: Begin an isolated prototype program for a next-generation Adaptive Decision Space using Living Manuscript as the stable canonical interface and The Weave as a progressively earned identity/relationship layer.  
Rationale: The live portfolio now has flagship case studies, research, résumé, proof, and Ask Ardavan depth. The new direction can use that evidence to demonstrate AI-native adaptation through intent, depth, provenance, and human control rather than decorative AI styling.  
Implications: The production Glass Monolith remains live. Prototype work must happen on an isolated route or branch and pass usability, accessibility, content-integrity, performance, and recruiter-comprehension gates before any replacement decision.  
Supersedes: D-010 and D-014 as current phase priorities; does not yet supersede D-004, D-008, or D-012 in production.  
Related changelog entries: 2026-07-12 — Progressive Woven Manuscript direction and execution plan

## D-017 — Adaptation must be deterministic, explainable, and reversible

Date: 2026-07-12  
Status: Active  
Decision: Dynamic portfolio changes may respond to explicit Reading Lens, Reading Dial, Decision Space stage, opened evidence, and disclosed local returning-visit state. They must not respond randomly or alter canonical facts.  
Rationale: Meaningful adaptation can demonstrate AI-native design judgment; unpredictable themes, hidden personalization, or content drift would reduce trust and usability.  
Implications: Active state is always visible and changeable; essential navigation and content remain stable; local persistence includes reset controls; color and motion are never the sole state indicators; curated editions correspond to real editorial events.  
Related changelog entries: 2026-07-12 — Progressive Woven Manuscript direction and execution plan

## D-018 — Promote Adaptive Decision Space and unify detailed folios

Date: 2026-07-12  
Status: Active  
Decision: Replace the production Glass Monolith homepage with the approved Adaptive Decision Space and carry its manuscript/weave grammar through every public work and research route.  
Rationale: Ardavan reviewed the working prototype, described it as beautiful, explicitly approved it, and requested commit and merge. The legacy dark case-study template created a conceptual and visual break after visitors entered the work.  
Implications: `/` now hosts the adaptive portfolio; IES, QBOA, Research & Strategy, and Architectures of Intent use a shared manuscript frame, six-stage rail, paper/ink/weft tokens, provenance language, and editorial evidence rhythm. Canonical facts, URLs, metadata, citations, public-safe boundaries, CNAME, and hosting configuration remain unchanged. External recruiter testing, screen-reader review, independent contrast review, and cultural-integrity review remain useful follow-up validation rather than migration blockers.  
Supersedes: D-016 as the production phase decision and the Glass Monolith portion of D-004, D-008, and D-012. D-017 remains active.  
Related changelog entries: 2026-07-12 — Adaptive Decision Space production migration
