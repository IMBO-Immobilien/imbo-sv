import client from "$lib/sanityClient"
import { siteData } from '$lib/queries'
import type { Site } from '$lib/types'
import type { RouteParams } from './$types'

import { site } from '$lib/store'

/** @type {import('./$types').PageServerLoad} */
export const load = async (params: RouteParams) =>{
    const data = await client.fetch(siteData) as Site[]
    console.log("site", data)
    console.log("site", params)
    const setSiteData=() =>{
        site.set(data[0])
    }

    return {
        site: data[0]
    }
}