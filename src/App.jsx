import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const fadeSections = document.querySelectorAll('[data-fade-section]')

    if (!fadeSections.length) return

    if (mode !== 'premium') {
      fadeSections.forEach((section) => {
        section.classList.remove('fade-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-visible')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    fadeSections.forEach((section) => {
      section.classList.remove('fade-visible')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [mode])

  return (
    <div
      className={`min-h-screen w-full bg-[#F7F9FB] text-[#1c212b] ${
        mode === 'premium' ? 'premium-page-enter' : ''
      }`}
    >
      <Navbar mode={mode} setMode={setMode} />

      <main className="w-full">
        <section
          id="hero"
          data-fade-section={mode === 'premium' ? 'true' : 'false'}
        >
          <HeroSection mode={mode} />
        </section>

        <section data-fade-section={mode === 'premium' ? 'true' : 'false'}>
          <LogoStrip mode={mode} />
        </section>

        <section
          id="features"
          data-fade-section={mode === 'premium' ? 'true' : 'false'}
        >
          <FeaturesSection mode={mode} />
        </section>

        <section
          id="process"
          data-fade-section={mode === 'premium' ? 'true' : 'false'}
        >
          <ProcessSection mode={mode} />
        </section>

        <section data-fade-section={mode === 'premium' ? 'true' : 'false'}>
          <TestimonialsSection mode={mode} />
        </section>

        <section
          id="pricing"
          data-fade-section={mode === 'premium' ? 'true' : 'false'}
        >
          <PricingSection mode={mode} />
        </section>

        <section
          id="cta"
          data-fade-section={mode === 'premium' ? 'true' : 'false'}
        >
          <CtaSection mode={mode} />
        </section>
      </main>

      <footer
        id="footer"
        data-fade-section={mode === 'premium' ? 'true' : 'false'}
      >
        <Footer mode={mode} />
      </footer>
    </div>
  )
}

export default App