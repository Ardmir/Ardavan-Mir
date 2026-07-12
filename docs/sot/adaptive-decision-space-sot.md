# Adaptive Decision Space — Progressive Woven Manuscript SOT

Version: 0.3
Last updated: 2026-07-12  
Status: `[APPROVED]` for production by Ardavan on 2026-07-12

## Purpose

Define the production portfolio concept, its invariant content rules, dynamic behavior, information architecture, accessibility constraints, and future extension boundaries.

The Adaptive Decision Space is now the production portfolio source of truth. The Glass Monolith remains historical implementation context only.

## Concept

Working name: **The Progressive Woven Manuscript**  
Product architecture: **The Adaptive Decision Space**

Core idea:

> Every visit begins with the canonical manuscript. As the visitor chooses a lens, changes depth, and moves through the work, their path is woven into the page.

System roles:

- **Living Manuscript** is the stable source of truth: authored content, legibility, hierarchy, provenance, footnotes, and editorial structure.
- **The Weave** is the visitor's reading: selected emphasis, accumulated context, relationships, identity, and depth.
- **Decision Space** is the narrative spine: Ambiguity → Structure → Prototype → Evidence → Story → Alignment.
- **Reading Lens** declares why the visitor is here.
- **Reading Dial** declares how much depth the visitor wants.
- **Ask Ardavan** provides contextual, deterministic guidance from approved content.

The design is one adaptive system, not two themes and not two separate content trees.

## Experience thesis

The manuscript is Ardavan's body of work. The weave is the reader's path through it.

The experience demonstrates AI-native principles through behavior:

- explicit visitor intent;
- progressive disclosure;
- stable canonical facts;
- inspectable emphasis;
- visible provenance;
- contextual guidance;
- human control and reversibility;
- locally persisted context without surveillance.

## Non-negotiable rules

1. Facts, claims, project hierarchy, and URLs do not change between modes.
2. A lens may re-weight, reorder, annotate, or recommend; it may not invent, remove, or contradict facts.
3. Shorter depth settings must name what is omitted and permit per-passage expansion.
4. Navigation, contact, résumé access, headings, focus order, and canonical routes remain stable.
5. The active lens and depth are always visible and changeable.
6. Adaptation is deterministic and explainable. No random theme switching.
7. Color is never the only indicator of lens, depth, state, authorship, or provenance.
8. Motion is optional; reduced-motion users receive the same resolved state immediately.
9. Personalization state is stored locally only, can be reset, and does not require an account.
10. The Weave remains structural—density, relationship, signature, inscription—not ornamental carpet decoration.
11. Ask Ardavan uses approved deterministic answers unless a separately reviewed real-AI system is explicitly authorized later.
12. Production migration requires explicit owner approval, successful static build, content-integrity review, route regression QA, and a reversible Git history.

## Production motion baseline

Commit `ab704c3` is the production Adaptive Decision Space motion baseline.

- Stage progress, lens state, reading depth, evidence emphasis, and provenance use the shared **setting → threading → resolving** vocabulary.
- Motion reinforces relationships already available through text, structure, and state; it never carries essential meaning alone.
- `prefers-reduced-motion` is mandatory and must reveal the same resolved information immediately.
- Focus, reading order, scroll position, and direct navigation must remain usable during and after transitions.
- Motion changes require responsive, keyboard, reduced-motion, and performance regression checks.

## Dynamic state model

### Reading Lens

Initial proposed lenses:

- **Hiring** — emphasizes role clarity, contribution, outcomes, leadership communication, and flagship evidence.
- **AI thinking** — emphasizes explainability, judgment, AI-native principles, research, and trust.
- **Systems & craft** — emphasizes information architecture, workflow modeling, prototypes, visual systems, and execution detail.

Lens behavior:

- re-weights relevant language;
- changes recommended paths and contextual questions;
- introduces a labeled weft/accent treatment;
- explains why content is emphasized;
- does not hide the remaining portfolio.

