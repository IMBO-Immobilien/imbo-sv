import client from "$lib/sanityClient"
import { siteData } from '$lib/queries'
import type { Site } from '$lib/types'
import type { RouteParams } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load = async (params: RouteParams) =>{
    const data = await client.fetch(siteData) as Site[]
    console.log("site", data)
    console.log("site", params)

    return {
        site: data[0]
    }
}