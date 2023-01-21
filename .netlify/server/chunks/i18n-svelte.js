import { initI18nSvelte } from "typesafe-i18n/svelte";
import { l as loadedLocales, a as loadedFormatters } from "./i18n-util.js";
const { locale, LL, setLocale } = initI18nSvelte(loadedLocales, loadedFormatters);
export {
  LL as L,
  setLocale as s
};
