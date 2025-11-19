import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-10 bg-[#0b1020] border-t border-indigo-500/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between text-indigo-300/70 text-sm">
        <p>© {new Date().getFullYear()} KnightBound</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-fuchsia-300 transition">Privacy</a>
          <a href="#" className="hover:text-fuchsia-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
