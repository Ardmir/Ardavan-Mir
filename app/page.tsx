"use client"

import { Mail, Linkedin, FileText } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import ClarityEngine from "@/components/portfolio/clarity-engine"
import IALogotype from "@/components/ia-logotype"

const NAV = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

const PROJECTS = [
  {
    no: "01",
    title: "Intuit Enterprise Suite",
    href: null as string | null,
    label: "Enterprise SaaS · AI-native systems · Financial workflows",
    role: "Senior Product Designer",
    description:
      "Designed intelligent enterprise experiences that help complex businesses understand, act on, and trust financial workflows across teams and systems.",
    focus: ["Systems thinking", "Workflow design", "AI assistance", "Trust", "Enterprise UX"],
    feature: true,
  },
  {
    no: "02",
    title: "QuickBooks Online Advanced — Dimensional Chart of Accounts",
    href: null as string | null,
    label: "Advanced accounting · Information architecture · Workflow clarity",
    role: "Product Designer",
    description:
      "Helped shape advanced accounting workflows that make complex classification, reporting, and decision-making easier to understand and act on.",
    focus: ["Accounting complexity", "Information hierarchy", "Customer confidence", "Scalable patterns"],
    feature: true,
  },
  {
    no: "03",
    title: "Iranians Who Design",
    href: "https://iranianxdesign.com/",
    label: "Founder project · Community platform · Design identity",
    role: "Founder / Designer",
    description:
      "Created a community-driven platform to make Iranian designers in tech more visible, connected, and discoverable.",
    focus: ["Community", "Identity", "Discovery", "Storytelling"],
    feature: false,
  },
]

const PRINCIPLES = [
  {
    t: "Translate complexity into clarity",
    d: "Start by making the system legible — clear states, structure, and language — before adding anything clever.",
  },
  {
    t: "Make intelligence explainable",
    d: "When the product reasons, show the reasoning. People trust what they can inspect.",
  },
  {
    t: "Design for trust before automation",
    d: "Earn confidence first; automate second. Control and transparency come before speed.",
  },
  {
    t: "Create systems that scale across teams",
    d: "Patterns and IA that hold up as organizations, data, and workflows grow more complex.",
  },
]

