"use client"

import { Mail, Linkedin, FileText } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import ClarityEngine from "@/components/portfolio/clarity-engine"
import IALogotype from "@/components/ia-logotype"
import PortfolioChat from "@/components/PortfolioChat"
import ProjectCardVisual from "@/components/ProjectCardVisual"
import { RESEARCH_ENTRIES, RESEARCH_SECTION } from "@/content/research"

const NAV = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

const PROOF_POINTS = [
  "Intuit Enterprise Suite",
  "QuickBooks Online Advanced",
  "AI Experience Design",
  "Information Architecture",
  "Financial Workflows",
  "Executive Storytelling",
]

const PROOF_LAYER_CARDS = [
  {
    title: "Future-state product ambiguity",
    copy: "Turning early AI-native concepts into structured models, prototypes, and narratives that help teams align around what should exist next.",
  },
  {
    title: "High-trust financial workflows",
    copy: "Designing experiences where evidence, context, controls, and human judgment stay visible in complex decision-making moments.",
  },
  {
    title: "Executive-ready product storytelling",
    copy: "Making complex product capabilities tangible through demos, visual narratives, and clear product stories for leadership audiences.",
  },
  {
    title: "Prototype-driven alignment",
    copy: "Using functional prototypes and polished artifacts to help teams evaluate direction before the product is fully built.",
  },
]

const PROOF_LAYER_ARC = [
  "Ambiguity",
  "Structure",
  "Prototype",
  "Story",
  "Alignment",
]

const PROJECTS = [
  {
    no: "01",
    title: "Intuit Enterprise Suite",
    href: "/work/intuit-enterprise-suite",
    label: "Enterprise SaaS · AI-native workflows · Financial systems",
    description:
      "Helped define and communicate AI-native product direction for complex enterprise finance workflows, translating ambiguity into clearer information architecture, prototype concepts, and leadership-ready product narratives.",
    outcome:
      "Helped make complex financial systems easier to understand, evaluate, and act on through evidence-backed product thinking, workflow design, and storytelling.",
    cta: "View case study",
    feature: true,
    visual: "ies" as const,
  },
  {
    no: "02",
    title: "QuickBooks Online Advanced — Dimensional Chart of Accounts",
    href: "/work/quickbooks-dimensional-chart-of-accounts",
    label: "Advanced accounting · IA · Classification & reporting",
    description:
      "Shaped advanced accounting workflows that help teams understand multi-dimensional classification, reporting, and decision-making inside a complex financial product.",
    outcome:
      "Created clearer structure around dense accounting workflows and financial information architecture.",
    cta: "View case study",
    feature: true,
    visual: "qboa" as const,
  },
  {
    no: "03",
    sectionLabel: "Founder initiative",
    title: "Iranians Who Design",
    href: "https://iranianxdesign.com/",
    label: "Founder project · Community platform · Design identity",
    description:
      "Created a community-driven platform to make Iranian designers in tech more visible, connected, and discoverable.",
    outcome:
      "Applied information architecture, identity, discovery, and storytelling to turn a dispersed community into a more legible platform.",
    cta: null,
    feature: false,
  },
]

const PRINCIPLES = [
  {
    t: "Structure before interface",
    d: "I start by understanding the system: the entities, relationships, decisions, constraints, and moments where people lose confidence.",
  },
  {
    t: "Trust before automation",
    d: "AI should not feel like magic. It should make reasoning visible, keep people in control, and support judgment rather than replace it.",
  },
  {
    t: "Explainability before intelligence",
    d: "An intelligent experience is only useful when people can understand what is happening, why it matters, and what they can do next.",
  },
  {
    t: "Systems that scale across teams",
    d: "I design patterns, IA models, and workflows that can hold complexity across product surfaces, teams, and business contexts.",
  },
]

