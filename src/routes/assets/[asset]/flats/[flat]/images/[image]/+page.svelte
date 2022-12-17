<ImageDetails collection={coll} current={currentImageID} />


<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types'
    import ImageDetails from '$lib/components/ImageDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    export let { coll, currentImageID } = data

    // export const asset = 
</script>