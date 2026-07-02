/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure the gated B2B catalog PDF (stored OUTSIDE /public so it is never
  // served as a static asset) is bundled into the protected download route's
  // serverless function on Vercel. Without this, the file would not exist at
  // runtime in the deployed function.
  experimental: {
    // Next.js 14: this key lives under `experimental` (it graduated to
    // top-level only in Next 15).
    outputFileTracingIncludes: {
      '/api/detailed-catalog-download': ['./private/catalogs/**'],
    },
  },
  // Canonical slug alignment: the façade cladding detail page now lives at
  // /systems/gfrc-grc-facade-cladding. Keep the old /systems/facade-cladding
  // URL working via a permanent (308) redirect so existing links don't break.
  async redirects() {
    return [
      {
        source: '/systems/facade-cladding',
        destination: '/systems/gfrc-grc-facade-cladding',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
