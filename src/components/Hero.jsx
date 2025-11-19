import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-[#0b1020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/80 via-[#0b1020]/30 to-[#120a2a]/80" />
        <div className="absolute -inset-x-20 -inset-y-10 opacity-[0.15] bg-[radial-gradient(60%_60%_at_50%_100%,#7c3aed_0%,transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay bg-[linear-gradient(0deg,transparent_0,rgba(255,255,255,0.03)_50%,transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            <span className="text-xs tracking-wider uppercase">Coming soon</span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-indigo-200 via-violet-200 to-fuchsia-300 drop-shadow-[0_8px_32px_rgba(124,58,237,0.35)]">
            KnightBound
          </h1>

          <p className="mt-4 max-w-2xl text-indigo-200/80 text-lg sm:text-xl leading-relaxed">
            A dark fantasy pixel-art odyssey through cursed kingdoms, moonlit keeps, and ancient steel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#trailer"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-900/30 hover:shadow-fuchsia-900/50 transition-transform will-change-transform hover:scale-[1.02]"
            >
              <span className="text-sm sm:text-base font-semibold tracking-wide">Watch Trailer</span>
              <span className="h-2 w-2 rounded-full bg-white/80 group-hover:bg-white transition" />
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-3 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-6 py-3 text-indigo-100 hover:bg-indigo-500/20 transition"
            >
              <span className="text-sm sm:text-base font-semibold tracking-wide">Join the Newsletter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
