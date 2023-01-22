<script lang='ts'>
	import { LL } from '$lib/i18n/i18n-svelte';
	import Button from '$lib/components/atoms/button.svelte';
</script>

<!-- ====== Hero Section Start -->
<div
	id="home"
	class="relative overflow-hidden bg-primary py-[120px] md:py-[130px] lg:py-[160px] border-b border-b-dark"
>
	<div class="container">
		<div class="-mx-4 flex flex-wrap items-center">
			<div class="w-full flex px-4">
				<div class='hidden lg:flex'>
					<img
						src="assets/images/hero/app.png"
						alt="hero"
						class="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
					/>
				</div>
				<div
					class="flex justify-center items-start flex-col wow fadeInUp"
					data-wow-delay=".2s"
				>
					<h1
						class="mb-8 text-[44px] font-medium leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug"
					>
						{$LL.payoffs.main()}
					</h1>
					<p
						class="mb-10 max-w-[600px] text-dark-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
					>
						{$LL.payoffs.main_sub()}
					</p>
					<Button>
						{$LL.register()}
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- ====== Hero Section End -->