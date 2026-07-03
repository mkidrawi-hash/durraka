'use client'

import { useState, useRef, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { getDictionary } from '@/content/dictionaries'
import { localizeHref, type Locale } from '@/lib/i18n'
import { Ltr } from '@/components/i18n/Ltr'
import { getAttribution, trackEvent } from '@/lib/analytics'

const ACCEPTED_FORMATS = '.pdf,.dwg,.dxf,.xls,.xlsx,.doc,.docx,.jpg,.jpeg,.png,.zip'
const MAX_FILE_BYTES = 25 * 1024 * 1024

// `slotEn` is the canonical English slot name stored to Sheets; `label` is the
// localized name shown to the user. Keeping them separate preserves English
// stored values on /ar (see the i18n data-integrity rule).
type FileSlot = { slotEn: string; label: string; file: File | null }
type AttachedFileMeta = { name: string; size: number; type: string; slot: string }

type FormData = {
  projectName: string
  projectLocation: string
  systemRequired: string
  estimatedArea: string
  projectType: string
  deliveryDate: string
  // Phase 3 conditional qualification fields (shown once a project type is chosen)
  scaleBand: string
  consultantAppointed: string
  targetStart: string
  fullName: string
  jobTitle: string
  company: string
  email: string
  phone: string
  clientType: string
  notes: string
  largeFileLink: string
  fileLinkNotes: string
  drawingsNotAvailable: boolean
  needDrawingSupport: boolean
  website: string // honeypot
}

const EMPTY_FORM: FormData = {
  projectName: '',
  projectLocation: '',
  systemRequired: '',
  estimatedArea: '',
  projectType: '',
  deliveryDate: '',
  scaleBand: '',
  consultantAppointed: '',
  targetStart: '',
  fullName: '',
  jobTitle: '',
  company: '',
  email: '',
  phone: '',
  clientType: '',
  notes: '',
  largeFileLink: '',
  fileLinkNotes: '',
  drawingsNotAvailable: false,
  needDrawingSupport: false,
  website: '',
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm'

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

export default function RFQForm({ locale = 'en' }: { locale?: Locale }) {
  // English dict supplies the option VALUES stored to Sheets; the localized dict
  // supplies display labels (same index order → same stored value).
  const EN = getDictionary('en').rfq
  const t = getDictionary(locale).rfq
  const enF = EN.form
  const f = t.form

  const makeSlots = (): FileSlot[] =>
    enF.attachments.slotLabels.map((slotEn, i) => ({
      slotEn,
      label: f.attachments.slotLabels[i],
      file: null,
    }))

  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [fileSlots, setFileSlots] = useState<FileSlot[]>(() => makeSlots())
  const [fileErrors, setFileErrors] = useState<(string | null)[]>(Array(4).fill(null))
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [reference, setReference] = useState('')
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null, null])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => {
        const next = { ...prev, [name]: checked }
        if (name === 'drawingsNotAvailable' && !checked) {
          next.needDrawingSupport = false
        }
        return next
      })
    } else {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }))
    }
  }

  const handleFileChange = (idx: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    if (file && file.size > MAX_FILE_BYTES) {
      setFileErrors((prev) => prev.map((err, i) => (i === idx ? f.attachments.fileTooLarge : err)))
      e.target.value = ''
      return
    }
    setFileErrors((prev) => prev.map((err, i) => (i === idx ? null : err)))
    setFileSlots((prev) => prev.map((s, i) => (i === idx ? { ...s, file } : s)))
  }

  const clearFile = (idx: number) => {
    setFileSlots((prev) => prev.map((s, i) => (i === idx ? { ...s, file: null } : s)))
    setFileErrors((prev) => prev.map((err, i) => (i === idx ? null : err)))
    if (fileInputRefs.current[idx]) fileInputRefs.current[idx]!.value = ''
  }

  const validate = (): string | null => {
    const v = f.validation
    if (!formData.fullName.trim()) return v.fullName
    if (!formData.company.trim()) return v.company
    if (!formData.email.trim()) return v.email
    if (!formData.projectName.trim()) return v.projectName
    if (!formData.projectLocation.trim()) return v.projectLocation
    if (!formData.systemRequired.trim()) return v.systemRequired
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return v.emailInvalid
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

    // Stored slot names stay English (s.slotEn) so the notification/Sheet columns
    // remain consistent regardless of the visitor's locale.
    const attachments: AttachedFileMeta[] = fileSlots
      .filter((s) => s.file)
      .map((s) => ({ name: s.file!.name, size: s.file!.size, type: s.file!.type, slot: s.slotEn }))

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, attachments, attribution: getAttribution() }),
      })

      const json = (await res.json()) as { success?: boolean; reference?: string; error?: string }

      if (!res.ok || !json.success) {
        setErrorMessage(json.error ?? f.validation.submitFailed)
        setSubmitState('error')
        trackEvent('rfq_submit_error', { status: res.status })
        return
      }

      setReference(json.reference ?? '')
      setSubmitState('success')
      trackEvent('rfq_submit', {
        projectType: formData.projectType,
        clientType: formData.clientType,
        system: formData.systemRequired,
      })
    } catch {
      setErrorMessage(f.validation.networkError)
      setSubmitState('error')
      trackEvent('rfq_submit_error', { reason: 'network' })
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
          {t.success.title}
        </h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          {t.success.body}
        </p>

        <div className="inline-block bg-navy/5 border border-navy/20 rounded-sm px-10 py-5 mb-10">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">{t.success.referenceLabel}</p>
          <p className="text-2xl sm:text-3xl font-bold text-accent tracking-wider">
            <Ltr>{reference}</Ltr>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => {
              setFormData(EMPTY_FORM)
              setFileSlots(makeSlots())
              setFileErrors(Array(4).fill(null))
              setSubmitState('idle')
              setReference('')
            }}
            className="px-6 py-3 border border-navy text-navy text-sm font-semibold rounded-sm hover:bg-navy hover:text-white transition-colors"
          >
            {t.success.submitAnother}
          </button>
          <Link
            href={localizeHref('/', locale)}
            className="px-6 py-3 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors"
          >
            {t.success.returnHome}
          </Link>
        </div>
      </div>
    )
  }

  // ── Form view ───────────────────────────────────────────────────────────────
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <form onSubmit={handleSubmit} className="space-y-10" noValidate aria-label={f.ariaLabel}>

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
        <div className="border border-gray-100 sm:border-0 rounded-sm p-5 sm:p-0">
        <fieldset>
          <legend className="text-navy font-bold text-xl mb-6 pb-3 border-b border-gray-100 w-full">
            {f.projectInfoLegend}
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.projectName} <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="projectName"
                required
                placeholder={f.placeholders.projectName}
                value={formData.projectName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.projectLocation} <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="projectLocation"
                required
                placeholder={f.placeholders.projectLocation}
                value={formData.projectLocation}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.systemRequired} <span className="text-accent">*</span>
              </label>
              <select
                name="systemRequired"
                required
                value={formData.systemRequired}
                onChange={handleChange}
                className={inputClass + ' bg-white'}
              >
                <option value="">{f.selectPlaceholders.system}</option>
                {enF.systemOptions.map((value, i) => (
                  <option key={value} value={value}>{f.systemOptions[i]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.estimatedArea}
              </label>
              <input
                type="number"
                name="estimatedArea"
                dir="ltr"
                min="1"
                placeholder={f.placeholders.estimatedArea}
                value={formData.estimatedArea}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">{f.labels.projectType}</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={inputClass + ' bg-white'}
              >
                <option value="">{f.selectPlaceholders.projectType}</option>
                {enF.projectTypeOptions.map((value, i) => (
                  <option key={value} value={value}>{f.projectTypeOptions[i]}</option>
                ))}
              </select>
            </div>

            {/* Phase 3 — conditional qualification fields (appear once a type is chosen) */}
            {formData.projectType && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">{t.qualification.scaleBand.label}</label>
                  <select name="scaleBand" value={formData.scaleBand} onChange={handleChange} className={inputClass + ' bg-white'}>
                    <option value="">{t.qualification.scaleBand.placeholder}</option>
                    {EN.qualification.scaleBand.options.map((value, i) => (
                      <option key={value} value={value}>{t.qualification.scaleBand.options[i]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">{t.qualification.consultantAppointed.label}</label>
                  <select name="consultantAppointed" value={formData.consultantAppointed} onChange={handleChange} className={inputClass + ' bg-white'}>
                    <option value="">{t.qualification.consultantAppointed.placeholder}</option>
                    {EN.qualification.consultantAppointed.options.map((value, i) => (
                      <option key={value} value={value}>{t.qualification.consultantAppointed.options[i]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">{t.qualification.targetStart.label}</label>
                  <select name="targetStart" value={formData.targetStart} onChange={handleChange} className={inputClass + ' bg-white'}>
                    <option value="">{t.qualification.targetStart.placeholder}</option>
                    {EN.qualification.targetStart.options.map((value, i) => (
                      <option key={value} value={value}>{t.qualification.targetStart.options[i]}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.deliveryDate}
              </label>
              <input
                type="date"
                name="deliveryDate"
                dir="ltr"
                value={formData.deliveryDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </fieldset>
        </div>

        {/* Your Details */}
        <div className="border border-gray-100 sm:border-0 rounded-sm p-5 sm:p-0">
        <fieldset>
          <legend className="text-navy font-bold text-xl mb-6 pb-3 border-b border-gray-100 w-full">
            {f.yourDetailsLegend}
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.fullName} <span className="text-accent">*</span>
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
              <label className="block text-sm font-semibold text-navy mb-2">{f.labels.jobTitle}</label>
              <input
                type="text"
                name="jobTitle"
                placeholder={f.placeholders.jobTitle}
                value={formData.jobTitle}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.company} <span className="text-accent">*</span>
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
                {f.labels.email} <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                name="email"
                dir="ltr"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.phone}
              </label>
              <input
                type="tel"
                name="phone"
                dir="ltr"
                placeholder={f.placeholders.phone}
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                {f.labels.clientType}
              </label>
              <select
                name="clientType"
                value={formData.clientType}
                onChange={handleChange}
                className={inputClass + ' bg-white'}
              >
                <option value="">{f.selectPlaceholders.clientType}</option>
                {enF.clientTypeOptions.map((value, i) => (
                  <option key={value} value={value}>{f.clientTypeOptions[i]}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>
        </div>

        {/* Project Attachments */}
        <div className="border border-gray-100 sm:border-0 rounded-sm p-5 sm:p-0">
        <fieldset>
          <legend className="text-navy font-bold text-xl mb-2 pb-3 border-b border-gray-100 w-full">
            {f.attachmentsLegend}
          </legend>
          <p className="text-gray-400 text-xs mb-4 leading-relaxed">
            {f.attachments.intro}
          </p>

          {/* Drawings not available checkbox — shown first so users know attachments are optional */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="drawingsNotAvailable"
                checked={formData.drawingsNotAvailable}
                onChange={handleChange}
                className="w-4 h-4 mt-0.5 accent-[#D71920] flex-shrink-0"
              />
              <span className="text-sm text-navy">{f.attachments.drawingsNotAvailable}</span>
            </label>

            {formData.drawingsNotAvailable && (
              <div className="mt-3 ms-7 p-4 bg-navy/5 border border-navy/10 rounded-sm">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="needDrawingSupport"
                    checked={formData.needDrawingSupport}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 accent-[#D71920] flex-shrink-0"
                  />
                  <span className="text-sm text-navy leading-relaxed">
                    {f.attachments.needDrawingSupport}
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* File upload slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {fileSlots.map((slot, idx) => (
              <div key={slot.slotEn} className="border border-dashed border-gray-200 rounded-sm p-4">
                <p className="text-xs font-semibold text-navy mb-1">{slot.label}</p>
                {idx === 0 && (
                  <p className="text-[11px] text-gray-400 mb-2.5 leading-relaxed">
                    {f.attachments.boqHint}
                  </p>
                )}

                {slot.file ? (
                  <div className="flex items-center gap-2 bg-navy/5 rounded-sm px-3 py-2 mb-2">
                    <svg className="w-3.5 h-3.5 text-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-navy text-xs truncate flex-1">{slot.file.name}</span>
                    <span className="text-gray-400 text-xs flex-shrink-0"><Ltr>{formatBytes(slot.file.size)}</Ltr></span>
                    <button
                      type="button"
                      onClick={() => clearFile(idx)}
                      className="text-gray-400 hover:text-accent transition-colors flex-shrink-0 ms-1"
                      aria-label={f.attachments.removeFile}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="flex-1 flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-sm group-hover:border-accent transition-colors">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                      <span className="text-gray-400 text-xs group-hover:text-accent transition-colors">{f.attachments.chooseFile}</span>
                    </div>
                    <input
                      ref={(el) => { fileInputRefs.current[idx] = el }}
                      type="file"
                      accept={ACCEPTED_FORMATS}
                      className="sr-only"
                      onChange={(e) => handleFileChange(idx, e)}
                    />
                  </label>
                )}

                {fileErrors[idx] && (
                  <p className="text-accent text-xs mt-1.5">{fileErrors[idx]}</p>
                )}
                <p className="text-gray-300 text-[10px] mt-2 leading-relaxed">{f.attachments.acceptedLabel}</p>
              </div>
            ))}
          </div>

          {/* Large file link */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-navy mb-2">{f.labels.largeFileLink}</label>
            <input
              type="url"
              name="largeFileLink"
              dir="ltr"
              placeholder={f.placeholders.largeFileLink}
              value={formData.largeFileLink}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-gray-400 text-xs mt-1.5">
              {f.attachments.largeFileHint}
            </p>
          </div>

          {/* File link notes */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-navy mb-2">{f.labels.fileLinkNotes}</label>
            <textarea
              name="fileLinkNotes"
              rows={3}
              placeholder={f.placeholders.fileLinkNotes}
              value={formData.fileLinkNotes}
              onChange={handleChange}
              className={inputClass + ' resize-none'}
            />
          </div>

        </fieldset>
        </div>

        {/* Technical Notes */}
        <div className="border border-gray-100 sm:border-0 rounded-sm p-5 sm:p-0">
          <label htmlFor="rfq-notes" className="block text-navy font-bold text-xl mb-6 pb-3 border-b border-gray-100 w-full">
            {f.notesLegend}
          </label>
          <textarea
            id="rfq-notes"
            name="notes"
            rows={5}
            placeholder={f.placeholders.notes}
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
            {submitState === 'loading' ? f.submitting : f.submit}
          </button>
          <p className="text-gray-400 text-xs mt-3">
            {f.requiredNotePre} <span className="text-accent">*</span> {f.requiredNotePost}
          </p>
          <p className="text-gray-400 text-xs mt-4 leading-relaxed border-t border-gray-100 pt-4">
            <strong className="text-gray-500">{f.disclaimerLabel}</strong> {f.disclaimer}
          </p>
        </div>

      </form>
    </div>
  )
}
