<h1>All Assets</h1>

<script lang=ts>
import type { PageData } from './$types'
/** @type {import('./$types').PageData} */

export let data:PageData
let { site } = data

$: ({ site } = data)
$: console.log("site",site)

</script>