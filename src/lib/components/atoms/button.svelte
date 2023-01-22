<script lang="ts">
	export const type = 'button';
</script>

<button
	type="{type}"
	class="inline-flex items-center justify-center rounded bg-dark py-4 px-6 text-white font-medium text-dark transition duration-300 ease-in-out hover:bg-dark"
>
	<slot />
</button>