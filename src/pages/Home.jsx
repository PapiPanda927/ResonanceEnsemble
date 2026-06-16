import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

const STATS = [
  { value: '20+', label: 'Performances' },
  { value: '12+', label: 'Facilities Served' },
  { value: '500+', label: 'Residents Reached' },
  { value: '3 yrs', label: 'of Impact' },
]

const PREVIEW_CARDS = [
  {
    to: '/about',
    label: 'Our Story',
    desc: 'The students and musicians behind the ensemble and our evidence-informed therapeutic approach.',
    bg: 'bg-primary',
  },
  {
    to: '/community-projects',
    label: 'Community',
    desc: 'Healing in Harmony and other initiatives that extend our mission beyond the performance.',
    bg: 'bg-charcoal',
  },
]

/* Animated concentric arcs — suggest sound resonating outward from the right edge */
function ResonanceArcs() {
  const radii = [70, 130, 195, 260, 325, 390, 455, 520]
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 500 640"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {radii.map((r, i) => (
        <circle
          key={r}
          cx="500"
          cy="320"
          r={r}
          stroke="white"
          strokeWidth={i < 2 ? '1.5' : '1'}
          strokeOpacity={i < 2 ? 0.14 : 0.07}
          className="resonance-ring"
          style={{ animationDelay: `${i * 0.38}s`, animationDuration: `${4.5 + i * 0.4}s` }}
        />
      ))}
    </svg>
  )
}

export default function Home() {
  return (
    <div className="page-enter">

      {/* ── Hero: Editorial split layout ───────────────────────────── */}
      <section className="min-h-screen flex flex-col md:flex-row pt-20">

        {/* LEFT — Cream panel, left-aligned editorial content */}
        <div className="flex-1 bg-cream-light flex items-center px-8 sm:px-12 md:px-14 lg:px-20 py-16 md:py-0 order-2 md:order-1">
          <div className="max-w-lg w-full">

            <p className="text-primary font-semibold text-[0.68rem] tracking-[0.22em] uppercase mb-7">
              Student-Founded · Houston, Texas
            </p>

            {/* Main headline — large editorial serif */}
            <h1 className="font-serif text-[3.4rem] sm:text-[4.2rem] lg:text-[5rem] text-charcoal leading-[1.04] mb-7">
              Healing,
              <br />
              <span className="italic text-primary">note</span>{' '}
              by note.
            </h1>

            <p className="text-charcoal-muted text-lg leading-relaxed mb-10 max-w-sm">
              {/* PLACEHOLDER: Replace with final approved hero copy */}
              We bring live therapeutic music to assisted living facilities, hospitals, and memory
              care centers across Houston — because music heals.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:2816717660"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-cream font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm tracking-wide"
              >
                <Phone size={15} />
                Book a Performance
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-charcoal/20 hover:border-primary text-charcoal hover:text-primary font-medium px-7 py-4 rounded-full transition-all duration-200 text-sm"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — Teal panel */}
        <div
          className="relative w-full bg-primary overflow-hidden order-1 md:order-2 md:w-[44%]"
          style={{ minHeight: 'clamp(260px, 48vw, 100vh)' }}
        >
          <ResonanceArcs />
          <div className="absolute inset-0 flex items-center justify-center z-10 p-10 md:p-12">
            <img
              src="/logo-dark.png"
              alt="The Resonance Ensemble"
              className="w-full max-w-[300px] lg:max-w-[340px] h-auto object-contain"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* ── Stats — no icons, numbers do the talking ────────────────── */}
      <section className="bg-cream border-b border-cream-dark py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-around md:justify-between gap-y-8 gap-x-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center min-w-[100px]">
                <span className="font-serif text-[2.8rem] sm:text-[3.5rem] font-bold text-primary leading-none">
                  {value}
                </span>
                <span className="text-charcoal-muted text-[0.68rem] mt-2.5 tracking-[0.18em] uppercase font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro + Pull Quote ───────────────────────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Body copy */}
          <div>
            <span className="text-gold font-semibold text-[0.68rem] tracking-[0.2em] uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal mt-3 mb-6 leading-snug">
              Music as a form of care
            </h2>
            {/* PLACEHOLDER: Replace paragraphs with final copy */}
            <p className="text-charcoal-muted leading-relaxed mb-5">
              The Resonance Ensemble is a student-founded initiative bringing live therapeutic
              music to assisted living facilities, hospitals, and community centers across
              Houston, Texas.
            </p>
            <p className="text-charcoal-muted leading-relaxed">
              We collaborate with healthcare professionals to deliver structured sessions designed
              to comfort, engage, and uplift — because we believe access to music is a form of care.
            </p>
            <div className="mt-8 w-10 h-0.5 bg-gold rounded-full" />
          </div>

          <blockquote className="border-l-4 border-gold pl-8 py-1">
            <p className="font-serif text-2xl sm:text-[1.7rem] text-charcoal italic leading-relaxed">
              "For many of my neurological patients, music is even more — it can provide access,
              even when no medication can, to movement, to speech, to life. For them, music is
              not a luxury, but a necessity."
            </p>
            <footer className="mt-5 text-charcoal-muted text-sm not-italic">
              — Oliver Sacks, Neurologist &amp; Author, <cite className="not-italic">Musicophilia</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Preview Cards — rich dark colors ────────────────────────── */}
      <section className="bg-cream-light py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-10">
            Explore Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PREVIEW_CARDS.map(({ to, label, desc, bg }) => (
              <Link
                key={to}
                to={to}
                className={`group ${bg} rounded-2xl p-8 flex flex-col justify-between min-h-[240px] transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div>
                  <h3 className="font-serif text-2xl text-cream mb-3">{label}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{desc}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-cream/70 group-hover:text-cream text-sm font-medium transition-colors duration-200">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1.5 transition-transform duration-200"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
