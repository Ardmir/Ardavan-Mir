# Architectures of Intent — Publication SOT

Version: 1.0  
Last updated: 2026-07-12  
Status: Public-safe · Sprint 9A implemented (pending PR review)

## Publication title

Architectures of Intent

## Route

`/research/ai-native-strategy`

Canonical: `https://www.ardavanmir.com/research/ai-native-strategy`

## Purpose

Publish a public-safe research essay exploring what enterprise software becomes when AI shifts from feature layer to operating model, with emphasis on context, grounding, evidence, permissions, human review, and governed action.

## Approved article source

Locked public article edition used for Sprint 9A implementation. Site conversion preserves section order, paragraph order, numbered principles, endnotes, and the publication note. No substantive rewrite.

Final article word count (approved packet): **2,552 words**.

## Approved visual source

Final visual brief for three abstract diagrams:

1. AI-enabled → AI-first → AI-native spectrum
2. AI-native experience archetype map
3. Intent → Context & Grounding → Proposal → Evidence → Human Review → Authorized Action → Feedback / Recovery loop

## Public-source verification status

Nine public endnotes verified against official product pages and documentation in the approved public sources list. All endnote URLs are live official sources.

## Public treatment

- Full essay at `/research/ai-native-strategy`
- Summary + detail CTA on `/research`
- Homepage Research card routes to the detail page
- Ask Ardavan research answer links to the detail page first, then `/research`
- Interactive guide remains an external secondary link (not on homepage)
- Global OG image reused; no route-specific OG image in Sprint 9A

## Implementation files

- `app/research/ai-native-strategy/page.tsx`
- `components/ArchitecturesOfIntentVisuals.tsx`
- `content/architectures-of-intent.ts`
- `content/architectures-of-intent-sources.ts`
- Discovery updates: `content/research.ts`, `content/ask-ardavan.ts`, `app/research/page.tsx`
- Styles: `app/globals.css`

## Accessibility requirements

- One `h1`
- Logical `h2` section hierarchy
- Accessible “On this page” navigation label
- Adequate scroll-margin for anchors
- External links indicated and open with `rel="noopener noreferrer"`
- Keyboard-accessible footnote references and source links
- Visuals use `figure` / `figcaption` and descriptive `aria-label` or ordered text alternatives
- Human Review distinction uses text as well as color
- Focus-visible styles and reduced-motion respect

## Mobile requirements

- No horizontal page overflow
- Reading column remains readable
- ToC is a static block on small screens (sticky only on large screens)
- Spectrum stacks vertically
- Archetype map becomes a vertical list
- Trust loop becomes a vertical flow
- Long source URLs wrap cleanly

## Confidentiality boundaries

Do not publish:

- Private colleague names or quotes
- Internal product acronyms beyond already public portfolio usage
- Customer names
- Metrics
- Launch, shipped, adoption, revenue, or company-decision claims
- Unsupported ownership verbs
- Raw research archive material
- Private claims maps, redaction logs, or review reports
- Absolute local paths or Drive links

Safe relationship wording for related IES work:

“This research and the IES case study share a focus on making complex systems legible through evidence, trust, review, and human judgment.”

## Maintenance note

Product examples reflect publicly documented behavior reviewed during this research; interfaces and feature names may evolve. Re-check source URLs if a future refresh is needed.

## Future optional enhancements

- Route-specific OG image
- Deeper interactive embeds (still external unless separately approved)
- Additional research detail pages for other tracks
- Optional removal of deprecated OG assets elsewhere on the site
