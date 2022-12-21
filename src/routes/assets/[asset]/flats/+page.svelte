<h1>flats</h1>
<div>{params.asset}</div>

<script lang="ts">
    import { page } from '$app/stores'
    export const prerender = true

    $: params = $page.params
</script>