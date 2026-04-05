export default function CtaSection({ mode }) {
  const premium = mode === 'premium'

  return (
    <section id="cta" className="bg-[#1a114f] px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className={`rounded-[34px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07),transparent_30%),linear-gradient(135deg,#4434ef_0%,#5a47ff_48%,#6f61ff_100%)] px-8 py-14 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:px-12 lg:py-16 ${premium ? 'premium-lift' : ''}`}>
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[44px] font-semibold leading-[1.02] tracking-[-0.05em] md:text-[68px]">
              Ready to build your architectural legacy?
            </h2>
            <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-7 text-white/80 md:text-[18px]">
              Join 10,000+ companies already scaling their content with Editorial Enterprise. No credit card required to start.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#pricing" className={`rounded-[12px] bg-white px-8 py-4 text-[15px] font-bold text-[#4434ef] shadow-[0_15px_25px_rgba(0,0,0,0.12)] ${premium ? 'premium-lift premium-button' : ''}`}>
                Start Your 14-Day Free Trial
              </a>
              <a href="#hero" className={`rounded-[12px] bg-white/10 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-sm ring-1 ring-white/12 ${premium ? 'premium-lift premium-button hover:bg-white/15' : ''}`}>
                Request a Demo
              </a>
            </div>

            <div className="mt-8 text-[12px] text-white/65">Join the enterprise movement today.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
