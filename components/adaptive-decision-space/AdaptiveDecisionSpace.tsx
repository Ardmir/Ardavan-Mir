"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { AskArdavanPromptId } from "@/content/ask-ardavan"
import {
  PORTFOLIO_BLOCKS,
  READING_LENSES,
  type DecisionStage,
  type ReadingDepth,
  type ReadingLens,
} from "@/content/adaptive-decision-space"
import { ContextualAsk } from "@/components/adaptive-decision-space/ContextualAsk"
import { DecisionRail } from "@/components/adaptive-decision-space/DecisionRail"
import { EvidencePassage } from "@/components/adaptive-decision-space/EvidencePassage"
import { ReadingDepthControl } from "@/components/adaptive-decision-space/ReadingDepthControl"
import { ReadingLensControl } from "@/components/adaptive-decision-space/ReadingLensControl"
import styles from "@/app/explorations/adaptive-decision-space/prototype.module.css"

const STORAGE_KEY = "ardavan-adaptive-reading-v1"

type PersistedReading = {
  lens: ReadingLens | null
  depth: ReadingDepth
  expandedPassages: string[]
  openQuestion: AskArdavanPromptId | null
  currentStage: DecisionStage
}

const DEFAULT_READING: PersistedReading = {
  lens: null,
  depth: "quick",
  expandedPassages: [],
  openQuestion: null,
  currentStage: "ambiguity",
}

const QUESTIONS_BY_LENS: Record<ReadingLens | "default", AskArdavanPromptId[]> = {
  default: ["start", "ai-native", "contact"],
  hiring: ["teams-bring-in", "ies", "contact"],
  "ai-thinking": ["trustworthy-ai", "research", "ies"],
  "systems-craft": ["ies", "research", "start"],
}

const MOTION_STAGE_TARGETS: ReadonlyArray<{
  selector: string
  stage: DecisionStage
}> = [
  { selector: "#opening", stage: "ambiguity" },
  { selector: "#decision-spine-structure", stage: "structure" },
  { selector: "#decision-spine-prototype", stage: "prototype" },
  { selector: "#evidence", stage: "evidence" },
  { selector: "#apparatus", stage: "story" },
  { selector: "#colophon", stage: "alignment" },
]

type AdaptiveDecisionSpaceProps = {
  edition?: "prototype" | "production"
}

