# Legacy Portfolio Components

Version: 1.0  
Last updated: 2026-07-10  
Status: Internal reference — not public-facing

## Purpose

The live portfolio homepage is `app/page.tsx`. Several older components remain in `components/` from an earlier template and are **not imported** by the live site.

## Do not reuse for public copy

| File | Risk | Action taken (Sprint 2.1) |
|------|------|---------------------------|
| `components/projects.tsx` | Fictional TurboTax/Mint/QB metrics (40%, 80%, 150%, Lead roles) | Replaced with qualitative placeholders; legacy header comment |
| `components/about.tsx` | 50M+ users, 40% efficiency, “Leading” language | Replaced with qualitative focus areas; legacy header comment |
| `components/hero.tsx` | “Transforming” positioning copy | Softened to “shaping”; legacy header comment |
| `components/contact.tsx` | Placeholder email | Legacy header comment; live contact is on `app/page.tsx` |
| `components/navigation.tsx` | Older nav shell | Unused; no public claims |

## Canonical sources for public claims

- Live homepage: `app/page.tsx`
- IES case study: `app/work/intuit-enterprise-suite/page.tsx`
- Ask Ardavan: `content/ask-ardavan.ts`
- Claims policy: `docs/sot/portfolio-claims-log.md`
