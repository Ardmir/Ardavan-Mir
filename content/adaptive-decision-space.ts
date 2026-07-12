export type DecisionStage =
  | "ambiguity"
  | "structure"
  | "prototype"
  | "evidence"
  | "story"
  | "alignment"

export type ReadingLens = "hiring" | "ai-thinking" | "systems-craft"

export type ReadingDepth = "quick" | "standard" | "deep"

export type ProvenanceState =
  | "verified"
  | "approved"
  | "reflection"
  | "condensed"
  | "withheld"

export type PortfolioBlockType =
  | "project"
  | "evidence"
  | "principle"
  | "research"
  | "bio"
  | "contact"

export type PortfolioPassage = {
  id: string
  text: string
  depth: "summary" | "standard" | "deep"
  provenance: ProvenanceState
  sourceLabel: string
}

export type PortfolioBlock = {
  id: string
  type: PortfolioBlockType
  stages: DecisionStage[]
  lenses: ReadingLens[]
  depth: "summary" | "standard" | "deep"
  readingTimeMinutes: number
  provenance: ProvenanceState
  relatedQuestions: string[]
  relatedContent: string[]
  eyebrow: string
  title: string
  passages: PortfolioPassage[]
  href: string
  ctaLabel: string
  withheldNote?: string
}

export const DECISION_STAGES: Array<{
  id: DecisionStage
  index: string
  label: string
  anchor: string
}> = [
  { id: "ambiguity", index: "01", label: "Ambiguity", anchor: "opening" },
  { id: "structure", index: "02", label: "Structure", anchor: "decision-spine" },
  { id: "prototype", index: "03", label: "Prototype", anchor: "decision-spine" },
  { id: "evidence", index: "04", label: "Evidence", anchor: "evidence" },
  { id: "story", index: "05", label: "Story", anchor: "apparatus" },
  { id: "alignment", index: "06", label: "Alignment", anchor: "colophon" },
]

export const READING_LENSES: Array<{
  id: ReadingLens
  label: string
  shortLabel: string
  description: string
  pathNote: string
}> = [
  {
    id: "hiring",
    label: "Hiring",
    shortLabel: "Hiring",
    description: "Role clarity, flagship work, outcomes and product storytelling.",
    pathNote: "Flagship work and public-safe contribution are threaded forward.",
  },
  {
    id: "ai-thinking",
    label: "AI thinking",
    shortLabel: "AI thinking",
    description: "Explainability, human judgment, trust and research.",
    pathNote: "Trust, evidence and AI-native operating principles are threaded forward.",
  },
  {
    id: "systems-craft",
    label: "Systems & craft",
    shortLabel: "Systems & craft",
    description: "Information architecture, workflow models, prototypes and execution detail.",
    pathNote: "Information architecture and workflow structure are threaded forward.",
  },
]

export const READING_DEPTHS: Array<{
  id: ReadingDepth
  label: string
  weaveLabel: string
  description: string
}> = [
  {
    id: "quick",
    label: "≈2 minutes",
    weaveLabel: "Open weave",
    description: "Positioning, flagship work and the strongest evidence.",
  },
  {
    id: "standard",
    label: "≈10 minutes",
    weaveLabel: "Medium weave",
    description: "Supporting context, process and selected research.",
  },
  {
    id: "deep",
    label: "Whole story",
    weaveLabel: "Dense weave",
    description: "Full passages, provenance, reflections and canonical routes.",
  },
]

export const PROVENANCE_LABELS: Record<
  ProvenanceState,
  { siglum: string; label: string; description: string }
> = {
  verified: {
    siglum: "V",
    label: "Verified evidence",
    description: "A confirmed public fact, route or contact path.",
  },
  approved: {
    siglum: "A",
    label: "Approved portfolio copy",
    description: "Published, public-safe source text.",
  },
  condensed: {
    siglum: "C",
    label: "Condensed presentation",
    description: "A shorter setting of approved source material.",
  },
  reflection: {
    siglum: "R",
    label: "Personal reflection",
    description: "An authored lesson or point of view.",
  },
  withheld: {
    siglum: "W",
    label: "Withheld / NDA material",
    description: "Detail intentionally omitted from the public portfolio.",
  },
}

