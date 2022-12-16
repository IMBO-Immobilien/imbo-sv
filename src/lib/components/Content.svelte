<PortableText
    value={blocks}
/>

<script lang="ts">
    import { PortableText } from '@portabletext/svelte'
    import type { Block } from '$lib/types'

    export let blocks:Block[] = []
</script>