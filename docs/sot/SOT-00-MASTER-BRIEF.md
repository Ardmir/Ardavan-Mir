# SOT-00 — Master Brief

Version: 0.3  
Last updated: 2026-07-12  
Status: Active

## Project objective

Create a modern, elegant, AI-native, recruiter-ready portfolio and résumé for Ardavan Mirhosseini, a Senior Product Designer based in Toronto.

The portfolio must communicate senior-level product judgment, enterprise product experience, information architecture depth, and AI-native workflow design — especially in financial systems and complex business software.

## Current project phase

**Adaptive Decision Space production integration and validation.**

`[CONFIRMED]` The portfolio homepage has been implemented, committed, and deployed (Glass Monolith re-skin merged to `main`, 2026-06-19; GitHub Pages deploy succeeded).

`[CONFIRMED]` The project has moved from homepage implementation into recruiter-facing polish, accessibility review, case-study development, and claim verification.

`[OBSERVED]` Since the June phase decision, the résumé, flagship case studies, Ask Ardavan, executive-storytelling proof, and Research & Strategy layer have been implemented.

`[DECIDED]` Ardavan approved the Adaptive Decision Space / Progressive Woven Manuscript for production on 2026-07-12 and requested commit and merge. The adaptive manuscript is now the current implementation direction.

## Primary positioning

`[CONFIRMED]` Ardavan Mirhosseini is a Toronto-based Senior Product Designer focused on enterprise SaaS, AI-native workflows, financial systems, information architecture, and complex workflow design.

## Core message

`[CONFIRMED]` “I design intelligent products that turn financial complexity into confident action.”

## Design philosophy

`[CONFIRMED]` “Make the system legible before making it smart.”

`[OBSERVED]` This philosophy appears in the Clarity Engine footer on the deployed homepage. It is no longer a separate hero line.

## Shipped hero subcopy (2026-06-19)

`[OBSERVED]` “I work across enterprise SaaS, AI-native workflows, and financial systems — making complexity legible.”

## Current design direction

`[CONFIRMED]` Editorial paper-and-ink manuscript with restrained weft accents, adaptive reading behavior, visible provenance, and a six-stage Decision Space.

`[OBSERVED]` Background `#05070A`; primary text `#F4F7F6`; teal accent `#31F5D4`; muted metadata `#5E6865`; Inter ultralight monolith typography for hero, section headings, and project titles.

## Next-generation design exploration

`[DECIDED]` Prototype the **Progressive Woven Manuscript** within the **Adaptive Decision Space** architecture.

- Living Manuscript is the stable source-of-truth interface.
- The Weave emerges through explicit visitor choices and reading behavior.
- Decision Space provides the Ambiguity → Structure → Prototype → Evidence → Story → Alignment spine.
- Reading Lens controls emphasis and recommended paths.
- Reading Dial controls pre-authored information depth.
- Contextual Ask Ardavan provides deterministic approved guidance.
- Adaptation must be deterministic, explainable, reversible, accessible, and local-only where persistence is used.

Reference: `docs/sot/adaptive-decision-space-sot.md`.

## Current identity

`[CONFIRMED]` Wordmark: **ARDAVAN / MIR** (`components/ia-logotype.tsx`; “Mir” muted `#5E6865`).

## Current flagship hierarchy

`[CONFIRMED]` `[OBSERVED]`

1. Intuit Enterprise Suite — flagship card (`01`, role label “Senior Product Designer”).
2. QuickBooks Online Advanced — Dimensional Chart of Accounts — flagship card (`02`, role label “Product Designer”).
3. Iranians Who Design — supporting founder initiative (de-emphasized row; external link live).

## Recruiter perception goal

Within 5 seconds, recruiters should understand:

- Ardavan is a Senior Product Designer.
- His strongest current domain is enterprise SaaS and financial systems.
- He has recent Intuit / QuickBooks / Intuit Enterprise Suite experience.
- He has worked on information architecture and AI-native experiences.
- His design strength is simplifying complexity with clarity, trust, and intelligent product behavior.

## Hiring manager perception goal

After reading the work section, hiring managers should see Ardavan as someone who can:

- Structure ambiguous product areas.
- Design information architecture for complex systems.
- Translate AI capabilities into trustworthy human workflows.
- Work in enterprise SaaS and financial/accounting contexts.
- Tell a clear product story without overclaiming confidential metrics.

## Professional review findings (2026-06-19)

Verified against current repo (`app/page.tsx`, `app/globals.css`, `components/portfolio/clarity-engine.tsx`) and production HTML at `https://www.ardavanmir.com` after merge.

