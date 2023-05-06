<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import CardBlock from '$lib/components/atoms/cardBlock.svelte';
	export let blok;
</script>

<section
	class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b"
	use:storyblokEditable={blok}
>
	<div class="container">
		<div class="flex flex-wrap">
			<div class="w-full">
				<div class="mb-12 max-w-[800px] lg:mb-20 px-4">
					<h2 class="text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
						{blok.title}
					</h2>
				</div>
				<div class="block-top-box-container lg:mb-4 xl:mb-8">
					{#each blok.list.slice(0, 3) as { title, list, image}, i}
						<CardBlock
							title={title}
							items={list}
							image={image}
							index={i}
						/>
					{/each}
				</div>
				<div class="block-bottom-box-container">
					{#each blok.list.slice(3, 5) as { title, list, image}, i}
						<CardBlock
							title={title}
							items={list}
							image={image}
							index={i + 3}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.block-top-box-container,
	.block-bottom-box-container
	{
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);

		@media (min-width: 960px) {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(4, 1fr);
		}

		@media (min-width: 960px) {
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
		}

		@media (min-width: 1140px) {
			grid-column-gap: 2rem;
			grid-row-gap: 2rem;
		}
	}
</style>
