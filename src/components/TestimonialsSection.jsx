const testimonials = [
  {
    quote:
      'Editorial Enterprise transformed our content team from a bottleneck into a growth engine. The architectural approach is unique and powerful.',
    name: 'Elena Rodriguez',
    role: 'Director of Content, TechFlow',
  },
  {
    quote:
      'The best headless CMS I’ve ever used. The developer experience is just as good as the editor experience. Integration was a breeze.',
    name: 'Marcus Thorn',
    role: 'Lead Developer, Nexus Labs',
  },
  {
    quote:
      'Scaling to 50+ countries was our biggest challenge. This platform made localization and global distribution feel like magic.',
    name: 'David Chen',
    role: 'VP Global Ops, Horizon Media',
  },
]

export default function TestimonialsSection({ mode }) {
  const premium = mode === 'premium'

  return (
    <section id="testimonials" className="mx-auto max-w-[1440px] px-6 py-18 lg:px-10 lg:py-20">
      <div className="text-center">
        <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5b56ff]">
          Voices of Success
        </div>
        <h2 className="mt-3 text-[38px] font-semibold tracking-[-0.04em] text-[#1f2430] md:text-[54px]">
          Trusted by Visionaries
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <article
            key={item.name}
            className={`rounded-[22px] bg-white px-6 py-7 shadow-[0_10px_25px_rgba(15,23,42,0.04)] ring-1 ring-[#efeff4] ${premium ? 'premium-lift hover:bg-[#fbfbff]' : ''}`}
          >
            <div className="text-[24px] text-[#ffb400]">☆☆☆☆☆</div>
            <p className="mt-5 text-[15px] italic leading-7 text-[#5e6371]">“{item.quote}”</p>
            <div className="mt-7 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-bold text-white ${index === 0 ? 'bg-[linear-gradient(135deg,#f1c091,#91593e)]' : index === 1 ? 'bg-[linear-gradient(135deg,#6c7cff,#2b387f)]' : 'bg-[linear-gradient(135deg,#60b3ff,#0f5473)]'}`}>
                {item.name[0]}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#1f2430]">{item.name}</div>
                <div className="text-[12px] text-[#7c8190]">{item.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
