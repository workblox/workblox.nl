<script lang="ts">
	export let title = '';
	export const href = '';
	export let subtitle = '';
</script>

<div
	class="flex flex-row items-center mt-8 ml-4 bg-spring-wood border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4"
>
	<div class="flex flex-shrink-0">
		<slot nam="icon" />
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
