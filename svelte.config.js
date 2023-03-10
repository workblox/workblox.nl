import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: ['/', '/contact', '/en', '/en/contact']
		},
		alias: {
			'@storyblok/svelte': './node_modules/@storyblok/svelte',
		},
	}
};

export default config;
