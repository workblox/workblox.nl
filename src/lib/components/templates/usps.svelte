<script lang="ts">
	import CardSmall from '$lib/components/atoms/cardSmall.svelte';
	import DragAndDropSvg from '$lib/assets/svg/dragdrop.svelte';
	import SaveTimeSvg from '$lib/assets/svg/savetime.svelte';
	import TipsTricksSvg from '$lib/assets/svg/tipstricks.svelte';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<!-- ====== USPS Section Start -->
<section id="usps" class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b">
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mb-12 max-w-[800px] lg:mb-20">
					<h2 class="mb-4 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
						{$LL.usps.title()}
					</h2>
				</div>
				<div class="mb-12 flex flex-col lg:flex-row lg:mb-20">
					<CardSmall title={$LL.usps.usp1.title()} subtitle={$LL.usps.usp1.subtitle()}>
						<slot name="icon"><DragAndDropSvg /></slot>
					</CardSmall>
					<CardSmall
						title={$LL.usps.usp2.title()}
						subtitle={$LL.usps.usp2.subtitle()}
						class="lg:ml-4"
					>
						<slot name="icon"><TipsTricksSvg /></slot>
					</CardSmall>
					<CardSmall
						title={$LL.usps.usp3.title()}
						subtitle={$LL.usps.usp3.subtitle()}
						class="lg:ml-4"
					>
						<slot name="icon"><SaveTimeSvg /></slot>
					</CardSmall>
				</div>
			</div>
		</div>
	</div>
</section>
