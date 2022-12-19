<div 
    class="img-container" 
>
    <img
        style="aspect-ratio: {dimensions.aspectRatio.toString()};"
        src={ getURL() }
        alt={ alt }
        loading="lazy"
        width="100%"
        height="auto"
        class:loaded 
        bind:this={ thisImage }
    >
    {#if copyright.name}
    <div class="copyright">{ copyright.name }</div>
    {/if}
</div>
<script lang="ts">
import { onMount } from 'svelte'
import type { Dimensions, Crop, People } from '$lib/types'
export let dimensions = <Dimensions>{} 
export let copyright = <People>{}
export let crop = <Crop>{}
// export let hotspot:Hotspot
// export let imgAsset:IMG
export let aspectRatio = "1"
// export let height = 500
export let width = 1200
export let quality = 70
export let src = ""
export let alt = ""
export let thisImage = <HTMLImageElement>{}

export let loaded = false

onMount(() => {
    thisImage.onload = () => {
        loaded = true
    }
}) 

const calcCrop = (): string => {
    let left = Math.floor(dimensions.width * crop.left)
    let top = Math.floor(dimensions.height * crop.top)
    let width = Math.floor(dimensions.width - (left + dimensions.width * crop.right))
    let height = Math.floor(dimensions.height - (top + dimensions.height * crop.bottom))

    aspectRatio = (width / height).toString()

    return [left, top, width, height].join(',')
}

const getURL = ():string => { 
    if (crop?._type) {
        return `${src}?q=${quality}&w=${width}&h=${width}&rect=${calcCrop()}&fit=max&auto=format`
    }
    aspectRatio = dimensions.aspectRatio.toString()
    return `${src}?q=${quality}&w=${width}&h=${width}&fit=max&auto=format`
}
</script>

<style lang="scss">
    .img-container {
        position: relative;
        // display: block;
    }

    // .caption {
    //     position: absolute;
    //     bottom: -10px;
    // }

    // .img {
    //     position: relative;
    //     // opacity: 0;
    //     object-fit: contain;
    // }

    // .fadein {
    //     // opacity: 0;
    //     // transition: opacity 1s;
    // }

    img {
        opacity: 0;
        transition: opacity 1s ease-out;
    }

    img.loaded {
        opacity: 1;
    }

    .copyright {
        position: absolute;
        top: 0;
        left: -12px;
        writing-mode: vertical-lr;
        font-size: 10px;
    }
</style>