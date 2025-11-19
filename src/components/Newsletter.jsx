import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    setTimeout(() => setStatus('success'), 900)
  }

  return (
    <section id="newsletter" className="relative py-24 bg-gradient-to-b from-[#0b1020] to-[#0b1020]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_80%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-pixel text-fuchsia-200">ENTER THE KEEP</h3>
        <p className="mt-2 text-indigo-200/80 font-arcade">Be first to the trailer drop, devlogs, and playtests.</p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@realm.com"
            className="w-full sm:w-96 rounded-none pixel-border bg-[#120a2a]/70 border border-indigo-500/40 px-4 py-3 text-indigo-100 placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"
          />
          <button
            type="submit"
            className="rounded-none pixel-border bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-6 py-3 text-white font-arcade tracking-wider shadow-lg shadow-fuchsia-900/30 hover:shadow-fuchsia-900/50"
          >
            {status === 'loading' ? 'JOINING…' : status === 'success' ? 'BOUND' : 'JOIN THE WATCH'}
          </button>
        </form>

        {status === 'error' && (
          <p className="mt-3 text-sm text-fuchsia-300 font-arcade">Enter a true scrollmark.</p>
        )}
        {status === 'success' && (
          <p className="mt-3 text-sm text-indigo-200/90 font-arcade">Oath taken. Watch your inbox.</p>
        )}
      </div>
    </section>
  )
}
