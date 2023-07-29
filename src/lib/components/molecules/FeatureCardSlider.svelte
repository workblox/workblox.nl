<script lang="ts">
	import {onMount} from "svelte";
	import {debounce} from "$lib/utils/debounce";
	import CardFeature from '$lib/components/atoms/cardFeature.svelte';
	import { page } from '$app/stores';

	export let slides = [];

	let slideElement;
	let slideElements;

	let activeSlideIndex = 0;

	onMount(() => {
		const utmCampaignId = new URLSearchParams($page.url.search).get('utm_campaign');
		const indexOfSlideToMove = slides.findIndex((slide) => slide.id == utmCampaignId)

		if (indexOfSlideToMove > 0) {
			slides.unshift(slides.splice(indexOfSlideToMove, 1)[0]);
			slides = slides;
		}

		slideElements = slideElement.querySelectorAll('[data-role="slide"]');
	})

	const handleScroll = debounce((): void => {
		slideElements.forEach((element, i) => {
			const isElementInViewport = isInViewport(element);
			if (!isElementInViewport) return;
			activeSlideIndex = i;
		});
	}, 200);

	function isInViewport(element): boolean {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function doNavigate(number: number): void {
		if (number > slideElements.length - 1) {
			activeSlideIndex = 0;
		} else if (number < 0) {
			activeSlideIndex = slideElements.length - 1;
		} else {
			activeSlideIndex = number;
		}
		slideElements[activeSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
	}
</script>


<div class="mt-8" bind:this={slideElement}>
	<div
		class="image-slider custom-breakout-correction relative flex gap-4 snap-x snap-mandatory overflow-x-auto mb-6 lg:mb-10 hide-scroll-bar"
		on:scroll={(event) => {handleScroll(event)}}
	>
		{#each slides as { title, subtitle, text, backgroundImage, featuredImage }, i}
			<CardFeature
				title={title}
				subtitle={subtitle}
				text={text}
				backgroundImage={backgroundImage}
				featuredImage={featuredImage}
				index={i}
			/>
		{/each}
	</div>
	<div class="container flex justify-center lg:justify-between">
		<div class="flex gap-2">
			{#each slides as slide, i}
				<button
					class="bullet-button"
					aria-label="Slide {i}"
					active={i === activeSlideIndex || null}
					aria-current={i === activeSlideIndex || null}
					on:click|preventDefault={() => doNavigate(i)}
				></button>
			{/each}
		</div>
		<div class="hidden lg:flex gap-2">
			<button class="prev-button" type="button" on:click={() => doNavigate(activeSlideIndex - 1)}>
				<img width="19" height="30" alt="slide navigate left" src="/assets/images/navigation/chevron-left.svg"/>
			</button>
			<button class="next-button" type="button" on:click={() => doNavigate(activeSlideIndex + 1)}>
				<img width="19" height="30" alt="slide navigate right" src="/assets/images/navigation/chevron-right.svg"/>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.prev-button, .next-button {
		display: flex;
		padding: 0.5rem;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.2);
		}
	}

	.image-slider {
		scroll-behavior: smooth;

		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}
	}

	.bullet-button {
		display: inline-block;
		width: 18px;
		height: 18px;
		font-size: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;
		box-sizing: border-box;
		transition: transform 0.2s ease-in-out;
		border: 2px solid black;
		border-radius: 50%;

		&:hover {
			background: rgba(0, 0, 0, 0.8);
		}

		&[active] {
			background-color: black;
			padding: 0;
			transform: scale(1.4);
		}
	}
</style>
