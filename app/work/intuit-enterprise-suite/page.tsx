import type { Metadata } from "next"
import Link from "next/link"
import IALogotype from "@/components/ia-logotype"
import IesCaseStudyVisuals from "@/components/IesCaseStudyVisuals"
import IesFutureStateVisuals from "@/components/IesFutureStateVisuals"
import { openGraphShareImages, SITE_URL, twitterShareImages } from "@/lib/site"

const ogImageAlt =
  "Ardavan Mirhosseini — Senior Product Designer designing AI-native enterprise products that make financial complexity legible."

export const metadata: Metadata = {
  title: "Defining an AI-native target state for enterprise finance — Ardavan Mirhosseini",
  description:
    "A public-safe case study about shaping AI-native product direction, information architecture, trust patterns, and storytelling for complex enterprise finance workflows.",
  alternates: {
    canonical: "/work/intuit-enterprise-suite",
  },
  openGraph: {
    title:
      "Defining an AI-native target state for enterprise finance — Ardavan Mirhosseini",
    description:
      "A public-safe case study about shaping AI-native product direction, information architecture, trust patterns, and storytelling for complex enterprise finance workflows.",
    url: `${SITE_URL}/work/intuit-enterprise-suite`,
    type: "article",
    images: openGraphShareImages(ogImageAlt),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Defining an AI-native target state for enterprise finance — Ardavan Mirhosseini",
    description:
      "A public-safe case study about shaping AI-native product direction, information architecture, trust patterns, and storytelling for complex enterprise finance workflows.",
    images: twitterShareImages,
  },
}

const PRINCIPLES = [
  {
    title: "Structure the system",
    copy: "Map the entities, relationships, decisions, constraints, and failure points before designing the interface.",
  },
  {
    title: "Make evidence visible",
    copy: "Show the signals and source context behind a recommendation so people can understand why it matters.",
  },
  {
    title: "Preserve human judgment",
    copy: "Treat approval, escalation, and review as core parts of the experience — not friction to remove.",
  },
  {
    title: "Close the loop",
    copy: "After a decision, show what changed, what was recorded, and what can be reviewed later.",
  },
]

const FUTURE_STATE_CARDS = [
  {
    title: "Framework transfer",
    copy: "Translated core AI-native experience concepts into reusable patterns that could be explored across related enterprise product contexts.",
  },
  {
    title: "Prototype as alignment tool",
    copy: "Used functional prototypes and polished artifacts to make abstract product direction easier for teams to understand, critique, and refine.",
  },
  {
    title: "Leadership-ready narrative",
    copy: "Turned complex capabilities into a clearer story: what the system understands, what evidence supports it, where human judgment matters, and what happens next.",
  },
  {
    title: "Trust before automation",
    copy: "Kept the emphasis on explainability, review, authorization, and control before any meaningful action could be taken.",
  },
]

const PATTERNS = [
  {
    title: "Evidence rail",
    copy: "A supporting layer that gives users a clear trail of signals, assumptions, and source context.",
  },
  {
    title: "Decision packet",
    copy: "A structured object that brings together the recommendation, rationale, impact, risks, and next step.",
  },
  {
    title: "Human judgment checkpoint",
    copy: "A deliberate moment where the system asks for review, confirmation, or escalation before meaningful action.",
  },
  {
    title: "Approval receipt",
    copy: "A closing artifact that records what was approved, what changed, and where the user can review it later.",
  },
]

const META = [
  { label: "Role", value: "Product design, information architecture, prototyping, product storytelling" },
  {
    label: "Focus",
    value: "AI-native workflows, enterprise finance, trust, explainability, human judgment",
  },
  {
    label: "Output",
    value: "Frameworks, sanitized patterns, prototype narratives, alignment artifacts",
  },
  { label: "Status", value: "Public-safe case study" },
]

