<div class="copyright-container">
    <Content blocks={getCopyright()} />
</div>

<script lang="ts">
    import { browserLang } from "$lib/store"
    import type { Site, Block } from "$lib/types"
    import Content from "./Content.svelte"

    export let site:Site 
    const getCopyright = ():Block[] => {
            switch ($browserLang) {
                case "de":
                    if (typeof site.copyrightDE !== "undefined"){
                        return site.copyrightDE
                    }
                    // return md.render(this.site.copyrightDE / + this.site.extendedCopyrightDE)

                default:
                    if (typeof site.copyrightEN !== "undefined"){
                        return site.copyrightEN
                    } else if (typeof site.copyrightDE !== "undefined"){
                        return site.copyrightDE
                    }
            }
            return []
        }
</script>