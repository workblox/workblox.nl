import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";
import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import type {LoadEvent} from "@sveltejs/kit";
import Hero from "$lib/components/templates/Hero.svelte";
import SmallCardsTemplate from "$lib/components/templates/SmallCards.svelte";
import Page from "$lib/components/templates/Page.svelte";

export const load = (async (event: LoadEvent) => {
	setLocaleFromEvent(event);

	storyblokInit({
		accessToken: "3wRT5lQSjyjr1vkfEGIlygtt",
		use: [apiPlugin],
		components: {
			hero: Hero,
			page: Page,
			smallCardsTemplate: SmallCardsTemplate
		},
	});

	const storyblokApi = await useStoryblokApi();
	const dataConfig = await storyblokApi.get('cdn/stories/config/', {
		version: 'draft',
		resolve_links: 'url'
	});

	const data = {
		storyblokApi: storyblokApi,
		header: dataConfig.data.story.content.header_menu,
		...event.data
	};
	return data;
}) satisfies LayoutLoad;


async function setLocaleFromEvent(event: LoadEvent) {
	// Detect the locale
	const locale = detectLocale(() => [event.params.lang ?? '']);
	// Load it
	await loadLocaleAsync(locale);
	// Set it
	setLocale(locale);
}