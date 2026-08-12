import { useState } from 'react'

type Tab = 'dashboard' | 'reports' | 'messages' | 'payments' | 'resources'

const DEMO_CHILD = {
  name: 'Aisha Namukasa',
  class: 'Nursery',
  teacher: 'Ms. Joy Atugonza',
  attendance: 92,
  avatar: 'AN',
}

const ANNOUNCEMENTS = [
  { date: 'Aug 12, 2025', title: 'Term 3 Begins — 1 September 2025', body: 'We are delighted to welcome all learners back for Term 3. Please ensure uniforms are ready and fees are cleared before the first day.', tag: 'Important', tagColor: '#e9dc20' },
  { date: 'Aug 8, 2025', title: 'Parent-Teacher Day — 22 August', body: 'Individual 15-minute slots are available from 9am – 1pm. Please book your slot using the form below or WhatsApp the front office.', tag: 'Event', tagColor: '#6a527d' },
  { date: 'Jul 30, 2025', title: 'New Library Books Arrived!', body: 'We have added 60 new Ugandan-authored picture books to our reading corner. Children may begin borrowing from Week 2 of Term 3.', tag: 'Update', tagColor: '#3d2059' },
]

const REPORTS = [
  { term: 'Term 2, 2025', date: 'Jul 15, 2025', grade: 'Excellent', score: 88, teacher: 'Ms. Joy Atugonza', comment: 'Aisha has shown remarkable growth in phonics and number recognition this term. Her social skills continue to blossom. Highly recommended for Primary One Prep.' },
  { term: 'Term 1, 2025', date: 'Apr 8, 2025', grade: 'Very Good', score: 81, teacher: 'Ms. Joy Atugonza', comment: 'A wonderful start to the year. Aisha settled quickly and already leads the class in storytelling circle. Continue practising letter formation at home.' },
  { term: 'Term 3, 2024', date: 'Dec 12, 2024', grade: 'Good', score: 74, teacher: 'Mr. Daniel Mugisha', comment: "Aisha is developing well. She is gaining confidence in group activities. We'd love to see more participation in outdoor learning next term." },
]

const MESSAGES = [
  { from: 'Ms. Joy Atugonza', role: 'Class Teacher', time: 'Today, 10:14 am', msg: "Good morning! Just a reminder that tomorrow is Creative Wednesday — please send Aisha in old clothes or a painting apron, as we'll be doing clay work. Thanks! 😊", unread: true },
  { from: 'Front Office', role: 'Administration', time: 'Yesterday, 3:40 pm', msg: 'Your Term 3 fee statement is ready. Please log in to the Payments section to view and settle before 31 August 2025. Thank you.', unread: true },
  { from: 'Mrs. Patricia Kabateraine', role: 'Head Teacher', time: 'Aug 10', msg: 'Dear parents, we are thrilled to share that Kabateraine has been shortlisted for the 2025 Mbarara City Education Excellence Award! Thank you for your trust and partnership.', unread: false },
  { from: 'Ms. Joy Atugonza', role: 'Class Teacher', time: 'Aug 7', msg: "Aisha had a beautiful day today — she read her first full sentence aloud to the class! You should be very proud. We certainly are. 🌟", unread: false },
]

const PAYMENTS = [
  { term: 'Term 3, 2025', due: 'Aug 31, 2025', amount: 'UGX 220,000', status: 'pending' },
  { term: 'Term 2, 2025', due: 'Apr 30, 2025', amount: 'UGX 220,000', status: 'paid', paidOn: 'Apr 18, 2025' },
  { term: 'Term 1, 2025', due: 'Jan 15, 2025', amount: 'UGX 220,000', status: 'paid', paidOn: 'Jan 10, 2025' },
  { term: 'Term 3, 2024', due: 'Sep 1, 2024', amount: 'UGX 200,000', status: 'paid', paidOn: 'Aug 28, 2024' },
]

const RESOURCES = [
  { title: 'Term 3 Learning Calendar', type: 'PDF', icon: '📅', desc: 'Full schedule of topics, events, and key dates for Term 3, 2025.' },
  { title: 'Nursery Reading List', type: 'PDF', icon: '📚', desc: 'Recommended books for reading together at home to reinforce classroom learning.' },
  { title: 'Home Numeracy Activities', type: 'PDF', icon: '🔢', desc: '15 simple counting and sorting games you can play with everyday household items.' },
  { title: 'Healthy Lunchbox Guide', type: 'PDF', icon: '🥗', desc: 'Nutritionist-approved lunchbox ideas suitable for children aged 2–6.' },
  { title: 'Child Development Milestones', type: 'PDF', icon: '🌱', desc: 'Age-by-age guide to social, cognitive, and physical milestones for early learners.' },
  { title: 'Parent Handbook 2025', type: 'PDF', icon: '📖', desc: 'Complete guide to school policies, routines, contacts, and expectations.' },
]

