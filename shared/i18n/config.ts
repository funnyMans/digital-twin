// src/i18n/config.ts
export const locales = ["en", "ru", "ar", "es", "fr", "de", "zh"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];