### Reading Dial

Visitor-facing label: **Reading depth**.  
The woven metaphor may appear secondarily as open, medium, and dense weave.

- **≈2 min / open weave** — positioning, flagship work, strongest evidence, contact.
- **≈10 min / medium weave** — supporting context, process, research, and selected artifacts.
- **Whole story / dense weave** — full passages, provenance, reflections, and case-study routes.

Depth behavior:

- changes content density and typographic setting;
- folds or unfolds pre-authored layers;
- never blocks manual expansion;
- never uses generated filler to bridge missing content.

### Decision Space stage

1. **Ambiguity** — open field; unresolved fragments; minimal weave.
2. **Structure** — grid and relationships begin to form.
3. **Prototype** — annotations, alternatives, and tested representations appear.
4. **Evidence** — densest stage; projects, artifacts, and signed provenance dominate.
5. **Story** — evidence resolves into legible narrative bands.
6. **Alignment** — the reading closes with synthesis, colophon, and contact action.

The stages are a meaning-bearing navigation model, not six mandatory full-screen scroll scenes.

### Contextual Ask Ardavan

- Questions appear as footnotes or marginal prompts where relevant.
- Short answers open as manuscript apparatus.
- Longer answers may expand into restrained cartouches.
- Every answer is labeled as approved/deterministic and links to supporting work or research.
- Related questions may change with lens and stage.
- Ask Ardavan must not become a floating chatbot overlay.

### Returning visit

With clear disclosure and local-only storage, the experience may remember:

- last lens;
- reading depth;
- last stage;
- opened projects/passages;
- viewed questions.

Return prompt example:

> Last time, you explored AI thinking through Evidence. Continue or begin a new reading?

Required controls: **Continue**, **Begin again**, **Reset my reading**.

### Curated editions

Periodic change should correspond to a real editorial event, not arbitrary time:

- a new case study;
- a substantial research publication;
- a deliberate annual portfolio edition;
- an explicitly curated cultural edition such as Nowruz.

Each edition requires a colophon/changelog entry. Seasonal or time-of-day theme switching is not part of the core concept.

## Progressive visual balance

Initial prototype targets, not final production tokens:

| State | Manuscript | Weave | Intent |
|---|---:|---:|---|
| Default entry | 85% | 15% | Immediate clarity and recruiter usability |
| Lens selected | 70% | 30% | Visitor intent becomes visible |
| Medium/deep reading | 60% | 40% | Relationships and density accumulate |
| Evidence/Story peak | 50% | 50% | Cultural/spatial system reaches maximum useful expression |

The experience should not become a fully ornamental carpet interface.

## Content architecture

Use one canonical content model. Do not author separate pages per lens.

Proposed metadata shape:

```ts
type PortfolioBlock = {
  id: string
  type: "project" | "evidence" | "principle" | "research" | "bio" | "contact"
  stages: DecisionStage[]
  lenses: ReadingLens[]
  depth: "summary" | "standard" | "deep"
  readingTimeMinutes: number
  provenance: "verified" | "approved" | "reflection" | "withheld"
  relatedQuestions: string[]
  relatedContent: string[]
}
```

Rendering may change. Source copy and claims remain centralized in `content/*` and `docs/sot/*`.

## Accessibility and usability requirements

- Lens and depth controls use semantic radiogroups or equivalent accessible controls.
- Re-weighted language must be tested with screen readers; visual emphasis must not cause excessive semantic emphasis announcements.
- Lens/depth changes must preserve logical reading order and focus.
- Changing state must not unexpectedly move the visitor's scroll position.
- All hidden layers remain reachable through explicit disclosure controls.
- Every lens color passes contrast requirements and has a textual/state equivalent.
- Woven marks, sigla, and provenance symbols require accessible labels.
- Mobile must preserve the conceptual model without horizontal core-content scrolling.
- Reduced-motion mode uses instant state changes with no loss of meaning.
- The default state must work with JavaScript unavailable; adaptation is progressive enhancement.

