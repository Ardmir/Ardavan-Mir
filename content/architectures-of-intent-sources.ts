/**
 * Public-safe source list for Architectures of Intent.
 * Titles and URLs from the approved public sources packet only.
 */

export type ArchitectureSourceLink = {
  label: string
  href: string
}

export type ArchitectureSource = {
  id: string
  number: number
  title: string
  publisher: string
  links: ArchitectureSourceLink[]
}

export const ARCHITECTURES_OF_INTENT_SOURCES: ArchitectureSource[] = [
  {
    id: "source-1",
    number: 1,
    title: "Perplexity product overview",
    publisher: "Perplexity",
    links: [{ label: "Perplexity product overview", href: "https://www.perplexity.ai/hub" }],
  },
  {
    id: "source-2",
    number: 2,
    title: "Cursor product overview",
    publisher: "Anysphere",
    links: [{ label: "Cursor product overview", href: "https://cursor.com/" }],
  },
  {
    id: "source-3",
    number: 3,
    title: "GitHub Copilot cloud agent documentation",
    publisher: "GitHub Docs",
    links: [
      {
        label: "About GitHub Copilot cloud agent",
        href: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent",
      },
      {
        label: "Review output from Copilot",
        href: "https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output",
      },
    ],
  },
  {
    id: "source-4",
    number: 4,
    title: "Introducing NotebookLM",
    publisher: "Google",
    links: [
      {
        label: "Introducing NotebookLM",
        href: "https://blog.google/innovation-and-ai/technology/ai/notebooklm-google-ai/",
      },
    ],
  },
  {
    id: "source-5",
    number: 5,
    title: "Glean enterprise AI search and security",
    publisher: "Glean",
    links: [
      {
        label: "Enterprise-grade generative AI search capabilities",
        href: "https://www.glean.com/blog/search-launch-announcement",
      },
      {
        label: "AI Security: Protecting Enterprise Data with Glean",
        href: "https://www.glean.com/platform/security",
      },
    ],
  },
  {
    id: "source-6",
    number: 6,
    title: "Data, Privacy, and Security for Microsoft 365 Copilot",
    publisher: "Microsoft Learn",
    links: [
      {
        label: "Data, Privacy, and Security for Microsoft 365 Copilot",
        href: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy",
      },
    ],
  },
  {
    id: "source-7",
    number: 7,
    title: "Agentforce: The AI Agent Platform",
    publisher: "Salesforce",
    links: [
      {
        label: "Agentforce: The AI Agent Platform",
        href: "https://www.salesforce.com/agentforce/",
      },
    ],
  },
  {
    id: "source-8",
    number: 8,
    title: "Fin: The highest performing Customer Agent",
    publisher: "Intercom",
    links: [{ label: "Fin: The highest performing Customer Agent", href: "https://fin.ai" }],
  },
  {
    id: "source-9",
    number: 9,
    title: "Memory FAQ",
    publisher: "OpenAI Help Center",
    links: [
      {
        label: "Memory FAQ",
        href: "https://help.openai.com/en/articles/8590148-memory-faq",
      },
    ],
  },
]

export const ARCHITECTURES_OF_INTENT_PUBLICATION_NOTE =
  "Product examples reflect publicly documented behavior reviewed during this research; interfaces and feature names may evolve."
