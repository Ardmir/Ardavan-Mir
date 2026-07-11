/**
 * Sanitized Research & Strategy visuals — abstract diagrams only.
 * No screenshots, internal labels, logos, or confidential details.
 */

import type { ReactNode } from "react"

function VisualBlurb({ children }: { children: ReactNode }) {
  return <p className="research-visual__blurb">{children}</p>
}

export function ArchitecturesOfIntentModel() {
  const stages = ["Feature layer", "Operating model", "Trust patterns", "Action systems"]
  return (
    <figure
      className="research-visual research-visual--intent"
      aria-labelledby="research-intent-title"
    >
      <figcaption id="research-intent-title" className="research-visual__caption">
        Architectures of Intent model
      </figcaption>
      <VisualBlurb>
        A public-safe diagram showing the shift from AI as feature layer to AI as operating model.
      </VisualBlurb>
      <svg
        className="research-visual__svg"
        viewBox="0 0 640 100"
        role="img"
        aria-label="Flow from feature layer through operating model and trust patterns to action systems"
      >
        <defs>
          <linearGradient id="research-intent-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#31F5D4" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#31F5D4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7CE7D6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <line
          x1="24"
          y1="44"
          x2="616"
          y2="44"
          stroke="url(#research-intent-grad)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        {stages.map((stage, i) => {
          const x = 24 + i * 197
          const isEnd = i === stages.length - 1
          return (
            <g key={stage}>
              <circle
                cx={x}
                cy="44"
                r={isEnd ? 12 : 10}
                fill="#0B0F10"
                stroke={isEnd ? "#FF7A66" : "#31F5D4"}
                strokeWidth="1.5"
                strokeOpacity={isEnd ? 0.65 : 0.55}
              />
              <text
                x={x}
                y="78"
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

export function GitHubCollaborationModel() {
  const stages = [
    "Workstreams",
    "Shared foundations",
    "PR review",
    "Review artifact",
    "Integrated prototype",
  ]
  return (
    <figure
      className="research-visual research-visual--github"
      aria-labelledby="research-github-title"
    >
      <figcaption id="research-github-title" className="research-visual__caption">
        GitHub collaboration operating model
      </figcaption>
      <VisualBlurb>
        How multiple product workstreams can move through shared foundations, pull-request review,
        review artifacts, and an integrated prototype.
      </VisualBlurb>
      <ol className="research-visual__pipeline" role="img" aria-label="Pipeline from workstreams through shared foundations, PR review, review artifact, to integrated prototype">
        {stages.map((stage, i) => (
          <li key={stage} className="research-visual__pipeline-step">
            <span className="research-visual__pipeline-node" aria-hidden="true" />
            <span className="research-visual__pipeline-label">{stage}</span>
            {i < stages.length - 1 && (
              <span className="research-visual__pipeline-connector" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function AiNativePlatformLoop() {
  const stages = [
    "Context",
    "Grounding",
    "Recommendation",
    "Review",
    "Action",
    "Feedback",
  ]
  return (
    <figure
      className="research-visual research-visual--platform"
      aria-labelledby="research-platform-title"
    >
      <figcaption id="research-platform-title" className="research-visual__caption">
        AI-native platform pattern loop
      </figcaption>
      <VisualBlurb>
        Context, grounding, recommendation, review, action, and feedback as a recurring trust
        pattern for AI-native product experiences.
      </VisualBlurb>
      <svg
        className="research-visual__svg research-visual__svg--loop"
        viewBox="0 0 640 140"
        role="img"
        aria-label="Loop from context through grounding, recommendation, review, action, to feedback"
      >
        <defs>
          <linearGradient id="research-loop-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#31F5D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7CE7D6" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path
          d="M 32 70 Q 120 20, 220 35 T 420 35 T 608 70 T 420 105 T 220 105 T 32 70"
          fill="none"
          stroke="url(#research-loop-grad)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          className="research-flow-line"
        />
        {stages.map((stage, i) => {
          const angle = (i / stages.length) * Math.PI * 2 - Math.PI / 2
          const cx = 320 + Math.cos(angle) * 200
          const cy = 70 + Math.sin(angle) * 48
          const isReview = stage === "Review"
          return (
            <g key={stage}>
              <circle
                cx={cx}
                cy={cy}
                r={isReview ? 11 : 9}
                fill="#0B0F10"
                stroke={isReview ? "#FF7A66" : "#31F5D4"}
                strokeWidth="1.25"
                strokeOpacity={isReview ? 0.7 : 0.5}
              />
              <text
                x={cx}
                y={cy + 22}
                textAnchor="middle"
                fill="#A8B3B0"
                fontSize="9"
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

export default function ResearchStrategyVisuals({
  variant,
}: {
  variant: "architectures-of-intent" | "github-design-collaboration" | "ai-native-platform-patterns"
}) {
  switch (variant) {
    case "architectures-of-intent":
      return <ArchitecturesOfIntentModel />
    case "github-design-collaboration":
      return <GitHubCollaborationModel />
    case "ai-native-platform-patterns":
      return <AiNativePlatformLoop />
  }
}
