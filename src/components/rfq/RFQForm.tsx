'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'

const SYSTEMS_OPTIONS = [
  'GFRC/GRC Façade Cladding',
  'Mashrabiya Systems',
  'Domes & Vaults',
  'Cornices & Profiles',
  'Columns & Pillars',
  'Custom Decorative Elements',
  'Multiple Systems',
]

type FormData = {
  projectName: string
  projectLocation: string
  systemRequired: string
  estimatedArea: string
  projectType: string
  deliveryDate: string
  fullName: string
  jobTitle: string
  company: string
  email: string
  phone: string
  clientType: string
  notes: string
  website: string // honeypot
}

const EMPTY_FORM: FormData = {
  projectName: '',
  projectLocation: '',
  systemRequired: '',
  estimatedArea: '',
  projectType: '',
  deliveryDate: '',
  fullName: '',
  jobTitle: '',
  company: '',
  email: '',
  phone: '',
  clientType: '',
  notes: '',
  website: '',
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm'

export default function RFQForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [reference, setReference] = useState('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (): string | null => {
    const required: [keyof FormData, string][] = [
      ['fullName', 'Full name'],
      ['company', 'Company name'],
      ['email', 'Email address'],
      ['projectName', 'Project name'],
      ['projectLocation', 'Project location'],
      ['systemRequired', 'System required'],
    ]
    for (const [field, label] of required) {
      if (!formData[field].trim()) return `${label} is required.`
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address.'
    }
    return null
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationError = validate()
    if (validationError) {
      setErrorMessage(validationError)
      setSubmitState('error')
      return
    }

    setSubmitState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = (await res.json()) as { success?: boolean; reference?: string; error?: string }

      if (!res.ok || !json.success) {
        setErrorMessage(json.error ?? 'Submission failed. Please try again.')
        setSubmitState('error')
        return
      }

      setReference(json.reference ?? '')
      setSubmitState('success')
    } catch {
      setErrorMessage('A network error occurred. Please check your connection and try again.')
      setSubmitState('error')
    }
  }

  // ── Success view ────────────────────────────────────────────────────────────
  if (submitState === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
          Request Submitted Successfully
        </h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Our engineering team has received your quotation request and will respond within
          48 business hours. Please quote the reference number below in all correspondence.
        </p>

        <div className="inline-block bg-navy/5 border border-navy/20 rounded-sm px-10 py-5 mb-10">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">Your RFQ Reference</p>
          <p className="text-2xl sm:text-3xl font-bold text-accent tracking-wider">{reference}</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => {
              setFormData(EMPTY_FORM)
              setSubmitState('idle')
              setReference('')
            }}
            className="px-6 py-3 border border-navy text-navy text-sm font-semibold rounded-sm hover:bg-navy hover:text-white transition-colors"
          >
            Submit Another Request
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  // ── Form view ───────────────────────────────────────────────────────────────
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <form onSubmit={handleSubmit} className="space-y-10" noValidate>

        {/* Honeypot — hidden from users, visible to bots */}
        <div
          style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
          aria-hidden="true"
        >
          <label htmlFor="website">Website (do not fill this in)</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        {/* Project Information */}
        <fieldset>
          <legend className="text-navy font-bold text-xl mb-6 pb-3 border-b border-gray-100 w-full">
            Project Information
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Project Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="projectName"
                required
                placeholder="e.g. Al Nakheel Tower"
                value={formData.projectName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Project Location <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="projectLocation"
                required
                placeholder="City, Saudi Arabia"
                value={formData.projectLocation}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                System Required <span className="text-accent">*</span>
              </label>
              <select
                name="systemRequired"
                required
                value={formData.systemRequired}
                onChange={handleChange}
                className={inputClass + ' bg-white'}
              >
                <option value="">Select a system</option>
                {SYSTEMS_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Estimated Area (m²)
              </label>
              <input
                type="number"
                name="estimatedArea"
                min="1"
                placeholder="e.g. 5000"
                value={formData.estimatedArea}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={inputClass + ' bg-white'}
              >
                <option value="">Select type</option>
                {['Commercial', 'Residential', 'Government', 'Hospitality', 'Religious', 'Infrastructure'].map(
                  (t) => <option key={t}>{t}</option>,
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Target Delivery Date
              </label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </fieldset>

        {/* Your Details */}
        <fieldset>
          <legend className="text-navy font-bold text-xl mb-6 pb-3 border-b border-gray-100 w-full">
            Your Details
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="e.g. Project Manager"
                value={formData.jobTitle}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Company <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Mobile / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+966 5X XXX XXXX"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Client Type / Role
              </label>
              <select
                name="clientType"
                value={formData.clientType}
                onChange={handleChange}
                className={inputClass + ' bg-white'}
              >
                <option value="">Select role</option>
                {[
                  'Architect',
                  'Main Contractor',
                  'Developer / Owner',
                  'Façade Consultant',
                  'Subcontractor',
                  'Government Entity',
                ].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* Technical Notes */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Project Notes / Requirements
          </label>
          <textarea
            name="notes"
            rows={5}
            placeholder="Describe your project, any special requirements, design references, or questions..."
            value={formData.notes}
            onChange={handleChange}
            className={inputClass + ' resize-none'}
          />
        </div>

        {/* Error banner */}
        {submitState === 'error' && errorMessage && (
          <div className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/30 rounded-sm">
            <svg
              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p className="text-accent text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={submitState === 'loading'}
            className="w-full sm:w-auto px-10 py-4 bg-accent text-white font-semibold rounded-sm
              hover:bg-accent-dark transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitState === 'loading' ? 'Submitting…' : 'Submit Request for Quotation'}
          </button>
          <p className="text-gray-400 text-xs mt-3">
            Fields marked <span className="text-accent">*</span> are required. We will respond
            within 48 business hours. Your information is kept confidential.
          </p>
        </div>

      </form>
    </div>
  )
}
