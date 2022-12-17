import client from "$lib/sanityClient"
import { assetQuery } from '$lib/queries'
import type { Asset } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    console.log("params", ctx.params.asset)
    const assetFetch = await client.fetch(assetQuery, {slug: ctx.params.asset}) as Asset[]

    return {
        asset: assetFetch
    }
}