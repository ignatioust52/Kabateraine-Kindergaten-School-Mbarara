import { useState } from 'react'
import { Link } from 'react-router'

const PROGRAMMES = [
  { name: 'Baby Class', age: 'Ages 2–3', intake: 'January & September', fee: 'UGX 180,000 / term', spots: 8, icon: '🍼', desc: 'Gentle introduction to structured learning through sensory play, music, and guided exploration in our purpose-built baby room.' },
  { name: 'Nursery', age: 'Ages 3–4', intake: 'January, May & September', fee: 'UGX 220,000 / term', spots: 12, icon: '🌸', desc: 'Social skills, early language, numbers, and creative arts delivered through play-based learning and structured group sessions.' },
  { name: 'Primary One Prep', age: 'Ages 4–5', intake: 'January & September', fee: 'UGX 260,000 / term', spots: 5, icon: '📚', desc: 'Comprehensive school-readiness programme covering literacy, numeracy, science discovery, and self-management skills.' },
  { name: 'Saturday Enrichment', age: 'Ages 3–6', intake: 'Ongoing', fee: 'UGX 80,000 / month', spots: 20, icon: '🎨', desc: 'Weekend art, STEM activities, music, and drama for children who want extra creative enrichment alongside their main schooling.' },
]

const STEPS = [
  { num: '01', title: 'Contact Us', desc: 'Call, WhatsApp, or fill the inquiry form below. Our team responds within 24 hours.' },
  { num: '02', title: 'School Visit', desc: 'We invite you and your child for a guided tour of our campus. No commitment required.' },
  { num: '03', title: 'Application Form', desc: 'Complete a short registration form. We may ask for a brief informal assessment for older children.' },
  { num: '04', title: 'Offer & Acceptance', desc: "We issue a formal offer letter. A deposit of UGX 50,000 secures your child's place." },
  { num: '05', title: 'Welcome Orientation', desc: 'Attend our Parent & Child Orientation Day — meet the teachers and settle in before the first day.' },
]