| Finding | Status | Notes |
|--------|--------|-------|
| Site strongly communicates seniority, enterprise AI, financial systems, and IA | `[OBSERVED]` | Hero, Work labels, Approach principles align. |
| Visual identity is cohesive and distinctive | `[OBSERVED]` | Glass Monolith palette, monolith type, teal accents, ARDAVAN/MIR logotype. |
| Site demonstrates positioning and taste more than detailed product-design evidence | `[OBSERVED]` | No case-study pages or artifact depth from homepage. |
| Flagship project cards lack clear pathways into deeper work | `[OBSERVED]` | IES and QBO cards have `href: null`; no case-study CTA. |
| Case-study depth not visible from homepage | `[OBSERVED]` | Expected at this phase; backlog P1 addresses. |
| Contact actions rely on icon-only buttons | `[OBSERVED]` | Email/LinkedIn/Résumé icons with `aria-label` only; résumé disabled. |
| Desktop navigation uses Menu trigger, not exposed links | `[OBSERVED]` | Fullscreen overlay nav for all breakpoints in header. |
| Muted text / section labels may need contrast review | `[OBSERVED]` `[PROPOSED]` | Eyebrow and section headings use `#5E6865`; body uses `#A8B3B0`. |
| Some display typography may be heavy/light for long reading | `[OBSERVED]` `[PROPOSED]` | Monolith titles at weight 100; body at weight 300. |
| Clarity Engine appears before Work | `[OBSERVED]` | Section order: Hero → Clarity Engine → Work. |
| About copy “tunning” typo | `[DONE]` | Verified `app/page.tsx` uses “turning”; not present in repo. |
| IES/QBO cards need clearer personal contribution statement | `[OBSERVED]` | Role labels present; no dedicated “My focus” line yet (P2-03). |
| No unsupported metrics published | `[OBSERVED]` | No percentage or engagement claims on homepage. |
| Hero CTA buttons removed | `[DONE]` `[OBSERVED]` | “View selected work” / “Get in touch” not in shipped `app/page.tsx`. |
| Work section titled “Work” not “Selected work” | `[DONE]` `[OBSERVED]` | Shipped heading uses “Work”. |

## Current priority projects

1. Intuit Enterprise Suite — flagship enterprise AI / IA / financial workflows story.
2. QuickBooks Online Advanced — Dimensional Chart of Accounts — deep advanced accounting IA/workflow case study.
3. Iranians Who Design — secondary founder/community platform story showing initiative, identity, IA, and storytelling.

## Secondary / earlier projects

Use only if verified and relevant:

- QuickBooks Classes 2.0
- Xello Elementary
- Nobu Brand Strategy
- The Score
- Toptal

## Portfolio hierarchy

Primary hiring narrative:

Enterprise SaaS → AI-native workflows → financial systems → IA / clarity / trust → Intuit / QuickBooks.

Secondary differentiation:

Founder energy → community platform → identity / visibility / discoverability → Iranians Who Design.

## Non-negotiables

- Do not invent metrics.
- Do not publish unverified percentages or impact figures.
- Do not use “led,” “owned,” or “drove” unless Ardavan confirms the exact role.
- Keep Intuit/enterprise/financial systems as the main signal.
- Keep Iranians Who Design as a secondary founder/platform story, not the top project.
- Maintain a clean, premium, minimalist, responsive, accessible experience.
- Preserve deployment configuration and CNAME unless explicitly approved.
- Do not change CNAME, hosting, DNS, or production branch during documentation/case-study work without explicit approval.

## What the portfolio should feel like

Enterprise AI × calm financial clarity × senior design craft.

## What the portfolio should not feel like

- Generic template.
- Dark-mode Dribbble gallery.
- AI chatbot gimmick.
- Flashy startup landing page.
- Student portfolio.
- Résumé pasted onto a website.
- Overdesigned 3D experiment.

## Current working concept

Concept name: Clarity Engine

Creative thesis: Ardavan designs the layer between complex business systems, AI intelligence, and human judgment — making enterprise financial workflows understandable, trustworthy, and actionable.

`[DECIDED]` Keep the Clarity Engine as the signature conceptual interaction, but it must support Work evidence rather than delay it (see D-013).

## Source basis

This SOT is based on the current ChatGPT project context, competitive portfolio research, the portfolio update plan, Ardavan’s clarifications on IES IA and AI work, and the post-deployment Glass Monolith implementation merged 2026-06-19.
