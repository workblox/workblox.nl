<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import Anchor from '$lib/components/atoms/anchor.svelte';
	import StarSvg from '$lib/assets/svg/star.svelte';
	export let blok;
</script>

<div
	use:storyblokEditable={blok}
	class="relative overflow-hidden bg-primary border-b pt-[120px] md:pt-[130px] lg:py-[160px] border-b-dark md:h-full"
>
	<div class="container md:mx-auto h-full">
		<StarSvg class="h-6 absolute top-[12%] lg:top-[24%] left-[20%] lg:left-[35%] inline-flex" />
		<StarSvg class="h-6 absolute top-[8%] lg:top-[14%] right-[27%] inline-flex" />
		<StarSvg class="h-6 absolute top-[30%] right-[10%] inline-flex" />
		<div class="-mx-4 flex flex-wrap items-center h-full">
			<div class="w-full flex flex-col lg:flex-row px-4 h-full md:h-auto">
				<img
					src="{blok.imageMobile.filename}"
					alt="{blok.imageMobile.alt}"
					width="229"
					height="296"
					class="order-2 lg:hidden mx-auto max-w-full"
				/>
				{#if blok.imageTablet}
					<img
						src="{blok.imageTablet.filename}"
						alt="{blok.imageTablet.alt}"
						width="272"
						height="516"
						class="hidden lg:flex xl:hidden"
					/>
				{/if}
				<img
					src="{blok.imageDesktop.filename}"
					alt="{blok.imageDesktop.alt}"
					width="753"
					height="616"
					class="hidden xl:flex -ml-[15vw] hidden mx-auto max-w-full"
				/>
				<div class="flex order-1 lg:ml-24 2xl:ml-40 justify-end xl:justify-start xl:pt-28 items-start flex-col">
					<h1
						class="mb-8 text-[44px] font-medium leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug"
					>
						{blok.title}
					</h1>
					<p
						class="mb-8 xl:mb-24 max-w-[600px] text-dark-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
					>
						{blok.description}
					</p>
					<div class="flex justify-between w-full mb-8">
						<Anchor href="{blok.cta[0].url.cached_url}">
							{blok.cta[0].label}
						</Anchor>
						{#if blok.subtitle}
							<span>{blok.subtitle}</span>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- ====== Hero Section End -->
