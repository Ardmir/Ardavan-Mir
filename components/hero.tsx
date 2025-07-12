"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [tooltipPlacement, setTooltipPlacement] = useState<"top" | "bottom">("top")
  const [hasVisited, setHasVisited] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const nameRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Full text content for typing animation
  const fullText =
    "Senior Product Designer at Intuit, dedicated to transforming complex challenges into moments of clarity, crafting solutions that deliver meaningful value and elevate user experiences."

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("hero-visited")
    if (visited) {
      setHasVisited(true)
      setTypingComplete(true)
      setCurrentText(fullText)
      setShowCursor(false)
    } else {
      localStorage.setItem("hero-visited", "true")
    }
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!hasVisited && isVisible) {
      // Start typing animation after a brief delay
      const startDelay = setTimeout(() => {
        let index = 0
        const typingInterval = setInterval(() => {
          if (index < fullText.length) {
            setCurrentText(fullText.slice(0, index + 1))
            index++
          } else {
            clearInterval(typingInterval)
            setTypingComplete(true)
            // Hide cursor after typing is complete
            setTimeout(() => setShowCursor(false), 1000)
          }
        }, 30) // Typing speed: 30ms per character

        return () => clearInterval(typingInterval)
      }, 800) // Delay before starting typing

      return () => clearTimeout(startDelay)
    }
  }, [hasVisited, isVisible, fullText])

  // Cursor blinking effect
  useEffect(() => {
    if (!typingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
      return () => clearInterval(cursorInterval)
    }
  }, [typingComplete])

  const calculateTooltipPosition = () => {
    if (!nameRef.current || !tooltipRef.current) return

    const nameRect = nameRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const scrollY = window.scrollY
    const margin = 8
    const edgeMargin = 16

    const nameCenterX = nameRect.left + nameRect.width / 2
    let x = nameCenterX - tooltipRect.width / 2

    const leftBoundary = edgeMargin
    const rightBoundary = viewportWidth - tooltipRect.width - edgeMargin

    if (x < leftBoundary) {
      x = leftBoundary
    } else if (x > rightBoundary) {
      x = rightBoundary
    }

    const spaceAbove = nameRect.top
    const spaceBelow = viewportHeight - nameRect.bottom
    const tooltipHeight = tooltipRect.height

    let y: number
    let placement: "top" | "bottom"

    const canFitAbove = spaceAbove >= tooltipHeight + margin
    const canFitBelow = spaceBelow >= tooltipHeight + margin

    if (canFitAbove && canFitBelow) {
      if (spaceAbove >= spaceBelow) {
        placement = "top"
        y = nameRect.top + scrollY - tooltipHeight - margin
      } else {
        placement = "bottom"
        y = nameRect.bottom + scrollY + margin
      }
    } else if (canFitAbove) {
      placement = "top"
      y = nameRect.top + scrollY - tooltipHeight - margin
    } else if (canFitBelow) {
      placement = "bottom"
      y = nameRect.bottom + scrollY + margin
    } else {
      if (spaceAbove >= spaceBelow) {
        placement = "top"
        y = Math.max(scrollY + edgeMargin, nameRect.top + scrollY - tooltipHeight - margin)
      } else {
        placement = "bottom"
        y = Math.min(scrollY + viewportHeight - tooltipHeight - edgeMargin, nameRect.bottom + scrollY + margin)
      }
    }

    setTooltipPosition({ x, y })
    setTooltipPlacement(placement)
  }

  const handleMouseEnter = () => {
    setShowTooltip(true)
    setTimeout(calculateTooltipPosition, 10)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  useEffect(() => {
    if (showTooltip) {
      const handleScroll = () => calculateTooltipPosition()
      const handleResize = () => calculateTooltipPosition()

      window.addEventListener("scroll", handleScroll, { passive: true })
      window.addEventListener("resize", handleResize, { passive: true })

      return () => {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [showTooltip])

  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getArrowPosition = () => {
    if (!nameRef.current) return { left: "50%" }

    const nameRect = nameRef.current.getBoundingClientRect()
    const nameCenterX = nameRect.left + nameRect.width / 2
    const arrowX = nameCenterX - tooltipPosition.x

    const minArrowX = 24
    const maxArrowX = 320 - 24
    const constrainedArrowX = Math.max(minArrowX, Math.min(maxArrowX, arrowX))

    return { left: `${constrainedArrowX}px` }
  }

  const renderHighlightedText = (text: string) => {
    const highlights = [
      { word: "Intuit", gradient: "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" },
      {
        word: "complex challenges",
        gradient: "bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent",
      },
      {
        word: "meaningful value",
        gradient: "bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent",
      },
    ]

    let highlightedText = text
    highlights.forEach(({ word, gradient }) => {
      const regex = new RegExp(`(${word})`, "gi")
      highlightedText = highlightedText.replace(regex, `<span class="font-accent ${gradient} font-medium">$1</span>`)
    })

    return highlightedText
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 lg:px-12 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className={`transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-soft-white mb-8 leading-[0.9] tracking-tight">
            Hi, I'm{" "}
            <span
              ref={nameRef}
              className="text-teal relative inline-block cursor-pointer transition-all duration-300 hover:scale-105 hover:text-teal/90"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Ardavan
            </span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="font-body font-light text-xl md:text-2xl lg:text-3xl text-soft-white/90 leading-relaxed min-h-[120px] md:min-h-[140px] lg:min-h-[160px]">
              {hasVisited ? (
                <span dangerouslySetInnerHTML={{ __html: renderHighlightedText(fullText) }} />
              ) : (
                <>
                  <span dangerouslySetInnerHTML={{ __html: renderHighlightedText(currentText) }} />
                  {showCursor && <span className="inline-block w-0.5 h-6 md:h-7 lg:h-8 bg-teal ml-1 animate-pulse" />}
                </>
              )}
            </p>
          </div>

          <div
            className={`transition-all duration-500 ${
              hasVisited || typingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-3 bg-teal text-charcoal px-10 py-5 rounded-full font-ui font-semibold text-lg hover:bg-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal/20"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamically positioned tooltip */}
      {showTooltip && (
        <div
          ref={tooltipRef}
          className="fixed z-50 transition-all duration-500 ease-out"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: showTooltip ? "scale(1) rotate(0deg)" : "scale(0.95) rotate(1deg)",
            opacity: showTooltip ? 1 : 0,
          }}
        >
          <div className="bg-gradient-to-br from-white via-white to-gray-50 backdrop-blur-lg rounded-3xl px-6 py-4 shadow-2xl border border-white/30 w-80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-teal-500/5 animate-pulse"></div>

            <div
              className="absolute w-6 h-6 bg-gradient-to-br from-white to-gray-50 rotate-45 border border-white/30 shadow-lg"
              style={{
                ...getArrowPosition(),
                [tooltipPlacement === "top" ? "bottom" : "top"]: "-12px",
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />

            <div className="relative z-10">
              <p className="font-body font-normal text-base text-gray-800 leading-tight text-left">
                Dedicated to the craft of transforming{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  customer challenges
                </span>{" "}
                into elevated moments that simplify{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  complexity with clarity
                </span>{" "}
                and deliver{" "}
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  meaningful value
                </span>
                .
              </p>

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-30"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
          </div>
        </div>
      )}
    </section>
  )
}
