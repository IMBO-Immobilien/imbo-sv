<h1>Asset Details - {$page.params.slug}</h1>
<div>{JSON.stringify(asset)}</div>

<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    let { asset } = data

    // export const asset = 
</script>