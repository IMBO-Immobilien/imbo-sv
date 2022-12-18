import client from "$lib/sanityClient"
import { flatQuery } from '$lib/queries'
import type { Asset, Flat } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    const asset = await client.fetch(flatQuery, {slug: ctx.params.asset}) as Asset[]
    // let flat = [] as Flat[]
    console.log("ctx.params.flat",ctx.params.flat)
    
    let flat = asset[0].flats.find(i => i.slug.current === ctx.params.flat)
    console.log("flat",flat)

    return {
        flat
    }
}