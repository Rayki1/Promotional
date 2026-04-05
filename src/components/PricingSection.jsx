const plans = [
  {
    name: 'Basic',
    price: '$49',
    suffix: '/month',
    features: ['Up to 5 users', '100 Content Items', 'Community Support'],
    cta: 'Choose Basic',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$149',
    suffix: '/month',
    features: ['Unlimited users', 'Advanced Workflows', '24/7 Priority Support', 'Headless API Access'],
    cta: 'Get Started with Pro',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    suffix: '',
    features: ['Custom Security (SSO)', 'Dedicated Success Manager', 'Unlimited Storage'],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function PricingSection({ mode }) {
  const premium = mode === 'premium'

  return (
    <section id="pricing" className="bg-[#dde2ee] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <h2 className="text-[40px] font-semibold tracking-[-0.04em] text-[#1f2430] md:text-[56px]">
            Built for Every Scale
          </h2>
          <p className="mt-4 text-[18px] text-[#6d7280]">
            Flexible plans designed to grow alongside your ambition.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[980px] gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[28px] bg-white px-8 py-9 shadow-[0_12px_30px_rgba(15,23,42,0.05)] ring-1 ${
                plan.featured
                  ? 'ring-[#4f46ff] shadow-[0_24px_45px_rgba(79,70,255,0.18)]'
                  : 'ring-[#efeff4]'
              } ${premium ? 'premium-lift hover:bg-[#fcfcff]' : ''}`}
            >
              {plan.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f46ff] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  Most Popular
                </div>
              )}

              <div className="text-[20px] font-semibold text-[#1f2430]">
                {plan.name}
              </div>

              <div className="mt-4 flex items-end gap-1">
                <div className="text-[48px] font-semibold tracking-[-0.05em] text-[#1f2430]">
                  {plan.price}
                </div>
                {plan.suffix && <div className="mb-2 text-[14px] text-[#7c8190]">{plan.suffix}</div>}
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-center gap-3 text-[14px] ${
                      plan.featured ? 'font-semibold text-[#1f2430]' : 'text-[#5f6472]'
                    }`}
                  >
                    <span className="text-[#6158ff]">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#"
                className={`mt-10 flex h-12 items-center justify-center rounded-[12px] border text-[14px] font-semibold ${premium ? 'premium-lift premium-button' : ''} ${
                  plan.featured
                    ? 'border-[#4f46ff] bg-[#4f46ff] text-white shadow-[0_15px_30px_rgba(79,70,255,0.24)]'
                    : 'border-[#1f2430] text-[#1f2430] hover:bg-[#f7f7fa]'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
