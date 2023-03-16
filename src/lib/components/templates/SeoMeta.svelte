<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	import { page } from '$app/stores';
	export let blok;
</script>

<MetaTags
	title={blok.title}
	titleTemplate="%s | Workblox"
	description={blok.description}
	canonical={$page.url.href}
	openGraph={{
		url: $page.url.href,
		title: blok.ogTitle,
		description: blok.ogDescription,
		site_name: 'Workblox.nl'
	}}
	twitter={{
		handle: '@workblox',
		site: '@workblox.nl',
		cardType: 'summary_large_image',
		title: blok.ogTitle,
		description: blok.ogDescription,
		imageAlt: 'Twitter image alt'
	}}
/>
