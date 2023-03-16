import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";
import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale, locale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import type {LoadEvent} from "@sveltejs/kit";
import Hero from "$lib/components/templates/Hero.svelte";
import SmallCardsTemplate from "$lib/components/templates/SmallCards.svelte";
import SeoMeta from "$lib/components/templates/SeoMeta.svelte";
import Page from "$lib/components/templates/Page.svelte";

export const load = (async (event: LoadEvent) => {
	const locale = await setLocaleFromEvent(event);

	storyblokInit({
		accessToken: "3wRT5lQSjyjr1vkfEGIlygtt",
		use: [apiPlugin],
		components: {
			hero: Hero,
			page: Page,
			smallCardsTemplate: SmallCardsTemplate,
			seo_meta: SeoMeta
		},
	});

	const storyblokApi = await useStoryblokApi();

	const dataPath = `cdn/stories/config`;

	const dataConfig = await storyblokApi.get(dataPath, {
		version: 'published',
		language: locale,
		resolve_links: 'url'
	});

	return {
		storyblokApi: storyblokApi,
		header: dataConfig.data.story.content.header_menu,
		locale: locale
	};
}) satisfies LayoutLoad;


async function setLocaleFromEvent(event: LoadEvent): Promise<string> {
	// Detect the locale
	const locale = detectLocale(() => [event.params.lang ?? '']);
	// Load it
	await loadLocaleAsync(locale);
	// Set it
	setLocale(locale);
	return locale;
}