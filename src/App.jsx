import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoStrip from './components/LogoStrip'
import FeaturesSection from './components/FeaturesSection'
import ProcessSection from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  const [mode, setMode] = useState('standard')

  return (
    <div className="min-h-screen w-full bg-[#F7F9FB] text-[#1c212b]">
      <Navbar mode={mode} setMode={setMode} />

      <main className="w-full">
        <section id="hero">
          <HeroSection mode={mode} />
        </section>

        <LogoStrip mode={mode} />

        <section id="features">
          <FeaturesSection mode={mode} />
        </section>

        <section id="process">
          <ProcessSection mode={mode} />
        </section>

        <TestimonialsSection mode={mode} />

        <section id="pricing">
          <PricingSection mode={mode} />
        </section>

        <section id="cta">
          <CtaSection mode={mode} />
        </section>
      </main>

      <footer id="footer">
        <Footer mode={mode} />
      </footer>
    </div>
  )
}

export default App
