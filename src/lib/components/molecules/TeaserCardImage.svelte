<script lang="ts">
	export let images = [
		{
			src: 'https://www.aidulac.nl/thumbnail/cd/67/fd/1629206126/Agenda_1920x1920.jpg',
			alt: 'test'
		},		{
			src: 'https://www.aidulac.nl/thumbnail/cd/67/fd/1629206126/Agenda_1920x1920.jpg',
			alt: 'test'
		},		{
			src: 'https://www.aidulac.nl/thumbnail/cd/67/fd/1629206126/Agenda_1920x1920.jpg',
			alt: 'test'
		},		{
			src: 'https://www.aidulac.nl/thumbnail/cd/67/fd/1629206126/Agenda_1920x1920.jpg',
			alt: 'test'
		},		{
			src: 'https://www.aidulac.nl/thumbnail/cd/67/fd/1629206126/Agenda_1920x1920.jpg',
			alt: 'test'
		},		{
			src: 'https://www.aidulac.nl/thumbnail/cd/67/fd/1629206126/Agenda_1920x1920.jpg',
			alt: 'test'
		},		{
			src: 'https://www.aidulac.nl/thumbnail/cd/67/fd/1629206126/Agenda_1920x1920.jpg',
			alt: 'test'
		},
	];
	let activeId = 1;
</script>

<image-slider>
	<div class="image-slider custom-breakout-correction relative flex gap-4 snap-x snap-mandatory overflow-x-auto mb-10 hide-scroll-bar">
		{#each images as image, i}
			<div
				class="imageCard lg:flex-row pt-6 px-6 lg:px-12 lg:pt-12 items-center relative inline-flex rounded-2xl overflow-hidden lg:ml-4 bg-cover bg-center snap-center flex flex-col gap-6 justify-between mt-8 lg:mt-0 w-[85%] md:w-[60vw] xl:w-[70vw] 2xl:w-[50vw] shrink-0 border border-gray-200 rounded-lg shadow"
				style="background-image: url({image.src});"
			>
				<div class="flex flex-col text-rum-swizzle pt-4 lg:pt-20 mb-4">
					<span class="text-lg 2xl:text-3xl font-semibold">Dankzij Workblox kan ik mijn bruidsparen een naadloze en gestroomlijnde planning bieden, zonder gedoe met eindeloze e-mails en telefoontjes.</span>
					<span class="font-semibold mt-6">Margot</span>
					<span class="font-light">Wedding planner</span>
				</div>
				<img class="lg:self-end" src="https://a.storyblok.com/f/223277/574x840/bf9570e6ef/weddingplanner_mock.webp" alt=""  width="229" height="296"/>
			</div>
		{/each}
	</div>
	<div class="flex justify-between">
		<div class="flex gap-2">
			{#each images as image, i}
				<button
					class="bullet-button"
					type="button"
					data-index={i}
					aria-label="Slide {i}"
					active={i === activeId || null}
					aria-current={i === activeId || null}
				></button>
			{/each}
		</div>
		<div class="flex gap-2">
			<button type="button">←</button>
			<button type="button">→</button>
		</div>
	</div>
</image-slider>

<style lang="postcss">
	.image-slider {
		-ms-overflow-style: none;  /* Internet Explorer 10+ */
		scrollbar-width: none;  /* Firefox */

		&::-webkit-scrollbar {
			display: none;  /* Safari and Chrome */
		}
	}
	.imageCard {
		box-shadow: rgba(0, 0, 0, .7) 0 0 0 1000000px inset;
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
		transition: 0.2s ease-in-out;
		border: 2px solid black;
		border-radius: 50%;

		&:hover {
			background: rgba(0, 0, 0, 0.8);
		}

		&[active] {
			background-color: black;
			transform: scale(1.4);
		}
	}
</style>
