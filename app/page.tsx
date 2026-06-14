"use client"

import { useState } from "react"
import Image from "next/image"
import ClarityEngine from "@/components/portfolio/clarity-engine"

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

  return (
    <main className="min-h-screen bg-[#070A0B] text-[#F4F7F6]">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(255,255,255,0.12)] bg-[#070A0B]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="#top" className="font-display text-lg tracking-tight text-[#F4F7F6]">
            Ardavan<span className="spark"> Mir</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-lg px-3 py-2 font-ui text-sm text-[#A8B3B0] transition-colors hover:text-[#31F5D4]"
              >
                {n.label}
              </a>
            ))}
            {/* Résumé — held until the refreshed PDF is verified (TODO) */}
            <span
              aria-disabled="true"
              title="Résumé refresh in progress"
              className="ml-1 cursor-not-allowed rounded-lg px-3 py-2 font-ui text-sm text-[#A8B3B0]/40"
            >
              Résumé
            </span>
          </nav>
          <button
            type="button"
            className="font-ui text-sm text-[#A8B3B0] md:hidden"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[rgba(255,255,255,0.12)] px-6 py-3 md:hidden" aria-label="Mobile">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-ui text-sm text-[#A8B3B0]"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[#111719] px-3 py-1 font-ui text-xs uppercase tracking-[0.16em] text-[#A8B3B0]">
              <span className="spark">✦</span> Senior Product Designer · Enterprise AI · Toronto
            </span>
            <h1 className="mt-6 font-editorial text-4xl leading-[1.08] text-[#F4F7F6] sm:text-5xl lg:text-6xl">
              I design intelligent products that turn{" "}
              <span className="italic">financial complexity</span> into{" "}
              <span className="spark">confident action.</span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
              Senior Product Designer focused on enterprise SaaS, AI-native workflows, and
              financial systems — transforming customer challenges into elevated moments that
              simplify complexity with clarity and deliver meaningful value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#31F5D4] px-6 py-3 font-ui text-sm font-semibold text-[#07110F] transition-transform hover:scale-[1.03]"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[rgba(255,255,255,0.18)] px-6 py-3 font-ui text-sm font-semibold text-[#F4F7F6] transition-colors hover:border-[#31F5D4]/50 hover:text-[#31F5D4]"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="rise">
            <ClarityEngine />
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-[rgba(255,255,255,0.12)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-editorial text-3xl text-[#F4F7F6] sm:text-4xl">Selected work</h2>
            <span className="font-ui text-xs uppercase tracking-[0.16em] text-[#A8B3B0]">Three flagship projects</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.filter((p) => p.feature).map((p) => (
              <article
                key={p.no}
                className="flex flex-col rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#111719] p-7 transition-colors hover:border-[#31F5D4]/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-sm text-[#31F5D4]">{p.no}</span>
                  <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-[#A8B3B0]">{p.role}</span>
                </div>
                <h3 className="font-heading text-xl leading-snug text-[#F4F7F6]">{p.title}</h3>
                <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.12em] text-[#7CE7D6]">{p.label}</p>
                <p className="mt-4 font-body text-[14.5px] leading-relaxed text-[#A8B3B0]">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.focus.map((f) => (
                    <li key={f} className="rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 font-ui text-[11px] text-[#A8B3B0]">
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
              className="group mt-6 flex flex-col gap-2 rounded-xl border border-[rgba(255,255,255,0.12)] bg-[#0B0F10] p-5 transition-colors hover:border-[#31F5D4]/30 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-[#31F5D4]">{p.no}</span>
                  <h3 className="font-heading text-base text-[#F4F7F6]">{p.title}</h3>
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
          <h2 className="mb-12 font-editorial text-3xl text-[#F4F7F6] sm:text-4xl">Approach</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((pr, i) => (
              <div key={pr.t} className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#111719] p-7">
                <span className="font-display text-sm text-[#31F5D4]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg text-[#F4F7F6]">{pr.t}</h3>
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
            <h2 className="mb-6 font-editorial text-3xl text-[#F4F7F6] sm:text-4xl">About</h2>
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
                <li key={s} className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[#111719] px-3 py-1.5 font-ui text-[12px] text-[#F4F7F6]">
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
          <h2 className="font-editorial text-3xl text-[#F4F7F6] sm:text-4xl">Let&rsquo;s talk</h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
            Available for senior product design roles shaping intelligent, high-trust product
            experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:ardavanmir@outlook.com"
              className="rounded-full bg-[#31F5D4] px-6 py-3 font-ui text-sm font-semibold text-[#07110F] transition-transform hover:scale-[1.03]"
            >
              ardavanmir@outlook.com
            </a>
            <a
              href="https://linkedin.com/in/ardavanmir"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(255,255,255,0.18)] px-6 py-3 font-ui text-sm font-semibold text-[#F4F7F6] transition-colors hover:border-[#31F5D4]/50 hover:text-[#31F5D4]"
            >
              LinkedIn
            </a>
            {/* TODO: link résumé once the refreshed, [VERIFY]-cleared PDF is provided. */}
            <span
              aria-disabled="true"
              title="Résumé refresh in progress"
              className="cursor-not-allowed rounded-full border border-dashed border-[rgba(255,255,255,0.18)] px-6 py-3 font-ui text-sm text-[#A8B3B0]/50"
            >
              Résumé — coming soon
            </span>
          </div>

          <p className="mt-16 font-body text-[13px] text-[#A8B3B0]/60">
            © {new Date().getFullYear()} Ardavan Mirhosseini · Toronto, ON
          </p>
        </div>
      </section>
    </main>
  )
}
