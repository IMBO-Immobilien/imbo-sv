<script lang="ts">
import  { assetData } from '$lib/store'
</script>

<div class="menu-container">
    <div class="menu">
        <!-- {{assets}} -->
        <!-- v-if="o.slug.current" -->
        <!-- v-for="o in assets" 
        :key="o.slug.current"  -->
        {#each $assetData as o}
            <a 
                href="{o.slug.current}"
                class="menu-link" 
            >{o.menuName}</a>
        {/each}
            <!-- :to="{name: 'assets-asset', params: { asset: o.slug.current }}" -->
    </div>
</div>