export default function IesCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070A] text-[#F4F7F6]">
      <header className="border-b border-[rgba(255,255,255,0.08)] bg-[#05070A]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6 lg:px-8">
          <IALogotype />
          <Link
            href="/#work"
            className="font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3B0] transition-colors hover:text-[#31F5D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31F5D4]"
          >
            Back to work
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#5E6865]">
          Intuit Enterprise Suite · Enterprise SaaS · AI-native workflows
        </p>
        <h1 className="case-study-title mt-4">
          Defining an AI-native target state for enterprise finance
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
          I helped define and communicate AI-native product direction for complex enterprise
          finance workflows — translating ambiguity into clearer information architecture, trust
          patterns, prototype concepts, and leadership-ready product narratives.
        </p>
        <p className="mt-4 rounded-[4px] border border-[rgba(49,245,212,0.18)] bg-[#111719] p-4 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
          This public case study is intentionally sanitized. It focuses on approach, systems
          thinking, and design patterns rather than confidential product details, internal
          screenshots, or roadmap specifics.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {META.map((item) => (
            <div key={item.label} className="rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111719] p-4">
              <dt className="font-ui text-[10px] uppercase tracking-[0.14em] text-[#31F5D4]">
                {item.label}
              </dt>
              <dd className="mt-2 font-body text-[13px] leading-relaxed text-[#F4F7F6]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <section className="case-study-section">
          <h2 className="case-study-heading">Context</h2>
          <p className="case-study-body">
            Enterprise finance workflows are dense, high-stakes, and full of dependencies. People
            need to understand what changed, why it matters, what evidence supports it, who needs to
            act, and what happens after an action is taken.
          </p>
          <p className="case-study-body mt-4">
            As AI becomes more present in business software, the design challenge is not simply
            making systems more automated. The challenge is making intelligent systems
            understandable, trustworthy, and useful in moments where human judgment still matters.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">The challenge was not &ldquo;add AI.&rdquo; It was make AI legible.</h2>
          <p className="case-study-body">
            In high-trust financial workflows, a smart recommendation is only useful if people can
            evaluate it. The experience needed to make reasoning visible, clarify risk, show
            supporting evidence, and preserve user control before any meaningful decision or
            action.
          </p>
          <blockquote className="case-study-callout mt-6">
            Make the system legible before making it smart.
          </blockquote>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">My role</h2>
          <p className="case-study-body">
            I contributed to the product direction by translating complex enterprise finance
            concepts into clearer experience models, information architecture, prototype concepts,
            and leadership-ready narratives. My work focused on helping teams reason through
            ambiguity, trust, evidence, authorization, and the role of human oversight in AI-native
            workflows.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">How I made the system legible</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="rounded-[6px] bg-[#111719] p-5">
                <span className="font-display text-sm text-[#31F5D4]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-ui text-sm text-[#F4F7F6]">{p.title}</h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">Sanitized design patterns</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PATTERNS.map((p) => (
              <div
                key={p.title}
                className="rounded-[6px] border border-[rgba(255,255,255,0.08)] bg-[#0B0F10] p-5"
              >
                <h3 className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#7CE7D6]">
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="future-state-exploration" className="case-study-section scroll-mt-24">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7CE7D6]">
            Future-state exploration
          </p>
          <h2 className="case-study-heading mt-3">
            Turning future product direction into something teams could evaluate
          </h2>
          <p className="case-study-body mt-6">
            Part of the work was helping make future-state product direction easier to understand,
            discuss, and evaluate. Rather than treating AI as a layer of automation, the
            exploration focused on how complex financial workflows could become more legible through
            structure, evidence, controls, and human judgment.
          </p>
          <p className="case-study-body mt-4">
            The public version is intentionally abstracted. It focuses on the design approach and
            storytelling patterns rather than internal prototypes, roadmap details, or confidential
            demo material.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {FUTURE_STATE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-[6px] border border-[rgba(255,255,255,0.08)] bg-[#0B0F10] p-5"
              >
                <h3 className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#7CE7D6]">
                  {card.title}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
                  {card.copy}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <IesFutureStateVisuals />
          </div>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">Abstract visuals</h2>
          <p className="case-study-body mb-6">
            Synthetic diagrams showing the thinking behind trust patterns — generic labels only, no
            confidential product UI.
          </p>
          <IesCaseStudyVisuals />
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">What changed</h2>
          <p className="case-study-body">
            The work helped make an abstract AI-native ambition easier to understand, evaluate,
            and discuss. By turning complex financial workflows into clearer frameworks, patterns,
            and narratives, the direction became more tangible for cross-functional partners and
            leadership audiences.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">Reflection</h2>
          <p className="case-study-body">
            The most important lesson was that trustworthy AI is not only about model capability.
            It is about the surrounding experience: the information architecture, evidence,
            controls, language, and moments of human judgment that help people understand what the
            system is doing and why it matters.
          </p>
        </section>

        <footer className="mt-16 flex flex-wrap gap-4 border-t border-[rgba(255,255,255,0.12)] pt-10">
          <Link href="/#work" className="case-study-cta case-study-cta--primary">
            Back to selected work
          </Link>
          <Link href="/#contact" className="case-study-cta case-study-cta--secondary">
            Get in touch
          </Link>
        </footer>
      </article>
    </main>
  )
}
