<script lang="ts">
import  { assetData } from '$lib/store'
</script>

<div class="menu-container">
    <div class="menu">
        <!-- {JSON.stringify($assetData)} -->
        <!-- v-if="o.slug.current" -->
        <!-- v-for="o in assets" 
        :key="o.slug.current"  -->
        {#if Array.isArray($assetData)}
        {#each $assetData as o}
            <a 
                href="{o.slug.current}"
                class="menu-link" 
            >{o.menuName}</a>
        {/each}
        {/if}
            <!-- :to="{name: 'assets-asset', params: { asset: o.slug.current }}" -->
    </div>
</div>