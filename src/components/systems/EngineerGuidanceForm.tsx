'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { engineerGuidanceContent as C } from '@/content/en/systems/engineer-guidance'

interface FormData {
  fullName: string
  company: string
  role: string
  email: string
  phone: string
  projectLocation: string
  projectType: string
  approxScope: string
  timeline: string
  notes: string
  website: string // honeypot
}

type FieldErrors = Partial<Record<keyof FormData, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const INITIAL: FormData = {
  fullName: '', company: '', role: '', email: '', phone: '',
  projectLocation: '', projectType: '', approxScope: '', timeline: '', notes: '', website: '',
}

function inputCls(error?: string) {
  return [
    'w-full border rounded-sm px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 bg-white',
    'focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors',
    error ? 'border-red-300 bg-red-50/30' : 'border-gray-200',
  ].join(' ')
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[11px] font-semibold text-navy uppercase tracking-wider mb-1.5">
      {children}
      {required && <span className="text-accent ml-0.5">*</span>}
    </label>
  )
}

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="text-accent text-xs mt-1">{msg}</p> : null
}

export default function EngineerGuidanceForm() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [apiError, setApiError] = useState('')
  const [reference, setReference] = useState('')

  const successRef = useRef<HTMLDivElement>(null)
  const errorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status === 'success') successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    else if (status === 'error') errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [status])

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }))
  }

  function validate(): boolean {
    const e: FieldErrors = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.company.trim()) e.company = 'Company is required.'
    if (!form.role) e.role = 'Please select your role.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Phone / WhatsApp is required.'
    if (!form.projectLocation.trim()) e.projectLocation = 'Project location is required.'
    if (!form.projectType) e.projectType = 'Please select a project type.'
    if (!form.timeline) e.timeline = 'Please select a timeline.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setApiError('')
    try {
      const res = await fetch('/api/engineer-guidance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setApiError(data.error ?? C.errorFallback)
        setStatus('error')
        return
      }
      setReference(data.reference ?? '')
      setStatus('success')
    } catch {
      setApiError(C.errorFallback)
      setStatus('error')
    }
  }

  function reset() {
    setForm(INITIAL); setErrors({}); setStatus('idle'); setApiError(''); setReference('')
  }

  if (status === 'success') {
    return (
      <div ref={successRef} role="status" aria-live="polite" className="text-center py-10 px-6 max-w-md mx-auto scroll-mt-24">
        <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">{C.confirmationTitle}</h3>
        {reference && (
          <p className="text-sm text-gray-500 mb-1">
            {C.confirmationReferenceLabel}:{' '}
            <span className="font-mono font-semibold text-accent">{reference}</span>
          </p>
        )}
        <p className="text-gray-500 text-sm leading-relaxed">{C.confirmationBody}</p>
        <button onClick={reset} className="mt-5 text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors">
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Engineer guidance request form">
      {/* Honeypot */}
      <input type="text" name="website" value={form.website} onChange={(e) => set('website', e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
        <div>
          <Label required>Full Name</Label>
          <input type="text" value={form.fullName} onChange={(e) => set('fullName', e.target.value)} autoComplete="name" className={inputCls(errors.fullName)} />
          <FieldError msg={errors.fullName} />
        </div>
        <div>
          <Label required>Company</Label>
          <input type="text" value={form.company} onChange={(e) => set('company', e.target.value)} autoComplete="organization" className={inputCls(errors.company)} />
          <FieldError msg={errors.company} />
        </div>
        <div>
          <Label required>Role</Label>
          <select value={form.role} onChange={(e) => set('role', e.target.value)} className={inputCls(errors.role)}>
            <option value="">Select…</option>
            {C.roles.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <FieldError msg={errors.role} />
        </div>
        <div>
          <Label required>Email</Label>
          <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" className={inputCls(errors.email)} />
          <FieldError msg={errors.email} />
        </div>
        <div>
          <Label required>Phone / WhatsApp</Label>
          <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" placeholder="+966 5X XXX XXXX" className={inputCls(errors.phone)} />
          <FieldError msg={errors.phone} />
        </div>
        <div>
          <Label required>Project Location (City)</Label>
          <input type="text" value={form.projectLocation} onChange={(e) => set('projectLocation', e.target.value)} autoComplete="address-level2" className={inputCls(errors.projectLocation)} />
          <FieldError msg={errors.projectLocation} />
        </div>
        <div>
          <Label required>Project Type</Label>
          <select value={form.projectType} onChange={(e) => set('projectType', e.target.value)} className={inputCls(errors.projectType)}>
            <option value="">Select…</option>
            {C.projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <FieldError msg={errors.projectType} />
        </div>
        <div>
          <Label required>Timeline</Label>
          <select value={form.timeline} onChange={(e) => set('timeline', e.target.value)} className={inputCls(errors.timeline)}>
            <option value="">Select…</option>
            {C.timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <FieldError msg={errors.timeline} />
        </div>
      </div>

      <div className="mt-4">
        <Label>Approximate Scope / Areas <span className="text-gray-400 font-normal normal-case tracking-normal text-[11px]">(Optional)</span></Label>
        <input type="text" value={form.approxScope} onChange={(e) => set('approxScope', e.target.value)} placeholder="e.g. approximate façade areas or quantities" className={inputCls()} />
      </div>

      <div className="mt-4">
        <Label>Notes <span className="text-gray-400 font-normal normal-case tracking-normal text-[11px]">(Optional)</span></Label>
        <textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} rows={3} placeholder="Briefly describe your project or design intent…" className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none" />
      </div>

      <p className="text-[11px] text-gray-500 mt-4 leading-relaxed border-l-2 border-accent/40 pl-3">{C.consentLine}</p>

      {status === 'error' && apiError && (
        <div ref={errorRef} role="alert" aria-live="assertive" className="mt-4 p-3 bg-red-50 border border-red-100 rounded-sm scroll-mt-24">
          <p className="text-accent text-sm">{apiError}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button type="submit" disabled={status === 'submitting'} className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy/90 disabled:opacity-60 disabled:cursor-wait transition-all w-full sm:w-auto">
          {status === 'submitting' ? (
            <>
              <svg className="w-4 h-4 animate-spin flex-shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Submitting…
            </>
          ) : C.submitLabel}
        </button>
        <Link href="/systems/gfrc-grc-facade-cladding" className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-navy/25 text-navy text-sm font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors w-full sm:w-auto">
          Back to System
        </Link>
      </div>
    </form>
  )
}
