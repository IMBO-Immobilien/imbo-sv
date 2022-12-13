<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">
            <!-- {site} -->
            <!-- <Content class="welcome" :blocks="greet()" /> -->
            <!-- <Content class="company" :blocks="site.companyName" /> -->
        </div>
    </h1>
    <div class="">
        <!-- <Overview /> -->
    </div>
</div>

<script lang="ts">
    /** @type {import('./$types').PageData} */
    // import { site } from '../lib/store'

    import client from "$lib/sanityClient"
    // import type { Site } from '../lib/types'
    // let site = [] as  Site[]

    const site = async ()=> {
            let s = await client.fetch(
            /* groq */ `*[_type == "site"]{
                ...,
                "logo": logo {
                    ...,
                    caption,
                    "url": image.asset->url,
                    "dimensions": asset->metadata.dimensions
                },
                "opengraph": opengraph {
                    ...,
                    "image": image{
                        "url": asset->url,
                        "dimensions": asset.metadata->dimensions,
                    }
                },
                "about": about {
                    management[]->{
                        name
                    },
                    webDesign[]->{
                        name
                    }
                }
            }`,
                // { _id }
            )
            console.log("s",s)
        }
        console.log("site",site)

        // if (!site) {
        //     return {
        //         status: 404,
        //     }
        // }

        // console.log("site", site)

        // return {
        //     body: {
        //         site,
        //     },
        // }
    // }
    // export let site
  
    // console.log($site) // [{ slug: 'profile', title: 'Profile' }, ...]
</script>
