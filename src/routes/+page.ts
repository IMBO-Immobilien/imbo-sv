import client from "$lib/sanityClient"
import { siteData } from '$lib/queries'

/** @type {import('./$types').PageLoad} */
export const load = async () =>{
    const site = await client.fetch(siteData)

    return {
        site: site
    }
}