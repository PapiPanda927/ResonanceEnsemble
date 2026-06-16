import { Music2, Stethoscope, ClipboardList, Brain, HeartPulse, Smile } from 'lucide-react'

const TEAM = [
  {
    name: 'Krushal Panda',
    role: 'Violin / Founder',
    img: '/team/krushal.jpg',
    imgPos: '50% 30%',
    bio: 'Krushal is a senior at The Woodlands College Park High School and has played the violin for seven years. He founded Resonance Ensemble to bring live music to assisted living and rehabilitation communities and is interested in neuroscience, medicine, and the ways music can support cognitive and emotional well-being.',
  },
  {
    name: 'Andy',
    role: 'Violin / Co-Founder',
    img: '/team/andy.png',
    bio: 'Andy is a senior at The Woodlands College Park High School and has played the violin for seven years. As a co-founder of Resonance Ensemble, he is passionate about using music to connect with others and hopes to pursue a career in healthcare, with a particular interest in sports medicine, orthopedics, and rehabilitation.',
  },
  {
    name: 'Hamilton',
    role: 'Cello / Director',
    img: '/team/hamilton.png',
    bio: 'Hamilton is a senior at The Woodlands College Park High School and has played the cello for seven years. He helps guide the musical direction and is interested in government, political science, and international affairs, with a passion for leadership and civic engagement.',
  },
  {
    name: 'Camden',
    role: 'Viola / Outreach Lead',
    img: '/team/camden.png',
    bio: 'Camden is a junior at The Woodlands College Park High School and has played the viola for six years. He leads community outreach efforts for the ensemble and enjoys building partnerships that expand access to music and service opportunities throughout the Greater Houston area.',
  },
]

const APPROACH = [
  {
    Icon: Music2,
    title: 'Curated Repertoire',
    desc: 'We carefully select music known to activate autobiographical memory — familiar melodies from patients\' formative years that can spark recognition and emotional connection, even in advanced stages of dementia.',
  },
  {
    Icon: Stethoscope,
    title: 'Clinical Collaboration',
    desc: 'Every session is designed in consultation with healthcare professionals, including occupational therapists and memory care specialists, ensuring performances are appropriate and beneficial for each resident population.',
  },
  {
    Icon: ClipboardList,
    title: 'Structured Sessions',
    desc: 'Our performances follow a structured arc for cognitive engagement — opening with familiar songs, moving through rhythmic participation, and closing with reflective, calming pieces — tailored for dementia and cognitive decline patients.',
  },
]

function Avatar({ src, name, imgPos = '50% top' }) {
  return (
    <img
      src={src}
      alt={name}
      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-2 ring-primary/20"
      style={{ objectPosition: imgPos }}
    />
  )
}

