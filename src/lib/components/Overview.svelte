{#each assets as a}
<div>{ a.nameDE }</div>
{/each}

<script lang="ts">
    import { get } from 'svelte/store'
    import { siteData } from '$lib/store'
    import type { Asset } from '$lib/types'
    // const site = get(siteData)

    export let assets:Asset[] = []
</script>