<script lang="ts">
    import FeatureCardSlider from "$lib/components/molecules/FeatureCardSlider.svelte";
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;
</script>


<section
    class="pt-20 bg-[#FFFBA0] pb-8 lg:pt-[120px] lg:pb-[70px] border-b overflow-x-hidden"
     use:storyblokEditable={blok}
>
    <div class="container">
        <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
                <div class="mb-12 max-w-[800px] lg:mb-20">
                    <h2 class="mb-4 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
                        {blok.title}
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="custom-breakout">
            <FeatureCardSlider slides="{blok.items}" />
        </div>
    </div>
</section>

