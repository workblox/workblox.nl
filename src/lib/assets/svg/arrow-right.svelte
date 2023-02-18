<script lang="ts">
	export let height = 14;
	export let width = 17;
	let clazz = '';
	export { clazz as class };
</script>

<svg
	class={`${clazz}`}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{width}
	{height}
	viewBox="0 0 18 14"
>
	<path
		stroke="#fff"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="1.5"
		d="M2.688 7h12.624m-3.937-3.937L15.313 7l-3.938 3.938"
	/>
</svg>
