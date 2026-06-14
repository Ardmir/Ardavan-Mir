"use client"

import { useCallback, useEffect, useState } from "react"

type Stage = {
  key: string
  kicker: string
  title: string
  detail: string
  spark?: boolean
}

const STAGES: Stage[] = [
  {
    key: "challenge",
    kicker: "01 · Input",
    title: "Customer challenge",
    detail: "A dense, ambiguous financial problem arrives across teams and systems.",
  },
  {
    key: "logic",
    kicker: "02 · Structure",
    title: "Workflow logic",
    detail: "The system is made legible — modeled into clear states, rules, and steps.",
  },
  {
    key: "assist",
    kicker: "03 · Intelligence",
    title: "AI assist",
    detail: "Intelligence surfaces options with reasoning the user can inspect and trust.",
    spark: true,
  },
  {
    key: "action",
    kicker: "04 · Outcome",
    title: "Confident action",
    detail: "The person decides and acts — clear on what happened and why.",
  },
]

function StageChevron({ expanded }: { expanded: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "shrink-0 text-[#31F5D4] transition-transform duration-300 motion-reduce:transition-none md:hidden",
        expanded ? "rotate-180" : "",
      ].join(" ")}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" focusable="false">
        <path
          d="M2.5 4.5L6 8l3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export default function ClarityEngine() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const [focusedKey, setFocusedKey] = useState<string | null>(null)
  const [toggledKeys, setToggledKeys] = useState<Set<string>>(() => new Set())
  const [hoverCapable, setHoverCapable] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setHoverCapable(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const isExpanded = useCallback(
    (key: string) =>
      hoveredKey === key || focusedKey === key || toggledKeys.has(key),
    [hoveredKey, focusedKey, toggledKeys]
  )

  const toggleKey = (key: string) => {
    setToggledKeys((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div
      className="relative w-full rounded-[6px] bg-[#0B0F10]/80 p-5 sm:p-7 backdrop-blur-sm"
      role="group"
      aria-label="The Clarity Engine: customer challenge to workflow logic to AI assist to confident action"
    >
      {/* Panel header — UI chrome (sans) */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span aria-hidden className="spark text-base leading-none">✦</span>
          <span className="font-ui text-xs uppercase tracking-[0.18em] text-[#A8B3B0]">
            Clarity Engine
          </span>
        </div>
        <span className="font-ui text-[11px] uppercase tracking-[0.18em] text-[#A8B3B0]/70">
          Decision layer
        </span>
      </div>

      {/* Flow connector (decorative) */}
      <svg
        className="mb-5 hidden h-6 w-full md:block"
        viewBox="0 0 800 24"
        fill="none"
        aria-hidden="true"
      >
        <line
          x1="8"
          y1="12"
          x2="792"
          y2="12"
          stroke="#31F5D4"
          strokeWidth="1.5"
          className="flow-line"
        />
      </svg>

      {/* Stages */}
      <ol className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {STAGES.map((s, i) => {
          const expanded = isExpanded(s.key)
          return (
            <li key={s.key} className="relative">
              <button
                type="button"
                onMouseEnter={() => hoverCapable && setHoveredKey(s.key)}
                onMouseLeave={() => hoverCapable && setHoveredKey(null)}
                onFocus={() => setFocusedKey(s.key)}
                onBlur={() => setFocusedKey(null)}
                onClick={() => toggleKey(s.key)}
                aria-expanded={expanded}
                className={[
                  "group flex h-full w-full flex-col rounded-[6px] p-4 text-left transition-colors duration-300",
                  "bg-[#111719]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31F5D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111719]",
                  expanded
                    ? "bg-[#151D20]"
                    : "hover:bg-[#151D20]/60 max-md:shadow-[inset_0_0_0_1px_rgba(49,245,212,0.18)]",
                ].join(" ")}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#A8B3B0]">
                    {s.kicker}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {s.spark && (
                      <span aria-hidden className="spark text-sm leading-none">✦</span>
                    )}
                    <StageChevron expanded={expanded} />
                  </div>
                </div>
                <div className="monolith-title monolith-title--stage">{s.title}</div>
                <p
                  className={[
                    "mt-1.5 overflow-hidden font-body text-[12.5px] leading-relaxed text-[#A8B3B0]",
                    "transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0",
                    expanded ? "max-h-24 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  {s.detail}
                </p>
              </button>
              {i < STAGES.length - 1 && (
                <span
                  aria-hidden
                  className="spark absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-xs md:block"
                >
                  →
                </span>
              )}
            </li>
          )
        })}
      </ol>

      <p className="mt-5 font-body text-[12px] leading-relaxed text-[#A8B3B0]/80">
        <span className="spark">Make the system legible before making it smart.</span> Each
        stage stays inspectable, so intelligence builds trust instead of replacing judgment.
      </p>
    </div>
  )
}
