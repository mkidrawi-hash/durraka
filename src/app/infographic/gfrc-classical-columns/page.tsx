import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GFRC Classical Column Systems — Durraka Factory',
  description:
    'Premium bilingual reference guide for GFRC/GRC classical column and capital systems. English and Arabic architectural infographic by Durraka Factory for Industry.',
}

// ── Durraka wordmark ──────────────────────────────────────────────────────────

function DurrakaLogo() {
  return (
    <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-[#D71920]" aria-hidden="true" />
        <span className="text-[#071B3B] font-black text-xl tracking-wide leading-none uppercase">
          DURRAKA
        </span>
      </div>
      <span className="text-[#071B3B]/50 text-[9px] font-semibold tracking-[0.2em] uppercase leading-none">
        Factory for Industry
      </span>
    </div>
  )
}

// ── SVG technical illustrations ───────────────────────────────────────────────

function ColumnIllustration() {
  return (
    <svg viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[88px] mx-auto" aria-hidden="true">
      {/* Abacus */}
      <rect x="10" y="6" width="70" height="7" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.6"/>
      {/* Echinus (capital bell) */}
      <path d="M15 13 Q45 22 75 13" stroke="#071B3B" strokeWidth="1.1" fill="white" fillOpacity="0.4"/>
      <path d="M20 19 Q45 26 70 19" stroke="#071B3B" strokeWidth="0.7" fill="none" opacity="0.4"/>
      {/* Neck band */}
      <rect x="28" y="26" width="34" height="5" stroke="#071B3B" strokeWidth="0.9" fill="white" fillOpacity="0.5"/>
      {/* Shaft */}
      <rect x="28" y="31" width="34" height="46" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.4"/>
      {/* Fluting lines */}
      {[33, 37, 41, 45, 49, 53, 57].map((x) => (
        <line key={x} x1={x} y1="31" x2={x} y2="77" stroke="#071B3B" strokeWidth="0.5" opacity="0.3"/>
      ))}
      {/* Entasis taper (visual only - subtle) */}
      <line x1="27" y1="31" x2="29" y2="77" stroke="#071B3B" strokeWidth="0.6" opacity="0.15"/>
      <line x1="63" y1="31" x2="61" y2="77" stroke="#071B3B" strokeWidth="0.6" opacity="0.15"/>
      {/* Torus base */}
      <rect x="23" y="77" width="44" height="6" stroke="#071B3B" strokeWidth="1" fill="white" fillOpacity="0.5"/>
      <path d="M22 77 Q45 80 68 77" stroke="#071B3B" strokeWidth="0.7" fill="none" opacity="0.3"/>
      {/* Plinth */}
      <rect x="17" y="83" width="56" height="8" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.5"/>
      {/* Red accent on abacus */}
      <rect x="10" y="6" width="70" height="2" fill="#D71920" opacity="0.55"/>
    </svg>
  )
}

function PrecisionIllustration() {
  return (
    <svg viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[88px] mx-auto" aria-hidden="true">
      {/* Blueprint background */}
      <rect x="6" y="6" width="78" height="68" fill="#F4F6F9" stroke="#071B3B" strokeWidth="1"/>
      {/* Grid */}
      {[24, 45, 66].map((x) => (
        <line key={`vg${x}`} x1={x} y1="6" x2={x} y2="74" stroke="#071B3B" strokeWidth="0.3" opacity="0.2"/>
      ))}
      {[22, 40, 57].map((y) => (
        <line key={`hg${y}`} x1="6" y1={y} x2="84" y2={y} stroke="#071B3B" strokeWidth="0.3" opacity="0.2"/>
      ))}
      {/* Panel outline */}
      <rect x="22" y="18" width="46" height="44" stroke="#071B3B" strokeWidth="1.5" fill="white"/>
      {/* Dimension — top */}
      <line x1="22" y1="11" x2="68" y2="11" stroke="#D71920" strokeWidth="0.9"/>
      <line x1="22" y1="8" x2="22" y2="14" stroke="#D71920" strokeWidth="0.9"/>
      <line x1="68" y1="8" x2="68" y2="14" stroke="#D71920" strokeWidth="0.9"/>
      {/* Dimension — right */}
      <line x1="76" y1="18" x2="76" y2="62" stroke="#D71920" strokeWidth="0.9"/>
      <line x1="73" y1="18" x2="79" y2="18" stroke="#D71920" strokeWidth="0.9"/>
      <line x1="73" y1="62" x2="79" y2="62" stroke="#D71920" strokeWidth="0.9"/>
      {/* Crosshair centre */}
      <line x1="45" y1="26" x2="45" y2="54" stroke="#D71920" strokeWidth="0.7" opacity="0.5" strokeDasharray="2,2"/>
      <line x1="30" y1="40" x2="60" y2="40" stroke="#D71920" strokeWidth="0.7" opacity="0.5" strokeDasharray="2,2"/>
      <circle cx="45" cy="40" r="3" stroke="#D71920" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  )
}

function LightweightIllustration() {
  return (
    <svg viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[88px] mx-auto" aria-hidden="true">
      {/* Left: solid block (heavy) */}
      <rect x="6" y="18" width="34" height="44" fill="#071B3B" fillOpacity="0.08" stroke="#071B3B" strokeWidth="1.2"/>
      <text x="23" y="44" textAnchor="middle" fontSize="6" fill="#071B3B" fillOpacity="0.35" fontWeight="600">SOLID</text>
      <text x="23" y="53" textAnchor="middle" fontSize="5" fill="#071B3B" fillOpacity="0.25">MASONRY</text>
      {/* Right: thin GRC shell */}
      <rect x="50" y="18" width="34" height="44" fill="#F4F6F9" stroke="#071B3B" strokeWidth="1.2"/>
      {/* Shell walls (thin) */}
      <rect x="50" y="18" width="6" height="44" fill="#D71920" fillOpacity="0.12" stroke="#D71920" strokeWidth="0.6"/>
      <rect x="78" y="18" width="6" height="44" fill="#D71920" fillOpacity="0.12" stroke="#D71920" strokeWidth="0.6"/>
      <rect x="50" y="18" width="34" height="6" fill="#D71920" fillOpacity="0.12" stroke="#D71920" strokeWidth="0.6"/>
      <text x="67" y="46" textAnchor="middle" fontSize="6" fill="#D71920" fillOpacity="0.7" fontWeight="700">GRC</text>
      <text x="67" y="55" textAnchor="middle" fontSize="5" fill="#071B3B" fillOpacity="0.25">SHELL</text>
      {/* Thickness bracket on GRC */}
      <line x1="50" y1="70" x2="56" y2="70" stroke="#D71920" strokeWidth="0.8"/>
      <line x1="50" y1="67" x2="50" y2="73" stroke="#D71920" strokeWidth="0.8"/>
      <line x1="56" y1="67" x2="56" y2="73" stroke="#D71920" strokeWidth="0.8"/>
      {/* vs label */}
      <text x="43" y="42" textAnchor="middle" fontSize="7" fill="#071B3B" fillOpacity="0.3" fontWeight="700">vs</text>
    </svg>
  )
}

function WeatherIllustration() {
  return (
    <svg viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[88px] mx-auto" aria-hidden="true">
      {/* Shield */}
      <path d="M45 6 L78 18 L78 46 Q78 66 45 76 Q12 66 12 46 L12 18 Z"
        stroke="#071B3B" strokeWidth="1.3" fill="#F4F6F9"/>
      {/* Sun symbol inside */}
      <circle cx="45" cy="32" r="8" stroke="#D71920" strokeWidth="1" fill="none" opacity="0.55"/>
      {[0,45,90,135,180,225,270,315].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 45 + 10 * Math.cos(rad)
        const y1 = 32 + 10 * Math.sin(rad)
        const x2 = 45 + 14 * Math.cos(rad)
        const y2 = 32 + 14 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D71920" strokeWidth="0.8" opacity="0.45"/>
      })}
      {/* Rain drops */}
      <line x1="33" y1="50" x2="31" y2="58" stroke="#071B3B" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
      <line x1="45" y1="50" x2="43" y2="58" stroke="#071B3B" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
      <line x1="57" y1="50" x2="55" y2="58" stroke="#071B3B" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
      {/* Check mark overlay */}
      <path d="M36 34 L42 40 L54 26" stroke="#071B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.18"/>
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    n: '01',
    titleEn: 'Architectural Form',
    titleAr: 'الشكل المعماري',
    descEn:
      'Produced to any classical or contemporary profile — Corinthian capitals, fluted shafts, Ionic orders, and modern interpretations — all manufactured from project architectural drawings.',
    descAr:
      'تُنتج وفق أي مقطع كلاسيكي أو معاصر — تيجان كورنثية وأعمدة مخددة وطرز أيونية وتفسيرات حديثة — وتصنع جميعها انطلاقاً من الرسومات المعمارية للمشروع.',
    Illustration: ColumnIllustration,
  },
  {
    n: '02',
    titleEn: 'Precision Manufacturing',
    titleAr: 'التصنيع الدقيق',
    descEn:
      'Every element engineered from architectural drawings. Profile geometry, proportions, and dimensional accuracy are confirmed before production commences.',
    descAr:
      'كل عنصر مهندس من الرسومات المعمارية. تُؤكَّد هندسة المقاطع والنسب والدقة في الأبعاد قبل الشروع في الإنتاج.',
    Illustration: PrecisionIllustration,
  },
  {
    n: '03',
    titleEn: 'Lightweight Construction',
    titleAr: 'البناء الخفيف الوزن',
    descEn:
      'GRC/GFRC delivers a stone-like aesthetic at a fraction of the structural weight — enabling classical architecture at scale without compromising visual character.',
    descAr:
      'يوفر GRC/GFRC جماليات شبيهة بالحجر بجزء بسيط من وزنه الإنشائي — مما يتيح تحقيق العمارة الكلاسيكية على نطاق واسع دون أي مساس بطابعها البصري.',
    Illustration: LightweightIllustration,
  },
  {
    n: '04',
    titleEn: 'Exterior Performance',
    titleAr: 'الأداء الخارجي',
    descEn:
      'Weather-resistant surface finishes formulated for the Saudi Arabian climate — durable under intense heat, UV exposure, and seasonal temperature variation.',
    descAr:
      'تشطيبات سطحية مقاومة للعوامل الجوية، مُصمَّمة خصيصاً لمناخ المملكة العربية السعودية — متينة في مواجهة الحرارة الشديدة والأشعة فوق البنفسجية والتفاوت الموسمي في درجات الحرارة.',
    Illustration: WeatherIllustration,
  },
]

