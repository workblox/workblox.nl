<script lang="ts">
	import LanguageSwitcher from '$lib/components/templates/languageSwitcher.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';
	let showMobileMenu = false;
</script>

<!-- ====== Navbar Section Start -->
<div class="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent sticky">
	<div class="container">
		<div class="relative -mx-4 flex items-center justify-between">
			<div class="w-60 max-w-full px-4">
				<a href="/" class="navbar-logo block w-full py-5" on:click={() => (showMobileMenu = false)}>
					<img src="/assets/images/logo/logo-white.svg" alt="logo" class="header-logo w-full" />
				</a>
			</div>
			<div class="flex w-full items-center justify-between px-4">
				<div>
					<button
						id="navbarToggler"
						class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden {showMobileMenu
							? 'navbarTogglerActive'
							: ''}"
						on:click={() => (showMobileMenu = !showMobileMenu)}
					>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-dark" />
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-dark" />
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-dark" />
					</button>
					<nav
						id="navbarCollapse"
						class="absolute right-4 left-4 w-[calc(100%-2rem)] top-full w-full rounded-lg bg-white w-full py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6 {!showMobileMenu
							? 'hidden'
							: ''}"
					>
						<ul class="block lg:flex">
							<li class="group relative">
								<a
									href="#features"
									class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-dark lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-dark lg:group-hover:text-dark lg:group-hover:opacity-70 xl:ml-12"
									on:click={() => (showMobileMenu = false)}
								>
									{$LL.navigation.features.title()}
								</a>
							</li>
							<li class="group relative">
								<a
									href="#features"
									class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-dark lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-dark lg:group-hover:text-dark lg:group-hover:opacity-70 xl:ml-12"
									on:click={() => (showMobileMenu = false)}
								>
									{$LL.navigation.industries.title()}
								</a>
							</li>
							<li class="group relative">
								<a
									href="#features"
									class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-dark lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-dark lg:group-hover:text-dark lg:group-hover:opacity-70 xl:ml-12"
									on:click={() => (showMobileMenu = false)}
								>
									{$LL.navigation.product.title()}
								</a>
							</li>
							<li class="group relative">
								<a
									href="/contact"
									class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-dark lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-dark lg:group-hover:text-dark lg:group-hover:opacity-70 xl:ml-12"
									on:click={() => (showMobileMenu = false)}
								>
									{$LL.navigation.more.title()}
								</a>
							</li>
							<LanguageSwitcher on:click={() => (showMobileMenu = false)} />
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- ====== Navbar Section End -->
