<script lang="ts">
	import {onMount} from "svelte";
	import {debounce} from "$lib/utils/debounce";

	export let slides = [];

	let slideElement;
	let slideElements;

	export let activeSlideIndex = 0;

	onMount(() => {
		slideElements = slideElement.querySelectorAll('.imageCard');
	})

	const handleScroll = debounce(() => {
		slideElements.forEach((element, i) => {
			const isElementInViewport = isInViewport(element);
			if (!isElementInViewport) return;

			activeSlideIndex = i;
		});
	}, 150);

	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function doNavigate(number: number) {
		if (number > slideElements.length - 1) {
			activeSlideIndex = 0;
		} else if (number < 0) {
			activeSlideIndex = slideElements.length - 1;
		} else {
			activeSlideIndex = number;
		}
		slideElements[activeSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
	}
</script>


<div bind:this={slideElement}>
	<div
		class="image-slider custom-breakout-correction relative flex gap-4 snap-x snap-mandatory overflow-x-auto mb-10 hide-scroll-bar"
		on:scroll={(event) => {handleScroll(event)}}
	>
		{#each slides as slide, i}
			<div
				class="imageCard lg:flex-row pt-6 px-6 lg:px-12 lg:pt-12 items-center relative inline-flex rounded-2xl overflow-hidden bg-cover bg-center snap-center flex flex-col gap-6 justify-between mt-8 lg:mt-0 w-[85%] md:w-[60vw] xl:w-[70vw] 2xl:w-[55vw] shrink-0 border border-gray-200 rounded-lg shadow"
				style="background-image: url({slide.backgroundImage.filename + '/m/990x0'});"
				data-slide={slide}
			>
				<div class="flex flex-col text-rum-swizzle pt-4 lg:pt-20 mb-4">
					<span class="text-lg 2xl:text-3xl font-semibold">{slide.text}</span>
					<span class="font-semibold mt-6">{slide.title}</span>
					<span class="font-light">{slide.subtitle}</span>
				</div>
				<img
					class="lg:self-end"
					src="{slide.featuredImage.filename + '/m/670x0'}"
					alt="{slide.featuredImage.alt}"
					loading="{i > 1 ? 'lazy' : 'eager'}"
					width="229"
					height="296"
				/>
			</div>
		{/each}
	</div>
	<div class="container flex justify-center lg:justify-between">
		<div class="flex gap-2">
			{#each slides as slide, i}
				<button
					class="bullet-button"
					type="button"
					data-index={i}
					aria-label="Slide {i}"
					active={i === activeSlideIndex || null}
					aria-current={i === activeSlideIndex || null}
					on:click={() => doNavigate(i)}
				/>
			{/each}
		</div>
		<div class="hidden lg:flex gap-2">
			<button class="prevButton" type="button" on:click={() => doNavigate(activeSlideIndex - 1)}>‹</button>
			<button class="nextButton" type="button" on:click={() => doNavigate(activeSlideIndex + 1)}>›</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.prevButton, .nextButton {
		font-size: 2.5rem;
		line-height: 2.5rem;
		width: 2rem;
		height: 2rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.4);
		}
	}

	.image-slider {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}
	}

	.imageCard {
		box-shadow: rgba(0, 0, 0, 0.7) 0 0 0 1000000px inset;
	}

	.bullet-button {
		display: inline-block;
		width: 18px;
		height: 18px;
		font-size: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;
		outline: none;
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
