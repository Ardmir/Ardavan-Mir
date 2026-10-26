import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ManuscriptFrame } from "@/components/adaptive-decision-space/ManuscriptFrame"
import styles from "@/components/adaptive-decision-space/manuscript.module.css"
import { SITE_URL } from "@/lib/site"
import fieldnotes from "./fieldnotes.module.css"

const PAGE_PATH = "/research/fieldnotes"
const PAGE_TITLE = "Fieldnotes — A Visual Guide to AI-Native Product Design"
const PAGE_DESCRIPTION =
  "Visual product research translated into design decisions about scope, review, authority and continuing AI work. Featuring the latest chapter, Beyond the Assistant."
const ASSET_PATH = "/images/research/fieldnotes"
const COVER_ALT =
  "Fieldnotes editorial cover. The learning journey is Explore, Understand, Compare and Apply. Edition 0.4 contains nine design lessons, three ongoing-work cases and 21 retained source visuals."

export const metadata: Metadata = {
  title: `${PAGE_TITLE} — Ardavan Mir`,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "Ardavan Mir",
    images: [{
      url: `${SITE_URL}${ASSET_PATH}/fieldnotes-research-cover.png`,
      width: 1600,
      height: 1000,
      type: "image/png",
      alt: COVER_ALT,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: `${SITE_URL}${ASSET_PATH}/fieldnotes-research-cover.png`, alt: COVER_ALT }],
  },
}

const CONTENTS = [
  { id: "question", label: "The research question" },
  { id: "structure", label: "Follow the evidence" },
  { id: "prototype", label: "Three design decisions" },
  { id: "evidence", label: "Beyond the Assistant" },
  { id: "story", label: "The guide and outcome" },
  { id: "alignment", label: "Next inquiry" },
]

const QUESTIONS = [
  ["Continuity", "What should the user recognize tomorrow?"],
  ["Initiative", "What earns the right to begin or interrupt?"],
  ["Authority", "Which exact action is the person deciding?"],
  ["Correction", "How does new information change the proposed work?"],
  ["Return", "What changed and what needs judgment now?"],
  ["Outcome", "What proves the action’s result, and how can it be repaired?"],
] as const

function FieldnotesFigure({ name, alt, caption, label, height = 1000, priority = false }: {
  name: string
  alt: string
  caption: string
  label: string
  height?: number
  priority?: boolean
}) {
  const src = `${ASSET_PATH}/${name}.svg`
  return (
    <figure className={fieldnotes.figure}>
      <Image src={src} alt={alt} width={1600} height={height} sizes="(max-width: 720px) 100vw, 75vw" priority={priority} />
      <figcaption>
        Original editorial figure · {caption}{" "}
        <a href={src} target="_blank" rel="noopener noreferrer">
          Open {label} at full size <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  )
}

