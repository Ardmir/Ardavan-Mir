import type { Metadata } from "next"
import Link from "next/link"
import QboaCaseStudyVisuals from "@/components/QboaCaseStudyVisuals"
import { ManuscriptFrame } from "@/components/adaptive-decision-space/ManuscriptFrame"
import styles from "@/components/adaptive-decision-space/manuscript.module.css"
import { openGraphShareImages, SITE_URL, twitterShareImages } from "@/lib/site"

const ogImageAlt =
  "Ardavan Mirhosseini — Senior Product Designer designing AI-native enterprise products that make financial complexity legible."

export const metadata: Metadata = {
  title: "Designing information architecture for advanced accounting workflows — Ardavan Mirhosseini",
  description:
    "A public-safe case study about shaping advanced accounting workflows, dimensional classification, reporting clarity, and information architecture.",
  alternates: {
    canonical: "/work/quickbooks-dimensional-chart-of-accounts",
  },
  openGraph: {
    title:
      "Designing information architecture for advanced accounting workflows — Ardavan Mirhosseini",
    description:
      "A public-safe case study about shaping advanced accounting workflows, dimensional classification, reporting clarity, and information architecture.",
    url: `${SITE_URL}/work/quickbooks-dimensional-chart-of-accounts`,
    type: "article",
    images: openGraphShareImages(ogImageAlt),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Designing information architecture for advanced accounting workflows — Ardavan Mirhosseini",
    description:
      "A public-safe case study about shaping advanced accounting workflows, dimensional classification, reporting clarity, and information architecture.",
    images: twitterShareImages,
  },
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

const FOCUS_CARDS = [
  {
    title: "Clarify the model",
    copy: "Make the underlying dimensions and relationships easier to understand.",
  },
  {
    title: "Keep context close",
    copy: "Show classification choices alongside the reporting or decision context they affect.",
  },
  {
    title: "Support review",
    copy: "Create moments where users can confirm structure before it shapes downstream reporting.",
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
    <ManuscriptFrame folio="Case study · E.02" backHref="/#evidence" backLabel="Back to evidence">
      <article>
        <header id="ambiguity" className={styles.hero}>
          <div className={styles.heroMeta}>
            <p>QuickBooks Online Advanced · Advanced accounting</p>
            <p>Evidence folio E.02 · Public-safe edition</p>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Information architecture · Classification &amp; reporting</p>
              <h1 className={styles.heroTitle}>
                Designing information architecture for <em>advanced accounting</em> workflows
              </h1>
              <p className={styles.heroDek}>
                I shaped advanced accounting workflows that help teams understand multi-dimensional
                classification, reporting, and decision-making inside a complex financial product.
              </p>
            </div>
            <aside className={styles.heroAside} aria-label="Public case-study note">
              <p className={styles.apparatusLabel}>Public evidence boundary</p>
              <p><strong>Structure without exposure.</strong></p>
              <p>
                This case study focuses on information architecture, workflow clarity, and product
                thinking while avoiding unverified metrics and confidential product details.
              </p>
              <p className={styles.provenanceLine}>
                <span className={styles.siglum} aria-hidden="true">A</span>
                Approved public portfolio copy
              </p>
            </aside>
          </div>
          <dl className={styles.metaLedger}>
            {META.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section id="structure" className={styles.stage}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 02 · Structure</p>
              <h2 className={styles.stageHeading}>Classification had to feel clear, not heavier.</h2>
            </div>
            <p className={styles.stageIntro}>
              Advanced accounting becomes difficult when teams need to classify, compare, and
              report across multiple dimensions. The challenge was not only to expose more
              structure, but to make that structure understandable and useful.
            </p>
          </div>
          <div className={styles.contentColumns}>
            <div className={styles.contentBlock}>
              <h3>The problem</h3>
              <p className={styles.bodyCopy}>
                Users need to understand what each classification means, how it affects reporting,
                and how to act with confidence—without absorbing unnecessary cognitive load.
              </p>
            </div>
            <div className={styles.contentBlock}>
              <h3>My role</h3>
              <p className={styles.bodyCopy}>
                I shaped workflow concepts, information architecture, and interaction patterns that
                made dense classification and reporting workflows easier to understand, navigate,
                and act on.
              </p>
            </div>
          </div>
        </section>

        <section id="prototype" className={`${styles.stage} ${styles.darkStage}`}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 03 · Prototype</p>
              <h2 className={styles.stageHeading}>The model became an interface people could reason through.</h2>
            </div>
            <p className={styles.stageIntro}>
              Four principles connected classification structure to the reporting decisions it
              ultimately shaped.
            </p>
          </div>
          <div className={styles.principleLedger}>
            {PRINCIPLES.map((principle, index) => (
              <div key={principle.title} className={styles.ledgerItem}>
                <span className={styles.ledgerIndex}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="evidence" className={styles.evidenceStage}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 04 · Evidence</p>
              <h2 className={styles.stageHeading}>From classification ambiguity to reporting confidence.</h2>
            </div>
            <p className={styles.stageIntro}>
              The design helped users understand not only where a classification belongs, but how
              that choice affects reporting, review, and downstream decision-making.
            </p>
          </div>
          <div className={styles.patternLedger}>
            {PATTERNS.map((pattern, index) => (
              <div key={pattern.title} className={styles.ledgerItem}>
                <span className={styles.ledgerIndex}>P.{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{pattern.title}</h3>
                  <p>{pattern.copy}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.contentColumns}>
            {FOCUS_CARDS.map((card) => (
              <div key={card.title} className={styles.contentBlock}>
                <h3>{card.title}</h3>
                <p className={styles.bodyCopy}>{card.copy}</p>
              </div>
            ))}
          </div>
          <p className={styles.sourceNote}>
            <span className={styles.provenanceLine}>
              <span className={styles.siglum} aria-hidden="true">W</span>
              Withheld / NDA material
            </span>
            Customer data, internal product screens, project dates, and unverified impact metrics remain omitted.
          </p>
        </section>

        <section id="story" className={styles.stage}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 05 · Story</p>
              <h2 className={styles.stageHeading}>The abstract model stayed connected to real decisions.</h2>
            </div>
            <p className={styles.stageIntro}>
              Synthetic diagrams show the classification and reporting logic with generic labels—
              keeping the system legible without exposing confidential product UI.
            </p>
          </div>
          <div className={styles.exhibit}>
            <p className={styles.exhibitLabel}>Exhibit E.02a · Classification and reporting studies</p>
            <QboaCaseStudyVisuals />
          </div>
        </section>

        <footer id="alignment" className={styles.closing}>
          <div>
            <p className={styles.stageNumber}>Stage 06 · Alignment</p>
            <h2>Structure became confidence, without hiding the complexity.</h2>
            <p>
              The work created clearer structure around advanced accounting workflows. The lesson
              is that complex systems become easier when the underlying model is visible,
              structured, and connected to the decisions people need to make.
            </p>
          </div>
          <nav className={styles.closingLinks} aria-label="Continue reading">
            <Link href="/work/intuit-enterprise-suite">Flagship evidence · IES</Link>
            <Link href="/research">Continue into research</Link>
            <Link href="/#evidence">Return to the portfolio manuscript</Link>
          </nav>
        </footer>
      </article>
    </ManuscriptFrame>
  )
}
