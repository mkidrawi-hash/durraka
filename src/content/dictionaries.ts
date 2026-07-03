// ── Locale dictionary accessor ────────────────────────────────────────────────
// Single entry point for locale-scoped copy. Each `ar` dictionary is typed against
// its English source (see src/lib/i18n.ts `Translatable`), so the two locales are
// structurally locked together at compile time.

import type { Locale } from '@/lib/i18n'

import { rfqContent } from './en/rfq'
import { engineerGuidanceContent } from './en/systems/engineer-guidance'
import { facadeCladdingContent } from './en/systems/gfrc-grc-facade-cladding'
import { packagesContent } from './en/packages'

import { rfqContentAr } from './ar/rfq'
import { engineerGuidanceContentAr } from './ar/systems/engineer-guidance'
import { facadeCladdingContentAr } from './ar/systems/gfrc-grc-facade-cladding'
import { packagesContentAr } from './ar/packages'

const dictionaries = {
  en: {
    rfq: rfqContent,
    engineerGuidance: engineerGuidanceContent,
    facadeCladding: facadeCladdingContent,
    packages: packagesContent,
  },
  ar: {
    rfq: rfqContentAr,
    engineerGuidance: engineerGuidanceContentAr,
    facadeCladding: facadeCladdingContentAr,
    packages: packagesContentAr,
  },
} as const

export type Dictionary = (typeof dictionaries)['en']

export function getDictionary(locale: Locale): (typeof dictionaries)[Locale] {
  return dictionaries[locale]
}
