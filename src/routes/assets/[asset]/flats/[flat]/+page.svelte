<FlatDetails flat={flat} />


<script lang="ts">
    import { page } from '$app/stores'
    import type { PageData } from './$types'
    import FlatDetails from '$lib/components/FlatDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    export let { flat } = data

    // export const asset = 
</script>