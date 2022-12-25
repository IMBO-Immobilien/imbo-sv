<script lang="ts">
import  { assetData } from '$lib/store'
</script>

<div class="menu-container">
    <div class="menu">
        {#if Array.isArray($assetData)}
        {#each $assetData as o}
            <a 
                href="/assets/{o.slug.current}"
                class="menu-link" 
            >{o.menuName}</a>
        {/each}
        {/if}
            <!-- :to="{name: 'assets-asset', params: { asset: o.slug.current }}" -->
    </div>
</div>