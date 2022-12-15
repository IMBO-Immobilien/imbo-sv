<div>{ site.siteName }</div>

<script lang="ts">
    import { get } from 'svelte/store'
    import { siteData } from '$lib/store'
    const site = get(siteData)
</script>