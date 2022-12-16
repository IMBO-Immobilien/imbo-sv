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
import { Dimensions, type People, type Crop, type Hotspot, type IMG } from '$lib/types'
let dimentions = Dimensions{}
let copyright = People{}
let crop = Crop{}

</script>