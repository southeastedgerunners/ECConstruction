import './Header.css'

interface HeaderProps {
  onLogoClick: () => void
  onRequestQuoteClick: () => void
  onRequestCallClick: () => void
  onServicesClick: () => void
  onAboutClick?: () => void
  onContactClick?: () => void
}

export default function Header({
  onLogoClick,
  onRequestQuoteClick,
  onRequestCallClick,
  onServicesClick,
  onAboutClick,
  onContactClick,
}: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If element doesn't exist, go home first then scroll
      onLogoClick()
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const handleAbout = () => {
    if (onAboutClick) {
      onAboutClick()
    } else {
      scrollToSection('about')
    }
  }

  const handleContact = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      scrollToSection('contact')
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="logo-button" onClick={onLogoClick}>
            <img
              src="/images/Shiny black and gold tape measure.png"
              alt="EC Construction"
              className="logo-small"
            />
          </button>
          <span className="company-name">EC Construction</span>
        </div>

        <nav className="nav">
          <button className="nav-link" onClick={onLogoClick}>
            Home
          </button>
          <button className="nav-link" onClick={handleAbout}>
            About
          </button>
          <button className="nav-link" onClick={onServicesClick}>
            Services
          </button>
          <button className="nav-link" onClick={handleContact}>
            Contact Us
          </button>
        </nav>

        <div className="header-ctas">
          <button className="btn-secondary" onClick={onRequestCallClick}>
            Request Call
          </button>
          <button className="btn-primary" onClick={onRequestQuoteClick}>
            Request Quote
          </button>
        </div>
      </div>
    </header>
  )
}
