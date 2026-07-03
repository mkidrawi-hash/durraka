// Text content for the Grand Entrance Package (English source; ar mirror in
// src/content/ar/packages/grand-entrance-package.ts). SVG illustrations, image
// paths, and the design-diagram geometry stay in the client component; this file
// holds only translatable copy. `components` is index-matched to the client's
// component meta array; `diagramCallouts` is index-matched to the diagram callouts.

export const grandEntranceContent = {
  eyebrow: 'AI Concept Reference',
  title: 'Grand Entrance Package',
  subtitle: 'Monumental entrances. Engineered in GFRC/GRC.',
  heroDescription:
    'An integrated GFRC/GRC scope for landmark entrance gates and arrival facades — combining columns, capitals, arches, cornices, decorative frames, and cladding into a single precision-manufactured architectural package.',
  illustrativeArea: 'Feature entrances & gateways',
  visibleComponents: ['Columns', 'Capitals', 'Arches', 'Cornices', 'Decorative panels', 'Entrance cladding', 'Mashrabiya / screen accents'],
  packageIntent:
    'This package is designed for projects that demand architectural impact at the point of arrival. The focus is on creating a coordinated entrance composition — columns, arches, cornices, and feature panels — that reflects the architectural character of the development. Durraka engineers each entrance package from the submitted drawing set, confirming scope, dimensions, and component count before manufacture.',
  suitableApplications: [
    'Luxury villas and private residences',
    'Royal palaces and government buildings',
    'Hotels and hospitality developments',
    'Gated compounds and master plans',
    'Commercial landmarks and mixed-use towers',
    'Heritage and culturally inspired projects',
    'Institutional and civic complexes',
  ],

  // Index-matched to GRAND_ENTRANCE_DIAGRAM.callouts in the client.
  diagramCallouts: [
    'Entrance Column',
    'Column Capital',
    'Grand Entrance Arch',
    'Gate Cornice / Entablature',
    'Decorative Frame / Surround',
    'Feature / Identity Panel',
    'Mashrabiya Screen Accent',
    'Custom Architectural Detail',
  ],

  reviewSteps: [
    { n: '1', title: 'Receive Drawings', description: 'Gate elevation, plan, section, and detail drawings submitted for initial technical review.' },
    { n: '2', title: 'Review Gate Composition', description: 'Durraka reviews arch geometry, column positions, cornice levels, and overall gate proportions.' },
    { n: '3', title: 'Confirm Columns, Arch & Cornice', description: 'Column heights, capital style, arch span, and cornice profiles confirmed against the drawing set.' },
    { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each component — coordinated with structure, substrate, and interfaces.' },
    { n: '5', title: 'Confirm Finish & Sample', description: 'Finish direction, colour references, and sample requirements agreed before manufacturing.' },
    { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC components manufactured, QC inspected, and delivered to project programme.' },
  ],

  infographics: [
    {
      title: 'Column & Capital Component Overview',
      description: 'Vertical architectural elements used at entrances, arcades, porticos, and facade features to create rhythm, formality, and decorative character.',
      imageAlt: 'GFRC/GRC columns and capitals — landmark government building facade reference',
    },
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
      title: 'Entrance Column',
      shortDescription: 'The flanking columns of a monumental gate — defines the vertical scale, shaft profile, and arrival character of the entrance.',
      tags: ['Entrance Column', 'Gate Column', 'GFRC Column', 'Monumental'],
      imageAlt: 'GFRC/GRC entrance columns on monumental grand gate architecture',
      hotspots: [
        { letter: 'A', label: 'Column Crown', description: 'Capital and abacus — where column meets entablature above.' },
        { letter: 'B', label: 'Column Shaft', description: 'Main vertical face — height, diameter, and entasis.' },
        { letter: 'C', label: 'Column Spacing', description: 'The intercolumniation — clear opening between shafts.' },
        { letter: 'D', label: 'Column Base', description: 'Base moulding and plinth landing on gate platform.' },
        { letter: 'E', label: 'Column Axis', description: 'Alignment axis of columns with gate centreline.' },
        { letter: 'F', label: 'Finish Reference', description: 'Shaft and capital color/texture — confirmed from project.' },
      ],
    },
    {
      title: 'Column Capital',
      shortDescription: 'Capital at the top of entrance columns — elaborately detailed to match the monumental scale and character of the gate composition.',
      tags: ['Capital', 'Gate Capital', 'Classical', 'GFRC Capital'],
      imageAlt: 'GFRC/GRC classical column capitals on landmark government building facade',
      hotspots: [
        { letter: 'A', label: 'Abacus', description: 'Flat top slab transitioning to entablature — controlling horizontal datum.' },
        { letter: 'B', label: 'Capital Body', description: 'Main ornamental zone — acanthus, volutes, or geometric form.' },
        { letter: 'C', label: 'Echinus', description: 'Lower curved transition connecting capital body to shaft.' },
        { letter: 'D', label: 'Shaft Junction', description: 'Capital base meets shaft top — no visible joint line desired.' },
        { letter: 'E', label: 'Capital Width', description: 'Abacus width relative to shaft diameter — proportion check.' },
        { letter: 'F', label: 'Finish Reference', description: 'Capital surface detail and pigment — confirmed from project.' },
      ],
    },
    {
      title: 'Grand Entrance Arch',
      shortDescription: 'Main arch spanning between entrance columns — the focal arrival element with decorated keystone, arch ring, and soffit profile.',
      tags: ['Grand Arch', 'Entrance Arch', 'Keystone Arch', 'GFRC'],
      imageAlt: 'GFRC/GRC grand entrance arch with keystone on monumental gate',
      hotspots: [
        { letter: 'A', label: 'Arch Crown & Keystone', description: 'The apex keystone — focal point of arrival, profile and projection.' },
        { letter: 'B', label: 'Arch Extrados', description: 'Outer face of arch — thickness and decorative profile.' },
        { letter: 'C', label: 'Arch Intrados', description: 'Inner curved soffit — visible from approach.' },
        { letter: 'D', label: 'Voussoir Rhythm', description: 'Visible joint lines or decorative divisions on arch face.' },
        { letter: 'E', label: 'Impost Capital', description: 'Point where arch springs — impost block or capital.' },
        { letter: 'F', label: 'Gate Opening', description: 'Clear span and height of the entrance opening.' },
      ],
    },
    {
      title: 'Gate Cornice / Entablature',
      shortDescription: 'Cornice and entablature above the entrance columns and arch — establishes the horizontal crown of the gate composition.',
      tags: ['Gate Cornice', 'Entablature', 'Horizontal Profile', 'GFRC'],
      imageAlt: 'GFRC/GRC gate cornice and entablature on heritage palace architecture',
      hotspots: [
        { letter: 'A', label: 'Cornice Crown', description: 'Top cap — highest horizontal element on the gate composition.' },
        { letter: 'B', label: 'Cornice Projection', description: 'How far cornice projects past column face.' },
        { letter: 'C', label: 'Frieze Zone', description: 'Band between architrave and cornice — plain or with motif.' },
        { letter: 'D', label: 'Cornice Alignment', description: 'How entablature aligns across main arch and flanking wing walls.' },
        { letter: 'E', label: 'Cornice Profile', description: 'The specific molding profile cross-section.' },
        { letter: 'F', label: 'Finish Reference', description: 'Cornice color/texture vs column.' },
      ],
    },
    {
      title: 'Decorative Frame / Surround',
      shortDescription: 'Ornamental frame surrounding the gate opening — profiled jambs, head, and corner blocks enriching the entrance composition.',
      tags: ['Decorative Frame', 'Gate Surround', 'Ornamental', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC decorative frame and ornamental gate surround elements',
      hotspots: [
        { letter: 'A', label: 'Frame Head', description: 'Top member of decorative surround.' },
        { letter: 'B', label: 'Frame Jamb', description: 'Vertical members with relief or profiled face.' },
        { letter: 'C', label: 'Corner Block', description: 'Decorative corner treatment where head and jamb meet.' },
        { letter: 'D', label: 'Frame Projection', description: 'How much frame projects past gate face.' },
        { letter: 'E', label: 'Frame Pattern', description: 'Repeating detail in jamb face.' },
        { letter: 'F', label: 'Finish Reference', description: 'Frame vs gate cladding contrast.' },
      ],
    },
    {
      title: 'Feature / Identity Panel',
      shortDescription: 'Decorative panel within the gate composition — carries identity, heraldic, or ornamental content at the principal arrival zone.',
      tags: ['Feature Panel', 'Identity', 'Decorative', 'GFRC Panel'],
      imageAlt: 'GFRC/GRC feature and identity panels on grand entrance gate composition',
      hotspots: [
        { letter: 'A', label: 'Panel Position', description: 'Where feature panel sits in the composition.' },
        { letter: 'B', label: 'Panel Motif', description: 'Central design — geometric, calligraphic, or custom.' },
        { letter: 'C', label: 'Relief Depth', description: 'How far motif projects from panel face.' },
        { letter: 'D', label: 'Panel Size', description: 'Dimensions relative to surrounding arch and columns.' },
        { letter: 'E', label: 'Panel Frame', description: 'Any border or frame around the central motif.' },
        { letter: 'F', label: 'Finish Reference', description: 'Panel color vs background.' },
      ],
    },
    {
      title: 'Mashrabiya Screen Accent',
      shortDescription: 'Geometric screen element within the gate composition — flanking panels, upper zone, or side wings providing pattern depth and visual interest.',
      tags: ['Mashrabiya', 'Screen Accent', 'Gate Screen', 'GFRC'],
      imageAlt: 'GFRC/GRC mashrabiya screen accent panels on heritage and regional architecture',
      hotspots: [
        { letter: 'A', label: 'Screen Zone', description: 'Position of screen within gate — flanking panels, upper zone, or side wings.' },
        { letter: 'B', label: 'Pattern Scale', description: 'Geometry module size relative to screen area.' },
        { letter: 'C', label: 'Opening Ratio', description: 'Solid vs open in screen — light and privacy balance.' },
        { letter: 'D', label: 'Screen Frame', description: 'Border frame containing screen pattern.' },
        { letter: 'E', label: 'Screen Depth', description: 'Thickness of screen for shadow and structural integrity.' },
        { letter: 'F', label: 'Finish Reference', description: 'Screen and surrounding gate finish.' },
      ],
    },
    {
      title: 'Custom Architectural Detail',
      shortDescription: 'Project-specific bespoke element within the gate composition — unique geometry confirmed from design intent drawings.',
      tags: ['Custom Detail', 'Bespoke', 'Project-Specific', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC bespoke architectural detail and project-specific components',
      hotspots: [
        { letter: 'A', label: 'Detail Position', description: 'Location of bespoke element in gate composition.' },
        { letter: 'B', label: 'Custom Geometry', description: 'The project-specific form — confirmed from drawings.' },
        { letter: 'C', label: 'Detail Scale', description: 'Size relative to surrounding elements.' },
        { letter: 'D', label: 'Relief Character', description: 'Whether shallow, medium, or deep relief.' },
        { letter: 'E', label: 'Interface Edge', description: 'How custom detail meets standard elements cleanly.' },
        { letter: 'F', label: 'Finish Reference', description: 'Custom color/texture confirmed from project.' },
      ],
    },
  ],
} as const

export type PackageTextContent = typeof grandEntranceContent
