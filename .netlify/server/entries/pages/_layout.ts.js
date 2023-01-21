import { a as loadedFormatters, l as loadedLocales, d as detectLocale } from "../../chunks/i18n-util.js";
import { s as setLocale } from "../../chunks/i18n-svelte.js";
const initFormatters = (locale) => {
  const formatters = {
    // add your formatter functions here
  };
  return formatters;
};
const localeTranslationLoaders = {
  en: () => import("../../chunks/index2.js"),
  nl: () => import("../../chunks/index3.js")
};
const updateDictionary = (locale, dictionary) => loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary };
const importLocaleAsync = async (locale) => (await localeTranslationLoaders[locale]()).default;
const loadLocaleAsync = async (locale) => {
  updateDictionary(locale, await importLocaleAsync(locale));
  loadFormatters(locale);
};
const loadFormatters = (locale) => void (loadedFormatters[locale] = initFormatters());
const load = async (event) => {
  const locale = detectLocale(() => [event.params.lang ?? ""]);
  await loadLocaleAsync(locale);
  setLocale(locale);
  return event.data;
};
export {
  load
};
