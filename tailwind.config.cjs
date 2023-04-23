const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: "540px",
			// => @media (min-width: 576px) { ... }

			md: "720px",
			// => @media (min-width: 768px) { ... }

			lg: "960px",
			// => @media (min-width: 992px) { ... }

			xl: "1140px",
			// => @media (min-width: 1200px) { ... }

			"2xl": "1320px",
			// => @media (min-width: 1400px) { ... }
		},
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				"rum-swizzle": "#FEFEF9",
				"spanish-white": "#FEF4DB",
				"rice-flower": "#EBFFDB",
				"spring-wood": "#F5F1EA",
				gray: "#B0B0B0",
				black: "#212b36",
				dark: '#0A0F0D',
				"dark-800": 'rgba(10, 15, 13, 0.8);',
				primary: "#D5E9F8",
				secondary: "#13C296",
				warning: "#FBBF24",
			},
			fontFamily: {
				'graphik': ['Graphik', 'sans-serif']
			},
			boxShadow: {
				input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
				pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
				"switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
				testimonial: "0px 60px 120px -20px #EBEFFD",
			},
		},
	},
	plugins: [require('tailwind-container-break-out')]
};

module.exports = config;