const STRENGTHS = [
  "Enterprise SaaS",
  "AI-native product strategy",
  "Financial systems",
  "Workflow design",
  "Interaction design",
  "Design systems",
  "Product storytelling",
  "Human-centered research and sensemaking",
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const overlay = overlayRef.current
    if (!overlay) {
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }

    const focusables = Array.from(
      overlay.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"))

    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== "Tab" || focusables.length === 0) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [menuOpen, closeMenu])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070A] text-[#F4F7F6]">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[#05070A]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <IALogotype />
          <button
            ref={menuButtonRef}
            type="button"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3B0] transition-colors hover:text-[#31F5D4]"
            aria-expanded={menuOpen}
            aria-controls="site-overlay-nav"
            aria-haspopup="dialog"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Fullscreen overlay nav */}
      {menuOpen && (
        <div
          ref={overlayRef}
          id="site-overlay-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="overlay-nav fixed inset-0 z-[60] flex flex-col px-6 py-8 lg:px-8"
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-end">
            <button
              type="button"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3B0] transition-colors hover:text-[#31F5D4]"
              onClick={closeMenu}
            >
              Close
            </button>
          </div>
          <nav
            className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-2"
            aria-label="Primary"
          >
            {NAV.map((n, i) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="overlay-nav__link"
                onClick={closeMenu}
              >
                <span className="overlay-nav__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="overlay-nav__label">{n.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Hero */}
      <section id="top" className="px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-6xl rise">
          <span className="hero-eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em]">
            Senior Product Designer · Enterprise AI · Toronto
          </span>
          <h1 className="hero-monolith mt-6">
            <span className="hero-monolith__filled">
              I design intelligent products that turn financial complexity into{" "}
            </span>
            <span className="hero-monolith__outline">confident action.</span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
            I work across enterprise SaaS, AI-native workflows, and financial systems — making
            complexity legible.
          </p>
        </div>
      </section>

      {/* Clarity Engine */}
      <section className="border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl rise">
          <ClarityEngine />
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="monolith-title monolith-title--section">Selected work</h2>
            <span className="font-ui text-xs uppercase tracking-[0.16em] text-[#A8B3B0]">Three flagship projects</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.filter((p) => p.feature).map((p) => (
              <article
                key={p.no}
                className="flex flex-col rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111719] p-7 transition-colors hover:border-[#31F5D4]/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-sm text-[#31F5D4]">{p.no}</span>
                  <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-[#A8B3B0]">{p.role}</span>
                </div>
                <h3 className="monolith-title monolith-title--card">{p.title}</h3>
                <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.12em] text-[#7CE7D6]">{p.label}</p>
                <p className="mt-4 font-body text-[14.5px] leading-relaxed text-[#A8B3B0]">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.focus.map((f) => (
                    <li key={f} className="rounded-full bg-[#111719] px-3 py-1.5 font-ui text-[12px] text-[#F4F7F6]">
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* De-emphasized founder project */}
          {PROJECTS.filter((p) => !p.feature).map((p) => (
            <a
              key={p.no}
              href={p.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex flex-col gap-2 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#0B0F10] p-5 transition-colors hover:border-[#31F5D4]/30 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-[#31F5D4]">{p.no}</span>
                  <h3 className="monolith-title monolith-title--card-sm">{p.title}</h3>
                </div>
                <p className="mt-1 font-body text-[13px] text-[#A8B3B0]">{p.description}</p>
              </div>
              <span className="shrink-0 font-ui text-xs text-[#A8B3B0] transition-colors group-hover:text-[#31F5D4]">
                iranianxdesign.com →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="monolith-title monolith-title--section mb-12">Approach</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((pr, i) => (
              <div key={pr.t} className="rounded-[6px] bg-[#111719] p-7">
                <span className="font-display text-sm text-[#31F5D4]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="monolith-title monolith-title--card-sm mt-3">{pr.t}</h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-[#A8B3B0]">{pr.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="monolith-title monolith-title--section mb-6">About</h2>
            <p className="max-w-2xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
              I&rsquo;m Ardavan Mirhosseini, a Senior Product Designer based in Toronto. My work
              sits at the intersection of enterprise product design, AI-native systems, and
              financial workflows. I care about turning dense customer problems into experiences
              that feel clear, trustworthy, and useful — especially in domains where accuracy,
              confidence, and timing matter.
            </p>
          </div>
          <div>
            <Image
              src="/ardavan.png"
              alt="Ardavan Mirhosseini"
              width={180}
              height={180}
              className="mb-6 h-[180px] w-[180px] rounded-full border border-[rgba(255,255,255,0.12)] object-cover"
            />
            <h3 className="mb-4 font-ui text-xs uppercase tracking-[0.16em] text-[#A8B3B0]">Strengths</h3>
            <ul className="flex flex-wrap gap-2">
              {STRENGTHS.map((s) => (
                <li key={s} className="rounded-full bg-[#111719] px-3 py-1.5 font-ui text-[12px] text-[#F4F7F6]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="monolith-title monolith-title--section">Let&rsquo;s talk</h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
            Available for senior product design roles shaping intelligent, high-trust product
            experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:ardavanmir@outlook.com"
              aria-label="Email ardavanmir@outlook.com"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#31F5D4] text-[#07110F] transition-transform hover:scale-[1.03]"
            >
              <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/ardavanmir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] text-[#F4F7F6] transition-colors hover:border-[#31F5D4]/50 hover:text-[#31F5D4]"
            >
              <Linkedin size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
            {/* TODO: link résumé once the refreshed, [VERIFY]-cleared PDF is provided. */}
            <span
              aria-disabled="true"
              aria-label="Résumé — coming soon"
              title="Résumé refresh in progress"
              className="inline-flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-dashed border-[rgba(255,255,255,0.18)] text-[#A8B3B0]/50"
            >
              <FileText size={20} strokeWidth={1.75} aria-hidden="true" />
            </span>
          </div>

          <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.14em] text-[#A8B3B0]/60">
            © {new Date().getFullYear()} Ardavan Mirhosseini · Toronto, ON
          </p>
        </div>
      </section>
    </main>
  )
}
