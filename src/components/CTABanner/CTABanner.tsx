import { useScrollFade } from '../../hooks/useScrollFade'
import './CTABanner.css'

interface CTABannerProps {
  onRequestQuoteClick: () => void
  onRequestCallClick: () => void
}

export default function CTABanner({
  onRequestQuoteClick,
  onRequestCallClick,
}: CTABannerProps) {
  const { ref: contentRef, isVisible: contentVisible } = useScrollFade()

  return (
    <section className="cta-banner-section">
      <div
        ref={contentRef}
        className={`cta-banner-content fade-in${contentVisible ? ' is-visible' : ''}`}
      >
        <h2>Ready to Start Your Project?</h2>
        <p>
          Whether you need a quick quote or want to discuss your project in detail, we're ready to help. Get in touch today.
        </p>
        <div className="cta-banner-buttons">
          <button className="btn-primary" onClick={onRequestQuoteClick}>
            Request a Quote
          </button>
          <button className="btn-secondary" onClick={onRequestCallClick}>
            Request a Call
          </button>
        </div>
      </div>
    </section>
  )
}
