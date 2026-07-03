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
      // Legacy "Our Projects" area retired: it mixed abstracted project claims
      // (specific areas/years) with concept imagery and duplicated /gallery.
      // Redirect the index and every detail page to the real, vetted project
      // gallery with a 301 so existing links keep their value.
      {
        source: '/projects',
        destination: '/gallery',
        statusCode: 301,
      },
      {
        source: '/projects/:slug',
        destination: '/gallery',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
