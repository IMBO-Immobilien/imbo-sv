import client from "$lib/sanityClient"
import { flatQuery } from '$lib/queries'
import type { Asset, Flat } from '$lib/types'
import type { RouteParams, PageServerLoad } from './$types'

export {} //  const prerender = true

export const load = (async (ctx: {params: RouteParams}) =>{
    let flat = <Flat>{}
    try {
        ({ flat } = await client.fetch(flatQuery, {
            asset: ctx.params.asset, 
            flat: ctx.params.flat
        }) as Asset)

        console.log("flat", flat.flatlist)
    
    } catch (error) {
        console.error(error)
    }

    return {
        flat
    }
}) satisfies PageServerLoad