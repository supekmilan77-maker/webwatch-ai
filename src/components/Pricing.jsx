import { Check } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '19',
      currency: '€',
      period: '/mesiac',
      description: 'Perfektné pre startups a SME',
      features: [
        'Monitorovanie až 5 webov',
        'Kontroly každých 5 minút',
        'Upozornenia cez email',
        'Historické dáta 7 dní',
        'Základný dashboard',
      ],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '49',
      currency: '€',
      period: '/mesiac',
      description: 'Pre rastúce podniky',
      features: [
        'Monitorovanie až 50 webov',
        'Kontroly každú minútu',
        'Upozornenia (email, SMS, Slack)',
        'Historické dáta 90 dní',
        'Pokročilý dashboard',
        'API prístup',
        'Technická podpora 24/7',
      ],
      highlight: true,
    },
    {
      name: 'Lifetime / LTD',
      price: '99',
      currency: '€',
      period: 'jednorazovo',
      description: 'Permanentný prístup',
      features: [
        'Monitorovanie neobmedzených webov',
        'Kontroly každých 30 sekúnd',
        'Všetky kanály upozornení',
        'Neobmedzené historické dáta',
        'Premium dashboard',
        'Prioritný API prístup',
        'Prioritná podpora',
        'Bezplatné budúce aktualizácie',
      ],
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="bg-brand-dark px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-text">Jednoduchý a transparentný cenník</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Vyskúšajte WebWatch AI bez rizika. Všetky plány sú vrátiteľné v priebehu 14 dní.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass relative overflow-hidden p-8 transition-smooth ${
                plan.highlight
                  ? 'border-brand-green shadow-xl shadow-green-500/20 md:scale-105'
                  : 'hover:border-brand-green/50'
              }`}
            >
              {/* Highlight badge */}
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-brand-green px-4 py-1 text-xs font-bold text-white">
                  NAJPOPULÁRNEJŠÍ
                </div>
              )}

              {/* Plan name and description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-text">{plan.name}</h3>
                <p className="mt-2 text-sm text-brand-muted">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-text">{plan.price}</span>
                  <span className="text-brand-text font-semibold">{plan.currency}</span>
                  <span className="text-brand-muted">{plan.period}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full rounded-lg px-6 py-3 font-semibold transition-smooth mb-8 ${
                  plan.highlight
                    ? 'bg-brand-green text-white hover:bg-green-600'
                    : 'bg-brand-green/20 text-brand-green hover:bg-brand-green/30'
                }`}
              >
                Vyskúšať na 14 dní zdarma
              </button>

              {/* Features list */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-green" />
                    <span className="text-sm text-brand-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
