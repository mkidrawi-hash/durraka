// Text content for the Columns & Capitals Package (English source; ar mirror in
// src/content/ar/packages/columns-capitals-package.ts). SVG illustrations, image
// paths, and the design-diagram geometry stay in the client component; this file
// holds only translatable copy. `components` is index-matched to the client's
// component meta array; `diagramCallouts` is index-matched to the diagram callouts.

export const columnsCapitalsContent = {
  eyebrow: 'AI Concept Reference',
  title: 'Columns & Capitals Package',
  subtitle: 'Colonnades, pilasters, and capitals. Engineered in GFRC/GRC.',
  heroDescription:
    'GFRC/GRC columns, capitals, bases, and pilasters — manufactured to architectural drawings for classical, heritage, and contemporary building entrances, colonnades, and facades.',
  illustrativeArea: 'Colonnades & porticos',
  visibleComponents: ['Column shafts', 'Capitals', 'Bases', 'Pilasters', 'Arched colonnades', 'Decorative panels'],
  packageIntent:
    'This package is designed for projects that feature columns, pilasters, or colonnades as a primary architectural element. The scope covers the full column assembly — base, shaft, and capital — along with associated pilasters, arched bays, and decorative panel elements. Each column is dimensioned and profiled from the submitted architectural drawings. Durraka works with the project team to confirm the capital style, shaft diameter, fluting or plain finish, and integration with surrounding entablature and base course elements.',
  suitableApplications: [
    'Entrance colonnades and porticos',
    'Luxury villas and private residences',
    'Hotels and hospitality developments',
    'Government and institutional buildings',
    'Heritage and classical architecture',
    'Cultural centres and mixed-use developments',
  ],

  // Index-matched to COLUMNS_CAPITALS_DIAGRAM.callouts in the client.
  diagramCallouts: [
    'Column Shaft',
    'Column Capital',
    'Column Base / Plinth',
    'Pilaster',
    'Arched Colonnade Bay',
    'Entablature / Beam Element',
    'Decorative Spandrel Panel',
  ],

  reviewSteps: [
    { n: '1', title: 'Receive Drawings', description: 'Architectural elevations, sections, and plan drawings submitted for initial technical review.' },
    { n: '2', title: 'Review Elevation & Section', description: 'Durraka reviews column heights, capital styles, base profiles, and colonnade bay dimensions.' },
    { n: '3', title: 'Confirm Column & Capital Profile', description: 'Capital order, shaft diameter, fluting, and base moulding confirmed against the drawing set.' },
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
      title: 'Column Shaft',
      shortDescription: 'Round or square column shaft, plain or fluted. The primary vertical element of a colonnade — defines height, diameter, and facade rhythm.',
      tags: ['GFRC Column', 'Column Shaft', 'Round Section', 'Classical'],
      imageAlt: 'GFRC/GRC classical column shafts on landmark government building facade',
      hotspots: [
        { letter: 'A', label: 'Shaft Crown', description: 'Top of shaft where capital begins — controls shaft height datum and capital alignment.' },
        { letter: 'B', label: 'Entasis', description: 'Subtle outward curve along shaft — classical proportioning device for visual correction.' },
        { letter: 'C', label: 'Module Rhythm', description: 'Column-to-column spacing across the colonnade bay — intercolumniation reference.' },
        { letter: 'D', label: 'Shaft Base', description: 'Where shaft meets base — section transition and plinth alignment.' },
        { letter: 'E', label: 'Fluting Reference', description: 'Direction and count of fluted channels if applicable to the design.' },
        { letter: 'F', label: 'Finish Reference', description: 'Color and surface texture of the shaft face — confirmed against approved sample.' },
      ],
    },
    {
      title: 'Column Capital',
      shortDescription: 'Corinthian, Ionic, or contemporary capital — the ornamental head connecting shaft to entablature. Defines the architectural order of the colonnade.',
      tags: ['Capital', 'Classical Order', 'Corinthian', 'GFRC Capital'],
      imageAlt: 'GFRC/GRC Corinthian capitals and classical column elements on landmark building',
      hotspots: [
        { letter: 'A', label: 'Abacus', description: 'Flat top slab transitioning to entablature — controlling horizontal datum of the colonnade.' },
        { letter: 'B', label: 'Capital Body', description: 'Main ornamental zone — acanthus, volutes, or geometric form defining the order.' },
        { letter: 'C', label: 'Echinus', description: 'Lower curved transition connecting capital body to shaft — classical proportioning.' },
        { letter: 'D', label: 'Shaft Junction', description: 'Capital base meets shaft top — no visible joint line desired.' },
        { letter: 'E', label: 'Capital Width', description: 'Abacus width relative to shaft diameter — proportion check.' },
        { letter: 'F', label: 'Finish Reference', description: 'Capital surface detail and pigment — confirmed from project specification.' },
      ],
    },
    {
      title: 'Column Base / Plinth',
      shortDescription: 'Base mouldings and plinth block — the transitional element between column shaft and floor. Establishes the classical base assembly profile.',
      tags: ['Column Base', 'Plinth', 'Base Moulding', 'GFRC'],
      imageAlt: 'GFRC/GRC column base and plinth mouldings on government building facade',
      hotspots: [
        { letter: 'A', label: 'Base Crown', description: 'Upper torus moulding — top of base assembly transitioning to shaft.' },
        { letter: 'B', label: 'Scotia', description: 'Concave between-moulding — creates shadow line and visual separation.' },
        { letter: 'C', label: 'Lower Torus', description: 'Lower convex moulding — sits on plinth block.' },
        { letter: 'D', label: 'Plinth Block', description: 'Flat square base pad — sets the column on the floor or pedestal.' },
        { letter: 'E', label: 'Height Reference', description: 'Total base height relative to column shaft height — proportion reference.' },
        { letter: 'F', label: 'Finish Reference', description: 'Pigment and surface matching shaft above — confirmed from sample.' },
      ],
    },
    {
      title: 'Pilaster',
      shortDescription: 'Flat column element applied to wall surface — provides classical rhythm and visual depth without a freestanding column.',
      tags: ['Pilaster', 'Flat Column', 'Wall Element', 'GFRC'],
      imageAlt: 'GFRC/GRC pilasters on landmark government building facade wall',
      hotspots: [
        { letter: 'A', label: 'Pilaster Capital', description: 'Decorative head detail — matches column capital or simplified version.' },
        { letter: 'B', label: 'Pilaster Face', description: 'The projecting flat face — projection depth from wall surface.' },
        { letter: 'C', label: 'Pilaster Width', description: 'Width in proportion to wall bay and intercolumniation.' },
        { letter: 'D', label: 'Plinth Base', description: 'Pilaster base detail matching floor line.' },
        { letter: 'E', label: 'Wall Interface', description: 'How pilaster edges meet surrounding cladding panels.' },
        { letter: 'F', label: 'Finish Reference', description: 'Surface and colour — confirmed from project specification.' },
      ],
    },
    {
      title: 'Arched Colonnade Bay',
      shortDescription: 'Arched opening spanning between columns — creating the primary arcade bay of an entrance colonnade or portico.',
      tags: ['Colonnade', 'Arched Bay', 'Arcade', 'GFRC Arch'],
      imageAlt: 'GFRC/GRC arched colonnade bay and arcade on monumental entrance architecture',
      hotspots: [
        { letter: 'A', label: 'Arch Crown', description: 'Keystone at arch apex — profile and projection.' },
        { letter: 'B', label: 'Arch Soffit', description: 'Inner curved face of arch — depth and profile detail.' },
        { letter: 'C', label: 'Column Spacing', description: 'Clear dimension between shaft faces — intercolumniation.' },
        { letter: 'D', label: 'Impost Block', description: 'Capital top or separate block receiving arch thrust.' },
        { letter: 'E', label: 'Arch Rise', description: 'Proportion of arch height to span width.' },
        { letter: 'F', label: 'Finish Reference', description: 'Arch and column matching or contrasting finishes.' },
      ],
    },
    {
      title: 'Entablature / Beam Element',
      shortDescription: 'The horizontal element above columns — comprising architrave, frieze, and cornice. Ties the colonnade and establishes the roofline datum.',
      tags: ['Entablature', 'Architrave', 'Frieze Beam', 'GFRC'],
      imageAlt: 'GFRC/GRC entablature and frieze beam elements on heritage palace architecture',
      hotspots: [
        { letter: 'A', label: 'Cornice Top', description: 'Upper cornice cap — projection and profile.' },
        { letter: 'B', label: 'Frieze Zone', description: 'Middle band — plain or decorated.' },
        { letter: 'C', label: 'Architrave', description: 'Lower flat beam resting on columns.' },
        { letter: 'D', label: 'Cornice Projection', description: 'How far entablature projects past column face.' },
        { letter: 'E', label: 'Module Alignment', description: 'How entablature aligns with column centres.' },
        { letter: 'F', label: 'Finish Reference', description: 'Surface and colour relative to columns.' },
      ],
    },
    {
      title: 'Decorative Spandrel Panel',
      shortDescription: 'Ornamental panel filling the arch spandrel zone — geometric, floral, or custom relief enriching the arcade or colonnade composition.',
      tags: ['Spandrel', 'Decorative Panel', 'Arch Fill', 'GFRC'],
      imageAlt: 'Custom GFRC/GRC decorative spandrel panels and ornamental arch fill elements',
      hotspots: [
        { letter: 'A', label: 'Spandrel Zone', description: 'The curved infill area between arch and surrounding frame.' },
        { letter: 'B', label: 'Panel Motif', description: 'The decorative pattern or relief — its scale and depth.' },
        { letter: 'C', label: 'Panel Edge', description: 'How panel edges meet arch profile and surrounding elements.' },
        { letter: 'D', label: 'Relief Depth', description: 'Projection of decorative elements from panel face.' },
        { letter: 'E', label: 'Panel Joint', description: 'Module lines within the spandrel if multiple panels.' },
        { letter: 'F', label: 'Finish Reference', description: 'Surface and pigment confirmed from project specification.' },
      ],
    },
  ],
} as const

export type PackageTextContent = typeof columnsCapitalsContent
