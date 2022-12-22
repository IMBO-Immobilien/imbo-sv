<div class="obj-details">
    <div class="obj-images columns">
        {#if Array.isArray(asset.images)}
        {#each asset.images as i}
        <a 
            href={`/assets/${$page.params.asset}/images/${i.slug.current}`}
            class="image-link"
            style="aspect-ratio: { i.dimensions.aspectRatio.toString() };"
        >
        <div class="img-with-caption" >
            <IMGSrc
                dimensions={i.dimensions}
                copyright={i.author}
                width={500}
                quality={80}
                src={i.url}
                alt={i.title}
                crop={i.crop}
            />
        </div>
        </a>
        {/each}
        {/if}
    </div>

    <div class="text-container">
        <h1 class="obj-name" >{getName()}</h1>
        <div class="obj-general">
            <Content blocks={getBlocks('general')} />
        </div>

        <div class="obj-flats">
            {#if Array.isArray(asset.flats)}
            {#each asset.flats as f}
            <a
                class="flat-list" 
                href={`/assets/${$page.params.asset}/flats/${f.slug.current}`}
            >
                <!-- href={`assets-asset-flat', params:{asset: asset.slug.current, flat: f.slug.current}}" -->
                <div class="floorplan-mini">
                    <SVGImg 
                        src={f.plans[0].url}
                        alt={f.plans[0].title}
                        dimensions={f.plans[0].dimensions}
                    />
                </div>

                <div class="name">
                    <!-- <div class="flat-number">{f.flatNumber} <span class="taken" v-if="f.taken">{$tc('taken')}</span></div>
                    <div class="room-number">{f.rooms + ' ' + $tc('rooms')}</div>
                    <div class="flat-position"><span>{floor(f.flatNumber)}</span><span>{$tc(f.position) }</span></div> -->
                </div>
            </a>
            {/each}
            {/if}
        </div>

        <!-- <Download v-if="asset.form" :dl="asset.form" /> -->

        <div class="more-info">
            <div class="obj-surroundings">
                <Content blocks={getBlocks('surroundings')} />
            </div>
            <div class="obj-garage">
                <Content blocks={getBlocks('garage')} />
            </div>
            <div class="obj-architecture">
                <Content blocks={getBlocks('architecture')} />
            </div>
        </div>

    </div>
</div>

<script lang="ts">
    import IMGSrc from '$lib/components/IMGSrc.svelte'
    import Content from '$lib/components/Content.svelte'
    import SVGImg from '$lib/components/SVGImg.svelte'
    import type { Asset, Block } from '$lib/types'
    import { browserLang } from '$lib/store'
    import { page } from '$app/stores'

    export let asset = <Asset>{}

    // const floor = (n: string) => {
    //     switch (n.split(".").shift()) {
    //         case "0":
    //             return this.$tc('ground_floor')
    //         case "1":
    //             return this.$tc('first_floor')
    //         case "2":
    //             return this.$tc('second_floor')
    //         default:
    //             break;
    //     }
    // }

    const getName = ():string => {
            switch ($browserLang) {
                case "de":
                    return asset.nameDE

                default:
                    if (typeof asset.nameEN !== "undefined"){
                        return asset.nameEN
                    } else {
                        return asset.nameDE
                    }
            }
        }

    const getBlocks = (k: string):Block[] => {
            let keyDE = k + "DE"
            let keyEN = k + "EN"
            switch ($browserLang) {
                case "de":
                    return asset[keyDE]
                default:
                    if (typeof asset[keyEN] !== "undefined"){
                        return asset[keyEN]
                    } else {
                        return asset[keyDE]
                    }
            }
        }
</script>

<style lang="scss">
    .image-link {
        display: block;
        height: auto;
        width: 100%;
    }

    .obj-images {
        display: block;
        position: relative;

    }

    .img-with-caption {
        padding-bottom: var(--gap-rel);
        width: 100%;
        height: auto;
    }
    
    .columns {
        columns: 2;
        column-gap: var(--gap-rel);
    }

    // .icon {
    //     width: 20px;
    //     height: 20px;
    // }
    
    .more-info {
        padding-top: var(--gap);
    }
    
    // .flat-position {
    //     span:first-child {
    //         padding-right: 5px;
    //     }
    // }

    // .flat-number {
    //     font-size: 56px;
    //     padding-bottom: 10px;
    // }

    // .taken {
    //     padding: 0;
    //     margin: 0;
    //     display: inline;
    //     font-size: 12px;
    //     line-height: 12px;
    //     color: red;
    //     text-transform: uppercase;
    // }

    .text-container {
        display: block;
        position: relative;
        max-width: var(--text-width);
        padding-bottom: var(--gap);
        margin: auto;
        font-size: 17px;
        line-height: 24px;
        // @include font-medium;
    }
    
    // .obj-info {
    //     padding-top: var(--gap);
    //     padding-bottom: var(--gap);
    // }
    
    .obj-name {
        font-size: 32px;
        font-weight: bold;
        padding-bottom: var(--gap);
    }
    
    // .obj-description {
    //     font-size: 17px;
    //     line-height: 27px;
    // }

    // p {
    //     strong {
    //         font-size: 24px!important;
    //     }
    // }
    
    .obj-images {
        display: block;
        position: relative;
        // height: 45vw;
        padding-top: var(--gap);
        // padding-bottom: calc(var(--gap) * 2);
    }
    
    .flat-list {
        font-size: 17px;
        line-height: 27px;
        display: grid;
        grid-auto-columns: 1fr 1fr;
        grid-auto-rows: 350px;
        grid-template-areas: "left right";
        gap: var(--gap-rel);
    
        &:hover {
            .floorplan-mini {
                filter: brightness(95%);
            }
        }
    }
    
    .obj-flats {
        padding-top: var(--gap);
        padding-bottom: var(--gap);
        max-width: var(--text-width);
        margin: auto;
    }
    
    .floorplan-mini {
        transition: filter .5s;
        grid-area: left;
        height: 80%;
        width: 100%;
    }

    .name {
        grid-area: right;
        padding-top: var(--gap);
    }
    
    .obj-details {
        // max-width: var(--content-width);
        max-width: var(--text-width);
        margin-left: auto;
        margin-right: auto;
        padding-bottom: var(--gap);
        display: block;
        position: relative;
        // overflow: scroll;
    }
    
    @media only screen and (orientation: portrait) and (max-width: 600px) {
        .obj-details {
            max-width: var(--content-width-mob);
        }
    
        // .text-container {
        //     // @include font-small;
        // }
    
        .obj-name {
            font-size: 17px;
            line-height: 20px;
            // @include font-medium;
            // font-weight: bold;
        }
    
        // .obj-description {
        //     font-size: 13px;
        //     line-height: 20px;
        // }
    
        .flat-list {
            font-size: 17px;
            line-height: 27px;
            display: grid;
            // grid-auto-columns: 1fr 2fr;
            grid-auto-rows: 250px;
        }
    
        .obj-images {
            // height: 45vw;
            width: 100%;
            padding-top: 0;
            // padding-top: var(--gap-mob);
            padding-bottom: var(--gap-mob);
        }
    }
    
</style>