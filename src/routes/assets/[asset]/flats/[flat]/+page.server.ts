import client from "$lib/sanityClient"
import { imageQuery } from '$lib/queries'
import type { Asset, Flat } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    const asset = await client.fetch(imageQuery, {slug: ctx.params.asset}) as Asset[]
    let flat = [] as Flat[]

    flat.forEach((i, idx:number) => {
        if (i.slug.current === ctx.params.flat) {
        }
    })

    return {
        flat
    }
}