import { useScrollFade } from '../../hooks/useScrollFade'
import './WhyChooseUs.css'

interface Reason {
  title: string
  description: string
}

const REASONS: Reason[] = [
  {
    title: 'Reliable Craftsmanship',
    description: 'We take pride in quality work and attention to detail on every project, no matter the size.',
  },
  {
    title: 'Clear Communication',
    description: 'We believe in honest conversations. No surprises, no jargon — just straightforward updates.',
  },
  {
    title: 'Professional Respect',
    description: 'Your home is important. We treat it with the care and respect it deserves.',
  },
  {
    title: 'Local Service',
    description: 'Based in Southeastern Kentucky, we understand the region and its unique needs.',
  },
  {
    title: 'Timely Completion',
    description: 'We show up when we say we will and finish what we start.',
  },
  {
    title: 'Value-Focused',
    description: 'Quality work at fair prices. We deliver lasting value for your investment.',
  },
]

export default function WhyChooseUs() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollFade()
  const { ref: listRef, isVisible: listVisible } = useScrollFade()
  const { ref: visualRef, isVisible: visualVisible } = useScrollFade()

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="why-choose-us-content">
          <div
            ref={headingRef}
            className={`fade-in${headingVisible ? ' is-visible' : ''}`}
          >
            <h2>Why Choose EC Construction</h2>
            <p className="why-intro">
              We believe quality work starts with clear expectations, honest communication, and attention to detail. Whether it's a repair, upgrade, or larger project, we approach every job with professionalism and pride.
            </p>
          </div>

          <div
            ref={listRef}
            className={`reasons-list fade-in${listVisible ? ' is-visible' : ''}`}
          >
            {REASONS.map((reason, index) => (
              <div
                key={reason.title}
                className="reason-item"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="reason-icon"></div>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={visualRef}
          className={`why-choose-us-visual fade-in${visualVisible ? ' is-visible' : ''}`}
        >
          <img src="/images/Playful chibi character with confident grin.png" alt="EC Construction" />
        </div>
      </div>
    </section>
  )
}
