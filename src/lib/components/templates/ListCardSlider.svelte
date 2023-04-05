<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";

	import Card from '$lib/components/atoms/card.svelte';
	export let blok;
</script>

<section
	class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b"
	use:storyblokEditable={blok}
>
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full">
				<div class="mb-12 max-w-[800px] lg:mb-20 px-4">
					<h2 class="text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
						{blok.title}
					</h2>
				</div>
				<div class="flex gap-4 snap-x pl-4 snap-proximity overflow-x-auto pb-10 hide-scroll-bar">
					{#each blok.list as { title, list, type, image}, i}
						<Card
							title={title}
							items={list}
							type={type}
							image={image}
							class={i > 0 ? 'lg:ml-4' : ''}
						>
						</Card>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
