export interface RequiredInput {
  label: string
  description: string
}

export interface ProjectPackageData {
  slug: string
  title: string
  tag: string
  shortDescription: string
  location: string
  year: string
  heroImage: string
  heroObjectPosition?: string
  systems: string[]
  overview: string
  typicalScope: string[]
  requiredInputs: RequiredInput[]
}

export const PROJECT_PACKAGES: ProjectPackageData[] = [
  {
    slug: 'complete-facade-package',
    title: 'Complete Facade Package',
    tag: 'Full Facade Scope',
    shortDescription:
      'Integrated GRC/GFRC scope covering cladding panels, columns, cornices, domes, mashrabiya screens, and custom architectural details across the full building facade.',
    location: 'Riyadh, KSA',
    year: '2025',
    heroImage: '/images/projects/architectural-cladding-gfrc.png',
    heroObjectPosition: 'center',
    systems: ['Cladding', 'Columns', 'Cornices', 'Decorative'],
    overview:
      'The Complete Facade Package covers the full architectural scope of a building\'s exterior — combining GRC/GFRC cladding panels, columns, cornices, and custom decorative elements into a single coordinated delivery. Suited to multi-storey commercial, institutional, and mixed-use developments where the facade design requires multiple integrated GRC/GFRC systems manufactured and delivered under one scope.',
    typicalScope: [
      'Architectural GRC/GFRC cladding panels',
      'Columns and pilasters',
      'Cornices and profile bands',
      'Decorative frames and surrounds',
      'Mashrabiya and facade screens',
      'Dome and crown elements',
      'Custom mold development for project-specific profiles',
      'Shop drawing coordination and review',
      'Sample and reference finish review',
      'Manufacturing to project drawings',
      'Project-based delivery across the Kingdom',
    ],
    requiredInputs: [
      {
        label: 'Architectural drawings',
        description:
          'Plans, elevations, and facade layout drawings showing overall composition and dimensions.',
      },
      {
        label: 'Elevations',
        description:
          'Exterior elevation drawings showing the full facade, storey heights, and panel layout.',
      },
      {
        label: 'Sections',
        description:
          'Cross-section drawings to understand depth, profile, and layering of facade components.',
      },
      {
        label: 'Structural drawings',
        description:
          'Structural drawings or details relevant to the facade support system and fixings.',
      },
      {
        label: 'BOQ / quantity schedule, or quantities extracted from architectural drawings',
        description:
          'Bill of quantities to establish scope. Our team can also extract approximate quantities directly from the drawing package.',
      },
      {
        label: 'Reference images or design direction',
        description:
          'Mood boards, reference photographs, or architect notes on the intended architectural style and finish direction.',
      },
    ],
  },
  {
    slug: 'custom-architectural-components',
    title: 'Custom Architectural Components',
    tag: 'Custom Components',
    shortDescription:
      'Bespoke GRC/GFRC components — cornices, capitals, molded panels, decorative frames, and profile details produced to project drawings.',
    location: 'Jeddah, KSA',
    year: '2023',
    heroImage: '/images/projects/ornamental-facade-gfrc.png',
    heroObjectPosition: 'center',
    systems: ['Cornices', 'Decorative', 'Mashrabiya'],
    overview:
      'The Custom Architectural Components scope covers bespoke GRC/GFRC elements produced to project-specific drawings — cornices, capitals, molded panels, decorative frames, ornamental details, and custom profiles. Suited to projects where the architectural vision requires unique, non-standard components that demand dedicated mold development and precision manufacturing.',
    typicalScope: [
      'Custom cornices and profile moldings',
      'Decorative capitals, keystones, and framing elements',
      'Ornamental panels and facade details',
      'Patterned or geometric screens and panels',
      'Custom mold design and development',
      'Profile and section review with the project architect',
      'Sample production and approval before full manufacturing run',
      'Manufacturing to approved shop drawings',
      'Coordinated delivery to site',
    ],
    requiredInputs: [
      {
        label: 'Architectural drawings',
        description:
          'Plans and elevations showing the location, layout, and context of custom elements.',
      },
      {
        label: 'Detail drawings',
        description:
          'Specific detail drawings of each custom component — profiles, sections, and ornamental details.',
      },
      {
        label: 'Elevations',
        description:
          'Exterior elevation drawings showing the placement and scale of custom components within the facade.',
      },
      {
        label: 'BOQ / quantity schedule, or quantities extracted from architectural drawings',
        description:
          'Bill of quantities for each component type. Our team can estimate from drawings when a BOQ is not yet prepared.',
      },
      {
        label: 'Reference images or design direction',
        description:
          'Reference photographs, sketches, or style notes for ornamental and decorative elements.',
      },
    ],
  },
  {
    slug: 'heritage-regional-architecture',
    title: 'Heritage & Regional Architecture',
    tag: 'Heritage Scope',
    shortDescription:
      'GRC/GFRC scope for heritage-inspired and regionally influenced architecture — mashrabiya screens, geometric facade details, domes, and ornamental elements.',
    location: 'Medina, KSA',
    year: '2022',
    heroImage: '/images/projects/mashrabiya-screen-gfrc.png',
    heroObjectPosition: 'center',
    systems: ['Mashrabiya', 'Domes', 'Cornices', 'Decorative'],
    overview:
      'The Heritage & Regional Architecture scope is designed for projects that draw from Saudi, Hijazi, Najdi, or Islamic architectural identity. Durraka manufactures GRC/GFRC mashrabiya screens, geometric facade panels, domes, ornamental cornices, and traditional architectural details to project-specific drawings — combining regional character with precision manufacturing and exterior-grade material performance.',
    typicalScope: [
      'GRC/GFRC mashrabiya screens and geometric panels',
      'Traditional dome and crown elements',
      'Heritage-inspired cornices and profile bands',
      'Ornamental facade details and framing elements',
      'Geometric pattern development and mold production',
      'Custom profile and section review',
      'Sample production and pattern approval',
      'Manufacturing to approved shop drawings',
      'Project-based delivery and coordination',
    ],
    requiredInputs: [
      {
        label: 'Architectural drawings',
        description:
          'Plans and elevations showing the location, scale, and layout of heritage and screen elements.',
      },
      {
        label: 'Elevations',
        description:
          'Exterior elevation drawings showing the full facade composition and positions of screens, domes, and cornices.',
      },
      {
        label: 'Detail drawings',
        description:
          'Pattern details, geometric specifications, or ornamental detail drawings for custom screen elements.',
      },
      {
        label: 'BOQ / quantity schedule, or quantities extracted from architectural drawings',
        description:
          'Quantities for each element type. Our team can extract quantities from the drawing package when a BOQ is not provided.',
      },
      {
        label: 'Reference images or design direction',
        description:
          'Reference images, precedent projects, or notes on regional architectural style and character.',
      },
    ],
  },
  {
    slug: 'villa-palace-architecture',
    title: 'Villa & Palace Architecture',
    tag: 'Villa & Palace Scope',
    shortDescription:
      'Premium GRC/GFRC package for luxury villas and palaces — classical columns, ornamental cornices, decorative frames, and complete facade cladding.',
    location: 'Al Khobar, KSA',
    year: '2022',
    heroImage: '/images/projects/column-portico-gfrc.png',
    heroObjectPosition: 'center',
    systems: ['Columns', 'Cornices', 'Cladding', 'Decorative'],
    overview:
      'The Villa & Palace Architecture scope is designed for luxury residential and palace projects that require a premium exterior architectural package. Durraka manufactures classical GRC/GFRC columns, ornamental cornices, decorative frames, entrance elements, and full facade cladding — all matched to architectural drawings and delivered as a coordinated scope. Suited to high-end villas, royal residences, private palaces, and premium residential compounds.',
    typicalScope: [
      'Classical GRC/GFRC columns and pilasters',
      'Ornamental cornices and profile bands',
      'Decorative frames, surrounds, and entrance elements',
      'Facade cladding panels',
      'Custom mold development for bespoke classical profiles',
      'Shop drawing coordination with the design team',
      'Sample production and finish review',
      'Manufacturing to approved drawings',
      'Delivery and coordination with site contractor',
    ],
    requiredInputs: [
      {
        label: 'Architectural drawings',
        description:
          'Plans, elevations, and facade drawings showing overall composition, entrances, and dimensions.',
      },
      {
        label: 'Elevations',
        description:
          'Exterior elevation drawings showing column positions, cornice details, and facade composition.',
      },
      {
        label: 'Sections',
        description:
          'Section drawings showing profile depth, cornice projections, and facade layering.',
      },
      {
        label: 'Structural drawings',
        description:
          'Structural details relevant to column bases, supports, and facade fixings.',
      },
      {
        label: 'BOQ / quantity schedule, or quantities extracted from architectural drawings',
        description:
          'Quantities for each element type. Our team can extract from drawings if a BOQ is not yet available.',
      },
      {
        label: 'Reference images or design direction',
        description:
          'Reference photographs or style notes for the intended classical, contemporary, or heritage direction.',
      },
    ],
  },
  {
    slug: 'landmark-government-facades',
    title: 'Landmark & Government Facades',
    tag: 'Landmark Scope',
    shortDescription:
      'Large-scale integrated facade scope for government and institutional buildings — cladding, columns, architectural cornices, domes, and custom facade elements.',
    location: 'Dammam, KSA',
    year: '2023',
    heroImage: '/images/projects/dome-vault-gfrc.png',
    heroObjectPosition: 'center',
    systems: ['Cladding', 'Domes', 'Cornices', 'Columns'],
    overview:
      'The Landmark & Government Facade scope covers large-scale GRC/GFRC packages for government buildings, institutional complexes, civic facilities, and landmark civic architecture. Durraka manufactures cladding panels, architectural cornices, columns, domes, and custom facade elements — coordinated as a single engineered scope from drawing review to Kingdom-wide delivery.',
    typicalScope: [
      'Large-scale GRC/GFRC cladding systems',
      'Architectural columns and pilasters',
      'Formal cornices and profile bands',
      'Domes and monumental crown elements',
      'Custom mold development for formal architectural profiles',
      'Full shop drawing coordination and submission',
      'Sample review and material approval',
      'Manufacturing at scale to project drawings',
      'Coordinated delivery and logistics planning',
    ],
    requiredInputs: [
      {
        label: 'Architectural drawings',
        description:
          'Plans and elevations covering all facade zones of the building.',
      },
      {
        label: 'Elevations',
        description:
          'Full exterior elevation drawings showing scale, element positions, and facade composition.',
      },
      {
        label: 'Sections',
        description:
          'Cross-section drawings showing facade depth, dome geometry, and cornice profiles.',
      },
      {
        label: 'Structural drawings',
        description:
          'Structural drawings showing the building frame and facade support conditions.',
      },
      {
        label: 'BOQ / quantity schedule, or quantities extracted from architectural drawings',
        description:
          'Full scope quantities for accurate pricing. Our team can extract quantities from drawings when a BOQ is not available.',
      },
      {
        label: 'Reference images or design direction',
        description:
          'Design intent, references, or notes on the formal architectural character and required finish.',
      },
    ],
  },
  {
    slug: 'hospitality-landmark-facades',
    title: 'Hospitality & Landmark Facades',
    tag: 'Hospitality Scope',
    shortDescription:
      'GRC/GFRC facade scope for luxury hotels and landmark hospitality developments — grand entrance elements, columns, cladding, and ornamental details.',
    location: 'Riyadh, KSA',
    year: '2022',
    heroImage: '/images/projects/grand-entrance-gfrc.png',
    heroObjectPosition: 'center',
    systems: ['Columns', 'Cladding', 'Cornices', 'Decorative'],
    overview:
      'The Hospitality & Landmark Facade scope is tailored for luxury hotels, resorts, and landmark hospitality developments where architectural quality at the entrance and facade level is critical. Durraka manufactures GRC/GFRC cladding, columns, grand entrance elements, cornices, and ornamental details — all matched to architectural drawings and delivered as a coordinated facade scope suited to the demanding timelines and quality standards of the hospitality sector.',
    typicalScope: [
      'Grand entrance architectural elements',
      'GRC/GFRC facade cladding panels',
      'Architectural columns and pilasters',
      'Cornices and decorative profile bands',
      'Ornamental frames and architectural details',
      'Custom mold development for branded profiles',
      'Shop drawing coordination and review',
      'Sample and finish approval',
      'Manufacturing to project-specific requirements',
      'Coordinated delivery and site coordination',
    ],
    requiredInputs: [
      {
        label: 'Architectural drawings',
        description:
          'Plans, elevations, and entrance drawings showing the full facade and entrance composition.',
      },
      {
        label: 'Elevations',
        description:
          'Exterior elevation drawings showing facade zones, entrance features, and column positions.',
      },
      {
        label: 'Sections',
        description:
          'Section drawings for entrance canopies, cornice profiles, and facade depth.',
      },
      {
        label: 'Structural drawings',
        description:
          'Structural drawings relevant to entrance columns, cladding supports, and facade attachments.',
      },
      {
        label: 'BOQ / quantity schedule, or quantities extracted from architectural drawings',
        description:
          'Scope quantities for pricing. Our team can also extract quantities directly from the drawing package.',
      },
      {
        label: 'Reference images or design direction',
        description:
          'Brand guidelines, design references, or architect notes on finish quality and visual identity.',
      },
    ],
  },
]

export function getPackageBySlug(slug: string): ProjectPackageData | undefined {
  return PROJECT_PACKAGES.find((pkg) => pkg.slug === slug)
}
