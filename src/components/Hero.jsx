import { BarChart3, Clock, Shield, Globe } from 'lucide-react'

const Hero = ({ metrics }) => {
  const { totalSites, avgUptime, avgResponseTime, sslWarnings } = metrics

  const cards = [
    {
      icon: Globe,
      label: 'Monitorované weby',
      value: totalSites,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      label: 'Priemerná dostupnosť',
      value: `${avgUptime}%`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      label: 'Reakčný čas',
      value: `${avgResponseTime}ms`,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Shield,
      label: 'SSL v ohrození',
      value: sslWarnings,
      color: 'from-red-500 to-pink-500',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-brand px-4 py-20 sm:px-6 lg:px-8">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-green-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Hero text */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
            Sleduj svoju <span className="gradient-text">digitálnu prítomnosť</span> v reálnom čase
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            WebWatch AI vám poskytuje komplexný náhľad na zdravie vašich webov. Monitoruj dostupnosť, výkon a bezpečnosť SSL certifikátov so100% presnosťou.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="glass group overflow-hidden p-6 transition-smooth hover:border-brand-green hover:shadow-xl hover:shadow-green-500/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br px-2 py-2 text-white" style={{
                  backgroundImage: `linear-gradient(135deg, var(--color-start), var(--color-end))`,
                }}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="relative">
                  <p className="text-sm font-medium text-brand-muted">{card.label}</p>
                  <p className="mt-2 text-3xl font-bold text-brand-text">{card.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
