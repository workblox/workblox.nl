<script lang="ts">
	export let title;
	export let subtitle;

	let clazz = '';
	export { clazz as class };
</script>

<div
	class="{`${clazz}`} flex flex-row items-center mt-8 lg:mt-0 bg-spring-wood border border-gray-200 rounded-lg shadow p-4"
>
	<div class="flex flex-shrink-0">
		<slot />
	</div>
	<div class="flex flex-col justify-between p-4 leading-normal">
		<div>
			<span class="text-base font-semibold tracking-tight text-black">
				{title}
			</span>
			<span class="text-base font-semibold text-gray">{subtitle}</span>
		</div>
	</div>
</div>
