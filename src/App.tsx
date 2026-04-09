import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import RequestCallPage from './pages/RequestCallPage'
import RequestQuotePage from './pages/RequestQuotePage'

type Page = 'home' | 'services' | 'request-call' | 'request-quote'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onBack={() => setCurrentPage('home')} />
      case 'request-call':
        return <RequestCallPage onBack={() => setCurrentPage('home')} />
      case 'request-quote':
        return <RequestQuotePage onBack={() => setCurrentPage('home')} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="app-container">
      <Header
        onLogoClick={() => setCurrentPage('home')}
        onRequestQuoteClick={() => setCurrentPage('request-quote')}
        onRequestCallClick={() => setCurrentPage('request-call')}
        onServicesClick={() => setCurrentPage('services')}
        onAboutClick={() => {
          setCurrentPage('home')
          setTimeout(() => {
            const element = document.getElementById('about')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }, 100)
        }}
        onContactClick={() => {
          setCurrentPage('home')
          setTimeout(() => {
            const element = document.getElementById('contact')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }, 100)
        }}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer
        onRequestQuoteClick={() => setCurrentPage('request-quote')}
        onRequestCallClick={() => setCurrentPage('request-call')}
      />
    </div>
  )
}

export default App
