<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import Anchor from '$lib/components/atoms/anchor.svelte';
	import StarSvg from '$lib/assets/svg/star.svelte';
	export let blok;
</script>

<!-- ====== Hero Section Start -->
<div
	id="home"
	class="relative overflow-hidden bg-primary border-b py-[120px] md:py-[130px] lg:py-[160px] border-b-dark md:h-full"
	use:storyblokEditable={blok}
>
	<div class="container h-full">
		<StarSvg class="h-6 absolute top-[12%] lg:top-[24%] left-[20%] lg:left-[35%] inline-flex" />
		<StarSvg class="h-6 absolute top-[8%] lg:top-[14%] right-[27%] inline-flex" />
		<StarSvg class="h-6 absolute top-[30%] right-[10%] inline-flex" />
		<div class="-mx-4 flex flex-wrap items-center h-full">
			<div class="w-full flex px-4 h-full md:h-auto">
				<div class="hidden lg:flex">
					<img
						src="/assets/images/hero/app.png"
						alt="hero"
						class="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
					/>
				</div>
				<div class="flex justify-end items-start flex-col">
					<h1
						class="mb-8 text-[44px] font-medium leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug"
					>
						{blok.title}
					</h1>
					<p
						class="mb-10 max-w-[600px] text-dark-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
					>
						{blok.subtitle}
					</p>
					{#if blok.cta.url}
						<Anchor href={blok.cta.url}>
							{blok.cta.title}
						</Anchor>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
<!-- ====== Hero Section End -->
