import React from 'react'

const features = [
  {
    title: 'Cursed Realms',
    desc: 'Explore moon-drenched ruins, haunted forests, and forgotten cathedrals in a handcrafted pixel world.',
  },
  {
    title: 'Steel & Sorcery',
    desc: 'Tight melee combat meets forbidden rites. Imbue your blade with astral hexes and knightly vows.',
  },
  {
    title: 'Bound by Fate',
    desc: 'Forge pacts with spectral allies, unravel the oaths that bind your lineage, and defy the eclipse.',
  },
]

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#120a2a] via-[#0b1020] to-[#0b1020]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_20%_0%,rgba(124,58,237,0.25),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-100 to-fuchsia-200">What awaits</h2>
          <p className="mt-2 text-indigo-200/70">A glimpse of the world you will swear your blade to.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 hover:bg-indigo-500/10 transition relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-lg font-semibold text-indigo-100">{f.title}</h3>
              <p className="mt-2 text-indigo-200/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
