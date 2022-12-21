<ImageDetails collection={ collection } />

<script lang="ts">
    import type { PageData } from './$types'
    import ImageDetails from '$lib/components/ImageDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    export const { collection } = data

    // $: console.log("image collection", collection)
</script>