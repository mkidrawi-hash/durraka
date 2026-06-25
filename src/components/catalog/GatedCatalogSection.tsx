'use client'

import { useState, useRef } from 'react'

// ── Types ──────────────────────────────────────────────────────────────────────

interface CatalogOption {
  id: string
  label: string
  tagline: string
  audience: string
  isNDA?: boolean
  icon: React.ReactNode
}

type SubmitState = 'idle' | 'submitting' | 'success-auto' | 'success-nda' | 'success-pending' | 'error'

// ── Catalog definitions ────────────────────────────────────────────────────────

const CATALOG_OPTIONS: CatalogOption[] = [
  {
    id: 'B2B Contractor / Consultant Detailed Catalog',
    label: 'B2B Contractor / Consultant',
    tagline: 'Detailed Catalog',
    audience: 'Main contractors, subcontractors, specialist consultants, quantity surveyors',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: 'B2G / Government & Semi-Government Prequalification Pack',
    label: 'B2G / Government',
    tagline: 'Prequalification Pack',
    audience: 'Government entities, semi-government authorities, public sector procurement teams',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    id: 'B2C / Private Villas & Palaces Visual Catalog',
    label: 'B2C / Private Estates',
    tagline: 'Villas & Palaces Visual Catalog',
    audience: 'Private villa & palace owners, interior architects, luxury residential developers',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: 'NDA Technical Annex Request',
    label: 'NDA Technical Annex',
    tagline: 'Confidential Engineering Data',
    audience: 'Registered architects, main contractors, and approved project stakeholders requiring structural and mix data',
    isNDA: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
]

const CLIENT_TYPES = [
  'Main Contractor',
  'Specialist Subcontractor',
  'Architect / Consultant',
  'Quantity Surveyor / Cost Consultant',
  'Developer / Investor',
  'Government / Semi-Government',
  'Private Owner (Villa / Palace)',
  'Procurement / Procurement Manager',
  'Other',
]

const PROJECT_TYPES = [
  'Hospitality (Hotel / Resort)',
  'Commercial (Office / Retail / Mixed-Use)',
  'Residential (Apartment Complex)',
  'Private Villa / Palace',
  'Government / Civic',
  'Religious (Mosque / Islamic Centre)',
  'Landmark / Cultural',
  'Educational',
  'Healthcare',
  'Other',
]

const PROJECT_STAGES = [
  'Concept / Design',
  'Schematic Design',
  'Detailed Design / DD',
  'Tender / Procurement',
  'Under Construction',
  'Fit-Out / Finishing',
  'Completed',
]

// ── Helper ─────────────────────────────────────────────────────────────────────

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-1 text-xs text-red-600">{msg}</p>
}

function inputClass(hasError: boolean) {
  return [
    'w-full px-4 py-2.5 border rounded-sm text-sm text-navy bg-white',
    'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors',
    hasError ? 'border-red-400' : 'border-gray-200 hover:border-gray-300',
  ].join(' ')
}

