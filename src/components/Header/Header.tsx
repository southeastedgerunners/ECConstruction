import { useState } from 'react'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    setMobileMenuOpen(false)
  }

  const handleContact = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      scrollToSection('contact')
    }
    setMobileMenuOpen(false)
  }

  const handleNavClick = (callback: () => void) => {
    callback()
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="logo-button" onClick={onLogoClick}>
            <div className="company-name-stack">
              <span className="company-name-line1">EC</span>
              <span className="company-name-line2">Construction</span>
            </div>
          </button>
        </div>

        <button 
          className="hamburger-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {mobileMenuOpen && (
          <nav className="nav mobile-nav">
            <button className="nav-link" onClick={() => handleNavClick(onLogoClick)}>
              Home
            </button>
            <button className="nav-link" onClick={() => handleNavClick(handleAbout)}>
              About
            </button>
            <button className="nav-link" onClick={() => handleNavClick(onServicesClick)}>
              Services
            </button>
            <button className="nav-link" onClick={() => handleNavClick(handleContact)}>
              Contact Us
            </button>
          </nav>
        )}

        <nav className="nav desktop-nav">
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
