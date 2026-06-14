# SOT-10 — AI Prompts

Version: 0.1  
Last updated: 2026-06-13  
Status: Active

## General ChatGPT project prompt

Use this at the start of a new ChatGPT session:

```text
Use the uploaded Portfolio SOT files as the source of truth. Do not rely on memory if it conflicts with the SOTs. Keep Ardavan positioned as a Senior Product Designer in Toronto focused on enterprise SaaS, AI-native workflows, financial systems, information architecture, and complex workflow design. Prioritize Intuit Enterprise Suite, QuickBooks Online Advanced / Dimensional Chart of Accounts, and Iranians Who Design as the current project hierarchy. Do not invent metrics, dates, role titles, team names, or outcomes. Mark unverified claims as [VERIFY]. Update the relevant SOT and changelog whenever strategy, content, résumé, design, deployment, or verification status changes.
```

## Prompt for Claude to create/update SOTs safely

```text
You are helping me maintain source-of-truth documents for my portfolio and résumé project.

I am Ardavan Mirhosseini, a Senior Product Designer based in Toronto. My portfolio and résumé are being updated around enterprise SaaS, AI-native workflows, financial systems, information architecture, and complex workflow design. My current priority projects are Intuit Enterprise Suite, QuickBooks Online Advanced / Dimensional Chart of Accounts, and Iranians Who Design as a secondary founder/community platform story.

CRITICAL SAFETY RULE:
Do not delete, overwrite, rename, move, reset, clean, or directly modify any existing project files unless I explicitly approve. First operate in read-only planning mode.

PHASE 1 — READ-ONLY REVIEW
Inspect the current folder and any existing SOT files. You may run read-only commands only:
- pwd
- ls
- find . -maxdepth 3 -type f
- git status --short
- git branch --show-current
- git remote -v
- cat README.md
- cat docs/sot/*.md if they exist
- cat SOT*.md if they exist

Forbidden in Phase 1:
- rm
- mv
- cp over existing files
- git reset
- git clean
- git restore
- git checkout .
- git push
- npm install / pnpm install / yarn install
- editing files
- changing deployment settings
- changing CNAME

After read-only inspection, stop and propose a SOT plan with:
1. Existing files found.
2. Recommended SOT folder path.
3. Recommended SOT files.
4. Which files would be created.
5. Which existing files would be left untouched.
6. Update protocol.
7. Verification rules.
8. Any risks.

Do not create files until I approve.

PHASE 2 — SOT FILE CREATION ONLY AFTER APPROVAL
Do not begin until I type exactly:
APPROVE SOT FILE CREATION

When approved:
1. Create a new branch named sot-documentation.
2. Create a new folder only: docs/sot/
3. Do not modify existing application files.
4. Do not delete or move anything.
5. Create markdown SOT files only.
6. Add a README inside docs/sot/ explaining how to update the SOTs.
7. Add a changelog and decision log.
8. Use [CONFIRMED], [INFERRED], [VERIFY], and [DO NOT USE] labels for claims.
9. Do not invent metrics, dates, or role titles.
10. Do not push unless I approve.

Create these files:
- docs/sot/README.md
- docs/sot/SOT-00-MASTER-BRIEF.md
- docs/sot/SOT-01-CLAIMS-AND-VERIFICATION.md
- docs/sot/SOT-02-PROJECT-INVENTORY.md
- docs/sot/SOT-03-RESUME-SOT.md
- docs/sot/SOT-04-PORTFOLIO-IA-AND-COPY.md
- docs/sot/SOT-05-DESIGN-SYSTEM.md
- docs/sot/SOT-06-CASE-STUDY-SOT.md
- docs/sot/SOT-07-TECH-DEPLOYMENT-SOT.md
- docs/sot/SOT-08-CHANGELOG.md
- docs/sot/SOT-09-DECISION-LOG.md
- docs/sot/SOT-10-AI-PROMPTS.md
- docs/sot/SOT-11-BACKLOG-TODOS.md

SOT content must reflect:
- Primary positioning: Senior Product Designer, Toronto, enterprise SaaS, AI-native workflows, financial systems, IA, complex workflow design.
- Core headline: “I design intelligent products that turn financial complexity into confident action.”
- Principle: “Make the system legible before making it smart.”
- Project hierarchy: IES first, QuickBooks Online Advanced / Dimensional Chart of Accounts second, Iranians Who Design third.
- No unverified metrics.
- Verify exact dates, titles, email, LinkedIn, résumé path, AI feature details, cross-functional team names, and outcomes.
- Design direction: dark charcoal, soft white, electric teal, optional warm coral, generous spacing, premium minimalism, restrained AI-native diagrams.
- Deployment safety: do not delete CNAME, preserve GitHub/Vercel/v0 deployment config, work in branches.

Final response after creating SOTs:
- List files created.
- Confirm no app/deployment files were changed.
- Show git status.
- Summarize remaining [VERIFY] items.
- Provide the commit command but do not push.
```

## Prompt for Claude/Cursor to update portfolio using SOTs

```text
Use docs/sot as the source of truth before editing. Do not invent facts. Do not delete CNAME or deployment config. Work on a new branch. Update the homepage to reflect the current SOT positioning: Senior Product Designer, Toronto, enterprise SaaS, AI-native workflows, financial systems, IES IA and AI experiences, QuickBooks Online Advanced / Dimensional Chart of Accounts, and Iranians Who Design as a secondary founder initiative. After editing, update SOT-08-CHANGELOG.md and any affected SOT files. Run the build and report changed files, build status, and remaining [VERIFY] items. Do not push without approval.
```

## Prompt for résumé updates

```text
Use the résumé SOT and claims verification SOT. Rewrite the résumé for senior product design recruiters while emphasizing enterprise SaaS, AI-native workflows, financial systems, information architecture, IES, and QuickBooks Online Advanced. Keep it ATS-friendly, one to two pages, no tables. Do not invent dates, metrics, titles, or outcomes. Mark anything uncertain as [VERIFY]. Keep Iranians Who Design as a small founder/community platform section unless scale metrics are verified.
```

## Prompt for case study expansion

```text
Use the case study SOT. Create an NDA-safe case study outline for [PROJECT NAME]. Emphasize context, problem, role, IA/process, AI experience design if relevant, solution, impact, and reflection. Use diagrams and abstracted workflows where confidential screens cannot be shown. Do not invent metrics. Mark unknowns as [VERIFY].
```
