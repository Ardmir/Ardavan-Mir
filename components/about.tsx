"use client"

import { useState, useEffect } from "react"
import { Award, Users, Lightbulb, Heart } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Award,
      title: "8+ Years Experience",
      description: "Leading product design at scale for fintech and consumer products",
      metric: "8+",
    },
    {
      icon: Users,
      title: "50M+ Users Impacted",
      description: "Designing solutions that reach millions of users worldwide",
      metric: "50M+",
    },
    {
      icon: Lightbulb,
      title: "Design Systems Expert",
      description: "Building scalable design systems and design operations",
      metric: "∞",
    },
    {
      icon: Heart,
      title: "Human-Centered Approach",
      description: "Passionate about solving real problems for real people",
      metric: "♥",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-full mx-auto px-0">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-soft-white leading-tight mb-4 sm:mb-6">
            About <span className="text-teal">Me</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-soft-white/70 max-w-3xl mx-auto px-4">
            Discover the different facets of my journey as a designer, creator, and human being.
          </p>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative">
          <div
            className="flex overflow-x-auto pb-6 sm:pb-8 snap-x snap-mandatory gap-x-5 flex-row pt-5 ml-4 items-stretch justify-stretch"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Start spacing to ensure first card positioning */}
            <div className="flex-none w-8"></div>

            {/* Professional Experience Card Wrapper */}
            <div className="ml-8">
              {/* Professional Experience Card */}
              <div className="flex-none w-80 sm:w-96 lg:w-[420px] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-indigo-600/40 animate-gradient-x rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-purple-500/20 backdrop-blur-sm snap-start group hover:scale-[1.02] transition-all duration-500 ml-8">
                <div className="h-full flex flex-col">
                  <div className="mb-4 sm:mb-6 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">💼</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-soft-white mb-2 sm:mb-3">
                      Professional Experience
                    </h3>
                  </div>
                  <div className="flex-1 space-y-3 sm:space-y-4 overflow-hidden">
                    <p className="font-body text-sm sm:text-base text-soft-white/80 leading-relaxed">
                      Over 8 years of transforming complex financial challenges into intuitive experiences at Intuit,
                      touching the lives of 50M+ users worldwide.
                    </p>
                    <p className="font-body text-xs sm:text-sm text-soft-white/70 leading-relaxed">
                      My approach combines rigorous user research with creative problem-solving, always keeping human
                      experience at the center of every design decision.
                    </p>
                    <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 mt-auto flex-shrink-0">
                      <div className="text-teal font-ui text-xs sm:text-sm font-medium">Impact Metrics</div>
                      <div className="text-soft-white font-display text-sm sm:text-lg">
                        50M+ Users • 8+ Years • 40% Efficiency Gains
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Principles Card */}
            <div className="flex-none w-80 sm:w-96 lg:w-[420px] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] bg-gradient-to-br from-emerald-400/40 via-teal-400/40 to-cyan-500/40 animate-gradient-x rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-500/20 backdrop-blur-sm snap-start group hover:scale-[1.02] transition-all duration-500">
              <div className="h-full flex flex-col">
                <div className="mb-4 sm:mb-6 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">⭐</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-soft-white mb-2 sm:mb-3">
                    Core Principles
                  </h3>
                </div>
                <div className="flex-1 space-y-4 sm:space-y-6 overflow-hidden">
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-heading text-sm sm:text-lg font-semibold text-emerald-400">
                      Human-Centered Design
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-soft-white/70">
                      Every solution starts with understanding real human needs and pain points.
                    </p>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-heading text-sm sm:text-lg font-semibold text-teal-400">
                      Simplicity in Complexity
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-soft-white/70">
                      Making the complex feel effortless through thoughtful design.
                    </p>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-heading text-sm sm:text-lg font-semibold text-cyan-400">Continuous Learning</h4>
                    <p className="font-body text-xs sm:text-sm text-soft-white/70">
                      Embracing feedback and iteration as paths to better solutions.
                    </p>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-heading text-sm sm:text-lg font-semibold text-emerald-300">
                      Impact Over Output
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-soft-white/70">
                      Measuring success by meaningful outcomes, not just deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Card */}
            <div className="flex-none w-80 sm:w-96 lg:w-[420px] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] bg-gradient-to-br from-orange-400/40 via-red-400/40 to-pink-500/40 animate-gradient-x rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-orange-500/20 backdrop-blur-sm snap-start group hover:scale-[1.02] transition-all duration-500">
              <div className="h-full flex flex-col">
                <div className="mb-4 sm:mb-6 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">✍️</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-soft-white mb-2 sm:mb-3">
                    Writing & Insights
                  </h3>
                </div>
                <div className="flex-1 space-y-3 sm:space-y-4 overflow-hidden">
                  <p className="font-body text-sm sm:text-base text-soft-white/80 leading-relaxed mb-4 sm:mb-6">
                    Sharing thoughts on design, fintech innovation, and the future of user experience.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href="#"
                      className="block bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300"
                    >
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-orange-400 mb-1 sm:mb-2">
                        The Future of Fintech Design
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-soft-white/70">
                        Exploring how AI and machine learning are reshaping financial experiences.
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300"
                    >
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-red-400 mb-1 sm:mb-2">
                        Design Systems at Scale
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-soft-white/70">
                        Building consistent experiences across multiple product lines.
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300"
                    >
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-pink-400 mb-1 sm:mb-2">
                        User Research in Practice
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-soft-white/70">
                        Methods and insights from real-world research projects.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* My Life Card */}
            <div className="flex-none w-80 sm:w-96 lg:w-[420px] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] bg-gradient-to-br from-violet-400/40 via-purple-400/40 to-fuchsia-500/40 animate-gradient-x rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20 backdrop-blur-sm snap-start group hover:scale-[1.02] transition-all duration-500">
              <div className="h-full flex flex-col">
                <div className="mb-4 sm:mb-6 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🌟</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-soft-white mb-2 sm:mb-3">My Life</h3>
                </div>
                <div className="flex-1 space-y-3 sm:space-y-4 overflow-hidden">
                  <p className="font-body text-sm sm:text-base text-soft-white/80 leading-relaxed">
                    Beyond design, I find joy in creating with my hands and spending precious moments with my daughter.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-violet-400 mb-1 sm:mb-2">
                        Crafts & Making
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-soft-white/70">
                        Woodworking, pottery, and building things that bring ideas to life.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-purple-400 mb-1 sm:mb-2">
                        Family Time
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-soft-white/70">
                        Adventures with my daughter, from park visits to creative projects together.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-fuchsia-400 mb-1 sm:mb-2">
                        Photography
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-soft-white/70">
                        Capturing moments and exploring San Francisco through different lenses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Projects Card */}
            <div className="flex-none w-80 sm:w-96 lg:w-[420px] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] bg-gradient-to-br from-blue-400/40 via-indigo-400/40 to-purple-500/40 animate-gradient-x rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-500/20 backdrop-blur-sm snap-start group hover:scale-[1.02] transition-all duration-500">
              <div className="h-full flex flex-col">
                <div className="mb-4 sm:mb-6 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🚀</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-soft-white mb-2 sm:mb-3">
                    Side Projects
                  </h3>
                </div>
                <div className="flex-1 space-y-3 sm:space-y-4 overflow-hidden">
                  <p className="font-body text-sm sm:text-base text-soft-white/80 leading-relaxed mb-3 sm:mb-4">
                    Experimental projects where I explore new ideas and push creative boundaries.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <a
                      href="#"
                      className="block bg-white/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <h4 className="font-heading text-xs sm:text-sm font-semibold text-blue-400 mb-1">
                        DesignKit Pro
                      </h4>
                      <p className="font-body text-xs text-soft-white/70">Component library for rapid prototyping</p>
                    </a>
                    <a
                      href="#"
                      className="block bg-white/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <h4 className="font-heading text-xs sm:text-sm font-semibold text-indigo-400 mb-1">
                        Budget Buddy
                      </h4>
                      <p className="font-body text-xs text-soft-white/70">
                        Personal finance app for young professionals
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block bg-white/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <h4 className="font-heading text-xs sm:text-sm font-semibold text-purple-400 mb-1">
                        Craft Journal
                      </h4>
                      <p className="font-body text-xs text-soft-white/70">Digital notebook for makers and creators</p>
                    </a>
                    <a
                      href="#"
                      className="block bg-white/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <h4 className="font-heading text-xs sm:text-sm font-semibold text-blue-300 mb-1">
                        Design Mentorship
                      </h4>
                      <p className="font-body text-xs text-soft-white/70">
                        Platform connecting junior designers with mentors
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* End spacing to ensure last card can scroll past container edge */}
            <div className="flex-none w-8"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            <div className="w-2 h-2 bg-soft-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-soft-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-soft-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-soft-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-soft-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
