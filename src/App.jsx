import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white relative">
      {/* global ambience overlays */}
      <div className="kb-noise" />
      <div className="kb-scanlines" />

      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
