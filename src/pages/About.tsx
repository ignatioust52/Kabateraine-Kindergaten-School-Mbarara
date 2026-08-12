import { Link } from 'react-router'

const TEAM = [
  { name: 'Mrs. Patricia Kabateraine', role: 'Founder & Head Teacher', exp: '18 years', img: '/assets/leaders.jpeg', bio: 'A pioneer of early-childhood education in Western Uganda, Patricia founded Kabateraine with a single vision: every child deserves a joyful start.' },
  { name: 'Mr. Daniel Mugisha', role: 'Deputy Head & Curriculum Lead', exp: '12 years', img: '/assets/IMG_4077.jpg', bio: 'Daniel designs our award-winning blended curriculum, weaving Ugandan cultural values with modern pedagogical research.' },
  { name: 'Ms. Joy Atugonza', role: 'Early Years Specialist', exp: '9 years', img: '/assets/IMG_4078.jpg', bio: 'Joy leads our Nursery and Baby Class programmes, specialising in play-based development and sensory learning environments.' },
  { name: 'Mr. Samuel Rwabukuru', role: 'Physical Education & Outdoor Learning', exp: '7 years', img: '/assets/sports/IMG_3591.jpg', bio: 'Samuel runs our outdoor adventure curriculum, believing that active bodies grow sharper minds.' },
]

const VALUES = [
  { icon: '❤️', title: 'Warmth', desc: 'Every child is welcomed as family. Our environment radiates genuine care, belonging, and unconditional encouragement.' },
  { icon: '🔍', title: 'Curiosity', desc: 'We protect and amplify the natural curiosity children are born with, turning every question into an adventure.' },
  { icon: '🌍', title: 'Community', desc: 'Rooted in Ugandan culture, we connect children to their heritage while preparing them to engage with the wider world.' },
  { icon: '🎯', title: 'Excellence', desc: 'We hold high expectations for every child and support them with the resources and encouragement to exceed them.' },
  { icon: '🤲', title: 'Inclusion', desc: 'Every learning style, every background, every ability — welcome, celebrated, and genuinely supported here.' },
  { icon: '🌱', title: 'Growth', desc: 'Progress, not perfection. We measure success by how each unique child develops over time — not against others.' },
]

