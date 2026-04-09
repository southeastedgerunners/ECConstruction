import ServicesGrid from '../components/ServicesGrid/ServicesGrid'
import './ServicesPage.css'

interface ServicesPageProps {
  onBack: () => void
}

export default function ServicesPage({ onBack }: ServicesPageProps) {
  return (
    <div className="services-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      <ServicesGrid />
    </div>
  )
}
