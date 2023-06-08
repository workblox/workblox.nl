<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import CardFlat from '$lib/components/atoms/cardFlat.svelte';
	export let blok;
</script>

<section
	id="usps" class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b"
	 use:storyblokEditable={blok}
>
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4 flex flex-col lg:flex-row lg:gap-8">
				<div class="mb-2 lg:w-6/12 pr-4 lg:mb-20">
					<h2 class="mb-4 text-3xl font-semibold text-dark sm:text-4xl md:text-[40px]">
						{blok.title}
					</h2>
				</div>
				<div class="my-12 lg:mb-12 lg:my-0 lg:w-6/12 flex flex-col lg:pl-4 gap-6">
					{#each blok.smallCards as { title, subtitle, icon }, i}
						<CardFlat
							title={title}
							image={icon}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
