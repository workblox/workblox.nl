<script lang="ts">
	export let title;
	export let image;

	let clazz = '';
	export { clazz as class };
</script>

<div
	class="{`${clazz}`} flex flex-row w-full items-center lg:mt-0 bg-spring-wood border border-gray-200 rounded-lg shadow py-5 pl-5 pr-12"
>
	<div class="flex flex-shrink-0">
		<img width="70" height="70" src="{image.filename}" alt="{image.alt}" loading="lazy">
	</div>
	<div class="flex flex-col justify-between p-5 leading-normal">
		<div>
			<span class="text-xl font-semibold tracking-tight text-black">
				{title}
			</span>
		</div>
	</div>
</div>
