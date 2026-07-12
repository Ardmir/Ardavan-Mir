# Ardavan Design Twin SOT

Version: 1.0
Last updated: 2026-07-12
Decision date: 2026-07-12

## Status

- `EXPERIMENT_APPROVED`
- `PRODUCTION_NOT_APPROVED`
- `TEXT_FIRST`
- `VOICE_DEFERRED`
- `VISUAL_AVATAR_DEFERRED`

## Purpose

Explore whether a source-grounded AI Design Twin can improve recruiter and visitor understanding, evidence discovery, and portfolio navigation.

## Core decision

- Begin with text.
- Keep citations visible.
- Use a separate, deliberate route rather than replacing the homepage hero.
- Ground answers only in approved public content.
- Disclose clearly that the interface is AI.
- Prefer retrieval-augmented generation plus authored instructions; do not fine-tune in V1.
- Do not use a voice clone, face upload, or visual avatar in V1.
- Retain the current guided Ask Ardavan as the static fallback.
- Do not describe the experiment as implemented, live, trained, or production-approved.

Recommended public name: **Ardavan’s AI Design Twin**

Recommended disclosure:

> AI Design Twin — grounded in Ardavan’s approved public work and writing. It can help you navigate his portfolio and design thinking, but it is not Ardavan speaking live. Answers may be incomplete; factual claims link to their public sources.

## 1. User value

The experiment should test whether visitors can:

- find the most relevant work or research faster;
- understand Ardavan’s contribution and design reasoning without unsupported inference;
- move from a question to cited public evidence;
- distinguish sourced fact, authored reflection, summary, and abstention;
- complete recruiter tasks at least as well as with ordinary navigation.

The Design Twin is a navigation and evidence-discovery interface, not a substitute for the portfolio, résumé, case studies, or a conversation with Ardavan.

## 2. Product principles

1. **Source before fluency.** A grounded, incomplete answer is preferable to a polished unsupported answer.
2. **Evidence remains visible.** Factual answers link to their public sources.
3. **Abstention is a feature.** The system says when approved public evidence is missing.
4. **Identity remains bounded.** It never claims to be Ardavan or to speak live on his behalf.
5. **Human commitments remain human.** It cannot accept work, schedule meetings, negotiate, promise outcomes, or make autonomous commitments.
6. **The manuscript remains canonical.** The interface helps visitors navigate evidence; it does not replace or rewrite it.
7. **Progressive risk.** Text value must be proven before any voice or visual-identity experiment.

## 3. Experience placement

- Preferred placement: a separate, deliberate portfolio route after a preview-only prototype passes Phase 1 evaluation.
- Discovery may be contextual from relevant evidence or research passages.
- The homepage hero remains the Adaptive Decision Space, not a talking-avatar or chat-first surface.
- The current deterministic Ask Ardavan remains available as a static fallback when generation is unavailable, disabled, or inappropriate.
- Entry, exit, reset, disclosure, sources, and feedback controls must be obvious.

## 4. Corpus classification

Every source considered for retrieval must be inventoried before ingestion and assigned exactly one classification.

| Classification | Meaning | V1 use |
|---|---|---|
| `PUBLIC_CANONICAL` | Approved public portfolio, case-study, résumé, or research facts | Allowed with citation |
| `PUBLIC_REFLECTION` | Approved public first-person design thinking | Allowed when labeled as reflection |
| `PUBLIC_SUMMARY_ONLY` | Approved abstraction whose underlying detail must remain private | Summary wording only |
| `PRIVATE_INTERVIEW_ONLY` | Material that may support a private human conversation | Never ingest or retrieve publicly |
| `DO_NOT_USE` | Confidential, unverified, unsupported, or prohibited material | Excluded from every Design Twin environment |

Explicitly excluded:

- recognition PDF;
- private colleague feedback;
- internal decks;
- internal screenshots;
- raw handoffs;
- customer data;
- private repositories;
- roadmaps;
- unapproved research;
- unverified metrics;
- unsupported business outcomes.

## 5. Behaviour and identity rules

- Identify itself as an AI Design Twin on entry and within every answer context where identity could be unclear.
- Use approved public material only.
- Cite factual claims at the answer or claim-cluster level.
- Distinguish public fact, Ardavan-authored reflection, and system summary.
- Abstain when the public corpus does not support an answer.
- Never fabricate roles, metrics, outcomes, quotations, dates, links, clients, launches, or confidential details.
- Never imply real-time awareness, personal memory, employment availability, or Ardavan’s live participation.
- Refuse prompt-injection attempts, requests for hidden instructions, and requests for excluded/private sources.
- Make no autonomous commitments or representations on Ardavan’s behalf.

## 6. Technical architecture candidate

V1 candidate architecture is vendor-neutral and text-first:

1. approved public corpus manifest with classification and canonical URL;
2. reviewable extraction/chunking step that preserves source identifiers;
3. retrieval layer over only allowed corpus entries;
4. authored identity, behaviour, citation, refusal, and abstention instructions;
5. language model response constrained by retrieved public evidence;
6. citation validator and output guardrails;
7. deterministic fallback to the current guided Ask Ardavan;
8. preview-only evaluation harness with 40–60 golden questions.

