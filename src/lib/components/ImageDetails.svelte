<div class="image-overlay">
    <div 
        id="slider"
        class="swipe"
    >
        <div class="swipe-wrap">
            {#each collection.images as i}

            <div class="image" id={imageID}>
                <IMGSrc
                    src={i.url}
                    quality={90}
                    copyright={i.author}

                    dimensions={i.dimensions}
                    alt={i.title}
                />
                    <!-- loading="true" -->
                    <!-- imageID={index} -->
                    <!-- displaySize={ "width": '100%', "height": '100%' } -->
            </div>
            {/each}
        </div>
    </div>

    <div class="bottom">
        <h1 class="text-title">
            <div>{ getTitle() } </div>
        </h1>

        <div class="bottom-align">
            <div class="image-counter">{imageIDX + 1 + ' / ' + collection?.images?.length}</div>
        </div>
    </div>

    {#if imageIDX > 0 }
    <span 
        class="arrow-container left" 
        on:click={ navLeft }
        on:keydown
    >
        <Arrow cl="ui" dir="left"/>
    </span>
    {/if}

    {#if imageIDX < collection?.images?.length - 1 }
    <span
        class="arrow-container right" 
        on:click={ navRight }
        on:keydown
    >
        <Arrow cl="ui" dir="right"/>
    </span>
    {/if}
</div>
<!-- <div>{JSON.stringify(images)}</div> -->

<script lang="ts">
    import type { Collection, IMG } from "$lib/types"
    import { onMount, onDestroy } from "svelte"
    import { browser } from '$app/environment'
    import { page } from '$app/stores'
    import { browserLang } from "$lib/store"
    import { goto } from '$app/navigation'

    import IMGSrc from './IMGSrc.svelte'
    import Arrow from './Arrow.svelte'

    import Swipe from 'swipejs'

    export let collection:Collection 
    export let imageID = "" 
    export let nextImageID = "" 
    export let imageIDX = 0
    export let upper = 0
    export let lower = 0
    export let image = <IMG>{}
    export let swiper = <Swipe>{}
    let keyListener = false

    onDestroy(() => {
        if (keyListener) {
            document.removeEventListener("keyup", doKeys)
            keyListener = false
        }
    })

    onMount(async() => {
        console.log("img details", collection.images)
        updateID(collection.currentImageID)

        if (browser){ 
            if (!keyListener) {
                document.addEventListener("keyup", doKeys)
                keyListener = true
            }
        }

        swiper = new Swipe(document.getElementById('slider') as HTMLElement, {
            startSlide: imageIDX,
            speed: 400,
            draggable: true,
            disableScroll: true,
            stopPropagation: true,
            callback: index=> {
                updateIDX(index)
                let p = $page.params
                p.img = image.slug.current

                // let r = $router.resolve({
                //     name: $route.name as string,
                //     params: p
                // })

                // window.history.replaceState({}, "", r.href)
                // this.$nuxt.$emit('replaceState', r.route.params)
            }
        })
    })

    const updateID = (id: string) => {
        // console.log("id", id)
        imageID = id
        imageIDX = parseInt(id.replace("image-", ""), 10)
        upper = imageIDX + 1
        lower = imageIDX - 1
        image = collection.images[imageIDX] || {}
    }
        
    const updateIDX = (idx: number) => {
        // console.log("idx", idx)
        imageID = "image-" + idx.toString()
        imageIDX = idx
        image = collection.images[idx] || {}
        // prepare next image
        nextImageID = "image-" + (idx + 1)
        let el = document.getElementById(nextImageID) as HTMLImageElement
        if (el) {
            el.loading = "eager"
        }
    }

    const navLeft = () => {
        if (imageIDX > 0) {
            swiper.prev()
        }
    }

    const navRight = () => {
        if (imageIDX < collection?.images?.length - 1) {
            swiper.next()
        }
    }

    const getTitle = ():string => {
        // console.log("image", this.image)
        // return this.image.title
        // let t = ""
        switch ($browserLang) {
            case "de":
                return image.title

            default:
                if (image.titleEN){
                    return image.titleEN
                }
                return image.title
        }
    }

    const getCopyright = ():string => {
        let a = ""
        if (typeof image.author !== "undefined" && image.author !== null) {
            a = "©"+image.author
            // a = "©"+image.author.name
        }
        return a
    }
    
    const back = () => {
        document.body.style.backgroundColor = '#ffffff'
        goto(-1)
        // $router.go(-1)
    }

    const doKeys = (e: KeyboardEvent) => {
        e.preventDefault()
        switch (e.key) {
            case "ArrowLeft":
                navLeft()
                break;
            case "ArrowRight":
                navRight()
                break;
            case "Escape":
                back()
                break;
        
            default:
                break;
        }
    }
</script>

<style lang="scss" scoped>

    .swipe {
        overflow: hidden;
        visibility: hidden;
        position: relative;
    }
    
    .swipe-wrap {
        // overflow: hidden;
        position: relative;
        height: 100vh;
        display: flex;
    }
    
    .swipe-wrap > div {
        // height: 80vh;
        position: relative;
        align-self: center;
    }
    
    .image {
        // max-width: 100vw;
        // max-height: 100vh;
        object-fit: contain;
    }
    // .type, .text-title {
    //     // font-weight: bold;
    // }
    
    .date {
        font-weight: normal;
    }
    
    .caption, .text-title {
        h1 {
            font-size: large;
            // @include font-medium;
        }
    }
    
    .imgCopyright {
        color: gray;
        font-size: small;
    }
    
    .text-header {
        padding-bottom: 20px;
    }
    
    .text-title {
        margin-top: auto;
    }
    
    .bottom-align {
        display: flex;
        flex-direction: row-reverse;
    }
    
    .bottom {
        display: grid;
        grid-auto-columns: 1fr 90px;
        grid-auto-flow: column;
        position: absolute;
        right: 45px;
        left: 45px;
        bottom: 45px;
    }
    
    .image-counter {
        position: absolute;
        text-align: right;
        width: 100%;
        font-size: 13px;
        line-height: 21px;
        bottom: 0;
        right: 24px;
    }
    
    .image-overlay {
        background-color: transparent;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    </style>