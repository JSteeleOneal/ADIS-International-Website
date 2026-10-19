import type { Lang } from "./i18n";

/**
 * UI copy for the site chrome and home page, in English and
 * Bulgarian. Product catalogue copy lives in data/products.ts.
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
  bg: {
    nav: {
      home: "Начало",
      about: "За нас",
      products: "Продукти",
      contact: "Контакти",
      requestDemo: "Заявете демонстрация",
      openMenu: "Отвори менюто",
      closeMenu: "Затвори менюто",
    },
    hero: {
      badge: "Професионални дронове за земеделско пръскане",
      headline1: "Прецизност",
      headline2: "от небето над полето.",
      sub: "ADIS създава системи от дронове за пръскане за търговски земеделски стопанства — повече обработени хектари с по-малко ресурси, полет след полет.",
      ctaPrimary: "Заявете демонстрация",
      ctaSecondary: "Разгледайте продуктите",
      droneAlt: "Дрон за пръскане ADIS, третиращ овощна градина",
    },
    about: {
      eyebrow: "За ADIS",
      heading: "Земеделие, управлявано като технологична операция.",
      p1: "ADIS — Agricultural Drone Irrigation Systems — доставя професионални дронове за пръскане на търговски земеделски стопанства и агробизнеси. Съчетаваме доказани летателни апарати с планиране на полетите, обучение на оператори и постоянна поддръжка, така че растителната защита да се превърне в планиран и измерим процес, а не в сезонно бързане.",
      p2: "Всяко внедряване започва от вашите полета: вид култура, терен и цели за покритие. Оттам конфигурираме подходящия летателен апарат, система за пръскане и работен процес за вашето стопанство — и оставаме ангажирани и след доставката.",
    },
    solutions: {
      eyebrow: "Нашите решения",
      heading: "Една платформа за цялата дейност по пръскане.",
      items: [
        {
          title: "Прецизно пръскане",
          description:
            "Равномерно покритие с капки при контролирани дози, насочено само към участъците, които се нуждаят от третиране — по-малко химикали и по-малко отнасяне.",
        },
        {
          title: "Автономен полет",
          description:
            "Планирайте поле веднъж и го облитайте, когато поискате. Маршрути, следващи терена, разпознаване на препятствия и автоматично връщане правят мисиите повторяеми.",
        },
        {
          title: "Обучение и поддръжка",
          description:
            "Сертифициране на оператори, графици за техническо обслужване и бърза техническа помощ — вашият екип лети уверено от първия ден.",
        },
        {
          title: "Решения за търговски стопанства",
          description:
            "Конфигурации на флота, планиране на покритието и сезонни работни процеси, съобразени с големи стопанства — от отделни полета до имоти на няколко места.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      heading: "Разкажете ни за вашето стопанство.",
      sub: "Споделете културите, площта и целите си — ще отговорим с конфигурация и следващите стъпки.",
      nameLabel: "Име",
      namePlaceholder: "Вашето пълно име",
      emailLabel: "Имейл",
      emailPlaceholder: "ime@firma.bg",
      messageLabel: "Съобщение",
      messagePlaceholder: "Култури, хектари и какво искате да постигнете",
      send: "Изпратете запитване",
      sending: "Изпращане…",
      sentTitle: "Запитването е изпратено",
      sentBody:
        "Благодарим, че се свързахте с нас. Екипът на ADIS ще отговори на имейла ви скоро.",
      sendAnother: "Изпратете ново запитване",
      errorMissing:
        "Попълнете име, имейл и съобщение, за да изпратите запитване.",
      errorGeneric:
        "Запитването не можа да бъде изпратено. Опитайте отново след малко.",
      errorNetwork:
        "Запитването не можа да бъде изпратено. Проверете връзката си и опитайте отново.",
    },
    footer: {
      tagline: "Agricultural Drone Irrigation Systems",
      inquiries: "Запитвания",
      rights: "Всички права запазени.",
    },
  },
};
