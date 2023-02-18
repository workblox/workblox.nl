import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';

export const load = (async (event) => {
	// Detect the locale
	const locale = event.data.locale;
	// Load it
	await loadLocaleAsync(locale);
	// Set it
	setLocale(locale);

	return event.data;
}) satisfies LayoutLoad;
