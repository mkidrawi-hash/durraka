'use client'

import { useState, useRef, useEffect } from 'react'
import { getAttribution, trackEvent } from '@/lib/analytics'
import { type Locale } from '@/lib/i18n'
import { Ltr } from '@/components/i18n/Ltr'
import { catalogContent } from '@/content/en/catalog'
import { catalogContentAr } from '@/content/ar/catalog'

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
type Status = 'idle' | 'submitting' | 'success' | 'error'

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
      {required && <span className="text-accent ms-0.5">*</span>}
    </label>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function DetailedCatalogRequestForm({ locale = 'en' }: { locale?: Locale }) {
  // English dict supplies the option VALUES stored to Sheets; the localized dict
  // supplies display labels (same index order → same stored English value).
  const EN = catalogContent.form
  const t = (locale === 'ar' ? catalogContentAr : catalogContent).form

  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [apiError, setApiError] = useState('')
  const [reference, setReference] = useState('')

  const successRef = useRef<HTMLDivElement>(null)
  const errorRef = useRef<HTMLDivElement>(null)

  // After a submission resolves, scroll the relevant card into view. On mobile
  // the form is much taller than the success card, so once the form unmounts
  // the page collapses and the browser would otherwise leave the viewport
  // pinned near the footer. Explicitly centring the result card prevents the
  // "blank page / only footer" effect.
  useEffect(() => {
    if (status === 'success') {
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
    const v = t.validation
    const e: FieldErrors = {}
    if (!form.fullName.trim()) e.fullName = v.fullName
    if (!form.company.trim()) e.company = v.company
    if (!form.email.trim()) e.email = v.email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = v.emailInvalid
    if (!form.phone.trim()) e.phone = v.phone
    if (!form.clientType) e.clientType = v.clientType
    if (!form.projectType) e.projectType = v.projectType
    if (form.interestedSystems.length === 0) e.interestedSystems = v.interestedSystems
    if (!form.cityCountry.trim()) e.cityCountry = v.cityCountry
    if (!form.timeline) e.timeline = v.timeline
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setApiError('')
    try {
      // `form` already holds the canonical English option VALUES (clientType,
      // projectType, interestedSystems, timeline) — the localized labels are
      // display-only — so the posted payload stays English on every locale.
      const res = await fetch('/api/detailed-catalog-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, attribution: getAttribution() }),
      })
      const data = await res.json()
      if (!res.ok) {
        setApiError(data.error ?? t.validation.submitFailed)
        setStatus('error')
        trackEvent('catalog_request_submit_error', { status: res.status })
        return
      }
      setReference(data.reference ?? '')
      // Controlled distribution — no auto-download. Every successful submission
      // shows the same pending-review confirmation.
      setStatus('success')
      trackEvent('catalog_request_submit', {
        clientType: form.clientType,
        projectType: form.projectType,
      })
    } catch {
      setApiError(t.validation.submitFailed)
      setStatus('error')
      trackEvent('catalog_request_submit_error', { reason: 'network' })
    }
  }

  function reset() {
    setForm(INITIAL)
    setErrors({})
    setStatus('idle')
    setApiError('')
    setReference('')
  }

  // ── Success ───────────────────────────────────────────────────────────────────

  if (status === 'success') {
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

        <h3 className="text-xl font-bold text-navy mb-2">{t.success.title}</h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          {t.success.body}
        </p>

        {reference && (
          <p className="text-xs text-gray-400 mt-5">
            {t.success.referenceLabel}{' '}
            <span className="font-mono text-accent"><Ltr>{reference}</Ltr></span>
          </p>
        )}

        <button
          onClick={reset}
          className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
        >
          {t.success.submitAnother}
        </button>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={t.ariaLabel}>
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
          <Label required>{t.labels.fullName}</Label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            placeholder={t.placeholders.fullName}
            autoComplete="name"
            className={inputCls(errors.fullName)}
          />
          <FieldError msg={errors.fullName} />
        </div>

        {/* Company */}
        <div>
          <Label required>{t.labels.company}</Label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            placeholder={t.placeholders.company}
            autoComplete="organization"
            className={inputCls(errors.company)}
          />
          <FieldError msg={errors.company} />
        </div>

        {/* Email */}
        <div>
          <Label required>{t.labels.email}</Label>
          <input
            type="email"
            dir="ltr"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder={t.placeholders.email}
            autoComplete="email"
            className={inputCls(errors.email)}
          />
          <FieldError msg={errors.email} />
        </div>

        {/* Phone */}
        <div>
          <Label required>{t.labels.phone}</Label>
          <input
            type="tel"
            dir="ltr"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder={t.placeholders.phone}
            autoComplete="tel"
            className={inputCls(errors.phone)}
          />
          <FieldError msg={errors.phone} />
        </div>

        {/* Client Type */}
        <div>
          <Label required>{t.labels.clientType}</Label>
          <select
            value={form.clientType}
            onChange={(e) => set('clientType', e.target.value)}
            className={inputCls(errors.clientType)}
          >
            <option value="">{t.selectPlaceholder}</option>
            {EN.clientTypeOptions.map((value, i) => (
              <option key={value} value={value}>{t.clientTypeOptions[i]}</option>
            ))}
          </select>
          <FieldError msg={errors.clientType} />
        </div>

        {/* Project Type */}
        <div>
          <Label required>{t.labels.projectType}</Label>
          <select
            value={form.projectType}
            onChange={(e) => set('projectType', e.target.value)}
            className={inputCls(errors.projectType)}
          >
            <option value="">{t.selectPlaceholder}</option>
            {EN.projectTypeOptions.map((value, i) => (
              <option key={value} value={value}>{t.projectTypeOptions[i]}</option>
            ))}
          </select>
          <FieldError msg={errors.projectType} />
        </div>

        {/* City / Country */}
        <div>
          <Label required>{t.labels.cityCountry}</Label>
          <input
            type="text"
            value={form.cityCountry}
            onChange={(e) => set('cityCountry', e.target.value)}
            placeholder={t.placeholders.cityCountry}
            autoComplete="address-level2"
            className={inputCls(errors.cityCountry)}
          />
          <FieldError msg={errors.cityCountry} />
        </div>

        {/* Timeline */}
        <div>
          <Label required>{t.labels.timeline}</Label>
          <select
            value={form.timeline}
            onChange={(e) => set('timeline', e.target.value)}
            className={inputCls(errors.timeline)}
          >
            <option value="">{t.selectPlaceholder}</option>
            {EN.timelineOptions.map((value, i) => (
              <option key={value} value={value}>{t.timelineOptions[i]}</option>
            ))}
          </select>
          <FieldError msg={errors.timeline} />
        </div>

      </div>

      {/* Interested Systems — multi-select */}
      <div className="mt-5">
        <Label required>{t.labels.interestedSystems}</Label>
        <div
          role="group"
          aria-label={t.systemsGroupAria}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {EN.systemOptions.map((value, i) => {
            const checked = form.interestedSystems.includes(value)
            return (
              <button
                key={value}
                type="button"
                aria-pressed={checked}
                onClick={() => toggleSystem(value)}
                className={[
                  'flex items-center gap-2.5 text-start px-3.5 py-2.5 border rounded-sm text-xs font-medium transition-all duration-150',
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
                {t.systemOptions[i]}
              </button>
            )
          })}
        </div>
        <FieldError msg={errors.interestedSystems} />
      </div>

      {/* Notes */}
      <div className="mt-5">
        <Label>
          {t.labels.notes}{' '}
          <span className="text-gray-400 font-normal normal-case tracking-normal text-[11px]">{t.labels.notesOptional}</span>
        </Label>
        <textarea
          value={form.notes}
          onChange={(e) => set('notes', e.target.value)}
          rows={3}
          placeholder={t.placeholders.notes}
          className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
        {t.privacyNote}
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
              {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </button>
      </div>
    </form>
  )
}
