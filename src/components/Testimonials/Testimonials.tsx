import { useScrollFade } from '../../hooks/useScrollFade'
import './Testimonials.css'

interface Testimonial {
  quote: string
  author: string
  title: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'EC Construction was easy to work with, communicated clearly about timelines, and the finished work looks fantastic. They treated our home with respect and attention to detail. We would gladly call again for future projects.',
    author: 'Sarah & Michael J.',
    title: 'Kitchen Remodeling',
  },
  {
    quote:
      'We needed our deck rebuilt and weren\'t sure where to start. EC Construction walked us through the whole process, kept us updated every step, and delivered exactly what we wanted. Professional and honest.',
    author: 'David L.',
    title: 'Deck Construction',
  },
  {
    quote:
      'From the initial quote to the final walkthrough, working with EC Construction was straightforward and professional. They showed up on time, did quality work, and cleaned up after themselves. Highly recommend.',
    author: 'Jennifer & Tom M.',
    title: 'Full Home Renovation',
  },
]

export default function Testimonials() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollFade()
  const { ref: gridRef, isVisible: gridVisible } = useScrollFade()

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2
          ref={headingRef}
          className={`fade-in${headingVisible ? ' is-visible' : ''}`}
        >
          What Our Clients Say
        </h2>

        <div ref={gridRef} className="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card fade-in${gridVisible ? ' is-visible' : ''}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">— {testimonial.author}</p>
              <p className="testimonial-title">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
