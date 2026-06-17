'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { DiagramEnlarger } from '@/components/systems/DiagramEnlarger'

export type FacadeCallout = { n: number; label: string; desc: string }
export type FacadeAccordionItem = { label: string; content: string | string[] }
export type FacadeContent = {
  dir: 'ltr' | 'rtl'
  hero: { breadcrumb: string; title: string; subtitle: string; description: string; btnQuote: string; btnContact: string }
  featureIcons: { key: 'lightweight' | 'profile' | 'durable' | 'heritage'; label: string; desc: string }[]
  diagramLabel: string
  diagramNote: string
  tabs: { labels: [string, string, string, string]; quickRead: string; benefits: string[]; applications: string[]; designOptions: string[] }
  callouts: FacadeCallout[]
  accordion: FacadeAccordionItem[]
  technicalNote: string
  cta: { eyebrow: string; title: string; body: string; btnQuote: string; btnContact: string }
}

function IconLightweight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  )
}

function IconProfile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
    </svg>
  )
}

function IconDurable() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  )
}

function IconHeritage() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
  )
}

function getIcon(key: FacadeContent['featureIcons'][number]['key']) {
  switch (key) {
    case 'lightweight': return <IconLightweight />
    case 'profile': return <IconProfile />
    case 'durable': return <IconDurable />
    case 'heritage': return <IconHeritage />
  }
}

function FacadeDiagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Simplified façade cladding system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="40" y1="268" x2="340" y2="268" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="65" y="30" width="250" height="238" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.8" />
      <rect x="56" y="20" width="268" height="12" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.07" />
      <line x1="65" y1="90" x2="315" y2="90" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="65" y1="150" x2="315" y2="150" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="65" y1="210" x2="315" y2="210" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="127" y1="32" x2="127" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="189" y1="32" x2="189" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="251" y1="32" x2="251" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      {[42, 102, 162, 222].map(y =>
        [73, 135, 197, 259].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="46" height="40" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
        ))
      )}
      <LeaderLine x1="94" y1="120" x2="40" y2="120" />
      <LeaderLine x1="40" y1="120" x2="31" y2="108" />
      <CalloutBadge n={1} cx={31} cy={99} />
      <LeaderLine x1="189" y1="55" x2="189" y2="11" />
      <CalloutBadge n={2} cx={189} cy={8} />
      <LeaderLine x1="218" y1="122" x2="358" y2="122" />
      <CalloutBadge n={3} cx={368} cy={122} />
      <LeaderLine x1="315" y1="170" x2="358" y2="155" />
      <CalloutBadge n={4} cx={368} cy={148} />
      <LeaderLine x1="94" y1="240" x2="40" y2="278" />
      <CalloutBadge n={5} cx={31} cy={285} />
      <LeaderLine x1="189" y1="30" x2="189" y2="20" />
      <LeaderLine x1="189" y1="20" x2="358" y2="20" />
      <CalloutBadge n={6} cx={368} cy={20} />
    </svg>
  )
}

