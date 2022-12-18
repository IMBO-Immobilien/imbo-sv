<div class="apt-details">
    <div class="plans image-container columns">
        {#each flat.plans as f}
        <a 
            class="link"
            href={`/assets/${$page.params.asset}/flat/plans/${f.slug.current}`}
        >
        {f.dimensions}
            <!-- <SVGImg 
                src={f.url} 
                alt={f.title}
                /> -->
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
                    href={`/assets/${$page.params.asset}/flat/${f.slug}`}
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
            href={`/assets/${$page.params.asset}/flat/${i.slug}/images/${i.slug.current}`}
            class="link"
        >
            <!-- key="idx"  -->
            <div class="image-wrapper">
                <!-- fit="inside" -->
                <!-- :loading="true" -->
                {i.image}
                <!-- <IMGSrc
                    width={600}
                    dimensions={i.dimensions}
                    src={i.url}
                    alt={i.title}
                /> -->
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