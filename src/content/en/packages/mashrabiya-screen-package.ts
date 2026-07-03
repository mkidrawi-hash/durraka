// Text content for the Mashrabiya Screen Package (English source; ar mirror in
// src/content/ar/packages/mashrabiya-screen-package.ts). SVG illustrations, image
// paths, and the design-diagram geometry stay in the client component; this file
// holds only translatable copy. `components` is index-matched to the client's
// component meta array; `diagramCallouts` is index-matched to the diagram callouts.

export const mashrabiyaScreenContent = {
  eyebrow: 'AI Concept Reference',
  title: 'Mashrabiya Screen Package',
  subtitle: 'Project-specific screens. Privacy, shading, and identity.',
  heroDescription:
    'GFRC/GRC mashrabiya screens designed to project-specific patterns — integrating privacy control, solar shading, and decorative architectural identity into a single manufactured scope.',
  illustrativeArea: 'Screen & façade fields',
  visibleComponents: ['Mashrabiya screens', 'Window screens', 'Facade cladding', 'Decorative frames', 'Entrance screen panels'],
  packageIntent:
    'This package is designed to help architects, consultants, and project teams define a coordinated mashrabiya screen scope for hospitality, residential, institutional, and commercial projects. The emphasis is on pattern scale, opening ratio, privacy performance, and integration with the building facade. Each screen panel is cast to project-specific pattern drawings and confirmed against the facade layout before manufacture.',
  suitableApplications: [
    'Hospitality and hotel facades',
    'Residential and villa developments',
    'Heritage and traditional architecture',
    'Institutional and government buildings',
    'Commercial office buildings',
    'Religious and cultural facilities',
  ],

  // Index-matched to MASHRABIYA_SCREEN_DIAGRAM.callouts in the client.
  diagramCallouts: [
    'Mashrabiya Screen Panel',
    'Window Screen Insert',
    'Decorative Entrance Screen',
    'Facade Cladding Panel',
    'Decorative Frame / Surround',
    'Custom Pattern Panel',
  ],

  reviewSteps: [
    { n: '1', title: 'Receive Drawings', description: 'Facade elevations, screen zone layouts, pattern drawings, and opening schedules submitted for initial review.' },
    { n: '2', title: 'Review Screen Zones', description: 'Durraka reviews screen panel positions, window insert locations, and entrance screen placement.' },
    { n: '3', title: 'Confirm Pattern Scale & Opening Ratio', description: 'Pattern module size, void ratio, and screen depth confirmed against design intent and drawings.' },
    { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each screen and cladding component — coordinated with facade substrate.' },
    { n: '5', title: 'Sample & Mock-up', description: 'Pattern sample or mock-up panel submitted for project review and approval before full manufacture.' },
    { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC screen and cladding components manufactured, QC inspected, and delivered.' },
  ],

  infographics: [
    {
      title: 'Mashrabiya Screen Component Overview',
      description: 'Patterned GRC/GFRC screens used for privacy, filtered light, shading, facade rhythm, and cultural identity.',
      imageAlt: 'GFRC/GRC mashrabiya screens — heritage and regional architectural facade reference',
    },
  ],

  // Shared across every component in this package.
  shared: {
    materials: [
      'GFRC/GRC architectural component — glass fibre reinforced concrete',
      'Cement-based composite matrix with integral aggregate',
      'Alkali-resistant glass fibre reinforcement throughout',
      'Project-specific thickness and section profile, confirmed via shop drawings',
      'Factory-cast component — manufactured under controlled conditions',
      'Pigmented or natural cement finish, project-specific',
    ],
    architecturalDrawings: [
      'Elevation reference — profile position, height, and building integration',
      'Section reference — component cross-section, projection, and depth',
      'Profile outline drawing — detailed molding or surface geometry',
      'Module rhythm — repeat spacing and panel joint positions',
      'Interface detail — adjacent facade materials and build-up',
      'Approved dimensions based on submitted project drawings',
    ],
    shopDrawings: [
      'Shop drawings required before production commences',
      'Substrate and structural coordination by project team',
      'Panelisation strategy and lifting method — confirmed at technical review',
      'Installation sequence is project-specific and not disclosed publicly',
      'Final shop drawing set remains project-confidential',
    ],
    finishes: [
      'Smooth architectural finish — fine-textured, paint-ready',
      'Sandblasted finish — lightly abraded, aggregate-visible surface',
      'Stone-like texture — aggregate and pigment to match natural stone',
      'Textured / cast finish — ribbed, board-formed, or bespoke pattern',
      'Heritage warm tone — warm aggregate, hand-finished appearance',
      'Custom colour match — integral pigment to project RAL, NCS, or swatch',
    ],
    projectInputs: [
      'Architectural elevations and plan drawings',
      'Sections through relevant facade areas',
      'BOQ / quantity schedule if available',
      'Structural drawings and substrate information',
      'Finish and color references or samples',
      'Available reference or inspiration images',
      'Project location and construction timeline',
      'Site constraints or logistics considerations',
    ],
    scopeDeliverables: [
      'Component scope review — confirm elements, dimensions, and quantities',
      'Shop drawing coordination — based on approved architectural drawings',
      'Mold development — project-specific geometry and profile',
      'GFRC/GRC manufacturing — factory production to confirmed drawings',
      'Sample approval — finish sample submitted for project sign-off',
      'Delivery coordination — scheduled to project programme',
      'Installation coordination when required by contract scope',
    ],
  },

  // Index-matched to the client's component meta array.
  components: [
    {
      title: 'Mashrabiya Screen Panel',
      shortDescription: 'Primary full-height facade screen panel — project-specific geometric pattern combining privacy, solar shading, and architectural identity.',
      tags: ['Mashrabiya', 'Screen Panel', 'Privacy Screen', 'GFRC'],
      imageAlt: 'GFRC/GRC mashrabiya screen panels on heritage and regional architecture facade',
      hotspots: [
        { letter: 'A', label: 'Pattern Module', description: 'The base repeating geometric unit — size and geometry.' },
        { letter: 'B', label: 'Opening Ratio', description: 'Void vs solid area determining privacy and light transmission.' },
        { letter: 'C', label: 'Panel Edge', description: 'How panel edge terminates the pattern cleanly.' },
        { letter: 'D', label: 'Depth Profile', description: 'Front face to back face — determines shadow and structural integrity.' },
        { letter: 'E', label: 'Panel Module', description: 'Screen panel module size and joint positions.' },
        { letter: 'F', label: 'Finish Reference', description: 'Screen face color and texture — confirmed from approved sample.' },
      ],
    },
    {
      title: 'Window Screen Insert',
      shortDescription: 'Smaller screen sized to window opening — provides privacy and shade at aperture scale while maintaining visual pattern continuity.',
      tags: ['Window Screen', 'Aperture Screen', 'Privacy Insert', 'GFRC'],
      imageAlt: 'GFRC/GRC window screen inserts on heritage building facade',
      hotspots: [
        { letter: 'A', label: 'Screen Opening', description: 'The clear glazed area behind the screen.' },
        { letter: 'B', label: 'Pattern Density', description: 'How tightly woven at window scale — fine vs coarse.' },
        { letter: 'C', label: 'Frame Integration', description: 'How screen frame interfaces with window frame.' },
        { letter: 'D', label: 'Screen Stand-off', description: 'Gap between screen face and glazed opening.' },
        { letter: 'E', label: 'Pattern Alignment', description: 'How pattern aligns with window grid lines.' },
        { letter: 'F', label: 'Finish Reference', description: 'Screen color relative to surrounding facade.' },
      ],
    },
    {
      title: 'Decorative Entrance Screen',
      shortDescription: 'Prominent screen element at the entrance portal — features a central medallion within the pattern field for a focal arrival moment.',
      tags: ['Entrance Screen', 'Feature Screen', 'Portal', 'GFRC'],
      imageAlt: 'GFRC/GRC decorative entrance screen on grand arched gate',
      hotspots: [
        { letter: 'A', label: 'Central Medallion', description: 'Feature focal element within entrance screen pattern.' },
        { letter: 'B', label: 'Pattern Field', description: 'The repeating pattern filling the screen around the medallion.' },
        { letter: 'C', label: 'Screen Width', description: 'Proportional width of entrance screen relative to opening.' },
        { letter: 'D', label: 'Screen Height', description: 'Total height and relationship to door or arch above.' },
        { letter: 'E', label: 'Frame & Border', description: 'Bounding frame and ornamental border of entrance screen.' },
        { letter: 'F', label: 'Finish Reference', description: 'Finish for high-visibility entrance element.' },
      ],
    },
    {
      title: 'Facade Cladding Panel',
      shortDescription: 'Opaque background panels in the mashrabiya composition — provide contrast field for screen panels and complete the facade module.',
      tags: ['Background Panel', 'Cladding', 'Solid Panel', 'GFRC'],
      imageAlt: 'GFRC/GRC background cladding panels on commercial and hospitality facade',
      hotspots: [
        { letter: 'A', label: 'Panel Face', description: 'Plain cladding surface — provides background contrast for screen.' },
        { letter: 'B', label: 'Panel Module', description: 'Cladding repeat unit — aligns with or contrasts screen rhythm.' },
        { letter: 'C', label: 'Horizontal Joint', description: 'Panel stack joints at floor levels.' },
        { letter: 'D', label: 'Vertical Joint', description: 'Panel column joints — can align or offset with screen joints.' },
        { letter: 'E', label: 'Corner Return', description: 'How background cladding wraps corners.' },
        { letter: 'F', label: 'Finish Reference', description: 'Background panel finish — usually contrasts with screen.' },
      ],
    },
    {
      title: 'Decorative Frame / Surround',
      shortDescription: 'Frame surrounding screen zones — creates visual boundary and ornamental transition between screen panels and background cladding.',
      tags: ['Screen Frame', 'Ornamental Surround', 'Border', 'GFRC'],
      imageAlt: 'GFRC/GRC ornamental screen frame and decorative surround on villa facade',
      hotspots: [
        { letter: 'A', label: 'Frame Head', description: 'Top horizontal member of screen frame.' },
        { letter: 'B', label: 'Frame Jambs', description: 'Vertical frame members framing screen edges.' },
        { letter: 'C', label: 'Corner Detail', description: 'Ornamental element at frame corners — rosette or geometric.' },
        { letter: 'D', label: 'Frame Projection', description: 'How much frame projects past screen panel face.' },
        { letter: 'E', label: 'Frame Profile', description: 'Cross-section of frame — flat or molded.' },
        { letter: 'F', label: 'Finish Reference', description: 'Frame finish vs screen panel finish.' },
      ],
    },
    {
      title: 'Custom Pattern Panel',
      shortDescription: 'Bespoke project-specific pattern design — unique motif geometry developed from the project design intent and confirmed from drawings.',
      tags: ['Custom Pattern', 'Bespoke Screen', 'Project Pattern', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC bespoke pattern panels and decorative architectural components',
      hotspots: [
        { letter: 'A', label: 'Pattern Origin', description: 'The generating geometric unit of the custom design.' },
        { letter: 'B', label: 'Pattern Symmetry', description: 'Radial, linear, or grid symmetry of the custom design.' },
        { letter: 'C', label: 'Opening Control', description: 'How custom pattern meets required opening ratio.' },
        { letter: 'D', label: 'Panel Cut Edge', description: 'How the custom pattern terminates cleanly at panel edge.' },
        { letter: 'E', label: 'Detail Scale', description: 'Smallest feature in pattern — limits production resolution.' },
        { letter: 'F', label: 'Finish Reference', description: 'Custom color scheme for the pattern.' },
      ],
    },
  ],
} as const

export type PackageTextContent = typeof mashrabiyaScreenContent