const MILESTONES = [
  { year: '2017', event: 'School founded by Mrs. Patricia Kabateraine with 12 enrolled children' },
  { year: '2018', event: 'Expanded to Baby Class, Nursery, and Primary One programmes' },
  { year: '2020', event: 'Introduced tablet-assisted learning — first kindergarten in Mbarara to do so' },
  { year: '2022', event: 'Awarded Best Early Childhood Centre, Mbarara City Education Awards' },
  { year: '2023', event: 'New outdoor playground and science discovery garden completed' },
  { year: '2025', event: '200+ enrolled learners; waiting list for Baby Class opened' },
]

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="w-full py-20 relative overflow-hidden" style={{ backgroundColor: '#3d2059' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#e9dc20', transform: 'translate(40%, -40%)' }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10" style={{ backgroundColor: '#e9dc20', transform: 'translate(-30%, 30%)' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: 'rgba(233,220,32,0.2)', color: '#e9dc20' }}>OUR STORY</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#e9dc20' }}>About Kabateraine</h1>
          <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(241,231,162,0.85)' }}>
            Founded in 2017 on McAllister Road in the heart of Mbarara City, Kabateraine Kindergarten has grown from a 12-child classroom into one of Western Uganda's most celebrated early learning centres.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <Link to="/admissions" className="font-heading font-bold px-7 py-3 rounded-full text-sm transition-all hover:scale-105" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>Enroll Today →</Link>
            <Link to="/campus-life" className="font-heading font-semibold px-7 py-3 rounded-full text-sm border-2 transition-all hover:scale-105" style={{ borderColor: '#e9dc20', color: '#e9dc20' }}>See Campus Life</Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold w-fit" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>MISSION & VISION</div>
            <h2 className="font-display leading-tight" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#3d2059' }}>Row Your Boat with Purpose</h2>
            <div className="flex flex-col gap-5">
              <div className="rounded-[24px] p-6" style={{ backgroundColor: '#3d2059' }}>
                <div className="font-heading font-extrabold text-sm mb-2" style={{ color: '#e9dc20' }}>🎯 Our Mission</div>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#f1e7a2' }}>
                  To provide a nurturing, inclusive, and stimulating early learning environment where every child in Mbarara City develops the curiosity, confidence, and character to thrive throughout their educational journey and beyond.
                </p>
              </div>
              <div className="rounded-[24px] p-6" style={{ backgroundColor: '#f1e7a2' }}>
                <div className="font-heading font-extrabold text-sm mb-2" style={{ color: '#3d2059' }}>🔭 Our Vision</div>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>
                  To be the leading model of joyful, culturally-rooted, and globally-informed early childhood education in Uganda — proving that the best start in life is one filled with wonder, play, and belonging.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-xl" style={{ height: '420px', backgroundColor: '#6a527d' }}>
              <img src="/assets/IMG_4075.jpg" alt="Bright kindergarten classroom interior" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-[20px] px-5 py-4 shadow-lg" style={{ backgroundColor: '#e9dc20' }}>
              <div className="font-display text-3xl" style={{ color: '#3d2059' }}>⛵</div>
              <div className="font-heading font-extrabold text-xs mt-1" style={{ color: '#3d2059' }}>Row Your Boat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20" style={{ backgroundColor: '#fff9f8' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#f1e7a2', color: '#3d2059' }}>WHAT WE STAND FOR</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="rounded-[24px] p-6 flex flex-col gap-3 transition-all hover:-translate-y-1 hover:shadow-lg" style={{ backgroundColor: i % 3 === 1 ? '#3d2059' : '#f9efed', border: '1.5px solid', borderColor: i % 3 === 1 ? '#3d2059' : '#f0e0dc' }}>
                <span className="text-3xl">{v.icon}</span>
                <h3 className="font-heading font-extrabold text-lg" style={{ color: i % 3 === 1 ? '#e9dc20' : '#3d2059' }}>{v.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: i % 3 === 1 ? '#f1e7a2' : '#6a527d' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>OUR JOURNEY</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Eight Years of Growing Together</h2>
          </div>
          <div className="flex flex-col gap-0">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm font-bold z-10" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>{m.year.slice(2)}</div>
                  {i < MILESTONES.length - 1 && <div className="w-0.5 flex-1 min-h-[40px]" style={{ backgroundColor: '#f0e0dc' }} />}
                </div>
                <div className="rounded-[20px] p-5 mb-4 flex-1" style={{ backgroundColor: i % 2 === 0 ? '#fff9f8' : '#f1e7a2', border: '1.5px solid', borderColor: i % 2 === 0 ? '#f0e0dc' : '#dbd04c' }}>
                  <div className="font-heading font-extrabold text-sm mb-1" style={{ color: '#3d2059' }}>{m.year}</div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-20" style={{ backgroundColor: '#fff9f8' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>MEET THE TEAM</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>The Educators Behind the Magic</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t) => (
              <div key={t.name} className="rounded-[28px] overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#f9efed', border: '1.5px solid #f0e0dc' }}>
                <div className="relative overflow-hidden" style={{ height: '220px', backgroundColor: '#6a527d' }}>
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 rounded-xl px-2.5 py-1 font-heading font-bold text-xs" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>{t.exp}</div>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-heading font-extrabold text-base leading-snug" style={{ color: '#3d2059' }}>{t.name}</h3>
                  <div className="font-body text-xs font-semibold" style={{ color: '#6a527d' }}>{t.role}</div>
                  <p className="font-body text-xs leading-relaxed mt-1" style={{ color: '#6a527d' }}>{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16" style={{ backgroundColor: '#3d2059' }}>
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5 items-center">
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#e9dc20' }}>Ready to Join Our Family?</h2>
          <p className="font-body text-base" style={{ color: 'rgba(241,231,162,0.85)' }}>Spaces for 2025–2026 are filling quickly. Secure your child's place in one of Mbarara's most loved kindergartens.</p>
          <Link to="/admissions" className="font-heading font-bold px-10 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>
            Apply for Admission →
          </Link>
        </div>
      </section>
    </>
  )
}
