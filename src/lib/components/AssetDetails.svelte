<div class="obj-details">
    <div class="obj-images columns">
        {#each asset.images as i, idx}
        <a 
            href={`/assets/${$page.params.asset}/images/${i.slug.current}`}
            class="image-link"
        >
        <!-- fit={"inside"} -->
        <!-- loading="true" -->
        <div class="img-with-caption">
            <IMGSrc
                dimensions={i.dimensions}
                width={500}
                src={i.url}
                alt={i.title}
                crop={i.crop}
            />
        </div>
        </a>
        {/each}
    </div>

    <div class="text-container">
        <h1 class="obj-name" >{getBlocks('title')}</h1>
        <div class="obj-general">
            <Content blocks={getBlocks('general')} />
        </div>

        <!-- <div class="obj-flats">
            {#each asset.flats as f}
            <a
                class="flat-list" 
                key={f.slug.current}
                href={`assets-asset-flat', params:{asset: asset.slug.current, flat: f.slug.current}}"
            >
                <SVGImg 
                    :src="f.plans[0].url"
                    :alt="f.plans[0].title"
                    :styl="{aspectRatio: f.plans[0].dimensions.aspectRatio}" 
                    class="floorplan-mini"
                />

                <div class="name">
                    <div class="flat-number">{{f.flatNumber}} <span class="taken" v-if="f.taken">{{$tc('taken')}}</span></div>
                    <div class="room-number">{{f.rooms + ' ' + $tc('rooms')}}</div>
                    <div class="flat-position"><span>{{floor(f.flatNumber)}}</span><span>{{$tc(f.position) }}</span></div>
                </div>
            </a>
            {/each}
        </div> -->

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
    import type { Asset } from '$lib/types'

    let asset = <Asset>{}

    import { browserLang } from '$lib/store'

    import { page } from '$app/stores'
    
    const getBlocks = (k: string) => {
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