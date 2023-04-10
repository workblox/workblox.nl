<script lang="ts">
  import '../app.postcss';
  import Navigation from '$lib/components/templates/navigation.svelte'
  import Footer from '$lib/components/templates/footer.svelte'
  export let data;

  import { page } from '$app/stores'

  $: {
    if (typeof gtag !== 'undefined') {
      // eslint-disable-next-line no-undef
      gtag('config', 'G-KWEP5KJRXB', {
        page_title: document.title,
        page_path: $page.url.pathname,
      })
    }
  }
</script>

<svelte:head>
  <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KWEP5KJRXB">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'G-KWEP5KJRXB')
  </script>
</svelte:head>

<Navigation data={data.header}/>
<slot />
<Footer data={data.footer} />

<a
  href="/"
  class="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-dark shadow-md transition duration-300 ease-in-out hover:bg-dark"
>
  <span
    class="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"
  ></span>
</a>
