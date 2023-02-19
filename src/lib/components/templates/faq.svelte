<script lang="ts">
	import Faq from '$lib/components/atoms/faq.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';

	import type { Translation } from '$lib/i18n/i18n-types';

	let what: keyof Translation['faqs'] = 'what';
	let costs: keyof Translation['faqs'] = 'costs';
	let secure: keyof Translation['faqs'] = 'secure';
	let integrations: keyof Translation['faqs'] = 'integrations';

	let faqItems = [what, costs, secure, integrations];
</script>

<!-- ====== Faq Section Start -->
<section
	id="faq"
	class="relative z-20 overflow-hidden bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
>
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-[60px] lg:mb-20">
					<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[42px]">
						{$LL.faqs.title()}
					</h2>
				</div>
			</div>
		</div>

		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4 lg:w-1/2">
				{#each faqItems.slice(0, Math.ceil(faqItems.length / 2)) as faqItem}
					<Faq title={$LL.faqs[faqItem].title()} answer={$LL.faqs[faqItem].answer()} />
				{/each}
			</div>
			<div class="w-full px-4 lg:w-1/2">
				{#each faqItems.slice(Math.ceil(faqItems.length / 2)) as faqItem}
					<Faq title={$LL.faqs[faqItem].title()} answer={$LL.faqs[faqItem].answer()} />
				{/each}
			</div>
		</div>
	</div>
</section>
<!-- ====== Faq Section End -->
