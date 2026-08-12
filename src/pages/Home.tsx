import { useState, useEffect } from 'react'
import { Link } from 'react-router'

const HERO_SLIDES = [
  { img: '/assets/IMG_4075.jpg', icon: '📱', title: 'Tech-Forward Learning', desc: 'Interactive tablets for every learner' },
  { img: '/assets/sports/IMG_3591.jpg', icon: '🏃', title: 'Active Bodies, Active Minds', desc: 'Award-winning physical education program' },
  { img: '/assets/playground.jpeg', icon: '🌳', title: 'Outdoor Adventure', desc: 'Safe and engaging outdoor play areas' },
  { img: '/assets/IMG_4078.jpg', icon: '🎨', title: 'Creative Expression', desc: 'Dedicated spaces for art and music' },
]

const SHOWCASE_VIDEOS = [
  '/assets/class.MOV',
  '/assets/claastime.MOV',
  '/assets/178185839427153.mp4'
]

const PILLARS = [
  { icon: '🎨', title: 'Fun Learning Activities', desc: 'Every day is a new adventure — counting with colorful blocks, storytelling circles, and hands-on discovery projects that spark genuine curiosity.', bg: '#e9dc20', color: '#3d2059' },
  { icon: '🖌️', title: 'Creative Play & Art', desc: "We nurture each child's inner artist through painting, crafts, music, and free-form creative expression in our dedicated art studio.", bg: '#3d2059', color: '#f9efed' },
  { icon: '🤝', title: 'Friends & Social Skills', desc: 'Guided play and group projects help children build lasting friendships and learn to collaborate with kindness and empathy.', bg: '#f1e7a2', color: '#3d2059' },
  { icon: '⭐', title: 'Building Confidence', desc: 'Small wins every day. We celebrate milestones — big and small — to build unshakeable self-belief and lasting independence.', bg: '#6a527d', color: '#f9efed' },
]

