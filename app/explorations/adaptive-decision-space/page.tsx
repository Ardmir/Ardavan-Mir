import type { Metadata } from "next"
import { AdaptiveDecisionSpace } from "@/components/adaptive-decision-space/AdaptiveDecisionSpace"

export const metadata: Metadata = {
  title: "Adaptive Decision Space prototype — Ardavan Mirhosseini",
  description:
    "An isolated prototype exploring reading lenses, depth, evidence, provenance, and contextual guidance.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdaptiveDecisionSpacePage() {
  return <AdaptiveDecisionSpace />
}

