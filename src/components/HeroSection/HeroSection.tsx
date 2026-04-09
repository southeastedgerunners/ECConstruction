import './HeroSection.css'

interface HeroSectionProps {
  onRequestQuoteClick: () => void
  onRequestCallClick: () => void
}

export default function HeroSection({
  onRequestQuoteClick,
  onRequestCallClick,
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-background-image">
          <img
            src="/images/house-construction.webp"
            alt="House construction"
            className="hero-image"
          />
        </div>
        <div className="hero-left-overlay">
          <h1 className="hero-tagline">Measure Twice. Build Once.</h1>
          <p className="hero-subtitle">Trusted Southeastern business for over 10 years</p>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-mascot-content">
          <img
            src="/images/hammertape.png"
            alt="EC Construction"
            className="hero-mascot"
          />

          <div className="hero-ctas">
            <button className="btn-primary" onClick={onRequestQuoteClick}>
              Request a Quote
            </button>
            <button className="btn-secondary" onClick={onRequestCallClick}>
              Request a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
