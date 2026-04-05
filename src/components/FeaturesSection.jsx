import starIcon from '../assets/star.png'
import gridIcon from '../assets/grid.png'
import shieldIcon from '../assets/shield.png'

const cards = [
  {
    icon: starIcon,
    title: 'Intelligent Workflows',
    description:
      'Automate your content pipeline with smart branching and AI-driven approvals that adapt to your team’s pace.',
  },
  {
    icon: gridIcon,
    title: 'Headless API First',
    description:
      'Deliver pixel-perfect content to any device or platform with our robust, low-latency GraphQL engine.',
  },
  {
    icon: shieldIcon,
    title: 'Enterprise Guardrails',
    description:
      'Advanced SSO, custom roles, and audit trails that keep your global operations secure and compliant.',
  },
]

export default function FeaturesSection({ mode }) {
  const premium = mode === 'premium'

  return (
    <section id="features" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[780px] text-center">
        <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5b56ff]">
          Unmatched Capability
        </div>

        <h2 className="mt-4 text-[38px] font-semibold tracking-[-0.04em] text-[#1d212b] md:text-[54px]">
          Powerful Features Built for Growth
        </h2>

        <p className="mx-auto mt-5 max-w-[650px] text-[18px] leading-8 text-[#6d7280]">
          We&apos;ve spent thousands of hours refining the engine so you can focus on the
          architectural beauty of your content.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`rounded-[24px] bg-white px-8 py-10 shadow-[0_10px_25px_rgba(15,23,42,0.04)] ring-1 ring-[#efeff4] ${premium ? 'premium-lift hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:bg-[#fbfbff]' : ''}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4f4f7]">
              <img src={card.icon} alt="" className="h-10 w-10 object-contain" />
            </div>

            <h3 className="mt-10 text-[28px] font-semibold tracking-[-0.03em] text-[#1f2430]">
              {card.title}
            </h3>

            <p className="mt-5 text-[16px] leading-7 text-[#6d7280]">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
