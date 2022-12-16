<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">
            <!-- { JSON.stringify(site.companyName) } -->
            <Content blocks={ site.companyName } />
            <!-- { JSON.stringify(site) } -->
            <!-- <Content class="welcome" :blocks="greet()" /> -->
            <!-- <Content class="company" :blocks="site.companyName" /> -->
        </div>
    </h1>
    <div class="">
        <Overview assets={assets} />
    </div>
</div>


<script lang=ts>
import Content from '$lib/components/Content.svelte'
import Overview from '$lib/components/Overview.svelte'
import type { PageData } from './$types'
import type { Asset } from '$lib/types'
/** @type {import('./$types').PageData} */

export let data:PageData
let { site, assets } = data

$: ({ site, assets } = data)
// $: console.log("site",site)
// import { site } from '../lib/store'
  
</script>
