import { useState } from 'react'
import { Plus, Loader, Check, AlertCircle } from 'lucide-react'

const Dashboard = ({ websites, onAddWebsite, loading }) => {
  const [urlInput, setUrlInput] = useState('')

  const handleAddWebsite = async () => {
    if (!urlInput.trim()) return

    let url = urlInput.trim()
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    await onAddWebsite(url)
    setUrlInput('')
  }

  const getStatusColor = (status) => {
    return status === 'ONLINE' ? 'text-brand-green' : 'text-brand-red'
  }

  const getSSLStatusColor = (daysLeft) => {
    if (daysLeft > 60) return 'text-brand-green'
    if (daysLeft > 30) return 'text-yellow-500'
    return 'text-brand-red'
  }

  return (
    <section className="bg-brand-dark px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-brand-text">Dashboard</h2>
          <p className="text-brand-muted">Riaďte a monitorujte všetky vaše weby na jednom mieste</p>
        </div>

        {/* Add Website Form */}
        <div className="glass mb-10 p-6">
          <label className="block text-sm font-semibold text-brand-text mb-4">Pridať nový web</label>
          <div className="flex gap-3">
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddWebsite()}
              placeholder="napr. example.com alebo https://example.com"
              disabled={loading}
              className="flex-1 rounded-lg bg-brand-dark border border-brand-border px-4 py-3 text-brand-text placeholder-brand-muted focus:border-brand-green focus:outline-none transition-smooth disabled:opacity-50"
            />
            <button
              onClick={handleAddWebsite}
              disabled={loading || !urlInput.trim()}
              className="rounded-lg bg-brand-green px-6 py-3 font-semibold text-white transition-smooth hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Skenujem...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Spustiť monitoring
                </>
              )}
            </button>
          </div>
        </div>

        {/* Loading animation */}
        {loading && (
          <div className="glass mb-10 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full border-4 border-brand-border border-t-brand-green animate-spin"></div>
            </div>
            <p className="text-brand-muted">Skenujem web... To môže trvať až 3 sekundy</p>
          </div>
        )}

        {/* Websites Table */}
        <div className="glass overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-muted">URL / Názov</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-muted">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-muted">Uptime</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-muted">Reakčný čas</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-muted">SSL Certifikát</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-brand-muted">Akcia</th>
                </tr>
              </thead>
              <tbody>
                {websites.map((website, index) => (
                  <tr
                    key={website.id}
                    className="border-b border-brand-border/50 transition-smooth hover:bg-brand-card/50"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-brand-text">{website.name}</p>
                        <p className="text-sm text-brand-muted">{website.url}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-2 font-semibold ${getStatusColor(website.status)}`}>
                        <span className="h-2 w-2 rounded-full bg-current"></span>
                        {website.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-brand-text font-medium">{website.uptime}%</td>
                    <td className="px-6 py-4 text-brand-text font-medium">{website.responseTime}ms</td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${getSSLStatusColor(website.ssl.daysLeft)}`}>
                        {website.ssl.status} ({website.ssl.daysLeft} dní)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="rounded-lg bg-brand-green/20 px-4 py-2 text-sm font-semibold text-brand-green transition-smooth hover:bg-brand-green/30">
                        Detaily
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {websites.length === 0 && !loading && (
            <div className="px-6 py-16 text-center">
              <AlertCircle className="mx-auto mb-4 h-12 w-12 text-brand-muted" />
              <p className="text-brand-muted">Žiadne monitorované weby. Pridajte svoj prvý web vyššie!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
