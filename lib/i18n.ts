export type Language = "en" | "pt";

export const translations = {
  en: {
    navbar: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
      demo: "Request a demo",
    },
    hero: {
      title: "Professional Agricultural Drone Systems",
      subtitle:
        "Advanced spraying, spreading, and mapping drones built for commercial agriculture. Precision, efficiency, and reliability in every flight.",
      cta: "View Products",
    },
    about: {
      title: "Why Choose ADIS",
      description: "Leading distributor of ABZ Innovation agricultural drones",
      features: [
        {
          title: "European Engineering",
          description: "Built in the EU with the highest quality standards",
        },
        {
          title: "Precision Technology",
          description: "Advanced CDA spraying and obstacle avoidance systems",
        },
        {
          title: "Commercial Proven",
          description: "Trusted by thousands of commercial operations worldwide",
        },
        {
          title: "Complete Support",
          description: "Training, maintenance, and technical support included",
        },
      ],
    },
    products: {
      title: "Our Products",
      subtitle: "Aircraft chosen for the field, not the brochure",
      description:
        "Every model is built in the EU and flown commercially across orchards, vineyards, greenhouses and broadacre crops. Proven performance in real-world conditions.",
      seriesL: "Professional spraying drones for precision treatments to large-scale application",
      seriesS:
        "High-capacity spreading platform for granules, seeds, and particles",
      seriesM: "Mapping and survey platform with modular sensor payloads",
      seriesC: "High-pressure cleaning drone for building maintenance",
      caseStudies: "Real-World Results",
      features: "Key Features",
      specs: "Specifications",
      certifications: "Certifications",
    },
    contact: {
      title: "Ready to Transform Your Agriculture?",
      subtitle: "Get in touch for a personalized demo and consultation",
      name: "Your Name",
      email: "Your Email",
      company: "Company",
      message: "Message",
      send: "Send Message",
      success: "Thank you! We'll be in touch shortly.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Professional Agricultural Drone Systems",
      company: "ADIS — ABZ Innovation Distributor",
      rights: "All rights reserved",
      legal: "Legal Notice",
    },
    language: "Language",
    newBadge: "New",
  },
  pt: {
    navbar: {
      home: "Início",
      products: "Produtos",
      about: "Sobre",
      contact: "Contato",
      demo: "Solicitar demonstração",
    },
    hero: {
      title: "Sistemas Profissionais de Drones Agrícolas",
      subtitle:
        "Drones avançados de pulverização, espalhamento e mapeamento construídos para agricultura comercial. Precisão, eficiência e confiabilidade em cada voo.",
      cta: "Ver Produtos",
    },
    about: {
      title: "Por Que Escolher ADIS",
      description: "Distribuidor líder de drones agrícolas da ABZ Innovation",
      features: [
        {
          title: "Engenharia Europeia",
          description: "Construído na UE com os mais altos padrões de qualidade",
        },
        {
          title: "Tecnologia de Precisão",
          description: "Sistemas avançados de pulverização CDA e desvio de obstáculos",
        },
        {
          title: "Provado Comercialmente",
          description: "Confiável para milhares de operações comerciais globais",
        },
        {
          title: "Suporte Completo",
          description: "Treinamento, manutenção e suporte técnico inclusos",
        },
      ],
    },
    products: {
      title: "Nossos Produtos",
      subtitle: "Aeronaves escolhidas para o campo, não para o catálogo",
      description:
        "Cada modelo é construído na UE e voado comercialmente em pomares, vinhedos, estufas e cultivos em larga escala. Desempenho comprovado em condições reais.",
      seriesL:
        "Drones profissionais de pulverização para tratamentos de precisão até aplicação em larga escala",
      seriesS: "Plataforma de espalhamento de alta capacidade para grânulos, sementes e partículas",
      seriesM: "Plataforma de mapeamento e pesquisa com cargas úteis de sensores modulares",
      seriesC: "Drone de limpeza de alta pressão para manutenção de edifícios",
      caseStudies: "Resultados do Mundo Real",
      features: "Recursos Principais",
      specs: "Especificações",
      certifications: "Certificações",
    },
    contact: {
      title: "Pronto para Transformar Sua Agricultura?",
      subtitle: "Entre em contato para uma demonstração e consultoria personalizada",
      name: "Seu Nome",
      email: "Seu Email",
      company: "Empresa",
      message: "Mensagem",
      send: "Enviar Mensagem",
      success: "Obrigado! Entraremos em contato em breve.",
      error: "Algo deu errado. Por favor, tente novamente.",
    },
    footer: {
      tagline: "Sistemas Profissionais de Drones Agrícolas",
      company: "ADIS — Distribuidor ABZ Innovation",
      rights: "Todos os direitos reservados",
      legal: "Aviso Legal",
    },
    language: "Idioma",
    newBadge: "Novo",
  },
};

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split(".");
  let value: any = translations[lang];

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
  }

  return typeof value === "string" ? value : path;
}
