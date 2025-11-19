import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