const FAQS = [
  { q: 'What documents do I need to enroll?', a: "A birth certificate or baptism card, two passport-size photos, and a copy of the parent or guardian's National ID. No prior academic records required for new entrants." },
  { q: 'Do you provide meals?', a: 'Yes — we serve a hot midmorning snack and lunch from our in-house kitchen. Meals are included in the termly fee. We accommodate dietary requirements; please notify us at enrollment.' },
  { q: 'What are your school hours?', a: 'Monday to Friday: 7:30 am – 1:00 pm (standard). Extended care until 4:00 pm is available for an additional fee. Saturday Enrichment runs 8:00 am – 12:00 noon.' },
  { q: 'Is there a school uniform?', a: 'Yes — a purple and yellow uniform available from the school office. Full uniform is required from Week 2 onwards; children may wear comfortable clothing in their first week.' },
  { q: 'Do you accept children with special learning needs?', a: 'Absolutely. We are committed to inclusion and work closely with parents and specialist support services in Mbarara to ensure every child thrives in our environment.' },
]

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({ parentName: '', childName: '', age: '', phone: '', email: '', programme: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="w-full py-20 relative overflow-hidden" style={{ backgroundColor: '#3d2059' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#e9dc20', transform: 'translate(40%,-40%)' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: 'rgba(233,220,32,0.2)', color: '#e9dc20' }}>ADMISSIONS 2025–2026</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#e9dc20' }}>Start Your Child's Journey</h1>
          <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(241,231,162,0.85)' }}>
            We welcome children aged 2–6 across four programmes. Spaces are limited and allocated on a first-come, first-served basis. Don't miss your child's place in our family.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            {[{ label: '🎓 200+ Alumni', }, { label: '📅 3 Intakes per Year' }, { label: '📞 Respond in 24hrs' }].map((b) => (
              <div key={b.label} className="px-4 py-2 rounded-full font-heading font-semibold text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#f1e7a2' }}>{b.label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>OUR PROGRAMMES</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Find the Right Fit for Your Child</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMMES.map((p, i) => (
              <div key={p.name} className="rounded-[28px] overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#fff9f8', border: '1.5px solid #f0e0dc' }}>
                <div className="p-6 flex flex-col items-start gap-3" style={{ backgroundColor: i % 2 === 0 ? '#3d2059' : '#e9dc20' }}>
                  <span className="text-4xl">{p.icon}</span>
                  <h3 className="font-heading font-extrabold text-lg" style={{ color: i % 2 === 0 ? '#e9dc20' : '#3d2059' }}>{p.name}</h3>
                  <div className="font-body text-xs font-semibold" style={{ color: i % 2 === 0 ? 'rgba(241,231,162,0.7)' : 'rgba(61,32,89,0.7)' }}>{p.age}</div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{p.desc}</p>
                  <div className="mt-auto flex flex-col gap-2 pt-4 border-t" style={{ borderColor: '#f0e0dc' }}>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs" style={{ color: '#6a527d' }}>Intake</span>
                      <span className="font-heading font-semibold text-xs" style={{ color: '#3d2059' }}>{p.intake}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs" style={{ color: '#6a527d' }}>Fees</span>
                      <span className="font-heading font-semibold text-xs" style={{ color: '#3d2059' }}>{p.fee}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs" style={{ color: '#6a527d' }}>Spaces left</span>
                      <span className="font-heading font-bold text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: p.spots <= 5 ? '#e9dc20' : '#f1e7a2', color: '#3d2059' }}>{p.spots} remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="w-full py-20" style={{ backgroundColor: '#fff9f8' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: '#f1e7a2', color: '#3d2059' }}>HOW TO APPLY</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#3d2059' }}>Five Simple Steps</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center text-center gap-3 relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-display text-xl font-bold shadow-lg" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>{s.num}</div>
                {i < STEPS.length - 1 && <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-0.5" style={{ backgroundColor: '#f0e0dc', width: 'calc(100% - 56px)' }} />}
                <h3 className="font-heading font-extrabold text-sm" style={{ color: '#3d2059' }}>{s.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: '#6a527d' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form + FAQs */}
      <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="rounded-[32px] p-8" style={{ backgroundColor: '#3d2059' }}>
            <div className="font-heading font-extrabold text-xl mb-6" style={{ color: '#e9dc20' }}>📋 Admission Inquiry Form</div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="text-5xl">🎉</div>
                <h3 className="font-display text-2xl" style={{ color: '#e9dc20' }}>Thank You!</h3>
                <p className="font-body text-sm" style={{ color: '#f1e7a2' }}>We have received your inquiry. Our admissions team will contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="font-heading font-bold px-6 py-3 rounded-full text-sm mt-2" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Parent's Full Name", key: 'parentName', type: 'text', placeholder: 'e.g. Grace Akello' },
                    { label: "Child's Full Name", key: 'childName', type: 'text', placeholder: "e.g. Diana Akello" },
                    { label: "Child's Age", key: 'age', type: 'text', placeholder: 'e.g. 3 years' },
                    { label: 'Phone / WhatsApp', key: 'phone', type: 'tel', placeholder: '+256 7XX XXX XXX' },
                  ].map((f) => (
                    <div key={f.key} className="flex flex-col gap-1">
                      <label className="font-heading font-semibold text-xs" style={{ color: '#f1e7a2' }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="rounded-xl px-4 py-2.5 text-sm font-body outline-none border"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(233,220,32,0.3)', color: '#f9efed' }}
                        onFocus={(e) => (e.target.style.borderColor = '#e9dc20')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(233,220,32,0.3)')}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-heading font-semibold text-xs" style={{ color: '#f1e7a2' }}>Email Address</label>
                  <input type="email" placeholder="parent@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl px-4 py-2.5 text-sm font-body outline-none border"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(233,220,32,0.3)', color: '#f9efed' }}
                    onFocus={(e) => (e.target.style.borderColor = '#e9dc20')} onBlur={(e) => (e.target.style.borderColor = 'rgba(233,220,32,0.3)')} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-heading font-semibold text-xs" style={{ color: '#f1e7a2' }}>Programme of Interest</label>
                  <select value={form.programme} onChange={(e) => setForm({ ...form, programme: e.target.value })}
                    className="rounded-xl px-4 py-2.5 text-sm font-body outline-none border"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(233,220,32,0.3)', color: '#f9efed' }}
                    onFocus={(e) => (e.target.style.borderColor = '#e9dc20')} onBlur={(e) => (e.target.style.borderColor = 'rgba(233,220,32,0.3)')}>
                    <option value="" style={{ color: '#3d2059' }}>Select a programme</option>
                    {PROGRAMMES.map((p) => <option key={p.name} value={p.name} style={{ color: '#3d2059' }}>{p.name} ({p.age})</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-heading font-semibold text-xs" style={{ color: '#f1e7a2' }}>Message (optional)</label>
                  <textarea rows={3} placeholder="Any questions or special requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl px-4 py-2.5 text-sm font-body outline-none border resize-none"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(233,220,32,0.3)', color: '#f9efed' }}
                    onFocus={(e) => (e.target.style.borderColor = '#e9dc20')} onBlur={(e) => (e.target.style.borderColor = 'rgba(233,220,32,0.3)')} />
                </div>
                <button type="submit" className="font-heading font-bold py-4 rounded-xl text-sm transition-all hover:scale-[1.02] shadow-md mt-2" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>
                  Submit Inquiry →
                </button>
              </form>
            )}
          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-4">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold w-fit" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>FREQUENTLY ASKED</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#3d2059' }}>Questions & Answers</h2>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="rounded-[20px] overflow-hidden" style={{ border: '1.5px solid #f0e0dc' }}>
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-heading font-bold text-sm transition-colors"
                    style={{ backgroundColor: openFaq === i ? '#3d2059' : '#fff9f8', color: openFaq === i ? '#e9dc20' : '#3d2059' }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-lg">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4" style={{ backgroundColor: '#f9efed' }}>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="rounded-[24px] p-6 mt-4" style={{ backgroundColor: '#f1e7a2' }}>
              <h3 className="font-heading font-extrabold text-base mb-3" style={{ color: '#3d2059' }}>Still have questions?</h3>
              <p className="font-body text-sm mb-4" style={{ color: '#6a527d' }}>Our admissions team is available Monday–Friday, 8am–5pm. WhatsApp is fastest.</p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://wa.me/256772699225" target="_blank" rel="noreferrer" className="font-heading font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>📱 WhatsApp</a>
                <a href="tel:+256700339836" className="font-heading font-semibold px-5 py-2.5 rounded-full text-sm border-2 transition-all hover:scale-105" style={{ borderColor: '#3d2059', color: '#3d2059' }}>📞 Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