const FINISHES = [
  { nameEn: 'Natural Stone',   nameAr: 'حجر طبيعي',     color: '#C8B89A', text: '#4A3F35' },
  { nameEn: 'Ivory White',     nameAr: 'أبيض عاجي',     color: '#F5EFE3', text: '#6B5D4E' },
  { nameEn: 'Warm Sandstone',  nameAr: 'حجر رملي دافئ', color: '#D4BA96', text: '#4A3F35' },
  { nameEn: 'Classic Grey',    nameAr: 'رمادي كلاسيكي', color: '#A8ADB4', text: '#2A2E33' },
  { nameEn: 'Custom Colour',   nameAr: 'لون مخصص',      color: '#071B3B', text: '#FFFFFF' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GfrcClassicalColumnsPage() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Segoe UI', Arial, 'Helvetica Neue', sans-serif" }}
    >

      {/* ── 1. HEADER ── */}
      <header className="bg-white border-b-2 border-[#071B3B] px-6 sm:px-10 lg:px-16 py-8 print:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-6">

            {/* Titles + intro */}
            <div className="flex-1 min-w-0">
              {/* Red accent rule */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-[#D71920]" aria-hidden="true" />
                <span className="text-[#D71920] text-[10px] font-bold tracking-[0.25em] uppercase">
                  GRC / GFRC · Architectural Systems
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B3B] leading-tight tracking-tight">
                Classical Column &amp; Capital Systems
              </h1>
              <p
                dir="rtl"
                lang="ar"
                className="text-2xl sm:text-3xl font-bold text-[#071B3B] mt-2 leading-snug"
                style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
              >
                أنظمة الأعمدة والتيجان الكلاسيكية
              </p>

              {/* Two-column intro */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mt-5 border-t border-gray-100 pt-5">
                <p className="text-[#071B3B]/70 text-sm sm:text-base leading-relaxed">
                  Durraka Factory for Industry produces precision-engineered GFRC/GRC classical column
                  and capital systems — from Corinthian orders to custom contemporary forms — manufactured
                  to architectural drawings anywhere in the Kingdom.
                </p>
                <p
                  dir="rtl"
                  lang="ar"
                  className="text-[#071B3B]/70 text-sm sm:text-base leading-relaxed text-right"
                  style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
                >
                  تنتج درّاكا للصناعة أنظمة أعمدة وتيجان كلاسيكية مصنوعة من GFRC/GRC بدقة عالية —
                  من الطرز الكورنثية إلى الأشكال المعاصرة المخصصة — وتُصنَّع وفق الرسومات المعمارية
                  في أي مكان من المملكة.
                </p>
              </div>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 pt-1">
              <DurrakaLogo />
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. HERO IMAGE ── */}
      <section className="relative overflow-hidden bg-[#071B3B]" style={{ aspectRatio: '21/9' }}>
        <Image
          src="/images/infographics/gfrc-classical-columns-hero.png"
          alt="Classical GFRC/GRC column facade — institutional neoclassical building with Corinthian columns and grand stone steps"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(7,27,59,0.18) 0%, transparent 30%, transparent 70%, rgba(7,27,59,0.45) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Caption */}
        <div className="absolute bottom-4 right-6 text-right">
          <p className="text-white/60 text-[10px] tracking-widest uppercase font-semibold">
            GRC / GFRC · Classical Column Systems
          </p>
        </div>
      </section>

      {/* ── SECTION DIVIDER ── */}
      <div className="h-1.5 bg-gradient-to-r from-[#D71920] via-[#071B3B] to-[#071B3B]" aria-hidden="true" />

      {/* ── 3. FEATURE BLOCKS ── */}
      <section className="bg-white px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[3px] bg-[#D71920]" aria-hidden="true" />
                <span className="text-[#D71920] text-[10px] font-bold tracking-[0.25em] uppercase">System Features</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071B3B]">Key Capabilities</h2>
            </div>
            <p
              dir="rtl"
              lang="ar"
              className="text-xl font-bold text-[#071B3B] sm:text-right"
              style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
            >
              الإمكانيات الرئيسية
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {FEATURES.map(({ n, titleEn, titleAr, descEn, descAr, Illustration }) => (
              <article
                key={n}
                className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Card top: number + icon */}
                <div className="bg-[#F8F7F5] border-b border-gray-100 px-6 py-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Number badge */}
                    <div className="w-11 h-11 rounded-full bg-[#071B3B] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm tracking-wide">{n}</span>
                    </div>
                    <div>
                      <h3 className="text-[#071B3B] font-bold text-base leading-tight">{titleEn}</h3>
                      <p
                        dir="rtl"
                        lang="ar"
                        className="text-[#071B3B]/65 text-sm leading-tight mt-0.5"
                        style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
                      >
                        {titleAr}
                      </p>
                    </div>
                  </div>
                  {/* Technical illustration */}
                  <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                    <Illustration />
                  </div>
                </div>

                {/* Card body: bilingual description */}
                <div className="px-6 py-5 grid grid-cols-1 gap-3">
                  <p className="text-[#071B3B]/70 text-sm leading-relaxed">{descEn}</p>
                  <div className="w-full h-px bg-gray-100" aria-hidden="true" />
                  <p
                    dir="rtl"
                    lang="ar"
                    className="text-[#071B3B]/70 text-sm leading-relaxed text-right"
                    style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
                  >
                    {descAr}
                  </p>
                </div>

                {/* Red accent bottom bar */}
                <div className="h-[3px] bg-[#D71920] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </article>
            ))}
          </div>

          {/* NDA safety note */}
          <p className="text-gray-400 text-xs mt-10 leading-relaxed max-w-2xl">
            For design understanding and early scope coordination only. Detailed fixing, connection,
            and installation information is excluded from this reference material.
          </p>
        </div>
      </section>

      {/* ── 4. FINISH PALETTE ── */}
      <section className="bg-[#F8F7F5] border-t border-gray-100 px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[3px] bg-[#D71920]" aria-hidden="true" />
                <span className="text-[#D71920] text-[10px] font-bold tracking-[0.25em] uppercase">Surface Finishes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071B3B]">Available Finish Palette</h2>
              <p className="text-[#071B3B]/55 text-sm mt-1">
                Finish direction confirmed through design review and approved samples.
              </p>
            </div>
            <p
              dir="rtl"
              lang="ar"
              className="text-xl font-bold text-[#071B3B] sm:text-right"
              style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
            >
              لوحة التشطيبات المتاحة
            </p>
          </div>

          {/* Swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FINISHES.map(({ nameEn, nameAr, color, text }) => (
              <div key={nameEn} className="flex flex-col gap-0">
                {/* Swatch block */}
                <div
                  className="rounded-t-sm h-24 sm:h-28 flex items-end p-3 shadow-sm"
                  style={{ backgroundColor: color }}
                >
                  {nameEn === 'Custom Colour' && (
                    <div
                      className="w-full h-full absolute inset-0 rounded-t-sm opacity-20"
                      style={{
                        background: 'repeating-linear-gradient(45deg, #C8B89A, #C8B89A 4px, #A8ADB4 4px, #A8ADB4 8px)',
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                {/* Label */}
                <div className="bg-white border border-gray-100 rounded-b-sm px-3 py-2.5">
                  <p className="text-[#071B3B] font-semibold text-xs leading-tight">{nameEn}</p>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="text-[#071B3B]/60 text-xs leading-tight mt-0.5"
                    style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
                  >
                    {nameAr}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs mt-6 leading-relaxed">
            Colours shown are indicative. Final finish specification confirmed through project review and approved samples.
            <span
              dir="rtl"
              lang="ar"
              className="block mt-1 text-right"
              style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
            >
              الألوان المعروضة استرشادية. تُحدَّد مواصفات التشطيب النهائية من خلال مراجعة المشروع والعينات المعتمدة.
            </span>
          </p>
        </div>
      </section>

      {/* ── 5. CTA STRIP ── */}
      <section className="bg-[#071B3B] px-6 sm:px-10 lg:px-16 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg sm:text-xl leading-tight">
              Ready to discuss your column package?
            </p>
            <p
              dir="rtl"
              lang="ar"
              className="text-white/60 text-base mt-1"
              style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
            >
              هل أنت مستعد لمناقشة حزمة الأعمدة الخاصة بك؟
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D71920] text-white text-sm font-semibold rounded-sm hover:bg-red-700 transition-colors w-full sm:w-auto"
            >
              Request a Quotation
            </Link>
            <Link
              href="/systems/columns"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              View Column Systems
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#071B3B] border-t border-white/[0.07] px-6 sm:px-10 lg:px-16 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 bg-[#D71920]" aria-hidden="true" />
            <p className="text-white/70 text-xs tracking-wide">
              Durraka Factory for Industry — GFRC Architectural Systems
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p
              dir="rtl"
              lang="ar"
              className="text-white/50 text-xs"
              style={{ fontFamily: "'Cairo', 'Noto Kufi Arabic', 'Segoe UI', Arial, sans-serif" }}
            >
              درّاكا للصناعة — أنظمة GFRC المعمارية
            </p>
            <span className="text-white/20 text-xs">·</span>
            <Link href="/" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              durraka.com
            </Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
