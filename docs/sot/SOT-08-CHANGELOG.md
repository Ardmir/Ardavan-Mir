# SOT-08 — Changelog

Version: 0.1  
Last updated: 2026-06-19  
Status: Active

Use this file every time something changes.

## Format

```text
YYYY-MM-DD — vX.X — Change title
Type: Strategy / Content / Design / Resume / Tech / Deployment / Verification / Prompt
Changed by: ChatGPT / Claude / Cursor / Ardavan / Other
Files affected:
Summary:
Decision links:
Verification needed:
Next action:
```

## Change history

### 2026-06-13 — v0.1 — Created Portfolio SOT pack
Type: Strategy / Content / Design / Tech / Prompt  
Changed by: ChatGPT  
Files affected: all SOT files  
Summary: Created living source-of-truth structure for portfolio, résumé, case studies, design system, deployment, prompts, changelog, and decision log.  
Decision links: D-001, D-002, D-003, D-004, D-005, D-006  
Verification needed: email, LinkedIn, résumé link, exact titles, exact dates, Intuit metrics, AI experience specifics, case study artifacts.  
Next action: Upload SOT files to ChatGPT Project and use them as project knowledge.

### 2026-06-13 — v0.1 — Confirmed strongest positioning direction
Type: Strategy  
Changed by: ChatGPT / Ardavan  
Files affected: SOT-00, SOT-01, SOT-02, SOT-03, SOT-04  
Summary: Established primary positioning around Senior Product Designer, Toronto, enterprise SaaS, AI-native workflows, financial systems, IES IA, IES AI experiences, and QuickBooks Online Advanced.  
Verification needed: exact public-safe wording for IES AI experiences.  
Next action: Validate résumé and portfolio copy against actual work details.

### 2026-06-13 — v0.1 — Set portfolio project hierarchy
Type: Content / Strategy  
Changed by: ChatGPT  
Files affected: SOT-02, SOT-04  
Summary: Prioritized Intuit Enterprise Suite first, QuickBooks Online Advanced / Dimensional Chart of Accounts second, Iranians Who Design third as founder initiative.  
Verification needed: project dates, exact role, metrics, and screenshots.  
Next action: Build homepage and create case study outlines.

### 2026-06-13 — v0.1 — Established no-unverified-metrics rule
Type: Verification  
Changed by: ChatGPT  
Files affected: SOT-01, SOT-02, SOT-03, SOT-06  
Summary: Any unverified metrics, including a possible 20% engagement claim, must be removed or marked `[VERIFY]`.  
Verification needed: all impact data.  
Next action: Collect verified metrics or use qualitative outcome language.

## Add new entries below

