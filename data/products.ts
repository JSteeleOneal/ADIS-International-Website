import type { Lang } from "@/lib/i18n";

/**
 * ADIS — ABZ Innovation product catalogue, in English and European Portuguese.
 *
 * Sources:
 *  [FL]     "European Excellence in Drone Technology: Introducing the ABZ L50"
 *           (Fruit Logistica 2026)
 *  [LATAM]  "ABZ x DroneNerds LATAM" deck (Spanish)
 *  [INTRO]  "ABZ Innovation — Company Introduction" deck
 *
 * Prices/operating costs are manufacturer indicative figures, not quotes.
 * Where decks disagree, the published value is the recommended one; open
 * questions for the manufacturer are collected in `openQuestions` below
 * (internal, never rendered).
 */

export type Series = "L" | "S" | "M" | "C";

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  series: Series;
  isNew?: boolean;
  tagline: string;
  summary: string;
  specs: Spec[];
  features: string[];
  certifications: string[];
}

export interface CaseStudyRow {
  metric: string;
  baseline: string;
  drone: string;
  /** Which column wins on this row. Some rows favour the conventional method. */
  advantage: "drone" | "baseline";
}

export interface CaseStudy {
  id: string;
  title: string;
  product: string;
  baselineLabel: string;
  rows?: CaseStudyRow[];
  highlights?: string[];
}

export interface Catalogue {
  page: {
    metaTitle: string;
    eyebrow: string;
    heading: string;
    intro: string;
    aircraftHeading: string;
    newBadge: string;
    dropletsHeading: string;
    driftsAway: string;
    runsOff: string;
    loss: string;
    improves: string;
    caseStudiesHeading: string;
    caseStudiesIntro: string;
    metricSr: string;
    differentiatorsHeading: string;
    beyondHeading: string;
    beyondIntro: string;
    sectorsHeading: string;
    ctaText: string;
    ctaButton: string;
  };
  seriesOverview: Record<Series, { name: string; blurb: string }>;
  products: Product[];
  sprayingComparison: {
    hydraulic: {
      title: string;
      dropletsLost: string;
      dropletsRunOff: string;
      loss: string;
      detail: string;
    };
    cda: {
      title: string;
      properties: string[];
      improves: string[];
      detail: string;
    };
  };
  abzSense: {
    title: string;
    subtitle: string;
    howItWorks: string[];
    outcome: string;
    obstacleLabel: string;
    terrainLabel: string;
    obstacleDetection: string[];
    terrainFollow: string[];
  };
  differentiators: { title: string; detail: string }[];
  caseStudies: CaseStudy[];
  sectors: string[];
}

