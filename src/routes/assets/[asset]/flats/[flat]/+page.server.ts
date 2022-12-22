import client from "$lib/sanityClient"
import { flatQuery } from '$lib/queries'
import type { Asset, Flat } from '$lib/types'
import type { RouteParams } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    let flat = <Flat>{}
    try {
        ({ flat } = await client.fetch(flatQuery, {
            asset: ctx.params.asset, 
            flat: ctx.params.flat
        }) as Asset)
    
    } catch (error) {
        console.error(error)
    }
    return {
        flat
    }
}