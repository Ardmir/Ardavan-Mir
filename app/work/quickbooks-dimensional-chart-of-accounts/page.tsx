import type { Metadata } from "next"
import Link from "next/link"
import IALogotype from "@/components/ia-logotype"
import QboaCaseStudyVisuals from "@/components/QboaCaseStudyVisuals"

export const metadata: Metadata = {
  title: "Designing information architecture for advanced accounting workflows — Ardavan Mirhosseini",
  description:
    "A public-safe case study about shaping advanced accounting workflows, dimensional classification, reporting clarity, and information architecture.",
}

const PRINCIPLES = [
  {
    title: "Make dimensions understandable",
    copy: "Help users see what each dimension means, how it relates to others, and where it shows up in their workflow.",
  },
  {
    title: "Show structure in context",
    copy: "Surface classification and reporting structure where people need it — not as an abstract settings layer.",
  },
  {
    title: "Reduce classification ambiguity",
    copy: "Clarify labels, relationships, and consequences so teams can classify with more confidence.",
  },
  {
    title: "Support reporting confidence",
    copy: "Connect classification choices to reporting views and decision context people can evaluate.",
  },
]

const PATTERNS = [
  {
    title: "Dimensional classification grid",
    copy: "A structured view that helps teams see how classifications relate across multiple dimensions.",
  },
  {
    title: "Reporting context layer",
    copy: "A layer that connects classification choices to the reporting views and decisions they affect.",
  },
  {
    title: "Account structure model",
    copy: "An abstract model that makes hierarchy and relationships easier to understand at a glance.",
  },
  {
    title: "Review and confirmation moment",
    copy: "A deliberate step where users can confirm classification before it affects downstream reporting.",
  },
]

const META = [
  { label: "Role", value: "Product design, information architecture, workflow design" },
  {
    label: "Focus",
    value: "Advanced accounting, dimensional classification, reporting clarity",
  },
  {
    label: "Output",
    value: "IA models, workflow concepts, product patterns, cross-functional artifacts",
  },
  { label: "Status", value: "Public-safe case study" },
]

export default function QboaCaseStudyPage() {
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
          QuickBooks Online Advanced · Advanced accounting · Information architecture
        </p>
        <h1 className="case-study-title mt-4">
          Designing information architecture for advanced accounting workflows
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
          I shaped advanced accounting workflows that help teams understand multi-dimensional
          classification, reporting, and decision-making inside a complex financial product.
        </p>
        <p className="mt-4 rounded-[4px] border border-[rgba(49,245,212,0.18)] bg-[#111719] p-4 font-body text-[13px] leading-relaxed text-[#A8B3B0]">
          This public case study is intentionally conservative. It focuses on information
          architecture, workflow clarity, and product thinking while avoiding unverified metrics
          or confidential product details.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {META.map((item) => (
            <div
              key={item.label}
              className="rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111719] p-4"
            >
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
            Advanced accounting workflows can become difficult to understand when teams need to
            classify, compare, and report on work across multiple dimensions. The design challenge
            is not only to expose more structure, but to make that structure understandable and
            useful.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">
            The challenge was making classification feel clear, not heavier.
          </h2>
          <p className="case-study-body">
            As financial workflows become more dimensional, users need to understand what each
            classification means, how it affects reporting, and how to act with confidence. The
            experience needed to support structure without adding unnecessary cognitive load.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">My role</h2>
          <p className="case-study-body">
            I contributed to the product experience by shaping workflow concepts, information
            architecture, and interaction patterns for advanced accounting use cases. The work
            focused on making dense classification and reporting workflows easier to understand,
            navigate, and act on.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">Design principles</h2>
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
          <h2 className="case-study-heading">Sanitized patterns</h2>
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

        <section className="case-study-section">
          <h2 className="case-study-heading">Abstract visuals</h2>
          <p className="case-study-body mb-6">
            Synthetic diagrams showing classification and reporting thinking — generic labels only,
            no confidential product UI.
          </p>
          <QboaCaseStudyVisuals />
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">What changed</h2>
          <p className="case-study-body">
            The work helped create clearer structure around advanced accounting workflows, making
            it easier to reason about classification, reporting, and decision-making across complex
            financial information.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="case-study-heading">Reflection</h2>
          <p className="case-study-body">
            The lesson from this work is that advanced systems do not become easier by hiding
            complexity. They become easier when the underlying model is made visible, structured,
            and connected to the decisions people need to make.
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