const en: Catalogue = {
  page: {
    metaTitle: "Products — ADIS",
    eyebrow: "The range",
    heading: "Aircraft chosen for the field, not the brochure.",
    intro:
      "Every model below is built in the EU and flown commercially across orchards, vineyards, greenhouses and broadacre crops. The numbers on this page come from manufacturer field trials — we'll size a configuration against your own fields before you commit to anything.",
    aircraftHeading: "Spraying and survey aircraft",
    newBadge: "New",
    dropletsHeading: "Why droplet size decides the whole job",
    driftsAway: "drifts away",
    runsOff: "runs off the leaf",
    loss: "Loss",
    improves: "Improves",
    caseStudiesHeading: "Measured in the field",
    caseStudiesIntro:
      "Manufacturer trials against the method each grower was already using. Where the conventional machine still wins a line, we've left it in.",
    metricSr: "Metric",
    differentiatorsHeading: "What sets these aircraft apart",
    beyondHeading: "Beyond agriculture",
    beyondIntro:
      "The same airframe engineering applied to building maintenance — high-pressure cleaning at height, without scaffolding or rope access.",
    sectorsHeading: "Where these aircraft work",
    ctaText:
      "Tell us your crops, acreage and terrain, and we'll come back with a configuration and a coverage estimate.",
    ctaButton: "Request a demo",
  },
  seriesOverview: {
    L: {
      name: "L-Series",
      blurb:
        "One platform, three solutions. Agricultural spraying drones covering everything from precision biological treatments to large-scale broadacre application.",
    },
    S: {
      name: "S-Series",
      blurb: "Spreading / high-capacity payload platform.",
    },
    M: {
      name: "M-Series",
      blurb:
        "Mapping and survey platform — \u201copportunities without limits.\u201d Modular sensor payloads for agronomy, real estate and industrial inspection.",
    },
    C: {
      name: "C-Series",
      blurb:
        "The high-pressure cleaner. Facade, glass and surface cleaning at height for building maintenance.",
    },
  },
  products: [
    {
      id: "l10",
      name: "L10 Pro",
      series: "L",
      tagline: "Portable, precise, and cost-effective.",
      summary:
        "The entry point to the L-Series. Built for biological and precision treatments where selectivity matters more than raw coverage.",
      specs: [
        { label: "Productivity", value: "Up to 10 ha / hour" },
        { label: "Operating cost", value: "~0.8 EUR / ha" },
        { label: "Working width", value: "1.5 – 6 m" },
        { label: "Max liquid flow", value: "5 l / min" },
      ],
      features: [
        "Ideal for biological and precision treatments",
        "Portable and cost-effective",
        "Advanced flight planning",
        "Minimal drift",
        "Optional Trichogramma spreader",
        "Made in the EU",
      ],
      certifications: ["CE"],
    },
    {
      id: "l30",
      name: "L30",
      series: "L",
      tagline: "Best price–performance ratio.",
      summary:
        "The workhorse of the range. Balances coverage and cost for mixed arable, orchard and vineyard operations.",
      specs: [
        { label: "Productivity", value: "Up to 21 ha / hour" },
        { label: "Area per take-off", value: "Up to 2.4 ha" },
        { label: "Operating cost", value: "~1 – 1.5 EUR / ha" },
        { label: "Working width", value: "5 – 10 m" },
        { label: "Max liquid flow", value: "16 l / min" },
      ],
      features: [
        "Best price–performance ratio in the range",
        "Convenient transport",
        "Advanced flight planning",
        "Minimal drift",
        "Optional granule spreader",
        "Made in the EU",
      ],
      certifications: ["CE", "FCC"],
    },
    {
      id: "l50",
      name: "L50",
      series: "L",
      isNew: true,
      tagline:
        "The ultra high-capacity spraying drone built for maximum field coverage and efficiency.",
      summary:
        "The newest and largest L-Series platform. Maximum efficiency for large-scale operations.",
      specs: [
        { label: "Productivity", value: "Up to 24 ha / hour" },
        { label: "Area per take-off", value: "Up to 4 ha" },
        { label: "Operating cost", value: "~1 EUR / ha" },
        { label: "Working width", value: "6 – 12 m" },
        { label: "Max liquid flow", value: "16 l / min" },
      ],
      features: [
        "Maximum efficiency for large-scale operations",
        "Advanced flight planning",
        "Minimal drift",
        "Optional granule spreader",
        "Made in the EU",
      ],
      certifications: ["CE", "FCC", "FAA"],
    },
    {
      id: "m-series",
      name: "M-Series",
      series: "M",
      tagline: "Opportunities without limits.",
      summary:
        "Modular survey and mapping platform. Swappable sensor payloads for agronomic analysis, inspection and imaging.",
      specs: [],
      features: [
        "Multispectral 12 MP sensor payload",
        "Oblique (angled) imaging camera payload",
      ],
      certifications: [],
    },
    {
      id: "c10",
      name: "C10",
      series: "C",
      isNew: true,
      tagline: "The high-pressure cleaner.",
      summary:
        "A portable, easy-to-use high-pressure cleaning drone developed for washing walls and glass surfaces at height — a single-tool solution for building maintenance.",
      specs: [
        { label: "Max pressure", value: "Up to 190 bar" },
        { label: "Max liquid flow", value: "16 l / min" },
        { label: "Max working height", value: "Up to 60 m" },
        { label: "Positioning", value: "Dual GPS, Dual RTK" },
      ],
      features: [
        "High-pressure nozzle with interchangeable nozzle options",
        "Radar-based distance control",
        "Mission planning with Wall Lock function",
        "Designed for facade and glass-surface cleaning",
        "For industrial and commercial cleaning",
        "Suited to hard-to-reach areas",
        "Reduces labour costs and working-at-height risk",
        "Compatible with a range of cleaning systems",
        "Made in the EU",
      ],
      certifications: ["CE"],
    },
  ],
  sprayingComparison: {
    hydraulic: {
      title: "Conventional hydraulic spraying",
      dropletsLost: "<60 microns",
      dropletsRunOff: ">300 microns",
      loss: "~50%",
      detail:
        "Droplets below 60 microns evaporate and drift away before reaching the target; droplets above 300 microns run off the leaf. Roughly half the applied volume never does any work.",
    },
    cda: {
      title: "Controlled Droplet Application (CDA)",
      properties: [
        "Low pressure",
        "Maintenance-free",
        "Adjustable droplet size",
        "Optimal reach",
      ],
      improves: ["Operation", "Input material", "Yield", "Sustainability"],
      detail:
        "Rotary atomisers produce a narrow, uniform droplet band, so nearly all of the applied volume lands where it is aimed.",
    },
  },
  abzSense: {
    title: "ABZ Sense",
    subtitle: "LiDAR-based obstacle detection and terrain following",
    howItWorks: [
      "Real-time mapping",
      "Point cloud analysis",
      "Creating an accurate 3D model",
    ],
    outcome: "Situational awareness",
    obstacleLabel: "Obstacle detection",
    terrainLabel: "Terrain follow",
    obstacleDetection: [
      "Detects power lines",
      "Detects moving objects",
      "80 metre range",
    ],
    terrainFollow: [
      "Optimised altitude",
      "Works in orchards and vineyards",
      "No pre-mapping",
    ],
  },
  differentiators: [
    {
      title: "Customisable flight-planning algorithm",
      detail:
        "Designed by ABZ pilots and engineers to adapt to a wide range of use cases, allowing precise, efficient flight planning tailored to specific needs while optimising performance and safety.",
    },
    {
      title: "Centimetre accuracy without an internet connection",
      detail:
        "RTK positioning delivers 2 cm accuracy with the LoRa RTK solution within an 8 km radius — no mobile or internet coverage required.",
    },
    {
      title: "Free replacement drone during warranty repair",
      detail:
        "ABZ is the only manufacturer offering a free replacement drone while a unit is under warranty repair, so the operator loses no working days.",
    },
    {
      title: "High-level data security",
      detail:
        "ABZ does not access customer flight data, unlike other brands — user information stays confidential.",
    },
  ],
  caseStudies: [
    {
      id: "tokaj-vineyards",
      title: "Tokaj Vineyards",
      product: "L-Series",
      baselineLabel: "Conventional treatment",
      highlights: [
        "50% lower operating costs",
        "54% less pesticide",
        "90% less water",
        "82% less CO₂",
      ],
    },
    {
      id: "citrus-greece",
      title: "Citrus in Greece",
      product: "L30",
      baselineLabel: "Tractor",
      rows: [
        { metric: "Water use", baseline: "2,000 l/ha", drone: "200 l/ha", advantage: "drone" },
        { metric: "Coverage", baseline: "2 ha/hour", drone: "1.8 ha/hour", advantage: "baseline" },
        { metric: "Cost", baseline: "8 EUR/ha", drone: "2 EUR/ha", advantage: "drone" },
      ],
    },
    {
      id: "vineyards-portugal",
      title: "Vineyards in Portugal",
      product: "L10",
      baselineLabel: "Backpack sprayer",
      rows: [
        { metric: "Water use", baseline: "400 l/ha", drone: "60 l/ha", advantage: "drone" },
        { metric: "Coverage", baseline: "0.3 ha/hour", drone: "2 ha/hour", advantage: "drone" },
        { metric: "Cost", baseline: "6 EUR/ha", drone: "2 EUR/ha", advantage: "drone" },
        { metric: "Labour", baseline: "3 work-hours/ha", drone: "0.5 work-hours/ha", advantage: "drone" },
      ],
    },
    {
      id: "greenhouse-shading",
      title: "Greenhouse shading",
      product: "L30",
      baselineLabel: "Pressure painter",
      rows: [
        { metric: "Liquid use", baseline: "2,200 l/ha", drone: "420 l/ha", advantage: "drone" },
        { metric: "Time", baseline: "8 hours/ha", drone: "2 hours/ha", advantage: "drone" },
        { metric: "Labour", baseline: "24 work-hours/ha", drone: "4 work-hours/ha", advantage: "drone" },
      ],
    },
    {
      id: "sunflower-hungary",
      title: "Sunflower in Hungary",
      product: "L30",
      baselineLabel: "Tractor",
      rows: [
        { metric: "Water use", baseline: "300 l/ha", drone: "15 l/ha", advantage: "drone" },
        { metric: "Coverage", baseline: "25 ha/hour", drone: "15 ha/hour", advantage: "baseline" },
        { metric: "Cost", baseline: "15 EUR/ha", drone: "1 EUR/ha", advantage: "drone" },
      ],
    },
  ],
  sectors: [
    "Agriculture",
    "Real estate & industrial",
    "Cargo, logistics & construction",
    "Emergency services",
    "Defence & disaster relief",
  ],
};

