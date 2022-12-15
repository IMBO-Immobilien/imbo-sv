import client from "$lib/sanityClient"
import { siteData } from '$lib/queries'
import type { Site } from '$lib/types'

/** @type {import('./$types').PageLoad} */
export const load = async () =>{
    const site = await client.fetch(siteData) as Site

    return {
        site: site
    }
}