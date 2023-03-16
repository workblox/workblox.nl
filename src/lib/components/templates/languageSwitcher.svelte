<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import LL from '$lib/i18n/i18n-svelte';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import LanguageSwitchAnchor from '$lib/components/atoms/languageSwitchAnchor.svelte';


	let show = false;
	let menu = null;

	import type { PageData } from './$types';

	export let data: PageData

	function closeMenu() {
		show = false;
		dispatch('click');
	}

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

<li class="group relative" bind:this={menu}>
	<button
		class="inline-flex justify-center rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ud-menu-scroll mx-8 py-2 lg:mr-0 lg:ml-7 lg:inline-flex lg:px-0 lg:group-hover:opacity-70 lg:mt-4 lg:mb-1"
		on:click={() => (show = !show)}
		tabindex="0"
	>
		<span class="px-4 text-sm font-medium text-dark-800">
			{$LL.navigation.language()}
		</span>
	</button>

	{#if show}
		<div
			class="mx-6 lg:absolute lg:right-0 lg:z-10 lg:w-56 origin-top-right lg:rounded-md lg:bg-white lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			in:scale={{ duration: 100, start: 0.95 }}
			out:scale={{ duration: 75, start: 0.95 }}
			data-sveltekit-preload-data="off"
		>
			<div class="py-1" role="none">
				<LanguageSwitchAnchor href="/" language="Nederlands" on:click={() => closeMenu()} />
				<LanguageSwitchAnchor href="/en" language="English" on:click={() => closeMenu()} />
			</div>
		</div>
	{/if}
</li>
