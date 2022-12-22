import client from "$lib/sanityClient"
import { assetQuery } from '$lib/queries'
import type { Asset } from '$lib/types'
import type { RouteParams } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    let assetFetch = <Asset>{}
    try {
        assetFetch = await client.fetch(assetQuery, { asset: ctx.params.asset }) as Asset
    } catch (error) {
        console.error(error)
    }
    return {
        asset: assetFetch
    }
}