export function AdaptiveDecisionSpace({ edition = "prototype" }: AdaptiveDecisionSpaceProps) {
  const [lens, setLens] = useState<ReadingLens | null>(DEFAULT_READING.lens)
  const [depth, setDepth] = useState<ReadingDepth>(DEFAULT_READING.depth)
  const [expandedPassages, setExpandedPassages] = useState<Set<string>>(
    () => new Set(DEFAULT_READING.expandedPassages)
  )
  const [openQuestion, setOpenQuestion] = useState<AskArdavanPromptId | null>(
    DEFAULT_READING.openQuestion
  )
  const [currentStage, setCurrentStage] = useState<DecisionStage>(DEFAULT_READING.currentStage)
  const [persistenceReady, setPersistenceReady] = useState(false)
  const [motionReady, setMotionReady] = useState(false)
  const [decisionSpineResolved, setDecisionSpineResolved] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<PersistedReading>
        if (parsed.lens === null || READING_LENSES.some((item) => item.id === parsed.lens)) {
          setLens(parsed.lens ?? null)
        }
        if (parsed.depth === "quick" || parsed.depth === "standard" || parsed.depth === "deep") {
          setDepth(parsed.depth)
        }
        if (Array.isArray(parsed.expandedPassages)) {
          setExpandedPassages(new Set(parsed.expandedPassages))
        }
        if (typeof parsed.openQuestion === "string") {
          setOpenQuestion(parsed.openQuestion as AskArdavanPromptId)
        }
        if (
          parsed.currentStage === "ambiguity" ||
          parsed.currentStage === "structure" ||
          parsed.currentStage === "prototype" ||
          parsed.currentStage === "evidence" ||
          parsed.currentStage === "story" ||
          parsed.currentStage === "alignment"
        ) {
          setCurrentStage(parsed.currentStage)
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY)
    } finally {
      setPersistenceReady(true)
    }
  }, [])

  useEffect(() => {
    if (!persistenceReady) return
    const reading: PersistedReading = {
      lens,
      depth,
      expandedPassages: Array.from(expandedPassages),
      openQuestion,
      currentStage,
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reading))
  }, [currentStage, depth, expandedPassages, lens, openQuestion, persistenceReady])

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return

    const targets = MOTION_STAGE_TARGETS.flatMap(({ selector, stage }) => {
      const element = document.querySelector<HTMLElement>(selector)
      return element ? [{ element, stage }] : []
    })
    if (!targets.length) return

    const stageByElement = new Map(targets.map(({ element, stage }) => [element, stage]))
    const visibleStages = new Map<Element, DecisionStage>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stage = stageByElement.get(entry.target as HTMLElement)
          if (!stage) return

          if (entry.isIntersecting) {
            visibleStages.set(entry.target, stage)
            if (stage === "structure" || stage === "prototype") {
              setDecisionSpineResolved(true)
            }
          } else {
            visibleStages.delete(entry.target)
          }
        })

        const readingLine = window.innerHeight * 0.5
        const closestStage = Array.from(visibleStages.entries()).sort(
          ([first], [second]) =>
            Math.abs(first.getBoundingClientRect().top - readingLine) -
            Math.abs(second.getBoundingClientRect().top - readingLine)
        )[0]

        if (closestStage) setCurrentStage(closestStage[1])
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    )

    targets.forEach(({ element }) => observer.observe(element))
    setMotionReady(true)

    return () => observer.disconnect()
  }, [])

  const activeLens = READING_LENSES.find((item) => item.id === lens)
  const questionIds = QUESTIONS_BY_LENS[lens ?? "default"]
  const weaveLevel = lens ? (depth === "deep" ? "dense" : depth === "standard" ? "medium" : "selected") : "latent"

  const togglePassage = (id: string) => {
    setExpandedPassages((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const resetReading = () => {
    setLens(DEFAULT_READING.lens)
    setDepth(DEFAULT_READING.depth)
    setExpandedPassages(new Set())
    setOpenQuestion(DEFAULT_READING.openQuestion)
    setCurrentStage(DEFAULT_READING.currentStage)
    window.localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <div
      className={styles.prototype}
      data-lens={lens ?? "default"}
      data-depth={depth}
      data-stage={currentStage}
      data-weave={weaveLevel}
      data-motion="active"
      data-motion-ready={motionReady ? "ready" : undefined}
    >
      <a href="#prototype-content" className={styles.skipLink}>Skip to portfolio content</a>

      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="Ardavan Mirhosseini, home">
          Ardavan Mirhosseini
        </Link>
        <div className={styles.headerActions}>
          <span className={styles.prototypeLabel}>
            {edition === "prototype" ? "Isolated prototype" : "Adaptive portfolio"}
          </span>
          <a
            href="#reading-lens"
            className={styles.lensShortcut}
            data-active={lens ? "true" : "false"}
            aria-label={`Reading lens: ${activeLens?.label ?? "not selected"}. Choose or change lens.`}
          >
            <span className={styles.lensShortcutMark} aria-hidden="true" />
            <span className={styles.lensShortcutFull}>
              Lens · {activeLens?.shortLabel ?? "Choose"}
            </span>
            <span className={styles.lensShortcutCompact} aria-hidden="true">Lens</span>
          </a>
          <a href="#evidence">Work</a>
          <Link href="/research">Research</Link>
          <a href="#colophon">Contact</a>
        </div>
      </header>

      <DecisionRail
        currentStage={currentStage}
        onStageChange={setCurrentStage}
        motionEnabled
      />

      <main id="prototype-content" className={styles.manuscript}>
        <section id="opening" className={styles.opening} aria-labelledby="opening-title">
          <div className={styles.openingMeta}>
            <p>Senior Product Designer · Toronto</p>
            <p>Manuscript 01 · Adaptive reading</p>
          </div>

          <div className={styles.openingGrid}>
            <div className={styles.openingStatement}>
              <p className={styles.kicker}>Enterprise SaaS · AI-native workflows · Financial systems</p>
              <h1 id="opening-title">
                I make complex systems <span>legible</span> before making them smart.
              </h1>
              <p className={styles.dek}>
                I work across information architecture, AI experiences, and high-trust financial
                workflows — turning complexity into product experiences people can understand,
                trust, and act on.
              </p>
              <div className={styles.primaryPaths}>
                <a href="#evidence">Read the evidence</a>
                <Link href="/work/intuit-enterprise-suite">Open flagship work</Link>
              </div>
            </div>

          </div>

          <ReadingLensControl value={lens} onChange={setLens} onReset={resetReading} />
        </section>

        <section
          id="decision-spine"
          className={styles.decisionSpine}
          aria-labelledby="decision-title"
          data-motion-resolved={decisionSpineResolved}
        >
          <p
            id="decision-spine-structure"
            className={styles.sectionNumber}
          >
            Decision Space · 01—06
          </p>
          <h2 id="decision-title">The portfolio is the method.</h2>
          <p>
            The manuscript moves from ambiguity to alignment. Structure and relationships become
            more visible only as the reading earns them; Evidence remains the densest stage and is
            always one interaction away.
          </p>
          <div
            id="decision-spine-prototype"
            className={styles.inscriptionBand}
            aria-hidden="true"
          >
            <span>setting</span><span>threading</span><span>resolving</span>
          </div>
        </section>

        <section id="evidence" className={styles.evidence} aria-labelledby="evidence-title">
          <div className={styles.evidenceIntro}>
            <div>
              <p className={styles.sectionNumber}>Stage 04 · Evidence</p>
              <h2 id="evidence-title">The work, with its sources left visible.</h2>
              <p>
                Reading depth unfolds pre-authored layers. Short views name what they omit, and
                every folded passage can be opened without changing the selected depth.
              </p>
            </div>
            <ReadingDepthControl value={depth} onChange={setDepth} />
          </div>

          <div className={styles.evidenceList}>
            {PORTFOLIO_BLOCKS.map((block) => (
              <EvidencePassage
                key={block.id}
                block={block}
                depth={depth}
                lens={lens}
                expanded={expandedPassages.has(block.id)}
                onToggle={() => togglePassage(block.id)}
              />
            ))}
          </div>
        </section>

        <ContextualAsk
          questionIds={questionIds}
          openQuestion={openQuestion}
          onQuestionChange={setOpenQuestion}
        />

        <footer id="colophon" className={styles.colophon}>
          <div>
            <p className={styles.sectionNumber}>
              Colophon · {edition === "prototype" ? "Prototype edition" : "Adaptive edition"}
            </p>
            <h2>Alignment closes with a clear next action.</h2>
            <p>
              {edition === "prototype"
                ? "This isolated prototype tests three adaptive moments. The production homepage and canonical case-study routes remain unchanged."
                : "This portfolio adapts emphasis and depth without changing its facts. Continue into the case studies, read the research, or start a conversation."}
            </p>
          </div>
          <div className={styles.contactLinks}>
            <a href="mailto:ardavanmir@outlook.com">Email</a>
            <a href="https://linkedin.com/in/ardavanmir" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/resume-ardavan-mir.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
            <span><span className={styles.siglum} aria-hidden="true">V</span> Verified contact paths</span>
          </div>
        </footer>
      </main>
    </div>
  )
}
