// NDS-Style Statistics Section
// Large, impactful data display

interface Stat {
  value: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
  headline?: string
  variant?: 'light' | 'dark'
}

export function StatsSection({
  stats,
  headline,
  variant = 'light'
}: StatsSectionProps) {
  const bgClass = variant === 'dark'
    ? 'bg-black text-white'
    : 'bg-warm-cream text-black'

  return (
    <section className={`${bgClass} py-20 md:py-32`}>
      <div className="max-w-7xl mx-auto px-6">
        {headline && (
          <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">
            {headline}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal">
                {stat.value}
              </div>
              <div className="mt-4 text-sm md:text-base uppercase tracking-widest opacity-70 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
