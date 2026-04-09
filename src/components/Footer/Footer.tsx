import './Footer.css'

interface FooterProps {
  onRequestQuoteClick: () => void
  onRequestCallClick: () => void
}

export default function Footer({
  onRequestQuoteClick,
  onRequestCallClick,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="/images/hammertape.png"
            alt="EC Construction Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">Measure Twice. Build Once.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: (606) 123-4567</p>
          <p>Email: info@ecconstruction.com</p>
          <p>Service Area: Southeastern Kentucky</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <button className="footer-link" onClick={onRequestQuoteClick}>
            Request a Quote
          </button>
          <button className="footer-link" onClick={onRequestCallClick}>
            Request a Call
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 EC Construction. All rights reserved.</p>
      </div>
    </footer>
  )
}
