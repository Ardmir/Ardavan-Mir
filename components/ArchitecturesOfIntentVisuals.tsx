/**
 * Sanitized Architectures of Intent article visuals — abstract diagrams only.
 * No product UI, logos, screenshots, metrics, or private information.
 */

type VisualVariant = "spectrum" | "archetypes" | "trust-loop"

const SPECTRUM_STAGES = [
  {
    label: "AI-enabled",
    sub: "Feature augmentation",
    overlap: "bare",
  },
  {
    label: "AI-first",
    sub: "Intelligence-driven workflow",
    overlap: "substantial",
  },
  {
    label: "AI-native",
    sub: "AI-dependent value loop",
    overlap: "merged",
  },
] as const

const ARCHETYPES = [
  {
    name: "Answer Engines",
    job: "Return a direct, sourced answer instead of a list of results.",
  },
  {
    name: "Enterprise Knowledge Assistants",
    job: "Retrieve governed organizational knowledge across tools.",
  },
  {
    name: "Agentic Developer Tools",
    job: "Plan and prepare code changes across a codebase.",
  },
  {
    name: "Customer and Service Agents",
    job: "Resolve service requests or escalate with context.",
  },
  {
    name: "Deep Research Agents",
    job: "Synthesize multi-source analysis over an extended session.",
  },
  {
    name: "Ambient and Context-Aware Assistants",
    job: "Use memory or surrounding context to support continuity.",
  },
  {
    name: "Workplace Copilots",
    job: "Accelerate drafting, summarizing, finding, and editing inside existing work tools.",
  },
] as const

const TRUST_LOOP = [
  "Intent",
  "Context & Grounding",
  "Proposal",
  "Evidence",
  "Human Review",
  "Authorized Action",
  "Feedback / Recovery",
] as const

function SpectrumShapes({ overlap }: { overlap: "bare" | "substantial" | "merged" }) {
  if (overlap === "merged") {
    return (
      <svg viewBox="0 0 120 72" className="aoi-visual__shapes" aria-hidden="true">
        <ellipse cx="60" cy="36" rx="42" ry="26" fill="#31F5D4" fillOpacity="0.22" stroke="#31F5D4" strokeWidth="1.5" />
        <ellipse cx="60" cy="36" rx="28" ry="18" fill="#7CE7D6" fillOpacity="0.18" stroke="#7CE7D6" strokeWidth="1" />
      </svg>
    )
  }

  const dx = overlap === "bare" ? 28 : 14
  return (
    <svg viewBox="0 0 120 72" className="aoi-visual__shapes" aria-hidden="true">
      <ellipse
        cx={60 - dx}
        cy="36"
        rx="30"
        ry="22"
        fill="#A8B3B0"
        fillOpacity="0.12"
        stroke="#A8B3B0"
        strokeWidth="1.25"
      />
      <ellipse
        cx={60 + dx}
        cy="36"
        rx="30"
        ry="22"
        fill="#31F5D4"
        fillOpacity="0.2"
        stroke="#31F5D4"
        strokeWidth="1.25"
      />
    </svg>
  )
}

function SpectrumVisual() {
  return (
    <figure className="aoi-visual aoi-visual--spectrum">
      <figcaption className="aoi-visual__caption">AI-enabled → AI-first → AI-native</figcaption>
      <p className="aoi-visual__blurb">
        Depth of AI integration, not feature count: from barely overlapping systems, to substantial
        overlap, to a merged value loop.
      </p>
      <div
        className="aoi-visual__spectrum"
        role="img"
        aria-label="A three-stage diagram showing two shapes, one for the product and one for its AI, moving from barely touching, to significantly overlapping, to fully merged into one shape. The stages are labeled AI-enabled, AI-first, and AI-native."
      >
        {SPECTRUM_STAGES.map((stage) => (
          <div key={stage.label} className="aoi-visual__spectrum-stage">
            <SpectrumShapes overlap={stage.overlap} />
            <p className="aoi-visual__stage-label">{stage.label}</p>
            <p className="aoi-visual__stage-sub">{stage.sub}</p>
          </div>
        ))}
      </div>
      <ol className="aoi-visual__sr-list">
        {SPECTRUM_STAGES.map((stage) => (
          <li key={stage.label}>
            {stage.label}: {stage.sub}
          </li>
        ))}
      </ol>
    </figure>
  )
}

function ArchetypesVisual() {
  return (
    <figure className="aoi-visual aoi-visual--archetypes">
      <figcaption className="aoi-visual__caption">AI-native experience archetype map</figcaption>
      <p className="aoi-visual__blurb">
        Recurring jobs-to-be-done across AI-native products. Naming the job makes unlike systems
        comparable on the same terms.
      </p>
      <div
        className="aoi-visual__archetypes"
        role="img"
        aria-label="A map of seven AI-native experience archetypes arranged around a center labeled AI-native experience."
      >
        <div className="aoi-visual__archetype-center" aria-hidden="true">
          <span>AI-native experience</span>
        </div>
        <ul className="aoi-visual__archetype-list">
          {ARCHETYPES.map((item) => (
            <li key={item.name} className="aoi-visual__archetype-item">
              <strong>{item.name}</strong>
              <span>{item.job}</span>
            </li>
          ))}
        </ul>
      </div>
      <ol className="aoi-visual__sr-list">
        {ARCHETYPES.map((item) => (
          <li key={item.name}>
            {item.name}: {item.job}
          </li>
        ))}
      </ol>
    </figure>
  )
}

function TrustLoopVisual() {
  return (
    <figure className="aoi-visual aoi-visual--trust-loop">
      <figcaption className="aoi-visual__caption">
        Intent → Context &amp; Grounding → Proposal → Evidence → Human Review → Authorized Action →
        Feedback / Recovery
      </figcaption>
      <p className="aoi-visual__blurb">
        A visible loop for trustworthy AI-native systems. Human Review is a designed checkpoint, not
        an afterthought.
      </p>
      <ol
        className="aoi-visual__loop"
        aria-label="An ordered loop begins with Intent, moves to Context and Grounding, then Proposal, Evidence, Human Review, Authorized Action, and Feedback or Recovery. Feedback or Recovery returns to Intent or Context and Grounding. Human Review is marked as a distinct checkpoint."
      >
        {TRUST_LOOP.map((step, index) => {
          const isReview = step === "Human Review"
          return (
            <li
              key={step}
              className={`aoi-visual__loop-step${isReview ? " aoi-visual__loop-step--review" : ""}`}
            >
              <span className="aoi-visual__loop-index" aria-hidden="true">
                {index + 1}
              </span>
              <span className="aoi-visual__loop-label">
                {step}
                {isReview ? " — designed human checkpoint" : ""}
              </span>
              {index < TRUST_LOOP.length - 1 ? (
                <span className="aoi-visual__loop-arrow" aria-hidden="true">
                  →
                </span>
              ) : (
                <span className="aoi-visual__loop-return" aria-hidden="true">
                  ↻ returns to Intent / Context &amp; Grounding
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </figure>
  )
}

export default function ArchitecturesOfIntentVisuals({
  variant,
}: {
  variant: VisualVariant
}) {
  if (variant === "spectrum") return <SpectrumVisual />
  if (variant === "archetypes") return <ArchetypesVisual />
  return <TrustLoopVisual />
}
