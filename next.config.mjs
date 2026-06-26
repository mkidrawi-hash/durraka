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
}

export default nextConfig
