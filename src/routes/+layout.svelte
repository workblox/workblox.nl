<script lang="ts">
	import '../app.postcss';
	import Navigation from '$lib/components/templates/navigation.svelte';
	import Footer from '$lib/components/templates/footer.svelte';
	import '@beyonk/gdpr-cookie-consent-banner/style.css';
	import { Banner as GdprBanner } from '@beyonk/gdpr-cookie-consent-banner';

	const showEditIcon = true;

	const choices = {
		necessary: {
			label: "Essentiële cookies",
			description: "Noodzakelijk voor het functioneren van de website.",
			value: true
		},
		analytics: {
			label: "Analytisch",
			description: "Meten van het gebruik op de website om verbeteringen te kunnen doorvoeren.",
			value: true
		},
		tracking: false,
		marketing: false
	}
	function initNecessary () {
		console.log('necessary');
	}
	function initAnalytics () {
		console.log('analytics');
	}

	export let data;

	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			// eslint-disable-next-line no-undef
			gtag('config', 'G-VJ20FJ7CWP', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-VJ20FJ7CWP"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-VJ20FJ7CWP');
	</script>
</svelte:head>

<Navigation />
<slot />
<GdprBanner
	cookieName="wb_consent"
	heading=""
	description="Om u de beste gebruikservaring te kunnen bieden, gebruiken wij cookies. Voor meer inhoudelijke informatie en het onderscheid die wij hier in maken, verwijzen wij u door naar ons <a href='/cookie-policy'>cookiebeleid.</a>"
	{showEditIcon}
	acceptLabel='Accepteer cookies'
	rejectLabel=''
	settingsLabel= 'Cookie voorkeuren'
	closeLabel= 'Sluiten'
	editLabel= 'Pas instellingen aan'
	{choices}
	on:necessary={initNecessary}
	on:analytics={initAnalytics}
/>
<Footer data={data.footer} />
