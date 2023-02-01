<script lang="ts">
	import Card from '$lib/components/atoms/card.svelte';
	import DragAndDropSvg from '$lib/assets/svg/dragdrop.svelte';
	import SaveTimeSvg from '$lib/assets/svg/savetime.svelte';
	import TipsTricksSvg from '$lib/assets/svg/tipstricks.svelte';
</script>

<!-- ====== Features Section Start -->
<section id='features' class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b">
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mb-12 max-w-[800px] lg:mb-20">
					<h2 class="mb-4 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
						Het bieden van de beste service kostte nog nooit zo weinig moeite.
					</h2>
				</div>
				<div class="mb-12 flex flex-col lg:flex-row lg:mb-20">
					<Card title='Drag-and-drop interface.' subtitle='Geen technische kennis nodig.'>
						<slot name="icon"><DragAndDropSvg /></slot>
					</Card>
					<Card title='Tips & tricks.' subtitle='We helpen je manier van werken om te zetten in workflows.'>
						<slot name="icon"><TipsTricksSvg /></slot>
					</Card>
				<Card title='Bespaar tijd.' subtitle='Automatiseer repetitieve handelingen. '>
						<slot name="icon"><SaveTimeSvg /></slot>
					</Card>
				</div>
			</div>
		</div>
	</div>
</section>