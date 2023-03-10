<script>
    import Features from '$lib/components/templates/features.svelte';
    import Faq from '$lib/components/templates/faq.svelte';
    import Contact from '$lib/components/templates/contact.svelte';
    import Footer from '$lib/components/templates/footer.svelte';
    import { onMount } from 'svelte';
    import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
    export let data;
    onMount(() => {
        if (data.story) {
            useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
        }
    });

</script>

<svelte:head>
    <title>{data.story.name}</title>
</svelte:head>
{#if data.story}
    <StoryblokComponent blok={data.story.content} />
{/if}

<Features />
<!--<About />-->
<!--<Pricing />-->
<Contact />
<Faq />
<Footer />