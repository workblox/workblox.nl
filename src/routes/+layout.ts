import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";
import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import type {LoadEvent} from "@sveltejs/kit";
import Hero from "$lib/components/templates/Hero.svelte";
import FlatCardsTemplate from "$lib/components/templates/FlatCards.svelte";
import BlockCardsTemplate from "$lib/components/templates/BlockCards.svelte";
import FeatureCardsSliderTemplate from "$lib/components/templates/FeatureCardsSlider.svelte";
import KeyCardsTemplate from "$lib/components/templates/KeyCards.svelte";
import FaqTemplate from "$lib/components/templates/Faq.svelte";
import SeoMeta from "$lib/components/templates/SeoMeta.svelte";
import Page from "$lib/components/templates/Page.svelte";
import Footer from '$lib/components/templates/footer.svelte';
import Navigation from '$lib/components/templates/navigation.svelte';
import ContactForm from '$lib/components/templates/contactForm.svelte';

export const load = (async (event: LoadEvent) => {
	const locale = await setLocaleFromEvent(event);

	storyblokInit({
		accessToken: "yhQzwAxQSgJXrLNfErtOSwtt",
		use: [apiPlugin],
		components: {
			hero: Hero,
			page: Page,
			footer: Footer,
			navigation: Navigation,
			flatCardsTemplate: FlatCardsTemplate,
			blockCardsTemplate: BlockCardsTemplate,
			featureCardsSlider: FeatureCardsSliderTemplate,
			keyCardsTemplate: KeyCardsTemplate,
			faqTemplate: FaqTemplate,
			seo_meta: SeoMeta,
			contactForm: ContactForm
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
		footer: dataConfig.data.story.content.footer[0],
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