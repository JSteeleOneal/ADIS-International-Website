import type { Lang } from "@/lib/i18n";

/**
 * ADIS — ABZ Innovation product catalogue, in English and Bulgarian.
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

const bg: Catalogue = {
  page: {
    metaTitle: "Продукти — ADIS",
    eyebrow: "Гамата",
    heading: "Летателни апарати, избрани за полето, а не за брошурата.",
    intro:
      "Всеки модел по-долу е произведен в ЕС и се използва в търговската практика в овощни градини, лозя, оранжерии и полски култури. Числата на тази страница са от полеви изпитания на производителя — ще оразмерим конфигурация спрямо вашите собствени полета, преди да поемете какъвто и да е ангажимент.",
    aircraftHeading: "Летателни апарати за пръскане и заснемане",
    newBadge: "Нов",
    dropletsHeading: "Защо размерът на капките решава цялата работа",
    driftsAway: "се отнася",
    runsOff: "се стича от листа",
    loss: "Загуба",
    improves: "Подобрява",
    caseStudiesHeading: "Измерено на полето",
    caseStudiesIntro:
      "Изпитания на производителя спрямо метода, който всеки стопанин вече използваше. Там, където конвенционалната машина все още печели на даден ред, сме го оставили.",
    metricSr: "Показател",
    differentiatorsHeading: "Какво отличава тези летателни апарати",
    beyondHeading: "Отвъд земеделието",
    beyondIntro:
      "Същото инженерство на летателните апарати, приложено към поддръжката на сгради — почистване под високо налягане на височина, без скелета и без алпинисти.",
    sectorsHeading: "Къде работят тези летателни апарати",
    ctaText:
      "Кажете ни вашите култури, площ и терен и ще се върнем с конфигурация и оценка на покритието.",
    ctaButton: "Заявете демонстрация",
  },
  seriesOverview: {
    L: {
      name: "Серия L",
      blurb:
        "Една платформа, три решения. Дронове за земеделско пръскане, покриващи всичко — от прецизни биологични третирания до мащабно приложение в полски култури.",
    },
    S: {
      name: "Серия S",
      blurb: "Платформа за разпръскване / товар с голям капацитет.",
    },
    M: {
      name: "Серия M",
      blurb:
        "Платформа за картографиране и заснемане — „възможности без граници.“ Модулни сензори за агрономия, недвижими имоти и индустриална инспекция.",
    },
    C: {
      name: "Серия C",
      blurb:
        "Почистващият дрон с високо налягане. Почистване на фасади, стъкла и повърхности на височина за поддръжка на сгради.",
    },
  },
  products: [
    {
      id: "l10",
      name: "L10 Pro",
      series: "L",
      tagline: "Преносим, прецизен и икономичен.",
      summary:
        "Входният модел в Серия L. Създаден за биологични и прецизни третирания, при които селективността е по-важна от чистото покритие.",
      specs: [
        { label: "Производителност", value: "До 10 ха / час" },
        { label: "Разход за работа", value: "~0,8 EUR / ха" },
        { label: "Работна ширина", value: "1,5 – 6 м" },
        { label: "Макс. дебит на течност", value: "5 л / мин" },
      ],
      features: [
        "Идеален за биологични и прецизни третирания",
        "Преносим и икономичен",
        "Усъвършенствано планиране на полета",
        "Минимално отнасяне",
        "Опционален разпръсквач за трихограма",
        "Произведен в ЕС",
      ],
      certifications: ["CE"],
    },
    {
      id: "l30",
      name: "L30",
      series: "L",
      tagline: "Най-добро съотношение цена–качество.",
      summary:
        "Работният кон на гамата. Балансира покритие и разходи за смесени стопанства с полски култури, овощни градини и лозя.",
      specs: [
        { label: "Производителност", value: "До 21 ха / час" },
        { label: "Площ на излитане", value: "До 2,4 ха" },
        { label: "Разход за работа", value: "~1 – 1,5 EUR / ха" },
        { label: "Работна ширина", value: "5 – 10 м" },
        { label: "Макс. дебит на течност", value: "16 л / мин" },
      ],
      features: [
        "Най-доброто съотношение цена–качество в гамата",
        "Удобен транспорт",
        "Усъвършенствано планиране на полета",
        "Минимално отнасяне",
        "Опционален разпръсквач за гранули",
        "Произведен в ЕС",
      ],
      certifications: ["CE", "FCC"],
    },
    {
      id: "l50",
      name: "L50",
      series: "L",
      isNew: true,
      tagline:
        "Дронът за пръскане с изключително голям капацитет, създаден за максимално покритие и ефективност на полето.",
      summary:
        "Най-новата и най-голяма платформа в Серия L. Максимална ефективност за мащабни операции.",
      specs: [
        { label: "Производителност", value: "До 24 ха / час" },
        { label: "Площ на излитане", value: "До 4 ха" },
        { label: "Разход за работа", value: "~1 EUR / ха" },
        { label: "Работна ширина", value: "6 – 12 м" },
        { label: "Макс. дебит на течност", value: "16 л / мин" },
      ],
      features: [
        "Максимална ефективност за мащабни операции",
        "Усъвършенствано планиране на полета",
        "Минимално отнасяне",
        "Опционален разпръсквач за гранули",
        "Произведен в ЕС",
      ],
      certifications: ["CE", "FCC", "FAA"],
    },
    {
      id: "m-series",
      name: "Серия M",
      series: "M",
      tagline: "Възможности без граници.",
      summary:
        "Модулна платформа за заснемане и картографиране. Сменяеми сензори за агрономически анализ, инспекция и изображения.",
      specs: [],
      features: [
        "Мултиспектрален сензор 12 MP",
        "Камера за наклонено (ъглово) заснемане",
      ],
      certifications: [],
    },
    {
      id: "c10",
      name: "C10",
      series: "C",
      isNew: true,
      tagline: "Почистващият дрон с високо налягане.",
      summary:
        "Преносим и лесен за използване дрон за почистване под високо налягане, разработен за измиване на стени и стъклени повърхности на височина — решение с един инструмент за поддръжка на сгради.",
      specs: [
        { label: "Макс. налягане", value: "До 190 бара" },
        { label: "Макс. дебит на течност", value: "16 л / мин" },
        { label: "Макс. работна височина", value: "До 60 м" },
        { label: "Позициониране", value: "Двоен GPS, двоен RTK" },
      ],
      features: [
        "Дюза за високо налягане със сменяеми накрайници",
        "Радарен контрол на разстоянието",
        "Планиране на мисии с функция Wall Lock",
        "Предназначен за почистване на фасади и стъклени повърхности",
        "За индустриално и търговско почистване",
        "Подходящ за труднодостъпни места",
        "Намалява разходите за труд и риска при работа на височина",
        "Съвместим с различни почистващи системи",
        "Произведен в ЕС",
      ],
      certifications: ["CE"],
    },
  ],
  sprayingComparison: {
    hydraulic: {
      title: "Конвенционално хидравлично пръскане",
      dropletsLost: "<60 микрона",
      dropletsRunOff: ">300 микрона",
      loss: "~50%",
      detail:
        "Капките под 60 микрона се изпаряват и отнасят, преди да достигнат целта; капките над 300 микрона се стичат от листа. Приблизително половината от приложения обем никога не върши работа.",
    },
    cda: {
      title: "Контролирано приложение на капки (CDA)",
      properties: [
        "Ниско налягане",
        "Без поддръжка",
        "Регулируем размер на капките",
        "Оптимален обхват",
      ],
      improves: ["Работата", "Вложените материали", "Добива", "Устойчивостта"],
      detail:
        "Ротационните пулверизатори създават тесен, равномерен спектър от капки, така че почти целият приложен обем попада там, където е насочен.",
    },
  },
  abzSense: {
    title: "ABZ Sense",
    subtitle: "Разпознаване на препятствия и следване на терена с LiDAR",
    howItWorks: [
      "Картографиране в реално време",
      "Анализ на облак от точки",
      "Създаване на точен 3D модел",
    ],
    outcome: "Ситуационна осведоменост",
    obstacleLabel: "Разпознаване на препятствия",
    terrainLabel: "Следване на терена",
    obstacleDetection: [
      "Разпознава електропроводи",
      "Разпознава движещи се обекти",
      "Обхват 80 метра",
    ],
    terrainFollow: [
      "Оптимизирана височина",
      "Работи в овощни градини и лозя",
      "Без предварително картографиране",
    ],
  },
  differentiators: [
    {
      title: "Персонализируем алгоритъм за планиране на полета",
      detail:
        "Създаден от пилоти и инженери на ABZ, за да се адаптира към широк спектър от приложения, позволявайки прецизно и ефективно планиране на полетите според конкретните нужди, като оптимизира производителността и безопасността.",
    },
    {
      title: "Сантиметрова точност без интернет връзка",
      detail:
        "RTK позиционирането осигурява точност от 2 см с решението LoRa RTK в радиус от 8 км — без нужда от мобилно покритие или интернет.",
    },
    {
      title: "Безплатен резервен дрон по време на гаранционен ремонт",
      detail:
        "ABZ е единственият производител, който предлага безплатен резервен дрон, докато дадена единица е в гаранционен ремонт, така че операторът не губи работни дни.",
    },
    {
      title: "Високо ниво на защита на данните",
      detail:
        "ABZ няма достъп до данните от полетите на клиентите, за разлика от други марки — информацията на потребителите остава поверителна.",
    },
  ],
  caseStudies: [
    {
      id: "tokaj-vineyards",
      title: "Лозя в Токай",
      product: "Серия L",
      baselineLabel: "Конвенционално третиране",
      highlights: [
        "50% по-ниски разходи за работа",
        "54% по-малко пестициди",
        "90% по-малко вода",
        "82% по-малко CO₂",
      ],
    },
    {
      id: "citrus-greece",
      title: "Цитрусови в Гърция",
      product: "L30",
      baselineLabel: "Трактор",
      rows: [
        { metric: "Разход на вода", baseline: "2000 л/ха", drone: "200 л/ха", advantage: "drone" },
        { metric: "Покритие", baseline: "2 ха/час", drone: "1,8 ха/час", advantage: "baseline" },
        { metric: "Разходи", baseline: "8 EUR/ха", drone: "2 EUR/ха", advantage: "drone" },
      ],
    },
    {
      id: "vineyards-portugal",
      title: "Лозя в Португалия",
      product: "L10",
      baselineLabel: "Гръбна пръскачка",
      rows: [
        { metric: "Разход на вода", baseline: "400 л/ха", drone: "60 л/ха", advantage: "drone" },
        { metric: "Покритие", baseline: "0,3 ха/час", drone: "2 ха/час", advantage: "drone" },
        { metric: "Разходи", baseline: "6 EUR/ха", drone: "2 EUR/ха", advantage: "drone" },
        { metric: "Труд", baseline: "3 човекочаса/ха", drone: "0,5 човекочаса/ха", advantage: "drone" },
      ],
    },
    {
      id: "greenhouse-shading",
      title: "Засенчване на оранжерии",
      product: "L30",
      baselineLabel: "Бояджийски пистолет",
      rows: [
        { metric: "Разход на течност", baseline: "2200 л/ха", drone: "420 л/ха", advantage: "drone" },
        { metric: "Време", baseline: "8 часа/ха", drone: "2 часа/ха", advantage: "drone" },
        { metric: "Труд", baseline: "24 човекочаса/ха", drone: "4 човекочаса/ха", advantage: "drone" },
      ],
    },
    {
      id: "sunflower-hungary",
      title: "Слънчоглед в Унгария",
      product: "L30",
      baselineLabel: "Трактор",
      rows: [
        { metric: "Разход на вода", baseline: "300 л/ха", drone: "15 л/ха", advantage: "drone" },
        { metric: "Покритие", baseline: "25 ха/час", drone: "15 ха/час", advantage: "baseline" },
        { metric: "Разходи", baseline: "15 EUR/ха", drone: "1 EUR/ха", advantage: "drone" },
      ],
    },
  ],
  sectors: [
    "Земеделие",
    "Недвижими имоти и индустрия",
    "Товари, логистика и строителство",
    "Спешни служби",
    "Отбрана и помощ при бедствия",
  ],
};

const catalogues: Record<Lang, Catalogue> = { en, bg };

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
