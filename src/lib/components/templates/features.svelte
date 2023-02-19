<script lang="ts">
	import Card from '$lib/components/atoms/card.svelte';
	import DragAndDropSvg from '$lib/assets/svg/dragdrop.svelte';
	import FeatureCentralized from '$lib/assets/svg/featureCentralized.svelte';
	import FeatureExtraServices from '$lib/assets/svg/featureExtraServices.svelte';
	import FeatureCommunication from '$lib/assets/svg/featureCommunication.svelte';
	import FeaturePath from '$lib/assets/svg/featurePath.svelte';
	import FeatureStyled from '$lib/assets/svg/featureStyled.svelte';
	import SaveTimeSvg from '$lib/assets/svg/savetime.svelte';
	import TipsTricksSvg from '$lib/assets/svg/tipstricks.svelte';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<!-- ====== Features Section Start -->
<section id="features" class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b">
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full">
				<div class="mb-12 max-w-[800px] lg:mb-20 px-4">
					<h2 class="text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
						{$LL.features.title()}
					</h2>
				</div>
				<div class="flex gap-4 snap-x pl-4 snap-proximity overflow-x-auto pb-10 hide-scroll-bar">
						<Card
							title={$LL.features.feature1.title()}
							items="{[$LL.features.feature1.item1(), $LL.features.feature1.item2()]}"
							class="bg-[#EBFFDB] snap-center"
						>
							<slot><FeaturePath /></slot>
						</Card>
						<Card
							title={$LL.features.feature2.title()}
							items="{[$LL.features.feature2.item1(), $LL.features.feature2.item2()]}"
							class="bg-[#FFFBA0] snap-center"
						>
							<slot><FeatureCommunication class="-mb-6" /></slot>
						</Card>
						<Card
							title={$LL.features.feature3.title()}
							items="{[$LL.features.feature3.item1(), $LL.features.feature3.item2()]}"
							class="bg-[#C5B6F0] snap-center"
						>
							<slot><FeatureCentralized class="-mb-6" /></slot>
						</Card>
						<Card
							title={$LL.features.feature4.title()}
							items="{[$LL.features.feature4.item1(), $LL.features.feature4.item2()]}"
							class="bg-[#D5E9F8] snap-center"
						>
							<slot><FeatureExtraServices /></slot>
						</Card>
						<Card
							title={$LL.features.feature5.title()}
							items="{[$LL.features.feature5.item1(), $LL.features.feature5.item2()]}"
							class="bg-[#FEF4DB] snap-center"
						>
							<slot><FeatureStyled /></slot>
						</Card>
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
