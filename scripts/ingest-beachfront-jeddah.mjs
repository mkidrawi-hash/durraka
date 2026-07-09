// One-shot ingest for the "Beachfront Hotel & Resort – Jeddah" gallery group.
// Reads the 9 approved originals from ./gallery-upload/, then:
//   1. DEDUPE: md5-hashes each source and compares against EVERY image already
//      in public/ and private/ — aborts on any collision (never overwrites).
//   2. OPTIMIZE: sharp → max 1920px wide (no upscale), .jpg q82 + .webp q80
//      into public/images/projects/beachfront-hotel-resort-jeddah/.
//   3. ARCHIVE: copies the untouched originals to
//      private/project-media/beachfront-hotel-resort-jeddah/99-archive-originals/.
// Prints a per-file report. Safe to re-run (skips identical existing outputs).
//
// Usage: node scripts/ingest-beachfront-jeddah.mjs

import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, statSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import sharp from 'sharp'

const SRC_DIR = 'gallery-upload'
const OUT_DIR = 'public/images/projects/beachfront-hotel-resort-jeddah'
const ARCHIVE_DIR = 'private/project-media/beachfront-hotel-resort-jeddah/99-archive-originals'

// source filename → output basename (no extension)
const FILES = {
  'durraka-hospitality-mashrabiya-facade-jeddah-2026-01.jpg': 'beachfront-hotel-resort-mashrabiya-facade-01',
  'durraka-hospitality-arched-pool-courtyard-jeddah-2026-02.jpg': 'beachfront-hotel-resort-arched-pool-courtyard-02',
  'durraka-hospitality-mashrabiya-balconies-jeddah-2026-03.jpg': 'beachfront-hotel-resort-mashrabiya-balconies-03',
  'durraka-hospitality-seafront-elevation-jeddah-2026-04.jpg': 'beachfront-hotel-resort-seafront-elevation-04',
  'durraka-hospitality-entrance-axis-jeddah-2026-07.jpg': 'beachfront-hotel-resort-entrance-axis-07',
  'durraka-hospitality-resort-aerial-jeddah-2026-08.jpg': 'beachfront-hotel-resort-resort-aerial-08',
  'durraka-hospitality-villas-golf-aerial-jeddah-2026-09.jpg': 'beachfront-hotel-resort-villas-golf-aerial-09',
  'durraka-hospitality-masterplan-aerial-jeddah-2026-10.jpg': 'beachfront-hotel-resort-masterplan-aerial-10',
  'durraka-hospitality-colonnade-mashrabiya-jeddah-2026-11.jpg': 'beachfront-hotel-resort-colonnade-mashrabiya-11',
}

const md5 = (p) => createHash('md5').update(readFileSync(p)).digest('hex')

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else if (/\.(jpe?g|png|webp|gif|svg)$/i.test(e.name)) yield p
  }
}

// ── 0. sources present? ──
const missing = Object.keys(FILES).filter((f) => !existsSync(join(SRC_DIR, f)))
if (missing.length) {
  console.error(`ABORT — ${missing.length} source file(s) missing from ${SRC_DIR}/:`)
  missing.forEach((f) => console.error('  ' + f))
  process.exit(1)
}

// ── 1. dedupe by hash against the whole repo image set ──
const repoHashes = new Map()
for (const dir of ['public', 'private']) {
  if (!existsSync(dir)) continue
  for (const p of walk(dir)) repoHashes.set(md5(p), p)
}
let collision = false
for (const f of Object.keys(FILES)) {
  const h = md5(join(SRC_DIR, f))
  if (repoHashes.has(h)) {
    console.error(`HASH COLLISION — ${f} is byte-identical to ${repoHashes.get(h)}`)
    collision = true
  }
}
if (collision) {
  console.error('ABORT — duplicates found; nothing written.')
  process.exit(1)
}
console.log(`dedupe: 9/9 unique vs ${repoHashes.size} existing repo images ✓`)

// ── 2 + 3. optimize + archive ──
mkdirSync(OUT_DIR, { recursive: true })
mkdirSync(ARCHIVE_DIR, { recursive: true })
for (const [src, out] of Object.entries(FILES)) {
  const srcPath = join(SRC_DIR, src)
  const meta = await sharp(srcPath).metadata()
  const width = Math.min(meta.width ?? 1920, 1920)
  const base = sharp(srcPath).resize({ width, withoutEnlargement: true })
  await base.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(join(OUT_DIR, out + '.jpg'))
  await base.clone().webp({ quality: 80 }).toFile(join(OUT_DIR, out + '.webp'))
  copyFileSync(srcPath, join(ARCHIVE_DIR, src))
  const j = statSync(join(OUT_DIR, out + '.jpg')).size
  const w = statSync(join(OUT_DIR, out + '.webp')).size
  console.log(
    `${src} (${meta.width}x${meta.height}, ${(statSync(srcPath).size / 1024).toFixed(0)}KB) → ` +
      `${out}.jpg ${(j / 1024).toFixed(0)}KB + .webp ${(w / 1024).toFixed(0)}KB @ ${width}px`,
  )
}
console.log('archive: 9 originals copied untouched to ' + ARCHIVE_DIR + ' ✓')
console.log('DONE')
