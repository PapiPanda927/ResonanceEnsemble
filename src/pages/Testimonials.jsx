import { ImageIcon, Play } from 'lucide-react'

const TESTIMONIALS = [
  {
    // PLACEHOLDER: Replace with actual testimonial from Chateaux Serenity
    quote:
      "PLACEHOLDER — A heartfelt testimonial from a resident, family member, or staff at Chateaux Serenity describing how the performance affected them and what the experience meant to them personally.",
    name: 'PLACEHOLDER NAME',
    affiliation: 'Chateaux Serenity Assisted Living Facility',
  },
  {
    quote:
      "PLACEHOLDER — A meaningful quote about the impact of the Resonance Ensemble's visit, describing a specific moment or the general atmosphere of warmth and engagement during the performance.",
    name: 'PLACEHOLDER NAME',
    affiliation: 'PLACEHOLDER — Facility / Organization Name',
  },
  {
    quote:
      "PLACEHOLDER — A quote from a healthcare professional or facility administrator describing the therapeutic benefits they observed following the ensemble's performances, including any measurable changes in resident engagement or mood.",
    name: 'PLACEHOLDER NAME',
    affiliation: 'PLACEHOLDER — Facility / Organization Name',
  },
  {
    quote:
      "PLACEHOLDER — A quote from a family member whose loved one resides at one of the facilities, describing the visible effect of the music on their family member during and after the performance.",
    name: 'PLACEHOLDER NAME',
    affiliation: 'PLACEHOLDER — Family member / Community member',
  },
]

// PLACEHOLDER: Replace with actual photo count once images are available
const GALLERY_COUNT = 6

export default function Testimonials() {
  return (
    <div className="page-enter pt-20">

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-cream mb-4">Testimonials</h1>
          <p className="text-cream/70 text-lg font-light">
            Stories from the communities we've had the privilege to serve.
          </p>
        </div>
      </section>

      {/* ── Testimonial Cards ────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-7">
            {TESTIMONIALS.map(({ quote, name, affiliation }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm flex flex-col"
              >
                {/* Opening quote mark */}
                <span className="font-serif text-6xl text-gold/50 leading-none select-none -mt-2 mb-2">
                  &ldquo;
                </span>
                <p className="text-charcoal leading-relaxed italic flex-1 mb-6">{quote}</p>
                <div className="border-t border-cream-dark pt-5">
                  <p className="font-semibold text-charcoal text-sm">{name}</p>
                  <p className="text-charcoal-muted text-xs mt-0.5">{affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ────────────────────────────────────────────── */}
      <section className="bg-cream-light py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-xs tracking-widest uppercase">
              Gallery
            </span>
            <h2 className="text-3xl font-serif text-charcoal mt-2">Photos from Our Performances</h2>
          </div>

          {/*
            PLACEHOLDER GALLERY
            To add real photos:
            1. Drop image files into /public/gallery/  (e.g. photo-1.jpg … photo-6.jpg)
            2. Replace each placeholder tile below with:
               <img
                 src="/gallery/photo-N.jpg"
                 alt="Performance at [Facility Name]"
                 className="w-full h-full object-cover"
               />
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: GALLERY_COUNT }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-cream-dark rounded-xl border-2 border-dashed border-cream-dark/80 flex flex-col items-center justify-center overflow-hidden"
              >
                <ImageIcon size={28} className="text-charcoal-muted/30 mb-2" />
                <p className="text-charcoal-muted/50 text-xs">Photo {i + 1}</p>
                <p className="text-charcoal-muted/35 text-xs">Drop image here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Performance (YouTube embed) ─────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold text-xs tracking-widest uppercase">
              Watch
            </span>
            <h2 className="text-3xl font-serif text-charcoal mt-2">Featured Performance</h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-md bg-cream-light">
            {/*
              PLACEHOLDER: Replace this entire block with the actual YouTube embed:

              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="The Resonance Ensemble — Featured Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full block"
              />
            */}
            <div className="w-full aspect-video flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Play size={24} className="text-cream ml-1" fill="currentColor" />
              </div>
              <div className="text-center">
                <p className="font-serif text-lg text-charcoal">Featured Performance</p>
                <p className="text-charcoal-muted text-sm mt-1">
                  PLACEHOLDER — paste YouTube embed code here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
