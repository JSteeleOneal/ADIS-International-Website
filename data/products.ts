/**
 * ADIS — ABZ Innovation product catalogue
 * Complete product database for L, S, M, and C series drones
 */

export type Series = "L" | "S" | "M" | "C";

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  altName?: string;
  series: Series;
  isNew?: boolean;
  tagline: string;
  summary: string;
  specs: Spec[];
  features: string[];
  certifications: string[];
}

export const seriesOverview: Record<Series, { name: string; blurb: string }> = {
  L: {
    name: "L-Series",
    blurb:
      "Professional spraying drones for precision biological treatments to large-scale broadacre application. The most versatile platform in agricultural drone technology.",
  },
  S: {
    name: "S-Series",
    blurb:
      "High-capacity spreading platform for granule and particle distribution. Designed for seed treatment, fungicide application, and precision spreading.",
  },
  M: {
    name: "M-Series",
    blurb:
      "Mapping and survey platform with modular sensor payloads for agronomy, real estate and industrial inspection. Advanced analytics capabilities.",
  },
  C: {
    name: "C-Series",
    blurb:
      "High-pressure cleaning drone for facade, glass and surface cleaning at height. Innovative solution for building maintenance and industrial cleaning.",
  },
};

export const products: Product[] = [
  {
    id: "l10",
    name: "L10 V2 Spraying Drone",
    altName: "L10",
    series: "L",
    tagline: "Portable, precise, and cost-effective spraying.",
    summary:
      "The entry point to professional drone spraying. Built for biological and precision treatments where selectivity and accuracy matter more than raw coverage.",
    specs: [
      { label: "Tank Capacity", value: "10 L" },
      { label: "Max Payload", value: "12 kg" },
      { label: "Productivity", value: "Up to 10 ha/hour" },
      { label: "Operating Cost", value: "~€0.8/ha" },
      { label: "Working Width", value: "1.5 – 6 m" },
      { label: "Max Liquid Flow", value: "5 l/min" },
    ],
    features: [
      "Ideal for biological and precision treatments",
      "Portable and cost-effective solution",
      "Advanced flight planning capability",
      "Minimal drift technology",
      "Optional Trichogramma spreader attachment",
      "Made in the EU",
      "12-month manufacturer warranty",
    ],
    certifications: ["CE", "FCC"],
  },
  {
    id: "s20",
    name: "S20 Spreading Drone",
    series: "S",
    tagline: "High-capacity granule distribution.",
    summary:
      "Specialized spreading drone for granule and particle application. Perfect for seed treatments, fungicides, and precision spreading operations.",
    specs: [
      { label: "Hopper Capacity", value: "20 L" },
      { label: "Max Payload", value: "12 kg" },
      { label: "Operating Cost", value: "~€1.2/ha" },
      { label: "Working Width", value: "4 – 8 m" },
      { label: "Max Spread Rate", value: "15 kg/ha" },
    ],
    features: [
      "Centrifugal spreader mechanism",
      "Even granule distribution",
      "Advanced flight planning",
      "Optimal coverage patterns",
      "Made in the EU",
    ],
    certifications: ["CE", "FCC"],
  },
  {
    id: "m12",
    name: "M12 Multifunctional Drone",
    series: "M",
    tagline: "Mapping meets spraying capability.",
    summary:
      "Versatile multifunctional platform combining mapping and imaging with spray capability. Perfect for scouting and targeted treatment applications.",
    specs: [
      { label: "Tank Capacity", value: "12 L" },
      { label: "Max Payload", value: "12 kg" },
      { label: "Camera Resolution", value: "12 MP Multispectral" },
      { label: "Flight Time", value: "Up to 25 minutes" },
      { label: "Operating Cost", value: "~€1.5/ha" },
    ],
    features: [
      "12MP multispectral camera",
      "Real-time health monitoring",
      "Integrated spraying capability",
      "Advanced imaging processing",
      "Made in the EU",
    ],
    certifications: ["CE", "FCC"],
  },
  {
    id: "l30",
    name: "L30 V2 Spraying Drone",
    series: "L",
    tagline: "Best price–performance ratio.",
    summary:
      "The workhorse of the range. Balances coverage and cost for mixed arable, orchard and vineyard operations. Proven in thousands of commercial hours.",
    specs: [
      { label: "Tank Capacity", value: "30 L" },
      { label: "Max Payload", value: "30 kg" },
      { label: "Productivity", value: "Up to 21 ha/hour" },
      { label: "Operating Cost", value: "~€1.0-1.5/ha" },
      { label: "Working Width", value: "5 – 10 m" },
      { label: "Max Liquid Flow", value: "16 l/min" },
    ],
    features: [
      "Best price–performance ratio",
      "Convenient transport and setup",
      "Advanced flight planning",
      "Minimal drift technology",
      "Optional granule spreader",
      "Made in the EU",
      "Proven in commercial operations",
    ],
    certifications: ["CE", "FCC"],
  },
  {
    id: "s50",
    name: "S50 Spreading Drone",
    series: "S",
    tagline: "Large-scale granule distribution.",
    summary:
      "High-capacity spreading platform for large-scale granule application. Designed for broadacre operations requiring maximum payload efficiency.",
    specs: [
      { label: "Hopper Capacity", value: "50 L" },
      { label: "Max Payload", value: "30 kg" },
      { label: "Operating Cost", value: "~€1.2/ha" },
      { label: "Working Width", value: "6 – 12 m" },
      { label: "Max Spread Rate", value: "25 kg/ha" },
    ],
    features: [
      "High-capacity hopper system",
      "Even distribution technology",
      "Optimized for large fields",
      "Reduced application time",
      "Made in the EU",
    ],
    certifications: ["CE", "FCC"],
  },
  {
    id: "m40",
    name: "M40 Multifunctional Drone",
    series: "M",
    tagline: "Advanced mapping and analysis.",
    summary:
      "Professional mapping platform with advanced sensor suite. Delivers actionable insights for precision agriculture and industrial applications.",
    specs: [
      { label: "Max Payload", value: "30 kg" },
      { label: "Camera Options", value: "12MP, RGB, Thermal" },
      { label: "Flight Time", value: "Up to 35 minutes" },
      { label: "Max Range", value: "8 km with RTK" },
    ],
    features: [
      "Multiple sensor payload options",
      "Advanced data processing",
      "RTK precision positioning",
      "Professional analytics software",
      "Made in the EU",
    ],
    certifications: ["CE", "FCC"],
  },
  {
    id: "l50",
    name: "L50 Spraying Drone",
    series: "L",
    isNew: true,
    tagline: "Ultra high-capacity efficiency for maximum field coverage.",
    summary:
      "The newest and largest L-Series platform. Maximum efficiency and coverage for large-scale commercial operations. Built for demanding agricultural environments.",
    specs: [
      { label: "Tank Capacity", value: "50 L" },
      { label: "Max Payload", value: "50 kg" },
      { label: "Productivity", value: "Up to 24 ha/hour" },
      { label: "Operating Cost", value: "~€1.0/ha" },
      { label: "Working Width", value: "6 – 12 m" },
      { label: "Max Liquid Flow", value: "16 l/min" },
    ],
    features: [
      "Maximum efficiency for large-scale operations",
      "Large tank capacity",
      "Advanced flight planning",
      "Minimal drift technology",
      "Optional granule spreader",
      "Made in the EU",
      "Professional-grade durability",
    ],
    certifications: ["CE", "FCC", "FAA"],
  },
  {
    id: "m60",
    name: "M60 Multifunctional Drone",
    series: "M",
    isNew: true,
    tagline: "Pro-grade mapping and industrial inspection.",
    summary:
      "Advanced professional mapping drone with heavy sensor payload capability. Purpose-built for industrial inspection and advanced agricultural analytics.",
    specs: [
      { label: "Max Payload", value: "60 kg" },
      { label: "Camera Options", value: "Multispectral, Thermal, LIDAR" },
      { label: "Flight Time", value: "Up to 45 minutes" },
      { label: "Max Range", value: "10 km with RTK" },
    ],
    features: [
      "Heavy-duty sensor payload",
      "Multiple simultaneous sensors",
      "Professional-grade precision",
      "Extended flight time",
      "Made in the EU",
    ],
    certifications: ["CE", "FCC"],
  },
  {
    id: "c10",
    name: "C10 Cleaning Drone",
    series: "C",
    isNew: true,
    tagline: "High-pressure cleaning at height.",
    summary:
      "Portable, easy-to-use high-pressure cleaning drone for washing walls and glass surfaces at height. A complete solution for building maintenance.",
    specs: [
      { label: "Max Pressure", value: "190 bar" },
      { label: "Max Liquid Flow", value: "16 l/min" },
      { label: "Max Working Height", value: "60 m" },
      { label: "Positioning", value: "Dual GPS, Dual RTK" },
      { label: "Tank Capacity", value: "8 L" },
    ],
    features: [
      "High-pressure nozzle system",
      "Interchangeable nozzle options",
      "Radar-based distance control",
      "Mission planning with Wall Lock",
      "Designed for facade and glass cleaning",
      "For industrial and commercial use",
      "Reduces labour costs and safety risk",
      "Compatible with multiple cleaning systems",
      "Made in the EU",
    ],
    certifications: ["CE"],
  },
];

