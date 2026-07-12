# SOT-05 — Design System

Version: 0.3
Last updated: 2026-07-12  
Status: Active — production system

## Current production design direction

The production system is the **Progressive Woven Manuscript** within the **Adaptive Decision Space** architecture.

- Paper `#F2EFE5`, ink `#171914`, softened ink `#55584E`, and restrained weft accents.
- Inter for structural display and interface text, Playfair Display for manuscript voice and italic emphasis, and JetBrains Mono for folio metadata, stage labels, and provenance.
- A persistent desktop Decision Space rail becomes a 3×2 inline orientation rail on mobile.
- Structural rules, grids, sigla, evidence ledgers, and woven density replace decorative cards and dashboard chrome.
- Detailed work and research pages are deeper folios of the same system, not separate visual themes.

## Production semantic colors

| Token | Value | Status | Use |
|---|---|---|---|
| Warm umber | `#765026` | Canonical accent | Default weave, rules, provenance emphasis, and manuscript interaction |
| Muted blueberry | `#314A87` | Experimental semantic accent | AI-thinking and research intent only |

`#314A87` is not the new primary color. Promotion beyond semantic AI/research use requires an independent contrast check and full system review.

## Production motion baseline

Commit `ab704c3` is the production adaptive-motion baseline.

- Motion expresses the shared **setting → threading → resolving** vocabulary.
- Stage progress, lens selection, reading depth, evidence emphasis, and provenance may transition within this vocabulary.
- No essential meaning may depend on motion.
- `prefers-reduced-motion` must present the same resolved state without transitional movement.
- Motion changes must preserve focus, reading order, and usable scroll position.
- No motion library, autoplay media, canvas, or WebGL is required for the baseline.

## Historical Glass Monolith direction — superseded

Everything in this historical section through the legacy component list documents the June Glass Monolith system and is reference material only. It is not the current palette, typography, component model, or motion specification.

The portfolio should feel like:

Enterprise AI × calm financial clarity × senior design craft.

It should be minimal, premium, accessible, and precise — not flashy or gimmicky.

## Visual principles

- Clean, content-first layout.
- Generous spacing.
- Strong typographic hierarchy.
- Dark charcoal surfaces.
- Soft white text.
- Electric teal accent.
- Optional warm coral highlight.
- Subtle interface-inspired diagrams.
- Motion that supports comprehension, not spectacle.

## Color tokens

```css
--background: #070A0B;
--background-alt: #0B0F10;
--surface: #111719;
--surface-elevated: #151D20;
--text-primary: #F4F7F6;
--text-secondary: #A8B3B0;
--border: rgba(255, 255, 255, 0.12);
--electric-teal: #31F5D4;
--teal-muted: #7CE7D6;
--warm-coral: #FF7A66;
```

## Typography

Direction:

- Large editorial hero headline.
- Modern sans-serif for body and UI.
- Tight but readable letter spacing.
- Body text should be calm and highly legible.

Potential CSS approach:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Use system fonts if performance is the top priority. Add custom fonts only if they do not slow down launch.

## Layout

- Max content width: 1120–1240px.
- Generous vertical rhythm: 80–140px sections on desktop.
- Mobile-first stack.
- Hero: two columns on desktop, one column on mobile.
- Work cards: large, focused, one project per visual block.
- Avoid dense grids with many thumbnails.

## Components

- Header / nav.
- AM monogram.
- Hero copy.
- Clarity Engine visual panel.
- Proof strip.
- Project card.
- Principle card.
- About panel.
- Contact footer.

## Signature visual motif

Name: Clarity Engine

Representation:

- Nodes representing customer challenge, workflow logic, AI assist, confident action.
- Lines representing information flow / decision pathways.
- Highlight state representing clarity or signal.
- Small insight card explaining the AI-native principle.

Rules:

- Build with HTML/CSS/SVG.
- Do not use external AI/robot imagery.
- Do not over-animate.
- Should be understandable with motion disabled.

