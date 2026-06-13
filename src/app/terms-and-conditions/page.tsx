import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions governing use of the Durraka Factory for Industry website and RFQ submission process.',
}

const LAST_UPDATED = 'June 2026'

const sections = [
  {
    id: 'general-information',
    heading: 'General Information',
    content: (
      <p>
        The content published on this website — including product descriptions, technical
        specifications, project references, and company information — is provided for general
        information purposes only. While we make reasonable efforts to keep the information
        accurate and up to date, Durraka Factory for Industry makes no representations or
        warranties of any kind regarding the completeness, accuracy, or fitness for a particular
        purpose of the information presented.
      </p>
    ),
  },
  {
    id: 'rfq-submissions',
    heading: 'RFQ Submissions',
    content: (
      <>
        <p>
          Submitting a Request for Quotation (RFQ) through our website does not constitute, and
          shall not be interpreted as, a binding quotation, purchase order, contract, or
          commitment of any kind by either party.
        </p>
        <p>All RFQ submissions are subject to:</p>
        <ul>
          <li>Technical review and engineering assessment by Durraka</li>
          <li>Commercial evaluation and pricing confirmation</li>
          <li>Scope confirmation and documentation of project specifications</li>
          <li>Written approval issued by an authorised representative of Durraka</li>
        </ul>
        <p>
          A contractual or commercial obligation arises only upon the issuance of a signed,
          written quotation or contract by Durraka, which supersedes all prior informal
          communications.
        </p>
      </>
    ),
  },
  {
    id: 'no-guarantee',
    heading: 'No Guarantee of Prices, Timelines, or Availability',
    content: (
      <p>
        Prices, lead times, production availability, and delivery schedules referenced on this
        website — or communicated informally through email or telephone — are indicative only and
        are not guaranteed. Firm commitments on pricing, timelines, and availability are issued
        exclusively in an official written quotation or signed contract prepared by Durraka.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    content: (
      <>
        <p>
          All content on this website — including but not limited to text, product descriptions,
          technical data sheets, architectural drawings, images, brand assets, and the Durraka
          name and logo — is the property of Durraka Factory for Industry unless otherwise
          explicitly stated.
        </p>
        <p>
          You may not reproduce, copy, distribute, publish, or use any portion of our website
          content — including product catalogs, images, designs, technical drawings, or
          specifications — for any commercial or non-commercial purpose without our prior written
          permission.
        </p>
      </>
    ),
  },
  {
    id: 'project-references',
    heading: 'Project References and Confidentiality',
    content: (
      <p>
        Project images, case studies, and references displayed on this website may be subject to
        client confidentiality agreements or publication restrictions. Where applicable, project
        references are published with the knowledge and approval of the relevant client or
        stakeholder. Reproduction or redistribution of project imagery without written
        authorisation from Durraka is prohibited.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: 'Governing Law',
    content: (
      <p>
        These Terms &amp; Conditions are governed by and construed in accordance with the laws of
        the Kingdom of Saudi Arabia. Any dispute arising from the use of this website or the
        submission of enquiries shall be subject to the jurisdiction of the competent courts of
        Saudi Arabia.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to These Terms',
    content: (
      <p>
        Durraka reserves the right to update or modify these Terms &amp; Conditions at any time
        without prior notice. The &ldquo;Last Updated&rdquo; date above reflects the most recent
        revision. Your continued use of this website following any changes constitutes acceptance
        of the updated terms.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    content: (
      <>
        <p>
          For questions regarding these Terms &amp; Conditions or any aspect of our website,
          please contact us:
        </p>
        <ul className="!list-none !pl-0 space-y-1">
          <li>
            <a href="mailto:info@durraka.com" className="text-accent hover:underline font-medium">
              info@durraka.com
            </a>
          </li>
          <li>
            <a href="tel:+966126192224" className="text-gray-700 hover:text-accent transition-colors">
              +966 12 619 2224
            </a>
          </li>
          <li className="text-gray-600">Saudi Arabia</li>
        </ul>
      </>
    ),
  },
]

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-20 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">
              Legal
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        <p className="text-gray-600 leading-relaxed mb-12 text-base">
          By accessing or using the Durraka Factory for Industry website (&ldquo;Site&rdquo;),
          including submitting any enquiry or Request for Quotation, you agree to be bound by
          these Terms &amp; Conditions. Please read them carefully before using the Site.
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-navy font-bold text-lg sm:text-xl mb-4 pb-3 border-b border-gray-100">
                {section.heading}
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-accent">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-6 text-sm">
          <Link href="/privacy-policy" className="text-accent hover:underline font-medium">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-navy hover:text-accent transition-colors font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
