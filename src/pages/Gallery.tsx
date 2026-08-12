import { useState } from 'react'

const CATEGORIES = ['All', 'Classroom', 'Outdoor Play', 'Art & Crafts', 'Events', 'Meals']

const PHOTOS = [
  { id: 1, src: '/assets/IMG_4075.jpg', thumb: '/assets/IMG_4075.jpg', alt: 'Children sitting together at classroom table', category: 'Classroom', caption: 'Morning learning circle — Nursery class' },
  { id: 2, src: '/assets/IMG_4076.jpg', thumb: '/assets/IMG_4076.jpg', alt: 'Young boy at school', category: 'Classroom', caption: 'Focused reading time in Primary One Prep' },
  { id: 3, src: '/assets/IMG_4080.jpg', thumb: '/assets/IMG_4080.jpg', alt: 'Smiling child at kindergarten', category: 'Classroom', caption: 'A bright smile on Day 1 at Baby Class' },
  { id: 4, src: '/assets/IMG_4077.jpg', thumb: '/assets/IMG_4077.jpg', alt: 'Flat lay of children paintings', category: 'Art & Crafts', caption: 'End-of-term art showcase pieces' },
  { id: 5, src: '/assets/IMG_4078.jpg', thumb: '/assets/IMG_4078.jpg', alt: 'Child drawing on paper', category: 'Art & Crafts', caption: 'Creative Wednesday — drawing and storytelling' },
  { id: 6, src: '/assets/playground.jpeg', thumb: '/assets/playground.jpeg', alt: 'Children on playground equipment', category: 'Outdoor Play', caption: 'Friday outdoor adventure time' },
  { id: 7, src: '/assets/sports/IMG_3655.jpg', thumb: '/assets/sports/IMG_3655.jpg', alt: 'Girl on playground chair', category: 'Outdoor Play', caption: 'Physical education — movement and balance' },
  { id: 8, src: '/assets/sports/IMG_3811.jpg', thumb: '/assets/sports/IMG_3811.jpg', alt: 'Colorful playground equipment', category: 'Outdoor Play', caption: 'Our outdoor play area — a world of exploration' },
  { id: 9, src: '/assets/building.jpeg', thumb: '/assets/building.jpeg', alt: 'School building', category: 'Outdoor Play', caption: 'Campus views' },
  { id: 10, src: '/assets/leaders.jpeg', thumb: '/assets/leaders.jpeg', alt: 'School leadership', category: 'Events', caption: 'Parent-Teacher Day — Term 2, 2024' },
  { id: 11, src: '/assets/swearing.jpeg', thumb: '/assets/swearing.jpeg', alt: 'Swearing in ceremony', category: 'Events', caption: 'Leadership swearing-in ceremony' },
  { id: 12, src: '/assets/WhatsApp Image 2026-05-03 at 10.12.21 PM (1).jpeg', thumb: '/assets/WhatsApp Image 2026-05-03 at 10.12.21 PM (1).jpeg', alt: 'Children in uniform', category: 'Events', caption: 'School Pride - uniform day' },
  { id: 13, src: '/assets/IMG_4090.jpg', thumb: '/assets/IMG_4090.jpg', alt: 'Children eating lunch', category: 'Meals', caption: 'Lunchtime — hot meals, happy children' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<(typeof PHOTOS)[0] | null>(null)

  const filtered = activeCategory === 'All' ? PHOTOS : PHOTOS.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="w-full py-20 relative overflow-hidden" style={{ backgroundColor: '#3d2059' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#e9dc20', transform: 'translate(40%,-40%)' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-4" style={{ backgroundColor: 'rgba(233,220,32,0.2)', color: '#e9dc20' }}>PHOTO GALLERY</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#e9dc20' }}>Life Through Our Lens</h1>
          <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(241,231,162,0.85)' }}>
            A glimpse into the joy, creativity, and connection that fills every corner of Kabateraine Kindergarten — from the classroom to the garden.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="w-full sticky top-[73px] z-40 border-b" style={{ backgroundColor: '#fff9f8', borderColor: '#f0e0dc' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-5 py-2 rounded-full font-heading font-bold text-sm transition-all"
                style={{ backgroundColor: activeCategory === cat ? '#3d2059' : 'transparent', color: activeCategory === cat ? '#e9dc20' : '#6a527d' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="w-full py-12" style={{ backgroundColor: '#f9efed' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid rounded-[20px] overflow-hidden cursor-pointer group relative"
                onClick={() => setLightbox(photo)}
                style={{ border: '1.5px solid #f0e0dc' }}
              >
                <div className="relative overflow-hidden" style={{ backgroundColor: '#6a527d' }}>
                  <img src={photo.thumb} alt={photo.alt} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'linear-gradient(to top, rgba(61,32,89,0.85) 0%, transparent 60%)' }}>
                    <div>
                      <div className="font-heading font-bold text-xs" style={{ color: '#e9dc20' }}>{photo.caption}</div>
                      <div className="font-body text-xs" style={{ color: 'rgba(241,231,162,0.7)' }}>{photo.category}</div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full font-heading font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}>🔍</div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📷</div>
              <p className="font-heading font-semibold" style={{ color: '#6a527d' }}>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(61,32,89,0.95)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-[28px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#1a0d2e' }}
          >
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto max-h-[70vh] object-contain" />
            <div className="p-5 flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-base" style={{ color: '#e9dc20' }}>{lightbox.caption}</div>
                <div className="font-body text-xs mt-0.5" style={{ color: 'rgba(241,231,162,0.6)' }}>{lightbox.category}</div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-lg transition-all hover:scale-110"
                style={{ backgroundColor: '#e9dc20', color: '#3d2059' }}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