## Performance and implementation constraints

- One shared state layer; rendering changes through tokens, attributes, and composable components.
- Prefer CSS custom properties, CSS/SVG patterns, and lightweight React state.
- Do not duplicate canonical copy for each lens.
- Avoid heavy animation, canvas, WebGL, and large ornamental image systems unless separately justified.
- Preserve static export compatibility and current GitHub Pages deployment.
- Preserve canonical metadata, URLs, CNAME, and share assets during prototype work.

Possible state attributes:

```html
<body
  data-lens="hiring"
  data-depth="standard"
  data-stage="evidence"
  data-weave="medium"
>
```

## Execution plan

### Phase 0 — Source consolidation

Status: `[BLOCKED]` on complete Claude handoff assets.

- Add the full Living Manuscript and The Weave specs to the working design-reference area.
- Add runnable V4/V5 board exports and editable source bundles.
- Inventory transferable behaviors and distinguish demonstrated vs described states.
- Do not copy generated prototype claims into public content.

Gate: both concepts can be inspected across lens, depth, Ask Ardavan, desktop, and mobile states.

### Phase 1 — Canonical content and state schema

Status: `[DONE 2026-07-12]`

- Inventory current homepage, case studies, research, résumé, and Ask Ardavan content.
- Define `PortfolioBlock` metadata and stage/lens/depth mappings.
- Define verified, approved, reflection, condensed, and withheld provenance treatments.
- Create copy layers for 2-minute, 10-minute, and whole-story depth without new claims.

Gate: every adaptive output traces to one approved source block.

### Phase 2 — Representative interaction prototype

Status: `[PARTIAL 2026-07-12]` — implementation and browser QA complete; screen-reader and participant comprehension validation remain open.

Prototype only three complete moments:

1. Opening + Reading Lens.
2. Evidence stage + Reading Dial.
3. Ask Ardavan + provenance.

Include default, lens-selected, medium-depth, deep-depth, reduced-motion, keyboard, and mobile states.

Gate: users understand lens, depth, provenance, and why the page changes without explanation from the designer.

## First prototype implementation record

Date: 2026-07-12  
Route: `/explorations/adaptive-decision-space`  
Production status: promoted to `/` after explicit owner approval; the isolated `noindex` route remains as a reference edition

### Handoff availability

The complete V4 Living Manuscript / V5 The Weave Claude Design exports were not attached to the implementation request. The prototype therefore uses this SOT as the authoritative behavioral specification. Visual decisions listed below are inferred and provisional rather than validated against Claude's editable source.

### Demonstrated in the prototype

- Default manuscript opening with direct Work and flagship-case-study paths.
- Optional Hiring, AI thinking, and Systems & craft lenses with visible textual state and lens-dependent weft treatment.
- Evidence stage containing one canonical sequence: IES, QBOA, and Architectures of Intent.
- ≈2 minute, ≈10 minute, and Whole story depth states using pre-authored layers.
- Per-evidence manual unfold/refold behavior independent of the selected depth.
- Approved, condensed, reflection, withheld, and verified provenance treatments.
- Contextual Ask Ardavan prompts and deterministic answers imported from `content/ask-ardavan.ts`.
- Local-only persistence for lens, depth, opened passages, open question, and representative stage.
- `Reset my reading`, with no account, backend, analytics event, or AI API.
- Responsive Decision Space rail and adapted controls for desktop, tablet, and mobile.
- Static export compatibility and route-level `noindex` metadata.

### Described but not implemented in the reference route

- Six complete Decision Space stage scenes; the rail currently orients the three representative moments only.
- Returning-visit continue/begin-again prompt.
- Curated or seasonal editions.
- Returning-visit continue/begin-again prompt.
- Lens and depth controls inside canonical case-study and research routes; detailed routes instead inherit the stage, provenance, folio, and weave grammar.