const STRENGTHS = [
  "Enterprise SaaS",
  "AI-native workflows",
  "Financial systems",
  "Information architecture",
  "Workflow design",
  "Product storytelling",
  "Explainability & trust",
  "Executive communication",
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
      <section id="top" className="px-6 pt-32 pb-12 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-6xl rise">
          <span className="hero-eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em]">
            Senior Product Designer · Toronto
          </span>
          <h1 className="hero-monolith mt-6">
            <span className="hero-monolith__filled">
              I design AI-native enterprise products that make financial complexity{" "}
            </span>
            <span className="hero-monolith__outline">legible.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
            I work across information architecture, AI experiences, and high-trust financial
            workflows — turning complex systems into product experiences people can understand,
            trust, and act on.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#7CE7D6]/90 sm:text-base">
            Make the system legible before making it smart.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-[#31F5D4] px-6 py-2.5 font-ui text-sm text-[#07110F] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31F5D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A]"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] px-6 py-2.5 font-ui text-sm text-[#F4F7F6] transition-colors hover:border-[#31F5D4]/50 hover:text-[#31F5D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31F5D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section aria-label="Focus areas" className="border-t border-[rgba(255,255,255,0.08)] px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#A8B3B0]">
            {PROOF_POINTS.map((point, i) => (
              <li key={point} className="flex items-center gap-4">
                {i > 0 && (
                  <span aria-hidden="true" className="hidden text-[#5E6865] sm:inline">
                    ·
                  </span>
                )}
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl font-body text-[13px] leading-relaxed text-[#A8B3B0]/80 sm:text-sm">
            Recognized for turning complex AI and enterprise finance concepts into clear, tangible
            product stories for leadership, partner-facing, and company showcase moments.
          </p>
        </div>
      </section>

      {/* What teams bring me in for */}
      <section
        id="what-teams-bring-me-in-for"
        aria-labelledby="proof-layer-heading"
        className="proof-layer border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl rise">
          <p className="proof-layer__eyebrow font-mono text-xs uppercase tracking-[0.16em] text-[#7CE7D6]">
            Where I create leverage
          </p>
          <h2 id="proof-layer-heading" className="monolith-title monolith-title--section mt-4">
            What teams bring me in for
          </h2>
          <p className="proof-layer__intro mt-5 max-w-3xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
            I&rsquo;m often brought into ambiguous, high-stakes product moments where teams need to
            turn future direction into something clear, credible, and actionable.
          </p>

          <div className="proof-layer__arc" aria-hidden="true">
            <div className="proof-layer__arc-track">
              {PROOF_LAYER_ARC.map((step, i) => (
                <div key={step} className="proof-layer__arc-step">
                  <span className="proof-layer__arc-node" />
                  <span className="proof-layer__arc-label">{step}</span>
                  {i < PROOF_LAYER_ARC.length - 1 && (
                    <span className="proof-layer__arc-connector" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="proof-layer__grid mt-10 grid gap-5 sm:grid-cols-2">
            {PROOF_LAYER_CARDS.map((card, i) => (
              <article key={card.title} className="proof-layer__card">
                <span className="proof-layer__card-index font-display text-sm text-[#31F5D4]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="monolith-title monolith-title--card-sm mt-3">{card.title}</h3>
                <p className="mt-3 font-body text-[14px] leading-relaxed text-[#A8B3B0]">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>

          <p className="proof-layer__closing mt-10 max-w-3xl font-body text-[14px] leading-relaxed text-[#A8B3B0]/90 sm:text-[15px]">
            The work is not just about designing screens. It is about making complex product direction
            easier to understand, evaluate, and believe in.
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
          <div className="mb-12">
            <h2 className="monolith-title monolith-title--section">Selected work</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.filter((p) => p.feature).map((p) => (
              <article
                key={p.no}
                className="flex flex-col rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111719] p-7 transition-colors hover:border-[#31F5D4]/30"
              >
                <div className="mb-4">
                  <span className="font-display text-[1.75rem] text-[#31F5D4]">{p.no}</span>
                </div>
                {"visual" in p && p.visual ? <ProjectCardVisual variant={p.visual} /> : null}
                <h3 className="monolith-title monolith-title--card mt-4">{p.title}</h3>
                <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.12em] text-[#7CE7D6]">
                  {p.label}
                </p>
                <p className="mt-4 font-body text-[14.5px] leading-relaxed text-[#A8B3B0]">
                  {p.description}
                </p>
                <p className="mt-4 font-body text-[14px] leading-relaxed text-[#A8B3B0]">
                  <span className="text-[#F4F7F6]">Outcome: </span>
                  {p.outcome}
                </p>
                {p.cta && p.href ? (
                  <Link
                    href={p.href}
                    className="mt-5 inline-flex font-ui text-[11px] uppercase tracking-[0.12em] text-[#31F5D4] transition-colors hover:text-[#7CE7D6]"
                  >
                    {p.cta} →
                  </Link>
                ) : p.cta ? (
                  <p className="mt-5 font-ui text-[11px] uppercase tracking-[0.12em] text-[#5E6865]">
                    {p.cta}
                  </p>
                ) : null}
              </article>
            ))}
          </div>

          {/* Founder initiative */}
          {PROJECTS.filter((p) => !p.feature).map((p) => (
            <div key={p.no} className="mt-10">
              {p.sectionLabel && (
                <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.14em] text-[#5E6865]">
                  {p.sectionLabel}
                </p>
              )}
              <a
                href={p.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#0B0F10] p-5 transition-colors hover:border-[#31F5D4]/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <ProjectCardVisual variant="community" />
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[1.5rem] text-[#31F5D4]">{p.no}</span>
                      <h3 className="monolith-title monolith-title--card">{p.title}</h3>
                    </div>
                    <p className="mt-1 font-ui text-[12px] uppercase tracking-[0.12em] text-[#7CE7D6]">
                      {p.label}
                    </p>
                    <p className="mt-2 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
                      {p.description}
                    </p>
                    <p className="mt-2 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
                      <span className="text-[#F4F7F6]">Outcome: </span>
                      {p.outcome}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 font-ui text-xs text-[#A8B3B0] transition-colors group-hover:text-[#31F5D4]">
                  iranianxdesign.com →
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Research & Strategy */}
      <section
        id="research-strategy"
        aria-labelledby="research-strategy-heading"
        className="border-t border-[rgba(255,255,255,0.12)] px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7CE7D6]">
            {RESEARCH_SECTION.eyebrow}
          </p>
          <h2 id="research-strategy-heading" className="monolith-title monolith-title--section mt-4">
            {RESEARCH_SECTION.heading}
          </h2>
          <p className="mt-4 max-w-3xl font-body text-[15px] leading-relaxed text-[#A8B3B0] sm:text-base">
            {RESEARCH_SECTION.intro}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {RESEARCH_ENTRIES.map((entry, i) => (
              <article
                key={entry.id}
                className="research-card flex flex-col rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111719] p-6"
              >
                <span className="font-display text-sm text-[#31F5D4]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="research-card__visual mt-3" aria-hidden="true">
                  <span className="research-card__visual-line" />
                  <span className="research-card__visual-node" />
                </div>
                <h3 className="monolith-title monolith-title--card-sm mt-4">{entry.title}</h3>
                <p className="mt-2 font-ui text-[11px] uppercase tracking-[0.1em] text-[#7CE7D6]/90">
                  {entry.eyebrow}
                </p>
                <p className="mt-3 flex-1 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
                  {entry.summary}
                </p>
                <div className="mt-5">
                  <Link
                    href={entry.href}
                    className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#31F5D4] transition-colors hover:text-[#7CE7D6]"
                  >
                    {entry.ctaLabel} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Link
            href={RESEARCH_SECTION.ctaHref}
            className="mt-8 inline-flex font-ui text-[11px] uppercase tracking-[0.12em] text-[#31F5D4] transition-colors hover:text-[#7CE7D6]"
          >
            {RESEARCH_SECTION.ctaLabel} →
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="monolith-title monolith-title--section mb-12">
            How I make complex systems legible
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((pr, i) => (
              <div key={pr.t} className="rounded-[6px] bg-[#111719] p-7">
                <span className="font-display text-sm text-[#31F5D4]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="monolith-title monolith-title--card-sm mt-3">{pr.t}</h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-[#A8B3B0]">
                  {pr.d}
                </p>
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
            <div className="max-w-2xl space-y-4 font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
              <p>
                I&rsquo;m Ardavan Mirhosseini, a Senior Product Designer based in Toronto. My work
                sits at the intersection of enterprise software, AI-native workflows, and financial
                systems — places where complexity is high and clarity matters.
              </p>
              <p>
                I focus on information architecture, workflow design, and intelligent product
                experiences that help people make sense of dense systems. I care about the hard
                part: understanding complexity deeply enough to make it legible, then designing AI
                assistance that supports human judgment instead of hiding it.
              </p>
              <p>
                I&rsquo;m often brought into ambiguous, high-stakes product moments where teams need
                clarity, structure, prototypes, and a story that can align people around what
                matters.
              </p>
              <p>
                Outside enterprise work, I created Iranians Who Design, a platform that makes
                Iranian designers in tech more visible, connected, and discoverable.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/ardavan.png"
              alt="Ardavan Mirhosseini"
              width={180}
              height={180}
              className="mb-6 h-[180px] w-[180px] rounded-full border border-[rgba(255,255,255,0.08)] object-cover"
            />
            <h3 className="mb-4 font-ui text-xs uppercase tracking-[0.16em] text-[#A8B3B0]">
              Focus areas
            </h3>
            <ul className="flex flex-wrap gap-2">
              {STRENGTHS.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-[#111719] px-3 py-1.5 font-ui text-[12px] text-[#F4F7F6]"
                >
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
          <h2 className="monolith-title monolith-title--section">Let&rsquo;s build clearer systems.</h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
            Available for senior product design opportunities shaping enterprise AI, fintech, and
            high-trust product experiences.
          </p>
          <div className="contact-actions mt-8 flex flex-wrap items-center gap-3">
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
            <a
              href="/resume-ardavan-mir.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ardavan Mirhosseini resume"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] text-[#F4F7F6] transition-colors hover:border-[#31F5D4]/50 hover:text-[#31F5D4]"
            >
              <FileText size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>

          <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.14em] text-[#A8B3B0]/60">
            © {new Date().getFullYear()} Ardavan Mirhosseini · Toronto, ON
          </p>
        </div>
      </section>

      <PortfolioChat />
    </main>
  )
}
