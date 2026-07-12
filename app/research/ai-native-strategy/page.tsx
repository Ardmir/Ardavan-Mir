import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
import ArchitecturesOfIntentVisuals from "@/components/ArchitecturesOfIntentVisuals"
import { ManuscriptFrame } from "@/components/adaptive-decision-space/ManuscriptFrame"
import styles from "@/components/adaptive-decision-space/manuscript.module.css"
import {
  ARCHITECTURES_OF_INTENT_META,
  ARCHITECTURES_OF_INTENT_PRINCIPLES,
  ARCHITECTURES_OF_INTENT_SECTIONS,
  ARCHITECTURES_OF_INTENT_TOC,
} from "@/content/architectures-of-intent"
import {
  ARCHITECTURES_OF_INTENT_PUBLICATION_NOTE,
  ARCHITECTURES_OF_INTENT_SOURCES,
} from "@/content/architectures-of-intent-sources"
import { openGraphShareImages, SITE_URL, twitterShareImages } from "@/lib/site"

const PAGE_PATH = "/research/ai-native-strategy"
const PAGE_TITLE = "Architectures of Intent — Ardavan Mirhosseini"
const PAGE_DESCRIPTION =
  "A research essay on designing enterprise software when AI becomes the operating model—across context, grounding, evidence, human review, permissions, and governed action."

const ogImageAlt =
  "Ardavan Mirhosseini — Architectures of Intent research on AI-native enterprise product strategy."

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "Ardavan Mirhosseini",
    images: openGraphShareImages(ogImageAlt),
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: twitterShareImages,
  },
}

function renderCitedText(text: string): ReactNode[] {
  const parts = text.split(/(\{\{\d+\}\})/g)
  return parts.map((part, index) => {
    const match = part.match(/^\{\{(\d+)\}\}$/)
    if (!match) return <span key={`t-${index}`}>{part}</span>
    const n = Number(match[1])
    return (
      <sup key={`c-${index}-${n}`} className={styles.cite}>
        <a
          href={`#source-${n}`}
          id={`cite-ref-${n}-${index}`}
          className={styles.citeLink}
          aria-label={`Source ${n}`}
        >
          {n}
        </a>
      </sup>
    )
  })
}

export default function ArchitecturesOfIntentPage() {
  return (
    <ManuscriptFrame folio="Research essay · R.01" backHref="/research" backLabel="Back to research">
      <article>
        <header id="ambiguity" className={styles.hero}>
          <div className={styles.heroMeta}>
            <p>{ARCHITECTURES_OF_INTENT_META.eyebrow}</p>
            <p>Research folio R.01 · Cited edition</p>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>{ARCHITECTURES_OF_INTENT_META.metadataLine}</p>
              <h1 className={styles.heroTitle}>{ARCHITECTURES_OF_INTENT_META.title}</h1>
              <p className={styles.heroDek}>{ARCHITECTURES_OF_INTENT_META.subtitle}</p>
            </div>
            <aside className={styles.heroAside} aria-label="Research abstract">
              <p className={styles.apparatusLabel}>Abstract</p>
              <p>{ARCHITECTURES_OF_INTENT_META.abstract}</p>
              <p className={styles.provenanceLine}>
                <span className={styles.siglum} aria-hidden="true">V</span>
                Sources remain attached
              </p>
            </aside>
          </div>
        </header>

        <div className={styles.articleShell}>
          <nav className={styles.toc} aria-label="On this page">
            <p>On this page</p>
            <ol>
              {ARCHITECTURES_OF_INTENT_TOC.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
              ))}
              <li><a href="#sources">Sources</a></li>
            </ol>
          </nav>

          <div className={styles.articleColumn}>
            <div className={styles.articleBody}>
              {ARCHITECTURES_OF_INTENT_SECTIONS.map((section, sectionIndex) => {
                const stageAnchors = ["structure", "prototype", "evidence", "story"]
                return (
                  <div key={section.id} id={stageAnchors[sectionIndex]}>
                    <section id={section.id}>
                      <p className={styles.stageNumber}>
                        {sectionIndex < 4 ? `Stage 0${sectionIndex + 2} · ${["Structure", "Prototype", "Evidence", "Story"][sectionIndex]}` : "Research passage"}
                      </p>
                      <h2>{section.title}</h2>
                      {section.blocks.map((block, blockIndex) => {
                        if (block.type === "p") {
                          return <p key={`${section.id}-p-${blockIndex}`}>{renderCitedText(block.text)}</p>
                        }
                        if (block.type === "visual") {
                          return (
                            <div key={`${section.id}-v-${block.variant}`} className={styles.exhibit}>
                              <p className={styles.exhibitLabel}>Research exhibit</p>
                              <ArchitecturesOfIntentVisuals variant={block.variant} />
                            </div>
                          )
                        }
                        return (
                          <ol key={`${section.id}-principles`} className={styles.articlePrinciples}>
                            {ARCHITECTURES_OF_INTENT_PRINCIPLES.map((principle, index) => (
                              <li key={principle.slice(0, 32)}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <p>{principle}</p>
                              </li>
                            ))}
                          </ol>
                        )
                      })}
                    </section>
                  </div>
                )
              })}

              <section id="sources">
                <p className={styles.stageNumber}>Apparatus · Sources</p>
                <h2>Sources and further reading</h2>
                <p className={styles.sourceNote}>{ARCHITECTURES_OF_INTENT_PUBLICATION_NOTE}</p>
                <ol className={styles.sourceList}>
                  {ARCHITECTURES_OF_INTENT_SOURCES.map((source) => (
                    <li key={source.id} id={source.id}>
                      <span>{source.number}.</span>
                      <div>
                        {source.links.map((link, index) => (
                          <span key={link.href}>
                            {index > 0 ? " and " : null}
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                              {link.label} <span aria-hidden="true">↗</span>
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          </span>
                        ))}
                        <span>, {source.publisher}.</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="related-heading">
                <p className={styles.stageNumber}>Related folios</p>
                <h2 id="related-heading">Continue through the decision space</h2>
                <div className={styles.contentColumns}>
                  <div className={styles.contentBlock}>
                    <h3>Related research</h3>
                    <div className={styles.linkRow}>
                      <Link href="/research">Research &amp; Strategy</Link>
                      <a href={ARCHITECTURES_OF_INTENT_META.interactiveGuideHref} target="_blank" rel="noopener noreferrer">
                        Open interactive guide <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                  <div className={styles.contentBlock}>
                    <h3>Related product evidence</h3>
                    <p className={styles.bodyCopy}>
                      The IES case study shares this focus on evidence, trust, review, and human judgment.
                    </p>
                    <div className={styles.linkRow}>
                      <Link href="/work/intuit-enterprise-suite">Open IES case study</Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <footer id="alignment" className={styles.closing}>
          <div>
            <p className={styles.stageNumber}>Stage 06 · Alignment</p>
            <h2>Make the system legible before making it smart.</h2>
            <p>
              The essay closes where the portfolio begins: intelligence earns trust when intent,
              evidence, permissions, review, and action remain understandable.
            </p>
          </div>
          <nav className={styles.closingLinks} aria-label="Continue reading">
            <Link href="/research">Back to Research &amp; Strategy</Link>
            <Link href="/work/intuit-enterprise-suite">Related evidence · IES</Link>
            <Link href="/#colophon">Get in touch</Link>
          </nav>
        </footer>
      </article>
    </ManuscriptFrame>
  )
}
