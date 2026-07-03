import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy of Durraka Factory for Industry — how we collect, process, and protect personal data in compliance with the Saudi Personal Data Protection Law (PDPL) and applicable GCC regulations.',
}

const LAST_UPDATED = '24 June 2026'

const sections = [
  {
    id: 'controller',
    heading: '1. Data Controller Identity',
    content: (
      <>
        <p>
          This Privacy Policy is issued by <strong>Durraka Factory for Industry</strong>{' '}
          (&ldquo;Durraka&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a
          company registered and operating in the Kingdom of Saudi Arabia, with its principal place
          of business at:
        </p>
        <address className="not-italic text-gray-600 mt-3 pl-4 border-l-2 border-accent/30 space-y-0.5">
          <p>Durraka Factory for Industry</p>
          <p>Commercial Registration No. 4602002725</p>
          <p>Office 203, 2nd Floor</p>
          <p>JBSA 2372, Jeddah</p>
          <p>Kingdom of Saudi Arabia</p>
          <p className="mt-2">
            Email:{' '}
            <a href="mailto:info@durraka.com" className="text-accent hover:underline">
              info@durraka.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+966126192224" className="hover:text-accent transition-colors">
              +966 12 619 2224
            </a>
          </p>
        </address>
        <p className="mt-4">
          Durraka is the Data Controller responsible for the personal data you provide through this
          website, the Request for Quotation (RFQ) form, contact enquiries, and catalog requests.
        </p>
      </>
    ),
  },
  {
    id: 'legal-framework',
    heading: '2. Legal Framework',
    content: (
      <>
        <p>
          This Privacy Policy is drafted in compliance with the following primary legislation,
          listed in order of precedence:
        </p>
        <ul>
          <li>
            <strong>Personal Data Protection Law (PDPL)</strong> — Kingdom of Saudi Arabia, issued
            by Royal Decree M/19 dated 9/2/1443H and its Implementing Regulations, enforced by the
            Saudi Data &amp; AI Authority (SDAIA). This law constitutes the primary governing
            framework. In any conflict between Saudi law and any other applicable regulation, Saudi
            law shall prevail.
          </li>
          <li>
            <strong>Anti-Cybercrime Law</strong> — Kingdom of Saudi Arabia, Royal Decree M/17
            dated 8/3/1428H.
          </li>
          <li>
            <strong>E-Commerce Law</strong> — Kingdom of Saudi Arabia, Royal Decree M/126 dated
            19/11/1440H.
          </li>
          <li>
            <strong>GCC Personal Data Protection Standards</strong> — including applicable
            regulations of the UAE (Federal Decree-Law No. 45 of 2021), the Sultanate of Oman
            (Royal Decree 6/2022), the Kingdom of Bahrain (PDPL 2018), and the State of Qatar
            (Law No. 13 of 2016), to the extent they apply to data subjects in those jurisdictions
            and do not conflict with Saudi law.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-collected',
    heading: '3. Personal Data We Collect',
    content: (
      <>
        <p>
          We collect only the personal data that is necessary for the purposes described in this
          Policy. The categories of data we may collect include:
        </p>
        <p className="font-semibold text-navy mt-4 mb-2">A. Data you provide directly</p>
        <ul>
          <li>Full name and job title</li>
          <li>Company name, commercial sector, and client type or role</li>
          <li>Work email address</li>
          <li>Mobile number and/or WhatsApp number</li>
          <li>Project name and project location (city / region)</li>
          <li>Project type, estimated area, and target delivery date</li>
          <li>Required GFRC/GRC systems or product categories</li>
          <li>Technical notes, project requirements, or catalog items you request</li>
          <li>Any additional information you voluntarily include in the enquiry or message field</li>
        </ul>
        <p className="font-semibold text-navy mt-4 mb-2">B. Data collected automatically</p>
        <ul>
          <li>IP address (logged by hosting infrastructure)</li>
          <li>Browser type, device type, and operating system</li>
          <li>Pages visited, referral URL, and session duration</li>
          <li>Cookie identifiers (see Section 8 below)</li>
        </ul>
        <p className="mt-3">
          Automatically collected technical data is aggregated and is not used to identify
          individual users unless required for security or legal compliance purposes.
        </p>
        <p className="mt-3">
          We do not intentionally collect <strong>sensitive personal data</strong> as defined under
          the Saudi PDPL (including health information, financial account details, or national
          identity details). Please do not submit such information through our website forms.
        </p>
      </>
    ),
  },
  {
    id: 'lawful-basis',
    heading: '4. Lawful Basis for Processing',
    content: (
      <>
        <p>
          Under the Saudi PDPL, we rely on the following lawful bases for processing your personal
          data:
        </p>
        <ul>
          <li>
            <strong>Performance of a pre-contractual relationship:</strong> Processing your RFQ
            submission and project enquiry data is necessary to evaluate your project requirements
            and respond with a technical or commercial assessment — steps you request prior to any
            formal contract.
          </li>
          <li>
            <strong>Legitimate interests:</strong> We process certain data (such as contact details
            and project information) to pursue our legitimate interest in managing business
            enquiries, maintaining internal project records, and operating our CRM systems, provided
            this does not override your fundamental rights and freedoms.
          </li>
          <li>
            <strong>Legal obligation:</strong> We may process or retain data where required to
            comply with applicable Saudi laws, regulatory requirements, or lawful orders from
            competent authorities.
          </li>
          <li>
            <strong>Consent:</strong> Where we seek to use your data for any purpose not covered
            above — for example, sending you relevant industry updates or product announcements —
            we will obtain your explicit consent and you may withdraw it at any time.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'purposes',
    heading: '5. Purposes of Processing',
    content: (
      <>
        <p>Your personal data is collected and processed for the following specific purposes:</p>
        <ul>
          <li>Reviewing your project requirements and assessing technical feasibility</li>
          <li>Contacting you to clarify scope, specifications, or project details</li>
          <li>Preparing a commercial or technical follow-up response, quotation, or proposal</li>
          <li>Fulfilling catalog or documentation requests</li>
          <li>Logging your enquiry internally for CRM and project tracking purposes</li>
          <li>Complying with applicable legal and regulatory obligations</li>
          <li>Protecting the security and integrity of this website and our systems</li>
        </ul>
        <p className="mt-3">
          We do not use your personal data for automated decision-making or profiling that produces
          legal or similarly significant effects. We do not use your contact information for
          unsolicited mass marketing unrelated to your submitted enquiry.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    heading: '6. Data Retention',
    content: (
      <>
        <p>
          We retain your personal data only for as long as necessary to fulfil the purposes for
          which it was collected, as follows:
        </p>
        <ul>
          <li>
            <strong>Active enquiries and project leads:</strong> Retained for the duration of the
            project evaluation and commercial engagement period, and for up to <strong>5 years</strong>{' '}
            thereafter to manage ongoing business relationships or potential re-engagement.
          </li>
          <li>
            <strong>Concluded enquiries (no project awarded):</strong> Retained for up to{' '}
            <strong>2 years</strong> from the date of the last communication to allow for future
            project scope changes or follow-up.
          </li>
          <li>
            <strong>Technical / server logs:</strong> Retained for up to <strong>12 months</strong>{' '}
            for security and performance monitoring purposes.
          </li>
          <li>
            <strong>Legal compliance records:</strong> Retained for the period required by
            applicable Saudi law, which may extend to <strong>10 years</strong> for financial and
            contractual records under the Saudi Companies Law.
          </li>
        </ul>
        <p className="mt-3">
          After the applicable retention period, personal data is securely deleted or anonymised.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    heading: '7. Data Sharing and Third-Party Processors',
    content: (
      <>
        <p>
          <strong>We do not sell, rent, or trade your personal data to any third party.</strong>
        </p>
        <p className="mt-3">
          Your personal data may be shared internally within Durraka Factory for Industry with
          members of our technical, commercial, engineering, and management teams solely for the
          purpose of evaluating and responding to your project enquiry.
        </p>
        <p className="mt-3">
          We engage the following categories of third-party service providers who process data on
          our behalf as data processors:
        </p>
        <ul>
          <li>
            <strong>Web hosting and infrastructure:</strong> Our website is hosted on cloud
            infrastructure that may process server logs and request metadata.
          </li>
          <li>
            <strong>Transactional email delivery:</strong> We use third-party email services to
            deliver confirmation and communication emails.
          </li>
          <li>
            <strong>CRM and project management tools:</strong> Enquiry data may be logged in
            internal CRM and pipeline management systems to track and manage project enquiries.
          </li>
          <li>
            <strong>Website analytics:</strong> We may use analytics tools to understand aggregate
            website traffic and usage patterns.
          </li>
        </ul>
        <p className="mt-3">
          All third-party processors are contractually bound to process personal data only on our
          instructions and in accordance with applicable data protection laws. They are not
          permitted to use your data for their own independent purposes.
        </p>
        <p className="mt-3">
          We may also disclose personal data where required by law, regulation, or lawful order
          from a competent Saudi authority, court, or regulatory body.
        </p>
      </>
    ),
  },
  {
    id: 'international-transfers',
    heading: '8. International Data Transfers',
    content: (
      <>
        <p>
          Some of our third-party service providers — including cloud hosting, email, and analytics
          platforms — may be located or process data outside the Kingdom of Saudi Arabia. Such
          cross-border transfers are subject to the requirements of the Saudi PDPL, particularly
          Articles 29 and 30.
        </p>
        <p className="mt-3">
          Where personal data is transferred outside the Kingdom, we ensure that:
        </p>
        <ul>
          <li>
            The recipient country or entity provides an adequate level of data protection as
            determined by SDAIA; or
          </li>
          <li>
            Appropriate contractual safeguards are in place (such as data processing agreements
            that include protections equivalent to those required by Saudi PDPL); or
          </li>
          <li>The transfer is necessary for the performance of a contract you have requested.</li>
        </ul>
        <p className="mt-3">
          We notify SDAIA of cross-border transfers to the extent required by applicable
          regulations and their implementing rules.
        </p>
        <p className="mt-3">
          If you are located in a GCC member state, additional local regulations may apply.
          Where those regulations require a higher standard of protection or additional rights,
          we will apply the higher standard to data subjects in those jurisdictions unless
          that standard conflicts with Saudi law, in which case Saudi law prevails.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: '9. Cookies and Tracking Technologies',
    content: (
      <>
        <p>
          Our website may use cookies and similar tracking technologies. Cookies are small text
          files stored on your device by your browser when you visit a website.
        </p>
        <p className="mt-3">We may use the following types of cookies:</p>
        <ul>
          <li>
            <strong>Strictly necessary cookies:</strong> Required for the website to function
            (e.g., session management, security tokens). These cannot be disabled.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand how visitors use the website in
            aggregate (e.g., page views, traffic sources). These do not identify you individually.
          </li>
          <li>
            <strong>Preference cookies:</strong> Remember your settings and preferences across
            sessions.
          </li>
        </ul>
        <p className="mt-3">
          Where required under applicable law, we will request your consent before placing
          non-essential cookies. You may withdraw consent or manage cookie preferences at any time
          through your browser settings. Please note that disabling certain cookies may affect
          the functionality of this website.
        </p>
        <p className="mt-3">
          We do not use cookies for targeted advertising or cross-site behavioral tracking.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    heading: '10. Your Rights Under the Saudi PDPL',
    content: (
      <>
        <p>
          The Saudi Personal Data Protection Law grants you the following rights in respect of
          your personal data held by us. To exercise any of these rights, please contact us using
          the details in Section 13.
        </p>
        <ul>
          <li>
            <strong>Right to access (Article 16 PDPL):</strong> You may request confirmation of
            whether we hold your personal data and a copy of the data we hold about you.
          </li>
          <li>
            <strong>Right to correction (Article 17 PDPL):</strong> You may request correction
            of inaccurate, incomplete, or outdated personal data.
          </li>
          <li>
            <strong>Right to deletion (Article 18 PDPL):</strong> You may request deletion of
            your personal data where it is no longer necessary for the purposes for which it was
            collected, subject to overriding legal obligations (such as retention requirements
            under Saudi law).
          </li>
          <li>
            <strong>Right to data portability:</strong> Where technically feasible and permitted
            by law, you may request that we provide your personal data in a structured,
            commonly used format.
          </li>
          <li>
            <strong>Right to object:</strong> You may object to processing based on legitimate
            interests. We will cease processing unless we have compelling legitimate grounds that
            override your interests or are required by law.
          </li>
          <li>
            <strong>Right to withdraw consent:</strong> Where processing is based on consent, you
            may withdraw consent at any time. Withdrawal does not affect the lawfulness of
            processing that occurred prior to withdrawal.
          </li>
          <li>
            <strong>Right to restrict processing:</strong> In certain circumstances, you may
            request that we temporarily suspend processing of your personal data.
          </li>
        </ul>
        <p className="mt-3">
          We will respond to valid data subject requests within <strong>30 days</strong> of
          receipt, as required by the Saudi PDPL. In complex or multiple requests, we may extend
          this by a further 30 days with prior notification.
        </p>
        <p className="mt-3">
          We reserve the right to verify your identity before actioning any request to protect
          against unauthorised access to personal data.
        </p>
        <p className="mt-3">
          If you are located in a GCC member state, you may additionally hold rights under local
          law. Please refer to the relevant national authority in your jurisdiction.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    heading: '11. Data Security',
    content: (
      <>
        <p>
          We implement reasonable and appropriate technical and organisational security measures to
          protect your personal data against unauthorised access, disclosure, alteration, loss, or
          destruction. These measures include:
        </p>
        <ul>
          <li>Encrypted data transmission over HTTPS/TLS</li>
          <li>Access controls limiting data access to authorised personnel only</li>
          <li>Use of reputable, security-certified third-party hosting infrastructure</li>
          <li>Regular review of data handling practices and third-party processor commitments</li>
        </ul>
        <p className="mt-3">
          In the event of a personal data breach that is likely to result in harm to data
          subjects, we will notify SDAIA and affected individuals as required by the Saudi PDPL
          and its Implementing Regulations.
        </p>
        <p className="mt-3">
          No method of transmission or storage over the internet is entirely secure. While we
          apply commercially reasonable efforts to protect your data, we cannot guarantee absolute
          security.
        </p>
      </>
    ),
  },
  {
    id: 'minors',
    heading: '12. Persons Under 18',
    content: (
      <p>
        This website is intended for business and professional use. We do not knowingly collect
        personal data from individuals under the age of 18. If you believe a minor has submitted
        personal data through our website, please contact us immediately using the details in
        Section 13 and we will promptly delete the information.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '13. Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy periodically to reflect changes in our data practices,
        applicable law, or regulatory guidance from SDAIA. The &ldquo;Last Updated&rdquo; date at
        the top of this page reflects the most recent revision. We encourage you to review this
        Policy regularly. Continued use of our website after any update constitutes acceptance of
        the revised Policy, unless applicable law requires us to obtain your explicit consent.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '14. Contact and Complaints',
    content: (
      <>
        <p>
          To exercise your rights, raise a privacy concern, or obtain further information about
          how we handle your personal data, please contact us:
        </p>
        <address className="not-italic mt-3 space-y-1">
          <p className="font-semibold text-navy">Durraka Factory for Industry</p>
          <p>CR No. 4602002725 · Office 203, 2nd Floor, JBSA 2372, Jeddah, Saudi Arabia</p>
          <p>
            Email:{' '}
            <a href="mailto:info@durraka.com" className="text-accent hover:underline font-medium">
              info@durraka.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+966126192224" className="hover:text-accent transition-colors">
              +966 12 619 2224
            </a>
          </p>
        </address>
        <p className="mt-4">
          If you are not satisfied with our response, you have the right to lodge a complaint
          with the <strong>Saudi Data &amp; AI Authority (SDAIA)</strong>, the competent
          supervisory authority for the Saudi PDPL. SDAIA can be reached through the National
          Data Governance Platform at{' '}
          <span className="text-navy font-medium">ndmo.gov.sa</span>.
        </p>
        <p className="mt-3">
          If you are located in another GCC member state and are dissatisfied with our response,
          you may also contact the relevant data protection authority in your country of residence.
          Saudi law and Saudi courts shall govern any dispute arising from the exercise of data
          subject rights.
        </p>
        <p className="mt-4 text-sm text-gray-500 italic">
          An Arabic version of this Privacy Policy is available upon written request.
        </p>
      </>
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
          <p className="text-white/40 text-xs mt-1">
            Governing law: Kingdom of Saudi Arabia — Personal Data Protection Law (PDPL),
            Royal Decree M/19, 9/2/1443H
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        <p className="text-gray-600 leading-relaxed mb-12 text-base">
          Durraka Factory for Industry (&ldquo;Durraka&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the personal data
          you share with us and to complying with the Kingdom of Saudi Arabia&rsquo;s Personal
          Data Protection Law (PDPL) and all applicable regulations. This Privacy Policy explains
          what personal data we collect, the lawful basis for processing it, how we use and
          protect it, and the rights you hold as a data subject.
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-navy font-bold text-lg sm:text-xl mb-4 pb-3 border-b border-gray-100">
                {section.heading}
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3 [&_ul]:mt-3 [&_ul]:space-y-2.5 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-accent">
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
