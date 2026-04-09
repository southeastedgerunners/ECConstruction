import { useState } from 'react'
import './FormPages.css'

interface FormData {
  name: string
  phone: string
  email: string
  address: string
  service: string
  projectDetails: string
  contactMethod: string
  timeframe: string
}

interface RequestQuotePageProps {
  onBack: () => void
}

export default function RequestQuotePage({ onBack }: RequestQuotePageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    projectDetails: '',
    contactMethod: 'phone',
    timeframe: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    if (!formData.service) {
      setError('Please select a service')
      return false
    }
    if (!formData.projectDetails.trim()) {
      setError('Please describe your project')
      return false
    }
    setError(null)
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setSubmitting(true)
    setError(null)

    try {
      const webhookUrl = import.meta.env.VITE_N8N_FULL_INTAKE_WEBHOOK

      if (!webhookUrl) {
        setError(
          'Webhook URL is not configured. Please contact support.',
        )
        setSubmitting(false)
        return
      }

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          service: '',
          projectDetails: '',
          contactMethod: 'phone',
          timeframe: '',
        })
      } else {
        setError('Failed to submit form. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again later.')
      console.error('Form submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-header">
          <button className="back-button" onClick={onBack}>
            ← Back
          </button>
          <h1>Request a Quote</h1>
          <p className="form-subtitle">
            Tell us about your project and we'll get back to you with a detailed quote.
          </p>
        </div>

        {success ? (
          <div className="form-success">
            <h2>Thank you!</h2>
            <p>
              We've received your quote request. Our team will review your project details and be in touch soon.
            </p>
            <button className="btn-primary" onClick={onBack}>
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-form">
            {error && <div className="form-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(606) 123-4567"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address or City</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your address or city"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Service Needed *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="framing">Framing</option>
                  <option value="remodeling">Remodeling</option>
                  <option value="decks">Decks</option>
                  <option value="roofing">Roofing</option>
                  <option value="drywall">Drywall</option>
                  <option value="flooring">Flooring</option>
                  <option value="general">General Contracting</option>
                  <option value="handyman">Handyman Work</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeframe">Timeframe</label>
                <select
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleChange}
                >
                  <option value="">When do you need to start?</option>
                  <option value="immediate">Immediately</option>
                  <option value="1-2weeks">1-2 weeks</option>
                  <option value="1month">1 month</option>
                  <option value="2-3months">2-3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="projectDetails">Project Details *</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Describe your project, scope, and any specific requirements..."
                rows={6}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="contactMethod">Preferred Contact Method</label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="either">Either</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-primary form-submit"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Request Quote'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
