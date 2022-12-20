import client from "$lib/sanityClient"
import { siteDataQuery, assetOverviewQuery } from '$lib/queries'
// import type { Site, Asset } from '$lib/types'
// import type { RouteParams } from './$types'

// import { siteData, assetData } from '$lib/store'

// export const prerender = true

// /** @type {import('./$types').PageServerLoad} */
// export const load = async (params: RouteParams) =>{
//     const siteFetch = await client.fetch(siteDataQuery) as Site[]
//     siteData.set(siteFetch[0])
    
//     const assetFetch = await client.fetch(assetOverviewQuery) as Asset[]
//     assetData.set(assetFetch)

//     return {
//         site: siteFetch[0],
//         assets: assetFetch
//     }
// }
export {}