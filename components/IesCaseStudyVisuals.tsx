/**
 * Sanitized abstract visuals for the IES public case study.
 * Generic labels and synthetic data only — no confidential UI.
 */

function SystemMap() {
  const stages = ["State", "Signal", "Evidence", "Decision", "Action"]
  return (
    <figure className="ies-visual ies-visual--map" aria-labelledby="ies-visual-map-title">
      <figcaption id="ies-visual-map-title" className="ies-visual__caption">
        Complexity → clarity system map
      </figcaption>
      <svg
        className="ies-visual__svg"
        viewBox="0 0 640 80"
        role="img"
        aria-label="Flow from state to signal to evidence to decision to action"
      >
        <line
          x1="24"
          y1="40"
          x2="616"
          y2="40"
          stroke="#31F5D4"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="ies-flow-line"
        />
      </svg>
      <ol className="ies-visual__stages">
        {stages.map((stage, i) => (
          <li key={stage} className="ies-visual__stage">
            <span className="ies-visual__stage-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="ies-visual__stage-label">{stage}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}

function EvidenceRail() {
  const items = [
    "Source context",
    "Policy check",
    "Materiality signal",
    "Confidence note",
  ]
  return (
    <figure className="ies-visual" aria-labelledby="ies-visual-rail-title">
      <figcaption id="ies-visual-rail-title" className="ies-visual__caption">
        Evidence rail
      </figcaption>
      <ul className="ies-visual__rail">
        {items.map((item) => (
          <li key={item} className="ies-visual__rail-item">
            <span className="ies-visual__rail-dot" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </figure>
  )
}

function DecisionPacket() {
  const fields = [
    { label: "Recommendation", value: "Review classification variance" },
    { label: "Evidence", value: "3 supporting signals attached" },
    { label: "Risk", value: "Medium — requires human review" },
    { label: "Human review", value: "Pending approval" },
    { label: "Approval state", value: "Awaiting decision" },
  ]
  return (
    <figure className="ies-visual" aria-labelledby="ies-visual-packet-title">
      <figcaption id="ies-visual-packet-title" className="ies-visual__caption">
        Decision packet
      </figcaption>
      <dl className="ies-visual__packet">
        {fields.map((f) => (
          <div key={f.label} className="ies-visual__packet-row">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
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
    <figure className="ies-visual" aria-labelledby="ies-visual-receipt-title">
      <figcaption id="ies-visual-receipt-title" className="ies-visual__caption">
        Approval receipt
      </figcaption>
      <dl className="ies-visual__receipt">
        {fields.map((f) => (
          <div key={f.label} className="ies-visual__receipt-row">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}

export default function IesCaseStudyVisuals() {
  return (
    <div className="ies-visuals-grid">
      <SystemMap />
      <div className="ies-visuals-grid__pair">
        <EvidenceRail />
        <DecisionPacket />
      </div>
      <ApprovalReceipt />
    </div>
  )
}
