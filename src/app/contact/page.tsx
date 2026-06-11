import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Durraka Factory for Industry — GFRC/GRC façade specialists in Saudi Arabia.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Speak with our team about your project requirements, technical questions, or to arrange a factory visit.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8">Contact Information</h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  label: 'Address',
                  value: CONTACT_INFO.address,
                  href: undefined,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  ),
                },
                {
                  label: 'Phone',
                  value: CONTACT_INFO.phone,
                  href: `tel:${CONTACT_INFO.phone}`,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  ),
                },
                {
                  label: 'Email',
                  value: CONTACT_INFO.email,
                  href: `mailto:${CONTACT_INFO.email}`,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  ),
                },
              ].map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-navy"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-500 text-sm hover:text-accent transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
              <h3 className="text-navy font-bold text-sm mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday &#8211; Thursday</span>
                  <span className="font-semibold text-navy">8:00 AM &#8211; 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Friday &#8211; Saturday</span>
                  <span className="font-semibold text-navy">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8">Send a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Message *</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-navy text-white font-semibold rounded-sm hover:bg-navy-light transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
