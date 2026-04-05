const logos = ['✦', '◼', '▤', '◫', '✉']

function LogoItem({ logo, baseIndex }) {
  return (
    <div className="flex min-w-0 flex-1 justify-center">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-sm text-[12px] font-semibold text-white ${
          baseIndex === 1
            ? 'bg-[#8dd7e6]'
            : baseIndex === 2
              ? 'bg-[#84a9b5]'
              : baseIndex === 3
                ? 'bg-[#7c95a4]'
                : baseIndex === 4
                  ? 'bg-[#7e91a3]'
                  : 'bg-[#848484]'
        }`}
      >
        {logo}
      </div>
    </div>
  )
}

export default function LogoStrip({ mode }) {
  const premium = mode === 'premium'

  return (
    <section className="mt-20 overflow-hidden bg-gray-200 px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-[1440px] overflow-hidden">
        {premium ? (
          <div className="logo-marquee">
            <div className="logo-marquee-track">
              {[0, 1].map((group) => (
                <div key={group} className="logo-marquee-group">
                  {logos.map((logo, index) => (
                    <LogoItem key={`${group}-${logo}-${index}`} logo={logo} baseIndex={index} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4 items-center">
            {logos.map((logo, index) => (
              <LogoItem key={`${logo}-${index}`} logo={logo} baseIndex={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
