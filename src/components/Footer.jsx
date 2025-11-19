import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#0b1020] border-t border-indigo-500/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between text-indigo-300/80 text-xs sm:text-sm">
        <p className="font-arcade">© {new Date().getFullYear()} KNIGHTBOUND</p>
        <div className="flex items-center gap-4 font-arcade">
          <a href="#" className="hover:text-fuchsia-300 transition">PRIVACY</a>
          <a href="#" className="hover:text-fuchsia-300 transition">CONTACT</a>
        </div>
      </div>
    </footer>
  )
}
