<script lang="ts">
	export let title;
	export let items = [];

	let clazz = '';
	export { clazz as class };
</script>

<div
	class="{`${clazz}`} flex flex-col gap-6 justify-between mt-8 lg:mt-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[28vw] 2xl:w-[20vw] shrink-0 border border-gray-200 rounded-lg shadow p-6 last:mr-4"
>
	<h4 class="font-medium text-2xl text-dark md:text-[28px]">{title}</h4>
	<ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
	{#each items as item}
		<li class="flex items-center space-x-3">
			<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
				<path fill="#000" d="M1.6 6.105h4.48V1.6h3.84v4.505h4.48v3.79H9.92V14.4H6.08V9.896H1.6V6.105Z"/>
			</svg>
			<span>{item}</span>
		</li>
	{/each}
	</ul>
	<slot />
</div>
