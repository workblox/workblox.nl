<script lang="ts">
	export let title;
	export let image;

	let clazz = '';
	export { clazz as class };
</script>

<div
	class="{`${clazz}`} flex flex-row w-full items-center lg:mt-0 bg-spring-wood border border-gray-200 rounded-lg shadow py-4 pl-4 pr-12"
>
	<div class="flex flex-shrink-0">
		<img width="44" height="44" src="{image.filename}" alt="{image.alt}" loading="lazy">
	</div>
	<div class="flex flex-col justify-between p-4 leading-normal">
		<div>
			<span class="text-base font-semibold tracking-tight text-black">
				{title}
			</span>
		</div>
	</div>
</div>
