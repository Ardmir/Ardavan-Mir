# Sanitized Visual Plan

Version: 1.2  
Last updated: 2026-07-10  
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
- QBOA: `components/QboaCaseStudyVisuals.tsx` — abstract classification and reporting diagrams
- Homepage cards: `components/ProjectCardVisual.tsx`

## Future visual concepts — Executive storytelling / future prototypes

See `docs/sot/executive-storytelling-and-future-prototypes-sot.md`.

### Sprint 4 proof-layer visuals (implemented)

1. **Ambiguity → alignment arc**  
   Homepage horizontal flow: Ambiguity → Structure → Prototype → Story → Alignment. Synthetic labels only; decorative, aria-hidden.

### Sprint 4+ backlog visuals (not yet implemented)

1. **Framework transfer map**  
   Shows how a core AI-native concept can be adapted from one enterprise context to another without exposing product specifics.

2. **Prototype-to-demo storyboard**  
   Shows how a future-state product concept becomes a leadership-ready narrative.

3. **Executive alignment map**  
   Shows how ambiguity, evidence, prototype, narrative, and decision come together.

4. **Leadership narrative layer**  
   Shows how complex capabilities can be translated into a clear, credible story for external-facing leadership moments.

### Rules for future executive visuals

- Use synthetic labels only
- Do not use real executive names
- Do not use internal product names or acronyms
- Do not use confidential screenshots
- Do not use real deck screenshots
- Do not use real demo scripts
- Do not imply launch, adoption, or business impact
