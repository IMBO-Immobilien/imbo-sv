<FlatDetails flat={ flat } />


<script lang="ts">
    import type { PageData } from './$types'
    import FlatDetails from '$lib/components/FlatDetails.svelte'
    /** @type {import('./$types').PageData} */

    export let data:PageData
    export const { flat } = data
</script>