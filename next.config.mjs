/** @type {import('next').NextConfig} */
const nextConfig = {
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
