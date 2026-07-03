import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions governing use of the Durraka Factory for Industry website, RFQ submissions, and all related services — governed by the laws of the Kingdom of Saudi Arabia.',
}

const LAST_UPDATED = '24 June 2026'

const sections = [
  {
    id: 'acceptance',
    heading: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing or using the Durraka Factory for Industry website (&ldquo;Site&rdquo;),
          submitting a Request for Quotation (RFQ), using the contact form, downloading catalog
          materials, or otherwise interacting with any feature of this Site, you confirm that you
          have read, understood, and agree to be bound by these Terms &amp; Conditions
          (&ldquo;Terms&rdquo;).
        </p>
        <p>
          If you do not agree to these Terms in their entirety, you must immediately discontinue
          use of this Site. These Terms apply to all visitors, users, and registered contacts of
          the Site.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and Durraka Factory for
          Industry under the laws of the Kingdom of Saudi Arabia, including the E-Commerce Law
          (Royal Decree M/126 dated 19/11/1440H) and the Saudi Civil Transactions Law (Royal
          Decree M/191 dated 29/11/1443H).
        </p>
      </>
    ),
  },
  {
    id: 'identity',
    heading: '2. Company Identity',
    content: (
      <>
        <p>This Site is owned and operated by:</p>
        <address className="not-italic text-gray-600 mt-3 pl-4 border-l-2 border-accent/30 space-y-0.5">
          <p className="font-semibold text-navy">Durraka Factory for Industry</p>
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
          Durraka Factory for Industry is a manufacturer of Glass Fibre Reinforced Concrete (GFRC)
          and Glass Reinforced Concrete (GRC) architectural systems, façade cladding, mashrabiya
          screens, domes, cornices, columns, and bespoke decorative architectural elements,
          operating within the Kingdom of Saudi Arabia.
        </p>
      </>
    ),
  },
  {
    id: 'website-use',
    heading: '3. Permitted Use of This Website',
    content: (
      <>
        <p>
          This Site is provided for lawful, professional, and business-related purposes only,
          including reviewing product information, submitting project enquiries, and accessing
          technical and commercial content related to GFRC/GRC architectural manufacturing.
        </p>
        <p>You agree that you will not:</p>
        <ul>
          <li>
            Use the Site in any manner that violates applicable laws of the Kingdom of Saudi Arabia,
            including but not limited to the Anti-Cybercrime Law (Royal Decree M/17,
            8/3/1428H), the E-Commerce Law, or any other applicable regulation.
          </li>
          <li>
            Engage in or facilitate any unauthorised access, hacking, scraping, data mining,
            denial-of-service attack, or other interference with the Site or its infrastructure.
          </li>
          <li>
            Transmit any unsolicited communications, spam, malware, or harmful code.
          </li>
          <li>
            Misrepresent your identity, affiliation, or the purpose of your enquiry.
          </li>
          <li>
            Use the Site&rsquo;s content for any unauthorised commercial exploitation or
            competitive intelligence gathering.
          </li>
          <li>
            Copy, adapt, or republish any content from the Site without our prior written consent.
          </li>
        </ul>
        <p>
          Violation of these restrictions may result in suspension of access to the Site and may
          give rise to civil or criminal liability under applicable Saudi law.
        </p>
      </>
    ),
  },
  {
    id: 'ai-content',
    heading: '4. AI-Generated Concept Imagery',
    content: (
      <>
        <p>
          This Site contains architectural concept images and visualisations that were produced
          using artificial intelligence (AI) image generation tools. These images are provided
          solely as <strong>illustrative references</strong> to communicate design possibilities,
          aesthetic directions, and system applications for GFRC/GRC architectural products.
        </p>
        <p>
          AI-generated images on this Site:
        </p>
        <ul>
          <li>
            <strong>Do not represent completed, delivered, or contracted projects</strong> by
            Durraka Factory for Industry unless explicitly and individually labelled otherwise.
          </li>
          <li>
            Do not constitute technical drawings, engineering specifications, or approved design
            documentation.
          </li>
          <li>
            Are not guaranteed to accurately reflect material finishes, structural properties,
            dimensions, or production outcomes.
          </li>
          <li>
            May depict architectural configurations, scales, or design features that differ from
            what is achievable within a specific project&rsquo;s constraints, budget, or site
            conditions.
          </li>
          <li>
            Should not be relied upon as the basis for commercial decisions, procurement, or
            technical assessment without independent verification and written confirmation from
            Durraka.
          </li>
        </ul>
        <p>
          All AI-generated images on this Site are clearly marked as concept references. Durraka
          expressly disclaims any liability arising from reliance on AI-generated imagery as
          representative of actual project outcomes or product specifications.
        </p>
      </>
    ),
  },
  {
    id: 'rfq',
    heading: '5. Request for Quotation — Non-Binding Nature',
    content: (
      <>
        <p>
          Submitting a Request for Quotation (RFQ) through this Site does not constitute, and
          shall not be construed as, a binding offer, purchase order, acceptance, contract, or
          commercial commitment by either party.
        </p>
        <p>All RFQ submissions are subject to:</p>
        <ul>
          <li>Technical review and engineering assessment by Durraka</li>
          <li>Commercial evaluation and pricing confirmation</li>
          <li>Full documentation of project specifications and scope</li>
          <li>
            Written approval and counter-offer issued by an authorised representative of Durraka
          </li>
        </ul>
        <p>
          A binding contractual or commercial obligation arises <strong>only</strong> upon the
          issuance of a duly signed, written quotation or formal contract executed by an authorised
          representative of Durraka Factory for Industry. Any prior informal communication —
          whether verbal, by email, WhatsApp, or through this Site — shall not constitute a
          binding agreement or obligation.
        </p>
        <p>
          Durraka reserves the right to decline, modify, or postpone a response to any RFQ at
          its absolute discretion and without liability.
        </p>
      </>
    ),
  },
  {
    id: 'pricing',
    heading: '6. Prices, Lead Times, and Availability',
    content: (
      <>
        <p>
          Any prices, cost ranges, illustrative areas, production lead times, delivery schedules,
          or capacity information referenced or implied on this Site — whether in text, infographics,
          package descriptions, or otherwise — are <strong>indicative only</strong> and are not
          guaranteed unless explicitly confirmed in a formal written quotation or signed contract.
        </p>
        <p>
          Firm commitments on pricing, timelines, available production capacity, and delivery
          conditions are issued exclusively in an official written quotation prepared and signed
          by Durraka. All quotations are subject to validity periods specified within the
          quotation document itself.
        </p>
        <p>
          Durraka reserves the right to modify product specifications, available systems, pricing,
          and production capacity at any time without prior notice on this Site.
        </p>
      </>
    ),
  },
  {
    id: 'ip',
    heading: '7. Intellectual Property',
    content: (
      <>
        <p>
          All content published on this Site — including but not limited to text, product
          descriptions, architectural packages, technical data, system specifications, infographics,
          photography, AI-generated imagery, brand assets, the Durraka name, and the Durraka logo —
          is the proprietary intellectual property of Durraka Factory for Industry or is used
          under licence, and is protected under applicable Saudi and international intellectual
          property laws.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable, revocable licence to access
          and view the Site content for your personal, non-commercial, professional evaluation
          purposes only.
        </p>
        <p>You may not, without our prior written permission:</p>
        <ul>
          <li>
            Reproduce, copy, distribute, publish, broadcast, or transmit any part of this Site
            or its content, in whole or in part, by any means.
          </li>
          <li>
            Modify, adapt, translate, create derivative works from, or reverse-engineer any
            content or technology on this Site.
          </li>
          <li>
            Use any Durraka trademark, trade name, logo, or brand asset in any manner that could
            create confusion or imply endorsement.
          </li>
          <li>
            Frame, mirror, or embed any part of this Site on any other website or platform
            without our written consent.
          </li>
          <li>
            Use product images, design drawings, specifications, or catalog content for any
            competitive, commercial, or industrial purpose.
          </li>
        </ul>
        <p>
          Unauthorised use of any intellectual property on this Site may give rise to civil and
          criminal liability under Saudi intellectual property law and the Anti-Cybercrime Law
          (Royal Decree M/17, 8/3/1428H).
        </p>
      </>
    ),
  },
  {
    id: 'confidentiality',
    heading: '8. Project References and Confidentiality',
    content: (
      <>
        <p>
          Project images, concept references, and architectural examples displayed on this Site
          may be subject to client confidentiality agreements, non-disclosure obligations, or
          publication restrictions.
        </p>
        <p>
          Where project references are published, they are displayed with appropriate authorisation
          and in accordance with applicable confidentiality commitments. Publicly referenced
          projects use only approved identifiers (such as location and year) without disclosing
          client names, contract values, exact project names, or confidential technical or
          commercial details.
        </p>
        <p>
          You must not reproduce, redistribute, or commercially exploit any project imagery,
          reference documentation, or case study content from this Site without the prior written
          authorisation of Durraka Factory for Industry.
        </p>
        <p>
          The following categories of information are <strong>not</strong> disclosed on this
          Site under any circumstances and must not be inferred from published content:
        </p>
        <ul>
          <li>Fixing, anchor, or connection details</li>
          <li>Internal reinforcement or structural engineering details</li>
          <li>Installation sequences or methodologies</li>
          <li>Production mould details or manufacturing trade secrets</li>
          <li>Contract values, client identity (unless approved), or project financials</li>
        </ul>
      </>
    ),
  },
  {
    id: 'disclaimer',
    heading: '9. Disclaimer of Warranties',
    content: (
      <>
        <p>
          This Site and all content published on it are provided on an &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; basis without warranties of any kind, express or implied,
          to the fullest extent permitted by applicable Saudi law.
        </p>
        <p>Durraka makes no warranty that:</p>
        <ul>
          <li>The Site will be uninterrupted, error-free, or free from viruses or harmful components.</li>
          <li>
            The information, specifications, or content on the Site is complete, accurate,
            current, or fit for any particular purpose.
          </li>
          <li>
            Any AI-generated imagery accurately represents achievable or planned project outcomes.
          </li>
          <li>
            Any response to an RFQ submission will be provided within any specified timeframe.
          </li>
        </ul>
        <p>
          Nothing in these Terms shall exclude or limit any warranty or liability that cannot
          lawfully be excluded or limited under applicable Saudi law.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    heading: '10. Limitation of Liability',
    content: (
      <>
        <p>
          To the fullest extent permitted by the laws of the Kingdom of Saudi Arabia, Durraka
          Factory for Industry, its directors, employees, agents, and affiliates shall not be
          liable for any:
        </p>
        <ul>
          <li>
            Direct, indirect, incidental, consequential, special, or punitive loss or damage
            arising from your use of, or inability to use, this Site.
          </li>
          <li>
            Loss of business, contracts, revenue, anticipated savings, data, or goodwill
            arising from reliance on any content or communication through this Site.
          </li>
          <li>
            Decisions or actions taken in reliance on any AI-generated concept imagery,
            illustrative area figures, or indicative pricing published on this Site.
          </li>
          <li>
            Technical failures, interruptions, or security breaches beyond our reasonable control.
          </li>
          <li>
            Delay or failure in performance arising from causes beyond our reasonable control
            (see also Section 14 — Force Majeure).
          </li>
        </ul>
        <p>
          Where liability cannot be entirely excluded under Saudi law, our total aggregate
          liability to you for any claim arising from or in connection with this Site shall not
          exceed the amount you have paid to us in the three months preceding the event giving
          rise to the claim (which, for free website access, shall be nil).
        </p>
        <p>
          This limitation of liability reflects the nature of this Site as an informational and
          commercial enquiry platform, not a binding sales platform.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    heading: '11. Indemnification',
    content: (
      <p>
        You agree to indemnify, defend, and hold harmless Durraka Factory for Industry, its
        officers, directors, employees, and agents from and against any claims, liabilities,
        losses, damages, costs, or expenses (including reasonable legal fees) arising from your
        use of this Site in violation of these Terms, your violation of any applicable law or
        third-party rights, or any misrepresentation made by you in connection with an RFQ
        submission or enquiry.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: '12. Governing Law and Jurisdiction',
    content: (
      <>
        <p>
          These Terms &amp; Conditions are governed by, and construed exclusively in accordance
          with, the laws of the <strong>Kingdom of Saudi Arabia</strong>. In the event of any
          conflict between Saudi law and any other applicable law — including the laws of any
          other GCC member state or jurisdiction — <strong>Saudi law shall prevail</strong>.
        </p>
        <p>
          Any dispute, claim, or controversy arising from or relating to these Terms, the use of
          this Site, or any communication or submission made through it shall be submitted to the
          <strong> exclusive jurisdiction of the competent courts of the Kingdom of Saudi Arabia</strong>,
          specifically the Commercial Courts of Jeddah, in accordance with the Commercial Court Law
          (Royal Decree M/93 dated 15/8/1441H).
        </p>
        <p>
          These Terms are available in Arabic upon request. In the event of any conflict between
          the English text and an Arabic translation of these Terms, the English text shall govern
          unless otherwise required by applicable Saudi law.
        </p>
      </>
    ),
  },
  {
    id: 'dispute',
    heading: '13. Dispute Resolution',
    content: (
      <>
        <p>
          Before initiating formal legal proceedings, we encourage you to contact us directly at{' '}
          <a href="mailto:info@durraka.com" className="text-accent hover:underline">
            info@durraka.com
          </a>{' '}
          to attempt to resolve any dispute amicably. We will acknowledge your notice within
          5 business days and endeavour to reach an agreed resolution within 30 calendar days.
        </p>
        <p>
          If an amicable resolution cannot be reached, either party may pursue its rights before
          the competent Saudi Commercial Courts of Jeddah as specified in Section 12.
        </p>
        <p>
          For disputes involving parties outside the Kingdom of Saudi Arabia, the parties may
          agree in writing to refer the dispute to arbitration under the Rules of the Saudi Center
          for Commercial Arbitration (SCCA), with the seat of arbitration in Jeddah, Kingdom of
          Saudi Arabia, conducted in Arabic (or bilingual if agreed), applying Saudi law. Any
          agreement to arbitrate shall not be construed as a waiver of any right under these Terms
          or applicable Saudi law.
        </p>
      </>
    ),
  },
  {
    id: 'force-majeure',
    heading: '14. Force Majeure',
    content: (
      <p>
        Durraka shall not be in breach of these Terms or liable for any delay or failure in
        performance resulting from causes beyond its reasonable control, including but not limited
        to: acts of God, natural disasters, fire, flood, epidemic, pandemic, war, civil unrest,
        government action, regulatory change, sanctions, industrial dispute, power failure,
        telecommunications failure, or supply chain disruption. In such circumstances, Durraka will
        notify you as soon as reasonably practicable and will endeavour to resume normal operations
        as soon as the force majeure event is resolved.
      </p>
    ),
  },
  {
    id: 'severability',
    heading: '15. Severability',
    content: (
      <p>
        If any provision of these Terms is found by a competent court to be unlawful, invalid, or
        unenforceable under applicable Saudi law, that provision shall be severed from these Terms
        and shall not affect the validity or enforceability of the remaining provisions, which shall
        continue in full force and effect.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '16. Amendments',
    content: (
      <p>
        Durraka reserves the right to amend, update, or replace these Terms &amp; Conditions at
        any time. The &ldquo;Last Updated&rdquo; date at the top of this page will reflect the
        date of the most recent revision. It is your responsibility to review these Terms
        periodically. Your continued use of this Site after any amendment constitutes your
        acceptance of the revised Terms, unless applicable law requires us to obtain explicit
        consent. Where a material change is made, we may provide notice through a prominent
        notice on the Site.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '17. Contact',
    content: (
      <>
        <p>
          For questions, concerns, or formal notices relating to these Terms &amp; Conditions,
          please contact us:
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
        <p className="mt-4 text-sm text-gray-500 italic">
          An Arabic version of these Terms &amp; Conditions is available upon written request.
        </p>
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
          <p className="text-white/40 text-xs mt-1">
            Governing law: Kingdom of Saudi Arabia · Jurisdiction: Commercial Courts of Jeddah
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        <p className="text-gray-600 leading-relaxed mb-12 text-base">
          By accessing or using the Durraka Factory for Industry website (&ldquo;Site&rdquo;),
          submitting an enquiry or Request for Quotation, or downloading any material from this
          Site, you agree to be bound by these Terms &amp; Conditions in their entirety. Please
          read them carefully. These Terms are governed exclusively by the laws of the Kingdom
          of Saudi Arabia.
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
