/**
 * Sanitized abstract visuals for the IES public case study.
 * Generic labels and synthetic data only — no confidential UI.
 */

import type { ReactNode } from "react"

const STAGES = ["State", "Signal", "Evidence", "Decision", "Action"]

function VisualBlurb({ children }: { children: ReactNode }) {
  return <p className="ies-visual__blurb">{children}</p>
}

function SystemMap() {
  return (
    <figure className="ies-visual ies-visual--map" aria-labelledby="ies-visual-map-title">
      <figcaption id="ies-visual-map-title" className="ies-visual__caption">
        Complexity → clarity system map
      </figcaption>
      <VisualBlurb>
        A simplified model for turning ambiguous financial state into inspectable action.
      </VisualBlurb>
      <svg
        className="ies-visual__svg ies-visual__svg--map"
        viewBox="0 0 640 120"
        role="img"
        aria-label="Flow from state to signal to evidence to decision to action"
      >
        <defs>
          <linearGradient id="ies-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#31F5D4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#31F5D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7CE7D6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <line
          x1="32"
          y1="56"
          x2="608"
          y2="56"
          stroke="url(#ies-flow-grad)"
          strokeWidth="2"
          strokeDasharray="8 10"
          className="ies-flow-line"
        />
        {STAGES.map((stage, i) => {
          const x = 32 + i * 144
          const isCheckpoint = stage === "Decision"
          return (
            <g key={stage}>
              <circle
                cx={x}
                cy="56"
                r={isCheckpoint ? 14 : 11}
                fill="#0B0F10"
                stroke={isCheckpoint ? "#FF7A66" : "#31F5D4"}
                strokeWidth={isCheckpoint ? 1.5 : 1}
                strokeOpacity={isCheckpoint ? 0.7 : 0.55}
              />
              <text
                x={x}
                y="60"
                textAnchor="middle"
                fill="#F4F7F6"
                fontSize="9"
                fontFamily="var(--font-mono), monospace"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              <text
                x={x}
                y="92"
                textAnchor="middle"
                fill="#A8B3B0"
                fontSize="10"
                fontFamily="var(--font-inter), system-ui, sans-serif"
              >
                {stage}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

function EvidenceRail() {
  const items = [
    { label: "Source context", strength: 1 },
    { label: "Policy check", strength: 0.85 },
    { label: "Materiality signal", strength: 0.7 },
    { label: "Confidence note", strength: 0.55 },
  ]
  return (
    <figure className="ies-visual ies-visual--rail" aria-labelledby="ies-visual-rail-title">
      <figcaption id="ies-visual-rail-title" className="ies-visual__caption">
        Evidence rail
      </figcaption>
      <VisualBlurb>
        Supporting context that helps users evaluate why a recommendation matters.
      </VisualBlurb>
      <ul className="ies-visual__rail">
        {items.map((item) => (
          <li key={item.label} className="ies-visual__rail-item">
            <span className="ies-visual__rail-dot" aria-hidden="true" />
            <span className="ies-visual__rail-label">{item.label}</span>
            <span
              className="ies-visual__rail-bar"
              style={{ width: `${item.strength * 100}%` }}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </figure>
  )
}

function DecisionPacket() {
  const fields = [
    { label: "Recommendation", value: "Review classification variance", highlight: true },
    { label: "Evidence", value: "3 supporting signals attached" },
    { label: "Risk", value: "Medium — requires human review" },
    { label: "Human review", value: "Pending approval" },
    { label: "Approval state", value: "Awaiting decision" },
  ]
  return (
    <figure className="ies-visual ies-visual--packet" aria-labelledby="ies-visual-packet-title">
      <figcaption id="ies-visual-packet-title" className="ies-visual__caption">
        Decision packet
      </figcaption>
      <VisualBlurb>
        A structured object that brings together recommendation, rationale, risk, and next step.
      </VisualBlurb>
      <dl className="ies-visual__packet">
        {fields.map((f) => (
          <div
            key={f.label}
            className={`ies-visual__packet-row${f.highlight ? " ies-visual__packet-row--highlight" : ""}`}
          >
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}

function HumanJudgmentCheckpoint() {
  return (
    <figure className="ies-visual ies-visual--checkpoint" aria-labelledby="ies-visual-checkpoint-title">
      <figcaption id="ies-visual-checkpoint-title" className="ies-visual__caption">
        Human judgment checkpoint
      </figcaption>
      <VisualBlurb>
        A deliberate pause before meaningful action, preserving review and control.
      </VisualBlurb>
      <div className="ies-visual__checkpoint" aria-hidden="true">
        <div className="ies-visual__checkpoint-lane">
          <span className="ies-visual__checkpoint-node">Signal</span>
          <span className="ies-visual__checkpoint-arrow">→</span>
          <span className="ies-visual__checkpoint-gate">
            <span className="ies-visual__checkpoint-gate-label">Review</span>
          </span>
          <span className="ies-visual__checkpoint-arrow">→</span>
          <span className="ies-visual__checkpoint-node">Action</span>
        </div>
        <ul className="ies-visual__checkpoint-actions">
          <li>Confirm</li>
          <li>Escalate</li>
          <li>Defer</li>
        </ul>
      </div>
    </figure>
  )
}

function ApprovalReceipt() {
  const fields = [
    { label: "Decision recorded", value: "Classification review approved" },
    { label: "Reviewer", value: "Finance lead" },
    { label: "Time", value: "Synthetic timestamp" },
    { label: "Follow-up", value: "Audit trail available" },
  ]
  return (
    <figure className="ies-visual ies-visual--receipt" aria-labelledby="ies-visual-receipt-title">
      <figcaption id="ies-visual-receipt-title" className="ies-visual__caption">
        Approval receipt
      </figcaption>
      <VisualBlurb>
        A closing artifact that records what changed and where it can be reviewed.
      </VisualBlurb>
      <dl className="ies-visual__receipt">
        {fields.map((f) => (
          <div key={f.label} className="ies-visual__receipt-row">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <div className="ies-visual__receipt-stamp" aria-hidden="true">
        Recorded
      </div>
    </figure>
  )
}

export default function IesCaseStudyVisuals() {
  return (
    <div className="ies-visuals-grid">
      <SystemMap />
      <HumanJudgmentCheckpoint />
      <div className="ies-visuals-grid__pair">
        <EvidenceRail />
        <DecisionPacket />
      </div>
      <ApprovalReceipt />
    </div>
  )
}
