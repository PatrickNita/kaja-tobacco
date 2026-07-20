export const locales = ["en", "de", "es", "ru", "ro"] as const;

export const sectionIds = [
  "kaja",
  "strength",
  "catalogue",
  "availability",
  "merch",
  "contact",
] as const;

export const destinationIds = ["catalogue", "merch"] as const;
export const pathLocales = ["de", "es", "ru", "ro"] as const;

export type Locale = (typeof locales)[number];
export type SectionId = (typeof sectionIds)[number];
export type DestinationId = (typeof destinationIds)[number];
export type PathLocale = (typeof pathLocales)[number];

export type LocalizedRoute =
  | { kind: "home"; section?: SectionId }
  | { destination: DestinationId; kind: "destination" };

export type PageCopy = {
  languageName: string;
  gate: {
    label: string;
    confirm: string;
    language: string;
  };
  actions: Record<DestinationId, string>;
  navigation: {
    returnHome: string;
  };
  sections: Record<SectionId, string>;
};

export const content: Record<Locale, PageCopy> = {
  en: {
    languageName: "English",
    gate: { label: "Are you 18 or older?", confirm: "Enter", language: "Language" },
    actions: { catalogue: "CHECK CATALOGUE", merch: "CHECK MERCH" },
    navigation: { returnHome: "RETURN HOME" },
    sections: {
      kaja: "KAJA",
      strength: "STRENGTH",
      catalogue: "CATALOGUE",
      availability: "AVAILABILITY",
      merch: "MERCH",
      contact: "CONTACT",
    },
  },
  de: {
    languageName: "Deutsch",
    gate: { label: "Bist du 18 oder älter?", confirm: "Eintreten", language: "Sprache" },
    actions: { catalogue: "KATALOG ANSEHEN", merch: "MERCH ANSEHEN" },
    navigation: { returnHome: "ZURÜCK ZUR STARTSEITE" },
    sections: {
      kaja: "KAJA",
      strength: "STÄRKE",
      catalogue: "KATALOG",
      availability: "VERFÜGBARKEIT",
      merch: "MERCH",
      contact: "KONTAKT",
    },
  },
  es: {
    languageName: "Español",
    gate: { label: "¿Tienes 18 años o más?", confirm: "Entrar", language: "Idioma" },
    actions: { catalogue: "VER CATÁLOGO", merch: "VER MERCH" },
    navigation: { returnHome: "VOLVER AL INICIO" },
    sections: {
      kaja: "KAJA",
      strength: "FUERZA",
      catalogue: "CATÁLOGO",
      availability: "DISPONIBILIDAD",
      merch: "MERCH",
      contact: "CONTACTO",
    },
  },
  ru: {
    languageName: "Русский",
    gate: { label: "Вам уже исполнилось 18 лет?", confirm: "Войти", language: "Язык" },
    actions: { catalogue: "СМОТРЕТЬ КАТАЛОГ", merch: "СМОТРЕТЬ МЕРЧ" },
    navigation: { returnHome: "НА ГЛАВНУЮ" },
    sections: {
      kaja: "KAJA",
      strength: "СИЛА",
      catalogue: "КАТАЛОГ",
      availability: "НАЛИЧИЕ",
      merch: "МЕРЧ",
      contact: "КОНТАКТЫ",
    },
  },
  ro: {
    languageName: "Română",
    gate: { label: "Ai împlinit 18 ani?", confirm: "Intră", language: "Limbă" },
    actions: { catalogue: "VEZI CATALOGUL", merch: "VEZI MERCH" },
    navigation: { returnHome: "ÎNAPOI ACASĂ" },
    sections: {
      kaja: "KAJA",
      strength: "TĂRIE",
      catalogue: "CATALOG",
      availability: "DISPONIBILITATE",
      merch: "MERCH",
      contact: "CONTACT",
    },
  },
};

export function localePath(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}`;
}

export function destinationPath(locale: Locale, destination: DestinationId) {
  return locale === "en"
    ? `/${destination}`
    : `/${locale}/${destination}`;
}

export function localizedRoutePath(locale: Locale, route: LocalizedRoute) {
  if (route.kind === "destination") {
    return destinationPath(locale, route.destination);
  }

  const path = localePath(locale);
  return route.section ? `${path}#${route.section}` : path;
}

export function isPathLocale(value: string): value is PathLocale {
  return pathLocales.includes(value as PathLocale);
}
