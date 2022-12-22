<nav class="head-container " >
    {#if logo}
    <!-- {JSON.stringify(logo)} -->
    <a href="/">
        <img 
            alt={logo.alt} 
            class="logo" 
            class:loaded 
            bind:this={ thisImage }
            loading="lazy"
        />
            <!-- style="aspect-ratio: { logo.dimensions.aspectRatio.toString() };" -->
    </a>
    {/if}
</nav>

<script lang="ts">
    // import type { IMG } from "$lib/types"
    import { onMount } from "svelte"
    import { siteData } from "$lib/store"
    export let loaded = false

    export let thisImage = <HTMLImageElement>{}


    onMount(() => {
        if (logo?.url) {
            thisImage.onload = () => {
                loaded = true
            }

            thisImage.src = logo.url
        }
    }) 

    $: logo = $siteData.logo

</script>

<style lang="scss">
.logo {
    transform-box: fill-box;
    max-height: 40vh;
    height: 400px;
    // width: auto;
    // right: 0;
    transition: height .5s;
    transform-origin: top right;
}

.head-container {
    position: fixed;
    overflow: visible;
    width: auto;
    height: auto;
    top: var(--gap);
    right: var(--gap);
}

img {
    opacity: 0;
    transition: opacity 1s ease-out;
}

img.loaded {
    opacity: 1;
}

@media only screen and (max-width: 1300px) {
    .logo {
        height: 200px;
    }
}

@media only screen and (orientation: portrait) and (max-width: 600px) {
    .head-container {
        padding-top: 0;
        right: 4px;
        top: 8px;
    }
    .logo {
        height: 100px;
        width: 50px;
    }
}

@media only screen and (orientation: landscape) and (max-width: 700px) {
    .logo {
        // transform: rotate(90deg);
        // height: 200px;
        // width: 200px;
        // top: 0;
        // right: 0;
        float: right;
    }

    .head-container {
        padding-top: 0;
    }
}
</style>