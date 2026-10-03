import type { Metadata } from "next"
import Image from "next/image"
import { ManuscriptFrame } from "@/components/adaptive-decision-space/ManuscriptFrame"
import styles from "./visual-atlas.module.css"

const title = "AI-native Visual Research — Ardavan Mir"
const description = "A visual research library of AI builders, developer tools, mobile products, and ambient interfaces, with dated screenshots and source evidence."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/research/visual-atlas" },
  openGraph: { title, description, url: "https://www.ardavanmir.com/research/visual-atlas", type: "website" },
}

const studies = [
  {
    number: "01",
    title: "AI Builder Landscape",
    scope: "15 products · Five interface structures",
    date: "September 3, 2026",
    href: "/research/visual-atlas/builders/index.html",
    summary: "Compare prompt and artifact workspaces, agent IDEs, visual canvases, workflow graphs, and capability studios.",
    examples: "Lovable, v0, Replit, Cursor, Google AI Studio, Stitch, n8n, and more.",
    previews: [
      { src: "/research/visual-atlas/developer-builders/selected-cropped/AISTUDIO-02-code-live-preview.png", alt: "Google AI Studio code beside its live preview" },
      { src: "/research/visual-atlas/developer-builders/selected-cropped/COPILOT-01-agent-canvas.png", alt: "Microsoft Copilot Studio agent canvas" },
    ],
  },
  {
    number: "02",
    title: "Developer Builder Mechanism Audit",
    scope: "60 product states · 13 products",
    date: "September 3, 2026",
    href: "/research/visual-atlas/developer-builders/index.html",
    summary: "Inspect how tools expose delegation, direct control, review, governed action, release, and recovery. Filter the screenshot atlas by product or search a mechanism.",
    examples: "Codex, Replit, Palantir AIP, LangSmith Studio, Temporal, and more.",
    previews: [
      { src: "/research/visual-atlas/developer-builders/selected-cropped/CODEX-07-diff-review-thread-terminal.png", alt: "Codex task thread with a diff review and terminal" },
      { src: "/research/visual-atlas/developer-builders/selected-cropped/BACKSTAGE-05-dependency-graph.png", alt: "Backstage dependency graph" },
    ],
  },
  {
    number: "03",
    title: "Mobile & Ambient Interfaces",
    scope: "105 selected frames · 24 deep references",
    date: "August 19, 2026",
    href: "/research/visual-atlas/mobile/index.html",
    summary: "Explore mobile AI experiences alongside task apps, capture tools, live activities, and cross-device review. Filter by product, platform, evidence type, or interaction state.",
    examples: "ChatGPT, Gemini, Claude, Perplexity, Plaud, Flighty, Apple Live Activities, and more.",
    previews: [
      { src: "/research/visual-atlas/mobile/media/c87424b6668b6bbae669aee8.jpg", alt: "ChatGPT official iPhone listing screens" },
      { src: "/research/visual-atlas/mobile/media/e0dda8409f61c0f539913f41.jpg", alt: "Gemini official iPhone listing screens" },
      { src: "/research/visual-atlas/mobile/media/e965d095bbd81eada1a3528a.jpg", alt: "Claude official iPhone listing screens" },
    ],
  },
] as const

export default function VisualAtlasPage() {
  return (
    <ManuscriptFrame folio="Visual research · R.04" backHref="/research" backLabel="Back to research" showStageRail={false}>
      <article className={styles.atlas}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Visual research · August—September 2026</p>
          <h1>AI-native <em>visual research.</em></h1>
          <p>Three visual studies. Screenshots, sources, and interaction patterns.</p>
        </header>
        <section aria-label="Visual research collections" className={styles.collections}>
          {studies.map((study) => (
            <a className={styles.collection} href={study.href} key={study.number}>
              <span className={styles.number} aria-hidden="true">{study.number}</span>
              <div>
                <p className={styles.scope}>{study.scope}</p>
                <h2>{study.title}</h2>
                <div className={styles.previews}>
                  {study.previews.map((preview) => (
                    <Image key={preview.src} src={preview.src} alt={preview.alt} width={1440} height={960} sizes="(max-width: 720px) 90vw, 50vw" className={styles.previewImage} />
                  ))}
                </div>
                <p>{study.summary}</p>
                <p className={styles.examples}>{study.examples}</p>
                <span className={styles.open}>Open the study <span aria-hidden="true">↗</span></span>
              </div>
              <time className={styles.date}>{study.date}</time>
            </a>
          ))}
        </section>
        <footer className={styles.note}>
          <h2>Read the state with its source.</h2>
          <p>These are dated research snapshots. Screenshots document the cited product state and do not establish current availability or technical architecture. The mobile collection identifies promotional and demo material separately from direct product evidence; most mobile frames come from App Store material.</p>
          <p>Product images belong to their respective owners. Each collection keeps its sources and limitations attached to the visual evidence.</p>
        </footer>
      </article>
    </ManuscriptFrame>
  )
}