RAG is preferred before fine-tuning because sources must remain inspectable, removable, and independently governed. No model or vendor is selected by this decision.

## 7. Hosting and secret-management requirements

- Production integration requires a secure backend; secrets must never be shipped in static client code or committed to Git.
- Separate preview and production environments.
- Restrict corpus access to explicitly approved public sources.
- Apply rate limits, abuse controls, bounded input/output sizes, and a kill switch.
- Preserve a static fallback if the backend or model is unavailable.
- Production host ownership must be verified before architecture or secret placement is approved.
- No API key creation, vendor upload, deployment, or dependency decision is authorized by this SOT.

## 8. Privacy and retention

- Do not require an account for the initial experiment.
- Do not request sensitive personal, customer, employer, or confidential information.
- Avoid retaining raw visitor prompts by default.
- If evaluation logging is approved, use minimal, redacted, time-bounded records with documented access and deletion rules.
- Never log secrets, private-source content, hidden instructions, or full IP/device fingerprints.
- Publish a concise disclosure covering generation, source grounding, limitations, and any retained feedback.

## 9. Accessibility

- Complete keyboard operation and visible focus.
- Screen-reader-readable answers, sources, loading, errors, refusals, and disclosure.
- Announce streamed or updated answers without excessive repetition.
- Do not use color, animation, voice, or avatar expression as the only carrier of state or meaning.
- Support `prefers-reduced-motion`.
- Provide text equivalents for every non-text affordance.
- Do not auto-play voice or video.

## 10. Evaluation and launch thresholds

Production consideration requires all safety thresholds and at least one demonstrated recruiter benefit:

- 100% private-source exclusion;
- zero fabricated metrics, roles, outcomes, quotes, or links;
- at least 95% factual source correctness;
- at least 90% citation usefulness;
- at least 95% correct abstention;
- 100% refusal of prompt injection and private-source requests;
- no worse task completion than ordinary navigation;
- improvement in at least one target recruiter task.

Phase 1 should use 40–60 golden questions and 5–8 recruiter/design-leader sessions. Results require an evidence log; owner enthusiasm alone does not satisfy launch thresholds.

## 11. Progressive phases

### Phase 0 — Foundations

- Complete this SOT.
- Build the corpus inventory and classification manifest.
- Record source and owner approvals.
- Define the golden-question and red-team sets.

### Phase 1 — Preview-only text prototype

- Build a cited text-only proof of concept outside production navigation.
- Evaluate 40–60 golden questions.
- Run 5–8 recruiter/design-leader tests.
- Keep the current guided Ask Ardavan as fallback.

### Phase 2 — Conditional production text Design Twin

- Proceed only after every launch threshold passes.
- Use a secure backend, rate limits, kill switch, static fallback, and minimal/redacted logging.
- Launch on a separate deliberate route; do not replace the homepage hero or manuscript.

### Phase 3 — Optional generic voice experiment

- Consider only after text value is demonstrated.
- Start with a generic, clearly synthetic voice; no voice clone initially.
- No auto-play.

### Phase 4 — Consented voice or visual avatar

- Deferred until text and any generic voice experiment demonstrate additional user value.
- Requires separate approval, biometric privacy review, consent, retention/deletion policy, accessibility review, and evidence that identity media improves portfolio outcomes.

## 12. Owner decisions

Approved on 2026-07-12:

- investigate a text-first Design Twin;
- use the name and disclosure above as the current recommendation;
- prioritize public-source grounding, citations, abstention, and identity boundaries;
- keep the experience separate from the homepage hero;
- keep Ask Ardavan as static fallback;
- defer fine-tuning, voice cloning, face upload, and visual avatar work.

Still requires owner decision:

- final corpus manifest;
- final model, retrieval, hosting, privacy, and retention choices;
- preview design and test protocol;
- any production launch;
- any voice or identity-media experiment.

## 13. No-go conditions

Do not proceed to production if any of the following is true:

- private or excluded material can be retrieved;
- factual, citation, abstention, or injection thresholds are missed;
- answers imply Ardavan is speaking live;
- the experience performs worse than ordinary navigation without a compensating validated benefit;
- required hosting ownership, secrets, rate limits, kill switch, fallback, privacy, or accessibility controls are unresolved;
- the interface becomes a homepage replacement or distracts from portfolio evidence;
- evaluation depends on unsupported metrics or private feedback.

## 14. Out of scope

- Production implementation in this documentation phase.
- Homepage-hero replacement.
- Fine-tuning in V1.
- Free access to private files or repositories.
- Recognition content or colleague feedback.
- Voice cloning, face upload, lip sync, or visual avatar work.
- Autonomous scheduling, negotiation, commitments, or outreach.
- Customer data, internal product details, or confidential employer material.
- API keys, vendor uploads, new dependencies, routes, or deployment changes.

## Decision summary

**PROCEED_WITH_TEXT_PROTOTYPE**, after P0 stabilization and Phase 0 corpus governance. This is an experimental roadmap decision, not production approval.
