"use client"

import { useState } from "react"

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

export default function ClarityEngine() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div
      className="relative w-full rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#0B0F10]/80 p-5 sm:p-7 backdrop-blur-sm"
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
          const isActive = active === s.key
          return (
            <li key={s.key} className="relative">
              <button
                type="button"
                onMouseEnter={() => setActive(s.key)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(s.key)}
                onBlur={() => setActive(null)}
                aria-pressed={isActive}
                className={[
                  "group h-full w-full rounded-xl border p-4 text-left transition-colors duration-300",
                  "border-[rgba(255,255,255,0.12)] bg-[#111719]",
                  isActive ? "border-[#31F5D4]/60 bg-[#151D20]" : "hover:border-[#31F5D4]/30",
                ].join(" ")}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#A8B3B0]">
                    {s.kicker}
                  </span>
                  {s.spark && (
                    <span aria-hidden className="spark text-sm leading-none">✦</span>
                  )}
                </div>
                <div className="font-heading text-[15px] text-[#F4F7F6]">{s.title}</div>
                <p className="mt-1.5 font-body text-[12.5px] leading-relaxed text-[#A8B3B0]">
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