## Motion

Allowed:

- Subtle scroll reveal.
- Soft hover state on cards.
- Gentle line glow or node emphasis.
- Small transform on CTA hover.

Avoid:

- Heavy parallax.
- Cursor effects.
- Full-screen loading animations.
- Chatbot gimmicks.
- Anything that hurts accessibility or performance.

## Accessibility

- High contrast text.
- Visible keyboard focus states.
- Semantic HTML.
- Descriptive link labels.
- Skip link.
- `prefers-reduced-motion` support.
- No content conveyed only by animation/color.
- Mobile font sizes should remain readable.

## Performance

- No unnecessary animation libraries.
- No large 3D assets.
- Optimize screenshots as WebP/PNG.
- Keep each major image under roughly 400 KB when possible.
- Lazy-load images below the fold.
- Avoid blocking external assets.

## Quality bar

The site should feel polished enough to send to recruiters immediately, even before full case studies are complete.

## Production system — Progressive Woven Manuscript

Status: `[APPROVED]` for production on 2026-07-12. The Glass Monolith tokens above are retained as historical reference only.

### System thesis

- **Living Manuscript** is the stable typographic, editorial, and provenance foundation.
- **The Weave** is a progressively earned layer expressing visitor intent, depth, accumulated relationships, and Ardavan's cultural identity.
- The page begins predominantly Manuscript and becomes more woven only when visitor choices or narrative position justify the added structure.

### Dynamic visual rules

- Reading Lens introduces labeled emphasis and a restrained weft/accent system.
- Reading Dial changes typographic density and woven/knot density together.
- Decision Space stages progressively structure the page; Evidence and Story may carry the strongest woven expression.
- Ask Ardavan begins as footnote apparatus and may expand into restrained cartouches.
- Provenance uses clear authored/approved/condensed/withheld treatments; signed-knot or siglum marks require textual labels.
- The Weave must remain structural and must not become ornamental carpet decoration.

### Initial balance targets

- Entry: approximately 85% Manuscript / 15% Weave.
- Lens selected: approximately 70% / 30%.
- Medium or deep reading: approximately 60% / 40%.
- Evidence/Story peak: no more than approximately 50% / 50%.

These are prototype heuristics, not production design tokens.

### Motion vocabulary

Use one coherent transformation family: **setting → threading → resolving**.

- Type may re-set to express depth.
- Rules, marks, and relationships may thread into place to express lens/stage.
- Evidence may resolve with provenance marks.
- Avoid simultaneous competing “page reset” and “carpet reweave” spectacles.
- Reduced-motion mode presents the resolved state immediately.

### Accessibility additions

- Test variable-weight emphasis with screen readers before using semantic `<strong>` dynamically.
- Do not allow typographic re-weighting to create layout instability or unreadable line-length changes.
- Lens and depth require semantic controls, textual state, and non-color equivalents.
- Woven marks, cartouches, sigla, and signed knots require accessible names.
- Preserve scroll position and focus when visual state changes.
- Default content and navigation must remain usable without JavaScript.

### Performance additions

- Prefer CSS custom properties, SVG/CSS patterns, and shared React state.
- Do not introduce separate content trees or renderers that duplicate copy.
- Avoid canvas/WebGL and large ornamental image assets in the first prototype.
- Preserve static-export compatibility.

Full concept and execution requirements: `docs/sot/adaptive-decision-space-sot.md`.

## Future Design Twin media constraints

- The Design Twin begins as a text-only experimental interface on a separate deliberate route.
- The production manuscript and current guided Ask Ardavan remain available without generation.
- Do not auto-play voice or video.
- No voice clone, face upload, visual avatar, lip sync, or biometric identity media is approved.
- Any later generic voice experiment must retain text equivalents, complete keyboard operation, screen-reader status, and reduced-motion behavior.
- Any identity-media experiment requires separate value, consent, privacy, retention/deletion, accessibility, and system reviews.
