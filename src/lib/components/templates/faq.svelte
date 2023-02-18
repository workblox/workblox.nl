<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
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
				<div
					class="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-dark p-5 sm:p-8"
					data-wow-delay=".1s
              "
				>
					<button class="faq-btn flex w-full items-center text-left">
						<div class="w-full">
							<h4 class="text-base font-semibold text-white sm:text-lg">How to use TailGrids?</h4>
						</div>
						<div
							class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-white"
						>
							<svg width="17" height="10" viewBox="0 0 17 10" class="icon fill-current">
								<path
									d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
									fill="#3056D3"
									stroke="#3056D3"
								/>
							</svg>
						</div>
					</button>
					<div class="faq-content hidden pl-[62px]">
						<p class="py-3 text-base leading-relaxed text-white">
							It takes 2-3 weeks to get your first blog post ready. That includes the in-depth
							research & creation of your monthly content marketing strategy that we do before
							writing your first blog post, Ipsum available .
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- ====== Faq Section End -->
