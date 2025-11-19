import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden bg-[#0b1020] kb-dungeon-bricks">
      {/* Spline canvas */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette + color atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/90 via-[#0b1020]/30 to-[#120a2a]/90" />
        <div className="absolute inset-0 mix-blend-overlay kb-scanlines" />
        <div className="absolute inset-0 kb-noise" />
        <div className="absolute -inset-x-20 -inset-y-10 opacity-[0.18] bg-[radial-gradient(60%_60%_at_50%_100%,#7c3aed_0%,transparent_60%)]" />
      </div>

      {/* HUD corner pixels */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-6 left-6 h-3 w-3 bg-fuchsia-500 shadow-[0_0_24px_#ec489988]" />
        <div className="absolute top-6 right-6 h-3 w-3 bg-indigo-500 shadow-[0_0_24px_#6366f188]" />
        <div className="absolute bottom-6 left-6 h-3 w-3 bg-indigo-400 shadow-[0_0_24px_#818cf888]" />
        <div className="absolute bottom-6 right-6 h-3 w-3 bg-fuchsia-400 shadow-[0_0_24px_#f0abfc88]" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center torch-glow">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
          <div className="inline-flex items-center gap-2 rounded-none pixel-border px-3 py-1 bg-[#120a2a]/70">
            <span className="h-2 w-2 bg-fuchsia-400 animate-pulse" />
            <span className="text-[10px] tracking-widest uppercase font-arcade text-fuchsia-200">incoming prophecy</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-pixel leading-tight text-transparent bg-clip-text bg-gradient-to-b from-indigo-200 via-violet-200 to-fuchsia-300 drop-shadow-[0_8px_32px_rgba(124,58,237,0.35)]">
            KNIGHTBOUND
          </h1>

          <p className="mt-4 max-w-2xl text-indigo-200/85 text-base sm:text-xl leading-relaxed font-arcade">
            A dungeon-forged dark fantasy odyssey in living pixel steel. Moonlit keeps. Hexbound steel. Fate won’t forgive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#trailer"
              className="group inline-flex items-center gap-3 rounded-none pixel-border bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-5 py-3 text-white font-arcade tracking-wider hover:scale-[1.02] transition-transform"
            >
              WATCH TRAILER
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-3 rounded-none pixel-border border border-indigo-500/50 bg-indigo-500/10 px-5 py-3 text-indigo-100 font-arcade tracking-wider hover:bg-indigo-500/20 transition"
            >
              JOIN THE WATCH
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