export const PORTFOLIO_BLOCKS: PortfolioBlock[] = [
  {
    id: "ies-evidence",
    type: "project",
    stages: ["ambiguity", "structure", "prototype", "evidence", "story", "alignment"],
    lenses: ["hiring", "ai-thinking", "systems-craft"],
    depth: "summary",
    readingTimeMinutes: 4,
    provenance: "approved",
    relatedQuestions: ["ies", "ai-native", "teams-bring-in"],
    relatedContent: ["qboa-evidence", "research-evidence"],
    eyebrow: "Flagship evidence · Intuit Enterprise Suite",
    title: "Defining an AI-native target state for enterprise finance",
    href: "/work/intuit-enterprise-suite",
    ctaLabel: "Open the public-safe IES case study",
    passages: [
      {
        id: "ies-summary",
        depth: "summary",
        provenance: "condensed",
        sourceLabel: "IES case-study introduction",
        text: "I helped define and communicate AI-native product direction for complex enterprise finance workflows — translating ambiguity into clearer information architecture, trust patterns, prototype concepts, and leadership-ready product narratives.",
      },
      {
        id: "ies-role",
        depth: "standard",
        provenance: "approved",
        sourceLabel: "IES case study · My role",
        text: "I contributed to the product direction by translating complex enterprise finance concepts into clearer experience models, information architecture, prototype concepts, and leadership-ready narratives. My work focused on helping teams reason through ambiguity, trust, evidence, authorization, and the role of human oversight in AI-native workflows.",
      },
      {
        id: "ies-future-state",
        depth: "standard",
        provenance: "approved",
        sourceLabel: "IES case study · Future-state exploration",
        text: "Part of the work was helping make future-state product direction easier to understand, discuss, and evaluate. Rather than treating AI as a layer of automation, the exploration focused on how complex financial workflows could become more legible through structure, evidence, controls, and human judgment.",
      },
      {
        id: "ies-reflection",
        depth: "deep",
        provenance: "reflection",
        sourceLabel: "IES case study · Reflection",
        text: "The most important lesson was that trustworthy AI is not only about model capability. It is about the surrounding experience: the information architecture, evidence, controls, language, and moments of human judgment that help people understand what the system is doing and why it matters.",
      },
    ],
    withheldNote:
      "Internal screenshots, roadmap details, and confidential demo material remain intentionally withheld.",
  },
  {
    id: "qboa-evidence",
    type: "project",
    stages: ["ambiguity", "structure", "prototype", "evidence"],
    lenses: ["hiring", "systems-craft"],
    depth: "summary",
    readingTimeMinutes: 3,
    provenance: "approved",
    relatedQuestions: ["start", "teams-bring-in"],
    relatedContent: ["ies-evidence"],
    eyebrow: "Systems evidence · QuickBooks Online Advanced",
    title: "Designing information architecture for advanced accounting workflows",
    href: "/work/quickbooks-dimensional-chart-of-accounts",
    ctaLabel: "Open the public-safe QBOA case study",
    passages: [
      {
        id: "qboa-summary",
        depth: "summary",
        provenance: "condensed",
        sourceLabel: "QBOA case-study introduction",
        text: "I shaped advanced accounting workflows that help teams understand multi-dimensional classification, reporting, and decision-making inside a complex financial product.",
      },
      {
        id: "qboa-model",
        depth: "standard",
        provenance: "approved",
        sourceLabel: "QBOA case study · Design principles",
        text: "The work focused on making dimensions understandable, showing structure in context, reducing classification ambiguity, and connecting classification choices to reporting views people could evaluate.",
      },
      {
        id: "qboa-patterns",
        depth: "standard",
        provenance: "approved",
        sourceLabel: "QBOA case study · Sanitized patterns",
        text: "Public-safe patterns include a dimensional classification grid, a reporting context layer, an account structure model, and a deliberate review and confirmation moment.",
      },
      {
        id: "qboa-deep",
        depth: "deep",
        provenance: "reflection",
        sourceLabel: "QBOA case study · Public design focus",
        text: "Structure, context, and review can turn classification ambiguity into reporting confidence without making the underlying accounting model disappear.",
      },
    ],
    withheldNote:
      "Customer data, internal product screens, project dates, and unverified impact metrics remain withheld.",
  },
  {
    id: "research-evidence",
    type: "research",
    stages: ["structure", "evidence", "story", "alignment"],
    lenses: ["ai-thinking", "systems-craft"],
    depth: "summary",
    readingTimeMinutes: 5,
    provenance: "approved",
    relatedQuestions: ["research", "trustworthy-ai", "ai-native"],
    relatedContent: ["ies-evidence"],
    eyebrow: "Research evidence · Architectures of Intent",
    title: "When AI becomes the operating model, not a feature",
    href: "/research/ai-native-strategy",
    ctaLabel: "Read Architectures of Intent",
    passages: [
      {
        id: "research-summary",
        depth: "summary",
        provenance: "condensed",
        sourceLabel: "Architectures of Intent · Abstract",
        text: "The interface becomes a negotiation between what a person is trying to accomplish, what the system understands, what evidence it can show, and what it is allowed to do.",
      },
      {
        id: "research-trust",
        depth: "standard",
        provenance: "approved",
        sourceLabel: "Architectures of Intent · Trust",
        text: "Trust is not something a person infers from a system that merely seems capable. It is something a team designs on purpose through visible sources, previews before action, clear scope, inspectable changes, explicit limits, and a human path when the system should stop.",
      },
      {
        id: "research-practice",
        depth: "standard",
        provenance: "approved",
        sourceLabel: "Architectures of Intent · Design practice",
        text: "The research created a consistent set of early product questions: what breaks without the intelligence layer, what evidence supports a recommendation, where human review belongs, and how clearly the system communicates the limits of its context.",
      },
      {
        id: "research-reflection",
        depth: "deep",
        provenance: "reflection",
        sourceLabel: "Architectures of Intent · Closing reflection",
        text: "The interesting work is not making a model sound more impressive or an interface feel more magical. It is building the structure around it: grounding, evidence, review, boundaries, recovery, and permission-aware action.",
      },
    ],
  },
]

