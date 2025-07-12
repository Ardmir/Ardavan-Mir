"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logotype from "./logotype"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-charcoal-light/10 border-gray-600">
      <div className="max-w-8xl mx-auto lg:px-12 px-6 py-[0] border-2 border-t-0 border-l-0 border-r-0 border-none border-transparent">
        <div className="flex items-center h-20 justify-between">
          <button onClick={() => scrollToSection("home")}>
            <Logotype variant="default" size="md" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-ui text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg group ${
                  activeSection === item.id
                    ? "text-teal bg-teal/10"
                    : "text-soft-white hover:text-teal hover:bg-soft-white/5"
                }`}
              >
                {item.label}

                {/* Hover effect - subtle glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-teal-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-teal-500/10 group-hover:to-blue-500/5 transition-all duration-300" />

                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-soft-white hover:text-teal transition-all duration-300 p-2 rounded-lg hover:bg-soft-white/5"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-charcoal-light/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 font-ui text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === item.id
                    ? "text-teal bg-teal/10"
                    : "text-soft-white hover:text-teal hover:bg-soft-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  {activeSection === item.id && <div className="w-2 h-2 bg-teal rounded-full" />}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
