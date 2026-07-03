// Text content for the Commercial Façade Package (English source; ar mirror in
// src/content/ar/packages/commercial-facade-package.ts). SVG illustrations, image
// paths, and the design-diagram geometry stay in the client component; this file
// holds only translatable copy. `components` is index-matched to the client's
// component meta array; `diagramCallouts` is index-matched to the diagram callouts.

export const commercialFacadeContent = {
  eyebrow: 'AI Concept Reference',
  title: 'Commercial Facade Package',
  subtitle: 'Multi-storey exterior cladding. Engineered in GFRC/GRC.',
  heroDescription:
    'A complete GFRC/GRC scope for commercial building exteriors — combining facade cladding panels, cornice lines, window surrounds, vertical rhythm elements, and edge expression into a single precision-manufactured package.',
  illustrativeArea: 'Large-scale multi-storey façades',
  visibleComponents: ['Facade cladding panels', 'Cornices / profiles', 'Window surrounds', 'Edge / corner expression', 'Decorative vertical elements'],
  packageIntent:
    'This package is designed to help architects, consultants, developers, and project teams understand how GFRC/GRC components can be coordinated into a complete commercial facade cladding scope. The focus is on panel module rhythm, horizontal banding, window surround detailing, and controlled architectural expression. The final scope, dimensions, finishes, and engineering requirements are confirmed from submitted architectural drawings and project specifications during technical review.',
  suitableApplications: [
    'Multi-storey commercial offices',
    'Mixed-use developments',
    'Retail and hospitality towers',
    'Corporate headquarters',
    'Government administrative buildings',
    'Educational and institutional buildings',
  ],

  // Index-matched to COMMERCIAL_FACADE_DIAGRAM.callouts in the client.
  diagramCallouts: [
    'Facade Cladding Panel',
    'Cornice / Profile Band',
    'Window Surround / Reveal',
    'Edge / Corner Expression',
    'Decorative Vertical Fin',
    'Custom Bespoke Profile',
  ],

  reviewSteps: [
    { n: '1', title: 'Receive Drawings', description: 'Architectural elevations, facade sections, and panel layout drawings submitted for initial technical review.' },
    { n: '2', title: 'Review Panel Layout & Banding', description: 'Durraka reviews module sizing, horizontal banding positions, and overall facade composition.' },
    { n: '3', title: 'Confirm Window Surround & Edge Details', description: 'Surround profiles, reveal depths, corner treatments, and fin dimensions confirmed against drawings.' },
    { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each component — coordinated with structure, substrate, and interfaces.' },
    { n: '5', title: 'Confirm Finish & Sample', description: 'Finish direction, colour references, and sample requirements agreed before manufacturing.' },
    { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC components manufactured, QC inspected, and delivered to project programme.' },
  ],

  infographics: [
    {
      title: 'Cornice Component Overview',
      description: 'Horizontal architectural profiles used at rooflines, parapets, edges, and facade transitions to define shadow lines and proportion.',
      imageAlt: 'GFRC/GRC ornamental cornices and architectural profiles — heritage facade reference',
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
      title: 'Facade Cladding Panel',
      shortDescription: 'Main flat cladding panel in grid module — the primary field element of the commercial facade. Sets the surface rhythm, joint pattern, and base texture.',
      tags: ['Facade Panel', 'Cladding', 'GFRC Panel', 'Commercial'],
      imageAlt: 'GFRC/GRC commercial facade cladding panels on multi-storey building exterior',
      hotspots: [
        { letter: 'A', label: 'Panel Face', description: 'The primary visible surface — finish, texture, and module dimension.' },
        { letter: 'B', label: 'Horizontal Joint', description: 'Panel-to-panel joint lines creating visual banding across the facade.' },
        { letter: 'C', label: 'Vertical Joint', description: 'Panel module spacing and column rhythm.' },
        { letter: 'D', label: 'Corner Return', description: 'How panels wrap building corners.' },
        { letter: 'E', label: 'Panel Module', description: 'Repeat unit size relative to floor-to-floor height.' },
        { letter: 'F', label: 'Finish Reference', description: 'Surface and color specification — confirmed from approved sample.' },
      ],
    },
    {
      title: 'Cornice / Profile Band',
      shortDescription: 'Horizontal banding element at floor levels, parapets, or key facade transitions — establishes the primary shadow line and proportion rhythm.',
      tags: ['Cornice Band', 'Profile', 'Horizontal Rhythm', 'GFRC'],
      imageAlt: 'GFRC/GRC ornamental cornice profiles on heritage villa and palace architecture',
      hotspots: [
        { letter: 'A', label: 'Crown Cap', description: 'Top of cornice — sits at floor level, parapet, or roofline.' },
        { letter: 'B', label: 'Cornice Body', description: 'Main projecting mass — projection depth creates shadow line.' },
        { letter: 'C', label: 'Profile Lines', description: 'Internal molding lines enriching the cornice face.' },
        { letter: 'D', label: 'Band Positions', description: 'Cornice placed at every floor, alternate floors, or key transitions.' },
        { letter: 'E', label: 'Cornice Width', description: 'Band height relative to facade panel height.' },
        { letter: 'F', label: 'Finish Reference', description: 'Color and texture — confirmed from project specification.' },
      ],
    },
    {
      title: 'Window Surround / Reveal',
      shortDescription: 'GFRC/GRC frame around window openings — head, jambs, and sill define the reveal depth, shadow profile, and glazing interface.',
      tags: ['Window Surround', 'Reveal', 'Jamb Detail', 'GFRC'],
      imageAlt: 'GFRC/GRC window surrounds and reveals on landmark government building facade',
      hotspots: [
        { letter: 'A', label: 'Head Detail', description: 'Lintel-like top member of surround.' },
        { letter: 'B', label: 'Jamb Reveal', description: 'Side members — depth creates shadow and frames the glazing.' },
        { letter: 'C', label: 'Sill Detail', description: 'Bottom of surround — profile and weathering edge.' },
        { letter: 'D', label: 'Surround Width', description: 'Frame width relative to opening size.' },
        { letter: 'E', label: 'Corner Mitre', description: 'How head and jamb meet at corners — clean mitre or overlap.' },
        { letter: 'F', label: 'Finish Reference', description: 'Surface and color relative to panel field — confirmed from sample.' },
      ],
    },
    {
      title: 'Edge / Corner Expression',
      shortDescription: 'Quoin or corner column element — resolves building edges and creates visual weight at facade corners.',
      tags: ['Corner Element', 'Quoin', 'Edge Detail', 'GFRC'],
      imageAlt: 'GFRC/GRC edge and corner expression on commercial building facade',
      hotspots: [
        { letter: 'A', label: 'Corner Cap', description: 'Top of corner element — ties to cornice or parapet.' },
        { letter: 'B', label: 'Quoin Face', description: 'Projecting face of corner block — alternates with the main panel field.' },
        { letter: 'C', label: 'Corner Rhythm', description: 'Vertical spacing of quoin blocks or corner column modules.' },
        { letter: 'D', label: 'Return Face', description: 'Short return face of corner elements visible from 45°.' },
        { letter: 'E', label: 'Corner Base', description: 'Bottom of corner treatment — transition to plinth or ground.' },
        { letter: 'F', label: 'Finish Reference', description: 'Quoin or corner element vs panel field contrast.' },
      ],
    },
    {
      title: 'Decorative Vertical Fin',
      shortDescription: 'Vertical rhythm element projecting from the facade — creates depth, shadow, and modular expression on commercial building elevations.',
      tags: ['Vertical Fin', 'Rhythm Element', 'Facade Depth', 'GFRC'],
      imageAlt: 'GFRC/GRC decorative vertical elements on landmark government building exterior',
      hotspots: [
        { letter: 'A', label: 'Fin Crown', description: 'Top termination detail — cap or angle cut.' },
        { letter: 'B', label: 'Fin Body', description: 'Primary projection — depth and face width create shadow.' },
        { letter: 'C', label: 'Fin Spacing', description: 'Centre-to-centre repeat along facade.' },
        { letter: 'D', label: 'Fin Base', description: 'Bottom termination — lands on sill, plinth, or floor level.' },
        { letter: 'E', label: 'Fin Profile', description: 'Cross-section of fin — rectangular, tapered, or profiled.' },
        { letter: 'F', label: 'Finish Reference', description: 'Surface and color — confirmed from project specification.' },
      ],
    },
    {
      title: 'Custom Bespoke Profile',
      shortDescription: 'Project-specific custom element — unique geometry or pattern confirmed from design intent drawings. Fabricated to the approved design.',
      tags: ['Custom Profile', 'Bespoke', 'Project-Specific', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC bespoke architectural components and decorative facade panels',
      hotspots: [
        { letter: 'A', label: 'Profile Crown', description: 'Top of custom element — its cap or crown detail.' },
        { letter: 'B', label: 'Profile Face', description: 'The main visible face — custom geometry or pattern.' },
        { letter: 'C', label: 'Profile Return', description: 'Side and return faces confirming the full 3D form.' },
        { letter: 'D', label: 'Interface Zone', description: 'Where custom element meets standard panels or cladding.' },
        { letter: 'E', label: 'Custom Module', description: 'Repeat unit or single element, dimensions from drawings.' },
        { letter: 'F', label: 'Finish Reference', description: 'Custom color and texture specification — confirmed from project.' },
      ],
    },
  ],
} as const

export type PackageTextContent = typeof commercialFacadeContent
