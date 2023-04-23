<script>
    import { onMount } from 'svelte';
    import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
    export let data;
    onMount(() => {
        useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
    });

    import TeaserImageSliderTemplate from "$lib/components/templates/TeaserImageSliderTemplate.svelte";
</script>

<svelte:head>
    <title>{data.story.name}</title>
</svelte:head>

{#if data.story}
    <TeaserImageSliderTemplate />
    <StoryblokComponent blok={data.story.content} />
{/if}