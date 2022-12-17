<div class="image-overlay">
    <!-- <div 
        id="slider"
        class="swipe"
    >
        <div class="swipe-wrap">
            <div class="image" v-for="(i, index) in collection.images" :key="'key-'+index">
                <img-src
                    :src="i.url"
                    :quality="90"
                    :copyright="i.author"

                    :dimensions="i.dimensions"
                    :imageID="index"
                    :alt="i.title"
                    :loading="true"
                    :displaySize="{ width: '100%', height: '100%' }"
                />
            </div>
        </div>
    </div> -->
    <Swiper class="mySwiper">
        {#each collection.images as i, idx}
        <SwiperSlide >{i.title}</SwiperSlide>
        {/each}
    </Swiper>

    <!-- <div class="bottom">
        <h1 class="text-title">
            <div>{{ getTitle() }} </div>
        </h1>

        <div class="bottom-align">
            <div class="image-counter">{{imageIDX + 1 + ' / ' + collection.images.length}}</div>
        </div>
    </div>

    <span 
        v-if="imageIDX > 0"
        class="arrow-container left" 
        @click="navLeft()"
    >
        <Arrow class="ui" dir="left"/>
    </span>

    <span
        v-if="imageIDX < collection.images.length - 1"
        class="arrow-container right" 
        @click="navRight()"
    >
        <Arrow class="ui" dir="right"/>
    </span> -->
</div>
<!-- <div>{JSON.stringify(images)}</div> -->

<script lang="ts">
    import type { Collection } from "$lib/types"
    import { Swiper, SwiperSlide } from "swiper/svelte"



    export let current = "image-0"
    export let collection:Collection 
</script>