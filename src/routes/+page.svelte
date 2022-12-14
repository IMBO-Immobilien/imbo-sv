<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">
            {data.site[0]}
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
    export let data;
    console.log("data",data.site[0])
    // import { site } from '../lib/store'
  
    // console.log($site) // [{ slug: 'profile', title: 'Profile' }, ...]
</script>
