import React from 'react'

const features = [
  {
    title: 'CURSED REALMS',
    desc: 'Moon-drenched ruins and cathedral vaults, tiled like a relic map. Each step deeper, the pixels breathe.',
  },
  {
    title: 'STEEL & SORCERY',
    desc: 'Parry-perfect melee with forbidden rites. Socket runes. Break vows. Let the blade remember.',
  },
  {
    title: 'BOUND BY FATE',
    desc: 'Swear oaths with specters. Twist prophecy threads. Defy the eclipse that crowns the keep.',
  },
]

export default function Features() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#120a2a] via-[#0b1020] to-[#0b1020]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_20%_0%,rgba(124,58,237,0.25),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-10">
          <div className="kb-divider mb-6" />
          <h2 className="text-2xl sm:text-4xl font-pixel text-fuchsia-200">WHAT AWAITS</h2>
          <p className="mt-2 text-indigo-200/75 font-arcade">A glimpse of the realm you will swear your blade to.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden p-6 rounded-none pixel-border bg-[#0b1020]/60 hover:bg-[#120a2a]/70 transition">
              <div className="absolute -top-20 -right-20 h-40 w-40 bg-fuchsia-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-lg font-pixel text-indigo-100 tracking-wider">{f.title}</h3>
              <p className="mt-3 text-indigo-200/75 leading-relaxed font-arcade">{f.desc}</p>
              <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-fuchsia-500/80 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
