import type { Metadata } from "next"
import Link from "next/link"
import IesCaseStudyVisuals from "@/components/IesCaseStudyVisuals"
import {
  AiNativeDiagnostic,
  EnterpriseSystemModel,
  GovernedLifecycle,
  ResearchToFramework,
  RoleAdaptedObject,
} from "@/components/IesEnterpriseFrameworkVisuals"
import IesFutureStateVisuals from "@/components/IesFutureStateVisuals"
import { ManuscriptFrame } from "@/components/adaptive-decision-space/ManuscriptFrame"
import styles from "@/components/adaptive-decision-space/manuscript.module.css"
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

const FRAMEWORK_ELEMENTS = [
  {
    title: "Intent",
    copy: "Begin with the outcome and let the system compose a path through the work.",
  },
  {
    title: "Environment",
    copy: "AI operates through a scoped product environment rather than living in a separate assistant.",
  },
  {
    title: "Artifact",
    copy: "Consequential work persists in a governed object shared across roles—not in a transient conversation.",
  },
  {
    title: "Evidence",
    copy: "Claims remain connected to their sources, freshness, policy context, and review state.",
  },
  {
    title: "Gate",
    copy: "Authorization becomes available only after scope, evidence, policy, and expected impact are understood.",
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
    <ManuscriptFrame folio="Case study · E.01" backHref="/#evidence" backLabel="Back to evidence">
      <article>
        <header id="ambiguity" className={styles.hero}>
          <div className={styles.heroMeta}>
            <p>Intuit Enterprise Suite · Enterprise SaaS</p>
            <p>Evidence folio E.01 · Public-safe edition</p>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>AI-native workflows · Financial systems</p>
              <h1 className={styles.heroTitle}>
                Defining an AI-native <em>target state</em> for enterprise finance
              </h1>
              <p className={styles.heroDek}>
                I helped define and communicate AI-native product direction for complex enterprise
                finance workflows — translating ambiguity into clearer information architecture,
                trust patterns, prototype concepts, and leadership-ready product narratives.
              </p>
            </div>
            <aside className={styles.heroAside} aria-label="Public case-study note">
              <p className={styles.apparatusLabel}>What remains visible</p>
              <p><strong>Method, structure, and judgment.</strong></p>
              <p>
                Confidential product details, internal screenshots, and roadmap specifics remain
                withheld while the design reasoning stays inspectable.
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
              <h2 className={styles.stageHeading}>The challenge was not “add AI.” It was make AI legible.</h2>
            </div>
            <p className={styles.stageIntro}>
              Enterprise finance workflows are dense, high-stakes, and full of dependencies. People
              need to understand what changed, why it matters, what evidence supports it, who needs
              to act, and what happens after an action is taken.
            </p>
          </div>
          <div className={styles.contentColumns}>
            <div className={styles.contentBlock}>
              <h3>Context</h3>
              <p className={styles.bodyCopy}>
                As AI becomes more present in business software, the design challenge is not simply
                making systems more automated. The challenge is making intelligent systems
                understandable, trustworthy, and useful where human judgment still matters.
              </p>
            </div>
            <div className={styles.contentBlock}>
              <h3>Design problem</h3>
              <p className={styles.bodyCopy}>
                A smart recommendation is only useful if people can evaluate it. The experience
                needed to make reasoning visible, clarify risk, show supporting evidence, and
                preserve user control before meaningful action.
              </p>
            </div>
          </div>
          <blockquote className={styles.callout}>Make the system legible before making it smart.</blockquote>
        </section>

        <section id="prototype" className={`${styles.stage} ${styles.darkStage}`}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 03 · Prototype</p>
              <h2 className={styles.stageHeading}>Four moves made the direction discussable.</h2>
            </div>
            <p className={styles.stageIntro}>
              My role was to translate complex enterprise finance concepts into experience models,
              information architecture, prototype concepts, and leadership-ready narratives.
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
          <div className={styles.frameworkContribution}>
            <p className={styles.eyebrow}>Framework contribution</p>
            <h3 className={styles.frameworkHeading}>From AI-enabled features to a governed enterprise system</h3>
            <p className={styles.frameworkIntro}>
              AI-native could not mean adding an assistant to existing screens. We began with a
              simple diagnostic: if the AI disappeared, would the product still behave essentially
              the same way?
            </p>
            <p className={styles.frameworkIntro}>
              I helped synthesize recurring interaction decisions across product research, strategy
              literature, and customer evidence, then translate them into a framework for enterprise
              finance. The work connected intent, durable work objects, evidence, context, role, and
              governance into a shared model the team could build on.
            </p>
            <AiNativeDiagnostic />
            <ResearchToFramework />
          </div>
        </section>

        <section id="evidence" className={styles.evidenceStage}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 04 · Evidence</p>
              <h2 className={styles.stageHeading}>Patterns leave the design logic visible.</h2>
            </div>
            <p className={styles.stageIntro}>
              The public evidence is intentionally abstracted: generic labels, synthetic diagrams,
              and the decision architecture behind trust—never confidential product UI.
            </p>
          </div>
          <div className={styles.frameworkContribution}>
            <p className={styles.eyebrow}>Reusable interaction framework</p>
            <h3 className={styles.frameworkHeading}>Five elements made the operating model concrete.</h3>
            <p className={styles.frameworkIntro}>
              A governed enterprise system did not mean giving AI unrestricted control. It meant
              creating an environment where AI could work across complex financial contexts while
              keeping its evidence, permissions, consequences, and moments of human judgment visible.
            </p>
            <div className={styles.frameworkLedger}>
              {FRAMEWORK_ELEMENTS.map((element, index) => (
                <div key={element.title} className={styles.ledgerItem}>
                  <span className={styles.ledgerIndex}>F.{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{element.title}</h4>
                    <p>{element.copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className={styles.frameworkOutcome}>
              The proposal gave the team a shared language and reusable foundation for subsequent
              AI-native exploration.
            </blockquote>
            <EnterpriseSystemModel />
            <GovernedLifecycle />
            <RoleAdaptedObject />
            <div className={styles.frameworkReflection}>
              <p className={styles.apparatusLabel}>Design evolution</p>
              <p>
                Early concepts explored visual confidence tiers. As the framework matured, the
                emphasis moved toward explicit evidence, freshness, policy, review, and authorization
                states—signals people could interpret and act on more reliably.
              </p>
            </div>
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
          <div className={styles.exhibit}>
            <p className={styles.exhibitLabel}>Exhibit E.01a · Trust-pattern studies</p>
            <IesCaseStudyVisuals />
          </div>
          <p className={styles.sourceNote}>
            <span className={styles.provenanceLine}>
              <span className={styles.siglum} aria-hidden="true">W</span>
              Withheld / NDA material
            </span>
            Internal screenshots, roadmap details, and confidential demo material are intentionally omitted.
          </p>
        </section>

        <section id="story" className={styles.stage}>
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.stageNumber}>Stage 05 · Story</p>
              <h2 className={styles.stageHeading}>Future direction became something teams could evaluate.</h2>
            </div>
            <div>
              <p className={styles.stageIntro}>
                Rather than treating AI as a layer of automation, the exploration focused on how
                financial workflows could become more legible through structure, evidence,
                controls, and human judgment.
              </p>
              <p className={styles.bodyCopy}>
                The public version focuses on the design approach and storytelling patterns rather
                than internal prototypes or roadmap details.
              </p>
            </div>
          </div>
          <div className={styles.patternLedger}>
            {FUTURE_STATE_CARDS.map((card, index) => (
              <div key={card.title} className={styles.ledgerItem}>
                <span className={styles.ledgerIndex}>S.{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.exhibit}>
            <p className={styles.exhibitLabel}>Exhibit E.01b · From ambiguity to alignment</p>
            <IesFutureStateVisuals />
          </div>
        </section>

        <footer id="alignment" className={styles.closing}>
          <div>
            <p className={styles.stageNumber}>Stage 06 · Alignment</p>
            <h2>The system became clearer enough to discuss and decide.</h2>
            <p>
              The work helped make an abstract AI-native ambition easier to understand, evaluate,
              and discuss. The enduring lesson is that trustworthy AI depends on the surrounding
              information architecture, evidence, controls, language, and moments of human judgment.
            </p>
          </div>
          <nav className={styles.closingLinks} aria-label="Continue reading">
            <Link href="/work/quickbooks-dimensional-chart-of-accounts">Next evidence · QBOA</Link>
            <Link href="/research/ai-native-strategy">Related research · Architectures of Intent</Link>
            <Link href="/#evidence">Return to the portfolio manuscript</Link>
          </nav>
        </footer>
      </article>
    </ManuscriptFrame>
  )
}
