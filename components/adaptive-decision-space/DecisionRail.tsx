import { DECISION_STAGES, type DecisionStage } from "@/content/adaptive-decision-space"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"

type DecisionRailProps = {
  currentStage: DecisionStage
  onStageChange: (stage: DecisionStage) => void
}

export function DecisionRail({ currentStage, onStageChange }: DecisionRailProps) {
  return (
    <nav className={styles.stageRail} aria-label="Decision Space stages">
      <p className={styles.stageRailLabel}>Decision Space</p>
      <ol>
        {DECISION_STAGES.map((stage) => (
          <li key={stage.id}>
            <a
              href={`#${stage.anchor}`}
              aria-current={currentStage === stage.id ? "step" : undefined}
              data-active={currentStage === stage.id}
              onClick={() => onStageChange(stage.id)}
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

