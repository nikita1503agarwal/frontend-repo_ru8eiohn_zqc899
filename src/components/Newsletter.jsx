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
    <section id="newsletter" className="relative py-20 bg-gradient-to-b from-[#0b1020] to-[#0b1020]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_80%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-100 to-fuchsia-200">Be the first to enter the keep</h3>
        <p className="mt-2 text-indigo-200/70">Join the list for the trailer drop, devlogs, and playtest invites.</p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@realm.com"
            className="w-full sm:w-96 rounded-xl bg-indigo-500/10 border border-indigo-500/30 px-4 py-3 text-indigo-100 placeholder:text-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-900/30 hover:shadow-fuchsia-900/50"
          >
            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined' : 'Join the Watch'}
          </button>
        </form>

        {status === 'error' && (
          <p className="mt-3 text-sm text-fuchsia-300">Please enter a valid email.</p>
        )}
        {status === 'success' && (
          <p className="mt-3 text-sm text-indigo-200/90">Welcome, oathkeeper. Watch your inbox.</p>
        )}
      </div>
    </section>
  )
}
