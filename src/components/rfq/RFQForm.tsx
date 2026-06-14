'use client'

import { useState, useRef, ChangeEvent, FormEvent } from 'react'
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

const ACCEPTED_FORMATS = '.pdf,.dwg,.dxf,.xls,.xlsx,.doc,.docx,.jpg,.jpeg,.png,.zip'
const ACCEPTED_LABEL = 'PDF, DWG, DXF, XLS, XLSX, DOC, DOCX, JPG, PNG, ZIP · Max 25 MB per file'
const MAX_FILE_BYTES = 25 * 1024 * 1024

const FILE_SLOT_LABELS = [
  'BOQ / Bill of Quantities',
  'Architectural Drawings',
  'Structural Drawings',
  'Reference Images / Renderings',
]

type FileSlot = { label: string; file: File | null }
type AttachedFileMeta = { name: string; size: number; type: string; slot: string }

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

const EMPTY_SLOTS = (): FileSlot[] => FILE_SLOT_LABELS.map((label) => ({ label, file: null }))

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm'

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

export default function RFQForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [fileSlots, setFileSlots] = useState<FileSlot[]>(EMPTY_SLOTS())
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
      setFileErrors((prev) => prev.map((err, i) => (i === idx ? 'File exceeds 25 MB limit.' : err)))
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
    const required: [keyof FormData, string][] = [
      ['fullName', 'Full name'],
      ['company', 'Company name'],
      ['email', 'Email address'],
      ['projectName', 'Project name'],
      ['projectLocation', 'Project location'],
      ['systemRequired', 'System required'],
    ]
    for (const [field, label] of required) {
      if (!String(formData[field]).trim()) return `${label} is required.`
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

    const attachments: AttachedFileMeta[] = fileSlots
      .filter((s) => s.file)
      .map((s) => ({ name: s.file!.name, size: s.file!.size, type: s.file!.type, slot: s.label }))

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, attachments }),
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
          Thank you. Your request has been received for review. Our team will review the scope
          and requirements and contact you with the next steps.
          Please quote the reference number below in all correspondence.
        </p>

        <div className="inline-block bg-navy/5 border border-navy/20 rounded-sm px-10 py-5 mb-10">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">Your RFQ Reference</p>
          <p className="text-2xl sm:text-3xl font-bold text-accent tracking-wider">{reference}</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => {
              setFormData(EMPTY_FORM)
              setFileSlots(EMPTY_SLOTS())
              setFileErrors(Array(4).fill(null))
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

        {/* Project Attachments */}
        <fieldset>
          <legend className="text-navy font-bold text-xl mb-2 pb-3 border-b border-gray-100 w-full">
            Project Attachments
          </legend>
          <p className="text-gray-400 text-xs mb-6">
            Optional. Attach relevant documents to help our team prepare. Files are not uploaded —
            only file names are included in the request notification.
          </p>

          {/* File upload slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {fileSlots.map((slot, idx) => (
              <div key={slot.label} className="border border-dashed border-gray-200 rounded-sm p-4">
                <p className="text-xs font-semibold text-navy mb-3">{slot.label}</p>

                {slot.file ? (
                  <div className="flex items-center gap-2 bg-navy/5 rounded-sm px-3 py-2 mb-2">
                    <svg className="w-3.5 h-3.5 text-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-navy text-xs truncate flex-1">{slot.file.name}</span>
                    <span className="text-gray-400 text-xs flex-shrink-0">{formatBytes(slot.file.size)}</span>
                    <button
                      type="button"
                      onClick={() => clearFile(idx)}
                      className="text-gray-400 hover:text-accent transition-colors flex-shrink-0 ml-1"
                      aria-label="Remove file"
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
                      <span className="text-gray-400 text-xs group-hover:text-accent transition-colors">Choose file</span>
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
                <p className="text-gray-300 text-[10px] mt-2 leading-relaxed">{ACCEPTED_LABEL}</p>
              </div>
            ))}
          </div>

          {/* Large file link */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-navy mb-2">Large File Link</label>
            <input
              type="url"
              name="largeFileLink"
              placeholder="Paste Google Drive, OneDrive, Dropbox, or WeTransfer link..."
              value={formData.largeFileLink}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-gray-400 text-xs mt-1.5">
              Use for large files, full drawing sets, or zipped packages.
            </p>
          </div>

          {/* File link notes */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-navy mb-2">File Link Notes</label>
            <textarea
              name="fileLinkNotes"
              rows={3}
              placeholder="Describe what's in the link, folder structure, or access instructions..."
              value={formData.fileLinkNotes}
              onChange={handleChange}
              className={inputClass + ' resize-none'}
            />
          </div>

          {/* Drawings not available checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="drawingsNotAvailable"
                checked={formData.drawingsNotAvailable}
                onChange={handleChange}
                className="w-4 h-4 mt-0.5 accent-[#D71920] flex-shrink-0"
              />
              <span className="text-sm text-navy">Drawings are not available yet</span>
            </label>

            {formData.drawingsNotAvailable && (
              <div className="mt-3 ml-7 p-4 bg-navy/5 border border-navy/10 rounded-sm">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="needDrawingSupport"
                    checked={formData.needDrawingSupport}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 accent-[#D71920] flex-shrink-0"
                  />
                  <span className="text-sm text-navy leading-relaxed">
                    I need Durraka to support with preliminary drawings / shop drawings for review
                  </span>
                </label>
              </div>
            )}
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
            Fields marked <span className="text-accent">*</span> are required.
            Your information is kept confidential.
          </p>
          <p className="text-gray-400 text-xs mt-4 leading-relaxed border-t border-gray-100 pt-4">
            <strong className="text-gray-500">Disclaimer:</strong> Submitting an RFQ through
            this website does not create a binding quotation, contract, purchase order, or
            commitment by Durraka Factory for Industry. All requests are subject to technical
            review, commercial evaluation, project scope confirmation, drawing review, and
            written approval.
          </p>
        </div>

      </form>
    </div>
  )
}
