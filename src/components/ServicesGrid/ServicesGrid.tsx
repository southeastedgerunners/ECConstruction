import './ServicesGrid.css'

interface Service {
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    title: 'Framing',
    description: 'Structural expertise for new builds and renovations',
  },
  {
    title: 'Remodeling',
    description: 'Complete transformations from concept to completion',
  },
  {
    title: 'Decks',
    description: 'Custom outdoor spaces built to last',
  },
  {
    title: 'Roofing',
    description: 'Durable roofing solutions for protection and style',
  },
  {
    title: 'Drywall',
    description: 'Professional finish work and specialty installations',
  },
  {
    title: 'Flooring',
    description: 'Quality flooring materials and expert installation',
  },
  {
    title: 'General Contracting',
    description: 'Full-project management from start to finish',
  },
  {
    title: 'Handyman Work',
    description: 'Reliable repairs and maintenance services',
  },
]

export default function ServicesGrid() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="services-intro">
          EC Construction specializes in a wide range of construction and remodeling services. From large-scale projects to skilled repairs, we bring professionalism and precision to every job.
        </p>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon"></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
