import client from "$lib/sanityClient"
import { assetQuery } from '$lib/queries'
import type { Asset } from '$lib/types'
import type { RouteParams } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    if (!ctx.params.asset) {
        console.log("asset undefined [asset]")
    }

    try {
        const assetFetch = await client.fetch(assetQuery, {asset: ctx.params.asset}) as Asset
    
        return {
            asset: assetFetch
        }
    } catch (error) {
        console.error(error)
    }
}