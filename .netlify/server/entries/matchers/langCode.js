import { b as baseLocale, c as locales } from "../../chunks/i18n-util.js";
const match = (param) => {
  return param !== baseLocale && locales.includes(param);
};
export {
  match
};
