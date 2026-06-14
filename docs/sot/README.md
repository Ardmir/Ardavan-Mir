# Ardavan Portfolio Project — Source of Truth Pack

Version: 0.1  
Last updated: 2026-06-13  
Owner: Ardavan Mirhosseini  
Project: Portfolio update / résumé update / recruiter-ready positioning

## Purpose

This folder is the living source of truth for the ChatGPT Portfolio Project. Use it to keep portfolio strategy, résumé copy, case study claims, design direction, deployment notes, and change history synchronized across ChatGPT, Claude, Cursor, v0, GitHub, and Vercel.

## How to use this in ChatGPT Projects

1. Upload this entire folder, or the ZIP file, to the ChatGPT Project files.
2. At the start of every new session, say: “Use the Portfolio SOT files as the source of truth before making suggestions.”
3. After every meaningful change, update the relevant SOT file and `SOT-08-CHANGELOG.md`.
4. If a claim is not in the SOTs, treat it as unverified and mark it `[VERIFY]`.
5. Do not let AI tools invent metrics, titles, dates, team names, or outcomes.

## Update protocol

Every time the portfolio, résumé, case study, deployment, or design direction changes:

1. Update the affected SOT file.
2. Add an entry to `SOT-08-CHANGELOG.md`.
3. Add or update a decision in `SOT-09-DECISION-LOG.md` when the change reflects strategy, IA, design direction, deployment setup, or positioning.
4. Update `SOT-11-BACKLOG-TODOS.md` if any new unknowns appear.
5. Re-upload the changed files to the ChatGPT Project so future sessions inherit the latest context.

## Claim rules

Use these labels everywhere:

- `[CONFIRMED]` — Ardavan confirmed it, it exists in source material, or it is visible in the repo/site.
- `[INFERRED]` — reasonable framing based on confirmed facts, but not directly proven.
- `[VERIFY]` — needs fact-checking before publication.
- `[DO NOT USE]` — do not publish unless replaced with verified evidence.

## Files

- `SOT-00-MASTER-BRIEF.md` — portfolio strategy, positioning, goals, non-negotiables.
- `SOT-01-CLAIMS-AND-VERIFICATION.md` — all confirmed/inferred/unverified claims.
- `SOT-02-PROJECT-INVENTORY.md` — prioritized project shortlist.
- `SOT-03-RESUME-SOT.md` — recruiter-facing résumé source copy.
- `SOT-04-PORTFOLIO-IA-AND-COPY.md` — homepage structure and copy.
- `SOT-05-DESIGN-SYSTEM.md` — visual system, interaction, accessibility.
- `SOT-06-CASE-STUDY-SOT.md` — case study structure and NDA-safe storytelling.
- `SOT-07-TECH-DEPLOYMENT-SOT.md` — repo, deployment, GitHub/Vercel rules.
- `SOT-08-CHANGELOG.md` — chronological update history.
- `SOT-09-DECISION-LOG.md` — strategic and implementation decisions.
- `SOT-10-AI-PROMPTS.md` — reusable prompts for ChatGPT, Claude, Cursor, v0.
- `SOT-11-BACKLOG-TODOS.md` — open questions, verification list, next actions.
- `PORTFOLIO_PROJECT_SOTS_CONSOLIDATED.md` — all SOTs in one file.
