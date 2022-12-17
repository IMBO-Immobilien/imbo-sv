import client from "$lib/sanityClient"
import { imageQuery } from '$lib/queries'
import type { Asset, Collection } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    const asset = await client.fetch(imageQuery, {slug: ctx.params.asset}) as Asset[]
    let coll = {} as Collection
    coll.images = asset[0].images
    let currentImageID = "image-0"
    coll.images.forEach((i, idx:number) => {
        if (i.slug.current === ctx.params.image) {
            currentImageID = 'image-' + idx
        }
    })

    return {
        coll, currentImageID
    }
}