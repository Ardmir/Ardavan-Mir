import { READING_LENSES, type ReadingLens } from "@/content/adaptive-decision-space"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"

type ReadingLensControlProps = {
  value: ReadingLens | null
  onChange: (lens: ReadingLens) => void
  onReset: () => void
}

export function ReadingLensControl({ value, onChange, onReset }: ReadingLensControlProps) {
  const activeLens = READING_LENSES.find((lens) => lens.id === value)

  return (
    <fieldset id="reading-lens" className={styles.lensFieldset}>
      <legend className={styles.srOnly}>Choose a reading lens</legend>

      <div className={styles.lensConsoleHeader}>
        <div className={styles.lensInvitation}>
          <p className={styles.controlLegend}>Shape your reading</p>
          <h2 className={styles.lensPrompt}>What are you here to understand?</h2>
          <p className={styles.controlIntro}>
            Choose a lens and the manuscript threads the most relevant evidence forward. Nothing is
            hidden, rewritten, or tracked.
          </p>
        </div>

        <aside className={styles.lensStatus} aria-live="polite" aria-atomic="true">
          <span className={styles.lensStatusMark} aria-hidden="true" />
          <p className={styles.noteLabel}>Current lens</p>
          <p className={styles.noteValue}>{activeLens?.label ?? "Canonical manuscript"}</p>
          <p className={styles.lensStatusNote}>
            {activeLens?.pathNote ?? "The complete portfolio is open. Choose a perspective below."}
          </p>
          <div className={styles.lensStatusActions}>
            <span>Stored on this device only</span>
            {value ? (
              <button type="button" onClick={onReset}>Reset</button>
            ) : (
              <span className={styles.lensStatusCue}>Choose below ↓</span>
            )}
          </div>
        </aside>
      </div>

      <div className={styles.lensOptions} role="group" aria-label="Reading lens options">
        {READING_LENSES.map((lens) => (
          <button
            key={lens.id}
            type="button"
            className={styles.lensOption}
            data-active={value === lens.id}
            aria-pressed={value === lens.id}
            onClick={() => onChange(lens.id)}
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
