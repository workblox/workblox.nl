<script lang="ts">
	import { storyblokEditable } from "@storyblok/svelte";
	import LL from '$lib/i18n/i18n-svelte';
	export let blok;
</script>

<section
	id="contact"
	class="relative py-20 md:py-[120px]"
	use:storyblokEditable={blok}
>
	<div class="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-rum-swizzle lg:h-[45%] xl:h-1/2"></div>
	<div class="container px-4">
		<div class="-mx-4 flex flex-wrap items-center">
			<div class="w-full px-4 lg:w-7/12 xl:w-8/12">
				<div class="ud-contact-content-wrapper">
					<div class="ud-contact-title mb-12">
						<span class="mb-5 text-base font-semibold text-dark">{blok.title}</span>
						<h2 class="text-[35px] font-semibold">
							{blok.subtitle}
						</h2>
					</div>
				</div>
			</div>
			<div class="w-full px-4">
				<div class="rounded-lg bg-spanish-white border border-dark py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]">
					<h3 class="mb-2 text-2xl font-semibold md:text-[26px]">{blok.formTitle}</h3>
					<div class="mb-8 text-sm text-neutral-700">{blok.formSubtitle}</div>
					<form name="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
						<input type="hidden" name="form-name" value="contact-form"/>
						<input type="hidden" name="bot-field"/>

						<div class="flex flex-col lg:flex-row gap-8 mb-6">
							<div class="w-full lg:w-4/12">
								<label for="branche" class="block text-xs text-dark mb-2">Branche*</label>
								<select id="branche" name="branche" class="w-full border-0 bg-rum-swizzle border-b border-[#f1f1f1] p-4 focus:border-primary focus:outline-none" required>
									<option value="" disabled selected hidden>Kies uw branche</option>
									<option value="health">Zorg en welzijn</option>
									<option value="advisory">Adviseur / coach</option>
									<option value="online">ICT / online diensten</option>
									<option value="construction">Bouw en constructie</option>
									<option value="events">Evenementen</option>
								</select>
							</div>
							<div class="w-full lg:w-4/12">
								<label for="size" class="block text-xs text-dark mb-2">Organisatie grootte*</label>
								<select id="size" name="organization-size" class="w-full border-0 bg-rum-swizzle border-b border-[#f1f1f1] p-4 focus:border-primary focus:outline-none" required>
									<option value="" disabled selected hidden>Aantal medewerkers</option>
									<option value="1-2">1 - 2</option>
									<option value="2-10">2 - 10</option>
									<option value="10-50">10 - 50</option>
									<option value="50-100">50 - 100</option>
									<option value="100+">100+</option>
								</select>
							</div>
							<div class="w-full lg:w-4/12">
								<label for="email" class="block text-xs text-dark mb-2">{$LL.email()}*</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder={$LL.placeholder.email()}
									class="w-full border-0 bg-rum-swizzle border-b border-[#f1f1f1] p-4 focus:border-primary focus:outline-none"
									required
								/>
							</div>
						</div>
						<div class="mb-0">
							<button
								type="submit"
								class="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-sky-200"
							>
								{$LL.send()}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>