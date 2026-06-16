import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/community-projects', label: 'Community' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand column */}
          <div>
            {/* PLACEHOLDER: logo-dark.png has teal background that closely matches footer bg — replace with transparent-bg logo when available */}
            <img
              src="/logo-dark.png"
              alt="The Resonance Ensemble"
              className="h-16 w-auto object-contain mb-5 rounded-lg opacity-95"
            />
            <p className="text-cream/65 text-sm leading-relaxed max-w-xs">
              Bringing therapeutic music to those who need it most. A student-founded initiative
              serving Houston, Texas.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-base text-cream mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-cream/60 hover:text-cream text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-serif text-base text-cream mb-5 tracking-wide">Contact</h4>
            <a
              href="tel:2816717660"
              className="flex items-center gap-2.5 text-cream/80 hover:text-cream text-sm transition-colors duration-200 mb-4 group"
            >
              <Phone size={14} className="flex-shrink-0 text-gold group-hover:text-gold-light transition-colors" />
              (281) 671-7660
            </a>
            <div className="flex items-start gap-2 text-cream/60 text-sm">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              Houston, Texas
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-cream/35 text-xs">
            © {new Date().getFullYear()} The Resonance Ensemble. All rights reserved.
          </p>
          <p className="text-cream/35 text-xs">Houston, TX</p>
        </div>
      </div>
    </footer>
  )
}
