// Text content for the Custom Decorative Elements Package (English source; ar mirror
// in src/content/ar/packages/custom-decorative-elements-package.ts). SVG illustrations,
// image paths, and the design-diagram geometry stay in the client component; this file
// holds only translatable copy. `components` is index-matched to the client's
// component meta array; `diagramCallouts` is index-matched to the diagram callouts.

export const customDecorativeContent = {
  eyebrow: 'AI Concept Reference',
  title: 'Custom Decorative Elements Package',
  subtitle: 'Bespoke ornamental elements. Engineered in GFRC/GRC.',
  heroDescription:
    'Project-specific GFRC/GRC decorative panels, calligraphy-inspired features, identity elements, custom frames, and bespoke architectural details — manufactured to unique design drawings.',
  illustrativeArea: 'Bespoke ornament & identity',
  visibleComponents: ['Decorative panels', 'Custom ornaments', 'Identity features', 'Calligraphy-inspired panels', 'Special frames', 'Bespoke facade details'],
  packageIntent:
    'This package is designed for projects that require bespoke decorative GFRC/GRC elements beyond standard facade cladding — custom ornamental panels, identity features, calligraphy-inspired surfaces, civic signage elements, and architecturally significant detail work. Each element is scoped from project-specific design drawings and confirmed during the technical review process.',
  suitableApplications: [
    'Civic landmarks and cultural institutions',
    'Hospitality and destination developments',
    'Religious and heritage facilities',
    'Government and institutional buildings',
    'Luxury residential and villa projects',
    'Mixed-use developments with identity features',
  ],

  // Index-matched to CUSTOM_DECORATIVE_DIAGRAM.callouts in the client.
  diagramCallouts: [
    'Decorative Geometric Panel',
    'Calligraphy-Inspired Panel',
    'Project Identity / Signage Panel',
    'Custom Architectural Frame / Surround',
    'Special Ornamental Detail',
    'Facade Accent Feature',
    'Civic / Institutional Identity Element',
  ],

  reviewSteps: [
    { n: '1', title: 'Receive Design Intent', description: 'Architectural drawings, design intent images, and bespoke element descriptions submitted for initial review.' },
    { n: '2', title: 'Review Custom Elements', description: 'Durraka reviews each decorative element — geometry, scale, relief depth, and facade position.' },
    { n: '3', title: 'Confirm Relief, Scale & Geometry', description: 'Motif form, projection depth, panel size, and interface conditions confirmed against design intent.' },
    { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each bespoke component — coordinated with facade substrate and structure.' },
    { n: '5', title: 'Sample Approval', description: 'Physical sample or prototype submitted for approval — finish, relief depth, and motif confirmed.' },
    { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC decorative components manufactured, QC inspected, and delivered to programme.' },
  ],

  infographics: [
    {
      title: 'Custom Decorative Elements Component Overview',
      description: 'Bespoke GFRC/GRC decorative panels, ornamental relief elements, repeating motifs, and project-specific geometry — produced to custom design drawings for any architectural context.',
      imageAlt: 'Custom GFRC/GRC decorative elements — bespoke architectural components facade reference',
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
      title: 'Decorative Geometric Panel',
      shortDescription: 'Panel with geometric pattern in relief — diamond lattice, interlocking geometry, or custom repeat motif adding visual depth to the facade.',
      tags: ['Geometric Panel', 'Decorative', 'Relief Pattern', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC geometric decorative panels with relief pattern on facade',
      hotspots: [
        { letter: 'A', label: 'Panel Face', description: 'The flat background of panel from which pattern projects.' },
        { letter: 'B', label: 'Pattern Repeat', description: 'Base geometric unit — size and orientation.' },
        { letter: 'C', label: 'Relief Depth', description: 'How far pattern projects from panel face — determines shadow.' },
        { letter: 'D', label: 'Panel Border', description: 'Edge frame or border terminating the pattern field.' },
        { letter: 'E', label: 'Panel Module', description: 'Individual panel size — how many fit in the facade zone.' },
        { letter: 'F', label: 'Finish Reference', description: 'Panel face and relief surface color — confirmed from approved sample.' },
      ],
    },
    {
      title: 'Calligraphy-Inspired Panel',
      shortDescription: 'Panel with flowing calligraphic surface element — cultural identity through architectural relief without disclosing specific project content.',
      tags: ['Calligraphic', 'Cultural Element', 'Bespoke', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC calligraphy-inspired bespoke panels on architectural facade',
      hotspots: [
        { letter: 'A', label: 'Calligraphic Stroke', description: 'The main flowing line — its width, depth, and visual weight.' },
        { letter: 'B', label: 'Background Field', description: 'The plain or textured panel surface behind the element.' },
        { letter: 'C', label: 'Stroke Relief', description: 'How far the stroke element projects — bold or subtle.' },
        { letter: 'D', label: 'Compositional Balance', description: 'How the element sits centered or dynamically within panel.' },
        { letter: 'E', label: 'Panel Scale', description: 'Panel size relative to calligraphic element — viewed at what distance.' },
        { letter: 'F', label: 'Finish Reference', description: 'Stroke color/texture vs panel background.' },
      ],
    },
    {
      title: 'Project Identity / Signage Panel',
      shortDescription: 'Panel carrying identity or civic feature — a single prominent motif at a scale appropriate to the building and viewing distance.',
      tags: ['Identity Panel', 'Feature Element', 'Civic', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC identity and signage panels on architectural facade',
      hotspots: [
        { letter: 'A', label: 'Motif Centre', description: 'The primary identity mark — its geometric composition.' },
        { letter: 'B', label: 'Background Field', description: 'The plain field framing the identity element.' },
        { letter: 'C', label: 'Relief Depth', description: 'Depth of identity element projection for legibility.' },
        { letter: 'D', label: 'Panel Position', description: 'Where identity panel sits in the overall composition.' },
        { letter: 'E', label: 'Lighting Consideration', description: 'How the element reads under raking or ambient light.' },
        { letter: 'F', label: 'Finish Reference', description: 'Identity element and field color.' },
      ],
    },
    {
      title: 'Custom Architectural Frame / Surround',
      shortDescription: 'Ornamental frame element — profiled jambs, head, and decorative corners creating a formal surround for openings, panels, or feature zones.',
      tags: ['Custom Frame', 'Surround', 'Ornamental Border', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC architectural frame and ornamental surround elements',
      hotspots: [
        { letter: 'A', label: 'Frame Crown', description: 'Top member — may have special ornamental feature.' },
        { letter: 'B', label: 'Jamb Profile', description: 'Side members — their cross-section and decorative detail.' },
        { letter: 'C', label: 'Corner Treatment', description: 'Corner rosette, block, or special detail element.' },
        { letter: 'D', label: 'Frame Projection', description: 'How much frame projects from surrounding wall surface.' },
        { letter: 'E', label: 'Opening Size', description: 'The framed opening or panel area within the surround.' },
        { letter: 'F', label: 'Finish Reference', description: 'Frame color/texture vs surrounding facade.' },
      ],
    },
    {
      title: 'Special Ornamental Detail',
      shortDescription: 'Standalone decorative object or relief — rosette, boss, acanthus, or geometric form applied at accent positions on the facade or frame.',
      tags: ['Ornamental', 'Relief Detail', 'Applied Element', 'GFRC'],
      imageAlt: 'GFRC/GRC special ornamental relief details on heritage villa and palace architecture',
      hotspots: [
        { letter: 'A', label: 'Ornament Body', description: 'Main form — rosette, boss, acanthus, or geometric.' },
        { letter: 'B', label: 'Relief Character', description: 'Depth and modelling of the ornamental form.' },
        { letter: 'C', label: 'Ornament Scale', description: 'Size relative to surrounding facade — focal or background.' },
        { letter: 'D', label: 'Background Integration', description: 'How the element is applied to or integrated with surrounding panel.' },
        { letter: 'E', label: 'Element Repeat', description: 'Whether single accent or repeating pattern.' },
        { letter: 'F', label: 'Finish Reference', description: 'Ornament color vs field.' },
      ],
    },
    {
      title: 'Facade Accent Feature',
      shortDescription: 'Prominent standalone accent element — keyblock, console, or projecting form creating shadow depth and visual emphasis at key facade positions.',
      tags: ['Accent Element', 'Feature', 'Facade Detail', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC facade accent features and decorative architectural elements',
      hotspots: [
        { letter: 'A', label: 'Feature Position', description: 'Where the accent element sits on the facade.' },
        { letter: 'B', label: 'Feature Profile', description: 'Cross-section or elevation form of the accent.' },
        { letter: 'C', label: 'Feature Scale', description: 'Visual weight relative to surrounding facade elements.' },
        { letter: 'D', label: 'Shadow Play', description: 'The shadow pattern the element creates — at what time of day.' },
        { letter: 'E', label: 'Structure Interface', description: 'How accent element attaches to facade substrate.' },
        { letter: 'F', label: 'Finish Reference', description: 'Accent element vs field contrast.' },
      ],
    },
    {
      title: 'Civic / Institutional Identity Element',
      shortDescription: 'Formal architectural element carrying civic or institutional identity — shield form, formal panel, or structured geometric composition for public buildings.',
      tags: ['Civic Element', 'Institutional', 'Identity Feature', 'GFRC'],
      imageAlt: 'GFRC/GRC civic and institutional identity elements on landmark government building',
      hotspots: [
        { letter: 'A', label: 'Identity Zone', description: 'The primary area carrying the identity element.' },
        { letter: 'B', label: 'Geometric Composition', description: 'The formal structure of the civic element.' },
        { letter: 'C', label: 'Scale Reference', description: 'Size relative to building — readable at what distance.' },
        { letter: 'D', label: 'Symmetry Axis', description: 'Central axis of composition — alignment precision.' },
        { letter: 'E', label: 'Surround Treatment', description: 'Framing or border of the civic element.' },
        { letter: 'F', label: 'Finish Reference', description: 'Approved color palette for civic usage.' },
      ],
    },
  ],
} as const

export type PackageTextContent = typeof customDecorativeContent
