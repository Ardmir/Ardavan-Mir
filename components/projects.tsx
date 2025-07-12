"use client"

import { useState, useEffect } from "react"
import { ArrowRight, TrendingDown, TrendingUp, Plus } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "TurboTax Simplification",
    tagline: "Reduced tax filing complexity by 40% for 50M+ users",
    problem: "Users were abandoning tax filing due to overwhelming complexity and unclear guidance.",
    process:
      "Conducted extensive user research, redesigned information architecture, and implemented progressive disclosure patterns.",
    outcome: "40% reduction in user drop-off rates, 25% faster completion times, and 95% user satisfaction score.",
    role: "Lead Product Designer",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
    metrics: ["40%", "25%", "95%"],
    metricLabels: ["Drop-off Reduction", "Faster Completion", "Satisfaction Score"],
  },
  {
    id: 2,
    title: "QuickBooks Mobile Redesign",
    tagline: "Empowered 2M+ small business owners with mobile-first financial management",
    problem:
      "Small business owners needed quick access to financial data on-the-go but existing mobile experience was cluttered.",
    process:
      "Mobile-first design approach with focus on key financial metrics, streamlined navigation, and offline capabilities.",
    outcome: "150% increase in mobile engagement, 60% faster task completion, featured in App Store.",
    role: "Senior Product Designer",
    image: "/placeholder.svg?height=600&width=800",
    year: "2022",
    metrics: ["150%", "60%", "#1"],
    metricLabels: ["Engagement Increase", "Faster Tasks", "App Store Feature"],
  },
  {
    id: 3,
    title: "Mint Budget Intelligence",
    tagline: "AI-powered insights that helped users save $500M+ collectively",
    problem: "Users struggled to understand spending patterns and make informed financial decisions.",
    process:
      "Designed AI-driven insights dashboard with personalized recommendations and predictive analytics visualization.",
    outcome: "Users saved average of $200/month, 80% adoption rate for AI recommendations, 4.8 App Store rating.",
    role: "Product Design Lead",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
    metrics: ["$200", "80%", "4.8★"],
    metricLabels: ["Monthly Savings", "AI Adoption", "App Rating"],
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
              <span
                dangerouslySetInnerHTML={{
                  __html: projects[currentProject].tagline
                    .replace(
                      /([\d\w]+\+?\s*(?:users|owners|collectively))/gi,
                      '<span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">$1</span>',
                    )
                    .replace(
                      /(reduced|empowered|AI-powered)/gi,
                      '<span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">$1</span>',
                    ),
                }}
              />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-charcoal-light/30 py-6 border border-zinc-700 mb-12 rounded border-l-0 border-r-0">
              {projects[currentProject].metrics.map((metric, index) => (
                <div key={index} className="flex gap-4 flex-row leading-7 font-normal text-left items-stretch text-gray-400">
                  <div className="flex-shrink-0">
                    {index === 0 && <TrendingDown className="w-6 text-gray-400 h-8" />}
                    {index === 1 && <TrendingUp className="text-gray-400 w-6 h-8" />}
                    {index === 2 && <Plus className="w-6 text-gray-400 h-8" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-2xl md:text-2xl mb-0 text-gray-200">{metric}</div>
                    <div className="font-ui text-sm text-soft-white/70">
                      {projects[currentProject].metricLabels[index]}
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
                      This project focused on {projects[currentProject].title.toLowerCase()}, addressing key user
                      challenges through strategic design improvements and resulting in significant measurable impact.
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
                          Impact
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
