import { Camera } from 'lucide-react'

const HEALING_STATS = [
  { value: '$3,000+', label: 'Raised'                  },
  { value: '150',     label: 'Wellness Kits Delivered' },
  { value: '21',      label: 'Performers'              },
  { value: '250+',    label: 'Attendees'               },
]


export default function CommunityProjects() {
  return (
    <div className="page-enter pt-20">

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-cream mb-4">Community</h1>
          <p className="text-cream/70 text-lg font-light">
            Initiatives that extend our mission beyond the performance hall.
          </p>
        </div>
      </section>

      {/* ── Healing in Harmony — Featured Project ────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Unified 2-col layout: title + description left, partner logo + stats right */}
          <div className="grid md:grid-cols-2 gap-12 mb-14">

            {/* Left — title + description */}
            <div>
              <span className="text-gold font-semibold text-xs tracking-widest uppercase">
                Featured Project
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal mt-2 mb-8">
                Healing in Harmony
              </h2>
              <p className="text-charcoal-muted leading-relaxed mb-4">
                Healing in Harmony was a community fundraising and performance event
                organized in partnership with Heroes for Children, bringing together musicians,
                volunteers, and community members to raise funds and assemble wellness kits for
                pediatric cancer patients and their families.
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                The event featured live performances from 21 musicians, hands-on
                kit-building stations, and educational programming about the role of music in
                therapeutic settings. The outpouring of community support exceeded all expectations,
                with over 250 attendees joining us for an afternoon of music, generosity, and
                connection.
              </p>
            </div>

            {/* Right — partner logo + event impact stacked */}
            <div className="flex flex-col gap-5">

              {/* Partner logo card */}
              <a
                href="https://heroesforchildren.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-8 bg-white rounded-2xl px-6 py-5 border border-cream-dark shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 w-fit self-center"
              >
                <p className="text-charcoal-muted text-[0.65rem] tracking-widest uppercase font-semibold whitespace-nowrap">In partnership with</p>
                <img
                  src="/partners/heroes-for-children.jpg"
                  alt="Heroes for Children"
                  className="h-24 w-auto object-contain"
                />
              </a>

              {/* Event Impact card */}
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 flex-1">
                <h3 className="font-serif text-xl text-charcoal mb-7">Event Impact</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  {HEALING_STATS.map(({ value, label }) => (
                    <div key={label}>
                      <p className="text-3xl font-serif font-bold text-primary leading-none mb-2">{value}</p>
                      <p className="text-charcoal-muted text-sm leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Project Photo Gallery */}
          <div>
            <h3 className="font-serif text-xl text-charcoal mb-6">Event Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/projects/healing-in-harmony/photo-1.png', alt: 'Quartet performing on stage at Healing in Harmony' },
                { src: '/projects/healing-in-harmony/photo-2.png', alt: 'Full ensemble performing at Healing in Harmony' },
                { src: '/projects/healing-in-harmony/photo-3.png', alt: 'Audience gathered at Healing in Harmony event' },
                { src: '/projects/healing-in-harmony/photo-4.png', alt: 'Violin and clarinet duo performing at Healing in Harmony' },
              ].map(({ src, alt }) => (
                <div
                  key={src}
                  className="aspect-square rounded-xl overflow-hidden bg-cream-dark shadow-sm"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Performances Over the Years ──────────────────────────────── */}
      <section className="bg-cream-light py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end gap-4 mb-10">
            <div>
              <span className="text-gold font-semibold text-xs tracking-widest uppercase">
                Our History
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal mt-2">
                Performances Over the Years
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 ml-auto text-charcoal-muted/50 text-sm pb-0.5">
              <Camera size={15} />
              <span>A look back at our journey</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/performances/photo-1.jpg', alt: 'Quartet performing at a private residence' },
              { src: '/performances/photo-2.jpg', alt: 'Ensemble performing for residents at an assisted living facility' },
              { src: '/performances/photo-3.jpg', alt: 'Holiday performance at a memory care facility' },
              { src: '/performances/photo-4.jpg', alt: 'Quartet rehearsing before a performance' },
              { src: '/performances/photo-5.jpg', alt: 'Ensemble members before a performance' },
              { src: '/performances/photo-6.jpg', alt: 'Ensemble members after a holiday performance' },
            ].map(({ src, alt }) => (
              <div
                key={src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-dark shadow-sm"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Projects (expandable grid) ──────────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif text-charcoal mb-10">More Projects</h2>

          {/*
            FUTURE PROJECTS
            To add a new project, duplicate the card template below and fill in real content:

            <div className="bg-white rounded-2xl overflow-hidden border border-cream-dark shadow-sm">
              <div className="h-44 overflow-hidden">
                <img src="/projects/your-project/cover.jpg" alt="Project name" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">2024</span>
                <h3 className="font-serif text-xl text-charcoal mt-1 mb-2">Project Name</h3>
                <p className="text-charcoal-muted text-sm leading-relaxed mb-4">
                  Brief description of the project.
                </p>
                <Link to="/community-projects" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Coming Soon placeholder — remove once real projects are added */}
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-cream-dark flex flex-col items-center justify-center text-center min-h-52">
              <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center mb-4">
                <span className="text-primary/40 text-lg font-serif">+</span>
              </div>
              <p className="font-serif text-lg text-charcoal mb-2">More Projects Coming</p>
              <p className="text-charcoal-muted text-sm max-w-xs">
                New community initiatives are in development. Stay tuned.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
