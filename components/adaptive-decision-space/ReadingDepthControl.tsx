import type { KeyboardEvent } from "react"
import { READING_DEPTHS, type ReadingDepth } from "@/content/adaptive-decision-space"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"

type ReadingDepthControlProps = {
  value: ReadingDepth
  onChange: (depth: ReadingDepth) => void
}

export function ReadingDepthControl({ value, onChange }: ReadingDepthControlProps) {
  const activateWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, depth: ReadingDepth) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    onChange(depth)
  }

  return (
    <fieldset className={styles.depthFieldset}>
      <legend className={styles.controlLegend}>Reading depth</legend>
      <div className={styles.depthOptions} role="group" aria-label="Reading depth options">
        {READING_DEPTHS.map((depth) => (
          <button
            key={depth.id}
            type="button"
            className={styles.depthOption}
            data-active={value === depth.id}
            aria-pressed={value === depth.id}
            onClick={() => onChange(depth.id)}
            onKeyDown={(event) => activateWithKeyboard(event, depth.id)}
          >
            <span className={styles.depthLabel}>{depth.label}</span>
            <span className={styles.depthMetaphor}>{depth.weaveLabel}</span>
          </button>
        ))}
      </div>
      <p className={styles.depthDescription}>
        {READING_DEPTHS.find((depth) => depth.id === value)?.description}
      </p>
    </fieldset>
  )
}
