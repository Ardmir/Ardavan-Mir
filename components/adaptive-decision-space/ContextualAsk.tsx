import Link from "next/link"
import type { KeyboardEvent } from "react"
import { ASK_ARDAVAN_PROMPTS, type AskArdavanPromptId } from "@/content/ask-ardavan"
import { PROVENANCE_LABELS } from "@/content/adaptive-decision-space"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"

type ContextualAskProps = {
  questionIds: AskArdavanPromptId[]
  openQuestion: AskArdavanPromptId | null
  onQuestionChange: (question: AskArdavanPromptId | null) => void
}

export function ContextualAsk({
  questionIds,
  openQuestion,
  onQuestionChange,
}: ContextualAskProps) {
  const toggleWithKeyboard = (
    event: KeyboardEvent<HTMLButtonElement>,
    question: AskArdavanPromptId
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    onQuestionChange(openQuestion === question ? null : question)
  }

  const questions = questionIds
    .map((id) => ASK_ARDAVAN_PROMPTS.find((prompt) => prompt.id === id))
    .filter((prompt): prompt is NonNullable<typeof prompt> => Boolean(prompt))
  const selected = ASK_ARDAVAN_PROMPTS.find((prompt) => prompt.id === openQuestion)

  return (
    <section id="apparatus" className={styles.apparatus} aria-labelledby="apparatus-title">
      <div className={styles.apparatusHeading}>
        <p className={styles.sectionNumber}>Apparatus · A</p>
        <h2 id="apparatus-title">Ask in the margin</h2>
        <p>
          Contextual guidance from approved public portfolio copy. These are deterministic answers,
          not a live AI conversation.
        </p>
      </div>

      <div className={styles.footnotePrompts} aria-label="Contextual Ask Ardavan questions">
        {questions.map((question, index) => (
          <button
            key={question.id}
            type="button"
            aria-expanded={openQuestion === question.id}
            aria-controls={`answer-${question.id}`}
            onClick={() => onQuestionChange(openQuestion === question.id ? null : question.id)}
            onKeyDown={(event) => toggleWithKeyboard(event, question.id)}
          >
            <sup>{index + 1}</sup>
            <span>{question.label}</span>
          </button>
        ))}
      </div>

      {selected ? (
        <div id={`answer-${selected.id}`} className={styles.answerCartouche} aria-live="polite">
          <div className={styles.answerMeta}>
            <span className={styles.signedKnot} aria-hidden="true">◆</span>
            <span>Approved answer · not generated</span>
          </div>
          <h3>{selected.assistantTitle}</h3>
          <p>{selected.answer}</p>
          {selected.links?.length ? (
            <ul>
              {selected.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                    {link.external ? <span className={styles.srOnly}> (opens in a new tab)</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <div className={styles.provenanceLedger}>
        <h3>Provenance key</h3>
        <dl>
          {Object.entries(PROVENANCE_LABELS).map(([state, item]) => (
            <div key={state} data-provenance={state}>
              <dt>
                <span className={styles.siglum} aria-hidden="true">{item.siglum}</span>
                {item.label}
              </dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
