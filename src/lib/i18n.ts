// ── i18n primitives (routing model: /ar route-prefix; see docs/i18n.md) ───────
// Foundation only. Arabic is NOT publicly linked yet — the EN/AR switcher stays
// hidden behind ARABIC_ENABLED in the header until the ar/* dictionaries are
// reviewed and approved.

export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

// Text direction per locale.
export function dir(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}

export function isRtl(locale: Locale): boolean {
  return dir(locale) === 'rtl'
}

// Structural-parity helper. An Arabic dictionary must have the SAME shape as its
// English source — same keys, same nesting, same array/number positions — but
// with translated (widened) string values. Typing an `ar` dictionary as
// `Translatable<typeof enDict>` turns any missing / renamed / extra key into a
// compile error, so translations can't silently drift from the source copy.
export type Translatable<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Translatable<U>[]
        : T extends object
          ? { [K in keyof T]: Translatable<T[K]> }
          : T
