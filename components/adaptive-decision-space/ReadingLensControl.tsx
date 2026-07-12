import type { KeyboardEvent } from "react"
import { READING_LENSES, type ReadingLens } from "@/content/adaptive-decision-space"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"

type ReadingLensControlProps = {
  value: ReadingLens | null
  onChange: (lens: ReadingLens) => void
}

export function ReadingLensControl({ value, onChange }: ReadingLensControlProps) {
  const activateWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, lens: ReadingLens) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    onChange(lens)
  }

  return (
    <fieldset className={styles.lensFieldset}>
      <legend className={styles.controlLegend}>Choose a reading lens</legend>
      <p className={styles.controlIntro}>
        Optional. This changes emphasis and suggested paths; the facts and complete portfolio stay
        the same.
      </p>
      <div className={styles.lensOptions} role="group" aria-label="Reading lens options">
        {READING_LENSES.map((lens) => (
          <button
            key={lens.id}
            type="button"
            className={styles.lensOption}
            data-active={value === lens.id}
            aria-pressed={value === lens.id}
            onClick={() => onChange(lens.id)}
            onKeyDown={(event) => activateWithKeyboard(event, lens.id)}
          >
            <span className={styles.lensMark} aria-hidden="true" />
            <span>
              <span className={styles.lensLabel}>{lens.label}</span>
              <span className={styles.lensDescription}>{lens.description}</span>
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  )
}
