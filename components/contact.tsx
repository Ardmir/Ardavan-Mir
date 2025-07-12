"use client"

import { useState, useEffect } from "react"
import { Mail, Linkedin, Download } from "lucide-react"

export default function Contact() {
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

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-32 px-8 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-soft-white mb-8 leading-tight">
            Let's <span className="text-teal">Connect</span>
          </h2>

          <p className="font-body text-xl md:text-2xl text-soft-white/70 mb-20 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing design challenges, collaboration opportunities, or just connecting with
            fellow designers and product people.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <a
              href="mailto:ardavan.mir@example.com"
              className="group bg-charcoal-light/40 rounded-3xl p-10 border border-charcoal-light/50 hover:border-teal/30 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              <Mail
                className="text-teal mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                size={40}
              />
              <h3 className="font-heading text-xl font-semibold text-soft-white mb-4">Email</h3>
              <p className="font-body text-soft-white/70">ardavan.mir@example.com</p>
            </a>

            <a
              href="https://linkedin.com/in/ardavanmir"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-charcoal-light/40 rounded-3xl p-10 border border-charcoal-light/50 hover:border-teal/30 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              <Linkedin
                className="text-teal mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                size={40}
              />
              <h3 className="font-heading text-xl font-semibold text-soft-white mb-4">LinkedIn</h3>
              <p className="font-body text-soft-white/70">Connect with me</p>
            </a>

            <a
              href="/resume-ardavan-mir.pdf"
              download
              className="group bg-charcoal-light/40 rounded-3xl p-10 border border-charcoal-light/50 hover:border-teal/30 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              <Download
                className="text-teal mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                size={40}
              />
              <h3 className="font-heading text-xl font-semibold text-soft-white mb-4">Resume</h3>
              <p className="font-body text-soft-white/70">Download PDF</p>
            </a>
          </div>

          <div className="text-center space-y-6">
            <p className="font-ui text-soft-white/60 text-lg">Currently Senior Product Designer at Intuit</p>
            <p className="font-body text-soft-white/40">© 2024 Ardavan Mir. Crafted with care in San Francisco.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
