<AssetDetails asset={asset[0]} />
<!-- <div>{JSON.stringify(asset)}</div> -->

<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types'
    import AssetDetails from '$lib/components/AssetDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    let { asset } = data

    // export const asset = 
</script>