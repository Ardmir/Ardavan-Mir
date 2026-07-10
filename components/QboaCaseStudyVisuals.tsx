/**
 * Sanitized abstract visuals for the QBOA public case study.
 * Generic labels and synthetic data only — no confidential UI.
 */

import type { ReactNode } from "react"

function VisualBlurb({ children }: { children: ReactNode }) {
  return <p className="case-visual__blurb">{children}</p>
}

function ClassificationGrid() {
  const rows = [
    ["Dimension A", "Category 1", "Report view"],
    ["Dimension B", "Category 2", "Report view"],
    ["Dimension C", "Category 3", "Report view"],
  ]
  return (
    <figure className="case-visual" aria-labelledby="qboa-grid-title">
      <figcaption id="qboa-grid-title" className="case-visual__caption">
        Dimensional classification grid
      </figcaption>
      <VisualBlurb>
        A structured view that helps teams see how classifications relate across dimensions.
      </VisualBlurb>
      <div className="qboa-visual__grid" role="img" aria-label="Abstract dimensional classification grid">
        <div className="qboa-visual__grid-header">
          <span>Dimension</span>
          <span>Category</span>
          <span>Report view</span>
        </div>
        {rows.map((row, i) => (
          <div key={i} className="qboa-visual__grid-row">
            {row.map((cell) => (
              <span key={cell} className="qboa-visual__grid-cell">
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </figure>
  )
}

function ReportingContextLayer() {
  const layers = ["Account structure", "Classification", "Report context", "Decision view"]
  return (
    <figure className="case-visual" aria-labelledby="qboa-context-title">
      <figcaption id="qboa-context-title" className="case-visual__caption">
        Reporting context layer
      </figcaption>
      <VisualBlurb>
        Layers that connect classification choices to reporting and decision context.
      </VisualBlurb>
      <ul className="qboa-visual__layers">
        {layers.map((layer, i) => (
          <li key={layer} className="qboa-visual__layer" style={{ marginLeft: `${i * 12}px` }}>
            <span className="qboa-visual__layer-index">{String(i + 1).padStart(2, "0")}</span>
            {layer}
          </li>
        ))}
      </ul>
    </figure>
  )
}

function AccountStructureModel() {
  return (
    <figure className="case-visual" aria-labelledby="qboa-structure-title">
      <figcaption id="qboa-structure-title" className="case-visual__caption">
        Account structure model
      </figcaption>
      <VisualBlurb>
        An abstract model showing how account hierarchy supports classification clarity.
      </VisualBlurb>
      <svg className="case-visual__svg" viewBox="0 0 320 140" role="img" aria-label="Abstract account structure tree">
        <line x1="160" y1="24" x2="80" y2="72" stroke="rgba(49,245,212,0.35)" strokeWidth="1" />
        <line x1="160" y1="24" x2="240" y2="72" stroke="rgba(49,245,212,0.35)" strokeWidth="1" />
        <line x1="80" y1="72" x2="48" y2="116" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="80" y1="72" x2="112" y2="116" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="240" y1="72" x2="208" y2="116" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="240" y1="72" x2="272" y2="116" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {[
          { x: 160, y: 24, label: "Root" },
          { x: 80, y: 72, label: "Branch" },
          { x: 240, y: 72, label: "Branch" },
          { x: 48, y: 116, label: "Leaf" },
          { x: 112, y: 116, label: "Leaf" },
          { x: 208, y: 116, label: "Leaf" },
          { x: 272, y: 116, label: "Leaf" },
        ].map((node) => (
          <g key={`${node.x}-${node.y}`}>
            <rect
              x={node.x - 28}
              y={node.y - 10}
              width="56"
              height="20"
              rx="4"
              fill="#0B0F10"
              stroke="rgba(49,245,212,0.4)"
              strokeWidth="1"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill="#A8B3B0"
              fontSize="9"
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
    { label: "Classification", value: "Synthetic category assignment" },
    { label: "Decision context", value: "Reporting impact preview" },
    { label: "Review state", value: "Pending confirmation" },
  ]
  return (
    <figure className="case-visual" aria-labelledby="qboa-review-title">
      <figcaption id="qboa-review-title" className="case-visual__caption">
        Review and confirmation moment
      </figcaption>
      <VisualBlurb>
        A deliberate step where users confirm classification before it affects reporting.
      </VisualBlurb>
      <dl className="case-visual__fields">
        {fields.map((f) => (
          <div key={f.label} className="case-visual__field-row">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <div className="qboa-visual__review-actions" aria-hidden="true">
        <span className="qboa-visual__review-btn qboa-visual__review-btn--primary">Confirm</span>
        <span className="qboa-visual__review-btn">Adjust</span>
      </div>
    </figure>
  )
}

export default function QboaCaseStudyVisuals() {
  return (
    <div className="case-visuals-grid">
      <ClassificationGrid />
      <div className="case-visuals-grid__pair">
        <ReportingContextLayer />
        <AccountStructureModel />
      </div>
      <ReviewConfirmation />
    </div>
  )
}
