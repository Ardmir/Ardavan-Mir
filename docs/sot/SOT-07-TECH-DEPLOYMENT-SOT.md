# SOT-07 — Tech and Deployment Source of Truth

Version: 0.1  
Last updated: 2026-06-13  
Status: Active draft

## Known technical context

- Domain: `ardavanmir.com` / `www.ardavanmir.com`.
- GitHub repo likely related to portfolio: `Ardmir/Ardavan-Mir`.
- Repo appears to be a modern Next.js / Tailwind app.
- Screenshot showed folders/files like `app/`, `components/`, `public/`, `styles/`, `next.config.mjs`, `tailwind.config.ts`, `package.json`, and `CNAME`.
- Screenshot showed deployments including `github-pages`, `Production`, and `Preview`.
- Last-known live site state on 2026-06-13: domain resolving but showing a v0/Vercel starter page instead of a finished portfolio. Verify before acting.

## Critical rules

- Do not delete `CNAME`.
- Do not remove deployment configuration unless explicitly approved.
- Do not reset or clean the repo.
- Do not overwrite the local working folder without approval.
- Work in a branch or safe copy.
- Do not push to `main` without approval.
- Preserve existing Next.js/Tailwind structure unless intentionally migrating.

## Safe local workflow

Use a new branch:

```bash
git status
git checkout -b portfolio-rescue-ai-native
```

For maximum safety, work in a separate copy:

```bash
cd ..
git clone https://github.com/Ardmir/Ardavan-Mir.git Ardavan-Mir-portfolio-rescue-copy
cd Ardavan-Mir-portfolio-rescue-copy
git checkout -b portfolio-rescue-ai-native
```

## Files likely to update in Next.js app

- `app/page.tsx` or `app/page.jsx`
- `app/layout.tsx` or `app/layout.jsx`
- `app/globals.css` or `styles/globals.css`
- `components/*` if existing structure uses components
- `public/*` for resume, images, OG image
- `README.md` only if documenting the new setup

## Files not to remove

- `CNAME`
- deployment workflows
- `package.json`
- lockfile
- Next.js config
- Tailwind config
- public assets unless explicitly approved

## Build/test protocol

Use the package manager indicated by the lockfile:

```bash
pnpm install   # only if pnpm-lock.yaml exists and dependencies are missing
pnpm lint      # if available
pnpm build
```

Or:

```bash
npm install
npm run lint   # if available
npm run build
```

Fix all build errors before deploy.

## Git commit guidance

Small, descriptive commits:

- `Launch AI-native portfolio homepage`
- `Add Clarity Engine hero visual`
- `Update portfolio copy for IES and QuickBooks`
- `Add resume link and contact details`
- `Add case study template`
- `Document deployment workflow`

## Deployment verification

After deployment, test:

- `https://ardavanmir.com`
- `https://www.ardavanmir.com`
- Work anchor.
- About anchor.
- Contact email link.
- Resume link.
- LinkedIn link.
- Mobile layout.
- No v0/Vercel starter content.
- No console errors.
- Metadata title and description.
- OG preview if available.

## GitHub Pages notes

If using GitHub Pages:

- Keep `CNAME` in the correct output/static location.
- Confirm Pages source in repo settings.
- Confirm custom domain settings.
- Check Actions/Pages build logs after commit.

## Vercel/v0 notes

If Vercel is the active deployment target:

- Confirm which repo/project is connected to the domain.
- Replace the visible starter page with the portfolio page.
- Do not assume GitHub Pages is serving production until DNS/deployment is verified.
- After Vercel deployment, verify production alias/domain.

## Open technical questions

- Is production currently served by GitHub Pages, Vercel, or both?
- Which branch triggers production?
- Is `CNAME` configured for root, `www`, or both?
- Does the repo use Next.js static export for GitHub Pages?
- Is v0 still syncing changes into the repo?
