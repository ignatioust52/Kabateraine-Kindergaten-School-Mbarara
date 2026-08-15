import { useState } from 'react'
import { Link, useLocation } from 'react-router'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Campus Life', path: '/campus-life' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Parent Portal', path: '/parent-portal' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9efed' }}>
      {/* Utility Bar */}
      <div
        className="w-full px-4 py-2 text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        style={{ backgroundColor: '#3d2059', color: '#f1e7a2' }}
      >
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://wa.me/256772699225"
            className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors font-heading font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            <span>📞</span>
            <span>+256 772 699225</span>
          </a>
          <span className="opacity-40 hidden sm:inline">|</span>
          <a
            href="https://wa.me/256700339836"
            className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors font-heading font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            <span>📱</span>
            <span>+256 700 339836</span>
          </a>
        </div>
        <div className="flex items-center gap-3 text-xs font-heading">
          <span className="opacity-60">Follow us:</span>
          {[
            { label: '𝕏', href: '#' },
            { label: 'Facebook', href: '#' },
            { label: 'Instagram', href: '#' },
          ].map((s) => (
            <a key={s.label} href={s.href} className="hover:text-yellow-300 transition-colors font-semibold">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Sticky Nav */}
      <header
        className="sticky top-0 z-50 w-full border-b shadow-sm"
        style={{ backgroundColor: '#fff9f8', borderColor: '#f0e0dc' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <nav className="hidden lg:flex items-center gap-5">
              {NAV_LINKS.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-heading font-semibold text-sm transition-all relative py-1"
                    style={{ color: active ? '#3d2059' : '#6a527d' }}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: '#e9dc20' }}
                      />
                    )}
                  </Link>
                )
              })}
              <Link
                to="/admissions"
                className="font-heading font-bold text-sm px-5 py-2 rounded-full transition-all hover:scale-105 shadow-md"
                style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}
              >
                Enroll Now →
              </Link>
            </nav>
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="w-5 h-0.5 mb-1" style={{ backgroundColor: '#3d2059' }} />
              <div className="w-5 h-0.5 mb-1" style={{ backgroundColor: '#3d2059' }} />
              <div className="w-5 h-0.5" style={{ backgroundColor: '#3d2059' }} />
            </button>
          </div>

          <Link to="/" className="flex items-center gap-3 flex-row-reverse text-right">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden border-2 bg-white"
              style={{ borderColor: '#3d2059' }}
            >
              <img src="/assets/KABATERAINE%20KINDERGATEN%20LOGO.png" alt="Kabateraine Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <div className="font-display text-lg leading-tight" style={{ color: '#3d2059' }}>Kabateraine</div>
              <div className="font-heading text-xs font-semibold" style={{ color: '#6a527d' }}>Kindergarten School</div>
            </div>
          </Link>
        </div>

        {mobileOpen && (
          <div className="lg:hidden px-4 pb-4 border-t" style={{ borderColor: '#f0e0dc' }}>
            <div className="flex flex-col gap-2 pt-3">
              {NAV_LINKS.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-heading font-semibold py-2.5 px-4 rounded-xl text-sm"
                    style={{
                      color: '#3d2059',
                      backgroundColor: active ? '#f1e7a2' : '#f9efed',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                to="/admissions"
                className="font-heading font-bold text-sm px-5 py-3 rounded-full text-center mt-1"
                style={{ backgroundColor: '#3d2059', color: '#e9dc20' }}
                onClick={() => setMobileOpen(false)}
              >
                Enroll Now →
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="w-full pt-16 pb-8" style={{ backgroundColor: '#3d2059' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 bg-white" style={{ borderColor: '#e9dc20' }}>
                  <img src="/assets/KABATERAINE%20KINDERGATEN%20LOGO.png" alt="Kabateraine Logo" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <div className="font-display text-xl leading-tight" style={{ color: '#e9dc20' }}>Kabateraine</div>
                  <div className="font-heading text-sm font-semibold" style={{ color: '#f1e7a2' }}>Kindergarten School</div>
                </div>
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(241,231,162,0.75)' }}>
                &ldquo;Row your boat.&rdquo;<br />
                Nurturing curious minds and confident hearts in Mbarara City, Uganda.
              </p>
              <div className="flex gap-3">
                {['𝕏', 'f', '📷'].map((icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-heading font-bold transition-all hover:scale-110" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#e9dc20' }}>{icon}</a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-extrabold text-base" style={{ color: '#e9dc20' }}>Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => (
                  <Link key={link.path} to={link.path} className="font-body text-sm hover:opacity-80 transition-opacity" style={{ color: 'rgba(241,231,162,0.75)' }}>{link.label}</Link>
                ))}
              </div>
              <div className="mt-2 font-body text-sm leading-relaxed" style={{ color: 'rgba(241,231,162,0.75)' }}>
                <p className="font-heading font-bold mb-1" style={{ color: '#e9dc20' }}>📍 Find Us</p>
                <p>Plot 19-A McAllister Road<br />Lugazi, Mbarara City, Uganda</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-extrabold text-base" style={{ color: '#e9dc20' }}>Get in Touch</h4>
              {[
                { icon: '📞', value: '+256 772 699225', href: 'tel:+256772699225' },
                { icon: '📱', value: '+256 700 339836', href: 'tel:+256700339836' },
                { icon: '✉️', value: 'info@kabateraine.ug', href: 'mailto:info@kabateraine.ug' },
              ].map((c) => (
                <a key={c.value} href={c.href} className="flex items-center gap-3 group">
                  <span>{c.icon}</span>
                  <span className="font-heading font-semibold text-sm group-hover:text-yellow-300 transition-colors" style={{ color: '#f1e7a2' }}>{c.value}</span>
                </a>
              ))}
              <input
                type="email"
                placeholder="Your email for updates"
                className="rounded-xl px-4 py-2.5 text-sm font-body outline-none mt-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(233,220,32,0.3)', color: '#f1e7a2' }}
                onFocus={(e) => (e.target.style.borderColor = '#e9dc20')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(233,220,32,0.3)')}
              />
              <button className="font-heading font-bold py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>
                Subscribe to Updates
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
            <p className="font-body text-xs" style={{ color: 'rgba(241,231,162,0.5)' }}>© 2025 Kabateraine Kindergarten School, Mbarara City, Uganda. All rights reserved.</p>
            <div className="flex gap-4">
              {['Privacy Policy', 'Terms of Use'].map((link) => (
                <a key={link} href="#" className="font-body text-xs hover:opacity-80" style={{ color: 'rgba(241,231,162,0.5)' }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
