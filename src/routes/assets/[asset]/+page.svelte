<AssetDetails asset={ asset } />

<script lang="ts">
    import type { PageData } from './$types'
    import AssetDetails from '$lib/components/AssetDetails.svelte'

    export let data:PageData

    export const { asset } = data
</script>