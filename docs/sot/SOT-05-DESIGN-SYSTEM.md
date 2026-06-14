# SOT-05 — Design System

Version: 0.1  
Last updated: 2026-06-13  
Status: Active draft

## Design direction

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
