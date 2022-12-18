<div class="apt-details">
    <div class="plans image-container columns">
        {#each flat.plans as f}
        <a 
            class="link"
            href={`/assets/${$page.params.asset}/flats/${$page.params.flat}/plans/${f.slug.current}`}
        >
        <!-- {f.dimensions} -->
            <SVGImg 
                src={f.url} 
                alt={f.title}
            />
                <!-- styl="aspectRatio: {f.dimensions.aspectRatio}"  -->
        </a>
        {/each}
    </div>

    <div class="flat-number" on:click={toggleMenu} on:keydown>
        <span>{flat.flatNumber}</span>
        {#if flat.taken}
        <div class="taken">
            <!-- {$tc('taken')} -->
        </div>
        {/if}
        <div class={[showFlatmenu ? 'show': 'hide', 'drop-down'].join(" ")}>
            <!-- {#each flat.flatlist as f}
            <div class={[checkFlat(f.flatNumber), 'flat'].join(" ")}>
                <a 
                    href={`/assets/${$page.params.asset}/flats/${f.slug}`}
                >{f.flatNumber}</a>
            </div>
            {/each} -->
        </div>
    </div>

    <h1 class="apt-name">{getTitle()}</h1>
    <div class="apt-description">{getTranslation("description")}</div>

    <div class="image-container columns images">
        {#each flat.images as i, idx}
        <a 
            href={`/assets/${$page.params.asset}/flats/${$page.params.flat}/images/${i.slug.current}`}
            class="link"
        >
            <!-- key="idx"  -->
            <div class="image-wrapper">
                <!-- fit="inside" -->
                <!-- :loading="true" -->
                <!-- {i.image} -->
                <IMGSrc
                    width={600}
                    dimensions={i.dimensions}
                    src={i.url}
                    alt={i.title}
                />
                    <!-- cl='img-with-caption' -->
                <div class="caption">{getCaption(i)}</div>
            </div>
        </a>
        {/each}
    </div>
</div>

<script lang="ts">
    import type { Flat, IMG } from '$lib/types'
    import { page } from '$app/stores'
    import { browserLang } from '$lib/store'
    import SVGImg from './SVGImg.svelte';
    import IMGSrc from './IMGSrc.svelte';
    export let flat = <Flat>{}
    export let showFlatmenu = false

    const loaded = (e: any) => {
        let t = e.target as HTMLElement
        t.style.opacity = "1"
    }

    const checkFlat = (f: string):string =>{
        if (flat?.flatNumber === f) {
            return 'hidden'
        } 
        return ''
    }

    const toggleMenu = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        showFlatmenu = !showFlatmenu
    }

    const getTranslation = (type: string):string => {
        if (typeof flat !== "undefined"){
            switch ($browserLang) {
                case "de":
                    return flat[type + "DE"]

                default:
                    if (typeof flat[type + "EN"] !== "undefined"){
                        return flat[type + "EN"]
                    } else {
                        return flat[type + "DE"]
                    }

            }
        }
        return ""
    }

    const getTitle = ():string => {
        if (typeof flat !== "undefined"){
            switch ($browserLang) {
                case "de":
                    return flat.titleDE

                default:
                    if (typeof flat.titleEN !== "undefined"){
                        return flat.titleEN
                    } else {
                        return flat.titleDE
                    }
            }
        }
        return ""
    }

    const getCaption = (i: IMG):string => {
        switch ($browserLang) {
            case "de":
                return i.title

            default:
                if (typeof i.titleEN !== "undefined"){
                    return i.titleEN
                } else {
                    return i.title
                }
        }
    }
</script>

<style lang="scss" scoped>
    .svg-image {
        opacity: 0;
        transition: opacity 1s;
    }
    .hidden {
        z-index: 100;
        opacity: .3;
        pointer-events: none;
        &:hover{
            cursor: default;
        }
    }
    .show {
        opacity: 1;
    }
    .hide {
        opacity: 0;
    }
    .drop-down {
        position: absolute;
        transition: opacity 1s;
        background-color: transparent;
    }
    .flat {
        color: lightgray;
        &:hover {
            color: darkgray;
            cursor: pointer;
        }
    }
    .link {
        display: block;
    }
    
    .image-wrapper {
        position: relative;
        padding-bottom: var(--gap-rel);
        break-inside: avoid;
        // display: block;
    }
    .caption {
        display: inline;
        height: 0;
        position: absolute;
        left: 0;
        bottom: calc(var(--gap-rel) - 8px);
    }
    .flat-number {
        z-index: 100;
        top: var(--gap);
        position: sticky;
        font-size: 60px;
        line-height: 60px;
        grid-area: left;
        min-width: 100px;
        grid-area: left2;
    
        &:hover {
            cursor: pointer;
        }
    }
    
    .apt-description {
        // padding-top: var(--gap);
        grid-area: centre3;
        // width: 100%;
    }
    .images {
        height: auto;
        width: 100%;
        padding-bottom: var(--gap);
        grid-area: centre4;
    }
    
    .taken {
        font-size: large;
        position: relative;
        color: red;
        text-transform: uppercase;
        line-height: 0;
        padding-top: 6px;
    }
    
    .plans {
        grid-area: centre1;
        padding-bottom: var(--gap);
        height: auto;
        width: 100%;
    }
    
    .image-container {
        // display: block;
        position: relative;
        // padding-top: var(--gap);
        margin: auto;
    }
    
    .columns {
        columns: 2;
        column-gap: var(--gap-rel);
    }
    
    .apt-name {
        // @include font-large;
        font-size: 32px;
        font-weight: bold;
        padding-bottom: calc(var(--gap)/2);
        grid-area: centre2;
    }
    
    
    .apt-description {
        grid-area: centre3;
        // @include font-medium;
        font-weight: normal;
        padding-bottom: var(--gap);
    }
    
    .apt-details {
        max-width: var(--content-width);
        margin-left: auto;
        margin-right: auto;
        padding-top: var(--gap);
        padding-bottom: var(--gap);
    
        display: grid;
        grid-template-columns: 1fr 10fr 1fr;
        grid-template-areas: "left1 centre1 right1"
                             "left2 centre2 right2"
                             "left3 centre3 right3"
                             "left4 centre4 right4";
        column-gap: var(--gap-rel);
    }

    @media only screen and (max-width: 600px) {
        .taken {
            font-size: x-small;
        }
        .plans {
            margin-bottom: var(--gap-mob);
        }
        .columns {
            columns: 1;
            // gap: var(--gap-mob);
        }
        
    
        .apt-details {
            grid-template-columns: 1fr 14fr 1fr;
            max-width: var(--content-width-mob);
            padding-top: 5px;
        }
    
        .image-container {
            padding-bottom: 0;
        }
    
        .flat-number {
            font-size: 24px;
            line-height: 24px;
    
            min-width: 30px;
            grid-column-start: left3;
            grid-column-end: left3;
            // grid-row-start: content-end;
        }
    
        .apt-name {
            grid-column-start: centre3;
            grid-column-end: centre3;
            font-size: 16px;
            line-height: 20px;
            padding-bottom: 20px;
        }
        .apt-description {
            grid-column-start: left3;
            grid-column-end: centre3;
            font-size: 12px;
            line-height: 20px;
            // @include font-small;
        }
    
        .image-wrapper {
            padding-bottom: var(--gap);
        }
     
        .images {
            grid-column-start: left4;
            grid-column-end: right4;
            padding-top: var(--gap-mob);
        }
    
        .caption {
            bottom: var(--gap);
        }
    }
</style>