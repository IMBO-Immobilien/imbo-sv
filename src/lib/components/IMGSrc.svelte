<div 
    class="img-container" 
    width="100%"
    height="auto"
>
    <img
        on:load|self={ loaded }
        loading={ lazy }
        style="aspect-ratio: {dimensions.aspectRatio.toString()};"
        
        width="100%"
        height="auto"
        alt={ alt }
        class="fadein img"
        src={ getURL() }
    >
        <!-- on:load={ e => loaded } -->
</div>

<script lang="ts">

import type { Dimensions, Crop, People } from '$lib/types'
export let dimensions = <Dimensions>{} 
// export let copyright:People
export let crop = <Crop>{}
// export let hotspot:Hotspot
// export let imgAsset:IMG
export let opacity = "1"
export let aspectRatio = "1"
// export let height = 500
export let width = 1200
export let quality = 70
export let src = ""
export let alt = ""
export let lazy = "lazy"
export let copyright = <People>{}

const loaded = (e: any) => {
    console.log("loaded", e)
    let t = e.target as HTMLElement
    t.style.opacity = "1"
}

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
        display: block;
    }
    .caption {
        position: absolute;
        bottom: -10px;
    }
    .img {
        position: relative;
        // max-width: 100vw;
        // max-height: 80vh;
        object-fit: contain;
        // width: 100%;
        // height: auto;
    }
    .fadein {
        opacity: 0;
        transition: opacity 1s;
    }
    // .fitinside {
    //     object-fit: contain;
    // }
</style>