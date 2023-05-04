<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import Faq from '$lib/components/atoms/faq.svelte';
	export let blok;
</script>

<section
	id="faq"
	class="relative z-20 overflow-hidden bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
	use:storyblokEditable={blok}
>
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-[60px] lg:mb-20">
					<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[42px]">
						{blok.title}
					</h2>
				</div>
			</div>
		</div>

		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4 lg:w-1/2 min-h-full">
				{#each blok.items.slice(0, Math.ceil(blok.items.length / 2)) as faqItem}
					<Faq title={faqItem.question} answer={faqItem.answer} />
				{/each}
			</div>
			<div class="w-full px-4 lg:w-1/2 min-h-full">
				{#each blok.items.slice(Math.ceil(blok.items.length / 2)) as faqItem}
					<Faq title={faqItem.question} answer={faqItem.answer} />
				{/each}
			</div>
		</div>
	</div>
</section>
<!-- ====== Faq Section End -->
