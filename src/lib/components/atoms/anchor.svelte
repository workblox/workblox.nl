<script lang="ts">
	import {handleAnchorClick} from "$lib/utils/scroll.js";

	export let href;
	import ArrowRightSvg from '$lib/assets/svg/arrow-right.svelte';
</script>

<a {href} on:click={href.indexOf('#') > -1 ? handleAnchorClick : null} class="text-xl uppercase font-medium flex items-center">
	<span class="pb-2 border-b-black border-b-2 border-solid"><slot /></span>
	<div
		class="ml-4 h-11 w-11 font-bold rounded-full bg-black text-white flex items-center justify-center font-mono"
	>
		<ArrowRightSvg />
	</div>
</a>
