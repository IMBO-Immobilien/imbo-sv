<AssetDetails asset={asset} />

<script lang="ts">
    import type { PageData } from './$types'
    import AssetDetails from '$lib/components/AssetDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    const { asset } = data
</script>