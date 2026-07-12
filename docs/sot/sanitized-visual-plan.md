# Sanitized Visual Plan

Version: 1.5  
Last updated: 2026-07-11  
Status: Public-safe

## Purpose

Create case study visuals that show thinking and craft without exposing confidential product details.

## Visuals to build for IES V1

1. Complexity → clarity system map
2. State → signal → evidence → decision → action loop
3. Evidence rail
4. Decision packet
5. Human judgment checkpoint
6. Approval receipt

## Visuals to build for QBOA V1

1. Dimensional classification grid
2. Reporting context layer
3. Account structure model
4. Review and confirmation moment
5. Classification ambiguity → reporting confidence arc

## Sprint 6 QBOA visual polish (implemented)

All QBOA visuals in `components/QboaCaseStudyVisuals.tsx`:

1. **Dimensional classification grid** — six-column synthetic grid with review state emphasis
2. **Reporting context layer** — Source → Dimension → Report lens → Decision context → Review flow
3. **Account structure model** — hierarchy with Account, Dimension, Category, Relationship, Report grouping
4. **Review and confirmation moment** — checkpoint with Classification, Impact, Review, Confirm, Recorded
5. **Classification ambiguity → reporting confidence arc** — Ambiguity → Structure → Context → Review → Confidence

## Homepage project-card thumbnails

1. IES — abstract decision flow
2. QBOA — dimensional classification grid
3. Iranians Who Design — community constellation

Implemented in `components/ProjectCardVisual.tsx` (decorative, aria-hidden).

## Rules

- Use abstract diagrams
- Use synthetic labels
- Use fictional, generic data only
- Do not mimic internal UI exactly
- Do not use real product screenshots
- Do not use Intuit visual styling beyond public-safe textual references
- Match existing portfolio design system (Glass Monolith / Legibility Layer)
- Keep visuals lightweight using CSS/SVG/HTML
- No image-heavy assets unless necessary

## V1 implementation

- IES: `components/IesCaseStudyVisuals.tsx` — polished Sprint 3 with captions and human judgment checkpoint
- QBOA: `components/QboaCaseStudyVisuals.tsx` — polished Sprint 6 with arc, flow diagrams, and improved captions
- Homepage cards: `components/ProjectCardVisual.tsx`

## Future visual concepts — Executive storytelling / future prototypes

See `docs/sot/executive-storytelling-and-future-prototypes-sot.md`.

### Sprint 4 proof-layer visuals (implemented)

1. **Ambiguity → alignment arc**  
   Homepage horizontal flow: Ambiguity → Structure → Prototype → Story → Alignment. Synthetic labels only; decorative, aria-hidden.

### Sprint 4+ backlog visuals

1. **Leadership narrative layer**  
   Shows how complex capabilities can be translated into a clear, credible story for external-facing leadership moments.

### Sprint 5B future-state visuals (implemented)

1. **Framework transfer map** — `components/IesFutureStateVisuals.tsx`  
   Shows how a core AI-native concept can be adapted from one enterprise context to another without exposing product specifics.

2. **Prototype-to-storyboard arc** — `components/IesFutureStateVisuals.tsx`  
   Shows how a future-state product concept becomes a leadership-ready narrative.

3. **Leadership alignment map** — `components/IesFutureStateVisuals.tsx`  
   Shows how evidence, prototype, story, and decision come together.

4. **Future-state exploration model** — `components/IesFutureStateVisuals.tsx`  
   Shows the relationship between system state, evidence, human judgment, and next action.

### Rules for future executive visuals

- Use synthetic labels only
- Do not use real executive names
- Do not use internal product names or acronyms
- Do not use confidential screenshots
- Do not use real deck screenshots
- Do not use real demo scripts
- Do not imply launch, adoption, or business impact

## Research & Strategy visuals (Sprint 8 — implemented)

Implemented in `components/ResearchStrategyVisuals.tsx`:

1. **Architectures of Intent model**  
   A public-safe diagram showing the shift from AI as feature layer to AI as operating model.  
   Labels: Feature layer → Operating model → Trust patterns → Action systems

2. **GitHub collaboration operating model**  
   A public-safe diagram showing how multiple product workstreams can move through shared foundations, pull-request review, review artifacts, and integrated prototype.  
   Labels: Workstreams → Shared foundations → PR review → Review artifact → Integrated prototype

3. **AI-native platform pattern loop**  
   A public-safe diagram showing context, grounding, recommendation, review, action, and feedback.  
   Labels: Context → Grounding → Recommendation → Review → Action → Feedback

4. **Contribution governance model** (future)  
   A future visual showing team-owned contributions, review checkpoints, and stable demo/release outputs.

### Rules for research visuals

- Synthetic labels only
- No screenshots
- No private docs
- No internal repo names
- No internal team names
- No metrics

## Architectures of Intent article visuals (Sprint 9A — implemented)

Implemented in `components/ArchitecturesOfIntentVisuals.tsx`:

1. **AI-enabled → AI-first → AI-native spectrum**  
   Two abstract shapes move from barely overlapping, to substantially overlapping, to merged.  
   Labels: AI-enabled / Feature augmentation; AI-first / Intelligence-driven workflow; AI-native / AI-dependent value loop

2. **AI-native experience archetype map**  
   Center: AI-native experience. Surrounding archetypes with generic job descriptions only (no product names).

3. **Trust / autonomy loop**  
   Intent → Context & Grounding → Proposal → Evidence → Human Review → Authorized Action → Feedback / Recovery  
   Human Review is visually and textually distinct; Feedback / Recovery returns to Intent or Context & Grounding.