export const sprayingComparison = {
  conventional: {
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
};

export const technology = [
  {
    id: "cda",
    title: "Precision spraying (CDA)",
    points: ["Controlled droplets", "Minimal drift", "Less waste"],
  },
  {
    id: "abz-sense",
    title: "ABZ Sense — smart flights",
    points: [
      "LiDAR obstacle avoidance up to 80 m",
      "Terrain following",
      "No prior field mapping required",
    ],
  },
  {
    id: "real-world",
    title: "Real world-ready",
    points: ["Orchards and vineyards", "Obstacle detection", "Safe altitude"],
  },
];

export const abzSense = {
  title: "ABZ Sense",
  subtitle: "LiDAR-based obstacle detection and terrain following",
  howItWorks: [
    "Real-time mapping",
    "Point cloud analysis",
    "Creating an accurate 3D model",
  ],
  outcome: "Situational awareness",
  advantages: {
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
};

export const differentiators = [
  {
    title: "Customisable flight-planning algorithm",
    detail:
      "Designed by ABZ pilots and engineers to adapt to a wide range of use cases, allowing precise, efficient flight planning tailored to specific needs.",
  },
  {
    title: "Centimetre accuracy without an internet connection",
    detail:
      "RTK positioning delivers 2 cm accuracy with the LoRa RTK solution within an 8 km radius — no mobile or internet coverage required.",
  },
  {
    title: "Free replacement drone during warranty repair",
    detail:
      "ABZ is the only manufacturer offering a free replacement drone while a unit is under warranty repair, so operators lose no working days.",
  },
  {
    title: "High-level data security",
    detail:
      "ABZ does not access customer flight data, unlike other brands — user information stays confidential.",
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  product: string;
  baselineLabel: string;
  highlights?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "tokaj-vineyards",
    title: "Tokaj Vineyards (Hungary)",
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
    product: "L30 V2",
    baselineLabel: "Tractor vs Drone",
    highlights: [
      "90% less water use (200 L/ha vs 2000 L/ha)",
      "75% cost reduction (€2/ha vs €8/ha)",
      "Targeted precision application",
    ],
  },
  {
    id: "vineyards-portugal",
    title: "Vineyards in Portugal",
    product: "L10",
    baselineLabel: "Backpack sprayer vs Drone",
    highlights: [
      "85% less water (60 L/ha vs 400 L/ha)",
      "6x faster coverage (2 ha/hour vs 0.3 ha/hour)",
      "66% cost savings (€2/ha vs €6/ha)",
    ],
  },
];

export const sectors = [
  "Agriculture",
  "Real estate & industrial",
  "Cargo, logistics & construction",
  "Emergency services",
  "Defence & disaster relief",
];
