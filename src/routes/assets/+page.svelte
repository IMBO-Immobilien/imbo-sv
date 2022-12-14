<h1>All Assets</h1>
{site}

<script lang="ts">
    import { page } from '$app/stores'
    import client from "$lib/sanityClient"
    import { siteData } from '$lib/queries'
    // import type { Site } from '$lib/types'
    export let site = {}

    export const get = async () => {
        let d = await client.fetch(siteData) 
        site = d[0] 
        console.log("site", site)
    }
    get()

</script>