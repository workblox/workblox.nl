import { c as create_ssr_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>SvelteKit + Netlify Forms demo</h1>
<p>View <a href="${"https://github.com/sw-yx/sveltekitnetlifyforms"}">https://github.com/sw-yx/sveltekitnetlifyforms</a> for source</p>


<form name="${"test"}" method="${"post"}" netlify><input type="${"hidden"}" name="${"form-name"}" value="${"test"}">
	
	<p><label>Your Name: <input type="${"text"}" name="${"name"}"></label></p>
	<p><label>Your Email: <input type="${"email"}" name="${"email"}"></label></p>
	<p><label>Message: <textarea name="${"message"}"></textarea></label></p>
	<p><button type="${"submit"}">Send</button></p></form>`;
});
export {
  Page as default
};
