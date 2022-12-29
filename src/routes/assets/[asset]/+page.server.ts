import client from "$lib/sanityClient"
import { assetQuery } from '$lib/queries'
import type { Asset } from '$lib/types'
import type { RouteParams, PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
export const prerender = true

export const load:PageServerLoad = async (ctx: { params: RouteParams }) =>{
    let assetFetch = <Asset>{}
    try {
        assetFetch = await client.fetch(assetQuery, { asset: ctx.params.asset }) as Asset
        return {
            asset: assetFetch
        }
    } catch (err) {
        console.error(err)
        throw error(404, '[asset] error '+ err)
    }
}