export function FacadeCladdingRichLayout({ content, heroImage = '/images/projects/grand-entrance-gfrc.png' }: { content: FacadeContent; heroImage?: string }) {
  const [activeTab, setActiveTab] = useState(0)
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const [showAllAccordion, setShowAllAccordion] = useState(false)
  const { dir, hero, featureIcons, tabs, callouts, accordion, cta, diagramLabel, diagramNote, technicalNote } = content

  return (
    <div dir={dir}>
      {/* Hero Section */}
      <div className="relative bg-[#071B3B] pt-16 pb-16 sm:pb-24 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.22]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3B] via-[#071B3B]/92 to-[#071B3B]/55" />
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D71920]" />
            <Link href="/systems" className="text-[#D71920] text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors">
              {hero.breadcrumb}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-2xl">{hero.title}</h1>
          <p className="text-[#D71920] font-semibold tracking-wide text-sm sm:text-base mb-4">{hero.subtitle}</p>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">{hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/request-quotation" className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 bg-[#D71920] text-white font-semibold rounded-sm hover:bg-red-700 transition-colors text-sm">{hero.btnQuote}</Link>
            <Link href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm">{hero.btnContact}</Link>
          </div>
        </div>
      </div>

      {/* Feature Icon Row */}
      <div className="bg-white border-b border-[#071B3B]/[0.08] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featureIcons.map((icon) => (
              <div key={icon.key} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#071B3B]/[0.06] flex items-center justify-center text-[#071B3B]">
                  {getIcon(icon.key)}
                </div>
                <div>
                  <p className="text-[#071B3B] font-bold text-sm mb-1">{icon.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{icon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diagram + Tabs Section */}
      <div className="bg-[#F8F9FA] border-t border-[#071B3B]/[0.08] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Diagram */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-sm border border-[#071B3B]/[0.08] p-2 sm:p-5">
                <p className="text-[#071B3B]/40 text-[10px] font-mono tracking-widest uppercase mb-3">{diagramLabel}</p>
                <DiagramEnlarger title={hero.title}>
                  <FacadeDiagram />
                </DiagramEnlarger>
                <p className="text-[#071B3B]/35 text-[10px] mt-2 leading-relaxed">{diagramNote}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="lg:col-span-2">
              {/* Tab strip */}
              <div className="overflow-x-auto -mx-1">
                <div className="flex gap-1 min-w-max px-1 border-b border-[#071B3B]/[0.08] mb-6">
                  {tabs.labels.map((label, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`whitespace-nowrap text-[13px] font-semibold tracking-wide px-3 py-3 border-b-2 transition-colors ${
                        activeTab === i
                          ? 'border-[#D71920] text-[#D71920]'
                          : 'border-transparent text-[#071B3B]/50 hover:text-[#071B3B]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab content */}
              <div>
                {activeTab === 0 && (
                  <p className="text-gray-600 text-sm leading-relaxed">{tabs.quickRead}</p>
                )}
                {activeTab === 1 && (
                  <ul className="space-y-2">
                    {tabs.benefits.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0 mt-1.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 2 && (
                  <ul className="space-y-2">
                    {tabs.applications.map(a => (
                      <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0 mt-1.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 3 && (
                  <ul className="space-y-2">
                    {tabs.designOptions.map(d => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callout Legend */}
      <div className="bg-white border-t border-[#071B3B]/[0.08] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#071B3B]/40 text-[10px] font-mono tracking-widest uppercase mb-6">System Diagram — Callout Reference</p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {callouts.map(c => (
              <li key={c.n} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D71920] text-white text-xs font-bold flex items-center justify-center mt-0.5">{c.n}</span>
                <div>
                  <p className="text-[#071B3B] font-semibold text-sm leading-snug">{c.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="bg-[#F8F9FA] border-t border-[#071B3B]/[0.08] px-4 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">System Information</span>
          </div>
          <div className="divide-y divide-[#071B3B]/[0.08]">
            {(showAllAccordion ? accordion : accordion.slice(0, 3)).map((item, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-start group"
                >
                  <span className={`font-bold text-base sm:text-lg transition-colors ${openIdx === i ? 'text-[#D71920]' : 'text-[#071B3B] group-hover:text-[#D71920]'}`}>{item.label}</span>
                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors text-sm font-bold ${openIdx === i ? 'border-[#D71920] text-[#D71920]' : 'border-[#071B3B]/30 text-[#071B3B]/60 group-hover:border-[#D71920] group-hover:text-[#D71920]'}`}>
                    {openIdx === i ? '−' : '+'}
                  </span>
                </button>
                {openIdx === i && (
                  <div className="mt-4 pb-2">
                    {typeof item.content === 'string'
                      ? <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">{item.content}</p>
                      : <ul className="space-y-2 max-w-3xl">{item.content.map((c, j) => <li key={j} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0 mt-1.5" />{c}</li>)}</ul>
                    }
                  </div>
                )}
              </div>
            ))}
            {accordion.length > 3 && !showAllAccordion && (
              <button onClick={() => setShowAllAccordion(true)} className="mt-3 w-full flex items-center justify-center gap-2 py-3 border border-[#071B3B]/15 rounded-sm text-[#071B3B]/60 text-sm font-medium hover:text-[#071B3B] hover:border-[#071B3B]/30 transition-colors">
                Show more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Technical Note */}
      <div className="bg-white border-t border-[#071B3B]/[0.08] px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="border border-[#071B3B]/15 p-5 rounded-sm flex items-start gap-3">
            <svg className="w-4 h-4 text-[#071B3B]/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#071B3B]/55 text-xs leading-relaxed">
              <span className="font-semibold text-[#071B3B]/70">Technical Note: </span>{technicalNote}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#071B3B] px-4 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">{cta.eyebrow}</span>
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{cta.title}</h2>
          <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/request-quotation" className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 bg-[#D71920] text-white font-semibold rounded-sm hover:bg-red-700 transition-colors text-sm">{cta.btnQuote}</Link>
            <Link href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm">{cta.btnContact}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
