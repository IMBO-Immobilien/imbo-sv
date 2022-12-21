import client from "$lib/sanityClient"
import { flatQuery } from '$lib/queries'
import type { Asset } from '$lib/types'
import type { RouteParams } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    if (!ctx.params.asset) {
        console.log("asset undefined [asset]")
    }

    try {
        const { flat } = await client.fetch(flatQuery, {asset: ctx.params.asset, flat: ctx.params.flat}) as Asset
    
        return {
            flat
        }
    } catch (error) {
        console.error(error)
    }
}