import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Product', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#footer' },
]

export default function Navbar({ mode, setMode }) {
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScrollSpy = () => {
      const navbar = document.querySelector('[data-navbar]')
      const navbarHeight = navbar?.offsetHeight || 80
      const scrollPosition = window.scrollY + navbarHeight + 120

      let currentSection = '#hero'
      const trackedSections = [...navItems, { label: 'Book Demo', href: '#cta' }]

      for (const item of trackedSections) {
        const section = document.querySelector(item.href)
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionBottom = sectionTop + sectionHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item.href
        }
      }

      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

      if (pageBottom) currentSection = '#footer'
      setActive(currentSection)
    }

    const handleResize = () => {
      handleScrollSpy()
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    handleScrollSpy()
    window.addEventListener('scroll', handleScrollSpy)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScrollSpy)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleClick = (e, href) => {
    e.preventDefault()

    const target = document.querySelector(href)
    if (!target) return

    const navbar = document.querySelector('[data-navbar]')
    const offset = navbar?.offsetHeight || 80

    const top = target.getBoundingClientRect().top + window.pageYOffset - offset + 2

    window.scrollTo({
      top,
      behavior: 'smooth',
    })

    setActive(href)
    setMenuOpen(false)
  }

  const premium = mode === 'premium'
  const bookDemoActive = active === '#cta'

  return (
    <header
      data-navbar
      className="sticky top-0 z-50 border-b border-white/40 bg-[#e9ebf1]/70 px-4 py-4 shadow-[_3px_2px_rgba(0,0,0,0.08)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 lg:px-0">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="text-[15px] font-semibold tracking-[-0.02em] text-[#181c24] sm:text-[17px] md:text-[18px]"
        >
          Editorial Enterprise
        </a>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <nav className="flex items-center justify-center gap-7">
            {navItems.map((item) => {
              const isActive = active === item.href

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`whitespace-nowrap rounded-full px-0 py-0 text-[14px] font-medium transition ${
                    premium
                      ? isActive
                        ? 'text-[#5145ff] underline decoration-2 underline-offset-[6px]'
                        : 'text-[#575d68] hover:text-[#1d2230]'
                      : 'text-[#575d68] hover:text-[#1d2230]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cta"
            onClick={(e) => handleClick(e, '#cta')}
            className={`whitespace-nowrap rounded-full px-0 py-0 text-[14px] font-semibold transition ${
              premium
                ? bookDemoActive
                  ? 'text-[#5145ff] underline decoration-2 underline-offset-[6px]'
                  : 'text-[#1d2230] hover:text-[#5145ff]'
                : 'text-[#1d2230]'
            }`}
          >
            Book Demo
          </a>

          <button
            type="button"
            onClick={() => setMode((prev) => (prev === 'standard' ? 'premium' : 'standard'))}
            className={`rounded-[10px] border px-4 py-2.5 text-[14px] font-semibold transition ${
              premium
                ? 'border-[#4f46ff] bg-[#4f46ff] text-white shadow-[0_10px_24px_rgba(79,70,255,0.25)]'
                : 'border-[#d6dae4] bg-white text-[#1d2230] shadow-[0_8px_18px_rgba(15,23,42,0.06)]'
            }`}
          >
            {premium ? 'Premium' : 'Standard'}
          </button>

          <a
            href="#pricing"
            onClick={(e) => handleClick(e, '#pricing')}
            className={`rounded-[10px] bg-[#4f46ff] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(79,70,255,0.25)] transition ${
              premium ? 'premium-lift premium-button' : ''
            }`}
          >
            Start Free Trial
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#d6dae4] bg-white text-[#1d2230] shadow-[0_8px_18px_rgba(15,23,42,0.06)] md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 md:hidden ${menuOpen ? 'mt-4 max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="rounded-[22px] border border-white/50 bg-[#eef0f5] p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <nav className="flex flex-col gap-2 text-center">
            {navItems.map((item) => {
              const isActive = active === item.href

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`rounded-full px-4 py-3 text-[14px] font-medium transition ${
                    premium
                      ? isActive
                        ? 'bg-white/70 text-[#5145ff] shadow-[0_8px_24px_rgba(15,23,42,0.07)]'
                        : 'text-[#575d68] hover:bg-white/60 hover:text-[#1d2230]'
                      : 'text-[#575d68] hover:bg-white/60 hover:text-[#1d2230]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}

            <a
              href="#cta"
              onClick={(e) => handleClick(e, '#cta')}
              className={`rounded-full px-4 py-3 text-[14px] font-semibold transition ${
                premium
                  ? bookDemoActive
                    ? 'bg-white/70 text-[#5145ff] shadow-[0_8px_24px_rgba(15,23,42,0.07)]'
                    : 'text-[#1d2230] hover:bg-white/60'
                  : 'text-[#1d2230] hover:bg-white/60'
              }`}
            >
              Book Demo
            </a>
          </nav>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setMode((prev) => (prev === 'standard' ? 'premium' : 'standard'))}
              className={`rounded-[12px] border px-4 py-3 text-[14px] font-semibold transition ${
                premium
                  ? 'border-[#4f46ff] bg-[#4f46ff] text-white shadow-[0_10px_24px_rgba(79,70,255,0.25)]'
                  : 'border-[#d6dae4] bg-white text-[#1d2230] shadow-[0_8px_18px_rgba(15,23,42,0.06)]'
              }`}
            >
              {premium ? 'Premium' : 'Standard'}
            </button>

            <a
              href="#pricing"
              onClick={(e) => handleClick(e, '#pricing')}
              className={`flex items-center justify-center rounded-[12px] bg-[#4f46ff] px-4 py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(79,70,255,0.25)] transition ${
                premium ? 'premium-lift premium-button' : ''
              }`}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
