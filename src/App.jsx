import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const [websites, setWebsites] = useState([
    {
      id: 1,
      url: 'https://techstartup.io',
      name: 'TechStartup.io',
      status: 'ONLINE',
      uptime: 99.98,
      responseTime: 245,
      ssl: { status: 'Platný', daysLeft: 45 },
    },
    {
      id: 2,
      url: 'https://apidocs.dev',
      name: 'API Docs',
      status: 'ONLINE',
      uptime: 99.87,
      responseTime: 312,
      ssl: { status: 'Platný', daysLeft: 120 },
    },
    {
      id: 3,
      url: 'https://analytics.cloud',
      name: 'Analytics Cloud',
      status: 'ONLINE',
      uptime: 99.92,
      responseTime: 198,
      ssl: { status: 'Platný', daysLeft: 75 },
    },
  ])

  const [loading, setLoading] = useState(false)

  const addWebsite = async (url) => {
    setLoading(true)
    // Simulácia 3-sekundového skennovania
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const newWebsite = {
      id: websites.length + 1,
      url: url,
      name: url.replace('https://', '').replace('http://', '').split('/')[0],
      status: 'ONLINE',
      uptime: (Math.random() * 0.08 + 99.9).toFixed(2),
      responseTime: Math.floor(Math.random() * 200 + 100),
      ssl: { status: 'Platný', daysLeft: Math.floor(Math.random() * 200 + 30) },
    }

    setWebsites([...websites, newWebsite])
    setLoading(false)
  }

  const getMetrics = () => {
    const totalSites = websites.length
    const avgUptime =
      (websites.reduce((sum, w) => sum + parseFloat(w.uptime), 0) / totalSites).toFixed(2) || 0
    const avgResponseTime = Math.floor(
      websites.reduce((sum, w) => sum + w.responseTime, 0) / totalSites || 0
    )
    const sslWarnings = websites.filter((w) => w.ssl.daysLeft < 30).length

    return { totalSites, avgUptime, avgResponseTime, sslWarnings }
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <main>
        <Hero metrics={getMetrics()} />
        <Dashboard websites={websites} onAddWebsite={addWebsite} loading={loading} />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
