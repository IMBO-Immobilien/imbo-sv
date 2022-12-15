<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">
            <!-- { JSON.stringify(site) } -->
            <!-- <Content class="welcome" :blocks="greet()" /> -->
            <!-- <Content class="company" :blocks="site.companyName" /> -->
        </div>
    </h1>
    <div class="">
        <!-- <Overview /> -->
    </div>
</div>


<script lang=ts>
import type { PageData } from './$types'
/** @type {import('./$types').PageData} */

export let data:PageData
let { site } = data

$: ({ site } = data)
$: console.log("site",site)
// import { site } from '../lib/store'
  
</script>
