const columns = [
  {
    title: 'Product',
    links: ['Platform', 'Features', 'Integrations', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Guides', 'Help Center'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Security'],
  },
]

export default function Footer({ mode }) {
  const premium = mode === 'premium'

  return (
    <footer id="footer" className="bg-[#e9ebf1] px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-[#ececf2] pb-10 lg:grid-cols-[1.2fr_repeat(4,0.7fr)]">
          <div className="mx-auto max-w-[260px] text-center lg:mx-0 lg:text-left">
            <div className="text-[15px] font-semibold text-[#1f2430]">Editorial Enterprise</div>
            <p className="mt-5 text-[13px] leading-6 text-[#707583]">
              Architecting the future of content distribution and editorial excellence for the modern enterprise.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-[#8e93a0] lg:justify-start">
              <span>◔</span>
              <span>⌘</span>
              <span>⌂</span>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className={`${premium ? 'premium-lift hover:bg-white/40 rounded-[18px] p-3 -m-3' : ''} text-center lg:text-left`}>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1f2430]">
                {column.title}
              </div>
              <div className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <a key={link} href="#hero" className={`block text-[13px] text-[#707583] ${premium ? 'transition hover:text-[#1f2430]' : 'hover:text-[#1f2430]'}`}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 text-center text-[12px] text-[#8e93a0] md:flex-row md:justify-between md:text-left">
          <div>© 2026 Editorial Enterprise. Built for Architects.</div>
          <div className="flex items-center justify-center gap-5">
            <a href="#hero">Twitter</a>
            <a href="#features">LinkedIn</a>
            <a href="#pricing">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
