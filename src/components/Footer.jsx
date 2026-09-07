import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-dark px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold text-brand-text">WebWatch AI</h4>
            <p className="mt-2 text-sm text-brand-muted">Monitorovanie webov pre moderné podniky</p>
          </div>

          {/* Product */}
          <div>
            <h5 className="font-semibold text-brand-text">Produkt</h5>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                  API Dokumentácia
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-brand-text">Spoločnosť</h5>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                  O nás
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-semibold text-brand-text">Follow Us</h5>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-brand-muted transition-smooth hover:text-brand-green">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted transition-smooth hover:text-brand-green">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted transition-smooth hover:text-brand-green">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-brand-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-brand-muted">&copy; 2024 WebWatch AI. Všetky práva vyhradené.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                Ochrana osobných údajov
              </a>
              <a href="#" className="text-sm text-brand-muted transition-smooth hover:text-brand-text">
                Podmienky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