### Transferable to a later prototype

- Typed `PortfolioBlock` and `PortfolioPassage` schema.
- Stage, lens, depth, provenance, question, and related-content metadata.
- Shared state and local persistence layer.
- Contextual manuscript apparatus for Ask Ardavan.
- Scoped CSS custom properties for lens accents and progressive weave density.
- Mobile inline stage rail, vertical depth selector, and inline provenance disclosures.

### Deferred validation

- NX-04 recruiter and hiring-manager comprehension sessions.
- Screen-reader pass with VoiceOver or equivalent assistive technology.
- Independent WCAG contrast audit and cultural-integrity review.
- Long-form English type specimen review beyond the representative passages.
- Performance measurement on a deployed preview.

### Rejected for this prototype

- Literal carpet or ornamental Persian border treatment.
- External or unlicensed Persian-rooted fonts.
- Separate content trees per lens.
- Real AI chat, free-text prompts, or generated factual copy.
- Floating chatbot, generic card grid, dark dashboard, terminal, neon, glass, canvas, WebGL, or node-diagram decoration.

### Inferred visual and interaction decisions

- Light paper/ink manuscript foundation using the repository's existing Inter, Playfair, and mono fonts.
- Asymmetric folio spacing and a persistent desktop stage rail; inline 3×2 rail on mobile.
- Lens wefts: restrained rust for Hiring, blue for AI thinking, and green for Systems & craft.
- Structural woven rules, inscription bands, grids, sigla, and signed-knot marks rather than a literal cultural motif.
- Evidence uses the strongest woven density; Entry remains predominantly typographic.
- One transformation vocabulary: setting → threading → resolving.

### Implementation QA

- Production build and static export: pass.
- Prototype route browser load, console, and hydration overlay: pass.
- Production homepage, IES, QBOA, and Research route regression load: pass.
- All lens and depth combinations: pass.
- Contextual Ask Ardavan approved-answer labeling: pass.
- Keyboard activation for lens, depth, disclosure, and Ask controls: pass.
- Horizontal overflow at approximately 1440px, 768px, and 390px CSS widths: none observed.
- Reduced-motion stylesheet contract: present; transitions disabled and resolved transform supplied.
- Repository-wide TypeScript check: blocked by pre-existing errors in `components/ui/calendar.tsx` and `components/ui/chart.tsx`; no prototype-specific errors reported.
- Lint: repository has no configured ESLint setup; `next lint` opens the interactive initializer and cannot run unattended.

### Phase 3 — Comparative validation

Status: `[PARTIAL 2026-07-12]` — owner comparison and approval complete; external recruiter/hiring-manager sessions remain open

- Test recruiter comprehension in the first 30 seconds.
- Test a hiring-manager evidence path.
- Test AI-thinking and systems/craft paths.
- Compare progressive hybrid against the current production site.
- Validate reading comfort, metaphor comprehension, cultural integrity, screen-reader behavior, contrast, motion, and performance.

Gate: the hybrid improves clarity and memorability without slowing access to Work.

### Phase 4 — Full homepage implementation

Status: `[DONE 2026-07-12]`

- Implement the complete Decision Space spine.
- Integrate current projects, research, About, résumé, and Contact.
- Implement local-only continuation/reset behavior.
- Promote the validated adaptive manuscript to `/` after explicit approval.

Gate: end-to-end responsive prototype passes build, accessibility, content-integrity, and performance checks.

### Phase 5 — Case-study and research adaptation

Status: `[DONE 2026-07-12]` for shared conceptual and visual grammar; route-level lens/depth controls remain deferred

- Define how lens/depth/provenance continue into IES, QBOA, and research routes.
- Preserve canonical routes and direct deep-link usability.
- Ensure visitors landing mid-journey receive clear orientation.

Gate: direct routes work without requiring the homepage journey.