function selectClass(hasError: boolean) {
  return [
    'w-full px-4 py-2.5 border rounded-sm text-sm text-navy bg-white appearance-none',
    'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors',
    hasError ? 'border-red-400' : 'border-gray-200 hover:border-gray-300',
  ].join(' ')
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function GatedCatalogSection() {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [reference, setReference] = useState('')
  const [catalogUrl, setCatalogUrl] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    clientType: '',
    projectLocation: '',
    projectType: '',
    estimatedArea: '',
    projectStage: '',
    notes: '',
    consent: false,
    website: '', // honeypot
  })

  function handleCardSelect(catalogId: string) {
    setSelected(catalogId)
    setForm((f) => ({ ...f, catalogRequested: catalogId }))
    setSubmitState('idle')
    setFieldErrors({})
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  function set(field: string, value: string | boolean) {
    setForm((f) => ({ ...f, [field]: value }))
    if (fieldErrors[field]) {
      setFieldErrors((e) => { const next = { ...e }; delete next[field]; return next })
    }
  }

  function validateClient(): boolean {
    const errors: Record<string, string> = {}
    if (!form.fullName.trim()) errors.fullName = 'Full name is required.'
    if (!form.company.trim()) errors.company = 'Company or organisation name is required.'
    if (!form.email.trim()) errors.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
    if (!form.phone.trim()) errors.phone = 'Phone or WhatsApp number is required.'
    if (!form.clientType) errors.clientType = 'Please select your client type.'
    if (!form.projectLocation.trim()) errors.projectLocation = 'Project location is required.'
    if (!form.projectType) errors.projectType = 'Please select a project type.'
    if (!form.projectStage) errors.projectStage = 'Please select a project stage.'
    if (!form.consent) errors.consent = 'Please confirm your consent to be contacted.'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submitState === 'submitting') return
    if (!selected) return
    if (!validateClient()) return

    setSubmitState('submitting')
    setErrorMsg('')

    try {
      const payload = {
        fullName: form.fullName,
        company: form.company,
        email: form.email,
        phone: form.phone,
        clientType: form.clientType,
        catalogRequested: selected,
        projectLocation: form.projectLocation,
        projectType: form.projectType,
        estimatedArea: form.estimatedArea || undefined,
        projectStage: form.projectStage,
        notes: form.notes || undefined,
        consent: form.consent,
        website: form.website,
      }

      const res = await fetch('/api/catalog-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        setSubmitState('error')
        setErrorMsg(data.error ?? 'An unexpected error occurred. Please try again.')
        return
      }

      setReference(data.reference ?? '')
      setCatalogUrl(data.catalogUrl ?? null)

      if (data.isNDA) {
        setSubmitState('success-nda')
      } else if (data.catalogUrl) {
        setSubmitState('success-auto')
        setTimeout(() => { window.location.href = data.catalogUrl }, 1200)
      } else {
        setSubmitState('success-pending')
      }
    } catch {
      setSubmitState('error')
      setErrorMsg('A network error occurred. Please check your connection and try again.')
    }
  }

  function resetForm() {
    setSelected(null)
    setSubmitState('idle')
    setErrorMsg('')
    setReference('')
    setCatalogUrl(null)
    setFieldErrors({})
    setForm({
      fullName: '', company: '', email: '', phone: '',
      clientType: '', projectLocation: '', projectType: '',
      estimatedArea: '', projectStage: '', notes: '',
      consent: false, website: '',
    })
  }

  const selectedOption = CATALOG_OPTIONS.find((o) => o.id === selected)

  return (
    <div>
      {/* ── Catalog Type Cards ─────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-px bg-navy/20" aria-hidden="true" />
        <span className="text-navy/40 text-xs font-semibold tracking-widest uppercase">
          Technical Review Required
        </span>
      </div>
      <h2 className="text-2xl font-bold text-navy mb-2">Detailed Technical Catalogs</h2>
      <p className="text-gray-500 text-sm mb-8 max-w-xl leading-relaxed">
        Select a catalog below to unlock the request form. All requests are reviewed by our
        technical team and fulfilled within 1–2 business days.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
        {CATALOG_OPTIONS.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleCardSelect(opt.id)}
              className={[
                'text-left w-full p-5 border rounded-sm transition-all duration-200 group',
                isSelected
                  ? 'border-accent bg-accent/[0.04] shadow-sm'
                  : 'border-gray-100 hover:border-accent/40 hover:shadow-sm bg-white',
              ].join(' ')}
              aria-pressed={isSelected}
            >
              <div className="flex items-start gap-4">
                <div className={[
                  'w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors',
                  isSelected ? 'bg-accent text-white' : 'bg-navy/5 text-navy/40 group-hover:bg-navy/10',
                ].join(' ')}>
                  {opt.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-navy font-semibold text-sm leading-snug">{opt.label}</span>
                    {opt.isNDA && (
                      <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-widest uppercase bg-navy/10 text-navy/50 rounded-sm">
                        NDA
                      </span>
                    )}
                  </div>
                  <p className={[
                    'text-xs font-semibold mb-1.5',
                    isSelected ? 'text-accent' : 'text-navy/40',
                  ].join(' ')}>
                    {opt.tagline}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">{opt.audience}</p>
                </div>
                <div className={[
                  'w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all',
                  isSelected ? 'border-accent bg-accent' : 'border-gray-300',
                ].join(' ')}>
                  {isSelected && (
                    <svg className="w-full h-full text-white" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* ── Request Form ──────────────────────────────────────────────────────── */}
      <div ref={formRef}>
        {!selected && (
          <div className="border border-dashed border-gray-200 rounded-sm p-10 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-sm bg-gray-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Select a catalog above to open the request form.</p>
          </div>
        )}

        {selected && (
          <div className="border border-gray-100 rounded-sm overflow-hidden">
            {/* Form header */}
            <div className="bg-navy px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/50 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    Requesting
                  </p>
                  <h3 className="text-white font-bold text-base leading-snug">
                    {selectedOption?.label}
                  </h3>
                  <p className="text-accent text-xs font-semibold mt-0.5">{selectedOption?.tagline}</p>
                </div>
                {selectedOption?.isNDA && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 rounded-sm">
                    <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">NDA Required</span>
                  </div>
                )}
              </div>
            </div>

            {/* Success states */}
            {(submitState === 'success-auto' || submitState === 'success-nda' || submitState === 'success-pending') && (
              <div className="p-8 sm:p-10">
                {submitState === 'success-auto' && (
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-navy font-bold text-lg mb-2">Download Starting…</h4>
                    <p className="text-gray-500 text-sm mb-1">
                      Your catalog is opening now. If the download does not start automatically,{' '}
                      {catalogUrl && (
                        <a href={catalogUrl} className="text-accent hover:underline font-medium" download>
                          click here to download
                        </a>
                      )}.
                    </p>
                    <p className="text-gray-400 text-xs mt-4">Reference: <span className="font-mono font-semibold text-navy">{reference}</span></p>
                    <button onClick={resetForm} className="mt-6 text-xs text-navy/50 hover:text-navy underline underline-offset-2 transition-colors">
                      Request another catalog
                    </button>
                  </div>
                )}

                {submitState === 'success-nda' && (
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-navy/5 flex items-center justify-center">
                      <svg className="w-6 h-6 text-navy/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <h4 className="text-navy font-bold text-lg mb-2">Request Received — Manual Review</h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2 max-w-md mx-auto">
                      Your NDA Technical Annex request has been logged. Our technical team will
                      review your submission and contact you within 1–2 business days to proceed
                      with the NDA process.
                    </p>
                    <p className="text-gray-400 text-xs mt-4">Reference: <span className="font-mono font-semibold text-navy">{reference}</span></p>
                    <button onClick={resetForm} className="mt-6 text-xs text-navy/50 hover:text-navy underline underline-offset-2 transition-colors">
                      Submit another request
                    </button>
                  </div>
                )}

                {submitState === 'success-pending' && (
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-navy font-bold text-lg mb-2">Request Submitted</h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2 max-w-md mx-auto">
                      Your request has been logged. Our team will review it and send the catalog
                      to your email address within 1–2 business days.
                    </p>
                    <p className="text-gray-400 text-xs mt-4">Reference: <span className="font-mono font-semibold text-navy">{reference}</span></p>
                    <button onClick={resetForm} className="mt-6 text-xs text-navy/50 hover:text-navy underline underline-offset-2 transition-colors">
                      Request another catalog
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Form fields */}
            {(submitState === 'idle' || submitState === 'submitting' || submitState === 'error') && (
              <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-8">
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => set('website', e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {/* Section: Contact */}
                <fieldset>
                  <legend className="text-[10px] font-bold tracking-widest uppercase text-navy/40 mb-4 pb-2 border-b border-gray-100 w-full">
                    Contact Details
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-fullName">
                        Full Name <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="cr-fullName"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => set('fullName', e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        className={inputClass(!!fieldErrors.fullName)}
                      />
                      <FieldError msg={fieldErrors.fullName} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-company">
                        Company / Organisation <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="cr-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => set('company', e.target.value)}
                        placeholder="Your company or organisation"
                        autoComplete="organization"
                        className={inputClass(!!fieldErrors.company)}
                      />
                      <FieldError msg={fieldErrors.company} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-email">
                        Email Address <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="cr-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@company.com"
                        autoComplete="email"
                        className={inputClass(!!fieldErrors.email)}
                      />
                      <FieldError msg={fieldErrors.email} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-phone">
                        Phone / WhatsApp <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="cr-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="+966 5X XXX XXXX"
                        autoComplete="tel"
                        className={inputClass(!!fieldErrors.phone)}
                      />
                      <FieldError msg={fieldErrors.phone} />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-clientType">
                        Client Type <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="cr-clientType"
                          value={form.clientType}
                          onChange={(e) => set('clientType', e.target.value)}
                          className={selectClass(!!fieldErrors.clientType)}
                        >
                          <option value="">Select your role…</option>
                          {CLIENT_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <FieldError msg={fieldErrors.clientType} />
                    </div>
                  </div>
                </fieldset>

                {/* Section: Project */}
                <fieldset>
                  <legend className="text-[10px] font-bold tracking-widest uppercase text-navy/40 mb-4 pb-2 border-b border-gray-100 w-full">
                    Project Details
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-projectLocation">
                        Project Location / City <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="cr-projectLocation"
                        type="text"
                        value={form.projectLocation}
                        onChange={(e) => set('projectLocation', e.target.value)}
                        placeholder="e.g. Riyadh, Jeddah, Dubai"
                        className={inputClass(!!fieldErrors.projectLocation)}
                      />
                      <FieldError msg={fieldErrors.projectLocation} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-estimatedArea">
                        Estimated Scope Area (m²)
                      </label>
                      <input
                        id="cr-estimatedArea"
                        type="text"
                        value={form.estimatedArea}
                        onChange={(e) => set('estimatedArea', e.target.value)}
                        placeholder="e.g. 800 m² (optional)"
                        className={inputClass(false)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-projectType">
                        Project Type <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="cr-projectType"
                          value={form.projectType}
                          onChange={(e) => set('projectType', e.target.value)}
                          className={selectClass(!!fieldErrors.projectType)}
                        >
                          <option value="">Select project type…</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <FieldError msg={fieldErrors.projectType} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-projectStage">
                        Project Stage <span className="text-accent" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="cr-projectStage"
                          value={form.projectStage}
                          onChange={(e) => set('projectStage', e.target.value)}
                          className={selectClass(!!fieldErrors.projectStage)}
                        >
                          <option value="">Select project stage…</option>
                          {PROJECT_STAGES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <FieldError msg={fieldErrors.projectStage} />
                    </div>
                  </div>
                </fieldset>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-navy/70 mb-1.5" htmlFor="cr-notes">
                    Additional Notes
                  </label>
                  <textarea
                    id="cr-notes"
                    value={form.notes}
                    onChange={(e) => set('notes', e.target.value)}
                    rows={3}
                    placeholder="Any specific requirements, system preferences, or context that would help us prepare the right documentation…"
                    className={[
                      'w-full px-4 py-2.5 border border-gray-200 hover:border-gray-300 rounded-sm text-sm text-navy bg-white resize-none',
                      'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors',
                    ].join(' ')}
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => set('consent', e.target.checked)}
                        className="sr-only peer"
                        id="cr-consent"
                      />
                      <div className={[
                        'w-5 h-5 border-2 rounded-sm transition-all',
                        'peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40 peer-focus-visible:ring-offset-1',
                        form.consent ? 'bg-accent border-accent' : fieldErrors.consent ? 'border-red-400' : 'border-gray-300 group-hover:border-gray-400',
                      ].join(' ')} aria-hidden="true">
                        {form.consent && (
                          <svg className="w-full h-full text-white p-0.5" viewBox="0 0 16 16" fill="none">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 leading-relaxed select-none">
                      I confirm that the information provided is accurate and I consent to Durraka
                      Factory for Industry contacting me regarding my catalog request and related
                      technical matters. I understand my data will be processed in accordance with
                      the{' '}
                      <a href="/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>.{' '}
                      <span className="text-accent font-semibold" aria-hidden="true">*</span>
                    </span>
                  </label>
                  <FieldError msg={fieldErrors.consent} />
                </div>

                {/* API error */}
                {submitState === 'error' && errorMsg && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-sm">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                )}

                {/* NDA notice */}
                {selectedOption?.isNDA && (
                  <div className="flex items-start gap-3 p-4 bg-navy/[0.03] border border-navy/10 rounded-sm">
                    <svg className="w-4 h-4 text-navy/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <p className="text-xs text-navy/50 leading-relaxed">
                      This request requires manual approval and execution of a Non-Disclosure
                      Agreement before the Technical Annex is released. Our technical team will
                      contact you to initiate the process.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-gray-100">
                  <p className="text-[11px] text-gray-400 leading-relaxed max-w-xs">
                    Fulfillment within 1–2 business days. Your information is handled in strict confidence.
                  </p>
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    aria-busy={submitState === 'submitting'}
                    className={[
                      'flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-sm text-sm font-semibold transition-all duration-200',
                      submitState === 'submitting'
                        ? 'bg-accent/60 text-white cursor-wait'
                        : 'bg-accent text-white hover:bg-accent-dark active:scale-[0.98]',
                    ].join(' ')}
                  >
                    {submitState === 'submitting' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin flex-shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Submitting…
                      </>
                    ) : selectedOption?.isNDA ? (
                      <>
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        Submit NDA Request
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Request Catalog Access
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
