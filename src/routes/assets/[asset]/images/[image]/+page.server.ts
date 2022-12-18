import client from "$lib/sanityClient"
import { imageQuery } from '$lib/queries'
import type { Asset, Collection } from '$lib/types'
import type { RouteParams } from './$types'

// export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export const load = async (ctx: {params: RouteParams}) =>{
    const asset = await client.fetch(imageQuery, {slug: ctx.params.asset}) as Asset[]
    let collection = {} as Collection
    collection.images = asset[0].images
    collection.currentImageID = "image-0"
    collection.images.forEach((i, idx:number) => {
        if (i.slug.current === ctx.params.image) {
            collection.currentImageID = 'image-' + idx
        }
    })

    return {
        collection
    }
}