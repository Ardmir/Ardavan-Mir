import type { Metadata } from "next"
import Link from "next/link"
import IALogotype from "@/components/ia-logotype"
import ResearchStrategyVisuals from "@/components/ResearchStrategyVisuals"
import { openGraphShareImages, SITE_URL, twitterShareImages } from "@/lib/site"

const ogImageAlt =
  "Ardavan Mirhosseini — Research and strategy for AI-native design, collaboration, and platform patterns."

export const metadata: Metadata = {
  title: "Research & Strategy — Ardavan Mirhosseini",
  description:
    "Strategic research and operating models for AI-native design, GitHub-based collaboration, platform patterns, and high-trust product workflows.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research & Strategy — Ardavan Mirhosseini",
    description:
      "Strategic research and operating models for AI-native design, GitHub-based collaboration, platform patterns, and high-trust product workflows.",
    url: `${SITE_URL}/research`,
    type: "website",
    images: openGraphShareImages(ogImageAlt),
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Strategy — Ardavan Mirhosseini",
    description:
      "Strategic research and operating models for AI-native design, GitHub-based collaboration, platform patterns, and high-trust product workflows.",
    images: twitterShareImages,
  },
}

const SECTIONS = [
  {
    id: "architectures-of-intent",
    title: "Architectures of Intent",
    subtitle: "An AI-native strategy guide for enterprise software as an operating model",
    copy: [
      "This public research artifact explores what enterprise software becomes when AI is no longer treated as a feature layer and instead becomes part of the product operating model.",
      "The work frames AI-native strategy around intent, infrastructure, workflow, and the systems that help people understand, evaluate, and act with confidence.",
    ],
    covers: [
      "AI as operating model",
      "Intelligence as infrastructure",
      "Enterprise product transformation",
      "Strategic product framing",
      "Systems thinking",
      "Architectures of intent",
    ],
    demonstrates: [
      "AI-native product strategy",
      "Research synthesis",
      "Executive-ready narrative framing",
      "Systems-level product thinking",
    ],
    visual: "architectures-of-intent" as const,
    externalHref: "https://v0-ai-native-strategy-research.vercel.app/",
    externalLabel: "Open interactive guide",
  },
  {
    id: "github-design-collaboration",
    title: "GitHub-Based Design Collaboration",
    subtitle: "A design operating model for integrated, AI-ready prototype work",
    copy: [
      "This research explored how design teams can use GitHub workflows, shared foundations, team-owned slices, generated route registries, pull-request review, and validation to bring multiple product workstreams into one coherent prototype or release model.",
      "The focus was not on making every designer an engineer. It was on making collaboration more structured, reviewable, and automation-ready — so teams could contribute to a shared product story without fragmenting the experience.",
    ],
    covers: [
      "Shared shell and navigation ownership",
      "Team-owned slices or workstreams",
      "Reusable foundations",
      "Generated route registry",
      "Pull-request-based contribution",
      "CODEOWNERS and review paths",
      "Static review artifacts",
      "AI-ready contribution rails",
    ],
    demonstrates: [
      "Systems thinking",
      "Design engineering fluency",
      "Workflow design",
      "Governance",
      "Prototype strategy",
      "Cross-team alignment",
    ],
    visual: "github-design-collaboration" as const,
  },
  {
    id: "ai-native-platform-patterns",
    title: "AI-Native Platform Patterns",
    subtitle: "Research patterns for trustworthy AI-native product experiences",
    copy: [
      "This research synthesized recurring patterns across AI-native product experiences: how systems gather context, ground recommendations, expose reasoning, support review, respect permissions, and move from suggestion to action.",
      "The strongest AI-native products do not rely on intelligence alone. They make the system understandable, keep people in control, and create clear moments for review, correction, approval, and recovery.",
    ],
    covers: [
      "Observe → Act → Build modes",
      "Context and memory",
      "Grounding and source evidence",
      "Permissions and governance",
      "Review and editing",
      "Human control",
      "Uncertainty handling",
      "Suggestion-to-action workflows",
      "Feedback and recovery loops",
      "Decision architecture",
    ],
    demonstrates: [
      "AI product strategy",
      "Research synthesis",
      "Pattern recognition",
      "Trust and governance thinking",
      "Platform-level design judgment",
    ],
    visual: "ai-native-platform-patterns" as const,
  },
]

export default function ResearchPage() {
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
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7CE7D6]">
          Research & Strategy
        </p>
        <h1 className="monolith-title monolith-title--section mt-4">
          Operating models for AI-native design
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-[#A8B3B0] sm:text-lg">
          A collection of public-safe research summaries and frameworks exploring how design teams
          can collaborate, prototype, and govern AI-native product work.
        </p>
        <p className="mt-4 font-body text-[14px] leading-relaxed text-[#A8B3B0]/90">
          These summaries are intentionally sanitized. They focus on public-safe themes, methods, and
          patterns rather than internal documents, private feedback, or confidential workflow details.
        </p>

        {SECTIONS.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`research-section ${index > 0 ? "mt-20 border-t border-[rgba(255,255,255,0.08)] pt-20" : "mt-16"}`}
          >
            <h2 className="monolith-title monolith-title--card">{section.title}</h2>
            <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.12em] text-[#7CE7D6]">
              {section.subtitle}
            </p>
            {section.copy.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-5 font-body text-[15px] leading-relaxed text-[#A8B3B0]"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-ui text-[11px] uppercase tracking-[0.14em] text-[#F4F7F6]">
                  What it covers
                </h3>
                <ul className="mt-3 space-y-2 font-body text-[14px] leading-relaxed text-[#A8B3B0]">
                  {section.covers.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#31F5D4]" aria-hidden="true">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-ui text-[11px] uppercase tracking-[0.14em] text-[#F4F7F6]">
                  What it demonstrates
                </h3>
                <ul className="mt-3 space-y-2 font-body text-[14px] leading-relaxed text-[#A8B3B0]">
                  {section.demonstrates.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#31F5D4]" aria-hidden="true">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <ResearchStrategyVisuals variant={section.visual} />
            </div>

            {"externalHref" in section && section.externalHref ? (
              <a
                href={section.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex font-ui text-[11px] uppercase tracking-[0.12em] text-[#31F5D4] transition-colors hover:text-[#7CE7D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31F5D4]"
              >
                {section.externalLabel} ↗
              </a>
            ) : null}
          </section>
        ))}

        <section className="mt-20 border-t border-[rgba(255,255,255,0.08)] pt-16">
          <h2 className="monolith-title monolith-title--card-sm">Why this work matters</h2>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-[#A8B3B0]">
            This research supports the same principle behind my product work: make the system
            legible before making it smart. Whether designing enterprise finance workflows or
            AI-ready collaboration models, the goal is to create structures that help teams
            understand, evaluate, and act with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-flex font-ui text-[11px] uppercase tracking-[0.12em] text-[#31F5D4] transition-colors hover:text-[#7CE7D6]"
            >
              Back to selected work →
            </Link>
            <Link
              href="/#contact"
              className="inline-flex font-ui text-[11px] uppercase tracking-[0.12em] text-[#A8B3B0] transition-colors hover:text-[#31F5D4]"
            >
              Get in touch →
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
