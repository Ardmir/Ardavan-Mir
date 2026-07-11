"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import {
  ASK_ARDAVAN_GUARDRAIL,
  ASK_ARDAVAN_INTRO,
  ASK_ARDAVAN_PROMPTS,
  type AskArdavanPromptId,
} from "@/content/ask-ardavan"

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<AskArdavanPromptId | null>(null)

  const panelId = useId()
  const titleId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const selected = ASK_ARDAVAN_PROMPTS.find((p) => p.id === selectedId)
  const suggestedNext =
    selected?.suggestedNext?.filter((id) => id !== selectedId) ?? []

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const startOver = useCallback(() => {
    setSelectedId(null)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        close()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, close])

  return (
    <div className="portfolio-chat">
      <button
        type="button"
        className="portfolio-chat__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close Ask Ardavan" : "Open Ask Ardavan"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="portfolio-chat__trigger-spark" aria-hidden="true">
          ✦
        </span>
        Ask Ardavan
      </button>

      <div
        id={panelId}
        role={isOpen ? "dialog" : undefined}
        aria-modal={isOpen ? "false" : undefined}
        aria-labelledby={isOpen ? titleId : undefined}
        aria-hidden={!isOpen}
        hidden={!isOpen}
        className="portfolio-chat__panel"
      >
        <div className="portfolio-chat__header">
          <div>
            <h2 id={titleId} className="portfolio-chat__title">
              {ASK_ARDAVAN_INTRO.title}
            </h2>
            <p className="portfolio-chat__subtitle">{ASK_ARDAVAN_INTRO.description}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="portfolio-chat__close"
            onClick={close}
            aria-label="Close Ask Ardavan"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <p className="portfolio-chat__guardrail">{ASK_ARDAVAN_GUARDRAIL}</p>

        {selected ? (
          <div className="portfolio-chat__exchange" aria-live="polite">
            <p className="portfolio-chat__user-line">{selected.prompt}</p>
            <div className="portfolio-chat__answer">
              <p className="portfolio-chat__answer-title">{selected.assistantTitle}</p>
              <p className="portfolio-chat__answer-body">{selected.answer}</p>
              {selected.links && selected.links.length > 0 && (
                <ul className="portfolio-chat__links">
                  {selected.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                        {link.external ? (
                          <span className="sr-only"> (opens in new tab)</span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <p className="portfolio-chat__hint">
            Choose a topic below to see an approved answer from public portfolio content.
          </p>
        )}

        {selected && suggestedNext.length > 0 && (
          <div
            className="portfolio-chat__suggestions"
            role="group"
            aria-label="Suggested next prompts"
          >
            <p className="portfolio-chat__suggestions-label">You might also ask</p>
            <div className="portfolio-chat__suggestion-chips">
              {suggestedNext.map((id) => {
                const prompt = ASK_ARDAVAN_PROMPTS.find((p) => p.id === id)
                if (!prompt) return null
                return (
                  <button
                    key={id}
                    type="button"
                    className="portfolio-chat__suggestion-chip"
                    onClick={() => setSelectedId(id)}
                  >
                    {prompt.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="portfolio-chat__chips" role="group" aria-label="Guided prompts">
          {ASK_ARDAVAN_PROMPTS.map((item) => {
            const isActive = selectedId === item.id
            return (
              <button
                key={item.id}
                type="button"
                className={[
                  "portfolio-chat__chip",
                  isActive ? "portfolio-chat__chip--active" : "",
                ].join(" ")}
                aria-pressed={isActive}
                onClick={() => setSelectedId(item.id)}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {selected && (
          <button type="button" className="portfolio-chat__reset" onClick={startOver}>
            Start over
          </button>
        )}
      </div>
    </div>
  )
}
