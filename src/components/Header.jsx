import { Menu, Plus } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-dark/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-green to-blue-500">
              <span className="text-lg font-bold text-white">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand-text">WebWatch AI</span>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse"></div>
                <span className="text-xs text-brand-muted">System Operational</span>
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
              Features
            </a>
            <a href="#pricing" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
              Pricing
            </a>
            <a href="#docs" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
              Docs
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-smooth hover:bg-green-600 md:inline-block">
              <Plus className="inline mr-2 h-4 w-4" />
              Pridať web
            </button>
            <button className="md:hidden rounded-lg p-2 text-brand-text transition-smooth hover:bg-brand-card">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
