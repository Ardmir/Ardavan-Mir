/**
 * Abstract mini-visuals for homepage Selected Work cards.
 * Decorative only — generic synthetic patterns, no product UI.
 */

type ProjectCardVisualVariant = "ies" | "qboa" | "community"

type ProjectCardVisualProps = {
  variant: ProjectCardVisualVariant
}

export default function ProjectCardVisual({ variant }: ProjectCardVisualProps) {
  if (variant === "ies") {
    return (
      <div className="project-card-visual" aria-hidden="true">
        <svg className="project-card-visual__svg" viewBox="0 0 280 72" fill="none">
          <line
            x1="12"
            y1="36"
            x2="268"
            y2="36"
            stroke="rgba(49, 245, 212, 0.35)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          {[
            { x: 28, label: "S" },
            { x: 84, label: "E" },
            { x: 140, label: "D" },
            { x: 196, label: "A" },
            { x: 252, label: "→" },
          ].map((node) => (
            <g key={node.x}>
              <circle cx={node.x} cy="36" r="10" fill="#0B0F10" stroke="rgba(49, 245, 212, 0.5)" strokeWidth="1" />
              <text
                x={node.x}
                y="40"
                textAnchor="middle"
                fill="#7CE7D6"
                fontSize="8"
                fontFamily="monospace"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    )
  }

  if (variant === "qboa") {
    const cells = ["D1", "D2", "D3", "Cat", "Rpt", "View"]
    return (
      <div className="project-card-visual" aria-hidden="true">
        <div className="project-card-visual__grid">
          {cells.map((cell) => (
            <span key={cell} className="project-card-visual__grid-cell">
              {cell}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="project-card-visual" aria-hidden="true">
      <svg className="project-card-visual__svg" viewBox="0 0 280 72" fill="none">
        {[
          { cx: 70, cy: 28 },
          { cx: 140, cy: 44 },
          { cx: 210, cy: 24 },
          { cx: 100, cy: 52 },
          { cx: 180, cy: 56 },
        ].map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="5"
            fill="rgba(49, 245, 212, 0.25)"
            stroke="rgba(49, 245, 212, 0.45)"
            strokeWidth="1"
          />
        ))}
        <line x1="70" y1="28" x2="140" y2="44" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="140" y1="44" x2="210" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="100" y1="52" x2="180" y2="56" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>
    </div>
  )
}
