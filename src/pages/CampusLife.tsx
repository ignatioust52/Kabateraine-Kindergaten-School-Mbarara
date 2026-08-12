import { useState } from 'react'
import { Link } from 'react-router'

const TABS = ['Daily Life', 'Activities', 'Meals & Nutrition', 'Our Spaces']

const DAILY_SCHEDULE = [
  { time: '7:30 am', activity: 'Arrival & Morning Circle', icon: '🌅', desc: 'Children arrive, settle in, and gather for our welcome circle — songs, weather check, and the day preview.' },
  { time: '8:00 am', activity: 'Structured Learning Block', icon: '📖', desc: 'Focused literacy and numeracy sessions in small groups with personalized teacher support.' },
  { time: '9:15 am', activity: 'Snack & Free Play', icon: '🍎', desc: 'Nutritious midmorning snack followed by guided free play — indoors or in our outdoor garden.' },
  { time: '10:00 am', activity: 'Creative Workshop', icon: '🎨', desc: 'Rotating art, music, drama, or STEM activity led by our specialist educators.' },
  { time: '11:00 am', activity: 'Outdoor Physical Play', icon: '⚽', desc: 'Movement, sports games, and playground time to develop gross motor skills and social bonds.' },
  { time: '11:45 am', activity: 'Lunch & Rest', icon: '🍽️', desc: 'Hot balanced meal from our kitchen, followed by quiet rest or story time for younger children.' },
  { time: '12:30 pm', activity: 'Afternoon Activities', icon: '🧩', desc: 'Puzzles, reading, independent projects, or tablet-assisted learning for older learners.' },
  { time: '1:00 pm', activity: 'Dismissal', icon: '🚌', desc: 'Standard dismissal. Extended care available until 4:00 pm for an additional fee.' },
]

const ACTIVITIES = [
  { name: 'Art & Painting Studio', icon: '🖼️', img: '/assets/IMG_4084.jpg', desc: 'A dedicated studio stocked with watercolours, clay, recycled materials, and fabric — where small hands create big things.' },
  { name: 'STEM Discovery Corner', icon: '🔬', img: '/assets/IMG_4079.jpg', desc: 'Tablet-assisted experiments, building blocks, and guided science projects that make children natural investigators.' },
  { name: 'Music & Movement', icon: '🎵', img: '/assets/sports/IMG_4088.jpg', desc: 'Drums, xylophones, singing, and movement sessions every week — because rhythm is the foundation of language.' },
  { name: 'Garden & Nature Club', icon: '🌿', img: '/assets/playground.jpeg', desc: 'Children plant, water, and harvest vegetables in our school garden — learning biology, responsibility, and patience.' },
  { name: 'Story & Drama Theatre', icon: '🎭', img: '/assets/sports/IMG_4102.jpg', desc: 'Puppet shows, dress-up, and storytelling performance — building vocabulary, confidence, and imagination.' },
  { name: 'Physical Education', icon: '⚽', img: '/assets/sports/IMG_3590.jpg', desc: 'Playground games, obstacle courses, and team sports that build coordination, resilience, and teamwork.' },
]

const MEALS = [
  { meal: 'Morning Snack', time: '9:15 am', items: ['Fresh fruit (seasonal)', 'Porridge or millet biscuits', 'Fortified milk'], icon: '🍎' },
  { meal: 'Lunch', time: '11:45 am', items: ['Rice or matooke', 'Beans or groundnut stew', 'Steamed greens', 'Fresh juice'], icon: '🍽️' },
  { meal: 'Extended Care Snack', time: '2:30 pm', items: ['Sandwiches or mandazi', 'Fresh fruit or yoghurt', 'Water'], icon: '🥪' },
]

