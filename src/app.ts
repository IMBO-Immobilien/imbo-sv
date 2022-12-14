import client from "$lib/sanityClient"
import { siteData } from '$lib/queries'

export let get = async () => {
    let site = await client.fetch(siteData)
    console.log("site", site)
    return {
        site
    }
}

