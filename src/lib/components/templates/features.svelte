<script lang="ts">
	import Card from '$lib/components/atoms/card.svelte';
	import DragAndDropSvg from '$lib/assets/svg/dragdrop.svelte';
	import SaveTimeSvg from '$lib/assets/svg/savetime.svelte';
	import TipsTricksSvg from '$lib/assets/svg/tipstricks.svelte';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<!-- ====== Features Section Start -->
<section id="features" class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b">
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mb-12 max-w-[800px] lg:mb-20">
					<h2 class="mb-4 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
						{$LL.features.title()}
					</h2>
				</div>
				<div class="mb-12 flex flex-col lg:flex-row lg:mb-20">
					<Card title={$LL.features.feature1.title()} subtitle={$LL.features.feature1.subtitle()}>
						<slot name="icon"><DragAndDropSvg /></slot>
					</Card>
					<Card title={$LL.features.feature2.title()} subtitle={$LL.features.feature2.subtitle()}>
						<slot name="icon"><TipsTricksSvg /></slot>
					</Card>
					<Card title={$LL.features.feature3.title()} subtitle={$LL.features.feature3.subtitle()}>
						<slot name="icon"><SaveTimeSvg /></slot>
					</Card>
				</div>
			</div>
		</div>
	</div>
</section>
