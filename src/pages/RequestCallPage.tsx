import { useState } from 'react'
import './FormPages.css'

interface QuickFormData {
  name: string
  phone: string
  jobType: string
  shortNote: string
}

interface RequestCallPageProps {
  onBack: () => void
}

export default function RequestCallPage({ onBack }: RequestCallPageProps) {
  const [formData, setFormData] = useState<QuickFormData>({
    name: '',
    phone: '',
    jobType: '',
    shortNote: '',
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
    setError(null)
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setSubmitting(true)
    setError(null)

    try {
      const webhookUrl = import.meta.env.VITE_N8N_QUICK_LEAD_WEBHOOK

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
          jobType: '',
          shortNote: '',
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
      <div className="form-container form-container-narrow">
        <div className="form-header">
          <button className="back-button" onClick={onBack}>
            ← Back
          </button>
          <h1>Request a Call</h1>
          <p className="form-subtitle">
            Quick and easy. Give us your info and we'll reach out soon.
          </p>
        </div>

        {success ? (
          <div className="form-success">
            <h2>Thanks!</h2>
            <p>
              We've got your request. Our team will give you a call soon.
            </p>
            <button className="btn-primary" onClick={onBack}>
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quick-form">
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
              <label htmlFor="jobType">What kind of work?</label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
              >
                <option value="">Select a service (optional)</option>
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
              <label htmlFor="shortNote">Quick note (optional)</label>
              <textarea
                id="shortNote"
                name="shortNote"
                value={formData.shortNote}
                onChange={handleChange}
                placeholder="Any additional info..."
                rows={3}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary form-submit"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Request a Call'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
