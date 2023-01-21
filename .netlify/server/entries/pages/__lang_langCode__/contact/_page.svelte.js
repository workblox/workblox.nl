import { c as create_ssr_component } from "../../../../chunks/index.js";
const hydrate = true;
const router = true;
const prerender = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Contact me</h1>
<form name="${"contact"}" method="${"post"}" data-netlify="${"true"}" netlify-honeypot="${"bot-field"}" netlify><input type="${"hidden"}" name="${"form-name"}" value="${"contact"}">
	<input type="${"hidden"}" name="${"bot-field"}">

	<label for="${"name"}">Name
	</label>
	<input id="${"name"}" type="${"text"}" name="${"name"}" required minlength="${"2"}">

	<label for="${"email"}">Email </label>

	<input id="${"email"}" type="${"email"}" name="${"email"}" required autocomplete="${"email"}" minlength="${"5"}">

	<label for="${"message"}">Message
	</label>
	<textarea id="${"message"}" name="${"message"}" required minlength="${"40"}"></textarea>

	<button type="${"submit"}">Send</button></form>`;
});
export {
  Page as default,
  hydrate,
  prerender,
  router
};
