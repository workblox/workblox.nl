export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/images/about/about-image.svg","assets/images/blog/article-author-01.png","assets/images/blog/article-author-02.png","assets/images/blog/article-author-03.png","assets/images/blog/article-author-04.png","assets/images/blog/author-01.png","assets/images/blog/bannder-ad.png","assets/images/blog/blog-01.jpg","assets/images/blog/blog-02.jpg","assets/images/blog/blog-03.jpg","assets/images/blog/blog-details-01.jpg","assets/images/blog/dotted-shape.svg","assets/images/blog/quote-bg.svg","assets/images/brands/ayroui.svg","assets/images/brands/ecommerce-html.svg","assets/images/brands/graygrids.svg","assets/images/brands/lineicons.svg","assets/images/brands/tailgrids.svg","assets/images/brands/tailwindtemplates.svg","assets/images/brands/uideck.svg","assets/images/favicon.png","assets/images/footer/brands/ayroui.svg","assets/images/footer/brands/ecommerce-html.svg","assets/images/footer/brands/graygrids.svg","assets/images/footer/brands/lineicons.svg","assets/images/footer/brands/plainadmin.svg","assets/images/footer/brands/tailgrids.svg","assets/images/footer/brands/tailwindtemplates.svg","assets/images/footer/brands/uideck.svg","assets/images/footer/shape-1.svg","assets/images/footer/shape-3.svg","assets/images/hero/brand.svg","assets/images/hero/hero-image.jpg","assets/images/logo/logo-white.svg","assets/images/logo/logo.svg","assets/images/team/dotted-shape.svg","assets/images/team/shape-2.svg","assets/images/team/team-01.png","assets/images/team/team-02.png","assets/images/team/team-03.png","assets/images/team/team-04.png","assets/images/testimonials/author-01.png","assets/images/testimonials/author-02.png","assets/images/testimonials/author-03.png","assets/js/wow.min.js","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","mstile-144x144.png","mstile-150x150.png","mstile-310x150.png","mstile-310x310.png","mstile-70x70.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".js":"application/javascript",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-61103deb.js","imports":["_app/immutable/start-61103deb.js","_app/immutable/chunks/index-97bd7e1c.js","_app/immutable/chunks/i18n-util-d14141ef.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/[[lang=langCode]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","matcher":"langCode","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: langCode } = await import ('./entries/matchers/langCode.js')
			return { langCode };
		}
	}
};
