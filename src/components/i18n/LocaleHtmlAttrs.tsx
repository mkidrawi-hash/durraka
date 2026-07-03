'use client'

import { useEffect } from 'react'

// Sets the document-level dir/lang for the current locale subtree. With the
// /ar route-prefix model the root <html> stays lang="en" dir="ltr" (it lives in
// the root layout), so this client helper flips <html dir/lang> at runtime for
// CSS logical properties and assistive tech. When the [locale] migration lands
// (see docs/i18n.md) this becomes unnecessary — <html> gets the attributes on
// the server instead. Renders nothing.
export default function LocaleHtmlAttrs({
  dir,
  lang,
}: {
  dir: 'ltr' | 'rtl'
  lang: string
}) {
  useEffect(() => {
    const el = document.documentElement
    const prevDir = el.getAttribute('dir')
    const prevLang = el.getAttribute('lang')
    el.setAttribute('dir', dir)
    el.setAttribute('lang', lang)
    return () => {
      if (prevDir) el.setAttribute('dir', prevDir)
      if (prevLang) el.setAttribute('lang', prevLang)
    }
  }, [dir, lang])
  return null
}
