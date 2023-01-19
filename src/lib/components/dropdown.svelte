<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	import { browser } from '$app/environment';
	import { locale } from '$lib/translations';

	const handleClick = (newTrans) => {
		if (browser) {
			document.cookie = `language=${newTrans};path=/`;
		}
		locale.set(newTrans);
	};

	export let user;

	let show = false; // menu state
	let menu = null; // menu wrapper DOM reference

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
	<div>
		<button
			on:click={() => (show = !show)}
			class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
		>
			Taal
		</button>

		{#if show}
			<div
				class='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
				role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabindex='-1'
				in:scale={{ duration: 100, start: 0.95 }}
				out:scale={{ duration: 75, start: 0.95 }}
			>
				<div class="py-1" role="none">
					<button
						role="menuitem" tabindex="-1"
						on:click={() => handleClick("nl")}
						class="text-gray-700 hover:bg-primary hover:text-white w-full block px-4 py-2 text-sm"
					>Nederlands</button>
					<button
						role="menuitem" tabindex="-1"
						class="text-gray-700 hover:bg-primary hover:text-white w-full block px-4 py-2 text-sm"
						on:click={() => handleClick("en")}
					>English</button>
				</div>
			</div>
		{/if}
	</div>
</div>