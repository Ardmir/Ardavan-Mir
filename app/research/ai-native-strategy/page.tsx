import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
import ArchitecturesOfIntentVisuals from "@/components/ArchitecturesOfIntentVisuals"
import IALogotype from "@/components/ia-logotype"
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
      <sup key={`c-${index}-${n}`} className="aoi-cite">
        <a
          href={`#source-${n}`}
          id={`cite-ref-${n}-${index}`}
          className="aoi-cite__link"
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
    <main className="aoi-page min-h-screen overflow-x-hidden bg-[#05070A] text-[#F4F7F6]">
      <header className="border-b border-[rgba(255,255,255,0.08)] bg-[#05070A]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 lg:px-8">
          <IALogotype />
          <Link
            href="/research"
            className="font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3B0] transition-colors hover:text-[#31F5D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31F5D4]"
          >
            Back to Research &amp; Strategy
          </Link>
        </div>
      </header>

      <div className="aoi-shell mx-auto grid max-w-[1120px] gap-10 px-6 py-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-20">
        <nav className="aoi-toc" aria-label="On this page">
          <p className="aoi-toc__heading">On this page</p>
          <ol className="aoi-toc__list">
            {ARCHITECTURES_OF_INTENT_TOC.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="aoi-toc__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="aoi-column min-w-0">
          <header className="aoi-hero">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7CE7D6]">
              {ARCHITECTURES_OF_INTENT_META.eyebrow}
            </p>
            <h1 className="monolith-title monolith-title--section mt-4">
              {ARCHITECTURES_OF_INTENT_META.title}
            </h1>
            <p className="mt-5 font-body text-lg leading-relaxed text-[#A8B3B0] sm:text-xl">
              {ARCHITECTURES_OF_INTENT_META.subtitle}
            </p>
            <p className="mt-4 font-ui text-[12px] uppercase tracking-[0.12em] text-[#7CE7D6]/90">
              {ARCHITECTURES_OF_INTENT_META.metadataLine}
            </p>
            <p className="aoi-abstract mt-8">{ARCHITECTURES_OF_INTENT_META.abstract}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#opening-thesis" className="case-study-cta case-study-cta--primary">
                Begin reading
              </a>
              <a
                href={ARCHITECTURES_OF_INTENT_META.interactiveGuideHref}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-cta case-study-cta--secondary"
              >
                {ARCHITECTURES_OF_INTENT_META.interactiveGuideLabel}{" "}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </header>

          <article className="aoi-article mt-16">
            {ARCHITECTURES_OF_INTENT_SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="aoi-section">
                <h2 className="aoi-section__title">{section.title}</h2>
                {section.blocks.map((block, blockIndex) => {
                  if (block.type === "p") {
                    return (
                      <p key={`${section.id}-p-${blockIndex}`} className="aoi-section__p">
                        {renderCitedText(block.text)}
                      </p>
                    )
                  }
                  if (block.type === "visual") {
                    return (
                      <div key={`${section.id}-v-${block.variant}`} className="aoi-section__visual">
                        <ArchitecturesOfIntentVisuals variant={block.variant} />
                      </div>
                    )
                  }
                  return (
                    <ol key={`${section.id}-principles`} className="aoi-principles">
                      {ARCHITECTURES_OF_INTENT_PRINCIPLES.map((principle, i) => (
                        <li key={principle.slice(0, 32)} className="aoi-principles__item">
                          <span className="aoi-principles__number" aria-hidden="true">
                            {i + 1}
                          </span>
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ol>
                  )
                })}
              </section>
            ))}

            <section id="sources" className="aoi-section">
              <h2 className="aoi-section__title">Sources and further reading</h2>
              <p className="aoi-section__p aoi-section__note">
                {ARCHITECTURES_OF_INTENT_PUBLICATION_NOTE}
              </p>
              <ol className="aoi-sources">
                {ARCHITECTURES_OF_INTENT_SOURCES.map((source) => (
                  <li key={source.id} id={source.id} className="aoi-sources__item">
                    <span className="aoi-sources__index">{source.number}.</span>
                    <div className="aoi-sources__body">
                      {source.links.map((link, i) => (
                        <span key={link.href}>
                          {i > 0 ? " and " : null}
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aoi-sources__link"
                          >
                            {link.label}
                            <span aria-hidden="true"> ↗</span>
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </span>
                      ))}
                      <span className="aoi-sources__publisher">, {source.publisher}.</span>{" "}
                      <a href="#opening-thesis" className="aoi-sources__back">
                        Back to article
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </article>

          <section className="aoi-related" aria-labelledby="aoi-related-heading">
            <h2 id="aoi-related-heading" className="aoi-section__title">
              Related work
            </h2>
            <div className="aoi-related__grid">
              <div>
                <h3 className="aoi-related__label">Related research</h3>
                <ul className="aoi-related__list">
                  <li>
                    <Link href="/research">Research &amp; Strategy</Link>
                  </li>
                  <li>
                    <Link href="/research#ai-native-platform-patterns">
                      AI-Native Platform Patterns
                    </Link>
                  </li>
                  <li>
                    <a
                      href={ARCHITECTURES_OF_INTENT_META.interactiveGuideHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open interactive guide{" "}
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="aoi-related__label">Related product work</h3>
                <ul className="aoi-related__list">
                  <li>
                    <Link href="/work/intuit-enterprise-suite">Intuit Enterprise Suite</Link>
                  </li>
                </ul>
                <p className="aoi-related__note">
                  This research and the IES case study share a focus on making complex systems
                  legible through evidence, trust, review, and human judgment.
                </p>
              </div>
            </div>
          </section>

          <footer className="aoi-closing">
            <p className="aoi-closing__copy">
              Make the system legible before making it smart.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/research" className="case-study-cta case-study-cta--secondary">
                Back to Research &amp; Strategy
              </Link>
              <Link href="/#contact" className="case-study-cta case-study-cta--primary">
                Get in touch
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
