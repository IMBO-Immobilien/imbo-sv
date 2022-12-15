// import client from "$lib/sanityClient"
// import { siteDataQuery } from '$lib/queries'
// import type { Site } from '$lib/types'
// import type { RouteParams } from './$types'

// import { siteData } from '$lib/store'

// /** @type {import('./$types').PageServerLoad} */
// export const load = async (params: RouteParams) =>{
//     const data = await client.fetch(siteDataQuery) as Site[]
//     console.log("site", data)
//     console.log("site", params)
//     const setSiteData=() =>{
//         siteData.set(data[0])
//     }

//     return {
//         site: data[0]
//     }
// }