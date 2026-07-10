/**
 * Ask Ardavan — guided portfolio chat content source.
 * Static prompts and approved answers only. No backend, no LLM, no free-text.
 */

export const ASK_ARDAVAN_INTRO = {
  title: "Ask Ardavan",
  description:
    "Find the right case study, understand my AI design approach, or get in touch.",
} as const

export const ASK_ARDAVAN_GUARDRAIL =
  "I answer from public portfolio content only. For NDA-protected work, I'll point you to the sanitized case study."

export type AskArdavanPromptId =
  | "start"
  | "ai-native"
  | "trustworthy-ai"
  | "ies"
  | "founder"
  | "contact"

export type AskArdavanLink = {
  label: string
  href: string
  external?: boolean
}

export type AskArdavanPrompt = {
  id: AskArdavanPromptId
  label: string
  prompt: string
  assistantTitle: string
  answer: string
  links?: AskArdavanLink[]
}

export const ASK_ARDAVAN_PROMPTS: AskArdavanPrompt[] = [
  {
    id: "start",
    label: "What should I look at first?",
    prompt: "What should I look at first?",
    assistantTitle: "Where to start",
    answer:
      "Start with Intuit Enterprise Suite if you want to understand my AI-native enterprise product work. Look at QuickBooks Online Advanced for advanced accounting IA, and Iranians Who Design for my founder/community platform work.",
    links: [
      {
        label: "View the public-safe QBOA case study",
        href: "/work/quickbooks-dimensional-chart-of-accounts",
      },
    ],
  },
  {
    id: "ai-native",
    label: "Summarize your AI-native work",
    prompt: "Summarize your AI-native work",
    assistantTitle: "AI-native work",
    answer:
      "I focus on making complex systems legible before making them smart. My AI-native work is about trust, evidence, explainability, human judgment, and designing workflows where people understand what the system is doing and why it matters.",
  },
  {
    id: "trustworthy-ai",
    label: "What's your approach to trustworthy AI?",
    prompt: "What's your approach to trustworthy AI?",
    assistantTitle: "Trustworthy AI",
    answer:
      "Trustworthy AI should make reasoning visible, keep people in control, and support judgment rather than replace it. In high-trust financial workflows, evidence, context, authorization, and clear next steps matter more than generic automation.",
  },
  {
    id: "ies",
    label: "Tell me about Intuit Enterprise Suite",
    prompt: "Tell me about Intuit Enterprise Suite",
    assistantTitle: "Intuit Enterprise Suite",
    answer:
      "My IES work centers on helping define and communicate AI-native product direction for complex enterprise finance workflows. The public version focuses on information architecture, workflow clarity, explainability, and leadership-ready storytelling.",
    links: [
      {
        label: "View the public-safe IES case study",
        href: "/work/intuit-enterprise-suite",
      },
    ],
  },
  {
    id: "founder",
    label: "Show me your founder project",
    prompt: "Show me your founder project",
    assistantTitle: "Iranians Who Design",
    answer:
      "Iranians Who Design is a community-driven platform I created to make Iranian designers in tech more visible, connected, and discoverable.",
    links: [
      {
        label: "Iranians Who Design",
        href: "https://iranianxdesign.com/",
        external: true,
      },
    ],
  },
  {
    id: "contact",
    label: "How can I contact you?",
    prompt: "How can I contact you?",
    assistantTitle: "Get in touch",
    answer:
      "Use the verified email, LinkedIn, and résumé links on this site.",
    links: [
      { label: "Email", href: "mailto:ardavanmir@outlook.com" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/ardavanmir",
        external: true,
      },
      {
        label: "Résumé",
        href: "/resume-ardavan-mir.pdf",
        external: true,
      },
    ],
  },
]
