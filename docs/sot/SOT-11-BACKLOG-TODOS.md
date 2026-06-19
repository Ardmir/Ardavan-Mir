# SOT-11 — Backlog and TODOs

Version: 0.1  
Last updated: 2026-06-14  
Status: Active

## Immediate verification checklist

- `[DONE 2026-06-13]` Preferred email: ardavanmir@outlook.com.
- `[DONE 2026-06-13]` LinkedIn URL: https://linkedin.com/in/ardavanmir.
- `[VERIFY]` Resume PDF filename and location.
- `[VERIFY]` Exact current title at Intuit.
- `[VERIFY]` Exact Intuit employment dates.
- `[VERIFY]` Exact project dates for IES.
- `[VERIFY]` Exact project dates for QuickBooks Online Advanced / Dimensional Chart of Accounts.
- `[VERIFY]` Exact role on IES IA work.
- `[VERIFY]` Exact role on IES AI experiences.
- `[VERIFY]` Public-safe names of AI experiences/features.
- `[VERIFY]` Exact impact metrics for IES.
- `[VERIFY]` Exact impact metrics for QuickBooks Online Advanced / DCoA.
- `[VERIFY]` Whether the 20% engagement metric is real and publishable.
- `[PARTIAL 2026-06-13]` Iranians Who Design URL confirmed (https://iranianxdesign.com/). Date, community size, reach, designer count, partnerships still `[VERIFY]`.
- `[VERIFY]` Dates/titles/details for Xello, Nobu, The Score, and Toptal.

## Portfolio content TODOs

- Finalize hero copy.
- Finalize IES project card.
- Finalize QBO Advanced / DCoA project card.
- Finalize Iranians Who Design project card.
- Add résumé link.
- Add LinkedIn link.
- Add preferred email.
- Add OG image.
- Add favicon / AM monogram.
- Add at least one NDA-safe diagram for IES.
- Add at least one NDA-safe diagram for DCoA.
- Decide whether to include older work on homepage.

## Case study TODOs

### IES

- Define case study title.
- Confirm exact role and timeline.
- List IA deliverables.
- List AI experience deliverables.
- Identify safe visuals.
- Verify impact or use qualitative outcomes.

### QuickBooks Online Advanced / DCoA

- Define case study title.
- Confirm exact role and timeline.
- Map problem statement.
- Identify IA/workflow visuals.
- Verify impact or use qualitative outcomes.

### Iranians Who Design

- Confirm dates.
- Confirm metrics or public signals.
- Capture screenshots.
- Frame as founder/platform/community identity story.

## Technical TODOs

### Deployment decisions (2026-06-14)

- `[DECIDED]` **Production deploy path is GitHub Pages** — `.github/workflows/deploy.yml` on `main`; not Vercel.
- `[DECIDED]` **Vercel will be disconnected** (deferred). Project `v0-portfolio` is a leftover v0 integration; it causes failing PR checks only.
- `[DONE 2026-06-14]` Upgraded Next.js `15.2.4` → `15.2.9` (patched; unblocks Vercel builds until disconnect).

### Next steps — disconnect Vercel (when ready)

1. **Vercel dashboard** → project `v0-portfolio` → Settings → Git → **Disconnect** (or delete project).
2. **Vercel dashboard** → Settings → Domains → remove any domain bound to Vercel (keep `CNAME` / DNS on GitHub Pages for `www.ardavanmir.com`).
3. **GitHub** → Settings → Applications → Installed GitHub Apps → **Vercel** → remove `Ardavan-Mir` from repository access (stops PR checks).
4. **v0.dev** (optional) → disconnect GitHub auto-sync for project `kKTsKeGBmnB`.
5. **Repo cleanup** → update `README.md` to document GitHub Pages + local dev; remove v0/Vercel badges and auto-sync copy.

### Remaining technical items

- `[CONFIRMED]` Production source: `Ardmir/Ardavan-Mir`, branch `main`.
- Preserve `CNAME`.
- Confirm DNS settings for root and www domains.
- Replace v0/Vercel starter content in README if still live.
- Run build before deploying.
- Test mobile.
- Test accessibility basics.

## Design TODOs

- Define final type scale.
- Build Clarity Engine visual.
- Define card hover states.
- Add reduced-motion fallback.
- Check contrast.
- Ensure no gimmicky AI visuals.

## AI workflow TODOs

- Upload SOT pack to ChatGPT Project.
- Keep SOTs updated after every change.
- Use Claude prompt in `SOT-10-AI-PROMPTS.md` if working with Claude.
- Ask Cursor/Claude to update changelog after code changes.
- Review every AI-generated claim for verification status.
