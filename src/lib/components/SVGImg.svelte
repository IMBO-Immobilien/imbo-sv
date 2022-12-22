<img 
    class:loaded 
    bind:this={ thisImage }
    alt={alt}
    style="aspect-ratio:{dimensions.aspectRatio.toString()}"
    loading="lazy"
    width="100%"
    height="100%"
>

<script lang="ts">
    import { onMount } from "svelte"
    import type { Dimensions } from "$lib/types"
    export let src = ""
    export let alt = ""
    export let loaded = false
    export let dimensions = <Dimensions>{}

    let thisImage = <HTMLImageElement>{}

    onMount(()=>{
        thisImage.onload = (e: any) => {
            // console.log("loaded!", e)
            loaded = true
        }
        thisImage.src = src
    })


</script>

<style lang="scss">
    img {
        opacity: 0;
        transition: opacity 1s ease-out;
    }

    img.loaded {
        opacity: 1;
    }
// .svg-image {
//     opacity: 0;
//     transition: opacity 1s;
// }
</style>