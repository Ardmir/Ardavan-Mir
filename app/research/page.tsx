import type { Metadata } from "next"
import Link from "next/link"
import ResearchStrategyVisuals from "@/components/ResearchStrategyVisuals"
import { ManuscriptFrame } from "@/components/adaptive-decision-space/ManuscriptFrame"
import styles from "@/components/adaptive-decision-space/manuscript.module.css"
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
    detailHref: "/research/ai-native-strategy",
    detailLabel: "Read the full research",
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
    <ManuscriptFrame folio="Research · R.01—03" backHref="/#evidence" backLabel="Back to evidence">
      <article>
        <header id="ambiguity" className={styles.hero}>
          <div className={styles.heroMeta}>
            <p>Research &amp; Strategy · Public collection</p>
            <p>Research folios R.01—03 · Adaptive edition</p>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>AI-native product strategy · Operating models</p>
              <h1 className={styles.heroTitle}>
                Operating models for <em>AI-native design</em>
              </h1>
              <p className={styles.heroDek}>
                Public-safe research and frameworks exploring how design teams can collaborate,
                prototype, and govern AI-native product work.
              </p>
            </div>
            <aside className={styles.heroAside} aria-label="Research publication note">
              <p className={styles.apparatusLabel}>Publication boundary</p>
              <p><strong>Methods and patterns remain visible.</strong></p>
              <p>
                Internal documents, private feedback, and confidential workflow details are
                withheld; the strategic reasoning remains open to inspection.
              </p>
              <p className={styles.provenanceLine}>
                <span className={styles.siglum} aria-hidden="true">A</span>
                Approved research summaries
              </p>
            </aside>
          </div>
        </header>

        <section id="structure" className={`${styles.stage} ${styles.darkStage}`}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 02 · Structure</p>
              <h2 className={styles.stageHeading}>Research is another way of making the system legible.</h2>
            </div>
            <p className={styles.stageIntro}>
              Across product strategy, team collaboration, and trustworthy AI patterns, the work
              looks for the operating model beneath the interface: what the system understands,
              what evidence it exposes, where judgment lives, and how action stays governed.
            </p>
          </div>
        </section>

        {SECTIONS.map((section, index) => {
          const stageIds = ["prototype", "evidence", "story"] as const
          const stageLabels = ["Stage 03 · Prototype", "Stage 04 · Evidence", "Stage 05 · Story"]
          return (
            <section key={section.id} id={stageIds[index]} className={styles.stage}>
              <div className={styles.stageHeader}>
                <div>
                  <p className={styles.stageNumber}>{stageLabels[index]}</p>
                  <h2 className={styles.stageHeading}>{section.title}</h2>
                </div>
                <div>
                  <p className={styles.eyebrow}>{section.subtitle}</p>
                  {section.copy.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className={styles.bodyCopy}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className={styles.contentColumns}>
                <div className={styles.contentBlock}>
                  <h3>What it covers</h3>
                  <div className={styles.patternLedger}>
                    {section.covers.map((item, itemIndex) => (
                      <div key={item} className={styles.ledgerItem}>
                        <span className={styles.ledgerIndex}>{String(itemIndex + 1).padStart(2, "0")}</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.contentBlock}>
                  <h3>What it demonstrates</h3>
                  <div className={styles.patternLedger}>
                    {section.demonstrates.map((item, itemIndex) => (
                      <div key={item} className={styles.ledgerItem}>
                        <span className={styles.ledgerIndex}>D.{itemIndex + 1}</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.exhibit}>
                <p className={styles.exhibitLabel}>Research exhibit R.0{index + 1}</p>
                <ResearchStrategyVisuals variant={section.visual} />
              </div>

              <div className={styles.linkRow}>
                {"detailHref" in section && section.detailHref ? (
                  <Link href={section.detailHref}>{section.detailLabel} →</Link>
                ) : null}
                {"externalHref" in section && section.externalHref ? (
                  <a href={section.externalHref} target="_blank" rel="noopener noreferrer">
                    {section.externalLabel} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
            </section>
          )
        })}

        <footer id="alignment" className={styles.closing}>
          <div>
            <p className={styles.stageNumber}>Stage 06 · Alignment</p>
            <h2>Research returns to the same product principle.</h2>
            <p>
              Make the system legible before making it smart. Whether designing enterprise finance
              workflows or AI-ready collaboration models, the goal is to help teams understand,
              evaluate, and act with confidence.
            </p>
          </div>
          <nav className={styles.closingLinks} aria-label="Continue reading">
            <Link href="/research/ai-native-strategy">Read Architectures of Intent</Link>
            <Link href="/work/intuit-enterprise-suite">Related evidence · IES</Link>
            <Link href="/#evidence">Return to the portfolio manuscript</Link>
          </nav>
        </footer>
      </article>
    </ManuscriptFrame>
  )
}
