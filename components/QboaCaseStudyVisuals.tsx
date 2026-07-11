/**
 * Sanitized abstract visuals for the QBOA public case study.
 * Generic labels and synthetic data only — no confidential UI.
 */

import type { ReactNode } from "react"

function VisualBlurb({ children }: { children: ReactNode }) {
  return <p className="case-visual__blurb">{children}</p>
}

function ClassificationGrid() {
  const headers = [
    "Dimension",
    "Category",
    "Reporting view",
    "Classification",
    "Review state",
    "Decision context",
  ]
  const rows = [
    ["Dimension A", "Category 1", "Lens A", "Class 1", "Pending", "Context A"],
    ["Dimension B", "Category 2", "Lens B", "Class 2", "Reviewed", "Context B"],
    ["Dimension C", "Category 3", "Lens C", "Class 3", "Pending", "Context C"],
  ]
  return (
    <figure className="case-visual" aria-labelledby="qboa-grid-title">
      <figcaption id="qboa-grid-title" className="case-visual__caption">
        Dimensional classification grid
      </figcaption>
      <VisualBlurb>
        A public-safe model for making multi-dimensional classification easier to inspect.
      </VisualBlurb>
      <div
        className="qboa-visual__grid-wrap"
        role="img"
        aria-label="Abstract dimensional classification grid with dimension, category, reporting view, classification, review state, and decision context"
      >
        <div className="qboa-visual__grid qboa-visual__grid--wide" aria-hidden="true">
          <div className="qboa-visual__grid-header">
            {headers.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          {rows.map((row, i) => (
            <div key={i} className="qboa-visual__grid-row">
              {row.map((cell, j) => (
                <span
                  key={`${i}-${j}`}
                  className={`qboa-visual__grid-cell${j === 4 ? " qboa-visual__grid-cell--accent" : ""}`}
                >
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </figure>
  )
}

function ReportingContextLayer() {
  const stages = ["Source", "Dimension", "Report lens", "Decision context", "Review"]
  return (
    <figure className="case-visual" aria-labelledby="qboa-context-title">
      <figcaption id="qboa-context-title" className="case-visual__caption">
        Reporting context layer
      </figcaption>
      <VisualBlurb>
        How classification choices connect to reporting context and decision-making.
      </VisualBlurb>
      <svg
        className="case-visual__svg qboa-visual__svg--flow"
        viewBox="0 0 640 120"
        role="img"
        aria-label="Flow from source through dimension, report lens, decision context, to review"
      >
        <defs>
          <linearGradient id="qboa-context-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#31F5D4" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#31F5D4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7CE7D6" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <line
          x1="32"
          y1="56"
          x2="608"
          y2="56"
          stroke="url(#qboa-context-grad)"
          strokeWidth="2"
          strokeDasharray="8 10"
          className="ies-flow-line"
        />
        {stages.map((stage, i) => {
          const x = 32 + i * 144
          const isReview = stage === "Review"
          return (
            <g key={stage}>
              <circle
                cx={x}
                cy="56"
                r={isReview ? 13 : 11}
                fill="#0B0F10"
                stroke={isReview ? "#FF7A66" : "#31F5D4"}
                strokeWidth={isReview ? 1.5 : 1}
                strokeOpacity={isReview ? 0.65 : 0.55}
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

function AccountStructureModel() {
  const nodes = [
    { x: 160, y: 22, label: "Account" },
    { x: 80, y: 68, label: "Dimension" },
    { x: 240, y: 68, label: "Category" },
    { x: 48, y: 118, label: "Relationship" },
    { x: 112, y: 118, label: "Report grouping" },
    { x: 208, y: 118, label: "Relationship" },
    { x: 272, y: 118, label: "Report grouping" },
  ]
  return (
    <figure className="case-visual" aria-labelledby="qboa-structure-title">
      <figcaption id="qboa-structure-title" className="case-visual__caption">
        Account structure model
      </figcaption>
      <VisualBlurb>
        A simplified model for showing relationships without exposing product or customer data.
      </VisualBlurb>
      <svg
        className="case-visual__svg"
        viewBox="0 0 320 140"
        role="img"
        aria-label="Abstract account structure showing account, dimension, category, relationship, and report grouping"
      >
        <line x1="160" y1="32" x2="80" y2="78" stroke="rgba(49,245,212,0.4)" strokeWidth="1" />
        <line x1="160" y1="32" x2="240" y2="78" stroke="rgba(49,245,212,0.4)" strokeWidth="1" />
        <line x1="80" y1="78" x2="48" y2="128" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="80" y1="78" x2="112" y2="128" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="240" y1="78" x2="208" y2="128" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="240" y1="78" x2="272" y2="128" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {nodes.map((node) => (
          <g key={`${node.x}-${node.label}`}>
            <rect
              x={node.x - 36}
              y={node.y - 11}
              width="72"
              height="22"
              rx="4"
              fill="#0B0F10"
              stroke={node.y < 50 ? "rgba(49,245,212,0.45)" : "rgba(255,255,255,0.12)"}
              strokeWidth="1"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill={node.y < 50 ? "#7CE7D6" : "#A8B3B0"}
              fontSize="8"
              fontFamily="var(--font-inter), system-ui, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  )
}

function ReviewConfirmation() {
  const fields = [
    { label: "Classification", value: "Synthetic category assignment", highlight: true },
    { label: "Impact", value: "Reporting lens preview" },
    { label: "Review", value: "Pending confirmation" },
    { label: "Confirm", value: "Awaiting action" },
    { label: "Recorded", value: "Not yet saved" },
  ]
  return (
    <figure className="case-visual" aria-labelledby="qboa-review-title">
      <figcaption id="qboa-review-title" className="case-visual__caption">
        Review and confirmation moment
      </figcaption>
      <VisualBlurb>
        A checkpoint that helps users review classification before downstream reporting impact.
      </VisualBlurb>
      <dl className="case-visual__fields">
        {fields.map((f) => (
          <div
            key={f.label}
            className={`case-visual__field-row${f.highlight ? " case-visual__field-row--highlight" : ""}`}
          >
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <div className="qboa-visual__review-lane" aria-hidden="true">
        <span className="qboa-visual__review-node">Classification</span>
        <span className="qboa-visual__review-arrow">→</span>
        <span className="qboa-visual__review-gate">Review</span>
        <span className="qboa-visual__review-arrow">→</span>
        <span className="qboa-visual__review-node">Confirm</span>
      </div>
    </figure>
  )
}

function AmbiguityConfidenceArc() {
  const stages = ["Ambiguity", "Structure", "Context", "Review", "Confidence"]
  return (
    <figure className="case-visual" aria-labelledby="qboa-arc-title">
      <figcaption id="qboa-arc-title" className="case-visual__caption">
        Classification ambiguity → Reporting confidence
      </figcaption>
      <VisualBlurb>
        How structure, context, and review can turn classification ambiguity into reporting
        confidence.
      </VisualBlurb>
      <svg
        className="case-visual__svg qboa-visual__svg--flow"
        viewBox="0 0 640 120"
        role="img"
        aria-label="Flow from ambiguity through structure, context, review, to confidence"
      >
        <defs>
          <linearGradient id="qboa-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A66" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#31F5D4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7CE7D6" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <line
          x1="32"
          y1="56"
          x2="608"
          y2="56"
          stroke="url(#qboa-arc-grad)"
          strokeWidth="2"
          strokeDasharray="8 10"
          className="ies-flow-line"
        />
        {stages.map((stage, i) => {
          const x = 32 + i * 144
          const isStart = stage === "Ambiguity"
          const isEnd = stage === "Confidence"
          return (
            <g key={stage}>
              <circle
                cx={x}
                cy="56"
                r={isStart || isEnd ? 13 : 11}
                fill="#0B0F10"
                stroke={isStart ? "#FF7A66" : isEnd ? "#31F5D4" : "#31F5D4"}
                strokeWidth={isStart || isEnd ? 1.5 : 1}
                strokeOpacity={isStart ? 0.65 : 0.55}
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

export default function QboaCaseStudyVisuals() {
  return (
    <div className="case-visuals-grid">
      <AmbiguityConfidenceArc />
      <ClassificationGrid />
      <div className="case-visuals-grid__pair">
        <ReportingContextLayer />
        <AccountStructureModel />
      </div>
      <ReviewConfirmation />
    </div>
  )
}
