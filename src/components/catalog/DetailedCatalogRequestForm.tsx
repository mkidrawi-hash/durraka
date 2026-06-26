'use client'

import { useState, useRef, useEffect } from 'react'

// ── Constants ─────────────────────────────────────────────────────────────────

const CLIENT_TYPES = [
  'Contractor',
  'Consultant',
  'Developer',
  'Government / Semi-Government',
  'Private Client',
  'Designer / Architect',
  'Other',
] as const

const PROJECT_TYPES = [
  'Villa',
  'Commercial',
  'Hospitality',
  'Mosque',
  'Government / Civic',
  'Residential Compound',
  'Mixed-use',
  'Other',
] as const

const SYSTEMS = [
  'GFRC/GRC Façade Cladding',
  'Cornices & Profiles',
  'Domes & Vaults',
  'Columns & Capitals',
  'Mashrabiya Screens',
  'Custom Decorative Elements',
] as const

const TIMELINES = [
  'Immediate',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Not sure yet',
] as const

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormData {
  fullName: string
  company: string
  email: string
  phone: string
  clientType: string
  projectType: string
  interestedSystems: string[]
  cityCountry: string
  timeline: string
  notes: string
  website: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>
type Status = 'idle' | 'submitting' | 'success-auto' | 'success-manual' | 'error'

const INITIAL: FormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  clientType: '',
  projectType: '',
  interestedSystems: [],
  cityCountry: '',
  timeline: '',
  notes: '',
  website: '',
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function inputCls(error?: string) {
  return [
    'w-full border rounded-sm px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 bg-white',
    'focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors',
    error ? 'border-red-300 bg-red-50/30' : 'border-gray-200',
  ].join(' ')
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="text-accent text-xs mt-1">{msg}</p>
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[11px] font-semibold text-navy uppercase tracking-wider mb-1.5">
      {children}
      {required && <span className="text-accent ml-0.5">*</span>}
    </label>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function DetailedCatalogRequestForm() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [apiError, setApiError] = useState('')
  const [reference, setReference] = useState('')
  const [catalogUrl, setCatalogUrl] = useState<string | null>(null)

  const successRef = useRef<HTMLDivElement>(null)
  const errorRef = useRef<HTMLDivElement>(null)

  // After a submission resolves, scroll the relevant card into view. On mobile
  // the form is much taller than the success card, so once the form unmounts
  // the page collapses and the browser would otherwise leave the viewport
  // pinned near the footer. Explicitly centring the result card prevents the
  // "blank page / only footer" effect.
  useEffect(() => {
    if (status === 'success-auto' || status === 'success-manual') {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (status === 'error') {
      errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [status])

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }))
  }

  function toggleSystem(system: string) {
    setForm((f) => ({
      ...f,
      interestedSystems: f.interestedSystems.includes(system)
        ? f.interestedSystems.filter((s) => s !== system)
        : [...f.interestedSystems, system],
    }))
    if (errors.interestedSystems) setErrors((e) => ({ ...e, interestedSystems: '' }))
  }

  function validate(): boolean {
    const e: FieldErrors = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.company.trim()) e.company = 'Company name is required.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Phone / WhatsApp is required.'
    if (!form.clientType) e.clientType = 'Please select your client type.'
    if (!form.projectType) e.projectType = 'Please select your project type.'
    if (form.interestedSystems.length === 0) e.interestedSystems = 'Please select at least one system.'
    if (!form.cityCountry.trim()) e.cityCountry = 'City / Country is required.'
    if (!form.timeline) e.timeline = 'Please select your project timeline.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setApiError('')
    try {
      const res = await fetch('/api/detailed-catalog-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setApiError(data.error ?? 'Submission failed. Please try again or contact info@durraka.com.')
        setStatus('error')
        return
      }
      setReference(data.reference ?? '')
      // Auto-access only when a non-empty download URL is returned — never
      // redirect to an empty/undefined URL.
      if (typeof data.catalogUrl === 'string' && data.catalogUrl.trim() !== '') {
        setCatalogUrl(data.catalogUrl)
        setStatus('success-auto')
      } else {
        setCatalogUrl(null)
        setStatus('success-manual')
      }
    } catch {
      setApiError('Submission failed. Please try again or contact info@durraka.com.')
      setStatus('error')
    }
  }

  function reset() {
    setForm(INITIAL)
    setErrors({})
    setStatus('idle')
    setApiError('')
    setReference('')
    setCatalogUrl(null)
  }

  // ── Success ───────────────────────────────────────────────────────────────────

  if (status === 'success-auto' || status === 'success-manual') {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        className="text-center py-10 px-6 max-w-md mx-auto scroll-mt-24"
      >
        <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-navy mb-2">Request Received</h3>

        {status === 'success-auto' && catalogUrl ? (
          <>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your request was received. Download the Detailed Technical Catalog below.
            </p>
            <a
              href={catalogUrl}
              className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Detailed Catalog
            </a>
            <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
              This download link is private and expires shortly. Please save the file after downloading.
            </p>
          </>
        ) : (
          <p className="text-gray-500 text-sm leading-relaxed">
            Access request submitted. Our team will review and respond shortly.
          </p>
        )}

        {reference && (
          <p className="text-xs text-gray-400 mt-5">
            Reference:{' '}
            <span className="font-mono text-accent">{reference}</span>
          </p>
        )}

        <button
          onClick={reset}
          className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Detailed catalog request form">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => set('website', e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

        {/* Full Name */}
        <div>
          <Label required>Full Name</Label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            placeholder="Ahmed Al-Rashidi"
            autoComplete="name"
            className={inputCls(errors.fullName)}
          />
          <FieldError msg={errors.fullName} />
        </div>

        {/* Company */}
        <div>
          <Label required>Company Name</Label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            placeholder="Al-Rashidi Engineering Co."
            autoComplete="organization"
            className={inputCls(errors.company)}
          />
          <FieldError msg={errors.company} />
        </div>

        {/* Email */}
        <div>
          <Label required>Email</Label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="ahmed@company.com"
            autoComplete="email"
            className={inputCls(errors.email)}
          />
          <FieldError msg={errors.email} />
        </div>

        {/* Phone */}
        <div>
          <Label required>Phone / WhatsApp</Label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="+966 5X XXX XXXX"
            autoComplete="tel"
            className={inputCls(errors.phone)}
          />
          <FieldError msg={errors.phone} />
        </div>

        {/* Client Type */}
        <div>
          <Label required>Client Type</Label>
          <select
            value={form.clientType}
            onChange={(e) => set('clientType', e.target.value)}
            className={inputCls(errors.clientType)}
          >
            <option value="">Select…</option>
            {CLIENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <FieldError msg={errors.clientType} />
        </div>

        {/* Project Type */}
        <div>
          <Label required>Project Type</Label>
          <select
            value={form.projectType}
            onChange={(e) => set('projectType', e.target.value)}
            className={inputCls(errors.projectType)}
          >
            <option value="">Select…</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <FieldError msg={errors.projectType} />
        </div>

        {/* City / Country */}
        <div>
          <Label required>City / Country</Label>
          <input
            type="text"
            value={form.cityCountry}
            onChange={(e) => set('cityCountry', e.target.value)}
            placeholder="Jeddah, Saudi Arabia"
            autoComplete="address-level2"
            className={inputCls(errors.cityCountry)}
          />
          <FieldError msg={errors.cityCountry} />
        </div>

        {/* Timeline */}
        <div>
          <Label required>Estimated Project Timeline</Label>
          <select
            value={form.timeline}
            onChange={(e) => set('timeline', e.target.value)}
            className={inputCls(errors.timeline)}
          >
            <option value="">Select…</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <FieldError msg={errors.timeline} />
        </div>

      </div>

      {/* Interested Systems — multi-select */}
      <div className="mt-5">
        <Label required>Interested Systems</Label>
        <div
          role="group"
          aria-label="Select systems of interest"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {SYSTEMS.map((system) => {
            const checked = form.interestedSystems.includes(system)
            return (
              <button
                key={system}
                type="button"
                aria-pressed={checked}
                onClick={() => toggleSystem(system)}
                className={[
                  'flex items-center gap-2.5 text-left px-3.5 py-2.5 border rounded-sm text-xs font-medium transition-all duration-150',
                  checked
                    ? 'border-accent bg-accent/5 text-navy'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50',
                  errors.interestedSystems ? 'border-red-200' : '',
                ].join(' ')}
              >
                <span
                  className={[
                    'inline-flex items-center justify-center w-4 h-4 rounded-[3px] border flex-shrink-0 transition-colors',
                    checked ? 'bg-accent border-accent' : 'border-gray-300 bg-white',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {checked && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                {system}
              </button>
            )
          })}
        </div>
        <FieldError msg={errors.interestedSystems} />
      </div>

      {/* Notes */}
      <div className="mt-5">
        <Label>
          Message / Project Notes{' '}
          <span className="text-gray-400 font-normal normal-case tracking-normal text-[11px]">(Optional)</span>
        </Label>
        <textarea
          value={form.notes}
          onChange={(e) => set('notes', e.target.value)}
          rows={3}
          placeholder="Briefly describe your project or any specific requirements…"
          className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
        Your information is used only to process catalog access and project inquiries.
      </p>

      {/* API error */}
      {status === 'error' && apiError && (
        <div
          ref={errorRef}
          role="alert"
          aria-live="assertive"
          className="mt-4 p-3 bg-red-50 border border-red-100 rounded-sm scroll-mt-24"
        >
          <p className="text-accent text-sm">{apiError}</p>
        </div>
      )}

      {/* Submit */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy/90 active:bg-navy disabled:opacity-60 disabled:cursor-wait transition-all w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <svg className="w-4 h-4 animate-spin flex-shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Submitting…
            </>
          ) : (
            'Request Detailed Catalog'
          )}
        </button>
      </div>
    </form>
  )
}
