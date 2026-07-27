import type { Lang } from "./i18n";

/**
 * UI copy for the site chrome and home page, in English and
 * European Portuguese. Product catalogue copy lives in data/products.ts.
 */

export interface UiStrings {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    requestDemo: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    droneAlt: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
  };
  solutions: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    sendAnother: string;
    errorMissing: string;
    errorGeneric: string;
    errorNetwork: string;
  };
  footer: {
    tagline: string;
    inquiries: string;
    rights: string;
  };
}

export const ui: Record<Lang, UiStrings> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
      requestDemo: "Request a demo",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Professional agricultural spraying drones",
      headline1: "Precision from",
      headline2: "above the field.",
      sub: "ADIS builds spraying drone systems for commercial farms — covering more hectares with less input, flight after flight.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "Explore products",
      droneAlt: "ADIS spraying drone applying treatment over an orchard",
    },
    about: {
      eyebrow: "About ADIS",
      heading: "Agriculture, run like a technology operation.",
      p1: "ADIS — Agricultural Drone Irrigation Systems — supplies professional spraying drones to commercial farms and agricultural businesses. We pair proven aircraft with flight planning, operator training, and ongoing support, so crop protection becomes a scheduled, measurable process rather than a seasonal scramble.",
      p2: "Every deployment starts with your fields: crop type, terrain, and coverage targets. From there we configure the right aircraft, spray system, and workflow for your operation — and stay involved after delivery.",
    },
    solutions: {
      eyebrow: "Our Solutions",
      heading: "One platform for the whole spraying operation.",
      items: [
        {
          title: "Precision Spraying",
          description:
            "Uniform droplet coverage at controlled rates, targeting only the areas that need treatment — reducing chemical use and drift.",
        },
        {
          title: "Autonomous Flight",
          description:
            "Plan a field once, then fly it on demand. Terrain-following routes, obstacle awareness, and automatic return keep missions repeatable.",
        },
        {
          title: "Training & Support",
          description:
            "Operator certification, maintenance schedules, and responsive technical support — your team flies with confidence from day one.",
        },
        {
          title: "Commercial Farm Solutions",
          description:
            "Fleet configurations, coverage planning, and seasonal workflows sized to large operations — from single fields to multi-site estates.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Tell us about your operation.",
      sub: "Share your crops, acreage, and goals — we'll respond with a configuration and next steps.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Crops, hectares, and what you'd like to achieve",
      send: "Send Inquiry",
      sending: "Sending…",
      sentTitle: "Inquiry sent",
      sentBody:
        "Thanks for reaching out. The ADIS team will reply to your email shortly.",
      sendAnother: "Send another inquiry",
      errorMissing: "Fill in your name, email, and message to send an inquiry.",
      errorGeneric: "The inquiry could not be sent. Try again in a moment.",
      errorNetwork:
        "The inquiry could not be sent. Check your connection and try again.",
    },
    footer: {
      tagline: "Agricultural Drone Irrigation Systems",
      inquiries: "Inquiries",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      products: "Produtos",
      contact: "Contacto",
      requestDemo: "Pedir uma demonstração",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      badge: "Drones profissionais de pulverização agrícola",
      headline1: "Precisão vista",
      headline2: "de cima do campo.",
      sub: "A ADIS constrói sistemas de drones de pulverização para explorações agrícolas comerciais — cobrindo mais hectares com menos fatores de produção, voo após voo.",
      ctaPrimary: "Pedir uma demonstração",
      ctaSecondary: "Explorar produtos",
      droneAlt: "Drone de pulverização ADIS a aplicar tratamento sobre um pomar",
    },
    about: {
      eyebrow: "Sobre a ADIS",
      heading: "Agricultura gerida como uma operação tecnológica.",
      p1: "A ADIS — Agricultural Drone Irrigation Systems — fornece drones de pulverização profissionais a explorações agrícolas comerciais e empresas do setor. Combinamos aeronaves comprovadas com planeamento de voo, formação de operadores e apoio contínuo, para que a proteção das culturas se torne um processo programado e mensurável, e não uma corrida sazonal.",
      p2: "Cada implementação começa nos seus campos: tipo de cultura, terreno e objetivos de cobertura. A partir daí, configuramos a aeronave, o sistema de pulverização e o fluxo de trabalho certos para a sua operação — e continuamos envolvidos após a entrega.",
    },
    solutions: {
      eyebrow: "As Nossas Soluções",
      heading: "Uma plataforma para toda a operação de pulverização.",
      items: [
        {
          title: "Pulverização de Precisão",
          description:
            "Cobertura uniforme de gotículas a taxas controladas, tratando apenas as áreas necessárias — reduzindo o uso de químicos e a deriva.",
        },
        {
          title: "Voo Autónomo",
          description:
            "Planeie um campo uma vez e voe-o quando quiser. Rotas com seguimento de terreno, deteção de obstáculos e regresso automático tornam as missões repetíveis.",
        },
        {
          title: "Formação e Apoio",
          description:
            "Certificação de operadores, planos de manutenção e apoio técnico rápido — a sua equipa voa com confiança desde o primeiro dia.",
        },
        {
          title: "Soluções para Explorações Comerciais",
          description:
            "Configurações de frota, planeamento de cobertura e fluxos de trabalho sazonais à medida de grandes operações — de campos individuais a propriedades com vários locais.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      heading: "Fale-nos da sua operação.",
      sub: "Partilhe as suas culturas, área e objetivos — responderemos com uma configuração e os próximos passos.",
      nameLabel: "Nome",
      namePlaceholder: "O seu nome completo",
      emailLabel: "Email",
      emailPlaceholder: "voce@empresa.com",
      messageLabel: "Mensagem",
      messagePlaceholder: "Culturas, hectares e o que pretende alcançar",
      send: "Enviar Pedido",
      sending: "A enviar…",
      sentTitle: "Pedido enviado",
      sentBody:
        "Obrigado pelo contacto. A equipa ADIS responderá ao seu email em breve.",
      sendAnother: "Enviar outro pedido",
      errorMissing:
        "Preencha o nome, o email e a mensagem para enviar o pedido.",
      errorGeneric:
        "Não foi possível enviar o pedido. Tente novamente dentro de momentos.",
      errorNetwork:
        "Não foi possível enviar o pedido. Verifique a sua ligação e tente novamente.",
    },
    footer: {
      tagline: "Agricultural Drone Irrigation Systems",
      inquiries: "Contactos",
      rights: "Todos os direitos reservados.",
    },
  },
};