export default function ParentPortal() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newMsg, setNewMsg] = useState('')

  if (!loggedIn) {
    return (
      <>
        <section className="w-full py-20 relative overflow-hidden" style={{ backgroundColor: '#3d2059' }}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#e9dc20', transform: 'translate(40%,-40%)' }} />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: 'rgba(233,220,32,0.2)', color: '#e9dc20' }}>SECURE ACCESS</div>
            <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#e9dc20' }}>Parent Portal</h1>
            <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(241,231,162,0.85)' }}>Track your child's progress, view reports, send messages, and manage fees — all in one secure place.</p>
          </div>
        </section>

        <section className="w-full py-20" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-md mx-auto px-4">
            <div className="rounded-[32px] p-8 shadow-lg" style={{ backgroundColor: '#fff9f8', border: '1.5px solid #f0e0dc' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>🔐</div>
                <div>
                  <div className="font-heading font-extrabold text-lg" style={{ color: '#3d2059' }}>Parent Login</div>
                  <div className="font-body text-xs" style={{ color: '#6a527d' }}>Use credentials provided at enrollment</div>
                </div>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); setLoggedIn(true) }} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-heading font-semibold text-xs" style={{ color: '#6a527d' }}>Email Address</label>
                  <input type="email" placeholder="parent@email.com" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm font-body outline-none border transition-colors" style={{ borderColor: '#f0e0dc', color: '#3d2059', backgroundColor: '#fff' }}
                    onFocus={(e) => (e.target.style.borderColor = '#3d2059')} onBlur={(e) => (e.target.style.borderColor = '#f0e0dc')} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-heading font-semibold text-xs" style={{ color: '#6a527d' }}>Password</label>
                  <input type="password" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm font-body outline-none border transition-colors" style={{ borderColor: '#f0e0dc', color: '#3d2059', backgroundColor: '#fff' }}
                    onFocus={(e) => (e.target.style.borderColor = '#3d2059')} onBlur={(e) => (e.target.style.borderColor = '#f0e0dc')} />
                </div>
                <button type="submit" className="font-heading font-bold py-3.5 rounded-xl text-sm transition-all hover:scale-[1.02] shadow-md mt-1" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>
                  Sign In to Portal →
                </button>
              </form>
              <div className="mt-4 text-center">
                <div className="font-body text-xs" style={{ color: '#6a527d' }}>Demo: any email + any password</div>
                <a href="https://wa.me/256772699225" className="font-heading font-semibold text-xs hover:underline block mt-1" style={{ color: '#3d2059' }} target="_blank" rel="noreferrer">Forgot password? Contact front office →</a>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const TABS: { key: Tab; label: string; icon: string }[] = [
    { key: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { key: 'reports', label: 'Reports', icon: '📊' },
    { key: 'messages', label: 'Messages', icon: '💬' },
    { key: 'payments', label: 'Payments', icon: '💳' },
    { key: 'resources', label: 'Resources', icon: '📂' },
  ]

  return (
    <>
      {/* Portal Header */}
      <div className="w-full py-4 border-b" style={{ backgroundColor: '#3d2059', borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>{DEMO_CHILD.avatar}</div>
            <div>
              <div className="font-heading font-bold text-sm" style={{ color: '#e9dc20' }}>{DEMO_CHILD.name}</div>
              <div className="font-body text-xs" style={{ color: 'rgba(241,231,162,0.7)' }}>{DEMO_CHILD.class} · {DEMO_CHILD.teacher}</div>
            </div>
          </div>
          <button onClick={() => setLoggedIn(false)} className="font-heading font-semibold text-xs px-4 py-2 rounded-full border transition-all hover:scale-105" style={{ borderColor: 'rgba(233,220,32,0.4)', color: '#f1e7a2' }}>
            Sign Out
          </button>
        </div>
      </div>

      {/* Tab Nav */}
      <div className="w-full border-b" style={{ backgroundColor: '#fff9f8', borderColor: '#f0e0dc' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2" style={{ scrollbarWidth: 'none' }}>
            {TABS.map((t) => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-heading font-bold text-sm transition-all"
                style={{ backgroundColor: activeTab === t.key ? '#3d2059' : 'transparent', color: activeTab === t.key ? '#e9dc20' : '#6a527d' }}>
                <span>{t.icon}</span><span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard */}
      {activeTab === 'dashboard' && (
        <section className="w-full py-10" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Attendance', value: `${DEMO_CHILD.attendance}%`, icon: '📅', sub: 'This term' },
                { label: 'Latest Grade', value: 'Excellent', icon: '⭐', sub: 'Term 2, 2025' },
                { label: 'Fees Status', value: 'Due', icon: '💳', sub: 'Term 3 — Aug 31' },
                { label: 'New Messages', value: '2', icon: '💬', sub: 'Unread' },
              ].map((s, i) => (
                <div key={s.label} className="rounded-[24px] p-5 flex flex-col gap-2" style={{ backgroundColor: i === 0 ? '#3d2059' : '#fff9f8', border: '1.5px solid', borderColor: i === 0 ? '#3d2059' : '#f0e0dc' }}>
                  <div className="text-2xl">{s.icon}</div>
                  <div className="font-display text-2xl" style={{ color: i === 0 ? '#e9dc20' : '#3d2059' }}>{s.value}</div>
                  <div className="font-heading font-semibold text-xs" style={{ color: i === 0 ? '#f1e7a2' : '#3d2059' }}>{s.label}</div>
                  <div className="font-body text-xs" style={{ color: i === 0 ? 'rgba(241,231,162,0.6)' : '#6a527d' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Announcements */}
            <div>
              <h2 className="font-heading font-extrabold text-lg mb-4" style={{ color: '#3d2059' }}>📢 Announcements</h2>
              <div className="flex flex-col gap-3">
                {ANNOUNCEMENTS.map((a) => (
                  <div key={a.title} className="rounded-[20px] p-5" style={{ backgroundColor: '#fff9f8', border: '1.5px solid #f0e0dc' }}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-heading font-bold text-sm" style={{ color: '#3d2059' }}>{a.title}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="font-heading font-bold text-xs px-2.5 py-0.5 rounded-full" style={{ backgroundColor: a.tagColor, color: a.tagColor === '#e9dc20' ? '#3d2059' : '#f9efed' }}>{a.tag}</span>
                      </div>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{a.body}</p>
                    <div className="font-body text-xs mt-2" style={{ color: '#6a527d', opacity: 0.6 }}>{a.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reports */}
      {activeTab === 'reports' && (
        <section className="w-full py-10" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-heading font-extrabold text-xl mb-6" style={{ color: '#3d2059' }}>📊 Academic Reports — {DEMO_CHILD.name}</h2>
            <div className="flex flex-col gap-5">
              {REPORTS.map((r, i) => (
                <div key={r.term} className="rounded-[24px] overflow-hidden" style={{ border: '1.5px solid #f0e0dc' }}>
                  <div className="flex items-center justify-between p-5 gap-4 flex-wrap" style={{ backgroundColor: i === 0 ? '#3d2059' : '#fff9f8' }}>
                    <div>
                      <div className="font-heading font-extrabold text-base" style={{ color: i === 0 ? '#e9dc20' : '#3d2059' }}>{r.term}</div>
                      <div className="font-body text-xs" style={{ color: i === 0 ? 'rgba(241,231,162,0.7)' : '#6a527d' }}>Released {r.date}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-display text-2xl" style={{ color: i === 0 ? '#e9dc20' : '#3d2059' }}>{r.score}<span className="font-body text-sm opacity-60">/100</span></div>
                        <div className="font-heading font-bold text-xs" style={{ color: i === 0 ? '#f1e7a2' : '#6a527d' }}>{r.grade}</div>
                      </div>
                      <button className="font-heading font-bold text-xs px-4 py-2 rounded-full" style={{ backgroundColor: i === 0 ? '#e9dc20' : '#3d2059', color: i === 0 ? '#3d2059' : '#e9dc20' }}>↓ Download</button>
                    </div>
                  </div>
                  <div className="p-5" style={{ backgroundColor: '#f9efed' }}>
                    <div className="font-heading font-semibold text-xs mb-1" style={{ color: '#6a527d' }}>Teacher: {r.teacher}</div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>&ldquo;{r.comment}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Messages */}
      {activeTab === 'messages' && (
        <section className="w-full py-10" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-heading font-extrabold text-xl mb-6" style={{ color: '#3d2059' }}>💬 Messages</h2>
            <div className="flex flex-col gap-3 mb-6">
              {MESSAGES.map((m, i) => (
                <div key={i} className="rounded-[20px] p-5 relative" style={{ backgroundColor: '#fff9f8', border: `1.5px solid ${m.unread ? '#3d2059' : '#f0e0dc'}` }}>
                  {m.unread && <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#e9dc20' }} />}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>{m.from.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
                    <div>
                      <div className="font-heading font-bold text-sm" style={{ color: '#3d2059' }}>{m.from}</div>
                      <div className="font-body text-xs" style={{ color: '#6a527d' }}>{m.role} · {m.time}</div>
                    </div>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#6a527d' }}>{m.msg}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[24px] p-5" style={{ backgroundColor: '#fff9f8', border: '1.5px solid #f0e0dc' }}>
              <div className="font-heading font-bold text-sm mb-3" style={{ color: '#3d2059' }}>✍️ Send a Message to the School</div>
              <textarea rows={3} value={newMsg} onChange={(e) => setNewMsg(e.target.value)} placeholder="Type your message to Ms. Joy Atugonza or the front office..."
                className="w-full rounded-xl px-4 py-3 text-sm font-body outline-none border resize-none mb-3"
                style={{ borderColor: '#f0e0dc', color: '#3d2059', backgroundColor: '#fff' }}
                onFocus={(e) => (e.target.style.borderColor = '#3d2059')} onBlur={(e) => (e.target.style.borderColor = '#f0e0dc')} />
              <button className="font-heading font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:scale-105" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>Send Message →</button>
            </div>
          </div>
        </section>
      )}

      {/* Payments */}
      {activeTab === 'payments' && (
        <section className="w-full py-10" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-heading font-extrabold text-xl mb-6" style={{ color: '#3d2059' }}>💳 Fee Payments — {DEMO_CHILD.name}</h2>
            <div className="rounded-[24px] p-5 mb-6" style={{ backgroundColor: '#f1e7a2', border: '1.5px solid #dbd04c' }}>
              <div className="font-heading font-extrabold text-base mb-1" style={{ color: '#3d2059' }}>⚠️ Term 3, 2025 Fee Due</div>
              <p className="font-body text-sm mb-3" style={{ color: '#6a527d' }}>UGX 220,000 is due by 31 August 2025. You can pay via Mobile Money (MTN/Airtel), bank transfer, or at the school office.</p>
              <div className="flex gap-3 flex-wrap">
                <button className="font-heading font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:scale-105 shadow-md" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>Pay via Mobile Money</button>
                <a href="https://wa.me/256772699225" target="_blank" rel="noreferrer" className="font-heading font-semibold px-6 py-2.5 rounded-full text-sm border-2 transition-all hover:scale-105" style={{ borderColor: '#3d2059', color: '#3d2059' }}>Enquire via WhatsApp</a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {PAYMENTS.map((p) => (
                <div key={p.term} className="rounded-[20px] p-5 flex items-center justify-between gap-4 flex-wrap" style={{ backgroundColor: '#fff9f8', border: '1.5px solid #f0e0dc' }}>
                  <div>
                    <div className="font-heading font-bold text-sm" style={{ color: '#3d2059' }}>{p.term}</div>
                    <div className="font-body text-xs" style={{ color: '#6a527d' }}>{p.status === 'paid' ? `Paid on ${p.paidOn}` : `Due: ${p.due}`}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-heading font-extrabold text-base" style={{ color: '#3d2059' }}>{p.amount}</div>
                    <div className="px-3 py-1 rounded-full font-heading font-bold text-xs" style={{ backgroundColor: p.status === 'paid' ? '#e9dc20' : '#f0e0dc', color: '#3d2059' }}>
                      {p.status === 'paid' ? '✓ Paid' : '⏳ Pending'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resources */}
      {activeTab === 'resources' && (
        <section className="w-full py-10" style={{ backgroundColor: '#f9efed' }}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-heading font-extrabold text-xl mb-6" style={{ color: '#3d2059' }}>📂 Parent Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {RESOURCES.map((r) => (
                <div key={r.title} className="rounded-[20px] p-5 flex items-start gap-4 transition-all hover:shadow-md cursor-pointer group" style={{ backgroundColor: '#fff9f8', border: '1.5px solid #f0e0dc' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: '#f1e7a2' }}>{r.icon}</div>
                  <div className="flex-1">
                    <div className="font-heading font-bold text-sm group-hover:underline" style={{ color: '#3d2059' }}>{r.title}</div>
                    <div className="font-body text-xs mt-0.5 mb-2" style={{ color: '#6a527d' }}>{r.desc}</div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full font-heading font-bold text-xs" style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}>↓ {r.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
