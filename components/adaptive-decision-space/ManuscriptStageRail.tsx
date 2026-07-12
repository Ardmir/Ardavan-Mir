"use client"

import { useEffect, useState } from "react"
import styles from "@/components/adaptive-decision-space/manuscript.module.css"

const STAGES = [
  { id: "ambiguity", index: "01", label: "Ambiguity" },
  { id: "structure", index: "02", label: "Structure" },
  { id: "prototype", index: "03", label: "Prototype" },
  { id: "evidence", index: "04", label: "Evidence" },
  { id: "story", index: "05", label: "Story" },
  { id: "alignment", index: "06", label: "Alignment" },
] as const

type StageId = (typeof STAGES)[number]["id"]

export function ManuscriptStageRail() {
  const [activeStage, setActiveStage] = useState<StageId>("ambiguity")

  useEffect(() => {
    const sections = STAGES.map((stage) => document.getElementById(stage.id)).filter(
      (section): section is HTMLElement => Boolean(section)
    )

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setActiveStage(visible.target.id as StageId)
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.stageRail} aria-label="Decision Space stages">
      <p className={styles.stageRailLabel}>Decision Space</p>
      <ol>
        {STAGES.map((stage) => (
          <li key={stage.id}>
            <a
              href={`#${stage.id}`}
              data-active={activeStage === stage.id}
              aria-current={activeStage === stage.id ? "location" : undefined}
              onClick={() => setActiveStage(stage.id)}
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
