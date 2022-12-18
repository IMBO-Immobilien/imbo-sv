<ImageDetails collection={collection}  />


<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types'
    import ImageDetails from '$lib/components/ImageDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    export let { collection } = data

    // export const asset = 
</script>