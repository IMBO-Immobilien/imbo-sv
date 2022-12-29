import client from "$lib/sanityClient"
import { error } from '@sveltejs/kit'
import { flatQuery } from '$lib/queries'
import type { Asset, Flat } from '$lib/types'
import type { RouteParams, PageServerLoad } from './$types'
export const prerender = true

export const load:PageServerLoad = async(ctx: { params: RouteParams }) =>{
    let flat = <Flat>{}
    try {
        ({ flat } = await client.fetch(flatQuery, {
            asset: ctx.params.asset, 
            flat: ctx.params.flat
        }) as Asset)

    } catch (err) {
        console.error(err)
        throw error(404, '[flat] error '+err)
    }

    return {
        flat
    }
}