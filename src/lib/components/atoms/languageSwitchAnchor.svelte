<script lang="ts">
	export let href;
	export let language;

	import { page } from '$app/stores';

	$: highlightPath = href.includes($page.params.lang) || (!$page.params.lang && href.length === 1);
</script>

<a
	{href}
	role="menuitem"
	tabindex="-1"
	class="hover:bg-[#b7cedf] hover:text-dark w-full block px-4 py-2 text-sm {highlightPath
		? 'bg-primary'
		: ''}"
	on:click
	data-sveltekit-noscroll
>
	{language}
</a>
