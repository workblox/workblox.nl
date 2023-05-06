<script lang="ts">
    export let index;
    export let title;
    export let subtitle;
    export let text;
    export let backgroundImage;
    export let featuredImage;

</script>

<div
    class="relative snap-center z-0 inline-flex rounded-2xl overflow-hidden lg:mt-0 w-[85%] md:w-[60vw] xl:w-[70vw] 2xl:w-[55vw] h-[70vh] md:h-[550px] lg:h-[450px] shrink-0 border border-gray-200 rounded-lg shadow"
    id="slide-{index}"
    data-role="slide"
>
    <img
        class="absolute w-full h-full object-cover"
        src="{backgroundImage.filename + '/m/990x0'}"
        alt="{backgroundImage.alt}"
        loading="{index < 3 ? 'eager'  : 'lazy'}"
        width="990"
        height="660"
    />
    <div class="image-card flex flex-col lg:flex-row gap-6 justify-between w-full z-10 pt-6 px-6 lg:px-12 lg:pt-12">
        <div class="flex flex-col justify-between text-rum-swizzle lg:pt-16 lg:mb-4">
            <span class="text-[16px] md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">{text}</span>
            <div class="flex flex-col">
                <span class="font-semibold mt-6">{title}</span>
                <span class="font-light">{subtitle}</span>
            </div>
        </div>

        <img
            class="w-auto object-cover self-center lg:self-end sm:h-[80%] lg:h-[85%] xl:h-full"
            src="{featuredImage.filename + '/m/400x0'}"
            alt="{featuredImage.alt}"
            height="530"
            width="440"
            loading="{index < 3 ? 'eager'  : 'lazy'}"
        />
    </div>
</div>

<style lang="postcss">
    .image-card {
        box-shadow: rgba(0, 0, 0, 0.7) 0 0 0 1000000px inset;
    }
</style>