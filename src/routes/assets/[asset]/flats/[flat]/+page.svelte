<FlatDetails flat={ flat } />


<script lang="ts">
    // import { page } from '$app/stores'
    import type { PageData } from './$types'
    import FlatDetails from '$lib/components/FlatDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    export const { flat } = data
    // console.log("flat", flat)

    // export const asset = 
</script>