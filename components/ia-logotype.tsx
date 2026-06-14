"use client"

export default function IALogotype() {
  return (
    <a
      href="#top"
      aria-label="Ardavan Mir, Senior Product Designer"
      className="ia-logotype group"
    >
      <span aria-hidden="true" className="ia-logotype__first">
        <span className="ia-logotype__full">Ardavan</span>
        <span className="ia-logotype__compact">A</span>
      </span>
      <span aria-hidden="true" className="ia-logotype__slash">
        <svg
          viewBox="0 0 24 32"
          width="14"
          height="19"
          focusable="false"
          aria-hidden="true"
        >
          <line
            x1="17"
            y1="4"
            x2="7"
            y2="28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span aria-hidden="true" className="ia-logotype__last">
        Mir
      </span>
    </a>
  )
}
