# Résumé PDF Generation

Version: 1.1
Last updated: 2026-08-13
Current update: Staff Product Designer public framing; Staff Designer official title

## Source of truth

| Item | Path |
|------|------|
| Canonical résumé source | `content/resume.md` |
| Public PDF | `public/resume-ardavan-mir.pdf` |
| Public URL | `/resume-ardavan-mir.pdf` |

## 2026-08-13 generation update

**Method used:** Created a one-page, ATS-friendly DOCX from `content/resume.md`, rendered it through LibreOffice, visually inspected the page PNG, and used the matching exported PDF for the public résumé path.

Checks completed:

- Public headline is Staff Product Designer, framed as end-to-end scope from product vision through product quality.
- Official current Intuit title remains Staff Designer in the experience chronology.
- Prior Senior Product Designer title remains visible in the Intuit progression.
- No new metrics, ownership claims, private names, or confidential screenshots were added.
- DOCX and PDF are selectable/searchable and use a single-column structure with real bullets.
- Final output is one US Letter page with no clipping, overlap, or missing glyphs.
- Public path remains `/resume-ardavan-mir.pdf`.

## Repo workflow status

| Check | Result |
|-------|--------|
| `package.json` script | **None** |
| Documented repo generator | **None** (Sprint 5A.1) |
| Prior live PDF producer | ReportLab (observed in existing PDF metadata) |

## Sprint 5A.1 generation method

**Method used:** Local-only ReportLab generation via temporary Python environment (not added to repo dependencies).

Steps performed:

1. Verified `content/resume.md` is public-ready (no VERIFY/TODO/placeholder/private terms).
2. Generated candidate PDF locally using ReportLab (installed to `/tmp/pdflibs` via `pip install --target`, outside repo).
3. Verified candidate PDF:
   - Valid PDF (1 page)
   - Selectable/searchable text
   - Matches `content/resume.md` structure and wording
   - No risky terms (metrics, unsupported verbs, private names)
4. Replaced `public/resume-ardavan-mir.pdf` with candidate after review.
5. Did **not** commit `resume-ardavan-mir-candidate.pdf`.

**Why not Playwright/Firefox headless:** Chromium/Firefox headless crashed in this environment (graphics sandbox). HTML print export remains a fallback.

## Manual export fallback (if automation unavailable)

1. Open `content/resume.md` and copy public-ready content into a print-ready HTML or design tool.
2. Use browser Print → Save as PDF (Letter, 0.55–0.6 in margins).
3. Save as `public/resume-ardavan-mir-candidate.pdf` for review first.
4. Compare text against `content/resume.md`.
5. Replace `public/resume-ardavan-mir.pdf` only after review.

## Checks run (Sprint 5A.1)

- [x] `content/resume.md` has no VERIFY/TODO/placeholder language
- [x] Candidate PDF opens locally
- [x] Candidate PDF text matches source structure (IES, QBOA, QBO Money, Iranians Who Design)
- [x] No 20%/26%/40%, launched/shipped, led/owned/drove, or private terms in PDF text
- [x] Public path preserved: `/resume-ardavan-mir.pdf`
- [x] `pnpm build` passed
- [x] Static export includes résumé PDF

## PDF replacement status

| Item | Status |
|------|--------|
| Candidate generated | Yes (local ReportLab) |
| Live PDF replaced | **Yes** — Sprint 5A.1 |
| Public path unchanged | Yes |

## Remaining TODOs

- Confirm the exact effective month/day of the Staff Designer promotion and complete Intuit employment dates
- Confirm QBO Money bullet scope
- Add verified earlier experience when approved
- Optional: add a repo-local generation script only if ReportLab (or another tool) is approved as a dev dependency

## Manual review notes

- Live PDF now aligns with Sprint 5A résumé source positioning
- One-page layout; ATS-readable Helvetica text
- No phone number included (not in source)
- No new claims beyond approved `content/resume.md`