### Phase 6 — Production decision and migration

Status: `[DONE 2026-07-12]`

- Conduct side-by-side review against production.
- Record explicit go/no-go decision.
- If approved, create a staged migration and rollback plan.
- Update OG assets, documentation, QA logs, and SOT status.
- Merge only after review; do not alter hosting or CNAME.

Gate: explicit approval by Ardavan after validated production preview.

## Production migration record

Date: 2026-07-12  
Owner decision: Ardavan explicitly approved the Adaptive Decision Space and requested commit and merge.  
Production route: `/`  
Reference route: `/explorations/adaptive-decision-space` (`noindex`)  

Migration scope:

- promoted the adaptive opening, Reading Lens, Reading Depth, evidence passages, contextual Ask Ardavan, provenance, persistence, reset, and colophon to `/`;
- replaced prototype-only production language with the Adaptive edition colophon;
- introduced one shared manuscript frame for IES, QBOA, Research & Strategy, and Architectures of Intent;
- mapped every detailed route to Ambiguity → Structure → Prototype → Evidence → Story → Alignment;
- retained canonical URLs, metadata, claims, citations, visuals, public-safe boundaries, static export, CNAME, and deployment configuration;
- retained the isolated prototype route as a historical/reference edition.

Verification at migration:

- `pnpm build`: pass, including static export;
- all five public routes: correct title/H1, no console errors, and no observed horizontal overflow at desktop or mobile test widths;
- lens, Whole story depth, and contextual approved-answer interaction: pass;
- repository-wide TypeScript remains blocked only by the previously recorded `calendar.tsx` and `chart.tsx` dependency/type issues;
- React structure, hook cleanup, semantic HTML, keyboard operation, stable keys, and route composition reviewed with no migration-specific blocker.

## Success criteria

- A recruiter can find flagship work in one interaction or less.
- A visitor can explain what lens and depth changed.
- No adaptive state changes a fact or hides essential evidence permanently.
- Evidence and provenance remain more legible than in the previous production baseline.
- The cultural identity feels structurally specific, not ornamental.
- The default experience remains calm, fast, readable, and accessible.
- The system remains more memorable than the previous Glass Monolith baseline without becoming harder to use.

## Design Twin relationship

Status: experimental track approved; production integration not approved.

- A future text Design Twin may become a contextual evidence-discovery path into the manuscript.
- It cannot replace the Adaptive Decision Space, portfolio evidence, homepage hero, case-study routes, résumé, or human conversation.
- A separate, deliberately entered route is preferred over a floating chatbot or talking-avatar treatment.
- The existing deterministic Ask Ardavan remains the static fallback.
- Any generated answer must disclose that it is AI, expose public-source provenance, distinguish fact from reflection/summary, and abstain when evidence is unavailable.
- Only approved public content may enter the retrieval corpus.
- No homepage talking avatar, voice clone, face upload, private corpus, autonomous commitment, or production API work is approved.

Reference: `docs/sot/ardavan-design-twin-sot.md`.

## Open questions

- Final concept name: Progressive Woven Manuscript, Woven Manuscript, or another title.
- Final lens labels and whether a neutral/default lens is shown.
- Whether lens changes reorder whole sections or only emphasis/recommendations.
- Exact visual distinction between authored, condensed, verified, reflection, and withheld content.
- Latin-reading performance of Persian-rooted typefaces; requires type specimens and long-copy tests.
- Whether the session reading pattern is useful, shareable, or unnecessary decoration.
- How much local state should persist and for how long.
- Whether curated editions belong in the first release or a later phase.
- The Clarity Engine question is resolved: it is superseded historical context; Decision Space is the production interaction model.

## Source references

- Claude Design handoff: Adaptive Decision Space visual-system divergence, July 2026.
- User-approved synthesis: Living Manuscript foundation + progressively earned Weave layer, 2026-07-12.
- Related decisions: D-017, D-018, D-019, and D-020.
