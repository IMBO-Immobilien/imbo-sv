<div>
    {#each $assetData as a}
    <a 
        class="asset-overview" 
        href="{'/assets/' + a.slug.current}"
    >
        <div class="asset front-grid">
            <!-- {{a.overviewImage.dimensions}} -->
            <div class="thumb">
                <IMGSrc
                    width={300}
                    src={a.overviewImage.url}
                    alt={a.overviewImage.alt}
                    quality={50}
                    crop={a.overviewImage.crop}
                    dimensions={a.overviewImage.dimensions}
                />
            </div>
                <!-- loading="true" -->
                <!-- fit="inside" -->
                <!-- :imgAsset="a.overviewImage" -->
            <div class="asset-text">
                <div class="asset-name">{getText(a, 'name')}</div>
                <div class="asset-description">
                    <Content blocks="{getBlocks(a, 'generalShort')}" />
                </div>
            </div>
        </div>
    </a>
    {/each}
</div>

<script lang="ts">
    import type { Asset, Block } from '$lib/types'
    import Content from './Content.svelte'
    import IMGSrc from './IMGSrc.svelte'
    import { browserLang, assetData } from '$lib/store'

    const getBlocks = (a: Asset, k: string):Block[] => {
            let keyDE = k + "DE"
            let keyEN = k + "EN"
            switch ($browserLang) {
                case "de":
                    return a[keyDE]

                default:
                    if (typeof a[keyEN] !== "undefined"){
                        return a[keyEN]
                    } else {
                        return a[keyDE]
                    }
            }
        }
    // const site = get(siteData)
    const getText = (a: Asset, k: string):string => {
        let keyDE = k + "DE"
        let keyEN = k + "EN"
        switch ($browserLang) {
            case "de":
                return a[keyDE]

            default:
                if (typeof a[keyEN] !== "undefined"){
                    return a[keyEN]
                } else {
                    return a[keyDE]
                }
        }
    }

    // export let assets:Asset[] = []
</script>

<style lang="scss">
.front-grid {
    display: grid;
    grid-template-columns: 150px 2fr;
    grid-template-areas: "thumb text";
    gap: var(--gap-rel);
}

.asset-overview {
    width: 50vw;
    color: black;
}
.asset-text {
    // width: 50vw;
    color: black;
    grid-area: text;
}
.asset-name {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: calc(var(--gap) / 2);
}
.thumb {
    grid-area: thumb;
}
.asset-description {
    // grid-area: text;
    font-size: 17px;
    line-height: 24px;
}

</style>