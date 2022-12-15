<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">
            {site.alt}
            <!-- <Content class="welcome" :blocks="greet()" /> -->
            <!-- <Content class="company" :blocks="site.companyName" /> -->
        </div>
    </h1>
    <div class="">
        <!-- <Overview /> -->
    </div>
</div>


<script lang="ts">
    /** @type {import('./$types').PageData} */
    import type { Site } from '$lib/types'
    interface Data {
        site: Site[]
    }

    export const data = {} as Data
    export const site:Site = data.site[0]
    console.log("site",site)
    // import { site } from '../lib/store'
  
    // console.log($site) // [{ slug: 'profile', title: 'Profile' }, ...]
</script>
