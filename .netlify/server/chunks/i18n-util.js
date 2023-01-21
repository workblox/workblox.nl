import "typesafe-i18n";
import { detectLocale as detectLocale$1 } from "typesafe-i18n/detectors";
const baseLocale = "nl";
const locales = [
  "en",
  "nl"
];
const loadedLocales = {};
const loadedFormatters = {};
const detectLocale = (...detectors) => detectLocale$1(baseLocale, locales, ...detectors);
export {
  loadedFormatters as a,
  baseLocale as b,
  locales as c,
  detectLocale as d,
  loadedLocales as l
};
