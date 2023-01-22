import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { L as LL } from "../../../chunks/i18n-svelte.js";
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<section id="${"features"}" class="${"pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b"}"><div class="${"container"}"><div class="${"-mx-4 flex flex-wrap"}"><div class="${"w-full px-4"}"><div class="${"mb-12 max-w-[800px] lg:mb-20"}"><span class="${"mb-2 block text-lg font-semibold text-dark"}">Functionaliteiten
					</span>
					<h2 class="${"mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"}">Wat Workblox voor u kan betekenen
					</h2>
					<p class="${"text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"}">Wij geloven in efficiënter werken. Het digitaliseren van uw werkproces levert u en uw klant een hoop voordelen op.
					</p></div></div></div></div></section>`;
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LL, $$unsubscribe_LL;
  $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
  $$unsubscribe_LL();
  return `
<section id="${"faq"}" class="${"relative z-20 overflow-hidden bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"}"><div class="${"container"}"><div class="${"-mx-4 flex flex-wrap"}"><div class="${"w-full px-4"}"><div class="${"mx-auto mb-[60px] max-w-[620px] lg:mb-20"}"><h2 class="${"mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[42px]"}">${escape($LL.faqs.title())}</h2>
					<p class="${"text-lg leading-relaxed text-white sm:text-xl sm:leading-relaxed"}">${escape($LL.faqs.subtitle())}</p></div></div></div>

		<div class="${"-mx-4 flex flex-wrap"}"><div class="${"w-full px-4 lg:w-1/2"}"><div class="${"single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-dark p-5 sm:p-8"}" data-wow-delay="${".1s\n              "}"><button class="${"faq-btn flex w-full items-center text-left"}"><div class="${"w-full"}"><h4 class="${"text-base font-semibold text-white sm:text-lg"}">How to use TailGrids?
							</h4></div>
						<div class="${"mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-white"}"><svg width="${"17"}" height="${"10"}" viewBox="${"0 0 17 10"}" class="${"icon fill-current"}"><path d="${"M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"}" fill="${"#3056D3"}" stroke="${"#3056D3"}"></path></svg></div></button>
					<div class="${"faq-content hidden pl-[62px]"}"><p class="${"py-3 text-base leading-relaxed text-white"}">It takes 2-3 weeks to get your first blog post ready. That
							includes the in-depth research &amp; creation of your monthly
							content marketing strategy that we do before writing your
							first blog post, Ipsum available .
						</p></div></div></div></div></div>

	<div class="${"absolute bottom-0 right-0 z-[-1]"}"><svg width="${"1440"}" height="${"886"}" viewBox="${"0 0 1440 886"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path opacity="${"0.5"}" d="${"M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"}" fill="${"url(#paint0_linear)"}"></path><defs><linearGradient id="${"paint0_linear"}" x1="${"1308.65"}" y1="${"1142.58"}" x2="${"602.827"}" y2="${"-418.681"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#3056D3"}" stop-opacity="${"0.36"}"></stop><stop offset="${"1"}" stop-color="${"#F5F2FD"}" stop-opacity="${"0"}"></stop><stop offset="${"1"}" stop-color="${"#F5F2FD"}" stop-opacity="${"0.096144"}"></stop></linearGradient></defs></svg></div></section>
`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const type = "button";
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<button${add_attribute("type", type, 0)} class="${"inline-flex items-center justify-center rounded bg-dark py-4 px-6 text-white font-medium text-dark transition duration-300 ease-in-out hover:bg-dark"}">${slots.default ? slots.default({}) : ``}</button>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LL, $$unsubscribe_LL;
  $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
  $$unsubscribe_LL();
  return `
<div id="${"home"}" class="${"relative overflow-hidden bg-primary py-[120px] md:py-[130px] lg:py-[160px] border-b border-b-dark"}"><div class="${"container"}"><div class="${"-mx-4 flex flex-wrap items-center"}"><div class="${"w-full flex px-4"}"><div class="${"hidden lg:flex"}"><img src="${"assets/images/hero/app.png"}" alt="${"hero"}" class="${"mx-auto max-w-full rounded-t-xl rounded-tr-xl"}"></div>
				<div class="${"flex justify-center items-start flex-col wow fadeInUp"}" data-wow-delay="${".2s"}"><h1 class="${"mb-8 text-[44px] font-medium leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug"}">${escape($LL.payoffs.main())}</h1>
					<p class="${"mb-10 max-w-[600px] text-dark-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"}">${escape($LL.payoffs.main_sub())}</p>
					${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($LL.register())}`;
    }
  })}</div></div></div></div></div>
`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<section id="${"contact"}" class="${"relative py-20 md:py-[120px]"}"><div class="${"absolute top-0 left-0 z-[-1] h-1/2 w-full bg-rum-swizzle lg:h-[45%] xl:h-1/2"}"></div>
	<div class="${"container px-4"}"><div class="${"-mx-4 flex flex-wrap items-center"}"><div class="${"w-full px-4 lg:w-7/12 xl:w-8/12"}"><div class="${"ud-contact-content-wrapper"}"><div class="${"ud-contact-title mb-12 lg:mb-[150px]"}"><span class="${"mb-5 text-base font-semibold text-dark"}">Neem contact op
						</span>
						<h2 class="${"text-[35px] font-semibold"}">We horen graag hoe we u <br>
							van dienst kunnen zijn!
						</h2></div>
					<div class="${"mb-12 flex flex-wrap justify-between lg:mb-0"}"><div class="${"mb-8 flex w-[330px] max-w-full"}"><div class="${"mr-6 text-[32px] text-dark"}"><svg width="${"29"}" height="${"35"}" viewBox="${"0 0 29 35"}" class="${"fill-current"}"><path d="${"M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"}"></path><path d="${"M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"}"></path></svg></div>
							<div><h5 class="${"mb-6 text-lg font-semibold"}">Onze locatie</h5>
								<p class="${"text-base text-body-color"}">Wilhelminastraat 21B, 4811AC, Breda
								</p></div></div>
						<div class="${"mb-8 flex w-[330px] max-w-full"}"><div class="${"mr-6 text-[32px] text-dark"}"><svg width="${"34"}" height="${"25"}" viewBox="${"0 0 34 25"}" class="${"fill-current"}"><path d="${"M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"}"></path></svg></div>
							<div><h5 class="${"mb-6 text-lg font-semibold"}">Neem contact op</h5>
								<a href="${"mailto:info@workblox.nl"}">info@workblox.nl</a> <br>
								<a href="${"tel:+31168481123"}" class="${"text-base text-body-color"}">+31 (0168) 481123</a></div></div></div></div></div>
			<div class="${"w-full px-4 lg:w-5/12 xl:w-4/12"}"><div class="${"wow fadeInUp rounded-lg bg-spanish-white border border-dark py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"}" data-wow-delay="${".2s\n              "}"><h3 class="${"mb-8 text-2xl font-semibold md:text-[26px]"}">Neem contact op
					</h3>
					<form name="${"contact-form"}" method="${"POST"}" data-netlify="${"true"}" netlify-honeypot="${"bot-field"}"><input type="${"hidden"}" name="${"form-name"}" value="${"contact-form"}">
						<input type="${"hidden"}" name="${"bot-field"}">

						<div class="${"mb-6"}"><label for="${"fullName"}" class="${"block text-xs text-dark mb-2"}">Voor en achternaam*</label>
							<input type="${"text"}" id="${"fullName"}" name="${"fullName"}" placeholder="${"Voor en achternaam"}" class="${"w-full border-0 bg-rum-swizzle border-b border-[#f1f1f1] p-4 focus:border-primary focus:outline-none"}" required></div>
						<div class="${"mb-6"}"><label for="${"email"}" class="${"block text-xs text-dark mb-2"}">Email*</label>
							<input type="${"email"}" id="${"email"}" name="${"email"}" placeholder="${"voorbeeld@email.nl"}" class="${"w-full border-0 bg-rum-swizzle border-b border-[#f1f1f1] p-4 focus:border-primary focus:outline-none"}" required></div>
						<div class="${"mb-6"}"><label for="${"phone"}" class="${"block text-xs text-dark mb-2"}">Telefoon*</label>
							<input type="${"text"}" id="${"phone"}" name="${"phone"}" placeholder="${"06 12345678"}" class="${"w-full border-0 bg-rum-swizzle border-b border-[#f1f1f1] p-4 focus:border-primary focus:outline-none"}" required></div>
						<div class="${"mb-6"}"><label for="${"message"}" class="${"block text-xs text-dark mb-2"}">Bericht*</label>
							<textarea id="${"message"}" name="${"message"}" rows="${"1"}" placeholder="${"Typ hier uw bericht"}" class="${"w-full resize-none bg-rum-swizzle border-0 border-b border-[#f1f1f1] p-4 focus:border-primary focus:outline-none"}" required></textarea></div>
						<div class="${"mb-0"}"><button type="${"submit"}" class="${"inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-dark"}">Verstuur
							</button></div></form></div></div></div></div></section>
`;
});
const Anchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const href = "#";
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="${"text-dark mt-8 hover:underline"}">${slots.default ? slots.default({}) : ``}</a>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LL, $$unsubscribe_LL;
  $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
  $$unsubscribe_LL();
  return `
<footer class="${"wow fadeInUp relative z-10 bg-rice-flower pt-20 lg:pt-[120px]"}" data-wow-delay="${".15s"}"><div class="${"container"}"><div class="${"-mx-4 flex flex-wrap"}"><div class="${"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12"}"><div class="${"mb-10 w-full"}"><a href="${"/"}" class="${"mb-6 inline-block max-w-[160px]"}"><img src="${"assets/images/logo/logo-white.svg"}" alt="${"logo"}" class="${"max-w-full"}"></a>
					<p class="${"mb-7 text-dark"}"><!-- HTML_TAG_START -->${$LL.footer.title()}<!-- HTML_TAG_END --></p>
					${validate_component(Anchor, "Anchor").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($LL.contact.email())}`;
    }
  })}</div></div>
			<div class="${"hidden lg:block w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"}"><div class="${"mb-10 w-full"}"><h4 class="${"mb-9 text-lg font-semibold text-dark"}">About Us</h4>
					<ul><li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Home
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Features
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">About
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Testimonial
							</a></li></ul></div></div>
			<div class="${"hidden lg:block w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12"}"><div class="${"mb-10 w-full"}"><h4 class="${"mb-9 text-lg font-semibold text-dark"}">Features</h4>
					<ul><li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">How it works
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Privacy policy
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Terms of Service
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Refund policy
							</a></li></ul></div></div>
			<div class="${"hidden lg:block w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12"}"><div class="${"mb-10 w-full"}"><h4 class="${"mb-9 text-lg font-semibold text-dark"}">Our Products
					</h4>
					<ul><li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">LineIcons
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Ecommerce HTML
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">Ayro UI
							</a></li>
						<li><a href="${"/"}" class="${"mb-2 inline-block text-base leading-loose text-dark"}">PlainAdmin
							</a></li></ul></div></div></div></div>

	<div class="${"border-t border-opacity-40 py-8"}"><div class="${"container"}"><div class="${"-mx-4 flex flex-wrap"}"><div class="${"w-full px-4"}"><div class="${"my-1 flex justify-between"}"><p class="${"text-dark"}">Blijf op de hoogte</p>
						<div class="${"-mx-3 flex items-center"}"><a href="${"/"}" class="${"px-3 text-dark"}"><svg width="${"10"}" height="${"18"}" viewBox="${"0 0 10 18"}" class="${"fill-current"}"><path d="${"M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z"}"></path></svg></a>
							<a href="${"/"}" class="${"px-3 text-dark"}"><svg width="${"19"}" height="${"15"}" viewBox="${"0 0 19 15"}" class="${"fill-current"}"><path d="${"M16.2622 3.17878L17.33 1.93293C17.6391 1.59551 17.7234 1.33595 17.7515 1.20618C16.9085 1.67337 16.1217 1.82911 15.6159 1.82911H15.4192L15.3068 1.72528C14.6324 1.18022 13.7894 0.894714 12.8902 0.894714C10.9233 0.894714 9.37779 2.40012 9.37779 4.13913C9.37779 4.24295 9.37779 4.39868 9.40589 4.5025L9.49019 5.02161L8.90009 4.99565C5.30334 4.89183 2.35288 2.03675 1.87518 1.5436C1.08839 2.84136 1.53799 4.08722 2.01568 4.86587L2.97107 6.31937L1.45369 5.54071C1.48179 6.63084 1.93138 7.48736 2.80247 8.11029L3.56116 8.62939L2.80247 8.9149C3.28017 10.2386 4.34795 10.7837 5.13474 10.9913L6.17443 11.2509L5.19094 11.8738C3.61736 12.912 1.65039 12.8342 0.779297 12.7563C2.54957 13.8983 4.65705 14.1579 6.11823 14.1579C7.21412 14.1579 8.02901 14.0541 8.2257 13.9762C16.0936 12.2631 16.4589 5.77431 16.4589 4.47655V4.29486L16.6275 4.19104C17.5829 3.36047 17.9763 2.91923 18.2011 2.65967C18.1168 2.68563 18.0044 2.73754 17.892 2.7635L16.2622 3.17878Z"}"></path></svg></a>
							<a href="${"/"}" class="${"px-3 text-dark"}"><svg width="${"18"}" height="${"18"}" viewBox="${"0 0 18 18"}" class="${"fill-current"}"><path d="${"M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z"}"></path><path d="${"M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z"}"></path><path d="${"M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z"}"></path></svg></a>
							<a href="${"/"}" class="${"px-3 text-dark"}"><svg width="${"18"}" height="${"18"}" viewBox="${"0 0 18 18"}" class="${"fill-current"}"><path d="${"M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z"}"></path></svg></a></div></div></div></div></div></div>

	<div class="${"border-t border-opacity-40 py-8"}"><div class="${"container"}"><div class="${"-mx-4 flex flex-wrap"}"><div class="${"w-full px-4"}"><div class="${"my-1 flex justify-center"}"><a href="${"/"}" rel="${"nofollow noopner noreferrer"}" target="${"_blank"}" class="${"text-dark hover:underline"}">Cookies
						</a>
						<a href="${"/"}" rel="${"nofollow noopner noreferrer"}" target="${"_blank"}" class="${"text-dark ml-4 hover:underline"}">Privacy
						</a></div></div></div></div></div></footer>
`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Features, "Features").$$render($$result, {}, {}, {})}


${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
${validate_component(Faq, "Faq").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
