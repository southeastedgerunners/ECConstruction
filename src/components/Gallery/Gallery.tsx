import './Gallery.css'

interface GalleryImage {
  src: string
  alt: string
}

const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/images/house-construction.webp', alt: 'House construction project' },
  { src: '/images/house2.webp', alt: 'Completed home project' },
  { src: '/images/worker.jpg', alt: 'Construction worker on site' },
  { src: '/images/house-construction.webp', alt: 'Framing and construction' },
  { src: '/images/house2.webp', alt: 'Quality finish work' },
  { src: '/images/worker.jpg', alt: 'Professional craftsmanship' },
]

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2>Our Work</h2>
        <p className="gallery-intro">
          From concept to completion, we deliver quality construction and remodeling work that stands the test of time.
        </p>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
