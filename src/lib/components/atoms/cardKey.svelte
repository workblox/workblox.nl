<script lang="ts">
	export let title;
	export let subtitle;
	export let index;

	const typeClassMap = [
		'bg-[#EBFFDB]',
		'bg-[#D5E9F8]',
		'bg-[#FFFBA0]',
		'bg-[#C5B6F0]',
		'bg-[#FEF4DB]'
	];

	const imageSrcMap = [
		'/assets/images/icons/check.svg',
		'/assets/images/icons/chart.svg',
		'/assets/images/icons/marker.svg',
	];
</script>

<div
	class="{typeClassMap[index]} card{index + 1} w-full flex flex-col border border-gray-200 rounded-lg shadow p-6"
>
	<img src="{imageSrcMap[index]}" alt="{title}" width="42" height="42" />
	<div class="flex flex-col mt-[120px]">
		<data value="{index + 1}" class="font-bold text-[34px]">{index + 1}</data>
		<h4 class="font-medium text-3xl pb-5 mb-5 border-b-2">{title}</h4>
		<p class="pb-8">{subtitle}</p>
	</div>
</div>

<style lang="postcss">
	.card1 {
		@media (min-width: 720px) {
			grid-area: 1 / 1 / 2 / 7;
		}

		@media (min-width: 960px) {
			grid-area: 1 / 1 / 2 / 5;
		}
	}

	.card2 {
		@media (min-width: 720px) {
			grid-area: 1 / 7 / 2 / 13;
		}

		@media (min-width: 960px) {
			grid-area: 1 / 5 / 2 / 9;
		}
	}

	.card3 {
		@media (min-width: 720px) {
			grid-area: 2 / 4 / 3 / 10;
		}

		@media (min-width: 960px) {
			grid-area: 1 / 9 / 2 / 13;
		}
	}
</style>