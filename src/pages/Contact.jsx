import { Phone, MapPin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="page-enter pt-20">

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-cream mb-4">Get in Touch</h1>
          <p className="text-cream/70 text-lg font-light">
            Interested in booking a performance or partnering with us? Reach out directly.
          </p>
        </div>
      </section>

      {/* ── Contact Details ───────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">

          <span className="text-gold font-semibold text-xs tracking-widest uppercase">
            Reach Us
          </span>
          <h2 className="text-3xl font-serif text-charcoal mt-3 mb-12">
            We'd love to hear from you
          </h2>

          {/* Phone — primary contact */}
          <a
            href="tel:2816717660"
            className="group flex flex-col items-center gap-3 bg-primary rounded-2xl px-10 py-10 mb-6 shadow-lg hover:bg-primary-light transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-cream/15 flex items-center justify-center mb-1">
              <Phone size={24} className="text-cream" />
            </div>
            <p className="text-cream/70 text-xs tracking-widest uppercase font-semibold">Call or Text</p>
            <p className="font-serif text-3xl text-cream tracking-wide">(281) 671-7660</p>
            <p className="text-cream/60 text-sm mt-1 group-hover:text-cream/80 transition-colors">
              Tap to call on mobile
            </p>
          </a>

          {/* Email — placeholder */}
          <div className="flex items-center gap-4 bg-cream-light rounded-2xl px-8 py-6 border border-cream-dark mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-charcoal-muted text-xs tracking-widest uppercase font-semibold mb-0.5">Email</p>
              {/* PLACEHOLDER: Replace with the ensemble's actual email address */}
              <p className="text-charcoal font-medium text-sm">contactResonanceEnsemble@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-cream-light rounded-2xl px-8 py-6 border border-cream-dark">
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-charcoal-muted text-xs tracking-widest uppercase font-semibold mb-0.5">Based In</p>
              <p className="text-charcoal font-medium text-sm">Houston, Texas</p>
            </div>
          </div>

          <p className="text-charcoal-muted text-sm leading-relaxed mt-12 max-w-sm mx-auto">
            We serve assisted living facilities, hospitals, memory care centers, and community
            organizations across Houston. Reach out to discuss availability and how we can
            bring live therapeutic music to your community.
          </p>

        </div>
      </section>

    </div>
  )
}
