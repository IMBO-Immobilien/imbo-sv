import client from "$lib/sanityClient"
import { siteDataQuery, assetOverviewQuery } from '$lib/queries'
import type { Site, Asset } from '$lib/types'

import { siteData, assetData } from '$lib/store'

/** @type {import('./$types').externalFetch} */
export const load = async () =>{
    const siteFetch = await client.fetch(siteDataQuery) as Site[]
    siteData.set(siteFetch[0])
    
    const assetFetch = await client.fetch(assetOverviewQuery) as Asset[]
    assetData.set(assetFetch)

    return {
        site: siteFetch[0],
        assets: assetFetch
    }
}