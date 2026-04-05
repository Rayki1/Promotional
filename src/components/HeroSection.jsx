import heroReference from '../assets/dashboard-card.png'
import { FiTrendingUp } from 'react-icons/fi'

export default function HeroSection({ mode }) {
  const premium = mode === 'premium'

  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pb-20 lg:pt-20">
      <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] xl:gap-24">
        <div className="max-w-[800px]">
          <div className="mb-7 inline-flex rounded-full border bg-[#4f46ff]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4f46ff] shadow-[0_10px_25px_rgba(15,23,42,0.06)] backdrop-blur-md">
            New! Editorial 2.0 is live
          </div>

          <h1 className="max-w-[520px] text-[40px] font-bold leading-[0.98] tracking-[-0.05em] text-[#171b24] sm:text-[52px] md:text-[72px]">
            Architect Your
            <br />
            <span className="text-[#3347c8]">Digital Legacy.</span>
          </h1>

          <p className="mt-8 max-w-[490px] text-[16px] leading-7 text-[#60646f] sm:text-[18px] sm:leading-8">
            The world&apos;s most advanced editorial platform for enterprise teams.
            Scale your content operations with architectural precision and fluid
            workflows.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#pricing"
              className={`rounded-[12px] bg-[#4f46ff] px-8 py-4 text-center text-[16px] font-bold text-white shadow-[0_15px_30px_rgba(79,70,255,0.25)] ${premium ? 'premium-lift premium-button' : ''}`}
            >
              Start Free Trial →
            </a>
            <a
              href="#process"
              className={`flex items-center justify-center gap-2 rounded-[12px] bg-[#E0E3E5] px-7 py-4 text-[16px] font-bold text-[#232833] shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur-md ${premium ? 'premium-lift premium-button' : ''}`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2b2f39] text-[10px] font-bold">
                ▶
              </span>
              Watch Demo
            </a>
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex -space-x-2">
              {['A', 'B', 'C'].map((letter, index) => (
                <div
                  key={letter}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[linear-gradient(135deg,#7aa3ff,#274387)] text-[11px] font-bold text-white shadow-sm"
                  style={{ zIndex: 4 - index }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#555b66]">
              Trusted by <span className="font-semibold text-[#1f2531]">10k+ companies</span> worldwide
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
          <div className="absolute left-[4%] top-[-6%] z-20 rounded-xl border border-white/30 bg-white/60 px-3 py-4 shadow-lg backdrop-blur sm:left-[11%] sm:top-[-7%] sm:px-4 sm:py-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg bg-indigo-400/30 px-1 py-0.5">
                <FiTrendingUp className="text-lg text-blue-900" />
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#464555]">
                  Growth
                </div>
                <div className="mt-1 text-[16px] font-bold tracking-[-0.04em] text-[#1f2430] sm:text-[20px]">
                  +124%
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[6%] right-[3%] z-20 rounded-[18px] border border-white/30 bg-white/60 px-4 py-3 shadow-lg backdrop-blur sm:bottom-[5%] sm:right-[8%] sm:px-5 sm:py-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1f2430] sm:text-[13px]">
              <span className="h-3 w-3 rounded-full bg-[#34c759]" />
              99.9% System Uptime
            </div>
          </div>

          <div className="relative mx-auto flex items-center justify-center">
            <img
              src={heroReference}
              alt="Dashboard preview"
              className="w-full max-w-[520px] scale-[1.04] rotate-[2deg] rounded-xl drop-shadow-[0_35px_50px_rgba(15,23,42,0.22)] lg:max-w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