const pt: Catalogue = {
  page: {
    metaTitle: "Produtos — ADIS",
    eyebrow: "A gama",
    heading: "Aeronaves escolhidas para o campo, não para a brochura.",
    intro:
      "Todos os modelos abaixo são fabricados na UE e operados comercialmente em pomares, vinhas, estufas e culturas extensivas. Os números desta página provêm de ensaios de campo do fabricante — dimensionamos uma configuração para os seus próprios campos antes de assumir qualquer compromisso.",
    aircraftHeading: "Aeronaves de pulverização e levantamento",
    newBadge: "Novo",
    dropletsHeading: "Porque é que o tamanho da gota decide todo o trabalho",
    driftsAway: "perde-se por deriva",
    runsOff: "escorre da folha",
    loss: "Perda",
    improves: "Melhora",
    caseStudiesHeading: "Medido no campo",
    caseStudiesIntro:
      "Ensaios do fabricante contra o método que cada produtor já utilizava. Onde a máquina convencional ainda ganha numa linha, mantivemo-la.",
    metricSr: "Métrica",
    differentiatorsHeading: "O que distingue estas aeronaves",
    beyondHeading: "Para além da agricultura",
    beyondIntro:
      "A mesma engenharia de aeronaves aplicada à manutenção de edifícios — limpeza de alta pressão em altura, sem andaimes nem acesso por cordas.",
    sectorsHeading: "Onde estas aeronaves trabalham",
    ctaText:
      "Diga-nos as suas culturas, área e terreno, e voltaremos com uma configuração e uma estimativa de cobertura.",
    ctaButton: "Pedir uma demonstração",
  },
  seriesOverview: {
    L: {
      name: "Série L",
      blurb:
        "Uma plataforma, três soluções. Drones de pulverização agrícola que cobrem tudo, desde tratamentos biológicos de precisão até à aplicação em grandes culturas extensivas.",
    },
    S: {
      name: "Série S",
      blurb: "Plataforma de distribuição / carga de alta capacidade.",
    },
    M: {
      name: "Série M",
      blurb:
        "Plataforma de mapeamento e levantamento — \u201coportunidades sem limites.\u201d Sensores modulares para agronomia, imobiliário e inspeção industrial.",
    },
    C: {
      name: "Série C",
      blurb:
        "O limpador de alta pressão. Limpeza de fachadas, vidros e superfícies em altura para manutenção de edifícios.",
    },
  },
  products: [
    {
      id: "l10",
      name: "L10 Pro",
      series: "L",
      tagline: "Portátil, preciso e económico.",
      summary:
        "A porta de entrada da Série L. Concebido para tratamentos biológicos e de precisão, onde a seletividade importa mais do que a cobertura bruta.",
      specs: [
        { label: "Produtividade", value: "Até 10 ha / hora" },
        { label: "Custo de operação", value: "~0,8 EUR / ha" },
        { label: "Largura de trabalho", value: "1,5 – 6 m" },
        { label: "Fluxo máx. de líquido", value: "5 l / min" },
      ],
      features: [
        "Ideal para tratamentos biológicos e de precisão",
        "Portátil e económico",
        "Planeamento de voo avançado",
        "Deriva mínima",
        "Distribuidor de Trichogramma opcional",
        "Fabricado na UE",
      ],
      certifications: ["CE"],
    },
    {
      id: "l30",
      name: "L30",
      series: "L",
      tagline: "A melhor relação preço–desempenho.",
      summary:
        "O cavalo de trabalho da gama. Equilibra cobertura e custo para operações mistas de culturas arvenses, pomares e vinhas.",
      specs: [
        { label: "Produtividade", value: "Até 21 ha / hora" },
        { label: "Área por descolagem", value: "Até 2,4 ha" },
        { label: "Custo de operação", value: "~1 – 1,5 EUR / ha" },
        { label: "Largura de trabalho", value: "5 – 10 m" },
        { label: "Fluxo máx. de líquido", value: "16 l / min" },
      ],
      features: [
        "A melhor relação preço–desempenho da gama",
        "Transporte prático",
        "Planeamento de voo avançado",
        "Deriva mínima",
        "Distribuidor de granulados opcional",
        "Fabricado na UE",
      ],
      certifications: ["CE", "FCC"],
    },
    {
      id: "l50",
      name: "L50",
      series: "L",
      isNew: true,
      tagline:
        "O drone de pulverização de capacidade ultra elevada, construído para máxima cobertura e eficiência no campo.",
      summary:
        "A mais recente e maior plataforma da Série L. Máxima eficiência para operações em grande escala.",
      specs: [
        { label: "Produtividade", value: "Até 24 ha / hora" },
        { label: "Área por descolagem", value: "Até 4 ha" },
        { label: "Custo de operação", value: "~1 EUR / ha" },
        { label: "Largura de trabalho", value: "6 – 12 m" },
        { label: "Fluxo máx. de líquido", value: "16 l / min" },
      ],
      features: [
        "Máxima eficiência para operações em grande escala",
        "Planeamento de voo avançado",
        "Deriva mínima",
        "Distribuidor de granulados opcional",
        "Fabricado na UE",
      ],
      certifications: ["CE", "FCC", "FAA"],
    },
    {
      id: "m-series",
      name: "Série M",
      series: "M",
      tagline: "Oportunidades sem limites.",
      summary:
        "Plataforma modular de levantamento e mapeamento. Sensores intercambiáveis para análise agronómica, inspeção e imagem.",
      specs: [],
      features: [
        "Sensor multiespetral de 12 MP",
        "Câmara de imagem oblíqua (angular)",
      ],
      certifications: [],
    },
    {
      id: "c10",
      name: "C10",
      series: "C",
      isNew: true,
      tagline: "O limpador de alta pressão.",
      summary:
        "Um drone de limpeza de alta pressão, portátil e fácil de usar, desenvolvido para lavar paredes e superfícies de vidro em altura — uma solução única para a manutenção de edifícios.",
      specs: [
        { label: "Pressão máxima", value: "Até 190 bar" },
        { label: "Fluxo máx. de líquido", value: "16 l / min" },
        { label: "Altura máx. de trabalho", value: "Até 60 m" },
        { label: "Posicionamento", value: "GPS duplo, RTK duplo" },
      ],
      features: [
        "Bico de alta pressão com opções intercambiáveis",
        "Controlo de distância por radar",
        "Planeamento de missão com função Wall Lock",
        "Concebido para limpeza de fachadas e superfícies de vidro",
        "Para limpeza industrial e comercial",
        "Adequado a zonas de difícil acesso",
        "Reduz custos de mão-de-obra e riscos de trabalho em altura",
        "Compatível com uma variedade de sistemas de limpeza",
        "Fabricado na UE",
      ],
      certifications: ["CE"],
    },
  ],
  sprayingComparison: {
    hydraulic: {
      title: "Pulverização hidráulica convencional",
      dropletsLost: "<60 mícrones",
      dropletsRunOff: ">300 mícrones",
      loss: "~50%",
      detail:
        "As gotículas abaixo de 60 mícrones evaporam-se e derivam antes de atingir o alvo; as gotículas acima de 300 mícrones escorrem da folha. Cerca de metade do volume aplicado nunca chega a fazer efeito.",
    },
    cda: {
      title: "Aplicação de Gota Controlada (CDA)",
      properties: [
        "Baixa pressão",
        "Sem manutenção",
        "Tamanho de gota ajustável",
        "Alcance ótimo",
      ],
      improves: ["Operação", "Fatores de produção", "Rendimento", "Sustentabilidade"],
      detail:
        "Os atomizadores rotativos produzem uma faixa de gotículas estreita e uniforme, pelo que quase todo o volume aplicado chega exatamente onde é dirigido.",
    },
  },
  abzSense: {
    title: "ABZ Sense",
    subtitle: "Deteção de obstáculos e seguimento de terreno por LiDAR",
    howItWorks: [
      "Mapeamento em tempo real",
      "Análise de nuvem de pontos",
      "Criação de um modelo 3D preciso",
    ],
    outcome: "Consciência situacional",
    obstacleLabel: "Deteção de obstáculos",
    terrainLabel: "Seguimento de terreno",
    obstacleDetection: [
      "Deteta linhas elétricas",
      "Deteta objetos em movimento",
      "Alcance de 80 metros",
    ],
    terrainFollow: [
      "Altitude otimizada",
      "Funciona em pomares e vinhas",
      "Sem mapeamento prévio",
    ],
  },
  differentiators: [
    {
      title: "Algoritmo de planeamento de voo personalizável",
      detail:
        "Concebido por pilotos e engenheiros da ABZ para se adaptar a uma vasta gama de utilizações, permitindo um planeamento de voo preciso e eficiente, à medida de necessidades específicas, otimizando o desempenho e a segurança.",
    },
    {
      title: "Precisão centimétrica sem ligação à internet",
      detail:
        "O posicionamento RTK oferece 2 cm de precisão com a solução LoRa RTK num raio de 8 km — sem necessidade de cobertura móvel ou de internet.",
    },
    {
      title: "Drone de substituição gratuito durante reparações em garantia",
      detail:
        "A ABZ é o único fabricante que oferece um drone de substituição gratuito enquanto a unidade está em reparação ao abrigo da garantia — o operador não perde dias de trabalho.",
    },
    {
      title: "Segurança de dados de alto nível",
      detail:
        "A ABZ não acede aos dados de voo dos clientes, ao contrário de outras marcas — a informação do utilizador permanece confidencial.",
    },
  ],
  caseStudies: [
    {
      id: "tokaj-vineyards",
      title: "Vinhas de Tokaj",
      product: "Série L",
      baselineLabel: "Tratamento convencional",
      highlights: [
        "Custos de operação 50% mais baixos",
        "Menos 54% de pesticida",
        "Menos 90% de água",
        "Menos 82% de CO₂",
      ],
    },
    {
      id: "citrus-greece",
      title: "Citrinos na Grécia",
      product: "L30",
      baselineLabel: "Trator",
      rows: [
        { metric: "Consumo de água", baseline: "2 000 l/ha", drone: "200 l/ha", advantage: "drone" },
        { metric: "Cobertura", baseline: "2 ha/hora", drone: "1,8 ha/hora", advantage: "baseline" },
        { metric: "Custo", baseline: "8 EUR/ha", drone: "2 EUR/ha", advantage: "drone" },
      ],
    },
    {
      id: "vineyards-portugal",
      title: "Vinhas em Portugal",
      product: "L10",
      baselineLabel: "Pulverizador de mochila",
      rows: [
        { metric: "Consumo de água", baseline: "400 l/ha", drone: "60 l/ha", advantage: "drone" },
        { metric: "Cobertura", baseline: "0,3 ha/hora", drone: "2 ha/hora", advantage: "drone" },
        { metric: "Custo", baseline: "6 EUR/ha", drone: "2 EUR/ha", advantage: "drone" },
        { metric: "Mão-de-obra", baseline: "3 horas-homem/ha", drone: "0,5 horas-homem/ha", advantage: "drone" },
      ],
    },
    {
      id: "greenhouse-shading",
      title: "Sombreamento de estufas",
      product: "L30",
      baselineLabel: "Pintor de pressão",
      rows: [
        { metric: "Consumo de líquido", baseline: "2 200 l/ha", drone: "420 l/ha", advantage: "drone" },
        { metric: "Tempo", baseline: "8 horas/ha", drone: "2 horas/ha", advantage: "drone" },
        { metric: "Mão-de-obra", baseline: "24 horas-homem/ha", drone: "4 horas-homem/ha", advantage: "drone" },
      ],
    },
    {
      id: "sunflower-hungary",
      title: "Girassol na Hungria",
      product: "L30",
      baselineLabel: "Trator",
      rows: [
        { metric: "Consumo de água", baseline: "300 l/ha", drone: "15 l/ha", advantage: "drone" },
        { metric: "Cobertura", baseline: "25 ha/hora", drone: "15 ha/hora", advantage: "baseline" },
        { metric: "Custo", baseline: "15 EUR/ha", drone: "1 EUR/ha", advantage: "drone" },
      ],
    },
  ],
  sectors: [
    "Agricultura",
    "Imobiliário e indústria",
    "Carga, logística e construção",
    "Serviços de emergência",
    "Defesa e proteção civil",
  ],
};

const catalogues: Record<Lang, Catalogue> = { en, pt };

export function getCatalogue(lang: Lang): Catalogue {
  return catalogues[lang];
}

/**
 * Internal notes — never rendered. Consolidated list to send to the
 * manufacturer in one message.
 */
export const openQuestions = [
  "Full S-Series specification — the series appears in every deck but has no data anywhere.",
  "Tank capacity, MTOW, battery type, flight time, charge time and folded/unfolded dimensions for L10, L30, L50 and C10.",
  "Is the entry model called L10 or L10 Pro in the current catalogue?",
  "Is L30 V2 a successor to the L30 or a parallel variant? Which one was flown in the Greece citrus trial?",
  "Confirm the L10's FCC status — one deck says certified, another says in progress.",
  "Confirm the L30 operating cost: 1.2 EUR/ha, ~1–1.5 EUR/ha and ~0.8–1.5 USD/ha are all in circulation.",
  "Confirm C10 pressure and flow: 190 bar / 16 l per min or 180 bar / 15 l per min.",
  "Confirm L50 availability date and whether it can be quoted now.",
  "Current distributor, country, client and exhibition counts.",
  "Which model was used in the Tokaj vineyard trial, and is a full comparison table available?",
] as const;