### YYYY-MM-DD — vX.X — [Change title]
Type: [Strategy / Content / Design / Resume / Tech / Deployment / Verification / Prompt]  
Changed by: [Name/tool]  
Files affected: [SOT/file list]  
Summary: [What changed?]  
Decision links: [D-### if applicable]  
Verification needed: [What still needs proof?]  
Next action: [What happens next?]

### 2026-06-13 — v0.2 — Implemented Legibility Layer homepage (static site)
Type: Design / Content / Tech  
Changed by: Claude  
Files affected: index.html, styles.css, script.js (in safe copy: ardavan-portfolio-legibility-layer-copy); SOT-08, SOT-09  
Summary: Rebuilt the one-page homepage to the Legibility Layer direction. New hero copy and H1 ("I design AI-native enterprise products that make financial complexity legible."), principle line ("Make the system legible before making it smart."), text-only proof strip, three curated work cards (IES, QBOA — Dimensional Chart of Accounts, Iranians Who Design), four-principle Approach section, About, and Contact. Replaced the looping signal-map hero with a custom SVG/CSS "Legibility Layer" motif (single teal sweep, runs once, no loop, prefers-reduced-motion shows resolved state). Updated color tokens to brief palette (--bg #0B0F10, --teal #31F5D4, --coral #FF7A66, etc.). Hardened script.js to honor reduced motion.  
Claims removed per SOT-01: the published "engagement lift around 20%" on the QBOA card ([DO NOT USE]); "Lead design" language; placeholder email (hello@ardavanmir.com); generic LinkedIn link; broken resume link to a non-existent assets/ PDF; unverified Iranians Who Design URL. All converted to TODO[VERIFY] HTML comments rather than published as fact.  
Decision links: D-008  
Verification needed: email, LinkedIn URL, résumé file/path, IES/QBOA exact role + dates + AI surfaces, Iranians Who Design URL + scale, case-study routes.  
Next action: Ardavan to supply verified contact details and confirm the IWD URL; then restore live links and add case-study routes. Do not push until approved.

### 2026-06-13 — v0.3 — Verified contact details and project role labels
Type: Verification  
Changed by: Claude (confirmed by Ardavan)  
Files affected: SOT-01  
Summary: Ardavan confirmed the following, moved from `[VERIFY]` to `[CONFIRMED]`: contact email ardavanmir@outlook.com; LinkedIn https://linkedin.com/in/ardavanmir; IES project card role label "Senior Product Designer"; QBOA/Dimensional Chart of Accounts card role label "Product Designer" (intentionally distinct from IES); Iranians Who Design URL https://iranianxdesign.com/. These are safe to publish on the live site.  
Still unverified: exact official Intuit HR title and employment dates (résumé use); exact project dates; AI feature/surface names; case-study routes; older-work details (Xello, Nobu, The Score, Toptal).  
Decision links: D-009  
Verification needed: résumé title/dates and remaining items above.  
Next action: Add docs/sot/ into the live repo; build and open PR to main.

### 2026-06-13 — v0.3 — Adopted existing in-repo Next.js implementation
Type: Tech / Design  
Changed by: Claude (review)  
Files affected: (code) app/page.tsx, app/layout.tsx, app/globals.css, components/portfolio/clarity-engine.tsx, tailwind.config.ts, next.config.mjs, .github/workflows/deploy.yml  
Summary: Located the canonical repo (Ardmir/Ardavan-Mir, local folder "Ardavan-Mir-portfolio-rescue-copy"). Found an existing, familiar, uncommitted Next.js Legibility Layer build and committed it to branch portfolio-legibility-layer (snapshot d7ff089). Reviewed it against SOT-01: no "20%" metric present, no "led/owned/drove" verbs, résumé correctly held as disabled placeholder. The earlier static HTML/CSS/JS rescue artifacts produced in the Claude session are SUPERSEDED by this Next.js implementation and should not be merged into the repo.  
Decision links: D-009  
Verification needed: none for the items confirmed in v0.3 above.  
Next action: Commit docs/sot/, verify deploy workflow branch, run build, open PR to main.

### 2026-06-19 — v0.4 — Glass Monolith deployed; post-deployment roadmap recorded
Type: Strategy / Content / Design / Deployment / Verification  
Changed by: Cursor (documentation-only pass)  
Files affected: `docs/sot/SOT-00-MASTER-BRIEF.md`, `docs/sot/SOT-01-CLAIMS-AND-VERIFICATION.md`, `docs/sot/SOT-06-CASE-STUDY-SOT.md`, `docs/sot/SOT-07-TECH-DEPLOYMENT-SOT.md`, `docs/sot/SOT-08-CHANGELOG.md`, `docs/sot/SOT-09-DECISION-LOG.md`, `docs/sot/SOT-11-BACKLOG-TODOS.md`, `docs/sot/README.md`  
Summary: Recorded deployed portfolio status after PR #5 merge to `main` and successful GitHub Pages deploy. Documented professional review findings (verified against repo and production), prioritized P0/P1/P2 backlog, case-study plan, new decisions D-010–D-015, post-deployment QA checklist, and claim-verification needs.  
Decision links: D-010, D-011, D-012, D-013, D-014, D-015  
Claim impact: No new public claims introduced. Unverified claims remain `[VERIFY]`.  
Code impact: None.  
Deployment impact: None (documentation only).  
Verification needed: résumé PDF, exact Intuit title/dates, IES/DCOA source packs, apex DNS, OG metadata.  
Next action: Import IES source pack and complete P0 recruiter-facing fixes.
