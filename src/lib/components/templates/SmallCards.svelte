<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import CardSmall from '$lib/components/atoms/cardSmall.svelte';
	import DragAndDropSvg from '$lib/assets/svg/dragdrop.svelte';
	export let blok;
</script>

<section
	id="usps" class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b"
	 use:storyblokEditable={blok}
>
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mb-12 max-w-[800px] lg:mb-20">
					<h2 class="mb-4 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
						{blok.title}
					</h2>
				</div>
				<div class="mb-12 flex flex-col lg:flex-row lg:mb-20">
					{#each blok.smallCards as { title, subtitle }, i}
					<CardSmall
						title={title}
						subtitle={subtitle}
						class={i > 0 ? 'lg:ml-4' : ''}
					>
							<slot name="icon"><DragAndDropSvg /></slot>
						</CardSmall>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
