import type { ComponentCard } from '@/components/projects/PackageComponentsGallery'

export interface GuidanceItem {
  title: string
  points: string[]
}

export const INFOGRAPHIC_CARDS: {
  dome: ComponentCard
  cornice: ComponentCard
  mashrabiya: ComponentCard
  columns: ComponentCard
} = {
  dome: {
    title: 'Dome Component Overview',
    description:
      'Architectural dome features used to create skyline identity, landmark presence, and heritage-inspired roofline expression.',
    image: '/images/infographics/dome-component-overview.svg',
    imageAlt: 'Dome component overview — GRC/GFRC architectural dome diagram',
  },
  cornice: {
    title: 'Cornice Component Overview',
    description:
      'Horizontal architectural profiles used at rooflines, parapets, edges, and facade transitions to define shadow lines and proportion.',
    image: '/images/infographics/cornice-component-overview.svg',
    imageAlt: 'Cornice component overview — GRC/GFRC cornice diagram',
  },
  mashrabiya: {
    title: 'Mashrabiya Screen Component Overview',
    description:
      'Patterned GRC/GFRC screens used for privacy, filtered light, shading, facade rhythm, and cultural identity.',
    image: '/images/infographics/mashrabiya-component-overview.svg',
    imageAlt: 'Mashrabiya screen component overview — GRC/GFRC screen diagram',
  },
  columns: {
    title: 'Column & Capital Component Overview',
    description:
      'Vertical architectural elements used at entrances, arcades, porticos, and facade features to create rhythm, formality, and decorative character.',
    image: '/images/infographics/column-capital-component-overview.svg',
    imageAlt: 'Column and capital component overview — GRC/GFRC column diagram',
  },
}

export const GUIDANCE_LIBRARY: Record<'dome' | 'cornice' | 'mashrabiya' | 'columns', GuidanceItem> =
  {
    dome: {
      title: 'Dome',
      points: [
        'Used as a signature roof or skyline feature.',
        'Suitable for villas, palaces, mosques, hospitality, and landmark architecture.',
        'Available as hemispherical crown, half-dome, and decorative lantern forms.',
        'Produced as modular GRC/GFRC panels assembled on structural support to project drawings.',
      ],
    },
    cornice: {
      title: 'Cornice',
      points: [
        'Defines rooflines, parapets, edges, and horizontal facade transitions.',
        'Adds shadow, proportion, and architectural character to any facade.',
        'Produced to project profiles — classical, contemporary, or custom sections.',
        'Installed at roofline, floor transitions, and window bands.',
      ],
    },
    mashrabiya: {
      title: 'Mashrabiya',
      points: [
        'Provides privacy, filtered light, shading, and cultural expression.',
        'Suitable for heritage-inspired, hospitality, and villa facades.',
        'Geometric and custom pattern options available from project drawings.',
        'Produced as modular GRC/GFRC screen panels coordinated to facade openings.',
      ],
    },
    columns: {
      title: 'Columns & Capitals',
      points: [
        'Used at entrances, arcades, porticos, and feature zones.',
        'Creates vertical rhythm, formal expression, and decorative identity.',
        'Classical orders (Doric, Ionic, Corinthian) and contemporary forms available.',
        'Produced as hollow GRC/GFRC casing sections sized to project drawings.',
      ],
    },
  }
