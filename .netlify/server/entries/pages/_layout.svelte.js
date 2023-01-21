import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { L as LL } from "../../chunks/i18n-svelte.js";
const app = "";
const LanguageSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ud-menu-scroll mx-8 py-2 lg:mr-0 lg:ml-7 lg:inline-flex lg:px-0 lg:group-hover:opacity-70 lg:mt-4 lg:mb-1"}">Taal
</button>

${``}`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LL, $$unsubscribe_LL;
  $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
  $$unsubscribe_LL();
  return `
<div class="${"ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent"}"><div class="${"container"}"><div class="${"relative -mx-4 flex items-center justify-between"}"><div class="${"w-60 max-w-full px-4"}"><a href="${"/"}" class="${"navbar-logo block w-full py-5"}"><img src="${"assets/images/logo/logo-white.svg"}" alt="${"logo"}" class="${"header-logo w-full"}"></a></div>
			<div class="${"flex w-full items-center justify-between px-4"}"><div><button id="${"navbarToggler"}" class="${"absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"}"><span class="${"relative my-[6px] block h-[2px] w-[30px] bg-white"}"></span>
						<span class="${"relative my-[6px] block h-[2px] w-[30px] bg-white"}"></span>
						<span class="${"relative my-[6px] block h-[2px] w-[30px] bg-white"}"></span></button>
					<nav id="${"navbarCollapse"}" class="${"absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"}"><ul class="${"blcok lg:flex"}"><li class="${"group relative"}"><a href="${"#home"}" class="${"ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"}">Home
								</a></li>
							<li class="${"group relative"}"><a${add_attribute("href", $LL.LINK("#features"), 0)} class="${"ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"}">Functionaliteiten
								</a></li>
							<li class="${"group relative"}"><a href="${"/#faq"}" class="${"ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"}">Faq
								</a></li>
							<li class="${"group relative"}"><a href="${"/#team"}" class="${"ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"}">Team
								</a></li>
							<li class="${"group relative"}"><a${add_attribute("href", $LL.LINK("#contact"), 0)} class="${"ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"}">Contact
								</a></li>
							<li class="${"group relative"}">${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, {}, {}, {})}</li></ul></nav></div>













</div></div></div></div>
`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  const trailingSlash = "ignore";
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.trailingSlash === void 0 && $$bindings.trailingSlash && trailingSlash !== void 0)
    $$bindings.trailingSlash(trailingSlash);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}


<a href="${"javascript:void(0)"}" class="${"back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"}"><span class="${"mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"}"></span></a>
`;
});
export {
  Layout as default
};
