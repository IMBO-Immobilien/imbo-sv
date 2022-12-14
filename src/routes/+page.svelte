<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">
            <!-- {data} -->
            <!-- <Content class="welcome" :blocks="greet()" /> -->
            <!-- <Content class="company" :blocks="site.companyName" /> -->
        </div>
    </h1>
    <div class="">
        <!-- <Overview /> -->
    </div>
</div>

<script context="module">
    declare interface Data {
        site: Site[]
    }
</script>

<script lang="ts">
    import type { Site } from '$lib/types'

    /** @type {import('./$types').PageData} */
    export let data:Data
    console.log("data",data.site[0])
    // import { site } from '../lib/store'
  
    // console.log($site) // [{ slug: 'profile', title: 'Profile' }, ...]
</script>
