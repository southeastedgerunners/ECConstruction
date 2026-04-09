import HeroSection from '../components/HeroSection/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Gallery from '../components/Gallery/Gallery'
import Testimonials from '../components/Testimonials/Testimonials'
import CTABanner from '../components/CTABanner/CTABanner'

interface HomePageProps {
  onNavigate: (page: 'home' | 'request-call' | 'request-quote') => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection
        onRequestQuoteClick={() => onNavigate('request-quote')}
        onRequestCallClick={() => onNavigate('request-call')}
      />
      <section id="about">
        <WhyChooseUs />
      </section>
      <Gallery />
      <Testimonials />
      <CTABanner
        onRequestQuoteClick={() => onNavigate('request-quote')}
        onRequestCallClick={() => onNavigate('request-call')}
      />
    </>
  )
}
