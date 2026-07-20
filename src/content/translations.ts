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

export type DestinationProductCopy = {
  description: string;
  imageLabel: string;
  titlePrefix: string;
};

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
  products: Record<DestinationId, DestinationProductCopy>;
  sections: Record<SectionId, string>;
};

export const content: Record<Locale, PageCopy> = {
  en: {
    languageName: "English",
    gate: { label: "Are you 18 or older?", confirm: "Enter", language: "Language" },
    actions: { catalogue: "CHECK CATALOGUE", merch: "CHECK MERCH" },
    navigation: { returnHome: "RETURN HOME" },
    products: {
      catalogue: {
        description: "Example catalogue product description.",
        imageLabel: "Image placeholder for catalogue item",
        titlePrefix: "CATALOGUE ITEM",
      },
      merch: {
        description: "Example merch product description.",
        imageLabel: "Image placeholder for merch item",
        titlePrefix: "MERCH ITEM",
      },
    },
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
    products: {
      catalogue: {
        description: "Beispielbeschreibung für ein Katalogprodukt.",
        imageLabel: "Bildplatzhalter für Katalogartikel",
        titlePrefix: "KATALOGARTIKEL",
      },
      merch: {
        description: "Beispielbeschreibung für einen Merch-Artikel.",
        imageLabel: "Bildplatzhalter für Merch-Artikel",
        titlePrefix: "MERCH-ARTIKEL",
      },
    },
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
    products: {
      catalogue: {
        description: "Descripción de ejemplo de un producto del catálogo.",
        imageLabel: "Espacio para la imagen del artículo de catálogo",
        titlePrefix: "ARTÍCULO DE CATÁLOGO",
      },
      merch: {
        description: "Descripción de ejemplo de un artículo de merch.",
        imageLabel: "Espacio para la imagen del artículo de merch",
        titlePrefix: "ARTÍCULO DE MERCH",
      },
    },
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
    products: {
      catalogue: {
        description: "Пример описания товара из каталога.",
        imageLabel: "Место для изображения позиции каталога",
        titlePrefix: "ПОЗИЦИЯ КАТАЛОГА",
      },
      merch: {
        description: "Пример описания товара из раздела мерча.",
        imageLabel: "Место для изображения товара мерча",
        titlePrefix: "ТОВАР МЕРЧА",
      },
    },
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
    products: {
      catalogue: {
        description: "Exemplu de descriere pentru un produs din catalog.",
        imageLabel: "Spațiu pentru imaginea articolului de catalog",
        titlePrefix: "ARTICOL DE CATALOG",
      },
      merch: {
        description: "Exemplu de descriere pentru un articol merch.",
        imageLabel: "Spațiu pentru imaginea articolului merch",
        titlePrefix: "ARTICOL MERCH",
      },
    },
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
