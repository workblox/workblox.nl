<script lang="ts">
	import '../app.postcss';
	import Navigation from '$lib/components/templates/navigation.svelte';
	import Footer from '$lib/components/templates/footer.svelte';
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
</script>

<svelte:head>
	<script>
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-WKBHZ8W');
	</script>
</svelte:head>

<Navigation />
<slot />
<GdprBanner
	cookieName="wb_consent"
	heading=""
	description="Om u de beste gebruikservaring te kunnen bieden, gebruiken wij cookies. Voor meer inhoudelijke informatie en het onderscheid die wij hier in maken, verwijzen wij u door naar ons <a href='/cookie-policy'>cookiebeleid.</a>"
	{showEditIcon}
	acceptLabel='✓ Accepteren'
	rejectLabel=''
	settingsLabel= 'Voorkeuren'
	closeLabel= 'Sluiten'
	editLabel= 'Pas instellingen aan'
	{choices}
	on:necessary={initNecessary}
	on:analytics={initAnalytics}
/>
<Footer data={data.footer} />