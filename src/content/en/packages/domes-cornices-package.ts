// Text content for the Domes & Cornices Package (English source; ar mirror in
// src/content/ar/packages/domes-cornices-package.ts). SVG illustrations, image
// paths, and the design-diagram geometry stay in the client component; this file
// holds only translatable copy. `components` is index-matched to the client's
// component meta array; `diagramCallouts` is index-matched to the diagram callouts.

export const domesCornicesContent = {
  eyebrow: 'AI Concept Reference',
  title: 'Domes & Cornices Package',
  subtitle: 'Domes, cornices, and heritage profiles. Engineered in GFRC/GRC.',
  heroDescription:
    'GFRC/GRC domes, cornices, mouldings, and ornamental profiles — manufactured to project-specific design intent for religious, hospitality, and heritage-inspired architectural projects.',
  illustrativeArea: 'Domes, cornices & rooflines',
  visibleComponents: ['Dome elements', 'Cornices', 'Decorative bands', 'Arched openings', 'Parapet coping', 'Column capitals'],
  packageIntent:
    'This package is designed for projects where the dome, cornice, and ornamental profile form a primary architectural element — mosques, hospitality developments, heritage-inspired institutions, and high-value residential projects. The focus is on geometric intent, proportion, cornice line positioning, and profile rhythm. Durraka works from architectural drawings and reference imagery to define the manufacturing scope, including drum geometry, dome segment details, profile cross-sections, and arched facade elements. Technical review confirms all dimensions and finish requirements before manufacture.',
  suitableApplications: [
    'Mosques and religious facilities',
    'Heritage-inspired hospitality projects',
    'Palaces and government buildings',
    'Luxury residential developments',
    'Cultural centres and museums',
    'Institutional and civic buildings',
  ],

  // Index-matched to DOMES_CORNICES_DIAGRAM.callouts in the client.
  diagramCallouts: [
    'Main Dome',
    'Cornice Profile',
    'Crown Cornice',
    'Decorative Band / Frieze',
    'Parapet Coping',
    'Column Capital Connection',
    'Entrance Arch Transition',
  ],

  reviewSteps: [
    { n: '1', title: 'Receive Drawings', description: 'Architectural elevations, sections, and floor plans submitted for initial technical review.' },
    { n: '2', title: 'Review Elevations & Sections', description: 'Durraka reviews dome geometry, cornice positions, profile rhythm, and ornamental element locations.' },
    { n: '3', title: 'Identify Scope', description: 'Component types, quantities, module dimensions, and special elements are confirmed from the drawing set.' },
    { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each component — coordinated with structure, substrate, and interfaces.' },
    { n: '5', title: 'Confirm Finishes & Samples', description: 'Finish direction, colour references, and sample requirements agreed before manufacturing.' },
    { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC components manufactured, QC inspected, and delivered to project programme.' },
  ],

  infographics: [
    {
      title: 'Dome Component Overview',
      description: 'Architectural dome features used to create skyline identity, landmark presence, and heritage-inspired roofline expression.',
      imageAlt: 'GFRC/GRC architectural domes — heritage villa and palace facade reference',
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
      title: 'Main Dome',
      shortDescription: 'The primary GFRC/GRC dome element — hemisphere geometry, drum section, and finial crown. Defines the skyline presence of the building.',
      tags: ['GFRC Dome', 'Structural Element', 'Heritage', 'Landmark'],
      imageAlt: 'GFRC/GRC architectural domes on heritage villa and palace buildings',
      hotspots: [
        { letter: 'A', label: 'Dome Crown / Upper Curve', description: 'The topmost surface and finial point — defines the skyline apex and overall dome silhouette.' },
        { letter: 'B', label: 'Dome Base Cornice', description: 'The cornice profile at the base of the dome — transition from dome face to drum below.' },
        { letter: 'C', label: 'Drum Decorative Band', description: 'Horizontal feature wrapping the drum perimeter — often echoes the main frieze below.' },
        { letter: 'D', label: 'Parapet Relationship', description: 'How the dome visually relates to the flanking parapet elements at the same level.' },
        { letter: 'E', label: 'Entry Axis Alignment', description: 'The visual axis connecting the arch crown below to the dome crown above — proportion reference.' },
        { letter: 'F', label: 'Column-to-Dome Scale', description: 'The vertical proportion relationship between column capital height and dome base — classical proportion reference.' },
      ],
    },
    {
      title: 'Cornice Profile',
      shortDescription: 'Horizontal GFRC/GRC cornice band — fascia, cyma, bed mold, and soffit. Establishes the primary shadow line and facade proportion.',
      tags: ['GFRC Cornice', 'Shadow Line', 'Horizontal Profile', 'Facade Band'],
      imageAlt: 'GFRC/GRC cornice profiles and horizontal facade bands on heritage architecture',
      hotspots: [
        { letter: 'A', label: 'Upper Cornice at Dome', description: 'The cornice profile at dome drum level — the uppermost horizontal member on the facade.' },
        { letter: 'B', label: 'Main Cornice — Primary Shadow', description: 'The principal horizontal cornice: projection depth, fascia, and soffit establish the dominant shadow line.' },
        { letter: 'C', label: 'Cornice-Frieze Interface', description: 'Where the main cornice meets the decorative band below — the lower face of the cornice returns here.' },
        { letter: 'D', label: 'Parapet Coping Profile', description: 'The uppermost cornice element — coping cap on the parapet, sheds water and defines the roofline.' },
        { letter: 'E', label: 'Arch Cornice Return', description: 'The cornice profile returning around the arch opening — establishes visual continuity across the opening.' },
        { letter: 'F', label: 'Capital Line Reference', description: 'The cornice aligns with or responds to the capital abacus line — a key horizontal datum.' },
      ],
    },
    {
      title: 'Crown Cornice',
      shortDescription: 'The uppermost cornice element at roofline or parapet — wider cap projection with complex profile. Defines the architectural crown of the building.',
      tags: ['Crown Element', 'Roofline', 'Top Profile', 'GFRC'],
      imageAlt: 'GFRC/GRC crown cornice at roofline on villa and palace architecture',
      hotspots: [
        { letter: 'A', label: 'Crown Finial Reference', description: 'The crown cornice sits at or near this level — the highest horizontal element on the facade.' },
        { letter: 'B', label: 'Main Crown Projection', description: 'The primary overhang of the crown cornice — projection depth relative to wall face below.' },
        { letter: 'C', label: 'Crown-to-Frieze Return', description: 'How the crown cornice transitions down into the decorative frieze zone below it.' },
        { letter: 'D', label: 'Parapet Cap Connection', description: 'The crown cornice terminates at parapet coping level — their interface and profile continuity.' },
        { letter: 'E', label: 'Crown Arch Surround', description: 'Crown cornice profiles that form arch surrounds or door casings at ground floor entries.' },
        { letter: 'F', label: 'Column Crown Alignment', description: 'The crown cornice aligns with the column abacus — the controlling horizontal datum.' },
      ],
    },
    {
      title: 'Decorative Band / Frieze',
      shortDescription: 'Horizontal GFRC/GRC ornamental band — repeating geometric, classical, or bespoke pattern. Adds visual richness and proportion rhythm to the facade.',
      tags: ['Ornamental Band', 'Frieze', 'Repeating Pattern', 'GFRC'],
      imageAlt: 'GFRC/GRC ornamental decorative bands and frieze on heritage facade',
      hotspots: [
        { letter: 'A', label: 'Drum Band — Upper Element', description: 'Decorative band wrapping the dome drum — the upper pattern application on the building.' },
        { letter: 'B', label: 'Cornice-Band Interface', description: 'Where the cornice projection meets the top edge of the decorative frieze — a key joint line.' },
        { letter: 'C', label: 'Primary Frieze Zone', description: 'The main decorative band — pattern repeat unit, relief depth, and height are confirmed here.' },
        { letter: 'D', label: 'Parapet Band Return', description: 'Decorative band continuation at parapet level — smaller repeat or simplified profile.' },
        { letter: 'E', label: 'Spandrel Infill Pattern', description: 'Decorative fill in the arch spandrel zone — pattern often related to the main frieze.' },
        { letter: 'F', label: 'Capital-Level Band', description: 'A subsidiary band at capital level — echoes the main frieze at a different scale.' },
      ],
    },
    {
      title: 'Parapet Coping',
      shortDescription: 'GFRC/GRC coping cap for parapets — overhang, throat/drip detail, and panel joints. Provides weather protection and defines the parapet roofline.',
      tags: ['Parapet', 'Coping', 'Weather Detail', 'GFRC'],
      imageAlt: 'GFRC/GRC parapet coping elements on landmark and government building exterior',
      hotspots: [
        { letter: 'A', label: 'Dome Level Coping', description: 'Coping cap at dome drum level — may feature a rolled or decorative profile to match the dome character.' },
        { letter: 'B', label: 'Cornice Returns to Coping', description: 'Where the main cornice line terminates or returns into the parapet coping at the ends.' },
        { letter: 'C', label: 'Band-Coping Transition', description: 'The decorative band below meets the parapet face — the joint between ornament and coping above.' },
        { letter: 'D', label: 'Primary Parapet Coping', description: 'The main coping cap — overhang dimension, drip groove, slope, and panel joint positions.' },
        { letter: 'E', label: 'Arch Apex Coping', description: 'Coping or keystone cap at the top of an arch opening — may match parapet coping profile.' },
        { letter: 'F', label: 'Column-to-Parapet Height', description: 'The vertical relationship between column capital and parapet coping — proportion reference.' },
      ],
    },
    {
      title: 'Column Capital Connection',
      shortDescription: 'GFRC/GRC column capital element — abacus, echinus, and decorative body connecting shaft to entablature. Classical or contemporary profile.',
      tags: ['Column Capital', 'Classical Order', 'GFRC Column', 'Entrance Feature'],
      imageAlt: 'GFRC/GRC column capitals and classical column elements on landmark building',
      hotspots: [
        { letter: 'A', label: 'Capital-to-Dome Proportion', description: 'The vertical proportion from capital abacus to dome base — a key classical proportioning relationship.' },
        { letter: 'B', label: 'Capital Line & Cornice Datum', description: 'The abacus top aligns with or generates the entablature / cornice datum — controlling horizontal.' },
        { letter: 'C', label: 'Capital to Frieze Connection', description: 'The capital top connects to the frieze face — decorative band may align with capital plate.' },
        { letter: 'D', label: 'Capital-Parapet Height', description: 'The height from column capital to parapet coping — defines the apparent floor-to-floor proportion.' },
        { letter: 'E', label: 'Capital Rhythm at Entry', description: 'Column spacing and capital rhythm around the entrance arch — governs the intercolumniation.' },
        { letter: 'F', label: 'Primary Capital Position', description: 'The main column capital — abacus width, echinus curve, decorative body, and shaft junction.' },
      ],
    },
    {
      title: 'Entrance Arch Transition',
      shortDescription: 'GFRC/GRC arch surround for entrance openings — arch ring, keystone, voussoir rhythm, and impost. Creates the primary arrival feature.',
      tags: ['Arch', 'Entrance Feature', 'Keystone', 'GFRC Arch'],
      imageAlt: 'GFRC/GRC entrance arch and keystone on grand monumental gate architecture',
      hotspots: [
        { letter: 'A', label: 'Arch-to-Dome Axis', description: 'The visual axis from arch crown to dome crown — the central composition line of the facade.' },
        { letter: 'B', label: 'Arch & Cornice Alignment', description: 'The cornice line intersects with the arch surround — establishing the floor-level relationship.' },
        { letter: 'C', label: 'Arch Spandrel Decoration', description: 'The spandrel zone between arch and frieze — often filled with decorative elements.' },
        { letter: 'D', label: 'Arch-to-Parapet Height', description: 'Vertical proportion from arch crown to parapet top — governs the overall facade scale.' },
        { letter: 'E', label: 'Arch Crown & Keystone', description: 'The crown of the arch — keystone geometry, projection, and decorative detail at the apex.' },
        { letter: 'F', label: 'Arch Impost & Capital', description: 'Where the arch begins its curve — the impost block or capital transitioning to the arch ring.' },
      ],
    },
  ],
} as const

export type PackageTextContent = typeof domesCornicesContent