const SPACES = [
  { name: 'Baby Class Room', desc: 'Soft flooring, low shelving, sensory bins, and reading nooks — designed for toddlers at every developmental stage.', img: '/assets/IMG_4081.jpg', tag: 'Ages 2–3' },
  { name: 'Main Learning Hall', desc: 'Bright, open classroom with low wooden tables in red and blue, individual cubbies, and an expansive blackboard wall.', img: '/assets/IMG_4082.jpg', tag: 'Ages 3–5' },
  { name: 'Outdoor Garden', desc: 'A fenced outdoor space with climbing structures, a sand pit, and our vegetable garden — safe, shaded, and full of adventure.', img: '/assets/building.jpeg', tag: 'All Ages' },
  { name: 'Art & STEM Studio', desc: 'Dedicated creative workshop space with washable surfaces, art supplies, building kits, and tablet stations.', img: '/assets/IMG_4085.jpg', tag: 'Workshop' },
]

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="w-full py-20 relative overflow-hidden" style={{ backgroundColor: '#3d2059' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#e9dc20', transform: 'translate(40%,-40%)' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: 'rgba(233,220,32,0.2)', color: '#e9dc20' }}>LIFE AT KABATERAINE</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#e9dc20' }}>Campus Life</h1>
          <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(241,231,162,0.85)' }}>
            From morning circle to dismissal, every moment at Kabateraine is designed with intention. Explore how a typical day unfolds, what activities we offer, and the spaces where learning comes alive.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="w-full sticky top-[73px] z-40 border-b" style={{ backgroundColor: '#fff9f8', borderColor: '#f0e0dc' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="flex-shrink-0 px-5 py-2 rounded-full font-heading font-bold text-sm transition-all"
                style={{
                  backgroundColor: activeTab === i ? '#3d2059' : 'transparent',
                  color: activeTab === i ? '#e9dc20' : '#6a527d',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab: Daily Life */}
      {activeTab === 0 && (
        <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>A TYPICAL DAY</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Structured, Joyful & Purposeful</h2>
            </div>
            <div className="flex flex-col gap-4">
              {DAILY_SCHEDULE.map((item, i) => (
                <div key={item.time} className="flex gap-4 items-start rounded-[20px] p-5 transition-all hover:shadow-md" style={{ backgroundColor: i % 2 === 0 ? '#fff9f8' : '#f1e7a2', border: '1.5px solid', borderColor: i % 2 === 0 ? '#f0e0dc' : '#dbd04c' }}>
                  <div className="flex-shrink-0 flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: '#3d2059' }}>{item.icon}</div>
                    <span className="font-body text-xs font-semibold" style={{ color: '#6a527d' }}>{item.time}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-base mb-1" style={{ color: '#3d2059' }}>{item.activity}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab: Activities */}
      {activeTab === 1 && (
        <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>ENRICHMENT ACTIVITIES</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Six Ways We Inspire</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACTIVITIES.map((a, i) => (
                <div key={a.name} className="rounded-[28px] overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl" style={{ border: '1.5px solid #f0e0dc' }}>
                  <div className="relative overflow-hidden" style={{ height: '200px', backgroundColor: '#6a527d' }}>
                    <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: '#3d2059' }}>{a.icon}</div>
                  </div>
                  <div className="p-5 flex flex-col gap-2" style={{ backgroundColor: '#fff9f8' }}>
                    <h3 className="font-heading font-extrabold text-base" style={{ color: '#3d2059' }}>{a.name}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab: Meals */}
      {activeTab === 2 && (
        <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>MEALS & NUTRITION</div>
              <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Fuelling Curious Minds</h2>
              <p className="font-body text-base max-w-xl mx-auto" style={{ color: '#6a527d' }}>We serve fresh, balanced, locally sourced meals prepared in our on-site kitchen every school day. All meals are included in the termly fee.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {MEALS.map((m) => (
                <div key={m.meal} className="rounded-[28px] overflow-hidden" style={{ border: '1.5px solid #f0e0dc' }}>
                  <div className="p-5 flex items-center gap-3" style={{ backgroundColor: '#3d2059' }}>
                    <span className="text-3xl">{m.icon}</span>
                    <div>
                      <div className="font-heading font-extrabold text-base" style={{ color: '#e9dc20' }}>{m.meal}</div>
                      <div className="font-body text-xs" style={{ color: '#f1e7a2' }}>{m.time}</div>
                    </div>
                  </div>
                  <div className="p-5" style={{ backgroundColor: '#fff9f8' }}>
                    <ul className="flex flex-col gap-2">
                      {m.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-body text-sm" style={{ color: '#6a527d' }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#e9dc20' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[24px] p-6 flex flex-col gap-3" style={{ backgroundColor: '#f1e7a2' }}>
              <h3 className="font-heading font-extrabold text-base" style={{ color: '#3d2059' }}>🥜 Allergy & Dietary Policy</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>We take food safety seriously. All dietary requirements — including nut allergies, lactose intolerance, and religious dietary restrictions — are accommodated. Please inform us in full at the point of enrollment so we can update our kitchen records before your child's first day.</p>
            </div>
          </div>
        </section>
      )}

      {/* Tab: Spaces */}
      {activeTab === 3 && (
        <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>OUR SPACES</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Designed at a Child's Scale</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {SPACES.map((s, i) => (
                <div key={s.name} className="rounded-[28px] overflow-hidden transition-all hover:shadow-xl" style={{ border: '1.5px solid #f0e0dc' }}>
                  <div className="relative overflow-hidden" style={{ height: '260px', backgroundColor: '#6a527d' }}>
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full font-heading font-bold text-xs" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>{s.tag}</div>
                  </div>
                  <div className="p-6" style={{ backgroundColor: i % 2 === 0 ? '#fff9f8' : '#f9efed' }}>
                    <h3 className="font-heading font-extrabold text-lg mb-2" style={{ color: '#3d2059' }}>{s.name}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Life in Motion Videos */}
      <section className="w-full py-16" style={{ backgroundColor: '#fff9f8' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#f1e7a2', color: '#3d2059' }}>LIFE IN MOTION</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Sights and Sounds of Kabateraine</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[28px] overflow-hidden shadow-xl" style={{ backgroundColor: '#1a0d2e', aspectRatio: '16/9', border: '1.5px solid #f0e0dc' }}>
              <video src="/assets/break.MOV" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[28px] overflow-hidden shadow-xl" style={{ backgroundColor: '#1a0d2e', aspectRatio: '16/9', border: '1.5px solid #f0e0dc' }}>
              <video src="/assets/video.MOV" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16" style={{ backgroundColor: '#3d2059' }}>
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5 items-center">
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#e9dc20' }}>Come See It for Yourself</h2>
          <p className="font-body text-base" style={{ color: 'rgba(241,231,162,0.85)' }}>Book a free campus tour and let your child experience our classrooms, garden, and team firsthand.</p>
          <Link to="/admissions" className="font-heading font-bold px-10 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>
            Book a Campus Tour →
          </Link>
        </div>
      </section>
    </>
  )
}
