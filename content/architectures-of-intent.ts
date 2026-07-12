/**
 * Approved public article for Architectures of Intent.
 * Locked copy from the final public edition — structural conversion only.
 * Inline citations use {{n}} markers rendered as footnote links.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "visual"; variant: "spectrum" | "archetypes" | "trust-loop" }
  | { type: "principles" }

export type ArticleSection = {
  id: string
  title: string
  blocks: ArticleBlock[]
}

export const ARCHITECTURES_OF_INTENT_META = {
  title: "Architectures of Intent",
  subtitle: "What enterprise software becomes when AI is the operating model, not a feature",
  eyebrow: "Research & Strategy",
  metadataLine: "Research synthesis · Public edition · approximately 12-minute read",
  abstract:
    "The more meaningful question is what happens when AI stops being something a product has and starts becoming part of what the product is. The interface becomes something closer to a negotiation between what a person is trying to accomplish, what the system understands, what evidence it can show, and what it is allowed to do.",
  wordCount: 2552,
  interactiveGuideHref: "https://v0-ai-native-strategy-research.vercel.app/",
  interactiveGuideLabel: "Open interactive guide",
} as const

export const ARCHITECTURES_OF_INTENT_TOC = [
  { id: "opening-thesis", label: "Opening thesis" },
  { id: "feature-layer-ai", label: "Why feature-layer AI is insufficient" },
  { id: "remove-it-test", label: "The remove-it test" },
  { id: "experience-archetypes", label: "AI-native experience archetypes" },
  { id: "trust", label: "Trust as a designed product surface" },
  { id: "grounding-and-evidence", label: "Context, grounding, and evidence" },
  { id: "bounded-autonomy", label: "Permissions, review, and bounded autonomy" },
  { id: "enterprise-implications", label: "Implications for complex enterprise work" },
  { id: "design-practice", label: "How this research shaped my design practice" },
  { id: "principles", label: "Principles teams can apply" },
  { id: "closing-reflection", label: "Closing reflection" },
  { id: "sources", label: "Sources and further reading" },
] as const

export const ARCHITECTURES_OF_INTENT_PRINCIPLES = [
  "Apply the remove-it test before calling anything AI-native. Be honest about whether the product survives without its AI core, and design accordingly.",
  "Make grounding visible. Show what the system is drawing from: a document, a workspace, a source set, the open web, or a governed enterprise graph.",
  "Treat trust as a designed surface, not an assumption. Previews, rationales, diffs, and citations belong in the core interaction model.",
  "Default to the lowest level of autonomy that still delivers value. Let the system earn the right to act through evidence, feedback, and well-designed constraints.",
  "Give every consequential action a preview, a confirmation, and a reversal path or a clearly designed recovery or compensating action.",
  "Design escalation to a person as a feature, with full context attached, not as a dead end the system reaches when it runs out of options.",
  "Inherit permissions strictly. Never use AI to bypass the access and action boundaries that govern the person or workflow it represents.",
  "Design the failure state before the happy path. The everyday, messy, ambiguous case is the real product; the clean demo case is not.",
] as const

export const ARCHITECTURES_OF_INTENT_SECTIONS: ArticleSection[] = [
  {
    id: "opening-thesis",
    title: "Opening thesis",
    blocks: [
      {
        type: "p",
        text: "Much of enterprise software has historically been organized around predefined workflows, fixed navigation, and user-initiated steps. Define the workflow, design the screens, let people move through a fairly stable sequence of actions. When AI first entered that structure, it often appeared as a feature: a summary button, a drafting assistant, a smarter autocomplete, a chat panel added to the side of a product that otherwise worked the same way.",
      },
      {
        type: "p",
        text: "That phase is useful, but it is not the most interesting shift. The more meaningful question is what happens when AI stops being something a product has and starts becoming part of what the product is. The interface is no longer only a menu of things a person can click. It becomes something closer to a negotiation between what a person is trying to accomplish, what the system understands, what evidence it can show, and what it is allowed to do.",
      },
      {
        type: "p",
        text: "I have come to think of that shift as an architecture of intent: a system organized around interpreting and acting on human goals, rather than one organized only around a fixed set of functions. It is a design philosophy, not a feature list. The distance between those two things is larger than many product teams currently treat it.",
      },
    ],
  },
  {
    id: "feature-layer-ai",
    title: "Why feature-layer AI is insufficient",
    blocks: [
      {
        type: "p",
        text: "A large share of enterprise AI still behaves additively. It sits on top of an existing information architecture, with the same permissions model, the same navigation, and the same one-shot workflows, then tries to make that structure faster or more convenient: a draft here, a summary there, a suggestion in the corner of the screen.",
      },
      {
        type: "p",
        text: "That is a real improvement. It can remove busywork, reduce blank-page friction, and help people move faster through systems they already use. But additive AI inherits the assumptions of the product underneath it. If the workflow assumes a person will read every document, weigh every option, remember every dependency, and initiate every action by hand, a smart suggestion does not remove that assumption. It just makes the assumption less tedious to live with.",
      },
      {
        type: "p",
        text: "This matters because the advantage is moving. As access to capable models becomes less differentiating, more of the product advantage moves into context, grounding, workflow integration, and control-surface design. The better question is not which model sits behind a feature. It is what the product knows, what it can prove, where it can act, and how clearly a person can understand the boundary between suggestion and action.",
      },
      {
        type: "p",
        text: "Feature-layer AI rarely reaches all of that. It can make a product feel modern without changing the product's operating model. The harder work is architectural: redesigning the value loop so intelligence is not a decorative layer, but the thing that makes the work possible.",
      },
    ],
  },
  {
    id: "remove-it-test",
    title: "The remove-it test",
    blocks: [
      {
        type: "p",
        text: "The most useful filter to come out of this research is almost embarrassingly simple: remove the AI. What is left?",
      },
      {
        type: "p",
        text: "If the product gets worse but still does its job, that is AI-enabled. The workflow survives without the intelligence layer. If removing the AI breaks the primary workflow badly enough that the product would need to be redesigned around a person doing the work by hand, that is AI-first. And if removing the AI means the product has no reason to exist, with no meaningful manual equivalent left behind, that is AI-native.",
      },
      {
        type: "p",
        text: "Applied honestly, the test is uncomfortable. Under this test, I would classify many enterprise products, including some with serious AI investment behind them, as AI-enabled or AI-first rather than AI-native. A drafting assistant survives its own removal. A predictive dashboard survives too, just less impressively. A product like Perplexity is different: its core promise is a direct, cited answer assembled from sources, not a list of links with AI sprinkled on top.{{1}} Cursor is different in a related way: the product is built around an AI coding agent that can understand a codebase, plan work, and prepare changes for review.{{2}}",
      },
      {
        type: "p",
        text: "The point is not to shame the first two categories. Plenty of good software is, and should be, AI-enabled. The value of the remove-it test is honesty. It stops a team from calling something AI-native because it is ambitious, and makes them say plainly what actually depends on the intelligence layer and what is simply wrapped around it.",
      },
      { type: "visual", variant: "spectrum" },
    ],
  },
  {
    id: "experience-archetypes",
    title: "AI-native experience archetypes",
    blocks: [
      {
        type: "p",
        text: "Across the products I reviewed, a small number of recurring jobs appeared again and again. The categories are not universal facts; they are how I organized the research so unlike products could be compared on the same terms.",
      },
      {
        type: "p",
        text: "Answer engines synthesize a direct, sourced answer instead of returning a list of results. Enterprise knowledge assistants retrieve and connect internal information across tools, with permissions and source visibility as part of the product. Agentic developer tools move from suggesting code to planning, editing, testing, and preparing changes across a codebase; GitHub Copilot's cloud agent, for example, can research a repository, create an implementation plan, make code changes on a branch, and let a person review the diff before a pull request is created.{{3}} Customer and service agents resolve requests by combining conversation, policy, records, and escalation. Deep research agents browse, read, and synthesize across many sources over an extended session. Ambient and context-aware assistants depend on memory and prior context, which makes transparency and user control especially important.{{9}} Workplace copilots sit inside existing work tools to accelerate drafting, summarizing, finding, and editing.",
      },
      {
        type: "p",
        text: "Most real products blend more than one archetype. That is fine. What matters is naming the job clearly: what is the user asking the system to do, and what happens to that job if the intelligence layer is removed?",
      },
      { type: "visual", variant: "archetypes" },
    ],
  },
  {
    id: "trust",
    title: "Trust as a designed product surface",
    blocks: [
      {
        type: "p",
        text: "The biggest shift in how I think about AI products came from watching how differently trust behaves across this landscape. It does not map cleanly to model quality. Across the products I reviewed, trust appeared closely connected to a smaller set of design decisions: visible sources, previews before action, clear scope, inspectable changes, explicit limits, and a human path when the system should stop.",
      },
      {
        type: "p",
        text: "Perplexity and NotebookLM both make source grounding part of the experience, not an appendix. NotebookLM's original product framing is especially direct: it grounds the model in the sources a person selects, accompanies responses with citations, and makes source checking part of the workflow.{{4}} GitHub Copilot and Cursor show a related pattern in a different medium: before code becomes part of the work, the change is made visible as something a person can inspect, reject, or revise.{{2}}{{3}}",
      },
      {
        type: "p",
        text: "None of that is just about the model getting smarter. It is about the product making its own reasoning and consequences inspectable: a preview before an action, a citation before a claim, a plan before execution, a review step before a change reaches a shared system. Trust is not something a person infers from a system that merely seems capable. It is something a team designs on purpose, the same way it would design an error state, checkout flow, or permission prompt.",
      },
      {
        type: "p",
        text: "Treat trust as an afterthought and people still calibrate it. They just calibrate it against the product's failures instead of against the product's intended boundaries.",
      },
    ],
  },
  {
    id: "grounding-and-evidence",
    title: "Context, grounding, and evidence",
    blocks: [
      {
        type: "p",
        text: "If trust is designed, grounding is what it is designed around. The products that hold up under sustained use are specific about two things: what the system knows, and how a person can check it.",
      },
      {
        type: "p",
        text: "NotebookLM makes the source boundary central to the product: answers are grounded in the sources the user selects, and citations help people check the relevant original material.{{4}} Microsoft 365 Copilot frames grounding through Microsoft Graph and the user's working context, while stating that Copilot only surfaces organizational data the person has permission to view.{{6}} Glean describes a similar enterprise pattern from another angle: company context, data governance, permission boundaries, and referenceability are not separate compliance details; they are the foundation that makes AI answers usable in an organization.{{5}}",
      },
      {
        type: "p",
        text: "What all three are doing is turning \"what does the AI know\" from an implementation detail into a visible part of the product. That distinction matters more in enterprise work than in casual use. Consumer AI products often optimize for speed and delight. Enterprise systems must deliver those qualities while also being defensible, permission-aware, and traceable.",
      },
      {
        type: "p",
        text: "An ungrounded answer that sounds confident can propagate into consequential decisions, downstream systems, and other people's work. Evidence cannot be an appendix. It has to be load-bearing: a citation someone can open, a scope they can see, a source they can trace, a recommendation they can challenge.",
      },
    ],
  },
  {
    id: "bounded-autonomy",
    title: "Permissions, review, and bounded autonomy",
    blocks: [
      {
        type: "p",
        text: "In this research, I found that the frontier has moved from AI that suggests to AI that acts. That transition is where much of the real design work now lives. Suggesting a sentence is low stakes. Editing a file across a codebase, resolving a customer issue, updating a record, or advancing a workflow is not.",
      },
      {
        type: "p",
        text: "The stronger products share a pattern: a visible plan before execution, a preview of consequences, a confirmation step that explains what is about to happen, and a reversal path or clearly designed recovery or compensating action when something goes wrong. GitHub's cloud-agent workflow keeps code changes on a branch, exposes review through the pull request system, and treats review of agent output as normal engineering work.{{3}} Salesforce describes Agentforce as a platform for building, testing, deploying, managing, and supervising agents, with guardrails, testing, and human handoff as part of the agent lifecycle.{{7}} Intercom's Fin positions handoff to a human team, full customer context, testing, and observability as core parts of how a service agent should operate.{{8}}",
      },
      {
        type: "p",
        text: "Underneath all of this sits a rule simple enough to state plainly: An AI system should not exceed the user's authorized access or the authority explicitly delegated to it by policy. Permissions inherit. Autonomy is earned in stages, not granted by default. Review is not friction to be engineered away. It is the mechanism that makes bounded autonomy credible enough for work that matters.",
      },
      { type: "visual", variant: "trust-loop" },
    ],
  },
  {
    id: "enterprise-implications",
    title: "Implications for complex enterprise work",
    blocks: [
      {
        type: "p",
        text: "Much of my work sits inside complex enterprise workflows where decisions cross systems, stakeholders, permissions, and real operational consequences.",
      },
      {
        type: "p",
        text: "That context changes what feels important in this research. The remove-it test, visible grounding, and bounded autonomy are not just elegant design patterns. They become preconditions for whether an intelligent system should be trusted with anything consequential. In a complex workflow, an error may not stay local to one screen or one person. It may move into a downstream system, shape another person's judgment, trigger follow-up work, or become part of a record someone else relies on later.",
      },
      {
        type: "p",
        text: "What I take from this is that AI-native design in complex enterprise domains is not primarily about autonomy for its own sake. It is about making complexity legible: giving someone enough visible reasoning, evidence, and control that they can move forward with judgment instead of simply accepting an answer and hoping it holds up.",
      },
    ],
  },
  {
    id: "design-practice",
    title: "How this research shaped my design practice",
    blocks: [
      {
        type: "p",
        text: "This research shaped how I approach information architecture, trust, evidence, human review, and governed action in complex enterprise products.",
      },
      {
        type: "p",
        text: "The research gave me a more consistent set of questions to bring into early product work: what breaks without the intelligence layer, what evidence supports a recommendation, where human review belongs, and how clearly the system communicates the limits of its context.",
      },
      {
        type: "p",
        text: "Concretely, that means I ask the remove-it question earlier now, before a feature is scoped rather than after it is built. I treat \"why is it suggesting this\" as a first-order product question, not an edge case. I think about review and escalation before the happy path, because the moment something goes wrong often determines whether people keep using the system. And I treat grounding scope, what the system is and is not drawing from, as something a person should see at a glance.",
      },
      {
        type: "p",
        text: "None of that makes for a dramatic before-and-after story. It is a shift in what I check for first. It has held up across enough product problems that I no longer think of it only as a research conclusion. It is how I work now.",
      },
    ],
  },
  {
    id: "principles",
    title: "Principles teams can apply",
    blocks: [
      {
        type: "p",
        text: "A few principles came out of this research clearly enough that I would hand them to any team building an AI-native product, regardless of domain:",
      },
      { type: "principles" },
    ],
  },
  {
    id: "closing-reflection",
    title: "Closing reflection",
    blocks: [
      {
        type: "p",
        text: "I keep coming back to the phrase architecture of intent because it names the design problem correctly. The interesting work is not making a model sound more impressive or an interface feel more magical. It is building the structure around it: grounding, evidence, review, boundaries, recovery, and permission-aware action.",
      },
      {
        type: "p",
        text: "Software has faced smaller versions of this problem before, every time a new capability needed new guardrails before people would rely on it. This version is larger because the system can now interpret intent and act across real workflows. I do not think the industry has solved that yet. I have not solved it either. But I know what I am looking for now when I try.",
      },
      {
        type: "p",
        text: "Not a more impressive answer. A structure I would trust with a decision that actually matters.",
      },
    ],
  },
]
