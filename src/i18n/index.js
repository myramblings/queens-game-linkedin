/*
 * This file now automatically detects all language JSON files in the directory.
 * To add a new language, simply create a new [language-code].json file in this directory.
 * For example: fr.json for French, de.json for German, etc.
 * There is no need to modify this file to add new languages.
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { setDefaultOptions } from "date-fns";
import { ar, enUS, es, it, ptBR, zhCN } from "date-fns/locale";

// Import language JSON files using Vite's dynamic imports
const modules = import.meta.glob("./*.json", { eager: true });

// Dynamically build the resources object
const resources = {};
Object.entries(modules).forEach(([path, module]) => {
  // Extract the language code from the path (e.g., './en.json' -> 'en')
  const langCode = path.match(/\.\/(.+)\.json$/)[1];
  resources[langCode] = {
    translation: module.default || module,
  };
});

// Define the primary language and fallback order
const primaryLanguage = "en";
const languageCodes = Object.keys(resources);
const fallbackLanguages = [
  primaryLanguage,
  ...languageCodes.filter((code) => code !== primaryLanguage),
];

// Mapping of i18n language codes to date-fns locales
const dateFnsLocaleMap = {
  ar: ar,
  en: enUS,
  es: es,
  it: it,
  pt: ptBR,
  zh: zhCN,
};

const defaultDateFnsLocale = enUS;

// Function to update date-fns locale based on i18n language
const updateDateFnsLocale = (lng) => {
  const normalizedLang = lng.split("-")[0];
  const locale = dateFnsLocaleMap[normalizedLang] || defaultDateFnsLocale;
  setDefaultOptions({ locale });
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: fallbackLanguages,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: languageCodes,
    detection: {
      convertDetectedLanguage: (lng) => lng.split("-")[0], // remove it if you want support regional languages (en -> en-US)
    },
  });

// Set initial date-fns locale
updateDateFnsLocale(i18n.language || primaryLanguage);

// Update date-fns locale on language change
i18n.on("languageChanged", (lng) => {
  updateDateFnsLocale(lng);
});

// Export i18n for use in the application
export default i18n;
