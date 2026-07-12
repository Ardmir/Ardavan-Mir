import { DECISION_STAGES, type DecisionStage } from "@/content/adaptive-decision-space"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"
import type { MouseEvent } from "react"

type DecisionRailProps = {
  currentStage: DecisionStage
  onStageChange: (stage: DecisionStage) => void
  motionEnabled?: boolean
}

export function DecisionRail({
  currentStage,
  onStageChange,
  motionEnabled = false,
}: DecisionRailProps) {
  const getAnchor = (stage: (typeof DECISION_STAGES)[number]) => {
    if (!motionEnabled) return stage.anchor
    if (stage.id === "structure") return "decision-spine-structure"
    if (stage.id === "prototype") return "decision-spine-prototype"
    return stage.anchor
  }

  const moveToStage = (
    event: MouseEvent<HTMLAnchorElement>,
    stage: (typeof DECISION_STAGES)[number]
  ) => {
    onStageChange(stage.id)
    if (!motionEnabled) return

    const anchor = getAnchor(stage)
    const target = document.getElementById(anchor)
    if (!target) return

    event.preventDefault()
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: stage.id === "structure" || stage.id === "prototype" ? "center" : "start",
    })
    window.history.pushState(null, "", `#${anchor}`)
  }

  return (
    <nav className={styles.stageRail} aria-label="Decision Space stages">
      <p className={styles.stageRailLabel}>Decision Space</p>
      <ol>
        {DECISION_STAGES.map((stage) => (
          <li key={stage.id}>
            <a
              href={`#${getAnchor(stage)}`}
              aria-current={currentStage === stage.id ? "step" : undefined}
              data-active={currentStage === stage.id}
              onClick={(event) => moveToStage(event, stage)}
            >
              <span>{stage.index}</span>
              {stage.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
