<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import LL from '$lib/i18n/i18n-svelte';

	import LanguageSwitchAnchor from '$lib/components/atoms/languageSwitchAnchor.svelte';

	let show = false;
	let menu = null;

	onMount(() => {
		const handleOutsideClick = (event) => {
			if (show && !menu.contains(event.target)) {
				show = false;
			}
		};

		const handleEscape = (event) => {
			if (show && event.key === 'Escape') {
				show = false;
			}
		};

		// add events when element is added to the DOM
		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});
</script>

<div class="relative" bind:this={menu}>
	<button
		class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-dark-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ud-menu-scroll mx-8 py-2 lg:mr-0 lg:ml-7 lg:inline-flex lg:px-0 lg:group-hover:opacity-70 lg:mt-4 lg:mb-1"
		on:click={() => (show = !show)}
		tabindex="0"
	>
		{$LL.navigation.language()}
	</button>

	{#if show}
		<div
			class="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			in:scale={{ duration: 100, start: 0.95 }}
			out:scale={{ duration: 75, start: 0.95 }}
			data-sveltekit-preload-data="off"
		>
			<div class="py-1" role="none">
				<LanguageSwitchAnchor href="/" language="Nederlands" />
				<LanguageSwitchAnchor href="/en" language="English" />
			</div>
		</div>
	{/if}
</div>
