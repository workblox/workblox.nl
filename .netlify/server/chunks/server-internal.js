import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./index.js";
let assets = "";
let base = "";
let version = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_building(value) {
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
set_paths({ "base": "", "assets": "" });
set_version("1674413106200");
const options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n<!--		<link rel="icon" href=' + assets2 + '/favicon.png" />-->\n		<link rel="apple-touch-icon" sizes="180x180" href="' + assets2 + '/apple-touch-icon.png">\n		<link rel="icon" type="image/png" sizes="32x32" href="' + assets2 + '/favicon-32x32.png">\n		<link rel="icon" type="image/png" sizes="16x16" href="' + assets2 + '/favicon-16x16.png">\n		<link rel="manifest" href="' + assets2 + '/site.webmanifest">\n		<link rel="mask-icon" href="' + assets2 + '/safari-pinned-tab.svg" color="#5bbad5">\n		<meta name="msapplication-TileColor" content="#da532c">\n		<meta name="theme-color" content="#ffffff">\n		<meta name="viewport" content="width=device-width" />\n		' + head + `
	</head>
	<body class='bg-rum-swizzle' data-sveltekit-preload-data="hover">
		<div style="display: contents">` + body + "</div>\n		<!-- Hotjar Tracking Code for https://workblox.netlify.app -->\n		<script>\n			(function(h,o,t,j,a,r){\n				h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n				h._hjSettings={hjid:3332521,hjsv:6};\n				a=o.getElementsByTagName('head')[0];\n				r=o.createElement('script');r.async=1;\n				r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n				a.appendChild(r);\n			})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n		<\/script>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_paths as c,
  get_hooks as g,
  options as o,
  set_building as s,
  version as v
};
