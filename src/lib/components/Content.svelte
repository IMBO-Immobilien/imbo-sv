<PortableText value={ blocks } />

<script lang="ts">
    import { PortableText } from '@portabletext/svelte'
    import type { PortableTextBlock } from '$lib/types'

    export let blocks = <PortableTextBlock[]>[]
</script>

