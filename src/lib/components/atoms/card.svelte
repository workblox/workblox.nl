<script lang="ts">
	export let title;
	export let index;
	export let type = 'green';
	export let items = [];
	export let image = '';

	const typeClassMap =[
		['bg-[#EBFFDB]', 'block1'],
		['bg-[#D5E9F8]', 'block2'],
		['bg-[#FFFBA0]', 'block3'],
		['bg-[#C5B6F0]', 'block4'],
		['bg-[#FEF4DB]', 'block5']
	];
</script>

<div
	class="block {typeClassMap[index].join(' ')} snap-center flex gap-6 justify-between mt-8 lg:mt-0 shrink-0 border border-gray-200 rounded-lg shadow p-6"
>
	<div class="flex block-content">
		<h4 class="font-medium text-2xl text-dark md:text-[28px] pb-8">{title}</h4>
		<ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
			{#each items as item}
				<li class="flex items-center space-x-3">
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
						<path fill="#000" d="M1.6 6.105h4.48V1.6h3.84v4.505h4.48v3.79H9.92V14.4H6.08V9.896H1.6V6.105Z"/>
					</svg>
					<span>{item.title}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="block-image flex h-full items-center justify-center">
		<img
			class="object-cover"
			src={image.filename + '/m/'}
			alt="{image.alt}"
			height="{image.filename.split('/')[5].split('x')[0]}"
			width="{image.filename.split('/')[5].split('x')[1]}"
		/>
	</div>
</div>


<style lang="postcss">
	.block-image {
		align-self: center;
		width: 300px;
	}

	.block-content {
		display: flex;
		flex-flow: column nowrap;
	}

	.block {
		display: flex;
		flex-flow: column nowrap;
	}

	.block1 {
		@media (min-width: 960px) {
			grid-area: 1 / 1 / 5 / 3;
		}

		.block-image {
			max-width: 100%;
		}
	}

	.block2 {
		@media (min-width: 960px) {
			flex-flow: row nowrap;
			grid-area: 1 / 3 / 3 / 7;
		}
	}

	.block3 {
		@media (min-width: 960px) {
			flex-flow: row nowrap;
			grid-area: 3 / 3 / 5 / 7;
		}
	}

	.block4 {
		@media (min-width: 960px) {
			grid-area: 1 / 1 / 5 / 4;
		}
	}

	.block5 {
		@media (min-width: 960px) {
			grid-area: 1 / 4 / 5 / 7;
		}
	}
</style>