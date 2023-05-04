<script lang="ts">
	import {onMount} from "svelte";
	import {debounce} from "$lib/utils/debounce";

	export let slides = [];

	let slideElement;
	let slideElements;

	let activeSlideIndex = 0;

	onMount(() => {
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
		{#each slides as slide, i}
			<div
				class="relative snap-center z-0 inline-flex rounded-2xl overflow-hidden lg:mt-0 w-[85%] md:w-[60vw] xl:w-[70vw] 2xl:w-[55vw] h-[70vh] md:h-[550px] lg:h-[450px] shrink-0 border border-gray-200 rounded-lg shadow"
				id="slide-{i}"
				data-role="slide"
			>
				<img
					class="absolute w-full h-full object-cover"
					src="{slide.backgroundImage.filename + '/m/990x0'}"
					alt="{slide.backgroundImage.alt}"
					loading="{i < 3 ? 'eager'  : 'lazy'}"
					width="990"
					height="660"
				/>
				<div class="image-card flex flex-col lg:flex-row gap-6 justify-between w-full z-10 pt-6 px-6 lg:px-12 lg:pt-12">
					<div class="flex flex-col justify-between text-rum-swizzle lg:pt-16 lg:mb-4">
						<span class="text-[16px] md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">{slide.text}</span>
						<div class="flex flex-col">
							<span class="font-semibold mt-6">{slide.title}</span>
							<span class="font-light">{slide.subtitle}</span>
						</div>
					</div>

					<img
						class="object-cover self-center lg:self-end sm:h-[80%] lg:h-[85%] xl:h-full"
						src="{slide.featuredImage.filename + '/m/400x0'}"
						alt="{slide.featuredImage.alt}"
						height="530"
						width="440"
						loading="{i < 3 ? 'eager'  : 'lazy'}"
					/>
				</div>
			</div>
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
				/>
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

	.image-card {
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
