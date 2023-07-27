<script lang="ts">
    import { storyblokEditable } from "@storyblok/svelte";

    import CardKey from '$lib/components/atoms/cardKey.svelte';
    export let blok = {
        title: 'Alles wat je nodig hebt om je bedrijf een boost te geven.',
        items: [
            {
                title: 'Ontwikkel nieuwe diensten',
                subtitle: 'Vorm de dingen die je vaak als ‘extraatje’ doet om in diensten.',
                image: '#'
            },
            {
                title: 'Concurreer makkelijker op prijs',
                subtitle: 'Omdat je efficiënter en sneller werkt dan je concurrenten.',
                image: '#'
            },
            {
                title: 'Vergroot je afzetgebied',
                subtitle: 'Door alleen fysiek af te spreken wanneer het nodig is.',
                image: '#'
            },
        ]
    };
</script>

<section
        class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] border-b"
        use:storyblokEditable={blok}
>
    <div class="container">
        <div class="flex flex-wrap">
                <div class="mb-12 max-w-[800px] lg:mb-20 px-4">
                    <h2 class="text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
                        {blok.title}
                    </h2>
                </div>
                <div class="card-key-container w-full">
                {#each blok.items as { title, subtitle }, i}
                    <CardKey
                        title={title}
                        subtitle={subtitle}
                        index={i}
                    >
                    </CardKey>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .card-key-container {
        display: grid;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;

        @media (min-width: 720px) {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

        @media (min-width: 960px) {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 1fr;
        }
    }
</style>
