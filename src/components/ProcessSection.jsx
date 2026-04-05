import teamDesign from '../assets/dev-team.png'
import teamCollab from '../assets/collab-team.png'
import insightsChart from '../assets/analytics-screen.png'

const bullets = ['Dynamic Schema Builder', 'Visual Component Library', 'Multi-Language Support']

export default function ProcessSection({ mode }) {
  const premium = mode === 'premium'

  return (
    <section id="process" className="bg-[#D9D9E3] px-4 pb-12 pt-16 sm:px-6 lg:px-10 lg:pb-1 lg:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-16">
          <div className="order-1 mx-auto w-full lg:translate-x-24">
            <div className="w-full max-w-[500px] overflow-hidden rounded-[30px] bg-white shadow-[0_28px_40px_rgba(61,54,121,0.12)]">
              <img src={teamDesign} alt="Design team" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="order-2 flex items-center pl-0 lg:pl-[140px]">
            <div className="max-w-[430px]">
              <div className="select-none text-[52px] font-semibold tracking-[-0.05em] text-[#4F46E5]/10 md:text-[72px]">
                01
              </div>

              <h2 className="mt-4 text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#1f2430] sm:text-[34px] md:text-[40px]">
                Conceptualize & Design.
              </h2>

              <p className="mt-5 text-[16px] leading-7 sm:text-[17px] sm:leading-8 text-[#666b77]">
                Give your team a clear publishing system with blocks, approvals,
                and reusable patterns that stay consistent at every scale.
              </p>

              <div className="mt-8 space-y-4">
                {bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 text-[15px] text-[#3a404c]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#4f46ff] text-[12px] font-bold text-[#4f46ff]">
                      ✓
                    </span>

                    <span className="font-semibold">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-4 flex items-center pl-0 lg:order-3 lg:pl-[140px]">
            <div className="max-w-[460px]">
              <div className="select-none text-[52px] font-semibold tracking-[-0.05em] text-[#4F46E5]/10 md:text-[72px]">
                02
              </div>

              <h2 className="mt-4 text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-[34px] md:text-[40px]">
                Collaborate in Real-time.
              </h2>

              <p className="mt-5 text-[16px] leading-7 sm:text-[17px] sm:leading-8 text-[#666b77]">
                Designers, editors, and developers can work in one clean workflow
                with shared visibility and faster approvals.
              </p>

              <div className={`mt-8 flex items-center gap-4 rounded-[16px] bg-white px-5 py-4 shadow-[0_10px_25px_rgba(15,23,42,0.06)] ${premium ? 'premium-lift hover:bg-[#fcfcff]' : ''}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#243447] text-sm text-white">
                  👩
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-[#1f2430]">Sarah Jenkins</span>
                    <span className="text-[12px] text-[#8b93a1]">2m ago</span>
                  </div>

                  <p className="mt-1 text-[14px] leading-6 text-[#3a404c]">
                    "Let's refine the hero headline for better conversion."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-3 mx-auto w-full lg:order-4 lg:-translate-x-24">
            <div className="ml-auto w-full max-w-[500px] overflow-hidden rounded-[30px] bg-white shadow-[0_28px_40px_rgba(61,54,121,0.12)]">
              <img src={teamCollab} alt="Team collaboration" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 -mx-4 rounded-[34px] bg-[linear-gradient(135deg,#0b1530_0%,#0d1b42_35%,#081225_100%)] py-12 sm:-mx-6 lg:-mx-10 lg:py-16">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div className="max-w-[360px] text-white">
                <h3 className="mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[34px] md:text-[48px]">
                  Data-Driven Editorial Insights.
                </h3>

                <p className="mt-5 text-[16px] leading-7 text-white/72">
                  Stop guessing what works. Our built-in analytics suite provides deep visibility into reader behavior, conversion heatmaps, and
                  content ROI.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className={`rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm ${premium ? 'premium-lift hover:bg-white/10' : ''}`}>
                    <div className="text-[26px] font-semibold tracking-[-0.04em]">4.2M</div>
                    <div className="mt-1 text-[12px] text-white/60">Monthly Hits</div>
                  </div>

                  <div className={`rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm ${premium ? 'premium-lift hover:bg-white/10' : ''}`}>
                    <div className="text-[26px] font-semibold tracking-[-0.04em]">18%</div>
                    <div className="mt-1 text-[12px] text-white/60">Avg. Growth</div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
                <div className="rounded-[20px] border border-white/10 bg-[#0f1c3a] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <div className="relative overflow-hidden rounded-[14px] bg-[#081225]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.2),transparent_70%)]" />

                    <img
                      src={insightsChart}
                      alt="Analytics dashboard"
                      className="relative z-10 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
