import Link from "next/link"
import type { KeyboardEvent } from "react"
import {
  PROVENANCE_LABELS,
  type PortfolioBlock,
  type ReadingDepth,
  type ReadingLens,
} from "@/content/adaptive-decision-space"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"

type EvidencePassageProps = {
  block: PortfolioBlock
  depth: ReadingDepth
  lens: ReadingLens | null
  expanded: boolean
  onToggle: () => void
}

const DEPTH_RANK = { summary: 0, standard: 1, deep: 2 } as const
const ACTIVE_DEPTH_RANK = { quick: 0, standard: 1, deep: 2 } as const

export function EvidencePassage({
  block,
  depth,
  lens,
  expanded,
  onToggle,
}: EvidencePassageProps) {
  const toggleWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    onToggle()
  }

  const currentRank = ACTIVE_DEPTH_RANK[depth]
  const visiblePassages = block.passages.filter(
    (passage) => expanded || DEPTH_RANK[passage.depth] <= currentRank
  )
  const hiddenCount = block.passages.length - visiblePassages.length
  const isRecommended = lens ? block.lenses.includes(lens) : false

  return (
    <article
      className={styles.evidencePassage}
      data-recommended={isRecommended}
      aria-labelledby={`${block.id}-title`}
    >
      <div className={styles.evidenceIndex} aria-hidden="true">
        <span className={styles.signedKnot}>◆</span>
        <span>{block.id === "ies-evidence" ? "E.01" : block.id === "qboa-evidence" ? "E.02" : "E.03"}</span>
      </div>
      <div className={styles.evidenceBody}>
        <div className={styles.evidenceHeadingRow}>
          <p className={styles.eyebrow}>{block.eyebrow}</p>
          {isRecommended ? <span className={styles.recommended}>Recommended for this lens</span> : null}
        </div>
        <h3 id={`${block.id}-title`} className={styles.evidenceTitle}>
          {block.title}
        </h3>

        <div className={styles.passageStack}>
          {visiblePassages.map((passage) => {
            const provenance = PROVENANCE_LABELS[passage.provenance]
            return (
              <div key={passage.id} className={styles.passage} data-provenance={passage.provenance}>
                <p>{passage.text}</p>
                <p className={styles.provenanceLine}>
                  <span className={styles.siglum} aria-hidden="true">
                    {provenance.siglum}
                  </span>
                  <span>{provenance.label}</span>
                  <span aria-hidden="true">·</span>
                  <span>{passage.sourceLabel}</span>
                </p>
              </div>
            )
          })}
        </div>

        {hiddenCount > 0 ? (
          <div className={styles.foldNotice}>
            <p>
              <span>Folded at this depth:</span> {hiddenCount} supporting {hiddenCount === 1 ? "passage" : "passages"}, including {depth === "quick" ? "process and reflection" : "the deeper reflection"}.
            </p>
            <button
              type="button"
              onClick={onToggle}
              onKeyDown={toggleWithKeyboard}
              aria-expanded={expanded}
            >
              Unfold this passage
            </button>
          </div>
        ) : expanded && depth !== "deep" ? (
          <button
            type="button"
            className={styles.refoldButton}
            onClick={onToggle}
            onKeyDown={toggleWithKeyboard}
          >
            Return to selected depth
          </button>
        ) : null}

        {depth === "deep" && block.withheldNote ? (
          <p className={styles.withheldNote}>
            <span className={styles.siglum} aria-hidden="true">W</span>
            <span><span className={styles.visuallyStrong}>Withheld / NDA material.</span> {block.withheldNote}</span>
          </p>
        ) : null}

        <Link href={block.href} className={styles.manuscriptLink}>
          {block.ctaLabel} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