export default function About() {
  return (
    <div className="page-enter pt-20">

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-cream mb-4">About Us</h1>
          <p className="text-cream/70 text-lg font-light">
            A student-founded initiative rooted in compassion and music.
          </p>
        </div>
      </section>

      {/* ── Mission & Origin ─────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-semibold text-xs tracking-widest uppercase">
              Our Mission
            </span>
            <h2 className="text-3xl font-serif text-charcoal mt-2 mb-6">Where It All Began</h2>
            {/* PLACEHOLDER: Replace paragraphs below with the actual origin story */}
            <p className="text-charcoal-muted leading-relaxed mb-4">
              The Resonance Ensemble was founded in 2024 by a group of student
              musicians at The Woodlands College Park High School in Houston, Texas. 
              What started as a single performance at a local assisted living facility 
              grew into a structured initiative reaching communities across the city.
            </p>
            <p className="text-charcoal-muted leading-relaxed">
              Driven by the belief that access to live music is a form of care,
              the founders partnered with healthcare professionals and facility administrators to
              develop a therapeutic framework that guides every performance. Today the ensemble
              continues to grow, welcoming new members who share that founding vision.
            </p>
          </div>

          {/* Pull-quote card */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            {/* PLACEHOLDER: Replace with an actual quote from a founder or key member */}
            <blockquote className="text-charcoal font-serif text-xl italic leading-relaxed">
              "We started Resonance because we realized music doesn't have to stay on a stage.
               Some of the most meaningful performances happen in places where people simply need 
               connection, comfort, and something to look forward to."
            </blockquote>
            <p className="mt-5 text-charcoal-muted text-sm">— Krushal Panda, Founder</p>
          </div>
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────────────── */}
      <section className="bg-cream-light py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-xs tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-3xl font-serif text-charcoal mt-2">Our Therapeutic Approach</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {APPROACH.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-cream-dark shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-3">{title}</h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Science Behind the Music ─────────────────────────────── */}
      <section className="bg-primary py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-xs tracking-widest uppercase">
              Evidence-Based Practice
            </span>
            <h2 className="text-3xl font-serif text-cream mt-2">The Science Behind the Music</h2>
            <p className="text-cream/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Our work is grounded in decades of peer-reviewed research on music's measurable impact
              on the brain, memory, and wellbeing.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            <div className="bg-cream/8 rounded-2xl p-7 border border-cream/10">
              <div className="w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center mb-5">
                <Brain size={18} className="text-gold" />
              </div>
              <p className="font-serif text-4xl font-bold text-cream mb-2">800+</p>
              <p className="text-cream/70 text-sm leading-relaxed">
                peer-reviewed studies documenting music therapy's cognitive and psychological benefits,
                per the American Music Therapy Association (AMTA).
              </p>
            </div>
            <div className="bg-cream/8 rounded-2xl p-7 border border-cream/10">
              <div className="w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center mb-5">
                <HeartPulse size={18} className="text-gold" />
              </div>
              <p className="font-serif text-4xl font-bold text-cream mb-2">~40%</p>
              <p className="text-cream/70 text-sm leading-relaxed">
                reduction in agitation and anxiety among dementia patients during and after structured
                music therapy sessions, found across multiple clinical trials.
              </p>
            </div>
            <div className="bg-cream/8 rounded-2xl p-7 border border-cream/10">
              <div className="w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center mb-5">
                <Smile size={18} className="text-gold" />
              </div>
              <p className="font-serif text-4xl font-bold text-cream mb-2">+25%</p>
              <p className="text-cream/70 text-sm leading-relaxed">
                improvement in quality-of-life scores for older adults receiving live music
                interventions, per a 2017 Cochrane systematic review of music therapy in dementia care.
              </p>
            </div>
          </div>

          {/* Research findings */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream/5 rounded-2xl p-7 border border-cream/10">
              <h3 className="font-serif text-lg text-cream mb-3">Memory Preservation in Alzheimer's</h3>
              <p className="text-cream/65 text-sm leading-relaxed">
                Music-evoked autobiographical memories are stored in the medial prefrontal cortex —
                one of the last brain regions damaged by Alzheimer's disease. Research by Petr Janata
                (UC Davis, 2009) demonstrated that familiar music activates this region even in
                patients with significant cognitive decline, enabling emotional recall when verbal
                memory has been lost.
              </p>
            </div>
            <div className="bg-cream/5 rounded-2xl p-7 border border-cream/10">
              <h3 className="font-serif text-lg text-cream mb-3">Dopamine & Emotional Response</h3>
              <p className="text-cream/65 text-sm leading-relaxed">
                A landmark 2011 study in <em>Nature Neuroscience</em> (Salimpoor et al.) showed
                that listening to pleasurable music triggers dopamine release in the brain's reward
                system — the same pathway activated by food and social bonding. This neurochemical
                response explains why music can elevate mood, reduce perceived pain, and create
                genuine feelings of connection.
              </p>
            </div>
            <div className="bg-cream/5 rounded-2xl p-7 border border-cream/10">
              <h3 className="font-serif text-lg text-cream mb-3">Stress & Cortisol Reduction</h3>
              <p className="text-cream/65 text-sm leading-relaxed">
                A meta-analysis of 400 studies conducted by Daniel Levitin (McGill University) found
                that music consistently lowers cortisol — the body's primary stress hormone — while
                boosting immunoglobulin A (IgA), an antibody linked to immune function. Listening
                to live music produced stronger effects than recorded music alone.
              </p>
            </div>
            <div className="bg-cream/5 rounded-2xl p-7 border border-cream/10">
              <h3 className="font-serif text-lg text-cream mb-3">Motor Function & Rhythm</h3>
              <p className="text-cream/65 text-sm leading-relaxed">
                Neurologist Oliver Sacks documented extensively that rhythmic auditory stimulation
                can re-engage movement in patients with Parkinson's disease and stroke-related motor
                impairment. The brain's coupling of rhythm to motor output — a process called
                entrainment — means music can restore gait and coordination when conventional
                therapies have limited effect.
              </p>
            </div>
          </div>

          <p className="text-center text-cream/40 text-xs mt-10">
            Sources: AMTA, Janata (2009) <em>Cerebral Cortex</em>, Salimpoor et al. (2011) <em>Nature Neuroscience</em>,
            Levitin &amp; Mona (2013) <em>Trends in Cognitive Sciences</em>, Cochrane Review (2017), Sacks <em>Musicophilia</em> (2007)
          </p>
        </div>
      </section>

      {/* ── Meet the Team ────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-xs tracking-widest uppercase">
              The People
            </span>
            <h2 className="text-3xl font-serif text-charcoal mt-2">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEAM.map(({ name, role, bio, img, imgPos }) => (
              <div key={name} className="text-center">
                <Avatar src={img} name={name} imgPos={imgPos} />
                <h3 className="font-serif text-lg text-charcoal leading-tight">{name}</h3>
                <p className="text-primary text-sm font-medium mt-1 mb-3">{role}</p>
                <p className="text-charcoal-muted text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What They're Saying ──────────────────────────────────────── */}
      <section className="bg-cream-light py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-xs tracking-widest uppercase">
              Voices from the Community
            </span>
            <h2 className="text-3xl font-serif text-charcoal mt-2">What They're Saying</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm flex flex-col">
              <svg className="w-8 h-8 text-primary/20 mb-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              {/* PLACEHOLDER: Replace with an actual quote from a staff member or resident at this venue */}
              <blockquote className="font-serif text-lg text-charcoal italic leading-relaxed flex-1">
                "It was wonderful—really wonderful. You should have seen the excitement and appreciation 
                in the eyes of our residents when they realized what was happening. They danced to the music, 
                sang along, and continued enjoying time with the performers and their families after the concert."
              </blockquote>
              <div className="mt-6 pt-5 border-t border-cream-dark">
                {/* PLACEHOLDER: Replace with the actual name and title of the person quoted */}
                <p className="text-charcoal font-semibold text-sm">Marketing Director</p>
                {/* PLACEHOLDER: Replace with the actual venue/facility name */}
                <p className="text-primary text-xs mt-0.5 font-medium tracking-wide">Chateaux Serenity Assisted Living & Memory Care Facility</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm flex flex-col">
              <svg className="w-8 h-8 text-primary/20 mb-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              {/* PLACEHOLDER: Replace with an actual quote from a staff member or resident at this venue */}
              <blockquote className="font-serif text-lg text-charcoal italic leading-relaxed flex-1">
                "Our residents were smiling, clapping along, and talking about the music long after the performance ended. 
                The ensemble brought a wonderful sense of energy and connection to our community."
              </blockquote>
              <div className="mt-6 pt-5 border-t border-cream-dark">
                {/* PLACEHOLDER: Replace with the actual name and title of the person quoted */}
                <p className="text-charcoal font-semibold text-sm">Activities Director</p>
                {/* PLACEHOLDER: Replace with the actual venue/facility name */}
                <p className="text-primary text-xs mt-0.5 font-medium tracking-wide">The Forum at The Woodlands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
