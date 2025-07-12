"use client"

import Logotype, { LogotypeSVG, LogotypeMonogram } from "./logotype"

export default function LogotypeShowcase() {
  return (
    <div className="py-20 px-8 bg-charcoal-light/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl text-soft-white mb-12 text-center">Refined Typography System</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Primary Logotype Versions */}
          <div className="space-y-8">
            <h3 className="font-heading text-xl text-soft-white mb-6">Primary Logotype</h3>

            <div className="bg-charcoal p-8 rounded-2xl">
              <p className="text-soft-white/60 text-sm mb-4">Default - Bold 'Ardavan' + Medium 'Mir'</p>
              <Logotype variant="default" size="lg" />
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <p className="text-gray-600 text-sm mb-4">Dark Background - Weight Contrast</p>
              <Logotype variant="dark" size="lg" />
            </div>

            <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-2xl">
              <p className="text-white/60 text-sm mb-4">Light - Refined Typography</p>
              <Logotype variant="light" size="lg" />
            </div>

            <div className="bg-charcoal p-8 rounded-2xl">
              <p className="text-soft-white/60 text-sm mb-4">Gradient - Enhanced Contrast</p>
              <Logotype variant="gradient" size="lg" />
            </div>
          </div>

          {/* Monogram & Export Versions */}
          <div className="space-y-8">
            <h3 className="font-heading text-xl text-soft-white mb-6">Monogram & Export</h3>

            <div className="bg-charcoal p-8 rounded-2xl">
              <p className="text-soft-white/60 text-sm mb-4">Monogram - Bold 'A' + Medium 'M'</p>
              <LogotypeMonogram variant="default" size="lg" />
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <p className="text-gray-600 text-sm mb-4">Monogram - Weight Variation</p>
              <LogotypeMonogram variant="dark" size="lg" />
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <p className="text-gray-600 text-sm mb-4">SVG - Print Ready with Weight Contrast</p>
              <LogotypeSVG width={260} height={60} />
            </div>

            {/* Size Variations */}
            <div className="bg-charcoal-light/40 p-8 rounded-2xl space-y-6">
              <p className="text-soft-white/60 text-sm">Typography Hierarchy</p>
              <div className="space-y-4">
                <Logotype variant="default" size="sm" />
                <Logotype variant="default" size="md" />
                <Logotype variant="default" size="lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="mt-16 bg-charcoal-light/30 rounded-3xl p-8">
          <h3 className="font-heading text-2xl text-soft-white mb-6">Typography Refinement Principles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading text-lg text-purple-400 mb-3">Weight Contrast</h4>
              <p className="font-body text-soft-white/70 text-sm leading-relaxed">
                'Ardavan' uses bold weight (font-bold/700) while 'Mir' uses medium weight (font-medium/500), creating
                sophisticated visual hierarchy that enhances readability and brand distinction.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-blue-400 mb-3">Visual Prominence</h4>
              <p className="font-body text-soft-white/70 text-sm leading-relaxed">
                The lighter weight of 'Mir' creates elegant contrast while maintaining harmony. The gradient dot serves
                as a visual bridge, balancing the typographic weights with colorful sophistication.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-purple-500 mb-3">Crafted Balance</h4>
              <p className="font-body text-soft-white/70 text-sm leading-relaxed">
                The weight variation demonstrates attention to typographic detail, creating a more dynamic and memorable
                logotype while preserving the overall cohesion and professional appearance.
              </p>
            </div>
          </div>
        </div>

        {/* Typography Specifications */}
        <div className="mt-12 bg-charcoal-light/20 rounded-3xl p-8">
          <h3 className="font-heading text-xl text-soft-white mb-6">Typography Specifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading text-base text-purple-400 mb-3">Font Weight System</h4>
              <ul className="font-body text-soft-white/70 text-sm space-y-2">
                <li>
                  • <strong>'Ardavan':</strong> Bold (700) - Primary emphasis
                </li>
                <li>
                  • <strong>'Mir':</strong> Medium (500) - Refined contrast
                </li>
                <li>
                  • <strong>Monogram 'A':</strong> Bold (700) - Strong presence
                </li>
                <li>
                  • <strong>Monogram 'M':</strong> Medium (500) - Balanced finish
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-base text-blue-400 mb-3">Design Rationale</h4>
              <ul className="font-body text-soft-white/70 text-sm space-y-2">
                <li>• Creates visual hierarchy and interest</li>
                <li>• Maintains readability across all sizes</li>
                <li>• Enhances brand memorability</li>
                <li>• Preserves professional sophistication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Weight Comparison */}
        <div className="mt-12 bg-charcoal-light/10 rounded-3xl p-8">
          <h3 className="font-heading text-xl text-soft-white mb-6">Weight Comparison</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-charcoal-light/40 p-6 rounded-2xl">
              <p className="text-soft-white/60 text-sm mb-4">Before - Uniform Bold Weight</p>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-3xl text-soft-white">Ardavan</span>
                <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
                <span className="font-display font-bold text-3xl text-soft-white">Mir</span>
              </div>
            </div>
            <div className="bg-charcoal-light/40 p-6 rounded-2xl">
              <p className="text-soft-white/60 text-sm mb-4">After - Refined Weight Contrast</p>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-3xl text-soft-white">Ardavan</span>
                <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
                <span className="font-display font-medium text-3xl text-soft-white">Mir</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
