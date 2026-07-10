/**
 * Sanitized future-state visuals for the IES public case study.
 * Generic labels and synthetic abstractions only — no confidential UI.
 */

import type { ReactNode } from "react"

function VisualBlurb({ children }: { children: ReactNode }) {
  return <p className="ies-visual__blurb">{children}</p>
}

function FrameworkTransferMap() {
  const branches = [
    "Context model",
    "Trust pattern",
    "Workflow fit",
    "Prototype expression",
  ]
  return (
    <figure
      className="ies-visual ies-visual--transfer"
      aria-labelledby="ies-future-transfer-title"
    >
      <figcaption id="ies-future-transfer-title" className="ies-visual__caption">
        Framework transfer map
      </figcaption>
      <VisualBlurb>
        A sanitized model for translating a core AI-native concept into adjacent enterprise
        contexts.
      </VisualBlurb>
      <div className="ies-visual__transfer" role="img" aria-label="Framework transfer from core concept to context model, trust pattern, workflow fit, and prototype expression">
        <div className="ies-visual__transfer-core" aria-hidden="true">
          <span className="ies-visual__transfer-core-label">Core concept</span>
        </div>
        <ul className="ies-visual__transfer-branches" aria-hidden="true">
          {branches.map((label) => (
            <li key={label} className="ies-visual__transfer-branch">
              <span className="ies-visual__transfer-line" />
              <span className="ies-visual__transfer-node">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  )
}

function PrototypeStoryboardArc() {
  const stages = ["Ambiguity", "Structure", "Prototype", "Narrative", "Alignment"]
  return (
    <figure
      className="ies-visual ies-visual--arc"
      aria-labelledby="ies-future-arc-title"
    >
      <figcaption id="ies-future-arc-title" className="ies-visual__caption">
        Prototype-to-storyboard arc
      </figcaption>
      <VisualBlurb>
        How ambiguous product direction becomes a prototype and then a clearer leadership
        narrative.
      </VisualBlurb>
      <svg
        className="ies-visual__svg ies-visual__svg--map"
        viewBox="0 0 640 120"
        role="img"
        aria-label="Flow from ambiguity through structure, prototype, narrative, to alignment"
      >
        <defs>
          <linearGradient id="ies-future-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
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
          stroke="url(#ies-future-arc-grad)"
          strokeWidth="2"
          strokeDasharray="8 10"
          className="ies-flow-line"
        />
        {stages.map((stage, i) => {
          const x = 32 + i * 144
          const isStart = stage === "Ambiguity"
          const isEnd = stage === "Alignment"
          return (
            <g key={stage}>
              <circle
                cx={x}
                cy="56"
                r={isStart || isEnd ? 13 : 11}
                fill="#0B0F10"
                stroke={isEnd ? "#FF7A66" : "#31F5D4"}
                strokeWidth={isStart || isEnd ? 1.5 : 1}
                strokeOpacity={isEnd ? 0.65 : 0.55}
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

function ExecutiveAlignmentMap() {
  const nodes = [
    { label: "Evidence", accent: false },
    { label: "Model", accent: false },
    { label: "Prototype", accent: true },
    { label: "Review", accent: false },
    { label: "Decision", accent: true },
  ]
  return (
    <figure
      className="ies-visual ies-visual--alignment"
      aria-labelledby="ies-future-alignment-title"
    >
      <figcaption id="ies-future-alignment-title" className="ies-visual__caption">
        Executive alignment map
      </figcaption>
      <VisualBlurb>
        A simplified model for bringing evidence, prototype, story, and decision-making into one
        frame.
      </VisualBlurb>
      <ol className="ies-visual__alignment" role="img" aria-label="Flow from evidence through model, prototype, review, to decision">
        {nodes.map((node, i) => (
          <li
            key={node.label}
            className={`ies-visual__alignment-step${node.accent ? " ies-visual__alignment-step--accent" : ""}`}
          >
            <span className="ies-visual__alignment-index" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="ies-visual__alignment-label">{node.label}</span>
            {i < nodes.length - 1 ? (
              <span className="ies-visual__alignment-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  )
}

function FutureStateExplorationModel() {
  const stages = [
    "System state",
    "Signals",
    "Evidence",
    "Human review",
    "Action path",
  ]
  return (
    <figure
      className="ies-visual ies-visual--exploration"
      aria-labelledby="ies-future-exploration-title"
    >
      <figcaption id="ies-future-exploration-title" className="ies-visual__caption">
        Future-state exploration model
      </figcaption>
      <VisualBlurb>
        A public-safe abstraction of how state, evidence, human judgment, and action can work
        together.
      </VisualBlurb>
      <svg
        className="ies-visual__svg ies-visual__svg--map"
        viewBox="0 0 640 120"
        role="img"
        aria-label="Flow from system state through signals, evidence, human review, to action path"
      >
        <defs>
          <linearGradient id="ies-future-explore-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#31F5D4" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#31F5D4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FF7A66" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <line
          x1="32"
          y1="56"
          x2="608"
          y2="56"
          stroke="url(#ies-future-explore-grad)"
          strokeWidth="2"
          strokeDasharray="8 10"
          className="ies-flow-line"
        />
        {stages.map((stage, i) => {
          const x = 32 + i * 144
          const isReview = stage === "Human review"
          return (
            <g key={stage}>
              <circle
                cx={x}
                cy="56"
                r={isReview ? 14 : 11}
                fill="#0B0F10"
                stroke={isReview ? "#FF7A66" : "#31F5D4"}
                strokeWidth={isReview ? 1.5 : 1}
                strokeOpacity={isReview ? 0.7 : 0.55}
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

export default function IesFutureStateVisuals() {
  return (
    <div className="ies-visuals-grid">
      <FrameworkTransferMap />
      <PrototypeStoryboardArc />
      <div className="ies-visuals-grid__pair">
        <ExecutiveAlignmentMap />
        <FutureStateExplorationModel />
      </div>
    </div>
  )
}