export default function FieldnotesPage() {
  return (
    <ManuscriptFrame folio="Research · R.05" backHref="/research#fieldnotes" backLabel="Back to research">
      <article>
        <header id="ambiguity" className={`${styles.hero} ${fieldnotes.hero}`}>
          <div className={styles.heroMeta}>
            <p>Research &amp; Strategy</p>
            <p>Research folio R.05 · Fieldnotes</p>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Visual product research · Learning experience</p>
              <h1 className={styles.heroTitle}>Fieldnotes</h1>
              <p className={fieldnotes.subtitle}>A Visual Guide to AI-Native Product Design</p>
              <p className={styles.heroDek}>
                From product examples to design decisions. An evolving research guide for choosing
                what to delegate, what to expose, where human judgment belongs, and how people
                return to continuing work.
              </p>
            </div>
            <aside className={styles.heroAside} aria-label="Project context">
              <dl className={fieldnotes.edition}>
                <div><dt>Role</dt><dd>Research and design direction</dd></div>
                <div><dt>Latest edition</dt><dd>0.4 · <time dateTime="2026-10-26">October 26, 2026</time></dd></div>
                <div><dt>Latest chapter</dt><dd>Beyond the Assistant</dd></div>
              </dl>
            </aside>
          </div>
          <FieldnotesFigure
            name="fieldnotes-research-cover"
            alt={COVER_ALT}
            caption="Explore an example, understand its mechanism, compare approaches and apply the lesson to a design task."
            label="the Fieldnotes cover"
            priority
          />
        </header>

        <div className={styles.articleShell}>
          <aside className={styles.toc} aria-label="On this page">
            <p>In this folio</p>
            <ol>{CONTENTS.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ol>
          </aside>
          <div className={styles.articleColumn}>
            <div className={styles.articleBody}>
              <section id="question">
                <p className={styles.stageNumber}>Stage 01 · Ambiguity</p>
                <h2>When does an example become a defensible decision?</h2>
                <p>
                  A polished product example can suggest an interaction while leaving its most
                  consequential behavior outside the frame. A review button may be visible without
                  showing what is approved. An activity list may show progress without demonstrating
                  how someone resumes the work tomorrow.
                </p>
                <p>
                  Fieldnotes connects what a source actually shows to a mechanism, the conditions
                  in which it could fit, the tradeoff it introduces, and a question to test. The
                  aim is to make a reference useful beyond the product or visual style that first inspired it.
                </p>
              </section>

              <section id="structure">
                <p className={styles.stageNumber}>Stage 02 · Structure</p>
                <h2>Follow the evidence into the decision.</h2>
                <p>
                  The work combines desk research, close visual analysis, comparison across products
                  and research synthesis. Earlier source collections were reconciled with the
                  guide’s current records to preserve useful examples and identify gaps for fresh investigation.
                </p>
                <p>
                  Each reference retains its source and exact visual state. The analysis separates
                  visible observation, interpretation and behavior still needing verification. A
                  product illustration, an edited demonstration and an independently observed task
                  support different claims.
                </p>
                <p>
                  From there, the reader decides what to <strong>preserve</strong>, what to <strong>adapt</strong>,
                  {" "}and what to <strong>investigate</strong>. A code review may suggest keeping an
                  explanation beside an inspectable change. Transferring that idea still requires
                  choosing the right unit of review: a sentence, a record, an amount or a consequence.
                </p>
                <FieldnotesFigure
                  name="fieldnotes-research-method"
                  alt="Three connected parts of the research method: observe the exact source and its limits; interpret the design choice and compare alternatives; apply it to a task with explicit adaptations and open questions. Evidence stays attached to the decision."
                  caption="Keep what the source shows, how the choice is interpreted and what should change in another context distinct."
                  label="the research method figure"
                />
              </section>

              <section id="prototype" className={fieldnotes.decisions}>
                <p className={styles.stageNumber}>Stage 03 · Prototype</p>
                <h2>Three decisions that shaped the guide.</h2>
                <h3>Organize around the designer’s task</h3>
                <p>
                  The nine lessons address decisions such as defining scope, reviewing a change,
                  setting authority, correcting a proposal, recovering state and returning to work.
                  Product examples sit inside those questions, allowing different interfaces to be
                  compared without treating visual similarity as proof that they solve the same problem.
                </p>
                <h3>Make the tradeoff part of the lesson</h3>
                <p>
                  Object selection can make intent precise while missing context elsewhere. A
                  checkpoint can offer a restoration target while leaving external effects
                  unresolved. A named assistant can create a recognizable place to return while
                  obscuring which artifact contains the authoritative result. These tensions give
                  designers something concrete to investigate.
                </p>
                <h3>Let research become a working brief</h3>
                <p>
                  Readers can select relevant references, compare approaches and record decisions
                  for their own task. A saved, exportable brief carries an evidence appendix,
                  keeping the rationale and its limitations close to the proposed design.
                </p>
              </section>

              <section id="evidence" className={fieldnotes.decisions}>
                <p className={styles.stageNumber}>Stage 04 · Evidence / Latest chapter</p>
                <h2>Beyond the Assistant</h2>
                <p>
                  The latest chapter examines work that continues across time, decisions and
                  surfaces through OpenAI Dots, Grok Bot and Muse by Meta. Six editorial questions
                  guide the comparison:
                </p>
                <ol className={fieldnotes.questions}>
                  {QUESTIONS.map(([label, question]) => <li key={label}><strong>{label}</strong><p>{question}</p></li>)}
                </ol>
                <FieldnotesFigure
                  name="fieldnotes-ongoing-work-questions"
                  height={1100}
                  alt="Six questions for ongoing AI work: continuity asks what remains recognizable; initiative asks what can begin or interrupt; authority identifies the exact decision; correction responds to new information; return surfaces changes and needed judgment; outcome asks what proves the result and how it can be repaired."
                  caption="Beyond the Assistant examines continuity, initiative, authority, correction, return and outcomes."
                  label="the ongoing-work questions figure"
                />
                <h3>Dots · Keep prepared work inspectable</h3>
                <p>
                  Published launch examples place a review request and proposed fix beside a work
                  surface, and show revision after a changed requirement. They suggest keeping
                  judgment close to a specific result; completed merge or publication remains outside the evidence.
                </p>
                <h3>Grok Bot · Bind permission to a defined scope</h3>
                <p>
                  An incident example exposes a proposed batch, exclusions and exact message before
                  authorization. The lesson connects permission to the work it covers, with a
                  separate need to establish what happened afterward.
                </p>
                <h3>Muse · Give continuing work recognizable places</h3>
                <p>
                  Goals, activity, checkout approval and artifact previews answer different return
                  questions. The published images concern different tasks, so their connection is
                  a research question rather than an assumed continuous journey.
                </p>
                <p>
                  The chapter adds seven visual assets and reuses two existing Muse references.
                  Revisiting a source preserves the research history; it does not create an independent observation.
                </p>
              </section>

              <section id="story">
                <p className={styles.stageNumber}>Stage 05 · Story</p>
                <h2>A learning journey that ends in a decision.</h2>
                <p>
                  <strong>Explore → Understand → Compare → Apply.</strong> The interactive guide
                  brings traceable references, focused comparisons and an editable brief into one
                  experience. Maya, an illustrative exercise, rehearses correction and review
                  before publication. The latest chapter adds prompts for standing responsibility,
                  authority, retained context and recovery.
                </p>
                <dl className={fieldnotes.scope} aria-label="Guide scope, edition 0.4">
                  <div><dt>09</dt><dd>Design lessons</dd></div>
                  <div><dt>03</dt><dd>Additional ongoing-work cases</dd></div>
                  <div><dt>21</dt><dd>Retained source visuals</dd></div>
                </dl>
                <p>
                  The delivered work is a working guide and portable research package. The latest
                  edition extends the lessons while preserving previously saved work. These counts
                  describe the artifact’s scope.
                </p>
                <p>
                  Recorded guide checks covered source consistency, saved-work preservation,
                  brief assembly, navigation, image inspection and desktop and narrow layouts.
                  They establish qualities of the guide, not authenticated end-to-end testing of
                  the researched products. Effects on designers’ judgment, review effort and
                  downstream product outcomes remain unmeasured.
                </p>
              </section>
            </div>
          </div>
        </div>

        <footer id="alignment" className={styles.closing}>
          <div>
            <p className={styles.stageNumber}>Stage 06 · Alignment / Next inquiry</p>
            <h2>Missing evidence sharpens the next question.</h2>
            <p>
              The next research phase would follow one task through review, authorization,
              execution, correction and return. It would test whether designers using Fieldnotes
              can identify a consequential mistake, explain their chosen boundary and carry that
              reasoning into a new context.
            </p>
          </div>
          <nav className={styles.closingLinks} aria-label="Continue reading">
            <Link href="/research#fieldnotes">Back to Research &amp; Strategy</Link>
            <Link href="/research/ai-native-strategy">Read Architectures of Intent</Link>
            <Link href="/#colophon">Get in touch</Link>
          </nav>
        </footer>
      </article>
    </ManuscriptFrame>
  )
}
