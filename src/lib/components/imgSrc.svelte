<div class="img-container">
    <img
        src={getURL()}
        style={
            ...opacity, 
            aspectRatio: aspectRatio
        }
        width="100%"
        height="auto"
        alt="alt"
        @load="loaded"
        class="fitinside fadein img"
        loading="lazy"
    >
</div>

<script lang="ts">
declare interface Style {
    [tag: string]: string
}
import { Dimensions, type People, type Crop, type Hotspot, type IMG } from '$lib/types'
export let dimentions = Dimensions{}
export let copyright = People{}
export let crop = Crop{}
export let hotspot = Hotspot{}
export let imgAsset = IMG{}
export let opacity = Style{}
export let height = 500
export let width = 1200
export let src = ""
export let alt = ""
export let lazy = "lazy"

</script>