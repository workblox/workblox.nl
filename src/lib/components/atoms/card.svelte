<script lang="ts">
	export let title;
	export let type = 'green';
	export let items = [];
	export let image = '';

	let clazz = '';
	export { clazz as class };

	const typeClassMap = {
		green: 'bg-[#EBFFDB]',
		blue: 'bg-[#D5E9F8]',
		yellow: 'bg-[#FFFBA0]',
		purple: 'bg-[#C5B6F0]',
		lightBrown: 'bg-[#FEF4DB]'
	};
	import Image from '$lib/components/atoms/image.svelte';
</script>

<div
	class="{`${clazz}`} {typeClassMap[type]} snap-center flex flex-col gap-6 justify-between mt-8 lg:mt-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[28vw] 2xl:w-[20vw] shrink-0 border border-gray-200 rounded-lg shadow p-6 last:mr-4"
>
	<h4 class="font-med	ium text-2xl text-dark md:text-[28px]">{title}</h4>
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
	<img
		src={image.filename + '/m/'}
		alt="{image.alt}"
		height="{image.filename.split('/')[5].split('x')[0]}"
		width="{image.filename.split('/')[5].split('x')[1]}"
	/>
</div>
