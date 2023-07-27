<script lang="ts">
	import '../app.postcss';
	import Navigation from '$lib/components/templates/navigation.svelte';
	import Footer from '$lib/components/templates/footer.svelte';

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
	<script>
		(function(h,o,t,j,a,r){
			h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
			h._hjSettings={hjid:3530838,hjsv:6};
			a=o.getElementsByTagName('head')[0];
			r=o.createElement('script');r.async=1;
			r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
			a.appendChild(r);
		})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
	</script>
</svelte:head>

<Navigation />
<slot />
<Footer data={data.footer} />

<a
	href="/"
	class="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-dark shadow-md transition duration-300 ease-in-out hover:bg-dark"
>
	<span class="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white" />
</a>
