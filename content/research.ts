/**
 * Canonical public-safe source for Research & Strategy portfolio entries.
 * No internal names, Drive links, metrics, or raw white paper text.
 */

export type ResearchEntry = {
  id: string
  title: string
  subtitle?: string
  eyebrow: string
  summary: string
  whatItShows: string
  publicSafeThemes: string[]
  status: string
  href: string
  ctaLabel: string
  coverSrc?: string
  coverAlt?: string
  externalHref?: string
  externalCtaLabel?: string
}

export const RESEARCH_SECTION = {
  eyebrow: "Research & Strategy",
  heading: "Operating models for AI-native design",
  intro:
    "I also create strategic research and frameworks that help teams make sense of AI-native product work — from shared prototype workflows to the trust patterns that make intelligent systems usable.",
  ctaLabel: "View research summaries",
  ctaHref: "/research",
} as const

export const FIELDNOTES_RESEARCH = {
  id: "fieldnotes",
  title: "Fieldnotes",
  subtitle: "A Visual Guide to AI-Native Product Design",
  eyebrow: "Visual product research · Research synthesis · Learning experience",
  summary:
    "A visual research guide connecting AI product examples to design decisions about scope, review, authority, correction, and continuing work. Its latest chapter, Beyond the Assistant, examines OpenAI Dots, Grok Bot, and Muse by Meta.",
  whatItShows:
    "Research and design direction, visual analysis, evidence-aware synthesis, interaction design, and the translation of product examples into practical design decisions.",
  publicSafeThemes: [
    "AI-native product design",
    "Visual analysis",
    "Research synthesis",
    "Evidence and interpretation",
    "Human review and authority",
    "Ongoing AI work",
  ],
  status: "Public research case study · Edition 0.4",
  href: "/research/fieldnotes",
  ctaLabel: "Read the research",
  coverSrc: "/images/research/fieldnotes/fieldnotes-research-cover.svg",
  coverAlt:
    "Fieldnotes editorial cover. The learning journey is Explore, Understand, Compare and Apply. Edition 0.4 contains nine design lessons, three ongoing-work cases and 21 retained source visuals.",
} satisfies ResearchEntry

export const RESEARCH_ENTRIES: ResearchEntry[] = [
  FIELDNOTES_RESEARCH,
  {
    id: "architectures-of-intent",
    eyebrow: "AI-native strategy · Enterprise systems · Operating models",
    title: "Architectures of Intent",
    summary:
      "A public AI-native strategy guide exploring what enterprise software becomes when AI stops being treated as a feature and starts becoming the operating model.",
    whatItShows:
      "AI-native product strategy, enterprise systems thinking, strategic storytelling, operating-model framing, and research synthesis.",
    publicSafeThemes: [
      "AI as operating model",
      "Intelligence as infrastructure",
      "Enterprise transformation",
      "Strategic product framing",
      "Systems thinking",
      "Research synthesis",
    ],
    status: "Public research artifact",
    href: "/research/ai-native-strategy",
    ctaLabel: "Read the research",
    externalHref: "https://v0-ai-native-strategy-research.vercel.app/",
    externalCtaLabel: "Open interactive guide",
  },
  {
    id: "github-design-collaboration",
    eyebrow: "Design operating model · GitHub workflows · AI-ready collaboration",
    title: "GitHub-Based Design Collaboration",
    summary:
      "Explored how design teams can use GitHub workflows, shared foundations, team-owned slices, generated route registries, pull-request review, and validation to bring multiple product workstreams into one integrated, AI-ready prototype model.",
    whatItShows:
      "Design operating-model thinking, design engineering fluency, cross-team workflow design, prototype governance, contribution systems, and automation-ready collaboration.",
    publicSafeThemes: [
      "Design operating models",
      "Shared foundations",
      "Team-owned slices",
      "Pull-request review",
      "Generated route registries",
      "Review artifacts",
      "AI-ready collaboration",
    ],
    status: "Public-safe research summary",
    href: "/research#github-design-collaboration",
    ctaLabel: "View research summary",
  },
  {
    id: "ai-native-platform-patterns",
    eyebrow: "AI-native platforms · Trust patterns · Decision architecture",
    title: "AI-Native Platform Patterns",
    summary:
      "Synthesized recurring patterns across AI-native product experiences, including Observe → Act → Build modes, context, grounding, permissions, review, human control, and decision architecture.",
    whatItShows:
      "AI product strategy, research synthesis, pattern recognition, trust and governance thinking, and platform-level design judgment.",
    publicSafeThemes: [
      "Observe → Act → Build",
      "Context and grounding",
      "Trust and review",
      "Permissions and governance",
      "Human control",
      "Suggestion-to-action workflows",
      "Decision architecture",
    ],
    status: "Public-safe research summary",
    href: "/research/visual-atlas",
    ctaLabel: "Explore the visual research",
  },
]
