<div>
    <!-- <h2>Unsere Angebote</h2> -->
    {#each assets as a}
    <a 
        class="asset-overview" 
        href="{'/assets-asset' + a.slug.current}"
    >
        <div class="asset front-grid">
            <!-- {{a.overviewImage.dimensions}} -->
            <img-src
                :width="300"
                :src="a.overviewImage.url"
                :quality="50"
                :crop="a.overviewImage.crop"
                :dimensions="a.overviewImage.dimensions"
                fit="inside"
                :loading="true"
                class="thumb"
            />
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
    import { browserLang } from '$lib/store'

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

    export let assets:Asset[] = []
</script>