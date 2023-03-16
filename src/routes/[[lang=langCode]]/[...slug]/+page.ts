export async function load({ params, parent }) {
    const { storyblokApi } = await parent();
    const slug = params.slug;
    let path = 'cdn/stories/';
    if (slug) {
        path += slug;
    } else {
        path += 'home';
    }

    const dataStory = await storyblokApi.get(path, {
        version: 'published',
        language: params.lang
    });

    return {
        story: dataStory.data.story
    };

}