const STORIES = [
  { name: 'Sarah Namukasa', role: 'Parent of Aisha, Age 4', quote: 'Kabateraine transformed my daughter completely. She went from shy and reserved to a confident, curious learner in just three months. The teachers here are extraordinary.', avatar: 'SN' },
  { name: 'Dr. Robert Tumwine', role: 'Parent of Emmanuel, Age 5', quote: 'The curriculum blends modern technology with traditional play beautifully. Emmanuel comes home every day bursting with new ideas. Truly remarkable educators.', avatar: 'RT' },
  { name: 'Grace Akello', role: 'Parent of twins Daniel & Diana', quote: 'Finding a kindergarten that nurtures each child individually is rare. Kabateraine does exactly that. The caring environment feels like a second home for my twins.', avatar: 'GA' },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [heroSlide, setHeroSlide] = useState(0)
  const [activeVideo, setActiveVideo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % HERO_SLIDES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="w-full min-h-[92vh] flex items-center relative overflow-hidden" style={{ backgroundColor: '#f9efed' }}>
        <div className="absolute top-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full opacity-20" style={{ backgroundColor: '#e9dc20' }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-[240px] h-[240px] rounded-full opacity-15" style={{ backgroundColor: '#3d2059' }} />

        <div className="max-w-7xl mx-auto px-4 py-16 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-heading font-bold w-fit" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>
              <span>🎉</span><span>2025–2026 Admissions Open</span>
            </div>
            <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#3d2059' }}>
              Growing, Playing, Learning:
            </h1>
            <p className="font-heading font-extrabold leading-snug" style={{ fontSize: 'clamp(1.1rem,2.5vw,1.6rem)', color: '#6a527d' }}>
              A Weekend of Fun, Learning &amp; Discovery!
            </p>
            <p className="font-body text-base leading-relaxed max-w-md" style={{ color: '#6a527d' }}>
              At Kabateraine Kindergarten, every child is a natural explorer. Our nurturing classrooms in Lugazi, Mbarara City blend structured learning with joyful play.
            </p>
            <div className="flex flex-wrap gap-3 items-center mt-2">
              <Link to="/admissions" className="font-heading font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg flex items-center gap-2" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>
                <span>ENROLL NOW!</span>
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>→</span>
              </Link>
              <Link to="/about" className="font-heading font-semibold px-6 py-4 rounded-full text-base border-2 transition-all hover:scale-105" style={{ borderColor: '#3d2059', color: '#3d2059' }}>
                Learn More
              </Link>
            </div>
            <div className="flex gap-6 mt-4 flex-wrap">
              {[{ num: '200+', label: 'Happy Learners' }, { num: '15+', label: 'Expert Educators' }, { num: '8+', label: 'Years of Excellence' }].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-3xl" style={{ color: '#3d2059' }}>{s.num}</span>
                  <span className="font-body text-xs" style={{ color: '#6a527d' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-[40px] rotate-3" style={{ backgroundColor: '#e9dc20', opacity: 0.4 }} />
            <div className="absolute inset-0 rounded-[40px] -rotate-2" style={{ backgroundColor: '#3d2059', opacity: 0.12 }} />
            <div className="relative w-full max-w-md rounded-[36px] overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5', backgroundColor: '#6a527d' }}>
              {HERO_SLIDES.map((slide, i) => (
                <div key={i} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: i === heroSlide ? 1 : 0, zIndex: i === heroSlide ? 10 : 0 }}>
                  <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl px-4 py-3 backdrop-blur-md" style={{ backgroundColor: 'rgba(61,32,89,0.82)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: '#e9dc20' }}>{slide.icon}</div>
                      <div>
                        <div className="font-heading font-bold text-sm" style={{ color: '#e9dc20' }}>{slide.title}</div>
                        <div className="font-body text-xs opacity-80" style={{ color: '#f1e7a2' }}>{slide.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-4 -left-4 px-3 py-2 rounded-2xl shadow-lg font-heading font-bold text-xs z-20" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>🏆 Best in Mbarara</div>
            <div className="absolute bottom-20 -right-4 px-3 py-2 rounded-2xl shadow-lg font-heading font-bold text-xs z-20" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>⭐ 4.9 Rating</div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="w-full py-20" style={{ backgroundColor: '#fff9f8' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#f1e7a2', color: '#3d2059' }}>WHY KABATERAINE</div>
            <h2 className="font-display leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#3d2059' }}>A Place Where Every Child Shines</h2>
            <p className="font-body text-base max-w-xl mx-auto" style={{ color: '#6a527d' }}>Our four founding pillars guide everything we do — from how we arrange the classroom to how we celebrate your child's first big milestone.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-[28px] p-6 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: p.bg, color: p.color }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ backgroundColor: p.color === '#3d2059' ? 'rgba(61,32,89,0.1)' : 'rgba(255,255,255,0.2)' }}>{p.icon}</div>
                <h3 className="font-heading font-extrabold text-lg leading-snug">{p.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-85">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="w-full py-12" style={{ backgroundColor: '#3d2059' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/assets/building.jpeg', alt: 'Campus Life' },
              { src: '/assets/playground.jpeg', alt: 'Play and Grow' },
              { src: '/assets/WhatsApp Image 2026-05-03 at 10.12.21 PM (1).jpeg', alt: 'School Uniform' },
              { src: '/assets/IMG_4076.jpg', alt: 'Learning and Activity' },
            ].map((img, i) => (
              <div key={i} className="rounded-[20px] overflow-hidden" style={{ height: '180px', backgroundColor: '#6a527d' }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="w-full py-20" style={{ backgroundColor: '#3d2059' }}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: 'rgba(233,220,32,0.2)', color: '#e9dc20' }}>SEE US IN ACTION</div>
          <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#e9dc20' }}>Experience the Joy of Learning</h2>
          <div className="relative w-full rounded-[36px] overflow-hidden shadow-2xl" style={{ backgroundColor: '#1a0d2e', aspectRatio: '16/9', border: '2px solid #e9dc20' }}>
            <video 
              key={activeVideo}
              src={SHOWCASE_VIDEOS[activeVideo]} 
              autoPlay 
              muted 
              playsInline 
              onEnded={() => setActiveVideo(prev => (prev + 1) % SHOWCASE_VIDEOS.length)}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20" style={{ backgroundColor: '#fff9f8' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#f1e7a2', color: '#3d2059' }}>PARENT STORIES</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Families Love Kabateraine</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STORIES.map((s, i) => (
              <div
                key={s.name}
                className="rounded-[28px] p-6 flex flex-col gap-4 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: i === activeTestimonial ? '#3d2059' : '#f9efed', border: '1.5px solid', borderColor: i === activeTestimonial ? '#3d2059' : '#f0e0dc' }}
                onClick={() => setActiveTestimonial(i)}
              >
                <div className="font-body text-sm leading-relaxed" style={{ color: i === activeTestimonial ? '#f1e7a2' : '#6a527d' }}>&ldquo;{s.quote}&rdquo;</div>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t" style={{ borderColor: i === activeTestimonial ? 'rgba(255,255,255,0.2)' : '#f0e0dc' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0" style={{ backgroundColor: i === activeTestimonial ? '#e9dc20' : '#3d2059', color: i === activeTestimonial ? '#3d2059' : '#e9dc20' }}>{s.avatar}</div>
                  <div>
                    <div className="font-heading font-bold text-sm" style={{ color: i === activeTestimonial ? '#e9dc20' : '#3d2059' }}>{s.name}</div>
                    <div className="font-body text-xs" style={{ color: i === activeTestimonial ? '#f1e7a2' : '#6a527d' }}>{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/admissions" className="font-heading font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>
              Start Your Child's Journey →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
