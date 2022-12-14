<script lang="ts">
import type { Asset } from '../types'
export var assets = <Asset[]>{}
</script>

<div class="menu-container">
    <div class="menu">
        <!-- {{assets}} -->
        <!-- v-if="o.slug.current" -->
        <!-- v-for="o in assets" 
        :key="o.slug.current"  -->
        {#each assets as o}
            <a 
                href="{o.slug.current}"
                class="menu-link" 
            >{o.menuName}</a>
        {/each}
            <!-- :to="{name: 'assets-asset', params: { asset: o.slug.current }}" -->
    </div>
</div>