/**
 * LEGACY — Not used on the live portfolio (`app/page.tsx` is canonical).
 * Do not copy claims from this file into public copy. Fictional placeholder carousel
 * from an earlier template; metrics and product names are not verified public claims.
 */
"use client"

import { useState, useEffect } from "react"
import { ArrowRight, TrendingDown, TrendingUp, Plus } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Legacy placeholder — Tax workflow",
    tagline: "Explored ways to make a complex filing workflow easier to follow",
    problem: "Users needed clearer guidance through a dense, multi-step process.",
    process:
      "User research, information architecture, and progressive disclosure patterns.",
    outcome:
      "Qualitative improvements to clarity and task flow — no verified public metrics.",
    role: "Product designer",
    image: "/placeholder.svg?height=600&width=800",
    year: "Placeholder",
    highlights: ["Workflow clarity", "Progressive disclosure", "Research synthesis"],
    highlightLabels: ["Focus", "Approach", "Evidence"],
  },
  {
    id: 2,
    title: "Legacy placeholder — Mobile financial product",
    tagline: "Shaped a mobile-first view of key financial tasks",
    problem:
      "Small business users needed quicker access to essential financial information on mobile.",
    process:
      "Mobile-first layout, streamlined navigation, and offline-friendly patterns.",
    outcome:
      "Clearer mobile task flows and structure — no verified public metrics.",
    role: "Product designer",
    image: "/placeholder.svg?height=600&width=800",
    year: "Placeholder",
    highlights: ["Mobile IA", "Task focus", "Navigation"],
    highlightLabels: ["Focus", "Approach", "Structure"],
  },
  {
    id: 3,
    title: "Legacy placeholder — Budget insights",
    tagline: "Prototyped explainable insight patterns for personal finance",
    problem: "Users needed help understanding spending patterns and next steps.",
    process:
      "Insight dashboards with explainable recommendations and clear visual hierarchy.",
    outcome:
      "Prototype narratives for trustworthy insight patterns — no verified public metrics.",
    role: "Product designer",
    image: "/placeholder.svg?height=600&width=800",
    year: "Placeholder",
    highlights: ["Explainability", "Insight design", "Prototyping"],
    highlightLabels: ["Focus", "Approach", "Output"],
  },
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showDetailedMetrics, setShowDetailedMetrics] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("work")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="px-8 lg:px-12 py-24">
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="font-body font-light text-lg text-soft-white/70 mb-4 tracking-wide">
              {projects[currentProject].year} • {projects[currentProject].role}
            </div>
            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-soft-white mb-8 leading-[0.9] tracking-tight">
              {projects[currentProject].title}
            </h3>
            <p className="font-body font-light text-xl md:text-2xl lg:text-3xl text-soft-white/90 leading-relaxed mb-12">
              {projects[currentProject].tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-charcoal-light/30 py-6 border border-zinc-700 mb-12 rounded border-l-0 border-r-0">
              {projects[currentProject].highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 flex-row leading-7 font-normal text-left items-stretch text-gray-400">
                  <div className="flex-shrink-0">
                    {index === 0 && <TrendingDown className="w-6 text-gray-400 h-8" />}
                    {index === 1 && <TrendingUp className="text-gray-400 w-6 h-8" />}
                    {index === 2 && <Plus className="w-6 text-gray-400 h-8" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-2xl md:text-2xl mb-0 text-gray-200">{highlight}</div>
                    <div className="font-ui text-sm text-soft-white/70">
                      {projects[currentProject].highlightLabels[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-10">
              <div className="relative">
                <div
                  className={`transition-all duration-500 ${showDetailedMetrics ? "opacity-0 pointer-events-none absolute inset-0" : "opacity-100"}`}
                >
                  <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-purple-800/30 rounded-2xl p-5 border border-purple-500/20">
                    <h4 className="font-display text-xl font-bold text-soft-white mb-3">Project Overview</h4>
                    <p className="font-body font-light text-base text-soft-white/70 leading-relaxed mb-3">
                      This legacy placeholder describes approach and structure only — not verified
                      outcomes or public portfolio claims.
                    </p>
                    <button
                      onClick={() => setShowDetailedMetrics(true)}
                      className="inline-flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-ui font-medium text-sm"
                    >
                      View Detailed Breakdown
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ${showDetailedMetrics ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"}`}
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-xl font-bold text-soft-white">Detailed Project Breakdown</h4>
                      <button
                        onClick={() => setShowDetailedMetrics(false)}
                        className="text-soft-white/60 hover:text-soft-white transition-colors text-sm font-ui"
                      >
                        Show Summary
                      </button>
                    </div>

                    <div className="grid gap-6">
                      <div className="bg-charcoal-light/20 rounded-xl p-6 border border-charcoal-light/30 transform transition-all duration-300 hover:scale-[1.02]">
                        <h5 className="font-display text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                          <TrendingDown className="w-5 h-5" />
                          Challenge
                        </h5>
                        <p className="font-body font-light text-base text-soft-white/80 leading-relaxed">
                          {projects[currentProject].problem}
                        </p>
                      </div>

                      <div className="bg-charcoal-light/20 rounded-xl p-6 border border-charcoal-light/30 transform transition-all duration-300 hover:scale-[1.02]">
                        <h5 className="font-display text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                          <Plus className="w-5 h-5" />
                          Process
                        </h5>
                        <p className="font-body font-light text-base text-soft-white/80 leading-relaxed">
                          {projects[currentProject].process}
                        </p>
                      </div>

                      <div className="bg-charcoal-light/20 rounded-xl p-6 border border-charcoal-light/30 transform transition-all duration-300 hover:scale-[1.02]">
                        <h5 className="font-display text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          Outcome (qualitative)
                        </h5>
                        <p className="font-body font-light text-base text-soft-white/80 leading-relaxed">
                          {projects[currentProject].outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center gap-3 bg-teal text-charcoal px-10 py-5 rounded-full font-ui font-semibold text-lg hover:bg-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal/20 mt-12">
              View Case Study
              <ArrowRight size={20} />
            </button>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-teal/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-charcoal-light/40 rounded-3xl p-10 border border-charcoal-light/50 hover:border-teal/30 transition-all duration-500 backdrop-blur-sm">
                <Image
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <button
            onClick={() => setCurrentProject(currentProject > 0 ? currentProject - 1 : projects.length - 1)}
            className="p-4 bg-charcoal-light/50 rounded-full text-soft-white hover:text-teal hover:bg-teal/10 transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowRight size={24} className="rotate-180" />
          </button>
          <button
            onClick={() => setCurrentProject(currentProject < projects.length - 1 ? currentProject + 1 : 0)}
            className="p-4 bg-charcoal-light/50 rounded-full text-soft-white hover:text-teal hover:bg-teal/10 transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
