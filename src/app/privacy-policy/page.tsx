import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Durraka Factory for Industry collects, uses, and protects information submitted through our website and RFQ forms.',
}

const LAST_UPDATED = 'June 2026'

const sections = [
  {
    id: 'information-collected',
    heading: 'Information We Collect',
    content: (
      <>
        <p>
          When you interact with the Durraka website — including submitting a Request for
          Quotation (RFQ), using our contact form, or requesting product catalog downloads — we
          may collect the information you provide, which may include:
        </p>
        <ul>
          <li>Full name and job title</li>
          <li>Company name and client type or role</li>
          <li>Email address and mobile / WhatsApp number</li>
          <li>Project name and project location</li>
          <li>Project type, estimated area, and target delivery date</li>
          <li>Required GFRC/GRC systems or product categories</li>
          <li>Technical notes, project requirements, or catalog items you request</li>
        </ul>
        <p>
          We may also collect basic technical information through our hosting infrastructure,
          such as browser type, device type, and pages visited. This data is aggregated and not
          used to identify individual users.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: 'How We Use Your Information',
    content: (
      <>
        <p>
          Information submitted through our RFQ form, contact form, or catalog request is used
          exclusively to:
        </p>
        <ul>
          <li>Review your project requirements and assess technical feasibility</li>
          <li>Contact you to clarify scope, specifications, or project details</li>
          <li>Prepare a commercial or technical follow-up response</li>
          <li>Fulfil catalog or documentation requests</li>
          <li>Log your enquiry internally for CRM and project tracking purposes</li>
        </ul>
        <p>
          We do not use your information for unsolicited marketing communications unrelated to
          your submitted enquiry.
        </p>
      </>
    ),
  },
  {
    id: 'data-sharing',
    heading: 'Data Sharing',
    content: (
      <>
        <p>
          Your information is not sold, rented, or traded to any third party. It may be shared
          internally within Durraka Factory for Industry with members of our technical, commercial,
          or management teams solely for the purpose of evaluating and responding to your project
          enquiry.
        </p>
        <p>
          We may use third-party service providers — including hosting platforms, email delivery
          services, analytics tools, and CRM software — to operate this website and manage
          communications. These providers process data on our behalf and are not permitted to use
          it for independent purposes.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    heading: 'Data Security',
    content: (
      <p>
        We take reasonable technical and organisational measures to protect the information you
        submit. However, no method of transmission over the internet is entirely secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: 'your-rights',
    heading: 'Your Rights',
    content: (
      <>
        <p>
          You may request correction or deletion of the personal information you have submitted to
          us. To exercise this right, contact us at:
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
        <p>
          We will respond to valid requests within a reasonable timeframe and confirm the action
          taken.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-tools',
    heading: 'Third-Party Tools',
    content: (
      <p>
        Our website and RFQ backend may interact with third-party tools including web hosting
        services, transactional email delivery providers, Google Sheets for CRM logging, and
        website analytics platforms. Each of these providers operates under their own privacy
        policy and data protection commitments.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy periodically. The &ldquo;Last Updated&rdquo; date above
        reflects the most recent revision. Continued use of our website after any update constitutes
        acceptance of the revised policy.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        <p className="text-gray-600 leading-relaxed mb-12 text-base">
          Durraka Factory for Industry (&ldquo;Durraka&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;) is committed to handling the information you share with us
          responsibly. This Privacy Policy explains what information we collect when you use our
          website, submit a Request for Quotation, use our contact form, or request catalog
          materials — and how we use it.
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
          <Link href="/terms-and-conditions" className="text-accent hover:underline font-medium">
            Terms &amp; Conditions
          </Link>
          <Link href="/contact" className="text-navy hover:text-accent transition-colors font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
