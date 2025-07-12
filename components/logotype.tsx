"use client"

import { useState } from "react"

interface LogotypeProps {
  variant?: "default" | "light" | "dark" | "gradient"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function Logotype({ variant = "default", size = "md", className = "" }: LogotypeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: { text: "text-base", dot: "w-1.5 h-1.5" },
    md: { text: "text-xl", dot: "w-2 h-2" },
    lg: { text: "text-3xl", dot: "w-3 h-3" },
    xl: { text: "text-5xl", dot: "w-5 h-5" },
  }

  const getDotGradient = () => {
    switch (variant) {
      case "light":
        return "bg-gradient-to-br from-purple-500 to-blue-500"
      case "dark":
        return "bg-gradient-to-br from-purple-600 to-blue-600"
      case "gradient":
        return "bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600"
      default:
        return "bg-gradient-to-br from-purple-500 to-blue-500"
    }
  }

  const getTextColor = () => {
    switch (variant) {
      case "light":
        return "text-white"
      case "dark":
        return "text-charcoal"
      case "gradient":
        return "bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent"
      default:
        return "text-soft-white"
    }
  }

  return (
    <div
      className={`inline-flex items-center cursor-pointer transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="flex items-center gap-1">
          {/* First name - Bold weight */}
          <span
            className={`font-display font-bold ${sizeClasses[size].text} ${getTextColor()} transition-all duration-300 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            style={{
              letterSpacing: "-0.015em",
              fontFeatureSettings: '"ss01" on, "liga" on',
            }}
          >
            Ardavan
          </span>

          {/* Craftsmanship dot with purple-blue gradient */}
          <div className="relative flex items-center justify-center">
            <div
              className={`${sizeClasses[size].dot} ${getDotGradient()} rounded-full transition-all duration-500 ${
                isHovered ? "scale-125 shadow-lg shadow-purple-500/40" : "scale-100"
              }`}
            />
            {/* Pulse ring on hover */}
            {isHovered && (
              <div
                className={`absolute inset-0 ${sizeClasses[size].dot} bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full animate-ping`}
              />
            )}
          </div>

          {/* Last name - Medium weight for refined contrast */}
          <span
            className={`font-display font-medium ${sizeClasses[size].text} ${getTextColor()} transition-all duration-300 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            style={{
              letterSpacing: "-0.015em",
              fontFeatureSettings: '"ss01" on, "liga" on',
            }}
          >
            Mir
          </span>
        </div>

        {/* Underline accent */}
        <div
          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 ${
            isHovered ? "w-full opacity-60" : "w-0 opacity-0"
          }`}
        />
      </div>
    </div>
  )
}

// Standalone SVG version for print/export
export function LogotypeSVG({ width = 260, height = 60 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logotype-svg"
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#00D4AA" />
        </linearGradient>
        <radialGradient id="dotGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
      </defs>

      {/* First name - Bold weight */}
      <text
        x="10"
        y="40"
        fontFamily="Space Grotesk, system-ui, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill="url(#textGradient)"
        letterSpacing="-0.015em"
      >
        Ardavan
      </text>

      {/* Craftsmanship dot with purple-blue gradient */}
      <circle cx="140" cy="30" r="6" fill="url(#dotGradient)" />

      {/* Last name - Medium weight for refined contrast */}
      <text
        x="155"
        y="40"
        fontFamily="Space Grotesk, system-ui, sans-serif"
        fontSize="32"
        fontWeight="500"
        fill="url(#textGradient)"
        letterSpacing="-0.015em"
      >
        Mir
      </text>

      {/* Underline accent */}
      <rect x="10" y="48" width="200" height="2" fill="url(#dotGradient)" opacity="0.6" rx="1" />
    </svg>
  )
}

// Monogram version with dot accent
export function LogotypeMonogram({ variant = "default", size = "md", className = "" }: LogotypeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: { text: "text-base", dot: "w-1 h-1" },
    md: { text: "text-xl", dot: "w-1.5 h-1.5" },
    lg: { text: "text-3xl", dot: "w-2.5 h-2.5" },
    xl: { text: "text-5xl", dot: "w-3.5 h-3.5" },
  }

  const getDotGradient = () => {
    switch (variant) {
      case "light":
        return "bg-gradient-to-br from-purple-500 to-blue-500"
      case "dark":
        return "bg-gradient-to-br from-purple-600 to-blue-600"
      case "gradient":
        return "bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600"
      default:
        return "bg-gradient-to-br from-purple-500 to-blue-500"
    }
  }

  const getTextColor = () => {
    switch (variant) {
      case "light":
        return "text-white"
      case "dark":
        return "text-charcoal"
      case "gradient":
        return "bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent"
      default:
        return "text-soft-white"
    }
  }

  return (
    <div
      className={`inline-flex items-center justify-center cursor-pointer transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="flex items-center gap-1.5">
          {/* A - Bold weight */}
          <span
            className={`font-display font-bold ${sizeClasses[size].text} ${getTextColor()} transition-all duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            style={{
              letterSpacing: "-0.02em",
              fontFeatureSettings: '"ss01" on',
            }}
          >
            A
          </span>

          <div
            className={`${sizeClasses[size].dot} ${getDotGradient()} rounded-full transition-all duration-300 ${
              isHovered ? "scale-125" : "scale-100"
            }`}
          />

          {/* M - Medium weight for contrast */}
          <span
            className={`font-display font-medium ${sizeClasses[size].text} ${getTextColor()} transition-all duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            style={{
              letterSpacing: "-0.02em",
              fontFeatureSettings: '"ss01" on',
            }}
          >
            M
          </span>
        </div>

        <div
          className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
            isHovered ? "opacity-60" : "opacity-0"
          }`}
        />
      </div>
    </div>
  )
}
