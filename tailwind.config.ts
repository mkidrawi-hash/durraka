import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071B3B',
        'navy-light': '#0e2e65',
        'navy-dark': '#040f22',
        accent: '#D71920',
        'accent-light': '#e84048',
        'accent-dark': '#a81219',
      },
    },
  },
  plugins: [],
}

export default config
